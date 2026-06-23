/* ──────────────────────────────────────────────
   SYNTHESIS SIMULATOR LOGIC
   ────────────────────────────────────────────── */
let isSynthesisInitialized = false;

// 各レベル帯に対応する出現候補レベルの定義定数
const SYNTH_LEVEL_RANGES = {
  '1-10': [1, 5, 10],
  '10-20': [10, 15, 20],
  '15-30': [15, 20, 30],
  '20-40': [20, 30, 40],
  '30-50': [30, 40, 50],
  '40-65': [40, 50, 65],
  '50-65': [50, 65],
  '65-80': [65, 80],
  '80-100': [80, 100]
};

// 投入平均レベルと合成レベル帯に基づいて、結果の装備レベルを確率的に抽選する
function determineResultLevel(avgLevel, rangeKey) {
  const pool = SYNTH_LEVEL_RANGES[rangeKey];
  if (!pool || pool.length === 0) return avgLevel;
  
  if (pool.length === 1) {
    return pool[0];
  }
  
  // 平均レベルに最も近い候補レベルを特定
  let closestLv = pool[0];
  let minDiff = Math.abs(pool[0] - avgLevel);
  for (let i = 1; i < pool.length; i++) {
    const diff = Math.abs(pool[i] - avgLevel);
    if (diff < minDiff) {
      minDiff = diff;
      closestLv = pool[i];
    }
  }
  
  const rand = Math.random() * 100;
  
  if (pool.length === 2) {
    // 2種類の場合: 最も近いレベルの出現率は 80%、もう一方は 20%
    const otherLv = pool.find(lv => lv !== closestLv);
    if (rand < 80) {
      return closestLv;
    } else {
      return otherLv;
    }
  } else {
    // 3種類の場合: 最も近いレベルの出現率は 60%、他の2種類はそれぞれ 20%
    const others = pool.filter(lv => lv !== closestLv);
    if (rand < 60) {
      return closestLv;
    } else if (rand < 80) {
      return others[0];
    } else {
      return others[1];
    }
  }
}

function initSynthesisSim() {
  if (isSynthesisInitialized) return;
  isSynthesisInitialized = true;
  renderSynthFavItems();
  updateSynthesisEVDisplay();
  updateMultiSynthOddsDisplay();
}

function updateMultiSynthOddsDisplay() {
  const container = document.getElementById('multi-synth-odds-container');
  const gradeEl = document.getElementById('multiSynthGrade');
  if (!container || !gradeEl) return;
  
  const selectedGrade = gradeEl.value;
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  let oddsTableHtml = `
    <div style="margin-bottom:12px; border:1px solid rgba(255,255,255,0.08); border-radius:6px; background:rgba(0,0,0,0.15); padding:10px;">
      <div style="font-size:11px; color:#ffbb00; font-weight:bold; margin-bottom:8px; display:flex; align-items:center; gap:4px;">
        📊 ${isEn ? 'Grade-up Odds (Selected Highlighted)' : '合成確率早見表（選択レアリティ強調）'}
      </div>
      <div style="display:flex; flex-direction:column; gap:6px;">
  `;

  for (let j = 0; j < SYNTH_GRADE_ORDER.length - 1; j++) {
    const gradeName = SYNTH_GRADE_ORDER[j];
    const rates = SYNTH_RATES[gradeName];
    if (!rates) continue;
    
    const isSelected = gradeName === selectedGrade;
    const inputColor = getGradeColor(gradeName);
    
    let resultBadges = '';
    
    if (rates.fail > 0) {
      const pct = parseFloat((rates.fail * 100).toFixed(4));
      resultBadges += `
        <span style="border: 1px solid ${inputColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
          <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
          <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
          <span style="font-size:9px; color:#888; font-weight:bold;">SAME</span>
        </span>
      `;
    }
    
    if (rates.success > 0) {
      const next1 = j + 1;
      if (next1 < SYNTH_GRADE_ORDER.length) {
        const nextGrade = SYNTH_GRADE_ORDER[next1];
        const nextColor = getGradeColor(nextGrade);
        const pct = parseFloat((rates.success * 100).toFixed(4));
        resultBadges += `
          <span style="border: 1px solid ${nextColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
            <span style="color:${nextColor}; font-weight:bold;">${nextGrade}</span>
          </span>
        `;
      }
    }
    
    if (rates.great > 0) {
      const next2 = j + 2;
      if (next2 < SYNTH_GRADE_ORDER.length) {
        const greatGrade = SYNTH_GRADE_ORDER[next2];
        const greatColor = getGradeColor(greatGrade);
        const pct = parseFloat((rates.great * 100).toFixed(4));
        resultBadges += `
          <span style="border: 1px solid ${greatColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
            <span style="color:${greatColor}; font-weight:bold;">${greatGrade}</span>
            <span style="font-size:8px; color:#ffbb00; font-weight:bold; letter-spacing:0.5px;">GREAT SUCCESS</span>
          </span>
        `;
      }
    }
    
    const rowStyle = isSelected 
      ? `display:flex; align-items:center; gap:8px; padding:6px 4px; border-radius:4px; background:rgba(255, 187, 0, 0.08); border: 1px solid rgba(255, 187, 0, 0.3);`
      : `display:flex; align-items:center; gap:8px; padding:6px 4px; border-bottom: 1px solid rgba(255,255,255,0.03);`;

    oddsTableHtml += `
      <div style="${rowStyle}">
        <div style="width:105px; flex-shrink:0; font-family:'Rajdhani', sans-serif; font-size:11px; font-weight:bold; color:var(--text-sec); border:1px solid ${isSelected ? 'rgba(255,187,0,0.5)' : 'rgba(255,255,255,0.12)'}; border-radius:4px; padding:2px 4px; text-align:center; background:rgba(255,255,255,0.02);">
          9 x <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:4px; flex:1; align-items:center;">
          ${resultBadges}
        </div>
      </div>
    `;
  }
  
  oddsTableHtml += `
      </div>
    </div>
  `;
  container.innerHTML = oddsTableHtml;
}

let synthesisSlots = Array(9).fill(null);
let currentSelectSlotIndex = null;
let synthesisActiveCategory = null;
let synthesisActiveGrade = null;

function clearSynthesisSlots() {
  clearAllSynthesisSlots();
}

function autoFillSynthesisSlots(mode) {
  if (mode === 'copy') {
    fillSlotsWithSame(0);
  } else if (mode === 'random') {
    fillSlotsRandom();
  }
}

const SYNTH_GRADE_ORDER = ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];

const SYNTH_RATES = {
  'COMMON':    { success: 0.952,  great: 0.048,  fail: 0.00 },
  'UNCOMMON':  { success: 0.962,  great: 0.038,  fail: 0.00 },
  'RARE':      { success: 0.976,  great: 0.024,  fail: 0.00 },
  'LEGENDARY': { success: 0.9901, great: 0.0099, fail: 0.00 },
  'IMMORTAL':  { success: 0.4975, great: 0.0025, fail: 0.50 },
  'ARCANA':    { success: 0.3283, great: 0.0017, fail: 0.67 },
  'BEYOND':    { success: 0.2292, great: 0.0008, fail: 0.77 },
  'CELESTIAL': { success: 0.1698, great: 0.0002, fail: 0.83 },
  'DIVINE':    { success: 0.091,  great: 0.00,   fail: 0.909 }
};

function getSynthCategory(item) {
  if (!item) return null;
  if (item.type === 'MATERIAL') return 'MATERIAL';
  if (item.type === 'GEAR') {
    const gt = item.gearType;
    if (GEAR_CATEGORIES.ACCESSORY.includes(gt)) {
      return 'ACCESSORY';
    }
    if (GEAR_CATEGORIES.WEAPON.includes(gt) || GEAR_CATEGORIES.ARMOR.includes(gt)) {
      return 'GEAR';
    }
  }
  return null;
}

function getCheapestMarketPrice(grade, level, category) {
  const candidates = globalItems.filter(it => {
    if (it.obtainable === false) return false;
    if (it.type === 'STAGEBOX') return false;
    if (it.grade !== grade) return false;
    if (getSynthCategory(it) !== category) return false;
    return (it.level || 0) === level;
  });
  
  let minPrice = Infinity;
  let cheapestItem = null;
  
  candidates.forEach(it => {
    const mData = getMarketDataForItem(it);
    if (mData) {
      const price = getItemPriceByBasis(mData);
      if (price && price > 0 && price < minPrice) {
        minPrice = price;
        cheapestItem = it;
      }
    }
  });
  
  if (minPrice === Infinity) {
    return null;
  }
  
  return {
    price: minPrice,
    item: cheapestItem
  };
}

let selectedSynthTargetItemKey = 'none';

function renderSynthFavItems() {
  const listEl = document.getElementById('synth-fav-items-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  const favItems = [];
  if (typeof favoriteItems !== 'undefined') {
    favoriteItems.forEach(keyStr => {
      const item = globalItems.find(it => String(it.key) === keyStr);
      if (item && item.obtainable !== false && item.type !== 'STAGEBOX') {
        const cat = getSynthCategory(item);
        if (cat) {
          favItems.push(item);
        }
      }
    });
  }
  
  if (favItems.length === 0) {
    listEl.innerHTML = `<div style="font-size:12px; color:var(--text-sec); text-align:center; padding:10px; width:100%;">${isEn ? 'No favorite items available for synthesis. Please mark items with (★) in the database.' : '合成可能なお気に入りアイテムがありません。<br>アイテムデータベース（★）で登録してください。'}</div>`;
    return;
  }
  
  favItems.sort((a, b) => {
    const gA = SYNTH_GRADE_ORDER.indexOf(a.grade);
    const gB = SYNTH_GRADE_ORDER.indexOf(b.grade);
    if (gA !== gB) return gB - gA;
    const nameA = a.name || '';
    const nameB = b.name || '';
    return nameA.localeCompare(nameB);
  });
  
  favItems.forEach(item => {
    const color = getGradeColor ? getGradeColor(item.grade) : '#7a85a8';
    const label = document.createElement('label');
    label.style.cssText = 'display:flex; align-items:center; gap:8px; font-size:12px; cursor:pointer; user-select:none; color:var(--text-pri); padding:6px 10px; border-radius:6px; background:rgba(255,255,255,0.02); border:1px solid var(--border-soft); transition:all 0.2s;';
    label.onmouseenter = function() { this.style.background = 'rgba(255,255,255,0.06)'; };
    label.onmouseleave = function() { this.style.background = 'rgba(255,255,255,0.02)'; };
    
    const isChecked = selectedSynthTargetItemKey === String(item.key);
    const iconName = item.icon || 'Item_910011';
    const nameStr = isEn ? item.name : (item.name_ja || item.name);
    const levelStr = item.type === 'GEAR' ? ` (Lv. ${item.level})` : '';
    
    label.innerHTML = `
      <input type="checkbox" value="${item.key}" ${isChecked ? 'checked' : ''} style="cursor:pointer;" onchange="onSynthFavItemToggle(this)">
      <img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:20px; height:20px; object-fit:contain; image-rendering:pixelated; border-radius:3px; background:var(--bg-secondary); border:1px solid var(--border);" />
      <div style="display:flex; flex-direction:column; min-width:0; flex:1; line-height:1.2;">
        <span style="color:${color}; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${nameStr}${levelStr}</span>
        <span style="font-size:9px; color:var(--text-sec);">${item.grade} #${item.key}</span>
      </div>
    `;
    listEl.appendChild(label);
  });
}

function onSynthFavItemToggle(cb) {
  const key = String(cb.value);
  if (cb.checked) {
    selectedSynthTargetItemKey = key;
  } else {
    selectedSynthTargetItemKey = 'none';
  }
  
  // 排他チェックボックス制御
  const listEl = document.getElementById('synth-fav-items-list');
  if (listEl) {
    const checkboxes = listEl.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(chk => {
      if (chk.value !== selectedSynthTargetItemKey) {
        chk.checked = false;
      }
    });
  }
  
  onSynthesisTargetItemChange();
}

function onSynthesisTargetItemChange() {
  updateSynthesisEVDisplay();
}

function updateSynthesisEVDisplay() {
  const evCardEl = document.getElementById('synth-ev-card');
  const targetItemKey = selectedSynthTargetItemKey;
  if (!evCardEl) return;
  
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  if (targetItemKey === 'none') {
    let oddsTableHtml = `
      <div style="margin-bottom:14px; border:1px solid rgba(255,255,255,0.08); border-radius:6px; background:rgba(0,0,0,0.15); padding:10px;">
        <div style="font-size:11px; color:#ffbb00; font-weight:bold; margin-bottom:8px; display:flex; align-items:center; gap:4px;">
          📊 ${isEn ? 'Grade-up Odds (All Grades)' : '合成確率早見表'}
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
    `;

    for (let j = 0; j < SYNTH_GRADE_ORDER.length - 1; j++) {
      const gradeName = SYNTH_GRADE_ORDER[j];
      const rates = SYNTH_RATES[gradeName];
      if (!rates) continue;
      const inputColor = getGradeColor(gradeName);
      
      let resultBadges = '';
      if (rates.fail > 0) {
        const pct = parseFloat((rates.fail * 100).toFixed(4));
        resultBadges += `
          <span style="border: 1px solid ${inputColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
            <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
            <span style="font-size:9px; color:#888; font-weight:bold;">SAME</span>
          </span>
        `;
      }
      if (rates.success > 0) {
        const next1 = j + 1;
        if (next1 < SYNTH_GRADE_ORDER.length) {
          const nextGrade = SYNTH_GRADE_ORDER[next1];
          const nextColor = getGradeColor(nextGrade);
          const pct = parseFloat((rates.success * 100).toFixed(4));
          resultBadges += `
            <span style="border: 1px solid ${nextColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
              <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
              <span style="color:${nextColor}; font-weight:bold;">${nextGrade}</span>
            </span>
          `;
        }
      }
      if (rates.great > 0) {
        const next2 = j + 2;
        if (next2 < SYNTH_GRADE_ORDER.length) {
          const greatGrade = SYNTH_GRADE_ORDER[next2];
          const greatColor = getGradeColor(greatGrade);
          const pct = parseFloat((rates.great * 100).toFixed(4));
          resultBadges += `
            <span style="border: 1px solid ${greatColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
              <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
              <span style="color:${greatColor}; font-weight:bold;">${greatGrade}</span>
              <span style="font-size:8px; color:#ffbb00; font-weight:bold; letter-spacing:0.5px;">GREAT SUCCESS</span>
            </span>
          `;
        }
      }

      oddsTableHtml += `
        <div style="display:flex; align-items:center; gap:8px; padding:4px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <div style="width:105px; flex-shrink:0; font-family:'Rajdhani', sans-serif; font-size:11px; font-weight:bold; color:var(--text-sec); border:1px solid rgba(255,255,255,0.12); border-radius:4px; padding:2px 4px; text-align:center; background:rgba(255,255,255,0.02);">
            9 x <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:4px; flex:1; align-items:center;">
            ${resultBadges}
          </div>
        </div>
      `;
    }
    
    oddsTableHtml += `
        </div>
      </div>
    `;

    evCardEl.innerHTML = oddsTableHtml + `
      <div style="font-size:12px; color:var(--text-sec); text-align:center; padding:10px; border-top:1px solid rgba(255,255,255,0.05); margin-top:8px;">
        ${isEn ? 'Please select a target item from the favorites list above to calculate EV.' : 'お気に入りリストから目標アイテムを選択して期待値を計算してください。'}
      </div>
    `;
    return;
  }
  
  // 特定アイテムお気に入り選択モード
  const targetItem = globalItems.find(it => String(it.key) === targetItemKey);
  if (!targetItem) {
    evCardEl.innerHTML = `
      <div style="font-size:11px; color:var(--text-sec);">💡 ${isEn ? 'Theoretical Expectation (EV)' : '理論上の期待値 (EV)'}</div>
      <div style="font-size:12px; color:#ff5353; font-weight:bold; margin-top:4px;">
        ${isEn ? 'Target item not found.' : '目標アイテムが見つかりません。'}
      </div>
    `;
    return;
  }
  
  const targetItemGrade = targetItem.grade;
  const targetItemIdx = SYNTH_GRADE_ORDER.indexOf(targetItemGrade);
  const targetCategory = getSynthCategory(targetItem);
  const targetLv = targetItem.level || 0;
  
  // 同レベル・同カテゴリ・同グレードのアイテム数を算出（ゲーム内での均等選出確率分母）
  const pool = globalItems.filter(it => {
    if (it.obtainable === false) return false;
    if (it.type === 'STAGEBOX') return false;
    if (it.grade !== targetItemGrade) return false;
    if (getSynthCategory(it) !== targetCategory) return false;
    return (it.level || 0) === targetLv;
  });
  
  const poolSize = pool.length || 1;

  // 候補レベル数の判定 (50, 65, 80, 100 ➔ 2択。その他 ➔ 3択)
  // ※ 素材 (MATERIAL) はそもそもレベル別合成ではないため100%扱い（choices=1）とする
  let choices = 3;
  if (targetCategory === 'MATERIAL') {
    choices = 1;
  } else if ([50, 65, 80, 100].includes(targetLv)) {
    choices = 2;
  }
  
  // 確率の割り当て
  // p_high: 最も平均レベルが目標レベルに近い場合
  // p_low: 最も平均レベルが目標レベルから遠い場合
  let p_high = 1.0;
  let p_low = 1.0;
  
  if (choices === 2) {
    p_high = 0.8;
    p_low = 0.2;
  } else if (choices === 3) {
    p_high = 0.6;
    p_low = 0.2;
  }
  
  // 後退代入法で確率 P_high[j] と P_low[j] を算出
  const P_high = Array(SYNTH_GRADE_ORDER.length).fill(0);
  const P_low = Array(SYNTH_GRADE_ORDER.length).fill(0);
  
  P_high[targetItemIdx] = p_high / poolSize;
  P_low[targetItemIdx] = p_low / poolSize;
  
  for (let j = targetItemIdx - 1; j >= 0; j--) {
    const gradeName = SYNTH_GRADE_ORDER[j];
    const rates = SYNTH_RATES[gradeName] || { success: 1.0, great: 0.0, fail: 0.0 };
    
    const pSuccess = rates.success;
    const pGreat = rates.great;
    const pFail = rates.fail;
    
    const next1 = j + 1;
    const next2 = j + 2;
    
    // P_high の逆算
    const pNext1_high = (next1 === targetItemIdx) ? (p_high / poolSize) : (next1 < targetItemIdx ? P_high[next1] : 0);
    const pNext2_high = (next2 === targetItemIdx) ? (p_high / poolSize) : (next2 < targetItemIdx ? P_high[next2] : 0);
    P_high[j] = (pSuccess * pNext1_high + pGreat * pNext2_high) / (9 - pFail);
    
    // P_low の逆算
    const pNext1_low = (next1 === targetItemIdx) ? (p_low / poolSize) : (next1 < targetItemIdx ? P_low[next1] : 0);
    const pNext2_low = (next2 === targetItemIdx) ? (p_low / poolSize) : (next2 < targetItemIdx ? P_low[next2] : 0);
    P_low[j] = (pSuccess * pNext1_low + pGreat * pNext2_low) / (9 - pFail);
  }
  
  // 確率早見表 (Grade-up Odds) の作成
  let oddsTableHtml = `
    <div style="margin-bottom:14px; border:1px solid rgba(255,255,255,0.08); border-radius:6px; background:rgba(0,0,0,0.15); padding:10px;">
      <div style="font-size:11px; color:#ffbb00; font-weight:bold; margin-bottom:8px; display:flex; align-items:center; gap:4px;">
        📊 ${isEn ? 'Grade-up Odds (Relevant Steps)' : '合成確率早見表（目標到達に必要なステップのみ）'}
      </div>
      <div style="display:flex; flex-direction:column; gap:6px;">
  `;

  for (let j = 0; j < targetItemIdx; j++) {
    const gradeName = SYNTH_GRADE_ORDER[j];
    const rates = SYNTH_RATES[gradeName] || { success: 1.0, great: 0.0, fail: 0.0 };
    const inputColor = getGradeColor(gradeName);
    
    // 成功・大成功・失敗のバッジHTMLを作成
    let resultBadges = '';
    
    // 1. 失敗 (SAME)
    if (rates.fail > 0) {
      const pct = parseFloat((rates.fail * 100).toFixed(4));
      resultBadges += `
        <span style="border: 1px solid ${inputColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
          <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
          <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
          <span style="font-size:9px; color:#888; font-weight:bold;">SAME</span>
        </span>
      `;
    }
    
    // 2. 成功
    if (rates.success > 0) {
      const next1 = j + 1;
      if (next1 < SYNTH_GRADE_ORDER.length) {
        const nextGrade = SYNTH_GRADE_ORDER[next1];
        const nextColor = getGradeColor(nextGrade);
        const pct = parseFloat((rates.success * 100).toFixed(4));
        resultBadges += `
          <span style="border: 1px solid ${nextColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
            <span style="color:${nextColor}; font-weight:bold;">${nextGrade}</span>
          </span>
        `;
      }
    }
    
    // 3. 大成功 (GREAT SUCCESS)
    if (rates.great > 0) {
      const next2 = j + 2;
      if (next2 < SYNTH_GRADE_ORDER.length) {
        const greatGrade = SYNTH_GRADE_ORDER[next2];
        const greatColor = getGradeColor(greatGrade);
        const pct = parseFloat((rates.great * 100).toFixed(4));
        resultBadges += `
          <span style="border: 1px solid ${greatColor}; background: rgba(0,0,0,0.25); border-radius: 4px; padding: 2px 6px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span style="color:#ffffff; font-weight:bold;">${pct}%</span>
            <span style="color:${greatColor}; font-weight:bold;">${greatGrade}</span>
            <span style="font-size:8px; color:#ffbb00; font-weight:bold; letter-spacing:0.5px;">GREAT SUCCESS</span>
          </span>
        `;
      }
    }
    
    oddsTableHtml += `
      <div style="display:flex; align-items:center; gap:8px; padding:4px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
        <div style="width:105px; flex-shrink:0; font-family:'Rajdhani', sans-serif; font-size:11px; font-weight:bold; color:var(--text-sec); border:1px solid rgba(255,255,255,0.12); border-radius:4px; padding:2px 4px; text-align:center; background:rgba(255,255,255,0.02);">
          9 x <span style="color:${inputColor}; font-weight:bold;">${gradeName}</span>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:4px; flex:1; align-items:center;">
          ${resultBadges}
        </div>
      </div>
    `;
  }
  
  oddsTableHtml += `
      </div>
    </div>
  `;

  // すべての開始グレードに対する期待値を算出してリスト表示
  let html = `
    <div style="font-size:11px; color:var(--text-sec); margin-bottom: 6px;">
      💡 [${isEn ? 'Specific Target EV' : '特定目標の期待値'}] ${isEn ? 'Expected starting items of each grade to get 1' : '1個獲得するまでに必要な各グレードの消費期待値'}:
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
  `;
  
  for (let j = 0; j < targetItemIdx; j++) {
    const gradeName = SYNTH_GRADE_ORDER[j];
    const evVal_min = P_high[j] > 0 ? (1 / P_high[j]) : Infinity;
    const evVal_max = P_low[j] > 0 ? (1 / P_low[j]) : Infinity;
    
    const evText_min = isFinite(evVal_min) ? evVal_min.toLocaleString(undefined, {maximumFractionDigits: 1}) : '∞';
    const evText_max = isFinite(evVal_max) ? evVal_max.toLocaleString(undefined, {maximumFractionDigits: 1}) : '∞';
    
    const evDisplay = (choices === 1) 
      ? `${evText_min} ${isEn ? 'pcs' : '個'}`
      : `${evText_min}個 (確率高) 〜 ${evText_max}個 (確率低)`;
    
    const color = getGradeColor(gradeName);
    
    let priceHtml = '';
    const legendaryIdx = SYNTH_GRADE_ORDER.indexOf('LEGENDARY');
    if (j >= legendaryIdx) {
      const cheapest = getCheapestMarketPrice(gradeName, targetItem.level || 0, targetCategory);
      if (cheapest) {
        const symbol = getMarketCurrencySymbol() || '$';
        const totalCost_min = evVal_min * cheapest.price;
        const totalCost_max = evVal_max * cheapest.price;
        const itemName = isEn ? cheapest.item.name : (cheapest.item.name_ja || cheapest.item.name);
        const iconName = cheapest.item.icon || 'Item_910011';
        
        const costDisplay = (choices === 1)
          ? `${symbol}${totalCost_min.toLocaleString(undefined, {maximumFractionDigits: 0})}`
          : `${symbol}${totalCost_min.toLocaleString(undefined, {maximumFractionDigits: 0})} 〜 ${symbol}${totalCost_max.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
          
        priceHtml = `
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; color:var(--text-sec); border-top: 1px dashed rgba(255,255,255,0.05); margin-top:4px; padding-top:4px;">
            <div style="display:flex; align-items:center; gap:4px; min-width:0; flex:1;">
              <span style="color:var(--accent); font-size:10px;">🛒</span>
              <img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:14px; height:14px; object-fit:contain; border-radius:2px;" />
              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${itemName}">${itemName}</span>
              <span style="color:#00ff80; font-family:'Rajdhani'; font-weight:600; margin-left:2px;">${symbol}${cheapest.price.toLocaleString(undefined, {maximumFractionDigits: 1})}</span>
            </div>
            <div style="font-family:'Rajdhani'; font-weight:700; color:#ffbb00;">
              ${isEn ? 'Est. Cost:' : '最安合成総額:'} <span style="font-size:12px;">${costDisplay}</span>
            </div>
          </div>
        `;
      } else {
        priceHtml = `
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:var(--text-sec); border-top: 1px dashed rgba(255,255,255,0.05); margin-top:4px; padding-top:4px;">
            <span style="color:var(--text-sec);">${isEn ? 'No market price data available.' : 'マーケットに同じレベル/カテゴリの素材出品なし'}</span>
          </div>
        `;
      }
    }
    
    html += `
      <div style="display:flex; flex-direction:column; gap:2px; padding:6px 10px; border-radius:6px; background:rgba(255,255,255,0.02); border:1px solid var(--border-soft);">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px;">
          <span><span style="color:${color}; font-weight:bold;">${gradeName}</span> ${isEn ? 'Start' : 'から開始'}:</span>
          <strong style="color:#00d2ff; font-family:'Rajdhani', sans-serif; font-size:13px;">${evDisplay}</strong>
        </div>
        ${priceHtml}
      </div>
    `;
  }
  html += `</div>`;
  
  evCardEl.innerHTML = oddsTableHtml + html;
}

function fillSlotsRandom() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  let cat = synthesisActiveCategory;
  let grade = synthesisActiveGrade;
  
  if (!cat || !grade) {
    const randGradeEl = document.getElementById('synthModalGradeFilter');
    const randCatEl = document.getElementById('synthModalCategoryFilter');
    
    grade = randGradeEl.value === 'ALL' ? 'LEGENDARY' : randGradeEl.value;
    cat = randCatEl.value === 'ALL' ? 'GEAR' : randCatEl.value;
  }
  
  const pool = globalItems.filter(it => {
    if (it.obtainable === false) return false;
    if (it.type === 'STAGEBOX') return false;
    if (it.grade !== grade) return false;
    return getSynthCategory(it) === cat;
  });
  
  if (pool.length === 0) {
    alert(isEn ? 'No obtainable items found for the category/grade.' : '指定されたカテゴリ・グレードの入手可能アイテムが見つかりません。');
    return;
  }
  
  const levelSlider = document.getElementById('synthModalLevelSlider');
  const levelVal = levelSlider ? parseInt(levelSlider.value, 10) : 100;
  
  for (let i = 0; i < 9; i++) {
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    synthesisSlots[i] = {
      item: JSON.parse(JSON.stringify(randomItem)),
      level: levelVal
    };
  }
  
  synthesisActiveCategory = cat;
  synthesisActiveGrade = grade;
  
  renderSynthesisSlots();
  updateSynthesisPreview();
}

function openSynthesisItemSelectModal(slotIndex) {
  currentSelectSlotIndex = slotIndex;
  
  const warning = document.getElementById('synthModalLockWarning');
  const gradeFilter = document.getElementById('synthModalGradeFilter');
  const catFilter = document.getElementById('synthModalCategoryFilter');
  
  if (synthesisActiveCategory && synthesisActiveGrade) {
    if (warning) warning.style.display = 'block';
    if (gradeFilter) {
      gradeFilter.value = synthesisActiveGrade;
      gradeFilter.disabled = true;
    }
    if (catFilter) {
      catFilter.value = synthesisActiveCategory;
      catFilter.disabled = true;
    }
  } else {
    if (warning) warning.style.display = 'none';
    if (gradeFilter) {
      gradeFilter.disabled = false;
      if (gradeFilter.value === 'ALL') gradeFilter.value = 'LEGENDARY';
    }
    if (catFilter) {
      catFilter.disabled = false;
      if (catFilter.value === 'ALL') catFilter.value = 'GEAR';
    }
  }
  
  const searchInput = document.getElementById('synthModalSearch');
  if (searchInput) searchInput.value = '';
  
  const modal = document.getElementById('synthesisItemSelectModal');
  if (modal) modal.style.display = 'flex';
  
  filterSynthesisModalItems();
  updateSynthModalLevelVal();
}

function closeSynthesisItemSelectModal() {
  const modal = document.getElementById('synthesisItemSelectModal');
  if (modal) modal.style.display = 'none';
}

function updateSynthModalLevelVal() {
  const slider = document.getElementById('synthModalLevelSlider');
  const valDisp = document.getElementById('synthModalLevelVal');
  if (slider && valDisp) {
    valDisp.textContent = `Lv. ${slider.value}`;
  }
}

function filterSynthesisModalItems() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const searchInput = document.getElementById('synthModalSearch');
  const gradeFilter = document.getElementById('synthModalGradeFilter');
  const catFilter = document.getElementById('synthModalCategoryFilter');
  
  const query = searchInput ? searchInput.value.toLowerCase() : '';
  const grade = gradeFilter ? gradeFilter.value : 'ALL';
  const category = catFilter ? catFilter.value : 'ALL';
  const listContainer = document.getElementById('synthModalItemList');
  const levelSelector = document.getElementById('synthModalLevelSelector');
  
  if (!listContainer) return;
  listContainer.innerHTML = '';
  
  if (category === 'GEAR' || category === 'ACCESSORY') {
    if (levelSelector) levelSelector.style.display = 'flex';
  } else {
    if (levelSelector) levelSelector.style.display = 'none';
  }
  
  const filtered = globalItems.filter(item => {
    if (item.obtainable === false) return false;
    if (item.type === 'STAGEBOX') return false;
    
    if (grade !== 'ALL' && item.grade !== grade) return false;
    
    if (category !== 'ALL') {
      const itemCat = getSynthCategory(item);
      if (itemCat !== category) return false;
    }
    
    if (query) {
      const nameMatch = item.name && item.name.toLowerCase().includes(query);
      const nameJaMatch = item.name_ja && item.name_ja.toLowerCase().includes(query);
      const keyMatch = item.key && String(item.key).includes(query);
      if (!nameMatch && !nameJaMatch && !keyMatch) return false;
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; color:var(--text-sec); font-size:12px; padding:20px;">${isEn ? 'No items found.' : 'アイテムが見つかりません。'}</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.style.display = 'flex';
    itemEl.style.alignItems = 'center';
    itemEl.style.justifyContent = 'space-between';
    itemEl.style.padding = '6px 10px';
    itemEl.style.border = '1px solid var(--border-soft)';
    itemEl.style.borderRadius = '6px';
    itemEl.style.cursor = 'pointer';
    itemEl.style.background = 'rgba(255,255,255,0.01)';
    itemEl.style.transition = 'all 0.2s';
    
    itemEl.onmouseenter = () => {
      itemEl.style.borderColor = 'var(--accent)';
      itemEl.style.background = 'rgba(100, 255, 218, 0.03)';
    };
    itemEl.onmouseleave = () => {
      itemEl.style.borderColor = 'var(--border-soft)';
      itemEl.style.background = 'rgba(255,255,255,0.01)';
    };
    
    const color = getGradeColor(item.grade);
    let iconHtml = '';
    if (item.icon) {
      iconHtml = `<img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}else{this.style.display='none';}" style="width:24px; height:24px; object-fit:contain; image-rendering:pixelated; margin-right:8px;" />`;
    }
    
    itemEl.onclick = () => {
      const levelSlider = document.getElementById('synthModalLevelSlider');
      const level = (item.type === 'GEAR') ? parseInt(levelSlider.value, 10) : 1;
      selectItemForSlot(item, level);
    };
    
    const nameStr = isEn ? item.name : (item.name_ja || item.name);
    
    itemEl.innerHTML = `
      <div style="display:flex; align-items:center;">
        ${iconHtml}
        <span style="font-size:12px; font-weight:600; color:var(--text-pri);">${nameStr}</span>
      </div>
      <span style="font-size:10px; font-weight:bold; color:${color}; font-family:'Rajdhani', sans-serif;">${item.grade}</span>
    `;
    
    listContainer.appendChild(itemEl);
  });
}

function selectItemForSlot(item, level) {
  if (currentSelectSlotIndex === null) return;
  
  synthesisSlots[currentSelectSlotIndex] = {
    item: item,
    level: level
  };
  
  if (synthesisActiveCategory === null && synthesisActiveGrade === null) {
    synthesisActiveCategory = getSynthCategory(item);
    synthesisActiveGrade = item.grade;
  }
  
  renderSynthesisSlots();
  updateSynthesisPreview();
  closeSynthesisItemSelectModal();
}

function updateSynthesisPreview() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const filledCount = synthesisSlots.filter(s => s !== null).length;
  const progressText = document.getElementById('synth-filled-count');
  if (progressText) {
    progressText.textContent = `${filledCount} / 9`;
  }
  
  const successBar = document.getElementById('rate-bar-success');
  const greatBar = document.getElementById('rate-bar-great');
  const failBar = document.getElementById('rate-bar-fail');
  const textSuccess = document.getElementById('rate-text-success');
  const textGreat = document.getElementById('rate-text-great');
  const textFail = document.getElementById('rate-text-fail');
  
  if (!synthesisActiveGrade || filledCount === 0) {
    if (successBar) successBar.style.width = '0%';
    if (greatBar) greatBar.style.width = '0%';
    if (failBar) failBar.style.width = '0%';
    if (textSuccess) textSuccess.textContent = '0%';
    if (textGreat) textGreat.textContent = '0%';
    if (textFail) textFail.textContent = '0%';
    
    const targetInfo = document.getElementById('synth-target-info');
    if (targetInfo) targetInfo.textContent = '-';
    return;
  }
  
  const rates = SYNTH_RATES[synthesisActiveGrade];
  if (rates) {
    const sPct = (rates.success * 100).toFixed(0);
    const gPct = (rates.great * 100).toFixed(0);
    const fPct = (rates.fail * 100).toFixed(0);
    
    if (successBar) successBar.style.width = `${sPct}%`;
    if (greatBar) greatBar.style.width = `${gPct}%`;
    if (failBar) failBar.style.width = `${fPct}%`;
    
    if (textSuccess) textSuccess.textContent = `${sPct}%`;
    if (textGreat) textGreat.textContent = `${gPct}%`;
    if (textFail) textFail.textContent = `${fPct}%`;
    
    const currentIdx = SYNTH_GRADE_ORDER.indexOf(synthesisActiveGrade);
    const nextGrade = currentIdx + 1 < SYNTH_GRADE_ORDER.length ? SYNTH_GRADE_ORDER[currentIdx + 1] : 'MAX';
    const greatGrade = currentIdx + 2 < SYNTH_GRADE_ORDER.length ? SYNTH_GRADE_ORDER[currentIdx + 2] : 'MAX';
    
    const targetInfo = document.getElementById('synth-target-info');
    if (targetInfo) {
      if (rates.great > 0) {
        targetInfo.innerHTML = `
          ${isEn ? 'Success:' : '成功:'} <span style="color:${getGradeColor(nextGrade)}; font-weight:bold">${nextGrade}</span> / 
          ${isEn ? 'Great Success:' : '大成功:'} <span style="color:${getGradeColor(greatGrade)}; font-weight:bold">${greatGrade}</span>
        `;
      } else {
        targetInfo.innerHTML = `
          ${isEn ? 'Success:' : '成功:'} <span style="color:${getGradeColor(nextGrade)}; font-weight:bold">${nextGrade}</span>
        `;
      }
    }
  }
}

function runSynthesis() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const filledSlots = synthesisSlots.filter(s => s !== null);
  if (filledSlots.length < 9) {
    alert(isEn ? 'Please place 9 items in the chamber.' : 'チャンバーに9個すべてのアイテムを配置してください。');
    return;
  }
  
  const baseGrade = filledSlots[0].item.grade;
  const baseCat = getSynthCategory(filledSlots[0].item);
  
  const isValid = filledSlots.every(s => {
    return s.item.grade === baseGrade && getSynthCategory(s.item) === baseCat;
  });
  
  if (!isValid) {
    alert(isEn ? 'All items must have the same grade and category.' : 'すべてのアイテムのグレードとカテゴリを統一してください。');
    return;
  }
  
  let totalLevel = 0;
  filledSlots.forEach(s => totalLevel += s.level);
  const avgLevel = Math.round(totalLevel / 9);
  
  const rates = SYNTH_RATES[baseGrade];
  if (!rates) {
    alert(isEn ? 'Invalid grade for synthesis.' : 'このグレードの合成はサポートされていません。');
    return;
  }
  
  const rand = Math.random();
  let resultGrade = baseGrade;
  let synthStatus = 'fail';
  
  const currentIdx = SYNTH_GRADE_ORDER.indexOf(baseGrade);
  
  if (rand < rates.great) {
    const nextIdx = Math.min(currentIdx + 2, SYNTH_GRADE_ORDER.length - 1);
    resultGrade = SYNTH_GRADE_ORDER[nextIdx];
    synthStatus = 'great';
  } else if (rand < rates.great + rates.success) {
    const nextIdx = Math.min(currentIdx + 1, SYNTH_GRADE_ORDER.length - 1);
    resultGrade = SYNTH_GRADE_ORDER[nextIdx];
    synthStatus = 'success';
  } else {
    resultGrade = baseGrade;
    synthStatus = 'fail';
  }
  
  const pool = globalItems.filter(it => {
    if (it.obtainable === false) return false;
    if (it.type === 'STAGEBOX') return false;
    if (it.grade !== resultGrade) return false;
    return getSynthCategory(it) === baseCat;
  });
  
  if (pool.length === 0) {
    alert(isEn ? `No target items found in pool for ${resultGrade} (${baseCat}).` : `プール内に ${resultGrade} (${baseCat}) の対象アイテムが見つかりませんでした。`);
    return;
  }
  
  let closestItems = [];
  let minDiff = Infinity;
  
  pool.forEach(it => {
    const itLv = it.level || 0;
    const diff = Math.abs(itLv - avgLevel);
    if (diff < minDiff) {
      minDiff = diff;
      closestItems = [it];
    } else if (diff === minDiff) {
      closestItems.push(it);
    }
  });
  
  const finalItem = closestItems[Math.floor(Math.random() * closestItems.length)];
  
  renderSynthesisResult(finalItem, avgLevel, synthStatus);
  clearAllSynthesisSlots();
}

function renderSynthesisResult(item, level, status) {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const resultCard = document.getElementById('synth-result-card');
  if (!resultCard) return;
  
  const color = getGradeColor(item.grade);
  resultCard.className = 'card glow-neon';
  resultCard.style.borderColor = color;
  
  let statusText = '';
  let statusColor = 'var(--text-sec)';
  if (status === 'great') {
    statusText = isEn ? '★ GREAT SUCCESS ★' : '★ 大成功 ★';
    statusColor = 'var(--legendary)';
  } else if (status === 'success') {
    statusText = isEn ? 'SUCCESS' : '合成成功';
    statusColor = 'var(--accent)';
  } else {
    statusText = isEn ? 'FAILED (Maintained)' : '失敗 (グレード維持)';
    statusColor = '#ff5353';
  }
  
  const nameStr = isEn ? item.name : (item.name_ja || item.name);
  let iconHtml = '';
  if (item.icon) {
    iconHtml = `<img src="data/icon_cache/${item.icon}.png" onerror="this.style.display='none'" style="width:48px; height:48px; object-fit:contain; image-rendering:pixelated;" />`;
  }
  
  const levelHtml = item.type === 'GEAR' ? `<div style="font-size:12px; color:var(--text-sec); font-family:'Rajdhani', sans-serif; font-weight:bold; margin-top:4px;">Lv. ${level}</div>` : '';
  
  resultCard.innerHTML = `
    <div style="font-family:'Rajdhani', sans-serif; font-size:14px; font-weight:bold; color:${statusColor}; letter-spacing:1px; margin-bottom:8px;">${statusText}</div>
    <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
      <div style="width:64px; height:64px; border:2px solid ${color}; border-radius:8px; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.4);">
        ${iconHtml}
      </div>
      <div>
        <div style="font-size:16px; font-weight:bold; color:var(--text-pri); text-align:center;">${nameStr}</div>
        <div style="text-align:center; font-size:11px; font-weight:bold; color:${color}; font-family:'Rajdhani', sans-serif; margin-top:2px;">${item.grade}</div>
        ${levelHtml}
      </div>
      <button class="mn-btn" onclick="showItemDetail('${item.key || item.id}')" style="margin-top:10px; padding:6px 12px; font-size:11px; border-radius:6px; background:rgba(255,255,255,0.05); color:var(--text-pri); border:1px solid var(--border);">
        ${isEn ? 'View Item Details' : '詳細情報を確認'}
      </button>
    </div>
  `;
}

function getItemTier(item) {
  if (!window.itemIdToTierMap) {
    window.itemIdToTierMap = {};
    if (typeof RAW_CRAFT_TEMPLATES !== 'undefined') {
      RAW_CRAFT_TEMPLATES.forEach(tmpl => {
        const t = tmpl.tier;
        if (tmpl.itemsByGrade) {
          Object.values(tmpl.itemsByGrade).forEach(ids => {
            ids.forEach(id => {
              window.itemIdToTierMap[id] = t;
            });
          });
        }
      });
    }
  }
  
  const id = item.key || item.id || item.ItemKey;
  if (window.itemIdToTierMap[id]) {
    return window.itemIdToTierMap[id];
  }
  
  // レベルからの推測
  const lv = item.level || 0;
  if (lv <= 0) return 1;
  if (lv <= 10) return 1;
  if (lv <= 25) return 2;
  if (lv <= 45) return 3;
  if (lv <= 65) return 4;
  if (lv <= 85) return 5;
  if (lv <= 105) return 6;
  if (lv <= 125) return 7;
  return 8;
}

function runMultiSynthesisSim() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  const categoryEl = document.getElementById('multiSynthCategory');
  const levelEl = document.getElementById('multiSynthLevel');
  const gradeEl = document.getElementById('multiSynthGrade');
  const runsEl = document.getElementById('multiSynthRuns');
  
  if (!categoryEl || !levelEl || !gradeEl || !runsEl) return;
  
  const category = categoryEl.value;
  const levelVal = levelEl.value;
  const startGrade = gradeEl.value;
  const runs = parseInt(runsEl.value, 10);
  
  // 1. プール抽出
  const basePool = globalItems.filter(it => {
    if (it.obtainable === false) return false;
    if (it.type === 'STAGEBOX') return false;
    if (it.grade !== startGrade) return false;
    if (getSynthCategory(it) !== category) return false;
    
    if (category === 'MATERIAL') {
      const tierMatch = levelVal.match(/^TIER_(\d+)$/);
      if (!tierMatch) return false;
      const tNum = parseInt(tierMatch[1], 10);
      const lv = it.level || 0;
      
      // スクショの定義に基づくレベル範囲
      if (tNum === 1) { if (lv < 1 || lv > 10) return false; }
      else if (tNum === 2) { if (lv < 10 || lv > 20) return false; }
      else if (tNum === 3) { if (lv < 15 || lv > 30) return false; }
      else if (tNum === 4) { if (lv < 20 || lv > 40) return false; }
      else if (tNum === 5) { if (lv < 30 || lv > 50) return false; }
      else if (tNum === 6) { if (lv < 40 || lv > 65) return false; }
      else if (tNum === 7) { if (lv < 50 || lv > 65) return false; }
      else if (tNum === 8) { if (lv < 65 || lv > 80) return false; }
    } else {
      const targetLevel = parseInt(levelVal, 10);
      if (it.level !== targetLevel) return false;
    }
    return true;
  });
  
  if (basePool.length === 0) {
    alert(isEn 
      ? `No items found matching the selected conditions (${startGrade}, ${category}, Level/Tier ${levelVal}).`
      : `選択された条件（レアリティ: ${startGrade}, ジャンル: ${category}, レベル/ティア: ${levelVal}）に一致するアイテムが見つかりませんでした。`
    );
    return;
  }
  
  // シミュレーション実行
  let greatCount = 0;
  let successCount = 0;
  let failCount = 0;
  
  // 結果アイテムの集計用
  const resultItemCounts = {};
  
  const currentIdx = SYNTH_GRADE_ORDER.indexOf(startGrade);
  const rates = SYNTH_RATES[startGrade];
  
  if (!rates) {
    alert(isEn ? 'Synthesis is not supported for this grade.' : 'このグレードの合成はサポートされていません。');
    return;
  }

  const rangeEl = document.getElementById('multiSynthLevelRange');
  const rangeKey = rangeEl ? rangeEl.value : '1-10';
  
  for (let r = 0; r < runs; r++) {
    // 合成元9個のレベルを決定
    let totalLevel = 0;
    for (let i = 0; i < 9; i++) {
      const randomItem = basePool[Math.floor(Math.random() * basePool.length)];
      totalLevel += (randomItem.level || 0);
    }
    const avgLevel = Math.round(totalLevel / 9);
    
    const rand = Math.random();
    let resultGrade = startGrade;
    
    if (rand < rates.great) {
      const nextIdx = Math.min(currentIdx + 2, SYNTH_GRADE_ORDER.length - 1);
      resultGrade = SYNTH_GRADE_ORDER[nextIdx];
      greatCount++;
    } else if (rand < rates.great + rates.success) {
      const nextIdx = Math.min(currentIdx + 1, SYNTH_GRADE_ORDER.length - 1);
      resultGrade = SYNTH_GRADE_ORDER[nextIdx];
      successCount++;
    } else {
      resultGrade = startGrade;
      failCount++;
    }
    
    // 合成結果レベルの決定（GEAR/ACCESSORYの場合のみ確率計算。MATERIALの場合はavgLevelそのものを結果にする）
    const finalLevel = (category === 'MATERIAL') ? avgLevel : determineResultLevel(avgLevel, rangeKey);
    
    // 結果アイテムプール
    const resultPool = globalItems.filter(it => {
      if (it.obtainable === false) return false;
      if (it.type === 'STAGEBOX') return false;
      if (it.grade !== resultGrade) return false;
      if (getSynthCategory(it) !== category) return false;
      return (it.level || 0) === finalLevel; // 決定されたレベルに完全一致するものをプールから選ぶ
    });
    
    if (resultPool.length > 0) {
      const finalItem = resultPool[Math.floor(Math.random() * resultPool.length)];
      const itemKey = finalItem.key;
      
      // 集計
      if (!resultItemCounts[itemKey]) {
        resultItemCounts[itemKey] = {
          item: finalItem,
          count: 0
        };
      }
      resultItemCounts[itemKey].count++;
    }
  }
  
  // --- マーケット収支計算 (過去の取引履歴：2026-06-09以前の実売平均優先) ---

  function getItemHistoricalAvgPrice(item) {
    if (!item) return 0;
    if (typeof currentPriceDatabaseMode !== 'undefined' && currentPriceDatabaseMode === 'ai' && typeof aiPriceDatabase !== 'undefined') {
      if (item.key && aiPriceDatabase[item.key] !== undefined) {
        if (aiPriceDatabase[item.key] === 0) return 0;
        return Math.max(6, aiPriceDatabase[item.key]);
      }
    }
    
    // 不正チート格安出品の判定
    const isCheatPrice = (p, grade) => {
      const g = String(grade || '').toUpperCase();
      const minLimit = {
        'IMMORTAL': 40, 'ARCANA': 100, 'BEYOND': 300,
        'CELESTIAL': 7000, 'DIVINE': 12000, 'COSMIC': 40000
      };
      return (minLimit[g] && p < minLimit[g]);
    };
    
    const mData = getMarketDataForItem(item);
    if (!mData || !mData.history || mData.history.length === 0) {
      return Math.max(6, getGradeFallbackPrice(item.grade));
    }
    const targetLimit = new Date('2026-06-09').getTime();
    let sumPriceVol = 0;
    let sumVol = 0;
    mData.history.forEach(h => {
      const hTime = new Date(h.date).getTime();
      if (hTime <= targetLimit && h.volume > 0 && !isCheatPrice(h.price, item.grade)) {
        sumPriceVol += h.price * h.volume;
        sumVol += h.volume;
      }
    });
    if (sumVol > 0) {
      return Math.max(6, sumPriceVol / sumVol);
    }
    return Math.max(6, getGradeFallbackPrice(item.grade));
  }

  // basePool から実売平均の最安値を調べる
  let cheapestMaterialPrice = Infinity;
  basePool.forEach(it => {
    const price = getItemHistoricalAvgPrice(it);
    if (price && price > 0 && price < cheapestMaterialPrice) {
      cheapestMaterialPrice = price;
    }
  });

  const materialUnitCost = (cheapestMaterialPrice === Infinity) ? getGradeFallbackPrice(startGrade) : cheapestMaterialPrice;
  const totalMaterialCost = materialUnitCost * runs * 9;

  let totalRevenue = 0;
  // 各獲得アイテムの売上を集計
  Object.values(resultItemCounts).forEach(res => {
    const it = res.item;
    const count = res.count;
    const price = getItemHistoricalAvgPrice(it);
    totalRevenue += price * count;
  });

  const netProfit = totalRevenue - totalMaterialCost;

  // UIの更新
  const resultCard = document.getElementById('multiSynthResultCard');
  if (resultCard) {
    resultCard.style.display = 'flex';
  }
  
  const runsStat = document.getElementById('multiSynthStatRuns');
  const greatStat = document.getElementById('multiSynthStatGreat');
  const successStat = document.getElementById('multiSynthStatSuccess');
  const failStat = document.getElementById('multiSynthStatFail');
  
  if (runsStat) runsStat.textContent = `${runs.toLocaleString()} ${isEn ? 'times' : '回'}`;
  if (greatStat) greatStat.textContent = `${greatCount} (${((greatCount/runs)*100).toFixed(1)}%)`;
  if (successStat) successStat.textContent = `${successCount} (${((successCount/runs)*100).toFixed(1)}%)`;
  if (failStat) failStat.textContent = `${failCount} (${((failCount/runs)*100).toFixed(1)}%)`;

  // 収支関連要素の更新
  const costLabel = document.getElementById('multiSynthCostLabel');
  const revenueLabel = document.getElementById('multiSynthRevenueLabel');
  const profitLabel = document.getElementById('multiSynthProfitLabel');
  const priceNoteText = document.getElementById('multiSynthPriceNoteText');
  
  const costValEl = document.getElementById('multiSynthCostVal');
  const revenueValEl = document.getElementById('multiSynthRevenueVal');
  const profitValEl = document.getElementById('multiSynthProfitVal');

  const symbol = getMarketCurrencySymbol() || '$';

  if (costLabel) costLabel.textContent = isEn ? 'Est. Material Cost:' : '見込み材料費:';
  if (revenueLabel) revenueLabel.textContent = isEn ? 'Est. Revenue:' : '見込み総売上:';
  if (profitLabel) profitLabel.textContent = isEn ? 'Est. Net Profit (Balance):' : '見込み純利益 (収支):';
  if (priceNoteText) {
    priceNoteText.textContent = isEn 
      ? 'Calculations are based on historical average transaction prices before June 9, 2026.'
      : '収支計算は2026年6月9日以前の「取引履歴の平均価格（実売平均）」を基準に算出しています。';
  }

  if (costValEl) costValEl.textContent = `${symbol}${totalMaterialCost.toLocaleString(undefined, {maximumFractionDigits: 1})}`;
  if (revenueValEl) revenueValEl.textContent = `${symbol}${totalRevenue.toLocaleString(undefined, {maximumFractionDigits: 1})}`;
  
  if (profitValEl) {
    profitValEl.textContent = `${netProfit >= 0 ? '+' : ''}${symbol}${netProfit.toLocaleString(undefined, {maximumFractionDigits: 1})}`;
    profitValEl.style.color = netProfit >= 0 ? '#00ff80' : '#ff5353';
  }
  
  const itemListEl = document.getElementById('multiSynthResultItemList');
  if (itemListEl) {
    itemListEl.innerHTML = '';
    
    // 個数順にソートして描画
    const sortedResults = Object.values(resultItemCounts).sort((a, b) => b.count - a.count);
    
    sortedResults.forEach(res => {
      const it = res.item;
      const count = res.count;
      
      const itemRow = document.createElement('div');
      itemRow.className = 'multi-synth-item-row';
      itemRow.onclick = () => showItemDetail(it.key);
      
      const color = getGradeColor(it.grade);
      
      // 日本語名優先とA/Bサフィックス
      let nameStr = isEn ? it.name : (it.name_ja || it.name);
      if (it.type === 'GEAR') {
        const keyStr = String(it.key);
        if (keyStr.endsWith('1')) nameStr += ' A';
        else if (keyStr.endsWith('2')) nameStr += ' B';
      }
      
      const iconName = it.icon || 'Item_910011';
      const iconHtml = `<img src="data/icon_cache/${iconName}.png" style="width:24px; height:24px; object-fit:contain; image-rendering:pixelated;" onerror="this.src='https://taskbarherowiki.com/icons/${iconName}.png'; this.onerror=()=>this.style.display='none';" />`;
      
      const price = getItemHistoricalAvgPrice(it);
      const totalItemRevenue = price * count;

      itemRow.innerHTML = `
        <div style="width:30px; height:30px; border:1px solid ${color}; border-radius:4px; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.3); flex-shrink:0;">
          ${iconHtml}
        </div>
        <div style="flex-grow:1; min-width:0;">
          <div style="font-size:12px; font-weight:bold; color:var(--text-pri); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${nameStr}</div>
          <div style="font-size:10px; color:${color}; font-weight:bold; font-family:'Rajdhani', sans-serif; display:flex; gap:6px;">
            <span>${it.grade}</span>
            <span style="color:#888; font-weight:normal;">(${symbol}${price.toLocaleString(undefined, {maximumFractionDigits: 1})} ${isEn ? 'Hist. Avg' : '実売平均'})</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:1px; flex-shrink:0;">
          <div style="font-family:'Rajdhani', sans-serif; font-size:13px; font-weight:bold; color:var(--accent);">
            x ${count}
          </div>
          <div style="font-family:'Rajdhani', sans-serif; font-size:11px; color:#ffbb00; font-weight:bold;">
            ${symbol}${totalItemRevenue.toLocaleString(undefined, {maximumFractionDigits: 1})}
          </div>
        </div>
      `;
      itemListEl.appendChild(itemRow);
    });
  }
}

function updateMultiSynthLevelOptions() {
  const categoryEl = document.getElementById('multiSynthCategory');
  const levelEl = document.getElementById('multiSynthLevel');
  if (!categoryEl || !levelEl) return;
  
  const category = categoryEl.value;
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  const rangeCol = document.getElementById('multiSynthLevelRangeCol');
  const inputsRow = document.getElementById('multi-synth-inputs-row1');
  const levelLabel = document.getElementById('multiSynthLevelLabel');
  
  if (category === 'MATERIAL') {
    if (rangeCol) rangeCol.style.display = 'none';
    if (inputsRow) inputsRow.style.gridTemplateColumns = '1fr 1fr';
    if (levelLabel) {
      levelLabel.textContent = isEn ? 'Level / Tier:' : 'レベル / ティア：';
    }
  } else {
    if (rangeCol) rangeCol.style.display = 'block';
    if (inputsRow) inputsRow.style.gridTemplateColumns = '1fr 1fr 1fr';
    if (levelLabel) {
      levelLabel.textContent = isEn ? 'Avg Material Level:' : '材料平均レベル：';
    }
  }
  
  // 現在の選択状態を退避
  const prevVal = levelEl.value;
  
  levelEl.innerHTML = '';
  
  if (category === 'MATERIAL') {
    // 素材は Tier 1 ~ 8 の選択肢
    for (let i = 1; i <= 8; i++) {
      const opt = document.createElement('option');
      opt.value = `TIER_${i}`;
      opt.textContent = `Tier ${i}`;
      levelEl.appendChild(opt);
    }
  } else {
    // 装備・アクセサリは全 obtainable アイテムからレベルの重複しない昇順リストを抽出
    const levelsSet = new Set();
    globalItems.forEach(it => {
      if (it.obtainable === false) return;
      if (it.type === 'STAGEBOX') return;
      if (getSynthCategory(it) === category) {
        levelsSet.add(it.level || 0);
      }
    });
    
    const sortedLevels = Array.from(levelsSet).sort((a, b) => a - b);
    sortedLevels.forEach(lv => {
      const opt = document.createElement('option');
      opt.value = lv.toString();
      opt.textContent = `Lv. ${lv}`;
      levelEl.appendChild(opt);
    });
  }
  
  // 以前の選択状態を復元（存在すれば）
  if (prevVal) {
    levelEl.value = prevVal;
  }
  
  // もし何も選ばれていない（以前の値が今の選択肢にない）場合は最初の要素にする
  if (!levelEl.value && levelEl.options.length > 0) {
    levelEl.selectedIndex = 0;
  }
}

