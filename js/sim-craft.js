/* ──────────────────────────────────────────────
   RECIPE SELECT
────────────────────────────────────────────── */
/* ──────────────────────────────────────────────
   RECIPE SELECTION & LIST RENDERING
────────────────────────────────────────────── */
function selectRecipeByIdx(idx) {
  if (activeCat === 'main') cur = idx;
  else if (activeCat === 'sub') subCur = idx;
  else if (activeCat === 'armor') armorCur = idx;
  else if (activeCat === 'acc') accCur = idx;

  const recipes = getActiveRecipes();
  const recipe = recipes[idx];
  if (recipe) {
    // 動的に素材コストを計算して代入
    const cost = getRecipeMaterialCost(recipe);
    const currencySymbol = getMarketCurrencySymbol();
    document.getElementById('craftCost').value = Math.round(cost);
    
    // 素材表示の更新
    const nameEl = document.getElementById('matName');
    if (nameEl) {
      nameEl.style.color = recipe.matColor || 'var(--text-sec)';
      const isJa = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'ja';
      const matsList = isJa ? (recipe.mats_ja || recipe.mats) : (recipe.mats_en || recipe.mats);
      const matNameStr = isJa ? (recipe.matNameJa || recipe.matName) : (recipe.matNameEn || recipe.matName);

      if (matsList && matsList.length > 0) {
        const matsHtml = matsList.map(m => {
          const keyParam = m.key !== undefined ? m.key : `'${m.name}'`;
          return `<span class="craft-mat-link" style="cursor:pointer; text-decoration:underline; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1.0" onclick="showItemDetail(${keyParam})">${m.name}</span> x${m.count}`;
        }).join(' + ');
        nameEl.innerHTML = matsHtml;
      } else {
        nameEl.textContent = matNameStr;
      }
    }
  }

  // 右ペインの再描画と左側アクティブ切り替えのためのリスト再描画
  render();
  renderRecipeList();
}

function renderRecipeList() {
  const container = document.getElementById('craft-recipe-list');
  if (!container) return;

  const recipes = getActiveRecipesByCat(activeCat);
  const activeIdx = getActiveCur();

  // 各レシピのEV, コスト, 利益, ROIを計算
  const list = recipes.map((recipe, idx) => {
    const stats = calcEVOfRecipe(recipe, activeCat, idx);
    const profit = stats.ev - stats.cost;
    const roi = stats.cost > 0 ? (profit / stats.cost * 100) : 0;
    return { recipe, originalIdx: idx, stats, profit, roi };
  });

  // ROI（期待利益率）の降順でソート
  list.sort((a, b) => b.roi - a.roi);

  container.innerHTML = list.map(item => {
    const isActive = (item.originalIdx === activeIdx);
    const matColor = item.recipe.matColor || 'var(--text-sec)';
    
    const isJa = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'ja';
    const recipeName = isJa ? (item.recipe.name_ja || item.recipe.name) : (item.recipe.name_en || item.recipe.name);
    
    let matsText = isJa ? (item.recipe.matNameJa || item.recipe.matName) : (item.recipe.matNameEn || item.recipe.matName);
    const matsList = isJa ? (item.recipe.mats_ja || item.recipe.mats) : (item.recipe.mats_en || item.recipe.mats);
    if (matsList && matsList.length > 0) {
      matsText = matsList.map(m => `${m.name} x${m.count}`).join(' + ');
    }

    const labelMaterial = isJa ? "素材" : "Material";
    const labelCost = isJa ? "コスト" : "Cost";
    const labelEV = isJa ? "期待値" : "Expected Value";
    const labelProfit = isJa ? "期待利益" : "Expected Profit";
    const currencySymbol = getMarketCurrencySymbol();

    return `
      <div class="recipe-card ${isActive ? 'active' : ''}" onclick="selectRecipeByIdx(${item.originalIdx})">
        <div class="recipe-card-header">
          <span class="recipe-name" style="color:${isActive ? 'var(--accent)' : 'var(--text-pri)'}">${recipeName}</span>
          <span class="recipe-roi ${item.roi >= 0 ? 'roi-plus' : 'roi-minus'}">${item.roi >= 0 ? '+' : ''}${item.roi.toFixed(1)}% ROI</span>
        </div>
        <div class="recipe-card-body">
          <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; margin-bottom: 6px;">
            🪨 ${labelMaterial}: <span style="color:${matColor}; font-weight:500;">${matsText}</span>
          </div>
          <div class="recipe-card-stats">
            <span>${labelCost}: <span class="mono">${currencySymbol}${Math.round(item.stats.cost).toLocaleString()}</span></span>
            <span>${labelEV}: <span class="mono">${currencySymbol}${Math.round(item.stats.ev).toLocaleString()}</span></span>
            <span>${labelProfit}: <span class="mono ${item.profit >= 0 ? 'text-profit' : 'text-loss'}">${item.profit >= 0 ? '+' : ''}${Math.round(item.profit).toLocaleString()}</span></span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initCraft() {
  buildDynamicRecipes();
  selectCat('main');
}

/* ──────────────────────────────────────────────
   RENDER ALL
────────────────────────────────────────────── */
function render() {
  renderProbBar();
  renderTable();
  renderStats();
  if (typeof updateCraftRiskAnalysis === 'function') {
    updateCraftRiskAnalysis();
  }
}
function updateAll() { render(); }

/* ──────────────────────────────────────────────
   CATEGORY SELECT
────────────────────────────────────────────── */
const ALL_CATS = ['main', 'sub', 'armor', 'acc'];
function selectCat(cat) {
  activeCat = cat;
  ALL_CATS.forEach(c => {
    const btn = document.getElementById('cat-' + c);
    if (btn) btn.classList.toggle('active', c === cat);
  });
  
  const idx = getActiveCur();
  selectRecipeByIdx(idx);
}

// 互換性のために残す古い関数（ダミー）
function selectRecipe(idx) { selectRecipeByIdx(idx); }
function selectSubRecipe(idx) { selectRecipeByIdx(idx); }
function selectArmorRecipe(idx) { selectRecipeByIdx(idx); }
function selectAccRecipe(idx) { selectRecipeByIdx(idx); }

/* ──────────────────────────────────────────────
   PROB BAR
────────────────────────────────────────────── */
function renderProbBar() {
  const recipes = getActiveRecipes();
  const ci = getActiveCur();
  const recipe = recipes[ci];
  if (!recipe) return;
  const bar    = document.getElementById('probBar');
  const legend = document.getElementById('probLegend');
  if (!bar || !legend) return;
  bar.innerHTML = '';
  legend.innerHTML = '';
  RARITIES.forEach((r, i) => {
    const pct = recipe.rarities[i];
    const seg = document.createElement('div');
    seg.className = 'pb-seg';
    seg.style.cssText = `width:${pct}%; background:${r.color}; height:100%;`;
    seg.title = `${r.name}: ${pct}%`;
    bar.appendChild(seg);

    const li = document.createElement('div');
    li.className = 'pl-item';
    li.innerHTML = `<div class="pl-dot" style="background:${r.color}"></div>
      <span style="color:${r.color}">${r.name}</span>
      <span style="color:var(--text-sec)">${pct}%</span>`;
    legend.appendChild(li);
  });
}

function getGradeFallbackPrice(grade) {
  const g = String(grade).toLowerCase();
  
  // AI推定価格モードがONの場合
  if (typeof currentPriceDatabaseMode !== 'undefined' && currentPriceDatabaseMode === 'ai') {
    const aiPrices = {
      'common': 8.93, 'uncommon': 15.44, 'rare': 35.68,
      'legendary': 83.75, 'immortal': 80.0, 'arcana': 300.0, 'beyond': 1000.0,
      'celestial': 3800.0, 'divine': 13000.0, 'cosmic': 36000.0
    };
    return aiPrices[g] || 0;
  }
  
  const prices = {
    'common': 8.93, 'uncommon': 15.44, 'rare': 35.68,
    'legendary': 83.75, 'immortal': 224.66, 'arcana': 400.83, 'beyond': 1010.32,
    'celestial': 2745.27, 'divine': 20134.00, 'cosmic': 100000.00
  };
  return prices[g] || 0;
}

/* ──────────────────────────────────────────────
   PRICE GETTER
────────────────────────────────────────────── */
function getPrice(cat, ri, name, rk) {
  // 装備 (GEAR) のコモン、アンコモン、レアは売却不可のため強制的に0にする
  const gradeUpper = String(rk).toUpperCase();
  const foundItem = (typeof globalItems !== 'undefined') ? globalItems.find(it => {
    return it.name === name && it.grade === gradeUpper;
  }) : null;
  
  if (foundItem && foundItem.type === 'GEAR') {
    if (gradeUpper === 'COMMON' || gradeUpper === 'UNCOMMON' || gradeUpper === 'RARE') {
      return 0;
    }
  }

  const customKey = cat + '_' + ri;
  const k = name + '_' + rk;
  if (custom[customKey] && custom[customKey][k] !== undefined) return custom[customKey][k];
  const mPrice = getMarketPriceForCraft(name, rk);
  if (mPrice > 0) return mPrice;
  
  // AIモードのときの最終フォールバック (getGradeFallbackPriceが新AI推定価格を返す)
  if (typeof currentPriceDatabaseMode !== 'undefined' && currentPriceDatabaseMode === 'ai') {
    return getGradeFallbackPrice(rk);
  }
  
  const recipes = getActiveRecipesByCat(cat);
  const recipe = recipes[ri];
  if (!recipe) return 0;
  const item = recipe.items.find(it => it.name === name);
  return item && item.prices ? item.prices[rk] || 0 : 0;
}
function isEst(cat, ri, name, rk) {
  const recipes = getActiveRecipesByCat(cat);
  const recipe = recipes[ri];
  if (!recipe) return false;
  const item = recipe.items.find(it => it.name === name);
  return item && item.est && item.est[rk] ? true : false;
}

function getRarityItemCount(recipe, rk) {
  let count = 0;
  recipe.items.forEach(item => {
    if (item.prices && item.prices[rk] !== undefined) {
      count++;
    }
  });
  return Math.max(1, count);
}

/* ──────────────────────────────────────────────
   EV CALCULATION
────────────────────────────────────────────── */
function calcEVOfRecipe(recipe, cat, recipeIdx) {
  if (!recipe) return { ev: 0, maxRev: 0, winProb: 0, cost: 0 };
  const fee = 0.15;
  const cost = getRecipeMaterialCost(recipe);
  let ev = 0, maxRev = 0, winProb = 0;

  RARITIES.forEach((r, ri) => {
    const pct = recipe.rarities[ri] / 100;
    if (pct <= 0) return;
    const n_rarity = getRarityItemCount(recipe, r.key);
    recipe.items.forEach(item => {
      if (item.prices && item.prices[r.key] !== undefined) {
        const p = pct / n_rarity;
        const raw = getPrice(cat, recipeIdx, item.name, r.key);
        const net = raw * (1 - fee);
        ev += p * net;
        if (net > maxRev) maxRev = net;
        if (net > cost) winProb += p;
      }
    });
  });
  return { ev, maxRev, winProb, cost };
}

function calcEV() {
  const recipes = getActiveRecipes();
  const ci = getActiveCur();
  const recipe = recipes[ci];
  return calcEVOfRecipe(recipe, activeCat, ci);
}

/* ──────────────────────────────────────────────
   STATS
────────────────────────────────────────────── */
function renderStats() {
  const cost = parseFloat(document.getElementById('craftCost').value) || 0;
  const { ev, maxRev, winProb } = calcEV();
  const profit = ev - cost;
  
  const roi = cost > 0 ? (profit / cost * 100) : 0;
  const currencySymbol = getMarketCurrencySymbol();

  setText('sEV',   currencySymbol + ev.toFixed(2));
  setText('sCost', currencySymbol + Math.round(cost).toLocaleString());

  const pEl = document.getElementById('sProfit');
  if (pEl) {
    pEl.textContent = (profit >= 0 ? '+' : '') + currencySymbol + profit.toFixed(2);
    pEl.className   = 'stat-val ' + (profit >= 0 ? 'val-profit' : 'val-loss');
  }

  const beEl = document.getElementById('sBE');
  if (beEl) {
    beEl.textContent = (roi >= 0 ? '+' : '') + roi.toFixed(1) + '%';
    beEl.className = 'stat-val ' + (roi >= 0 ? 'val-profit' : 'val-loss');
  }

  setText('sWin', (winProb * 100).toFixed(2) + '%');
  setText('sMax', formatCurrency(maxRev, currencySymbol));
}

function updateCraftRiskAnalysis() {
  const recipes = getActiveRecipes();
  const ci = getActiveCur();
  const recipe = recipes[ci];
  
  const volValEl = document.getElementById('riskVolatilityVal');
  const volBadgeEl = document.getElementById('riskVolatilityBadge');
  const liqValEl = document.getElementById('riskLiquidityVal');
  const liqBadgeEl = document.getElementById('riskLiquidityBadge');
  const detailsContainer = document.getElementById('craftRiskDetailsContainer');
  const detailsList = document.getElementById('craftRiskDetailsList');
  
  if (!volValEl || !volBadgeEl || !liqValEl || !liqBadgeEl) return;
  if (!recipe) {
    if (detailsContainer) detailsContainer.style.display = 'none';
    return;
  }
  
  let totalWeight = 0;
  let weightedVolatility = 0;
  let weightedClearanceDays = 0;
  
  const details = [];
  const sellableRarities = ['legendary', 'immortal', 'arcana', 'beyond'];
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  RARITIES.forEach((r, ri) => {
    const pct = recipe.rarities[ri] / 100;
    if (pct <= 0) return;
    const n_rarity = getRarityItemCount(recipe, r.key);
    
    recipe.items.forEach(item => {
      if (item.prices && item.prices[r.key] !== undefined) {
        const p = pct / n_rarity; // このアイテムの単独ドロップ率
        
        // 売却可能なアイテムのみリスク計算に含める
        if (sellableRarities.includes(r.key)) {
          const mData = getMarketDataForItem(item);
          
          let volatility = 0;
          let clearanceDays = 0;
          let hasHistory = false;
          
          if (mData) {
            // ボラティリティ計算
            if (mData.history && mData.history.length > 0) {
              const prices = mData.history.map(h => h.price);
              const volumes = mData.history.map(h => h.volume);
              let totalVal = 0, totalVol = 0;
              prices.forEach((pr, pi) => {
                totalVal += pr * volumes[pi];
                totalVol += volumes[pi];
              });
              const avgPrice = totalVol > 0 ? (totalVal / totalVol) : prices[prices.length - 1];
              
              let varianceSum = 0;
              let validDays = 0;
              prices.forEach((pr, pi) => {
                if (volumes[pi] > 0) {
                  varianceSum += Math.pow(pr - avgPrice, 2) * volumes[pi];
                  validDays += volumes[pi];
                }
              });
              if (validDays > 1 && avgPrice > 0) {
                const stdDev = Math.sqrt(varianceSum / validDays);
                volatility = stdDev / avgPrice;
                hasHistory = true;
              }
            }
            // 流動性計算
            const listings = mData.listings !== undefined ? mData.listings : 0;
            const volume24h = get24hVolume(mData);
            clearanceDays = listings / (volume24h + 1);
          }
          
          totalWeight += p;
          weightedVolatility += p * volatility;
          weightedClearanceDays += p * clearanceDays;
          
          details.push({
            name: item.name,
            rarityName: r.name,
            rarityKey: r.key,
            rarityColor: r.color,
            prob: p * 100,
            volatility: volatility,
            clearanceDays: clearanceDays,
            hasHistory: hasHistory
          });
        }
      }
    });
  });
  
  if (totalWeight > 0) {
    const avgVol = weightedVolatility / totalWeight;
    const avgDays = weightedClearanceDays / totalWeight;
    
    // UI反映：価格変動リスク
    volValEl.textContent = (avgVol * 100).toFixed(1) + '%';
    if (avgVol < 0.12) {
      volBadgeEl.textContent = isEn ? '🟢 Stable' : '🟢 極めて安全';
      volBadgeEl.style.background = 'rgba(0, 230, 118, 0.1)';
      volBadgeEl.style.color = 'var(--profit)';
      volBadgeEl.style.borderColor = 'rgba(0, 230, 118, 0.2)';
    } else if (avgVol < 0.25) {
      volBadgeEl.textContent = isEn ? '🟡 Moderate Volatility' : '🟡 やや変動リスクあり';
      volBadgeEl.style.background = 'rgba(245, 166, 35, 0.1)';
      volBadgeEl.style.color = '#f5a623';
      volBadgeEl.style.borderColor = 'rgba(245, 166, 35, 0.2)';
    } else {
      volBadgeEl.textContent = isEn ? '🔴 High Volatility' : '🔴 暴落リスク高';
      volBadgeEl.style.background = 'rgba(255, 61, 106, 0.1)';
      volBadgeEl.style.color = 'var(--loss)';
      volBadgeEl.style.borderColor = 'rgba(255, 61, 106, 0.2)';
    }
    
    // UI反映：在庫消化日数
    liqValEl.textContent = avgDays.toFixed(1) + (isEn ? ' days' : '日');
    if (avgDays <= 3.0) {
      liqBadgeEl.textContent = isEn ? '🟢 High Liquidity' : '🟢 即売れ (流動性高)';
      liqBadgeEl.style.background = 'rgba(0, 230, 118, 0.1)';
      liqBadgeEl.style.color = 'var(--profit)';
      liqBadgeEl.style.borderColor = 'rgba(0, 230, 118, 0.2)';
    } else if (avgDays <= 7.0) {
      liqBadgeEl.textContent = isEn ? '🟡 Medium Liquidity' : '🟡 やや停滞';
      liqBadgeEl.style.background = 'rgba(245, 166, 35, 0.1)';
      liqBadgeEl.style.color = '#f5a623';
      liqBadgeEl.style.borderColor = 'rgba(245, 166, 35, 0.2)';
    } else {
      liqBadgeEl.textContent = isEn ? '🔴 Low Liquidity' : '🔴 塩漬けリスク大';
      liqBadgeEl.style.background = 'rgba(255, 61, 106, 0.1)';
      liqBadgeEl.style.color = 'var(--loss)';
      liqBadgeEl.style.borderColor = 'rgba(255, 61, 106, 0.2)';
    }
    
    // 詳細リストの表示
    if (details.length > 0 && detailsContainer && detailsList) {
      detailsContainer.style.display = 'flex';
      detailsList.innerHTML = details.map(d => {
        let volText = d.hasHistory ? (d.volatility * 100).toFixed(1) + '%' : (isEn ? 'No Data' : 'データ無');
        let dayText = d.clearanceDays.toFixed(1) + (isEn ? 'd' : '日');
        
        // 色分け
        let volColor = d.volatility < 0.12 ? 'var(--profit)' : (d.volatility < 0.25 ? '#f5a623' : 'var(--loss)');
        let dayColor = d.clearanceDays <= 3.0 ? 'var(--profit)' : (d.clearanceDays <= 7.0 ? '#f5a623' : 'var(--loss)');
        
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; padding:2px 0;">
            <div style="display:flex; align-items:center; gap:4px; min-width:0; flex:1;">
              <span class="rb rb-${d.rarityKey}" style="font-size:8px; padding:0 4px;">${d.rarityName}</span>
              <span style="color:${d.rarityColor}; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${d.name}</span>
              <span style="color:var(--text-faint); font-size:9px;">(${d.prob.toFixed(1)}%)</span>
            </div>
            <div style="display:flex; gap:8px; flex-shrink:0;">
              <span style="color:${volColor}; font-weight:600;" title="${isEn ? '7-day Volatility' : '7日ボラティリティ'}">📈 ${volText}</span>
              <span style="color:${dayColor}; font-weight:600;" title="${isEn ? 'Stock clearance days' : '在庫消化日数'}">⏳ ${dayText}</span>
            </div>
          </div>
        `;
      }).join('');
    } else {
      if (detailsContainer) detailsContainer.style.display = 'none';
    }
  } else {
    volValEl.textContent = '—';
    volBadgeEl.textContent = isEn ? '🟢 N/A' : '🟢 対象外';
    volBadgeEl.style.background = 'rgba(255,255,255,0.04)';
    volBadgeEl.style.color = 'var(--text-sec)';
    volBadgeEl.style.borderColor = 'var(--border)';
    
    liqValEl.textContent = '—';
    liqBadgeEl.textContent = isEn ? '🟢 N/A' : '🟢 対象外';
    liqBadgeEl.style.background = 'rgba(255,255,255,0.04)';
    liqBadgeEl.style.color = 'var(--text-sec)';
    liqBadgeEl.style.borderColor = 'var(--border)';
    
    if (detailsContainer) detailsContainer.style.display = 'none';
  }
}

function setText(id, v) { 
  const el = document.getElementById(id);
  if (el) el.textContent = v; 
}

/* ──────────────────────────────────────────────
   ITEM TABLE
────────────────────────────────────────────── */
function renderTable() {
  const recipes = getActiveRecipes();
  const ci = getActiveCur();
  const recipe = recipes[ci];
  if (!recipe) return;
  const fee    = 0.15;
  const tbody  = document.getElementById('itemTbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  RARITIES.forEach((r, ri) => {
    const pct = recipe.rarities[ri];
    if (pct <= 0) return;
    const n_rarity = getRarityItemCount(recipe, r.key);
    recipe.items.forEach(item => {
      if (item.prices && item.prices[r.key] !== undefined) {
        const prob = pct / 100 / n_rarity;
        const raw  = getPrice(activeCat, ci, item.name, r.key);
        const net  = raw * (1 - fee);
        const ev   = prob * net;
        const est  = isEst(activeCat, ci, item.name, r.key);

        const tr = document.createElement('tr');
        tr.className = 'row-' + r.key;

        const isJa = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'ja';
        const currencySymbol = getMarketCurrencySymbol();
        const labelUnsellable = isJa ? `売却不可 (${currencySymbol}0)` : `Unsellable (${currencySymbol}0)`;

        let priceCell;
        if (r.key === 'common' || r.key === 'uncommon' || r.key === 'rare') {
          priceCell = `<td style="color:var(--${r.key}); font-size:12px; text-align:right;">${labelUnsellable}</td>`;
        } else {
          priceCell = `<td class="price-cell" style="text-align:right;" onclick="editPrice(this,'${item.name}','${r.key}')" title="${isJa ? 'クリックで編集' : 'Click to edit'}">
            <span class="mono">${currencySymbol}${Math.round(raw).toLocaleString()}</span>${est ? '<span class="est-mark">⭐</span>' : ''}
          </td>`;
        }

        const gradeUpper = r.key.toUpperCase();
        const foundItem = (typeof globalItems !== 'undefined') ? globalItems.find(it => {
          return it.name === item.name && it.grade === gradeUpper;
        }) : null;
        const iconName = foundItem ? foundItem.icon : null;
        const iconHtml = iconName ? `<img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:20px; height:20px; object-fit:contain; image-rendering:pixelated; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border);" />` : '';

        const detailParam = foundItem ? foundItem.key : 'null';

        let displayName = item.name;
        if (foundItem) {
          const keyStr = String(foundItem.key);
          if (keyStr.endsWith('1')) displayName += ' A';
          else if (keyStr.endsWith('2')) displayName += ' B';
        }

        tr.innerHTML = `
          <td style="color:${r.color}; font-weight:500;">
            <div style="display:flex; align-items:center; gap:8px;">
              ${iconHtml}
              <span style="cursor:pointer; text-decoration:underline; text-underline-offset:3px;" onclick="showItemDetail(${detailParam})" title="${isJa ? '詳細を表示' : 'Show Details'}">${displayName}</span>
            </div>
          </td>
          <td style="text-align:center;"><span class="rb rb-${r.key}">${r.name}</span></td>
          <td class="mono" style="color:var(--text-sec); text-align:center;">${(prob*100).toFixed(4)}%</td>
          ${priceCell}
          <td class="mono" style="color:${ev > 0 ? 'var(--accent)' : 'var(--text-sec)'}; text-align:right;">${currencySymbol}${ev.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
      }
    });
  });
}

/* ──────────────────────────────────────────────
   PRICE EDITOR
────────────────────────────────────────────── */
function editPrice(cell, name, rk) {
  const ci = getActiveCur();
  const cur0 = getPrice(activeCat, ci, name, rk);
  const inp  = document.createElement('input');
  inp.type = 'number'; inp.value = cur0; inp.min = 0;
  inp.className = 'price-input';

  function commit() {
    const v = Math.max(0, parseInt(inp.value) || 0);
    const customKey = activeCat + '_' + ci;
    if (!custom[customKey]) custom[customKey] = {};
    custom[customKey][name + '_' + rk] = v;
    
    render();
    renderRecipeList();
  }
  inp.onblur   = commit;
  inp.onkeydown = e => { if(e.key==='Enter') inp.blur(); if(e.key==='Escape'){ inp.value=cur0; inp.blur(); } };

  cell.innerHTML = '';
  cell.appendChild(inp);
  inp.focus(); inp.select();
}

/* ──────────────────────────────────────────────
   SIM COUNT
────────────────────────────────────────────── */
function setN(n, btn) {
  N = n;
  document.querySelectorAll('.cnt-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

/* ──────────────────────────────────────────────
   CHART INIT
────────────────────────────────────────────── */
function initChart() {
  const el = document.getElementById('simChart');
  if (!el) return;
  const ctx = el.getContext('2d');
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const currencySymbol = getMarketCurrencySymbol();
  chart = new Chart(ctx, {
    type: 'bar',
    data: { labels:[], datasets:[] },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 400 },
      plugins: {
        legend: { labels:{ color:'#7a85a8', font:{ family:'Rajdhani', size:13 } } },
        title:  { display:true, text: (isEn ? 'Before Simulation' : 'シミュレーション実行前'), color:'#7a85a8',
                  font:{ family:'Rajdhani', size:14 } },
      },
      scales: {
        x: { ticks:{ color:'#7a85a8', maxRotation:0, font:{size:11} }, grid:{ color:'rgba(36,43,69,0.5)' } },
        y: { ticks:{ color:'#7a85a8', font:{size:11},
                     callback: v => currencySymbol+v.toLocaleString() },
             grid:{ color:'rgba(36,43,69,0.5)' } }
      }
    }
  });
}

/* ──────────────────────────────────────────────
   SIMULATION
────────────────────────────────────────────── */
function runSim() {
  const btn    = document.getElementById('runBtn');
  if (!btn) return;
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  btn.disabled = true; btn.textContent = isEn ? '⏳ Calculating...' : '⏳ 計算中...';

  setTimeout(() => {
    _doSim();
    btn.disabled = false; btn.textContent = isEn ? '🎲 Simulate Craft' : '🎲 連続クラフト実行';
  }, 20);
}

function _doSim() {
  const recipes = getActiveRecipes();
  const ci = getActiveCur();
  const recipe = recipes[ci];
  if (!recipe) return;
  const fee    = 0.15;
  const cost   = parseFloat(document.getElementById('craftCost').value) || 0;

  // Build CDF
  const pool = [];
  let cum = 0;
  RARITIES.forEach((r, ri) => {
    const pct = recipe.rarities[ri] / 100;
    if (pct <= 0) return;
    const n_rarity = getRarityItemCount(recipe, r.key);
    recipe.items.forEach(item => {
      if (item.prices && item.prices[r.key] !== undefined) {
        cum += pct / n_rarity;
        pool.push({ name:item.name, lv:item.lv, rk:r.key, rColor:r.color, rName:r.name, cum });
      }
    });
  });

  // Run
  const counts  = {};
  let totalRev  = 0, beyondCt = 0;
  let bestPrice = -Infinity, bestLabel = '';
  const cumProfits = [];

  for (let i = 0; i < N; i++) {
    const rnd    = Math.random();
    const picked = pool.find(e => rnd <= e.cum) || pool[pool.length-1];
    const raw    = getPrice(activeCat, ci, picked.name, picked.rk);
    const net    = raw * (1 - fee);
    totalRev    += net;

    const k = picked.name + '|||' + picked.rk;
    if (!counts[k]) counts[k] = { name:picked.name, rk:picked.rk, rName:picked.rName, rColor:picked.rColor, cnt:0, rev:0 };
    counts[k].cnt++;
    counts[k].rev += net;

    if (picked.rk === 'beyond') beyondCt++;
    if (net > bestPrice) { bestPrice = net; bestLabel = picked.name + ' (' + picked.rName + ')'; }

    if (N <= 5000) cumProfits.push(totalRev - cost*(i+1));
  }

  const totalCost   = cost * N;
  const totalProfit = totalRev - totalCost;
  const roi         = totalCost > 0 ? (totalProfit / totalCost * 100).toFixed(1) : '∞';

  // ── UI update
  const rr = document.getElementById('simResults');
  if (rr) {
    rr.style.display = 'grid';
    rr.className = 'sim-results fade-up';
    void rr.offsetWidth;
  }

  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const currencySymbol = getMarketCurrencySymbol();

  setText('rRevenue', formatCurrency(totalRev, currencySymbol));
  setText('rCost',    formatCurrency(totalCost, currencySymbol));

  const pEl = document.getElementById('rProfit');
  if (pEl) {
    pEl.textContent = (totalProfit>=0?'+':'') + formatCurrency(totalProfit, currencySymbol);
    pEl.style.color = totalProfit >= 0 ? 'var(--profit)' : 'var(--loss)';
  }

  const rEl = document.getElementById('rROI');
  if (rEl) {
    rEl.textContent = (roi >= 0 ? '+' : '') + roi + '%';
    rEl.style.color  = parseFloat(roi) >= 0 ? 'var(--profit)' : 'var(--loss)';
  }

  setText('rBeyond', beyondCt + (isEn ? (beyondCt === 1 ? ' time' : ' times') : ' 回'));
  const bEl = document.getElementById('rBest');
  if (bEl) bEl.textContent = bestLabel || '—';

  // ── Breakdown
  const bdSec  = document.getElementById('bdSection');
  if (bdSec) bdSec.style.display = 'block';
  const bdGrid = document.getElementById('bdGrid');
  if (bdGrid) {
    const sorted = Object.values(counts).sort((a,b) => b.rev - a.rev);
    bdGrid.innerHTML = sorted.map(d => {
      const foundItem = (typeof globalItems !== 'undefined') ? globalItems.find(it => it.name === d.name && it.grade === d.rk.toUpperCase()) : null;
      const iconName = foundItem ? foundItem.icon : null;
      const iconHtml = iconName ? `<img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:18px; height:18px; object-fit:contain; image-rendering:pixelated; border-radius:3px; background:var(--bg-secondary); border:1px solid var(--border);" />` : '';
      return `
        <div class="bd-row" style="display:flex; justify-content:space-between; align-items:center; padding:4px 8px; border-bottom:1px solid rgba(255,255,255,0.03);">
          <div class="bd-left" style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
            <span class="rb rb-${d.rk}" style="font-size:9px; padding:1px 6px;">${d.rName}</span>
            ${iconHtml}
            <span style="color:${d.rColor}; cursor:pointer; text-decoration:underline; text-underline-offset:2px; font-size:11px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" onclick="showItemDetail(${foundItem ? foundItem.key : 'null'})" title="${isEn ? 'Show Details' : '詳細を表示'}">${d.name}</span>
          </div>
          <span class="bd-count" style="font-size:11px; color:var(--text-sec); margin: 0 8px; flex-shrink:0;">${d.cnt}${isEn ? (d.cnt === 1 ? ' pc' : ' pcs') : '個'}</span>
          <span class="bd-val mono" style="color:${d.rev>0?'var(--accent)':'var(--text-sec)'}; font-size:11px; flex-shrink:0;">
            ${formatCurrency(d.rev, currencySymbol)}
          </span>
        </div>
      `;
    }).join('');
  }

  // ── Chart
  if (chart) {
    let labels, data, type, title, datasets;
    if (N <= 100) {
      type  = 'bar';
      title = isEn ? `Income per Run (Total ${N} Runs)` : `各回の収入（計${N}回）`;
      const pp = [];
      for (let i=0;i<N;i++){
        const rnd=Math.random();
        const pk=pool.find(e=>rnd<=e.cum)||pool[pool.length-1];
        pp.push(getPrice(activeCat, ci,pk.name,pk.rk)*(1-fee));
      }
      labels   = pp.map((_,i)=> isEn ? `Run ${i+1}` : `${i+1}回`);
      data     = pp;
      const colors = data.map(v => v > cost ? 'rgba(0,230,118,0.65)' : 'rgba(255,61,106,0.65)');
      datasets = [{ label: (isEn ? `Income (${currencySymbol})` : `収入 (${currencySymbol})`), data, backgroundColor:colors, borderColor:colors, borderWidth:1 }];
    } else {
      type  = 'line';
      title = isEn ? `Cumulative Profit (Total ${N} Runs)` : `累積利益推移（計${N}回）`;
      const step = Math.max(1, Math.floor(N/80));
      const xs = cumProfits.filter((_,i) => i%step===0 || i===cumProfits.length-1);
      const xi = xs.map((_,i) => isEn ? `Run ${i*step+1}` : `${i*step+1}回`);
      labels = xi;
      data   = xs;
      datasets = [
        {
          label: (isEn ? `Cumulative Profit (${currencySymbol})` : `累積利益 (${currencySymbol})`), data, fill:true,
          backgroundColor:'rgba(100,255,218,0.07)',
          borderColor:'#64ffda', borderWidth:2,
          tension:0.3, pointRadius: N>2000 ? 0 : 3,
          pointBackgroundColor:'#64ffda',
        },
        {
          label: (isEn ? 'Break-even Line' : '損益分岐ライン'), data:labels.map(()=>0),
          borderColor:'rgba(245,166,35,0.5)', borderWidth:1.5,
          borderDash:[6,4], pointRadius:0, fill:false,
        }
      ];
    }

    chart.config.type = type;
    chart.config.data = { labels, datasets };
    chart.config.options.plugins.title.text = title;
    chart.update('active');
  }
}

