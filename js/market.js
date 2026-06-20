/* ──────────────────────────────────────────────
   OFFERING GACHA SIMULATOR LOGIC
   ────────────────────────────────────────────── */
let isOfferingInitialized = false;
let offeringHistory = [];
let offeringStats = {
  totalPulls: 0,
  totalGoldSpent: 0,
  totalCoinsSpent: 0,
  totalRevenue: 0,
  netProfit: 0,
  pulledCounts: {} // grade -> count
};

function initOfferingGacha() {
  if (isOfferingInitialized) return;
  if (!globalItems || globalItems.length === 0) {
    setTimeout(initOfferingGacha, 100);
    return;
  }
  if (!globalOfferingLoot) {
    fetch('data/offering_loot_table.json')
      .then(r => r.json())
      .then(data => {
        globalOfferingLoot = data;
        initOfferingGacha();
      })
      .catch(err => {
        console.error("Failed to fetch offering loot table:", err);
        setTimeout(initOfferingGacha, 500);
      });
    return;
  }
  isOfferingInitialized = true;

  const select = document.getElementById('offeringCoinSelect');
  if (select) {
    select.innerHTML = '';
    globalOfferingLoot.coins.forEach((coin, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      const name = (typeof currentLang !== 'undefined' && currentLang === 'ja') 
        ? (coin.name['ja-JP'] || coin.name['en-US']) 
        : (coin.name['en-US'] || coin.name['ja-JP']);
      option.textContent = `${name} (${coin.coinGrade})`;
      select.appendChild(option);
    });
  }

  updateOfferingCoinDetails();
}

window.onOfferingCoinChange = function() {
  updateOfferingCoinDetails();
};

function formatNumberWithCommas(num) {
  if (num == null || isNaN(num)) return '0';
  return Math.round(num).toLocaleString();
}

function updateOfferingCoinDetails() {
  const select = document.getElementById('offeringCoinSelect');
  if (!select || !globalOfferingLoot) return;
  const coinIdx = parseInt(select.value, 10);
  if (isNaN(coinIdx)) return;
  const coin = globalOfferingLoot.coins[coinIdx];
  if (!coin) return;

  // コイン画像と価格入力欄の更新
  const coinItem = globalItems.find(it => it.key === coin.itemKey);
  
  const iconImg = document.getElementById('offeringSelectedCoinIcon');
  if (iconImg) {
    if (coinItem && coinItem.icon) {
      iconImg.onerror = () => {
        iconImg.style.display = 'none';
      };
      iconImg.src = `data/icon_cache/${coinItem.icon}.png`;
      iconImg.style.display = 'block';
    } else {
      iconImg.style.display = 'none';
    }
  }

  let coinMarketPrice = 0;
  if (coinItem) {
    const mData = getMarketDataForItem(coinItem);
    const price = getItemPriceByBasis(mData, coinItem);
    if (price !== null && price !== undefined) {
      coinMarketPrice = price;
    }
  }
  const priceInput = document.getElementById('offeringCoinPriceInput');
  if (priceInput) {
    priceInput.value = coinMarketPrice;
  }

  // ゴールド手数料の更新
  const goldCostEl = document.getElementById('offeringGoldCostText');
  if (goldCostEl) {
    goldCostEl.textContent = formatNumberWithCommas(coin.goldCost);
  }

  // 確率テーブルの表示更新
  const oddsList = document.getElementById('offeringOddsList');
  if (oddsList) {
    oddsList.innerHTML = '';
    coin.odds.forEach(odd => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.justify = 'space-between';
      row.style.alignItems = 'center';
      row.style.padding = '8px 12px';
      row.style.background = 'rgba(255,255,255,0.02)';
      row.style.border = '1px solid var(--border-soft)';
      row.style.borderRadius = '8px';

      const label = document.createElement('span');
      label.textContent = odd.grade;
      label.style.color = getGradeColor(odd.grade);
      label.style.fontWeight = '700';
      label.style.fontSize = '13px';

      const rightArea = document.createElement('div');
      rightArea.style.display = 'flex';
      rightArea.style.gap = '12px';
      rightArea.style.fontSize = '13px';

      const pct = document.createElement('span');
      pct.textContent = `${odd.pct.toFixed(2)}%`;
      pct.style.fontFamily = "'Rajdhani'";
      pct.style.fontWeight = '700';

      const itemsInGrade = globalItems.filter(it => it.obtainable === true && it.type !== 'STAGEBOX' && it.grade === odd.grade);
      const ct = document.createElement('span');
      ct.textContent = `(${itemsInGrade.length} items)`;
      ct.style.color = 'var(--text-sec)';

      rightArea.appendChild(pct);
      rightArea.appendChild(ct);

      row.appendChild(label);
      row.appendChild(rightArea);
      oddsList.appendChild(row);
    });
  }

  calculateOfferingEV();
}



window.calculateOfferingEV = function() {
  const select = document.getElementById('offeringCoinSelect');
  if (!select || !globalOfferingLoot) return;
  const coinIdx = parseInt(select.value, 10);
  if (isNaN(coinIdx)) return;
  const coin = globalOfferingLoot.coins[coinIdx];
  if (!coin) return;

  const priceInput = document.getElementById('offeringCoinPriceInput');
  const coinMarketPrice = priceInput ? (parseFloat(priceInput.value) || 0) : 0;
  const costPerPull = coinMarketPrice;

  let totalEvRevenue = 0;

  coin.odds.forEach(odd => {
    const pct = odd.pct / 100;
    const itemsInGrade = globalItems.filter(it => it.obtainable === true && it.type !== 'STAGEBOX' && it.grade === odd.grade);
    if (itemsInGrade.length === 0) return;

    let priceSum = 0;
    itemsInGrade.forEach(item => {
      const mData = getMarketDataForItem(item);
      const price = getItemPriceByBasis(mData, item);
      priceSum += (price !== null && price !== undefined) ? price : 0;
    });
    const avgPrice = priceSum / itemsInGrade.length;
    totalEvRevenue += avgPrice * pct;
  });

  const netProfit = totalEvRevenue - costPerPull;
  const roi = costPerPull > 0 ? (netProfit / costPerPull) * 100 : 0;

  const evRevenueEl = document.getElementById('offeringEvRevenue');
  const evCostEl = document.getElementById('offeringEvCost');
  const evProfitEl = document.getElementById('offeringEvProfit');
  const evRoiEl = document.getElementById('offeringEvRoi');

  if (evRevenueEl) evRevenueEl.textContent = `¥${formatNumberWithCommas(Math.round(totalEvRevenue))}`;
  if (evCostEl) evCostEl.textContent = `¥${formatNumberWithCommas(Math.round(costPerPull))}`;
  if (evProfitEl) {
    evProfitEl.textContent = `${netProfit >= 0 ? '+' : ''}¥${formatNumberWithCommas(Math.round(netProfit))}`;
    evProfitEl.style.color = netProfit >= 0 ? 'var(--gain)' : 'var(--loss)';
  }
  if (evRoiEl) {
    evRoiEl.textContent = `${netProfit >= 0 ? '+' : ''}${roi.toFixed(1)}%`;
    evRoiEl.style.color = netProfit >= 0 ? 'var(--gain)' : 'var(--loss)';
  }
};

window.setOfferingSimCount = function(count) {
  const input = document.getElementById('offeringSimCountInput');
  if (input) {
    input.value = count;
  }
};

window.runOfferingSimulation = function() {
  offeringHistory = [];
  offeringStats = {
    totalPulls: 0,
    totalGoldSpent: 0,
    totalCoinsSpent: 0,
    totalRevenue: 0,
    netProfit: 0,
    pulledCounts: {}
  };

  const input = document.getElementById('offeringSimCountInput');
  const count = input ? (parseInt(input.value, 10) || 1000) : 1000;
  
  const select = document.getElementById('offeringCoinSelect');
  if (!select || !globalOfferingLoot) return;
  const coinIdx = parseInt(select.value, 10);
  if (isNaN(coinIdx)) return;
  const coin = globalOfferingLoot.coins[coinIdx];
  if (!coin) return;

  const priceInput = document.getElementById('offeringCoinPriceInput');
  const coinMarketPrice = priceInput ? (parseFloat(priceInput.value) || 0) : 0;

  const allowedGrades = new Set(coin.odds.map(o => o.grade));
  const pool = globalItems.filter(it => it.obtainable === true && it.type !== 'STAGEBOX' && allowedGrades.has(it.grade));
  if (pool.length === 0) return;

  const poolByGrade = {};
  allowedGrades.forEach(g => {
    poolByGrade[g] = pool.filter(it => it.grade === g);
  });

  let cumulativeOdds = [];
  let sum = 0;
  coin.odds.forEach(odd => {
    sum += odd.pct;
    cumulativeOdds.push({ grade: odd.grade, limit: sum });
  });
  const totalOddsLimit = sum;

  let newResults = [];

  for (let i = 0; i < count; i++) {
    const rnd = Math.random() * totalOddsLimit;
    const pickedGradeObj = cumulativeOdds.find(o => rnd <= o.limit) || cumulativeOdds[cumulativeOdds.length - 1];
    const grade = pickedGradeObj.grade;

    const itemsInGrade = poolByGrade[grade];
    if (!itemsInGrade || itemsInGrade.length === 0) continue;
    const item = itemsInGrade[Math.floor(Math.random() * itemsInGrade.length)];

    const mData = getMarketDataForItem(item);
    const price = getItemPriceByBasis(mData, item) || 0;

    offeringStats.totalPulls++;
    offeringStats.totalGoldSpent += coin.goldCost;
    offeringStats.totalCoinsSpent += 1;
    offeringStats.totalRevenue += price;
    offeringStats.pulledCounts[grade] = (offeringStats.pulledCounts[grade] || 0) + 1;

    if (count <= 100 || i >= count - 100) {
      newResults.push({
        item: item,
        price: price
      });
    }
  }

  offeringStats.netProfit = offeringStats.totalRevenue - (offeringStats.totalGoldSpent * 0 + offeringStats.totalCoinsSpent * coinMarketPrice); // コスト算出基準
  offeringHistory = newResults.concat(offeringHistory).slice(0, 100);

  updateOfferingSimUI(coin, coinMarketPrice);
};

function updateOfferingSimUI(coin, coinMarketPrice) {
  const simCostEl = document.getElementById('offeringSimCost');
  const simCostDetailEl = document.getElementById('offeringSimCostDetail');
  const simRevenueEl = document.getElementById('offeringSimRevenue');
  const simProfitEl = document.getElementById('offeringSimProfit');
  const simRoiEl = document.getElementById('offeringSimRoi');

  const totalCost = offeringStats.totalCoinsSpent * coinMarketPrice;
  const roi = totalCost > 0 ? (offeringStats.netProfit / totalCost) * 100 : 0;

  if (simCostEl) simCostEl.textContent = `¥${formatNumberWithCommas(Math.round(totalCost))}`;
  if (simCostDetailEl) {
    simCostDetailEl.textContent = `(${formatNumberWithCommas(offeringStats.totalCoinsSpent)} Coins)`;
  }
  if (simRevenueEl) simRevenueEl.textContent = `¥${formatNumberWithCommas(Math.round(offeringStats.totalRevenue))}`;
  if (simProfitEl) {
    simProfitEl.textContent = `${offeringStats.netProfit >= 0 ? '+' : ''}¥${formatNumberWithCommas(Math.round(offeringStats.netProfit))}`;
    simProfitEl.style.color = offeringStats.netProfit >= 0 ? 'var(--gain)' : 'var(--loss)';
  }
  if (simRoiEl) {
    simRoiEl.textContent = `${offeringStats.netProfit >= 0 ? '+' : ''}${roi.toFixed(1)}%`;
    simRoiEl.style.color = offeringStats.netProfit >= 0 ? 'var(--gain)' : 'var(--loss)';
  }

  const breakdownEl = document.getElementById('offeringSimBreakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = '';
    coin.odds.forEach(odd => {
      const count = offeringStats.pulledCounts[odd.grade] || 0;
      const pct = offeringStats.totalPulls > 0 ? (count / offeringStats.totalPulls) * 100 : 0;
      const color = getGradeColor(odd.grade);

      const card = document.createElement('div');
      card.style.background = 'rgba(255, 255, 255, 0.02)';
      card.style.border = '1px solid var(--border-soft)';
      card.style.borderTop = `3px solid ${color}`;
      card.style.borderRadius = '6px';
      card.style.padding = '8px 10px';
      card.style.textAlign = 'center';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.gap = '2px';

      const label = document.createElement('div');
      label.textContent = odd.grade;
      label.style.fontSize = '11px';
      label.style.color = 'var(--text-sec)';
      label.style.fontWeight = 'bold';

      const val = document.createElement('div');
      val.textContent = count.toLocaleString();
      val.style.fontFamily = "'Rajdhani'";
      val.style.fontSize = '16px';
      val.style.fontWeight = '700';
      val.style.color = '#ffffff';

      const pctEl = document.createElement('div');
      pctEl.textContent = `${pct.toFixed(2)}%`;
      pctEl.style.fontFamily = "'Rajdhani'";
      pctEl.style.fontSize = '11px';
      pctEl.style.color = 'var(--text-sec)';

      card.appendChild(label);
      card.appendChild(val);
      card.appendChild(pctEl);
      breakdownEl.appendChild(card);
    });
  }

  const logEl = document.getElementById('offeringSimLogs');
  if (logEl) {
    logEl.innerHTML = '';
    if (offeringHistory.length === 0) {
      logEl.innerHTML = `<div style="text-align:center; color:var(--text-sec); padding:20px;">シミュレーションをまだ実行していません</div>`;
    } else {
      const gradeOrder = {
        COSMIC: 10,
        DIVINE: 9,
        CELESTIAL: 8,
        BEYOND: 7,
        ARCANA: 6,
        IMMORTAL: 5,
        LEGENDARY: 4,
        RARE: 3,
        UNCOMMON: 2,
        COMMON: 1
      };
      const sortedHistory = [...offeringHistory].sort((a, b) => {
        const orderA = gradeOrder[a.item.grade] || 0;
        const orderB = gradeOrder[b.item.grade] || 0;
        if (orderB !== orderA) {
          return orderB - orderA;
        }
        return b.price - a.price;
      });
      sortedHistory.forEach(log => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justify = 'space-between';
        div.style.padding = '6px 8px';
        div.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)';
        div.style.gap = '10px';
        div.style.cursor = 'pointer';
        div.style.transition = 'background 0.2s ease, transform 0.1s ease';
        div.style.borderRadius = '4px';

        div.onmouseenter = () => {
          div.style.background = 'rgba(255, 255, 255, 0.05)';
        };
        div.onmouseleave = () => {
          div.style.background = 'transparent';
        };

        div.onclick = () => {
          if (typeof showItemDetail === 'function') {
            showItemDetail(log.item.key);
          }
        };

        const left = document.createElement('div');
        left.style.display = 'flex';
        left.style.alignItems = 'center';
        left.style.gap = '8px';

        const img = document.createElement('img');
        const iconName = log.item.icon || 'Item_910011';
        img.onerror = () => {
          img.src = `https://taskbarherowiki.com/icons/${iconName}.png`;
          img.onerror = () => { img.style.display = 'none'; };
        };
        img.src = `data/icon_cache/${iconName}.png`;
        img.style.width = '24px';
        img.style.height = '24px';
        img.style.imageRendering = 'pixelated';
        img.style.borderRadius = '4px';
        img.style.background = 'var(--bg-secondary)';
        img.style.border = '1px solid var(--border)';

        const nameSpan = document.createElement('span');
        let displayName = log.item.name_ja || log.item.name;
        if (log.item.type === 'GEAR') {
          const keyStr = String(log.item.key);
          if (keyStr.endsWith('1')) displayName += ' A';
          else if (keyStr.endsWith('2')) displayName += ' B';
        }
        nameSpan.textContent = displayName;
        nameSpan.style.color = getGradeColor(log.item.grade);
        nameSpan.style.fontWeight = '600';

        const gradeSpan = document.createElement('span');
        gradeSpan.textContent = `[${log.item.grade}]`;
        gradeSpan.style.fontSize = '10px';
        gradeSpan.style.color = 'var(--text-sec)';

        left.appendChild(img);
        left.appendChild(nameSpan);
        left.appendChild(gradeSpan);

        const priceSpan = document.createElement('span');
        priceSpan.textContent = log.price > 0 ? `¥${formatNumberWithCommas(log.price)}` : '¥0';
        priceSpan.style.fontFamily = "'Rajdhani'";
        priceSpan.style.fontWeight = '700';
        priceSpan.style.color = log.price > 0 ? 'var(--gain)' : 'var(--text-sec)';

        div.appendChild(left);
        div.appendChild(priceSpan);
        logEl.appendChild(div);
      });
    }
  }
}

window.resetOfferingSimulation = function() {
  offeringHistory = [];
  offeringStats = {
    totalPulls: 0,
    totalGoldSpent: 0,
    totalCoinsSpent: 0,
    totalRevenue: 0,
    netProfit: 0,
    pulledCounts: {}
  };

  const select = document.getElementById('offeringCoinSelect');
  if (select && globalOfferingLoot) {
    const coinIdx = parseInt(select.value, 10);
    const coin = globalOfferingLoot.coins[coinIdx];
    const coinItem = globalItems.find(it => it.key === coin.itemKey);
    let coinMarketPrice = 0;
    if (coinItem) {
      const mData = getMarketDataForItem(coinItem);
      const price = getItemPriceByBasis(mData, coinItem);
      if (price !== null && price !== undefined) {
        coinMarketPrice = price;
      }
    }
    updateOfferingSimUI(coin, coinMarketPrice);
  }
};

function formatGold(val) {
  if (val === null || val === undefined || isNaN(val)) return '-';
  return Math.round(val).toLocaleString() + ' G';
}

function getActiveRecipesByCat(cat) {
  if (cat === 'main')  return RECIPES;
  if (cat === 'sub')   return SUB_RECIPES;
  if (cat === 'armor') return ARMOR_RECIPES;
  if (cat === 'acc')   return ACC_RECIPES;
  return RECIPES;
}

// Return the active RECIPES array based on current category
function getActiveRecipes() {
  return getActiveRecipesByCat(activeCat);
}
function getActiveCur() {
  if (activeCat === 'main')  return cur;
  if (activeCat === 'sub')   return subCur;
  if (activeCat === 'armor') return armorCur;
  if (activeCat === 'acc')   return accCur;
  return cur;
}

function getDatasetTimestamp(items) {
  if (!items || !Array.isArray(items) || items.length === 0) return 0;
  let maxTime = 0;
  items.forEach(it => {
    if (it.updated_at && typeof it.updated_at === 'number') {
      if (it.updated_at > maxTime) maxTime = it.updated_at;
    }
  });
  return maxTime;
}

function initMarketCache() {
  try {
    if (typeof window.MARKET_DB !== 'undefined' && window.MARKET_DB) {
      console.log('Using MARKET_DB');
      marketItemsMap = {};
      Object.keys(window.MARKET_DB).forEach(key => {
        const mi = window.MARKET_DB[key];
        mi.key = key;
        mi.id = key;
        
        // Format sell_price_text if invalid/undefined
        if (mi.sell_price_text === undefined || mi.sell_price_text === null || mi.sell_price_text === 'undefined' || mi.sell_price_text === 'null') {
          if (mi.sell_price !== undefined && mi.sell_price !== null) {
            mi.sell_price_text = '¥' + Math.round(mi.sell_price).toLocaleString();
          } else {
            mi.sell_price_text = '—';
          }
        }
        
        // Format last_sold_price_text if invalid/undefined
        if (mi.last_sold_price_text === undefined || mi.last_sold_price_text === null || mi.last_sold_price_text === 'undefined' || mi.last_sold_price_text === 'null') {
          if (mi.last_sold_price !== undefined && mi.last_sold_price !== null) {
            mi.last_sold_price_text = '¥' + Math.round(mi.last_sold_price).toLocaleString();
          } else {
            mi.last_sold_price_text = '—';
          }
        }

        marketItemsMap[key] = mi;
        if (mi.hash_name) marketItemsMap[mi.hash_name] = mi;
        if (mi.name) marketItemsMap[mi.name] = mi;
      });
      return;
    }

    const cachedStr = localStorage.getItem('tbh_market_cache');
    let cachedItems = null;
    if (cachedStr) {
      try {
        cachedItems = JSON.parse(cachedStr);
        // If the cache contains JPY converted data, discard it so we fall back to raw USD default
        if (cachedItems && cachedItems.some(it => it._convertedToJpy || (it.sell_price_text && (it.sell_price_text.includes('¥') || it.sell_price_text.includes('円'))))) {
          cachedItems = null;
          localStorage.removeItem('tbh_market_cache');
        }
      } catch (e) {
        console.error('Failed to parse cached market data', e);
      }
    }
    
    let defaultItems = (typeof window.DEFAULT_MARKET_DATA !== 'undefined') ? window.DEFAULT_MARKET_DATA : null;
    
    const cachedTime = getDatasetTimestamp(cachedItems);
    const defaultTime = getDatasetTimestamp(defaultItems);
    
    let items = null;
    if (cachedItems && cachedTime >= defaultTime) {
      items = cachedItems;
      console.log('Using cached market data (Timestamp: ' + cachedTime + ')');
    } else if (defaultItems) {
      items = defaultItems;
      console.log('Using default market data (Timestamp: ' + defaultTime + ')');
      try {
        localStorage.setItem('tbh_market_cache', JSON.stringify(defaultItems));
      } catch (err) {
        console.error('Failed to save default items to localStorage', err);
      }
    }
    
    if (items) {
      marketItemsMap = {};
      items.forEach(mi => {
        if (mi.key === undefined && mi.id !== undefined) mi.key = mi.id;
        if (mi.id === undefined && mi.key !== undefined) mi.id = mi.key;
        
        if (mi.sell_listings !== undefined && mi.listings === undefined) {
          mi.listings = mi.sell_listings;
        }
        
        // Format sell_price_text if invalid/undefined
        if (mi.sell_price_text === undefined || mi.sell_price_text === null || mi.sell_price_text === 'undefined' || mi.sell_price_text === 'null') {
          if (mi.sell_price !== undefined && mi.sell_price !== null) {
            mi.sell_price_text = '¥' + Math.round(mi.sell_price).toLocaleString();
          } else {
            mi.sell_price_text = '—';
          }
        }
        
        // Format last_sold_price_text if invalid/undefined
        if (mi.last_sold_price_text === undefined || mi.last_sold_price_text === null || mi.last_sold_price_text === 'undefined' || mi.last_sold_price_text === 'null') {
          if (mi.last_sold_price !== undefined && mi.last_sold_price !== null) {
            mi.last_sold_price_text = '¥' + Math.round(mi.last_sold_price).toLocaleString();
          } else {
            mi.last_sold_price_text = '—';
          }
        }
        
        // Retain original USD sell prices without converting to JPY
        marketItemsMap[mi.hash_name] = mi;
        if (mi.name) marketItemsMap[mi.name] = mi;
        if (mi.name_ja) marketItemsMap[mi.name_ja] = mi;
        if (mi.key) marketItemsMap[String(mi.key)] = mi;
        if (mi.id) marketItemsMap[String(mi.id)] = mi;
      });
      
      try {
        localStorage.setItem('tbh_market_cache', JSON.stringify(items));
      } catch (err) {
        console.error('Failed to save market items to localStorage', err);
      }
    }
  } catch (e) {
    console.error('Failed to load market cache', e);
  }
  
  
  if (typeof marketItemsMap !== 'undefined' && marketItemsMap) {
    Object.keys(marketItemsMap).forEach(k => {
      const mi = marketItemsMap[k];
      if (mi) {
        if (mi.sell_price_text) mi.sell_price_text = mi.sell_price_text.replace(/₩/g, '¥');
        if (mi.last_sold_price_text) mi.last_sold_price_text = mi.last_sold_price_text.replace(/₩/g, '¥');
      }
    });
  }

  if (typeof globalChests !== 'undefined' && globalChests && globalChests.length > 0) {
    updateRankingsData();
    renderRankedList();
  }
}

function getMarketDataForItem(item) {
  if (!item) return null;
  
  // 1. アイテムのキー（数値/文字列）による完全一致マッピング (最も正確で混同が防げる)
  const keyStr = String(item.key);
  if (marketItemsMap[keyStr]) {
    return marketItemsMap[keyStr];
  }
  
  // 2. 装備 (GEAR) 以外の場合のみ、名前による完全一致 (素材・ルーン・宝箱等)
  if (item.type !== 'GEAR') {
    if (marketItemsMap[item.name]) {
      return marketItemsMap[item.name];
    }
  }
  
  // 3. 装備 (GEAR) の場合の高度なマッチング
  if (item.type === 'GEAR' && item.grade) {
    const gradeStr = item.grade.charAt(0) + item.grade.slice(1).toLowerCase();
    
    // まずキーからsuffixを判定 (A/Bは別アイテムなので相互フォールバックさせない)
    let suffix = '';
    if (keyStr.endsWith('1')) {
      suffix = 'A';
    } else if (keyStr.endsWith('2')) {
      suffix = 'B';
    }
    
    if (suffix) {
      const namePatternA = `${item.name} (${gradeStr}) ${suffix}`;
      if (marketItemsMap[namePatternA]) return marketItemsMap[namePatternA];
      
      // 接尾辞なしパターンも試す
      const namePatternNoSuffix = `${item.name} (${gradeStr})`;
      if (marketItemsMap[namePatternNoSuffix]) return marketItemsMap[namePatternNoSuffix];
      
      return null; // AとBの間でのフォールバックは防ぐため、ここまでにヒットしなければnull
    }
    
    // suffixが特定できない場合の一般的なフォールバック
    const namePatternVarA = `${item.name} (${gradeStr}) A`;
    if (marketItemsMap[namePatternVarA]) return marketItemsMap[namePatternVarA];
    
    const namePatternVarB = `${item.name} (${gradeStr}) B`;
    if (marketItemsMap[namePatternVarB]) return marketItemsMap[namePatternVarB];
    
    const namePatternNoSuffix = `${item.name} (${gradeStr})`;
    if (marketItemsMap[namePatternNoSuffix]) return marketItemsMap[namePatternNoSuffix];
  }
  
  return null;
}

function get24hVolume(mData) {
  if (!mData || !mData.history || !Array.isArray(mData.history) || mData.history.length === 0) {
    return 0;
  }
  const recent24 = mData.history.slice(-24);
  let total = 0;
  recent24.forEach(h => {
    total += h.volume || 0;
  });
  return total;
}

