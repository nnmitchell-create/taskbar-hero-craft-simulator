const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

// ==========================================
// 設定 (Settings)
// ==========================================
const STEAM_APPID = 3678970; // TBH: Task Bar Hero
const SLEEP_MS = 7000;       // IPブロックを避けるためのスリープ時間 (7秒)

// SteamのログインセッションCookie (要貼付)
// ブラウザでSteamコミュニティにログインし、デベロッパーツールで 'steamLoginSecure' Cookieの値をコピーしてここに貼り付けてください。
// 例: const STEAM_COOKIE = 'steamLoginSecure=76561199xxxxxxxxx%7C%7Cxxxxxxxxxxxxxxxx';
const STEAM_COOKIE = 'steamLoginSecure=76561198321356323%7C%7CeyAidHlwIjogIkpXVCIsICJhbGciOiAiRWREU0EiIH0.eyAiaXNzIjogInI6MDAwQ18yODUyMzVEMl8zMTI3RSIsICJzdWIiOiAiNzY1NjExOTgzMjEzNTYzMjMiLCAiYXVkIjogWyAid2ViOmNvbW11bml0eSIgXSwgImV4cCI6IDE3ODExNDI2MjMsICJuYmYiOiAxNzcyNDE1NjUzLCAiaWF0IjogMTc4MTA1NTY1MywgImp0aSI6ICIwMDE1XzI4NTIzNUNGXzJBMjgxIiwgIm9hdCI6IDE3ODEwNTU2NTIsICJydF9leHAiOiAxNzk5MzA4MDQ0LCAicGVyIjogMCwgImlwX3N1YmplY3QiOiAiMTQuMTEuMTYwLjAiLCAiaXBfY29uZmlybWVyIjogIjE0LjExLjE2MC4wIiB9.aqZgAvlYtXtpma3GIhwRO2cwsGzyfVto0XBOglrfuevXRNJpucN8nxT-RLejRTlnp_uI6R1g7ht36EbNN-5kAQ'; 

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
// 例: "May 27 2026 01: +0" -> "2026-05-27"
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

// HTMLから item_nameid を抽出
function extractItemNameId(html) {
  const match = html.match(/Market_LoadOrderSpread\(\s*(\d+)\s*\)/);
  return match ? match[1] : null;
}

// HTMLから販売件数(listings)を抽出するフォールバック
function extractListingsFromSummary(summaryHtml) {
  if (!summaryHtml) return 0;
  const match = summaryHtml.match(/<span[^>]*>(\d+)<\/span>/);
  return match ? parseInt(match[1]) : 0;
}

// ==========================================
// メイン処理
// ==========================================
async function main() {
  console.log('--- Steamマーケットデータ初回一括取得開始 ---');
  if (!STEAM_COOKIE) {
    console.warn('【注意】STEAM_COOKIE が設定されていません。取引履歴の取得に失敗する可能性があります。');
  }

  // market_init.js のロード (実際にマーケットに存在するアイテム名のリストを取得)
  const initJsPath = path.join(__dirname, '../data/market_init.js');
  let activeMarketNames = new Set();
  if (fs.existsSync(initJsPath)) {
    try {
      const initJsContent = fs.readFileSync(initJsPath, 'utf8');
      global.window = {};
      const sandboxInit = {};
      const evalInit = initJsContent.replace(/var (DEFAULT_MARKET_DATA) =/g, 'sandboxInit.$1 =');
      eval(evalInit);
      const defaultData = window.DEFAULT_MARKET_DATA || sandboxInit.DEFAULT_MARKET_DATA;
      if (defaultData) {
        defaultData.forEach(mi => {
          if (mi.hash_name) activeMarketNames.add(mi.hash_name);
          if (mi.name) activeMarketNames.add(mi.name);
        });
      }
    } catch (e) {
      console.warn('market_init.js のパースに失敗しました。', e);
    }
  }
  console.log(`実際にマーケットに存在するユニークアイテム名: ${activeMarketNames.size} 件`);

  // WIKI_ITEMS のロード
  const dataJsPath = path.join(__dirname, '../data/data.js');
  if (!fs.existsSync(dataJsPath)) {
    console.error('data.js が見つかりません。');
    return;
  }
  
  const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
  const sandbox = {};
  const evalContent = dataJsContent.replace(/var (WIKI_META|WIKI_ITEMS|WIKI_CHESTS|WIKI_EFFECTS|WIKI_HEROES|WIKI_RUNES|WIKI_PETS) =/g, 'sandbox.$1 =');
  eval(evalContent);
  
  const tradableItems = sandbox.WIKI_ITEMS.filter(it => {
    if (it.tradable !== true) return false;
    
    let hashName = it.name;
    if (it.type === 'GEAR') {
      const gradeStr = it.grade.charAt(0) + it.grade.slice(1).toLowerCase();
      const keyStr = String(it.key);
      let suffix = '';
      if (keyStr.endsWith('1')) {
        suffix = 'A';
      } else if (keyStr.endsWith('2')) {
        suffix = 'B';
      }
      hashName = suffix ? `${it.name} (${gradeStr}) ${suffix}` : `${it.name} (${gradeStr})`;
    }
    
    return activeMarketNames.has(hashName);
  });
  console.log(`取引可能アイテム数 (マーケット実績あり): ${tradableItems.length} 件`);

  // 出力先
  const dbPath = path.join(__dirname, '../data/market_db.js');
  let marketDb = {};

  // 既存のDBがあれば読み込んでマージできるようにする
  if (fs.existsSync(dbPath)) {
    try {
      const existingContent = fs.readFileSync(dbPath, 'utf8');
      const sandboxDb = {};
      const evalDb = existingContent.replace(/window\.MARKET_DB =/g, 'sandboxDb.MARKET_DB =');
      eval(evalDb);
      if (sandboxDb.MARKET_DB) {
        marketDb = sandboxDb.MARKET_DB;
        console.log('既存のデータベースをロードしました。既存アイテム数:', Object.keys(marketDb).length);
      }
    } catch (e) {
      console.warn('既存データベースのパースに失敗しました。新規作成します。', e);
    }
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': STEAM_COOKIE
  };

  for (let i = 0; i < tradableItems.length; i++) {
    const item = tradableItems[i];
    
    // アイテム名の構築 (装備品は Vengeance Sword (Celestial) A 形式、素材等はそのままの名称)
    let hashName = item.name;
    if (item.type === 'GEAR') {
      const gradeStr = item.grade.charAt(0) + item.grade.slice(1).toLowerCase();
      const keyStr = String(item.key);
      let suffix = '';
      if (keyStr.endsWith('1')) {
        suffix = 'A';
      } else if (keyStr.endsWith('2')) {
        suffix = 'B';
      }
      hashName = suffix ? `${item.name} (${gradeStr}) ${suffix}` : `${item.name} (${gradeStr})`;
    }
    
    console.log(`[${i + 1}/${tradableItems.length}] ${hashName} (Key: ${item.key}) を取得中...`);

    try {
      // 1. マーケット詳細ページHTMLを取得して React SSR データからすべて抽出
      const encodedName = encodeURIComponent(hashName);
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
      
      let historyData = [];
      let orderbookObj = { bids: [], asks: [] };
      let sellPrice = undefined;
      let listings = 0;
      
      queryData.queries.forEach(q => {
        if (q.queryKey && q.queryKey[1] === 'pricehistory') {
          const data = q.state.data;
          if (data && data.prices) {
            const releaseLimit = new Date('2026-05-27');
            const endLimit = new Date('2026-06-09T23:59:59Z');
            
            data.prices.forEach(p => {
              const dateStr = formatTimestamp(p.time);
              const d = new Date(dateStr);
              if (d >= releaseLimit && d <= endLimit) {
                historyData.push({
                  date: dateStr,
                  price: Math.round(p.price_median),
                  volume: parseInt(p.purchases)
                });
              }
            });
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

      // 4. ローカルDBに格納
      marketDb[item.key] = {
        name: item.name,
        hash_name: hashName,
        item_nameid: null,
        sell_price: sellPrice,
        listings: listings,
        history: historyData,
        orderbook: orderbookObj,
        updated_at: Math.floor(Date.now() / 1000)
      };

      // 毎回書き出して進捗を保存 (安全策)
      const jsContent = `window.MARKET_DB = ${JSON.stringify(marketDb, null, 2)};`;
      fs.writeFileSync(dbPath, jsContent, 'utf8');

    } catch (err) {
      console.error(`  -> エラーが発生しました:`, err.message);
    }

    console.log(`待ち時間 (${SLEEP_MS}ms) を挟みます...`);
    await sleep(SLEEP_MS);
  }

  console.log('--- すべての取得が完了しました ---');
}

main().catch(console.error);
