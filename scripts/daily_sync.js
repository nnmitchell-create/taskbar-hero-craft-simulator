const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

// ==========================================
// 設定 (Settings)
// ==========================================
const STEAM_APPID = 3678970; // TBH: Task Bar Hero
const SLEEP_MS = 3000;       // IPブロックを避けるためのスリープ時間 (3秒)

// SteamのログインセッションCookie (要貼付)
// 安全な運用のために、環境変数 STEAM_COOKIE があればそちらを優先します。
const STEAM_COOKIE = process.env.STEAM_COOKIE || ''; 

// ==========================================
// ユーティリティ関数
// ==========================================
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

// 日付文字列を 'YYYY-MM-DD' 形式に変換
const monthMap = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
function parseSteamDate(dateStr) {
  try {
    const parts = dateStr.split(' ');
    if (parts.length >= 3) {
      const month = monthMap[parts[0]];
      const day = parts[1].padStart(2, '0');
      const year = parts[2];
      if (month && day && year) {
        return `${year}-${month}-${day}`;
      }
    }
  } catch (e) {
    // Ignore
  }
  return null;
}

function formatTimestamp(ts) {
  const d = new Date(ts * 1000);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ==========================================
// メイン処理
// ==========================================
async function main() {
  console.log('--- Steamマーケットデータ日次増分同期開始 ---');

  const dbPath = path.join(__dirname, '../data/market_db.js');
  if (!fs.existsSync(dbPath)) {
    console.error('market_db.js が存在しません。先に initial_fetch.js を実行してデータベースを初期作成してください。');
    return;
  }

  // 既存データベースのロード
  let marketDb = {};
  try {
    const dbContent = fs.readFileSync(dbPath, 'utf8');
    const sandboxDb = {};
    const evalDb = dbContent.replace(/window\.MARKET_DB =/g, 'sandboxDb.MARKET_DB =');
    eval(evalDb);
    if (sandboxDb.MARKET_DB) {
      marketDb = sandboxDb.MARKET_DB;
      console.log('データベースを正常にロードしました。登録アイテム数:', Object.keys(marketDb).length);
    }
  } catch (e) {
    console.error('データベースの読み込み・パースに失敗しました。', e);
    return;
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': STEAM_COOKIE
  };

  const itemKeys = Object.keys(marketDb);

  for (let i = 0; i < itemKeys.length; i++) {
    const key = itemKeys[i];
    const itemDb = marketDb[key];
    
    console.log(`[${i + 1}/${itemKeys.length}] ${itemDb.hash_name} (Key: ${key}) を更新中...`);

    try {
      const encodedName = encodeURIComponent(itemDb.hash_name);
      const listingsUrl = `https://steamcommunity.com/market/listings/${STEAM_APPID}/${encodedName}`;
      const listingsHtml = await fetchUrl(listingsUrl, headers);
      
      // vm を使って SSR データを解析
      const target = 'window.SSR.loaderData';
      const idx = listingsHtml.indexOf(target);
      if (idx === -1) {
        console.warn(`  -> window.SSR.loaderData が見つかりません。スキップします。`);
        await sleep(2000);
        continue;
      }
      
      const scriptStart = listingsHtml.lastIndexOf('<script', idx);
      const scriptEnd = listingsHtml.indexOf('</script>', idx);
      const scriptTagOpenEnd = listingsHtml.indexOf('>', scriptStart);
      const scriptCode = listingsHtml.slice(scriptTagOpenEnd + 1, scriptEnd);
      
      const sandbox = { window: {} };
      vm.createContext(sandbox);
      vm.runInContext(scriptCode, sandbox);
      
      const renderContext = sandbox.window.SSR.renderContext;
      if (!renderContext || !renderContext.queryData) {
        console.warn(`  -> renderContext.queryData が見つかりません。スキップします。`);
        await sleep(2000);
        continue;
      }
      
      const queryData = JSON.parse(renderContext.queryData);
      
      let historyData = itemDb.history || [];
      let orderbookObj = { bids: [], asks: [] };
      let sellPrice = itemDb.sell_price;
      let listings = itemDb.listings;
      
      const existingDates = new Set(historyData.map(h => h.date));
      const releaseLimit = new Date('2026-05-27');
      
      queryData.queries.forEach(q => {
        if (q.queryKey && q.queryKey[1] === 'pricehistory') {
          const data = q.state.data;
          if (data && data.prices) {
            data.prices.forEach(p => {
              const dateStr = formatTimestamp(p.time);
              const d = new Date(dateStr);
              if (d >= releaseLimit && !existingDates.has(dateStr)) {
                historyData.push({
                  date: dateStr,
                  price: Math.round(p.price_median),
                  volume: parseInt(p.purchases)
                });
              }
            });
            // 日付順にソート
            historyData.sort((a, b) => new Date(a.date) - new Date(b.date));
          }
        }
        
        if (q.queryKey && q.queryKey[1] === 'orderbook') {
          const data = q.state.data;
          if (data) {
            if (data.amtMinSellOrder) {
              sellPrice = data.amtMinSellOrder / 100;
            }
            listings = data.cSellOrders || 0;
            
            if (data.rgCompactBuyOrders) {
              for (let i = 0; i < data.rgCompactBuyOrders.length; i += 2) {
                orderbookObj.bids.push([
                  data.rgCompactBuyOrders[i] / 100,
                  data.rgCompactBuyOrders[i + 1]
                ]);
              }
            }
            if (data.rgCompactSellOrders) {
              for (let i = 0; i < data.rgCompactSellOrders.length; i += 2) {
                orderbookObj.asks.push([
                  data.rgCompactSellOrders[i] / 100,
                  data.rgCompactSellOrders[i + 1]
                ]);
              }
            }
          }
        }
      });
      
      console.log(`  -> 最安値: ${sellPrice !== undefined ? sellPrice + '円' : 'なし'}, 出品数: ${listings}, 履歴数: ${historyData.length} 件`);

      // 3. データベースの更新
      itemDb.sell_price = sellPrice;
      itemDb.listings = listings;
      itemDb.history = historyData;
      itemDb.orderbook = orderbookObj;
      itemDb.updated_at = Math.floor(Date.now() / 1000);

      // 進捗保存
      const jsContent = `window.MARKET_DB = ${JSON.stringify(marketDb, null, 2)};`;
      fs.writeFileSync(dbPath, jsContent, 'utf8');

    } catch (err) {
      console.error(`  -> 更新エラー:`, err.message);
    }

    await sleep(SLEEP_MS);
  }

  console.log('--- 増分同期が完了しました ---');
}

main().catch(console.error);
