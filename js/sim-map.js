/* ──────────────────────────────────────────────
   FARMING PLANNER (OPTIMIZER)
────────────────────────────────────────────── */
let farmConfig = {
  times: {},
  ceiling: null,
  heroLevel: "30",
  expBonus: "0",
  goldBonus: "0",
  mode: "exp",
  chestCt: "11",
  chestProb: "100"
};

function calculateFarmPenalty(heroLevel, stageLevel) {
  let isOver = heroLevel >= stageLevel;
  let a = isOver ? 0.5 : 0.4;
  let s = Math.log(heroLevel + 1) / 10 + 1;
  let n = Math.trunc(s * (isOver ? 2 : 5));
  let r = Math.trunc(s * (isOver ? 5 : 6));
  let diff = Math.abs(heroLevel - stageLevel);
  if (diff <= n) return 1.0;
  if (diff <= n + r) {
    let e = (diff - n) / r;
    return Math.max(1 - (1 - a) * e * e, 0.01);
  }
  return Math.max(((0.01 / a) ** ((diff - n - r) / Math.max(heroLevel / 3, 1))) * a, 0.01);
}

function parseTimeInput(str) {
  if (!str) return null;
  str = str.trim();
  if (str.includes(':')) {
    let parts = str.split(':');
    let m = Number(parts[0]);
    let s = Number(parts[1]);
    if (isNaN(m) || isNaN(s)) return null;
    return m * 60 + s;
  }
  str = str.replace(/[s秒]/g, '');
  let val = Number(str);
  if (isNaN(val) || val <= 0) return null;
  return val;
}

function formatTimeSec(sec) {
  if (sec == null || isNaN(sec)) return '--';
  let m = Math.floor(sec / 60);
  let s = Math.round(sec % 60);
  if (m > 0) {
    return `${m}m ${s}s`;
  }
  return `${s}s`;
}

function formatFarmNumber(val) {
  if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
  if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
  return Math.round(val).toString();
}

let selectedFavItemKeysForFarm = new Set();

function renderFarmFavItems() {
  const listEl = document.getElementById('farm-fav-items-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  
  const stageBoxItemKeys = new Set();
  if (typeof globalChests !== 'undefined' && globalChests) {
    globalChests.forEach(chest => {
      const srcName = chest.sources && chest.sources[0] && chest.sources[0].name;
      if (srcName && srcName.startsWith('Stage Boss Box')) {
        const pool = chest.pools && chest.pools[0];
        if (pool && pool.entries) {
          pool.entries.forEach(ent => {
            if (ent.items) {
              ent.items.forEach(k => stageBoxItemKeys.add(String(k)));
            }
          });
        }
      }
    });
  }
  
  const favStageItems = [];
  if (typeof favoriteItems !== 'undefined') {
    favoriteItems.forEach(keyStr => {
      if (stageBoxItemKeys.has(keyStr)) {
        const item = globalItems.find(it => String(it.key) === keyStr);
        if (item) favStageItems.push(item);
      }
    });
  }
  
  if (favStageItems.length === 0) {
    listEl.innerHTML = '<div style="font-size:12px; color:var(--text-sec); text-align:center; padding:10px;">Stage Boss Boxからドロップするお気に入りアイテムがありません。<br>アイテムデータベース（☆）で登録してください。</div>';
    return;
  }
  
  favStageItems.forEach(item => {
    const color = getGradeColor ? getGradeColor(item.grade) : '#7a85a8';
    const label = document.createElement('label');
    label.style.cssText = 'display:flex; align-items:center; gap:8px; font-size:12px; cursor:pointer; user-select:none; color:var(--text-pri); padding:6px 10px; border-radius:6px; background:rgba(255,255,255,0.02); border:1px solid var(--border-soft); transition:all 0.2s;';
    label.onmouseenter = function() { this.style.background = 'rgba(255,255,255,0.06)'; };
    label.onmouseleave = function() { this.style.background = 'rgba(255,255,255,0.02)'; };
    
    const isChecked = selectedFavItemKeysForFarm.has(String(item.key));
    const iconName = item.icon || 'Item_910011';
    
    label.innerHTML = `
      <input type="checkbox" value="${item.key}" ${isChecked ? 'checked' : ''} style="cursor:pointer;" onchange="onFarmFavItemToggle(this)">
      <img src="https://taskbarherowiki.com/icons/${iconName}.png" onerror="this.style.display='none'" style="width:20px; height:20px; object-fit:contain; image-rendering:pixelated; border-radius:3px; background:var(--bg-secondary); border:1px solid var(--border);" />
      <div style="display:flex; flex-direction:column; min-width:0; flex:1; line-height:1.2;">
        <span style="color:${color}; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</span>
        <span style="font-size:9px; color:var(--text-sec);">#${item.key}</span>
      </div>
    `;
    listEl.appendChild(label);
  });
}

function onFarmFavItemToggle(cb) {
  const key = String(cb.value);
  if (cb.checked) {
    selectedFavItemKeysForFarm.add(key);
  } else {
    selectedFavItemKeysForFarm.delete(key);
  }
  recalculateFarm();
}

function initFarm() {
  if (typeof WIKI_STAGES === 'undefined') {
    console.error("WIKI_STAGES is not defined!");
    return;
  }
  try {
    let saved = localStorage.getItem('tbh-exp-farm-v1');
    if (saved) {
      let parsed = JSON.parse(saved);
      if (parsed) {
        farmConfig.times = parsed.times || {};
        if (parsed.ceiling != null) farmConfig.ceiling = Number(parsed.ceiling);
        if (parsed.heroLevel != null) farmConfig.heroLevel = String(parsed.heroLevel);
        if (parsed.expBonus != null) farmConfig.expBonus = String(parsed.expBonus);
        if (parsed.goldBonus != null) farmConfig.goldBonus = String(parsed.goldBonus);
        if (parsed.mode != null) farmConfig.mode = String(parsed.mode);
        if (parsed.chestCt != null) farmConfig.chestCt = String(parsed.chestCt);
        if (parsed.chestProb != null) farmConfig.chestProb = String(parsed.chestProb);
      }
    }
  } catch (err) {
    console.error("Failed to load farm localStorage:", err);
  }
  if (!farmConfig.times[1101]) {
    farmConfig.times[1101] = "45s";
  }
  document.getElementById('farm-input-hero-level').value = farmConfig.heroLevel;
  document.getElementById('farm-input-bonus').value = farmConfig.mode === 'exp' ? farmConfig.expBonus : farmConfig.goldBonus;
  document.getElementById('farm-input-chest-ct').value = farmConfig.chestCt;
  document.getElementById('farm-input-chest-prob').value = farmConfig.chestProb;
  document.getElementById('farm-input-time-1-1').value = farmConfig.times[1101] || "";
  setFarmMode(farmConfig.mode, false);
  buildCeilingSelect();
  if (farmConfig.ceiling != null) {
    document.getElementById('farm-select-ceiling').value = farmConfig.ceiling;
    document.getElementById('farm-input-time-ceiling').value = farmConfig.times[farmConfig.ceiling] || "";
    updateCeilingSelectColor();
  }
  recalculateFarm();
}

function updateCeilingSelectColor() {
  const select = document.getElementById('farm-select-ceiling');
  if (!select) return;
  const val = select.value;
  if (!val) {
    select.style.color = 'var(--text-sec)';
    return;
  }
  if (typeof WIKI_STAGES === 'undefined') return;
  const stagesMap = new Map(WIKI_STAGES.map(s => [s.key, s]));
  const stage = stagesMap.get(Number(val));
  if (stage) {
    const getDiffColor = (diff) => {
      if (diff === 'NORMAL') return '#b0bec5';
      if (diff === 'NIGHTMARE') return '#29b6f6';
      if (diff === 'HELL') return '#ab47bc';
      if (diff === 'TORMENT') return '#ef5350';
      return '#fff';
    };
    select.style.color = getDiffColor(stage.difficulty);
    select.style.fontWeight = '700';
  } else {
    select.style.color = 'var(--text-pri)';
  }
}

function buildCeilingSelect() {
  const select = document.getElementById('farm-select-ceiling');
  if (!select) return;
  select.innerHTML = '<option value="" style="color:var(--text-sec); background:var(--bg-primary);">-- 上限ステージを選択 --</option>';
  const groups = {};
  WIKI_STAGES.forEach(s => {
    if (!groups[s.difficulty]) groups[s.difficulty] = [];
    groups[s.difficulty].push(s);
  });
  
  const getDiffColor = (diff) => {
    if (diff === 'NORMAL') return '#b0bec5';
    if (diff === 'NIGHTMARE') return '#29b6f6';
    if (diff === 'HELL') return '#ab47bc';
    if (diff === 'TORMENT') return '#ef5350';
    return '#fff';
  };
  
  const difficulties = ["NORMAL", "NIGHTMARE", "HELL", "TORMENT"];
  difficulties.forEach(diff => {
    if (groups[diff]) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = diff;
      optgroup.style.color = getDiffColor(diff);
      optgroup.style.backgroundColor = 'var(--bg-primary)';
      
      groups[diff].sort((a,b) => a.level - b.level);
      groups[diff].forEach(s => {
        if (s.key === 1101) return;
        const opt = document.createElement('option');
        opt.value = s.key;
        opt.textContent = `[${s.difficulty}] ${s.label} · ${s.name} (Lv.${s.level})`;
        opt.style.color = getDiffColor(s.difficulty);
        opt.style.backgroundColor = 'var(--bg-primary)';
        opt.style.fontWeight = '600';
        optgroup.appendChild(opt);
      });
      select.appendChild(optgroup);
    }
  });
}

function setFarmMode(mode, triggerRecalc = true) {
  farmConfig.mode = mode;
  const expBtn = document.getElementById('farm-btn-mode-exp');
  const goldBtn = document.getElementById('farm-btn-mode-gold');
  const chestBtn = document.getElementById('farm-btn-mode-chest');
  const favBtn = document.getElementById('farm-btn-mode-fav');
  
  const heroLevelRow = document.getElementById('farm-row-hero-level');
  const bonusRow = document.getElementById('farm-row-bonus');
  const bonusLabel = document.getElementById('farm-label-bonus');
  const chestConfigRow = document.getElementById('farm-row-chest-config');
  const favItemsRow = document.getElementById('farm-row-fav-items');
  const hintText = document.getElementById('farm-hint-text');
  
  // アクティブクラスの切り替え
  [expBtn, goldBtn, chestBtn, favBtn].forEach(btn => btn && btn.classList.remove('active'));
  if (mode === 'exp' && expBtn) expBtn.classList.add('active');
  if (mode === 'gold' && goldBtn) goldBtn.classList.add('active');
  if (mode === 'chest' && chestBtn) chestBtn.classList.add('active');
  if (mode === 'fav' && favBtn) favBtn.classList.add('active');
  
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  
  if (mode === 'exp') {
    heroLevelRow.style.display = 'flex';
    bonusRow.style.display = 'flex';
    chestConfigRow.style.display = 'none';
    favItemsRow.style.display = 'none';
    bonusLabel.textContent = isEn ? 'EXP Bonus:' : '経験値ボーナス:';
    document.getElementById('farm-input-bonus').value = farmConfig.expBonus;
    hintText.textContent = isEn 
      ? '* Over-level EXP penalties per stage are automatically applied based on your hero level.'
      : '※ヒーローレベルに応じて、ステージごとの隠れたオーバーレベル経験値ペナルティが自動適用されます。';
    document.getElementById('farm-th-val-clear').textContent = isEn ? 'EXP/Run' : '経験値/周';
    document.getElementById('farm-th-val-hr').textContent = isEn ? 'EXP/Hr' : '経験値/時';
    document.getElementById('farm-th-val-hp').textContent = isEn ? 'EXP/HP' : '経験値/HP';
    document.getElementById('farm-table-title').textContent = isEn ? 'Farming Stage Ranking (EXP Focus)' : '周回効率ステージランキング (経験値重視)';
    document.getElementById('farm-best-title').textContent = isEn ? 'Optimal EXP Farming Stage' : '最適経験値周回ステージ';
    document.getElementById('farm-penalty-panel').style.display = 'block';
  } else if (mode === 'gold') {
    heroLevelRow.style.display = 'none';
    bonusRow.style.display = 'flex';
    chestConfigRow.style.display = 'none';
    favItemsRow.style.display = 'none';
    bonusLabel.textContent = isEn ? 'Gold Bonus:' : 'ゴールドボーナス:';
    document.getElementById('farm-input-bonus').value = farmConfig.goldBonus;
    hintText.textContent = isEn
      ? '* There is no level penalty for gold acquisition. The stage with the best pure Gold/Hr efficiency is selected.'
      : '※ゴールド獲得量にはレベルペナルティはありません。純粋に最もゴールド/時効率が良いステージが選ばれます。';
    document.getElementById('farm-th-val-clear').textContent = isEn ? 'Gold/Run' : 'ゴールド/周';
    document.getElementById('farm-th-val-hr').textContent = isEn ? 'Gold/Hr' : 'ゴールド/時';
    document.getElementById('farm-th-val-hp').textContent = isEn ? 'Gold/HP' : 'ゴールド/HP';
    document.getElementById('farm-table-title').textContent = isEn ? 'Farming Stage Ranking (Gold Focus)' : '周回効率ステージランキング (ゴールド重視)';
    document.getElementById('farm-best-title').textContent = isEn ? 'Optimal Gold Farming Stage' : '最適ゴールド周回ステージ';
    document.getElementById('farm-penalty-panel').style.display = 'none';
  } else if (mode === 'chest') {
    heroLevelRow.style.display = 'none';
    bonusRow.style.display = 'none';
    chestConfigRow.style.display = 'flex';
    favItemsRow.style.display = 'none';
    hintText.textContent = isEn
      ? '* Calculates the cycle where Stage Boss Box drops on the first boss defeat after the configured cooldown (CT).'
      : '※常時周回時、設定されたクールタイム（CT）経過後の最初のボス撃破でStage Boss Boxが落ちるサイクルを計算します。';
    document.getElementById('farm-th-val-clear').textContent = isEn ? 'EV/Chest' : '期待値/箱';
    document.getElementById('farm-th-val-hr').textContent = isEn ? 'Profit/Hr (1h)' : '利益/時 (1h)';
    document.getElementById('farm-th-val-hp').textContent = isEn ? 'Profit/Day (24h)' : '利益/日 (24h)';
    document.getElementById('farm-table-title').textContent = isEn ? 'Farming Stage Ranking (Chest Profit)' : '周回効率ステージランキング (宝箱金策効率)';
    document.getElementById('farm-best-title').textContent = isEn ? 'Optimal Chest Farming Stage' : '最適宝箱金策周回ステージ';
    document.getElementById('farm-penalty-panel').style.display = 'none';
  } else if (mode === 'fav') {
    heroLevelRow.style.display = 'none';
    bonusRow.style.display = 'none';
    chestConfigRow.style.display = 'flex';
    favItemsRow.style.display = 'flex';
    hintText.textContent = isEn
      ? '* Finds stages that drop Stage Boss Boxes containing all selected items and calculates acquisition probability.'
      : '※選択されたすべてのアイテムを同時に含むStage Boss Boxをドロップするステージを検索し、入手確率を計算します。';
    document.getElementById('farm-th-val-clear').textContent = isEn ? 'Fav EV/Chest' : '期待獲得率/箱';
    document.getElementById('farm-th-val-hr').textContent = isEn ? 'Prob (1h)' : '期待確率 (1h)';
    document.getElementById('farm-th-val-hp').textContent = isEn ? 'Prob (24h)' : '期待確率 (24h)';
    document.getElementById('farm-table-title').textContent = isEn ? 'Farming Stage Ranking (Fav Items Focus)' : '周回効率ステージランキング (お気に入りアイテム狙い)';
    document.getElementById('farm-best-title').textContent = isEn ? 'Optimal Fav Items Farming Stage' : '最適お気に入り周回ステージ';
    document.getElementById('farm-penalty-panel').style.display = 'none';
    renderFarmFavItems();
  }
  
  if (triggerRecalc) {
    saveFarmConfig();
    recalculateFarm();
  }
}

function onCeilingStageChange() {
  const select = document.getElementById('farm-select-ceiling');
  const key = select.value ? Number(select.value) : null;
  farmConfig.ceiling = key;
  if (key != null) {
    document.getElementById('farm-input-time-ceiling').value = farmConfig.times[key] || "";
  } else {
    document.getElementById('farm-input-time-ceiling').value = "";
  }
  updateCeilingSelectColor();
  saveFarmConfig();
  recalculateFarm();
}

function onFarmConfigChange() {
  farmConfig.heroLevel = document.getElementById('farm-input-hero-level').value;
  const bonusVal = document.getElementById('farm-input-bonus').value;
  if (farmConfig.mode === 'exp') {
    farmConfig.expBonus = bonusVal;
  } else if (farmConfig.mode === 'gold') {
    farmConfig.goldBonus = bonusVal;
  }
  farmConfig.chestCt = document.getElementById('farm-input-chest-ct').value;
  farmConfig.chestProb = document.getElementById('farm-input-chest-prob').value;
  
  farmConfig.times[1101] = document.getElementById('farm-input-time-1-1').value;
  if (farmConfig.ceiling != null) {
    farmConfig.times[farmConfig.ceiling] = document.getElementById('farm-input-time-ceiling').value;
  }
  saveFarmConfig();
  recalculateFarm();
}

function saveFarmConfig() {
  try {
    localStorage.setItem('tbh-exp-farm-v1', JSON.stringify({
      times: farmConfig.times,
      ceiling: farmConfig.ceiling,
      heroLevel: farmConfig.heroLevel,
      expBonus: farmConfig.expBonus,
      goldBonus: farmConfig.goldBonus,
      mode: farmConfig.mode,
      chestCt: farmConfig.chestCt,
      chestProb: farmConfig.chestProb
    }));
  } catch (err) {
    console.error("Failed to save farm config to localStorage:", err);
  }
}

function recalculateFarm() {
  if (typeof WIKI_STAGES === 'undefined') return;
  const ceilingKey = farmConfig.ceiling;
  const time11Str = farmConfig.times[1101];
  const timeCeilStr = ceilingKey ? farmConfig.times[ceilingKey] : null;
  const t11 = parseTimeInput(time11Str);
  const tCeil = parseTimeInput(timeCeilStr);
  const stagesMap = new Map(WIKI_STAGES.map(s => [s.key, s]));
  const stage11 = stagesMap.get(1101);
  const stageCeil = ceilingKey ? stagesMap.get(ceilingKey) : null;
  const parsedHeroLevel = parseInt(farmConfig.heroLevel, 10);
  const heroLevel = isNaN(parsedHeroLevel) || parsedHeroLevel <= 0 ? null : parsedHeroLevel;
  
  const mode = farmConfig.mode;
  const isGold = mode === 'gold';
  
  const dpsEl = document.getElementById('farm-val-dps');
  const floorKEl = document.getElementById('farm-val-floor-k');
  const anchorsEl = document.getElementById('farm-val-anchors');
  const fitEl = document.getElementById('farm-val-fit');
  const bestStageLabelEl = document.getElementById('farm-best-stage-label');
  const bestStageNameEl = document.getElementById('farm-best-stage-name');
  const bestStageDescEl = document.getElementById('farm-best-stage-desc');
  const bestComparisonEl = document.getElementById('farm-best-comparison');
  const tableBody = document.getElementById('farm-table-body');
  
  if (t11 == null || tCeil == null || !stageCeil) {
    dpsEl.textContent = '--';
    floorKEl.textContent = '--';
    anchorsEl.textContent = '0 (1-1 のみ)';
    fitEl.textContent = '--';
    bestStageLabelEl.textContent = '--';
    bestStageNameEl.textContent = '--';
    bestStageDescEl.textContent = 'タイムと上限ステージを正しく入力してください。';
    bestComparisonEl.textContent = '--';
    tableBody.innerHTML = '<tr><td colspan="8" style="text-align:center; color:var(--text-sec); padding:20px;">1-1と上限ステージのタイムを入力してください。</td></tr>';
    return;
  }
  
  const fitPoints = [
    { HP: stage11.totalHP, waves: stage11.waves, T: t11 },
    { HP: stageCeil.totalHP, waves: stageCeil.waves, T: tCeil }
  ];
  let sumHP2 = 0, sumHPWaves = 0, sumWaves2 = 0, sumHPT = 0, sumWavesT = 0;
  for (let pt of fitPoints) {
    sumHP2 += pt.HP * pt.HP;
    sumHPWaves += pt.HP * pt.waves;
    sumWaves2 += pt.waves * pt.waves;
    sumHPT += pt.HP * pt.T;
    sumWavesT += pt.waves * pt.T;
  }
  let det = sumHP2 * sumWaves2 - sumHPWaves * sumHPWaves;
  let a_coeff = 0;
  let k_coeff = 0;
  if (Math.abs(det) < 0.001) {
    a_coeff = tCeil / stageCeil.totalHP;
    k_coeff = 0;
  } else {
    a_coeff = (sumHPT * sumWaves2 - sumWavesT * sumHPWaves) / det;
    k_coeff = (sumHP2 * sumWavesT - sumHPWaves * sumHPT) / det;
    if (k_coeff < 0) {
      k_coeff = 0;
      a_coeff = sumHPT / sumHP2;
    }
  }
  const dps = a_coeff > 0 ? 1 / a_coeff : 0;
  const waveTax = k_coeff;
  dpsEl.textContent = dps > 0 ? Math.round(dps).toLocaleString() : '--';
  floorKEl.textContent = `${waveTax.toFixed(1)}s`;
  anchorsEl.textContent = '2 (1-1 & 上限)';
  fitEl.textContent = '適合率 100%';
  
  const estimateClearTime = stage => {
    return a_coeff * stage.totalHP + k_coeff * stage.waves;
  };
  
  const chestCt = parseInt(farmConfig.chestCt, 10) || 11;
  const chestProb = (parseInt(farmConfig.chestProb, 10) || 100) / 100;
  const CT_sec = chestCt * 60;
  
  const ranked = WIKI_STAGES.filter(s => s.level <= stageCeil.level)
    .map(s => {
      const T = estimateClearTime(s);
      
      if (mode === 'exp' || mode === 'gold') {
        const bonusVal = Number(mode === 'exp' ? farmConfig.expBonus : farmConfig.goldBonus);
        const bonusFactor = isFinite(bonusVal) && bonusVal > 0 ? 1 + bonusVal / 100 : 1;
        const penalty = (mode === 'exp' && heroLevel != null) ? calculateFarmPenalty(heroLevel, s.level) : 1.0;
        const baseReward = isGold ? s.gold.expectedGold : s.expectedEXP;
        const effReward = baseReward * penalty * bonusFactor;
        const eph = T > 0 ? (effReward / T) * 3600 : 0;
        const rewardPerHP = s.totalHP > 0 ? effReward / s.totalHP : 0;
        return {
          stage: s,
          T: T,
          penalty: penalty,
          effVal: effReward,
          eph: eph,
          rewardPerHP: rewardPerHP
        };
      } else if (mode === 'chest') {
        const runsPerCycle = Math.ceil(CT_sec / T);
        const cycleTime = runsPerCycle * T;
        const cyclesPerHr = cycleTime > 0 ? 3600 / cycleTime : 0;
        const boxesPerHr = cyclesPerHr * chestProb;
        const boxesPer24h = boxesPerHr * 24;
        
        const chest = typeof globalChests !== 'undefined'
          ? globalChests.find(c => {
              const srcName = c.sources && c.sources[0] && c.sources[0].name;
              const isBossBox = srcName && srcName.startsWith('Stage Boss Box');
              if (!isBossBox) return false;
              return c.stages && c.stages.some(st => st.label === s.label && st.difficulty === s.difficulty);
            })
          : null;
        
        const boxEv = chest ? getChestEvForRanking(chest, false) : 0;
        const effReward = boxEv;
        const eph = boxesPerHr * boxEv;
        const rewardPerHP = boxesPer24h * boxEv;
        
        return {
          stage: s,
          T: T,
          penalty: 1.0,
          effVal: effReward,
          eph: eph,
          rewardPerHP: rewardPerHP
        };
      } else if (mode === 'fav') {
        const runsPerCycle = Math.ceil(CT_sec / T);
        const cycleTime = runsPerCycle * T;
        const cyclesPerHr = cycleTime > 0 ? 3600 / cycleTime : 0;
        const boxesPerHr = cyclesPerHr * chestProb;
        const boxesPer24h = boxesPerHr * 24;
        
        let pTarget = 0;
        let foundAnyBox = false;
        
        if (selectedFavItemKeysForFarm.size > 0 && typeof globalChests !== 'undefined') {
          const chest = globalChests.find(c => {
            const srcName = c.sources && c.sources[0] && c.sources[0].name;
            const isBossBox = srcName && srcName.startsWith('Stage Boss Box');
            if (!isBossBox) return false;
            
            const isForStage = c.stages && c.stages.some(st => st.label === s.label && st.difficulty === s.difficulty);
            if (!isForStage) return false;
            
            const pool = c.pools && c.pools[0];
            if (!pool || !pool.entries) return false;
            
            const allPoolItems = new Set();
            pool.entries.forEach(ent => {
              if (ent.items) ent.items.forEach(k => allPoolItems.add(String(k)));
            });
            
            for (let key of selectedFavItemKeysForFarm) {
              if (!allPoolItems.has(key)) return false;
            }
            return true;
          });
          
          if (chest) {
            foundAnyBox = true;
            const pool = chest.pools[0];
            pool.entries.forEach(ent => {
              if (!ent.items) return;
              const matches = ent.items.filter(k => selectedFavItemKeysForFarm.has(String(k)));
              if (matches.length > 0) {
                pTarget += ent.probability * (matches.length / ent.items.length);
              }
            });
          }
        }
        
        const p1h = foundAnyBox ? 1 - Math.pow(1 - pTarget, boxesPerHr) : 0;
        const p24h = foundAnyBox ? 1 - Math.pow(1 - pTarget, boxesPer24h) : 0;
        
        return {
          stage: s,
          T: T,
          penalty: 1.0,
          effVal: pTarget,
          eph: p1h,
          rewardPerHP: p24h
        };
      }
    })
    .filter(r => r && (r.eph > 0 || mode === 'fav'))
    .sort((a, b) => b.eph - a.eph);
    
  renderFarmTable(ranked, mode, ceilingKey);
  
  if (ranked.length > 0) {
    const best = ranked[0];
    bestStageLabelEl.textContent = best.stage.label;
    bestStageNameEl.textContent = best.stage.name;
    
    const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
    const currencySymbol = getMarketCurrencySymbol();

    if (mode === 'exp' || mode === 'gold') {
      const unit = isGold ? (isEn ? 'Gold' : 'ゴールド') : (isEn ? 'EXP' : '経験値');
      bestStageDescEl.textContent = isEn
        ? `Hourly: ${Math.round(best.eph).toLocaleString()} ${unit} / Est. Run Time: ${formatTimeSec(best.T)}`
        : `毎時: ${Math.round(best.eph).toLocaleString()} ${unit} / 周回想定時間: ${formatTimeSec(best.T)}`;
    } else if (mode === 'chest') {
      bestStageDescEl.textContent = isEn
        ? `Hourly: Est. Profit ${currencySymbol}${Math.round(best.eph).toLocaleString()} (Daily ${currencySymbol}${Math.round(best.rewardPerHP).toLocaleString()}) / Est. Run Time: ${formatTimeSec(best.T)}`
        : `毎時: 期待利益 ${currencySymbol}${Math.round(best.eph).toLocaleString()} (日給 ${currencySymbol}${Math.round(best.rewardPerHP).toLocaleString()}) / 周回想定時間: ${formatTimeSec(best.T)}`;
    } else if (mode === 'fav') {
      if (selectedFavItemKeysForFarm.size === 0) {
        bestStageDescEl.textContent = isEn ? 'Please check favorite items.' : 'お気に入りアイテムをチェックしてください。';
      } else if (best.eph === 0) {
        bestStageDescEl.textContent = isEn
          ? 'No chests found containing all selected items simultaneously.'
          : '選択されたすべてのアイテムを同時にドロップする宝箱が見つかりませんでした。';
      } else {
        bestStageDescEl.textContent = isEn
          ? `1h Prob: ${(best.eph * 100).toFixed(2)}% (24h Prob: ${(best.rewardPerHP * 100).toFixed(2)}%) / Est. Run Time: ${formatTimeSec(best.T)}`
          : `1時間期待確率: ${(best.eph * 100).toFixed(2)}% (24時間確率: ${(best.rewardPerHP * 100).toFixed(2)}%) / 周回想定時間: ${formatTimeSec(best.T)}`;
      }
    }
    
    const ceilRow = ranked.find(r => r.stage.key === ceilingKey);
    if (ceilRow && ceilRow.eph > 0) {
      if (best.stage.key === ceilingKey) {
        bestComparisonEl.textContent = isEn
          ? `Ceiling stage ${stageCeil.label} is your most efficient hunting ground.`
          : `上限ステージ ${stageCeil.label} がそのまま最も効率の良い狩場です。`;
      } else {
        const diffPct = ((best.eph / ceilRow.eph) - 1) * 100;
        bestComparisonEl.textContent = isEn
          ? `Outperforms ceiling stage ${stageCeil.label} by ${diffPct.toFixed(1)}% hourly! (Highly Recommended)`
          : `上限ステージ ${stageCeil.label} を毎時効率で ${diffPct.toFixed(1)}% 上回ります！ (周回推奨)`;
      }
    } else {
      bestComparisonEl.textContent = '';
    }
  } else {
    bestStageLabelEl.textContent = '--';
    bestStageNameEl.textContent = '--';
    bestStageDescEl.textContent = isEn ? 'No farmable stage found.' : '周回可能なステージがありません。';
    bestComparisonEl.textContent = '--';
  }
  
  if (mode === 'exp' && heroLevel != null) {
    updatePenaltyTable(heroLevel);
  }
}

function renderFarmTable(ranked, mode, ceilingKey) {
  const tbody = document.getElementById('farm-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const currencySymbol = getMarketCurrencySymbol();

  ranked.forEach(row => {
    const s = row.stage;
    const isCeil = s.key === ceilingKey;
    const is11 = s.key === 1101;
    const tr = document.createElement('tr');
    if (isCeil) {
      tr.style.background = 'rgba(100,255,218,0.05)';
      tr.style.borderLeft = '3px solid var(--accent)';
    } else if (is11) {
      tr.style.background = 'rgba(255,255,255,0.01)';
      tr.style.borderLeft = '3px solid var(--text-sec)';
    }
    
    const getDiffColor = (diff) => {
      if (diff === 'NORMAL') return '#b0bec5';
      if (diff === 'NIGHTMARE') return '#29b6f6';
      if (diff === 'HELL') return '#ab47bc';
      if (diff === 'TORMENT') return '#ef5350';
      return '#fff';
    };
    
    const diffColor = getDiffColor(s.difficulty);
    let stageHtml = `
      <span style="font-family:'Rajdhani',sans-serif; font-weight:700; color:${diffColor};">[${s.difficulty}] ${s.label}</span> 
      <span style="font-size:11px; color:${diffColor}; opacity:0.85; margin-left:4px;">${s.name}</span>
    `;
    if (isCeil) {
      stageHtml += ` <span class="chip on" style="font-size:9px; padding:1px 4px; margin-left:4px; vertical-align:middle; background:var(--accent); color:#000;">${isEn ? 'Ceiling' : '上限'}</span>`;
    } else if (is11) {
      stageHtml += ` <span class="chip on" style="font-size:9px; padding:1px 4px; margin-left:4px; vertical-align:middle; background:var(--text-sec); color:#000;">${isEn ? 'Baseline' : '基準'}</span>`;
    }
    
    let rewardText = '';
    let ephText = '';
    let dailyText = '';
    
    if (mode === 'exp' || mode === 'gold') {
      rewardText = formatFarmNumber(row.effVal);
      if (mode === 'exp' && row.penalty < 0.999) {
        rewardText += ` <span style="font-size:10px; color:var(--loss);">(-${Math.round((1 - row.penalty)*100)}%)</span>`;
      }
      ephText = formatFarmNumber(row.eph);
      dailyText = row.rewardPerHP.toFixed(mode === 'gold' ? 3 : 2);
    } else if (mode === 'chest') {
      rewardText = row.effVal > 0 ? `${currencySymbol}${Math.round(row.effVal).toLocaleString()}` : '—';
      ephText = `${currencySymbol}${Math.round(row.eph).toLocaleString()}`;
      dailyText = `${currencySymbol}${Math.round(row.rewardPerHP).toLocaleString()}`;
    } else if (mode === 'fav') {
      rewardText = row.effVal > 0 ? `${(row.effVal * 100).toFixed(4).replace(/\.?0+$/, "")}%` : '—';
      ephText = row.eph > 0 ? `${(row.eph * 100).toFixed(2)}%` : '0.00%';
      dailyText = row.rewardPerHP > 0 ? `${(row.rewardPerHP * 100).toFixed(2)}%` : '0.00%';
    }
    
    tr.innerHTML = `
      <td>${stageHtml}</td>
      <td style="text-align:center; color:var(--text-sec);">${s.level}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif; color:var(--text-sec);">${s.waves}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif; color:var(--text-sec);">${formatFarmNumber(s.totalHP)}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif;">${rewardText}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif; font-weight:700; color:var(--accent-2);">${ephText}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif; color:var(--text-sec);">${dailyText}</td>
      <td style="text-align:right; font-family:'Rajdhani',sans-serif;">${formatTimeSec(row.T)}</td>
    `;
    tbody.appendChild(tr);
  });
  
  if (ranked.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-sec); padding:20px;">${isEn ? 'No stages matching the conditions were found.' : '条件に合うステージが見つかりませんでした。'}</td></tr>`;
  }
}

function updatePenaltyTable(heroLevel) {
  const container = document.getElementById('farm-penalty-table-container');
  if (!container) return;
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const steps = [0, 2, 4, 6, 8, 10, 12, 15].filter(d => heroLevel - d >= 1);
  let html = `
    <div style="overflow-x:auto;">
      <table class="runes-table" style="font-size:12px;">
        <thead>
          <tr style="color:var(--text-sec);">
            <th style="padding:6px 12px; text-align:left;">${isEn ? 'Stage Level Difference' : 'ステージレベルの差'}</th>
            ${steps.map(d => `<th style="padding:6px 12px; text-align:center;">${d === 0 ? (isEn ? 'Same Level' : '同レベル') : `-${d} ${isEn ? 'Levels' : 'レベル'}`} (Lv.${heroLevel - d})</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px 12px; color:var(--text-dim);">${isEn ? `Lv.${heroLevel} EXP Modifier` : `Lv.${heroLevel} 経験値獲得割合`}</td>
            ${steps.map(d => {
              const pct = calculateFarmPenalty(heroLevel, heroLevel - d);
              const color = pct < 0.999 ? 'var(--loss)' : 'var(--accent-2)';
              return `<td style="padding:8px 12px; text-align:center; font-family:'Rajdhani',sans-serif; color:${color}; font-weight:700;">${Math.round(pct * 100)}%</td>`;
            }).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = html;
}


/* ═══════════════ MAP FARMING & PRODUCTION INTEGRATED SIMULATOR ═══════════════ */

window.initMapFarmingTab = function() {
  const stageSelect = document.getElementById('mapStageSelect');
  if (!stageSelect) return;
  stageSelect.innerHTML = '';

  if (typeof WIKI_STAGES === 'undefined' || WIKI_STAGES.length === 0) {
    const opt = document.createElement('option');
    opt.value = "";
    opt.textContent = "Stages not loaded";
    stageSelect.appendChild(opt);
    return;
  }

  // 難易度ごとにグループ化
  const diffGroups = {};
  WIKI_STAGES.forEach(st => {
    const diff = st.difficulty || 'NORMAL';
    if (!diffGroups[diff]) diffGroups[diff] = [];
    diffGroups[diff].push(st);
  });

  const diffOrder = ['NORMAL', 'HARD', 'HELL', 'TORMENT'];
  diffOrder.forEach(diff => {
    const list = diffGroups[diff];
    if (!list || list.length === 0) return;

    const group = document.createElement('optgroup');
    group.label = diff;

    list.forEach(st => {
      const opt = document.createElement('option');
      opt.value = st.key;
      const name = st.name_ja || st.name || '';
      opt.textContent = `${st.label} ${name} (Lv.${st.level || 0})`;
      group.appendChild(opt);
    });

    stageSelect.appendChild(group);
  });

  // 初期ロード時に1日稼働時間を更新
  if (typeof updateMapHoursPerDay === 'function') {
    updateMapHoursPerDay();
  }
};

window.updateMapHoursPerDay = function() {
  const hoursInput = document.getElementById('mapTotalHoursInput');
  const daysInput = document.getElementById('mapTotalDaysInput');
  const displayVal = document.getElementById('mapHoursPerDayVal');
  if (!hoursInput || !daysInput || !displayVal) return;
  const hours = parseFloat(hoursInput.value) || 0;
  const days = parseFloat(daysInput.value) || 0;
  if (days <= 0) {
    displayVal.textContent = '0.0';
    return;
  }
  displayVal.textContent = (hours / days).toFixed(1);
};

const DIFF_ORDERS = { 'NORMAL': 1, 'NIGHTMARE': 2, 'HELL': 3, 'TORMENT': 4 };

const ACT_BOSS_BOXES_MAP = [
  { key: 930101, difficulty: 'NORMAL', level: 10 },
  { key: 930201, difficulty: 'NORMAL', level: 20 },
  { key: 930301, difficulty: 'NORMAL', level: 30 },
  { key: 930401, difficulty: 'NIGHTMARE', level: 40 },
  { key: 930451, difficulty: 'NIGHTMARE', level: 45 },
  { key: 930501, difficulty: 'NIGHTMARE', level: 50 },
  { key: 930601, difficulty: 'HELL', level: 60 },
  { key: 930651, difficulty: 'HELL', level: 65 },
  { key: 930701, difficulty: 'HELL', level: 70 },
  { key: 930851, difficulty: 'TORMENT', level: 85 },
  { key: 930901, difficulty: 'TORMENT', level: 90 }
];

function getBestActBossBox(soulstoneKey, stageLevel, stageDiff) {
  let maxDiff = 'NORMAL';
  if (soulstoneKey === 190001) maxDiff = 'NORMAL';
  else if (soulstoneKey === 190002) maxDiff = 'NIGHTMARE';
  else if (soulstoneKey === 190003) maxDiff = 'HELL';
  else if (soulstoneKey === 190004) maxDiff = 'TORMENT';

  const diffLimitOrder = DIFF_ORDERS[maxDiff];
  const stageDiffOrder = DIFF_ORDERS[stageDiff] || 1;
  const allowedDiffOrder = Math.min(diffLimitOrder, stageDiffOrder);
  const allowedLevel = stageLevel;

  const candidates = ACT_BOSS_BOXES_MAP.filter(box => {
    const boxDiffOrder = DIFF_ORDERS[box.difficulty];
    return boxDiffOrder <= allowedDiffOrder && box.level <= allowedLevel;
  });

  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    const diffA = DIFF_ORDERS[a.difficulty];
    const diffB = DIFF_ORDERS[b.difficulty];
    if (diffA !== diffB) return diffB - diffA;
    return b.level - a.level;
  });

  return candidates[0].key;
}

window.runMapFarmingSimulation = function() {
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  const stageSelect = document.getElementById('mapStageSelect');
  const timeInput = document.getElementById('mapClearTimeInput');
  const limitSelect = document.getElementById('mapSynthLimitSelect');
  const hoursInput = document.getElementById('mapTotalHoursInput');
  const daysInput = document.getElementById('mapTotalDaysInput');

  if (!stageSelect || !timeInput || !limitSelect || !hoursInput || !daysInput) return;

  const stageKey = parseInt(stageSelect.value, 10);
  if (isNaN(stageKey)) {
    alert(isEn ? 'Please select a valid stage.' : 'ステージを選択してください。');
    return;
  }

  const selectedStage = WIKI_STAGES.find(st => st.key === stageKey);
  if (!selectedStage) return;

  const clearTime = parseInt(timeInput.value, 10);
  if (isNaN(clearTime) || clearTime <= 0) {
    alert(isEn ? 'Please enter a valid clear time (seconds).' : 'クリアタイムを正しく入力してください（秒数）。');
    return;
  }

  const totalHours = parseFloat(hoursInput.value);
  const totalDays = parseFloat(daysInput.value);
  if (isNaN(totalHours) || totalHours <= 0 || isNaN(totalDays) || totalDays <= 0) {
    alert(isEn ? 'Please enter valid total hours and days.' : '総周回時間と周回日数を正しく入力してください。');
    return;
  }

  const limitGrade = limitSelect.value;

  // UI切り替え
  document.getElementById('mapSimEmptyState').style.display = 'none';
  document.getElementById('mapSimResults').style.display = 'none';
  document.getElementById('mapSimLoadingState').style.display = 'block';
  
  const loadingText = document.getElementById('mapLoadingText');
  if (loadingText) {
    loadingText.textContent = isEn ? `⏳ Running ${totalHours}h Farming & Production loop...` : `⏳ ${totalHours}時間周回＆全自動生産シミュレート中...`;
  }

  setTimeout(() => {
    try {
      // 1. 周回による宝箱ドロップの特定と獲得数計算
      const totalFarmingSeconds = totalHours * 3600;
      const normalBoxCount = Math.floor(totalFarmingSeconds / Math.max(clearTime, 300));
      const bossBoxCount = Math.floor(totalFarmingSeconds / Math.max(clearTime, 420));
      const runsCount = Math.floor(totalFarmingSeconds / clearTime);

      let normalChest = null;
      let bossChest = null;

      if (typeof globalChests !== 'undefined' && globalChests.length > 0) {
        globalChests.forEach(c => {
          const src = c.sources && c.sources[0];
          if (!src) return;
          const isMatch = c.stages && c.stages.some(st => st.label === selectedStage.label && st.difficulty === selectedStage.difficulty);
          if (isMatch) {
            if (src.name.includes("Normal Monster Box")) {
              normalChest = c;
            } else if (src.name.includes("Stage Boss Box")) {
              bossChest = c;
            }
          }
        });

        if (!normalChest || !bossChest) {
          globalChests.forEach(c => {
            const src = c.sources && c.sources[0];
            if (!src) return;
            const name = src.name || '';
            const inLevelRange = selectedStage.level >= (c.gearLevelMin || 0) && selectedStage.level <= (c.gearLevelMax || 99);
            if (inLevelRange) {
              if (name.includes("Normal Monster Box") && !normalChest) normalChest = c;
              if (name.includes("Stage Boss Box") && !bossChest) bossChest = c;
            }
          });
        }
      }

      const gearPool = [];
      const materialPool = {};
      let goldEarned = 0;
      let goldSpent = 0;

      if (selectedStage.gold && typeof selectedStage.gold.expectedGold === 'number') {
        goldEarned += selectedStage.gold.expectedGold * runsCount;
      }

      const executeChestOpening = (chest, count) => {
        if (!chest || count <= 0) return;
        const pool = chest.pools[0];
        if (!pool || !pool.entries || pool.entries.length === 0) return;

        let cum = 0;
        const cdf = pool.entries.map(ent => {
          cum += ent.probability;
          return { entry: ent, cum };
        });

        for (let i = 0; i < count; i++) {
          const rnd = Math.random();
          const picked = cdf.find(c => rnd <= c.cum) || cdf[cdf.length - 1];
          const ent = picked.entry;

          if (ent.items && ent.items.length > 0) {
            const itemKey = ent.items[Math.floor(Math.random() * ent.items.length)];
            const item = globalItems.find(it => it.key === itemKey);
            if (item) {
              if (item.type === 'GEAR') {
                gearPool.push({
                  key: item.key,
                  name: item.name,
                  grade: item.grade || 'COMMON',
                  level: item.level || selectedStage.level || 15,
                  gearType: item.gearType,
                  type: 'GEAR'
                });
              } else {
                materialPool[item.key] = (materialPool[item.key] || 0) + 1;
              }
              if (item.gold && typeof item.gold === 'number') {
                goldEarned += item.gold;
              }
            }
          }
        }
      };

      executeChestOpening(normalChest, normalBoxCount);
      executeChestOpening(bossChest, bossBoxCount);

      // Soulstoneを対応する最高レベルのAct Boss Boxに交換して開封
      const soulstoneKeys = [190001, 190002, 190003, 190004];
      soulstoneKeys.forEach(sKey => {
        const count = materialPool[sKey] || 0;
        if (count <= 0) return;

        const boxKey = getBestActBossBox(sKey, selectedStage.level, selectedStage.difficulty);
        if (boxKey) {
          const chest = globalChests.find(c => c.sources && c.sources.some(s => s.key === boxKey));
          if (chest) {
            executeChestOpening(chest, count);
          }
        }
        // プールから消費したSoulstoneを除外する
        materialPool[sKey] = 0;
      });

      const coinIds = [160001, 160002, 160003, 160004, 160005, 160006, 160007, 160008, 160009, 160010];
      if (typeof globalOfferingLoot !== 'undefined' && globalOfferingLoot.coins) {
        coinIds.forEach(coinId => {
          const count = materialPool[coinId] || 0;
          if (count <= 0) return;

          const coinLoot = globalOfferingLoot.coins.find(c => c.itemKey === coinId);
          if (!coinLoot) return;

          goldSpent += (coinLoot.goldCost || 0) * count;

          let cum = 0;
          const cdf = coinLoot.odds.map(odd => {
            cum += odd.pct;
            return { grade: odd.grade, cum };
          });
          const totalOdds = cum;

          const poolByGrade = {};
          coinLoot.odds.forEach(odd => {
            poolByGrade[odd.grade] = globalItems.filter(it => it.obtainable === true && it.type !== 'STAGEBOX' && it.grade === odd.grade);
          });

          for (let i = 0; i < count; i++) {
            const rnd = Math.random() * totalOdds;
            const pickedGradeObj = cdf.find(o => rnd <= o.cum) || cdf[cdf.length - 1];
            const grade = pickedGradeObj.grade;

            const pool = poolByGrade[grade];
            if (pool && pool.length > 0) {
              const item = pool[Math.floor(Math.random() * pool.length)];
              if (item.type === 'GEAR') {
                gearPool.push({
                  key: item.key,
                  name: item.name,
                  grade: item.grade || 'COMMON',
                  level: item.level || 15,
                  gearType: item.gearType,
                  type: 'GEAR'
                });
              } else {
                materialPool[item.key] = (materialPool[item.key] || 0) + 1;
              }
            }
          }

          materialPool[coinId] = 0;
        });
      }

      const recipeGroups = [
        ACC_RECIPES || [],
        SUB_RECIPES || [],
        RECIPES || [],
        ARMOR_RECIPES || []
      ];

      let craftedAny = true;
      while (craftedAny) {
        craftedAny = false;
        
        for (let g = 0; g < recipeGroups.length; g++) {
          const group = recipeGroups[g];
          let groupCrafted = false;
          
          for (let rIdx = 0; rIdx < group.length; rIdx++) {
            const recipe = group[rIdx];
            if (!recipe.mats || recipe.mats.length === 0) continue;

            let canCraft = true;
            recipe.mats.forEach(m => {
              const poolCount = materialPool[m.key] || 0;
              if (poolCount < m.count) canCraft = false;
            });

            const cost = recipe.matCost || 0;

            if (canCraft) {
              goldSpent += cost;

              recipe.mats.forEach(m => {
                materialPool[m.key] -= m.count;
              });

              const rand = Math.random() * 100;
              let cum = 0;
              const grades = ['UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND'];
              let resultGrade = 'UNCOMMON';
              
              for (let gi = 0; gi < grades.length; gi++) {
                cum += recipe.rarities[gi] || 0;
                if (rand <= cum) {
                  resultGrade = grades[gi];
                  break;
                }
              }

              const candidates = globalItems.filter(it => {
                if (it.obtainable === false) return false;
                if (it.grade !== resultGrade) return false;
                return recipe.items.some(ri => ri.name === it.name);
              });

              if (candidates.length > 0) {
                const picked = candidates[Math.floor(Math.random() * candidates.length)];
                gearPool.push({
                  key: picked.key,
                  name: picked.name,
                  grade: picked.grade || 'COMMON',
                  level: picked.level || 15,
                  gearType: picked.gearType,
                  type: 'GEAR'
                });
              } else {
                const fallbackItem = globalItems.find(it => it.grade === resultGrade && it.type === 'GEAR');
                if (fallbackItem) {
                  gearPool.push({
                    key: fallbackItem.key,
                    name: fallbackItem.name,
                    grade: fallbackItem.grade || 'COMMON',
                    level: fallbackItem.level || 15,
                    gearType: fallbackItem.gearType,
                    type: 'GEAR'
                  });
                }
              }
              
              craftedAny = true;
              groupCrafted = true;
              break;
            }
          }
          if (groupCrafted) break;
        }
      }

      const synthLimits = ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];
      const maxGradeIdx = synthLimits.indexOf(limitGrade);

      const synthFees = {
        'COMMON': 10,
        'UNCOMMON': 50,
        'RARE': 200,
        'LEGENDARY': 1000,
        'IMMORTAL': 5000,
        'ARCANA': 20000,
        'BEYOND': 80000,
        'CELESTIAL': 300000,
        'DIVINE': 1000000
      };

      const autoSynthLoop = () => {
        for (let gIdx = 0; gIdx < maxGradeIdx; gIdx++) {
          const currentGrade = synthLimits[gIdx];
          const rates = SYNTH_RATES[currentGrade];
          if (!rates) continue;

          let hasMergedAny = true;
          while (hasMergedAny) {
            hasMergedAny = false;

            const accList = [];
            const gearList = [];
            const remainingPool = [];

            gearPool.forEach(it => {
              if (it.grade === currentGrade) {
                const cat = getSynthCategory(it);
                if (cat === 'ACCESSORY') accList.push(it);
                else if (cat === 'GEAR') gearList.push(it);
                else remainingPool.push(it);
              } else {
                remainingPool.push(it);
              }
            });

            const performMerge = (list, categoryName) => {
              let merged = false;
              while (list.length >= 9) {
                merged = true;
                hasMergedAny = true;

                const mats = [];
                for (let i = 0; i < 9; i++) {
                  mats.push(list.pop());
                }

                let totalLevel = 0;
                mats.forEach(m => { totalLevel += (m.level || 15); });
                const avgLevel = Math.round(totalLevel / 9);

                goldSpent += synthFees[currentGrade] || 0;

                const rand = Math.random();
                let resultGrade = currentGrade;

                if (rand < rates.great) {
                  const targetIdx = Math.min(gIdx + 2, synthLimits.length - 1);
                  resultGrade = synthLimits[targetIdx];
                } else if (rand < rates.great + rates.success) {
                  const targetIdx = Math.min(gIdx + 1, synthLimits.length - 1);
                  resultGrade = synthLimits[targetIdx];
                } else {
                  // 失敗時: 1つだけ手元に戻り、残り8つは消失
                  const returnedItem = mats[Math.floor(Math.random() * 9)];
                  remainingPool.push(returnedItem);
                  continue;
                }

                const pool = globalItems.filter(it => {
                  if (it.obtainable === false) return false;
                  if (it.type === 'STAGEBOX') return false;
                  if (it.grade !== resultGrade) return false;
                  return getSynthCategory(it) === categoryName;
                });

                if (pool.length > 0) {
                  const sorted = [...pool].sort((a, b) => Math.abs((a.level || 15) - avgLevel) - Math.abs((b.level || 15) - avgLevel));
                  const candidates = sorted.filter(c => Math.abs((c.level || 15) - avgLevel) <= 10);
                  const picked = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : sorted[0];

                  remainingPool.push({
                    key: picked.key,
                    name: picked.name,
                    grade: picked.grade || 'COMMON',
                    level: picked.level || avgLevel,
                    gearType: picked.gearType,
                    type: 'GEAR'
                  });
                } else {
                  const pickedFallback = mats[0];
                  remainingPool.push({
                    key: pickedFallback.key,
                    name: pickedFallback.name,
                    grade: resultGrade,
                    level: avgLevel,
                    gearType: pickedFallback.gearType,
                    type: 'GEAR'
                  });
                }
              }

              list.forEach(it => remainingPool.push(it));
            };

            performMerge(accList, 'ACCESSORY');
            performMerge(gearList, 'GEAR');

            gearPool.length = 0;
            remainingPool.forEach(it => gearPool.push(it));
          }
        }
      };

      autoSynthLoop();

      const finalEquips = [];
      const leftoversEquips = [];

      gearPool.forEach(it => {
        const idx = synthLimits.indexOf(it.grade);
        if (idx >= maxGradeIdx) {
          finalEquips.push(it);
        } else {
          leftoversEquips.push(it);
        }
      });

      const aggregateList = (list) => {
        const map = {};
        list.forEach(it => {
          const k = it.key + '_' + (it.level || 15);
          if (!map[k]) {
            map[k] = {
              item: globalItems.find(g => g.key === it.key) || it,
              level: it.level || 15,
              count: 0
            };
          }
          map[k].count++;
        });
        return Object.values(map).sort((a, b) => {
          const idxA = synthLimits.indexOf(a.item.grade);
          const idxB = synthLimits.indexOf(b.item.grade);
          if (idxB !== idxA) return idxB - idxA;
          if (b.level !== a.level) return b.level - a.level;
          const pA = getMarketPriceForCraft(a.item.name, a.item.grade.toLowerCase()) || 0;
          const pB = getMarketPriceForCraft(b.item.name, b.item.grade.toLowerCase()) || 0;
          return pB - pA;
        });
      };

      const finalAggregated = aggregateList(finalEquips);
      const leftoversEquipsAggregated = aggregateList(leftoversEquips);

      const leftoversItems = [];
      Object.keys(materialPool).forEach(key => {
        const count = materialPool[key];
        if (count <= 0) return;
        const item = globalItems.find(it => it.key === parseInt(key, 10));
        if (item) {
          leftoversItems.push({
            item: item,
            level: item.level || 0,
            count: count,
            type: 'MATERIAL'
          });
        }
      });
      leftoversEquipsAggregated.forEach(eq => {
        leftoversItems.push({
          item: eq.item,
          level: eq.level,
          count: eq.count,
          type: 'GEAR'
        });
      });

      // UI
      document.getElementById('mapResNormalBox').textContent = normalBoxCount.toLocaleString();
      document.getElementById('mapResBossBox').textContent = bossBoxCount.toLocaleString();

      const goldNet = goldEarned - goldSpent;

      // 1. レンダリング統合処理用のリスト作成
      const renderList = [];
      finalAggregated.forEach(eq => {
        renderList.push({
          item: eq.item,
          level: eq.level,
          count: eq.count,
          isFinal: true,
          soldCount: 0
        });
      });
      leftoversItems.forEach(left => {
        renderList.push({
          item: left.item,
          level: left.level || 0,
          count: left.count,
          isFinal: false,
          soldCount: 0
        });
      });

      // 2. マーケット出品枠を考慮した売却シミュレーション
      const saleableItems = [];
      renderList.forEach(rItem => {
        const mData = getMarketDataForItem(rItem.item);
        const price = getItemPriceByBasis(mData, rItem.item);
        if (price !== null && price > 0) {
          saleableItems.push({
            rItem: rItem,
            price: price
          });
        }
      });

      // 単価の高い順にソート
      saleableItems.sort((a, b) => b.price - a.price);

      // 上限個数まで高い順に売却
      const maxMarketItems = Math.floor(totalDays * 12);
      let itemsToSell = maxMarketItems;
      let totalMarketRevenue = 0;
      let actualSoldCount = 0;

      for (let i = 0; i < saleableItems.length; i++) {
        if (itemsToSell <= 0) break;
        const s = saleableItems[i];
        const available = s.rItem.count;
        const toSell = Math.min(available, itemsToSell);
        s.rItem.count -= toSell;
        s.rItem.soldCount += toSell;
        totalMarketRevenue += s.price * toSell;
        actualSoldCount += toSell;
        itemsToSell -= toSell;
      }

      // 3. UI表示更新
      const goldNetEl = document.getElementById('mapResGoldNet');
      if (goldNetEl) {
        goldNetEl.textContent = `${goldNet >= 0 ? '+' : ''}${Math.round(goldNet).toLocaleString()} gold`;
        goldNetEl.style.color = goldNet >= 0 ? 'var(--gain)' : 'var(--loss)';
      }
      document.getElementById('mapResGoldDetails').textContent = `(獲得: +${Math.round(goldEarned).toLocaleString()} gold / 消費: -${Math.round(goldSpent).toLocaleString()} gold)`;

      const marketSalesEl = document.getElementById('mapResMarketSales');
      if (marketSalesEl) {
        marketSalesEl.textContent = `¥${Math.round(totalMarketRevenue).toLocaleString()}`;
        marketSalesEl.style.color = totalMarketRevenue >= 0 ? '#ffbb00' : 'var(--loss)';
      }
      document.getElementById('mapResMarketDetails').textContent = `(売却上限: ${maxMarketItems}個 / 実売却: ${actualSoldCount}個)`;

      // 4. ソート順の定義
      const GRADE_ORDER = [
        "COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY", "MYTHIC", 
        "IMMORTAL", "ARCANA", "BEYOND", "CELESTIAL", "DIVINE", "COSMIC"
      ];

      renderList.sort((a, b) => {
        const gradeA = (a.item.grade || 'COMMON').toUpperCase();
        const gradeB = (b.item.grade || 'COMMON').toUpperCase();
        let idxA = GRADE_ORDER.indexOf(gradeA);
        let idxB = GRADE_ORDER.indexOf(gradeB);
        if (idxA === -1) idxA = 0;
        if (idxB === -1) idxB = 0;
        if (idxA !== idxB) {
          return idxB - idxA; // レアリティの高い順
        }
        // 同じレア度なら、レベルの高い順
        if (a.level !== b.level) {
          return b.level - a.level;
        }
        // GEAR優先
        const typeA = a.item.type === 'GEAR' ? 1 : 0;
        const typeB = b.item.type === 'GEAR' ? 1 : 0;
        if (typeA !== typeB) {
          return typeB - typeA;
        }
        // 価格の高い順
        const priceA = getItemPriceByBasis(getMarketDataForItem(a.item), a.item) || 0;
        const priceB = getItemPriceByBasis(getMarketDataForItem(b.item), b.item) || 0;
        if (priceA !== priceB) {
          return priceB - priceA;
        }
        // 名前で比較
        const nameA = a.item.name_ja || a.item.name || '';
        const nameB = b.item.name_ja || b.item.name || '';
        return nameA.localeCompare(nameB);
      });

      // 5. 描画
      const allGrid = document.getElementById('mapResAllGrid');
      allGrid.innerHTML = '';
      if (renderList.length === 0) {
        document.getElementById('mapResAllEmpty').style.display = 'block';
      } else {
        document.getElementById('mapResAllEmpty').style.display = 'none';
        renderList.forEach(eq => {
          // 手元にも残っておらず、売却もされていないアイテムは表示しない
          if (eq.count <= 0 && eq.soldCount <= 0) return;

          const card = document.createElement('div');
          
          // 完売したアイテムは半透明（opacity: 0.5）にする
          if (eq.count === 0) {
            card.style.opacity = '0.5';
          }

          // 最終装備（isFinal === true）のときは少し目立つ背景や枠線にする
          if (eq.isFinal) {
            card.style.background = 'rgba(100, 255, 218, 0.03)';
            card.style.border = '1px solid rgba(100, 255, 218, 0.25)';
          } else {
            card.style.background = 'rgba(255, 255, 255, 0.01)';
            card.style.border = '1px solid var(--border-soft)';
          }
          
          card.style.borderRadius = '8px';
          card.style.padding = '8px 12px';
          card.style.display = 'flex';
          card.style.alignItems = 'center';
          card.style.gap = '10px';
          card.style.cursor = 'pointer';
          card.style.transition = 'all 0.2s ease';
          
          card.onmouseenter = () => { 
            card.style.background = eq.isFinal ? 'rgba(100, 255, 218, 0.06)' : 'rgba(255,255,255,0.03)'; 
            card.style.transform = 'translateY(-1px)';
          };
          card.onmouseleave = () => { 
            card.style.background = eq.isFinal ? 'rgba(100, 255, 218, 0.03)' : 'rgba(255,255,255,0.01)'; 
            card.style.transform = 'none';
          };
          
          card.onclick = () => {
            if (typeof showItemDetail === 'function') {
              showItemDetail(eq.item.key);
            }
          };

          const color = getGradeColor(eq.item.grade);
          const iconName = eq.item.icon || 'Item_910011';
          const iconHtml = `<img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:28px; height:28px; object-fit:contain; image-rendering:pixelated; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border);" />`;

          const mData = getMarketDataForItem(eq.item);
          const price = getItemPriceByBasis(mData, eq.item);
          const priceText = price !== null ? `¥${formatNumberWithCommas(price)}` : '¥0';

          let displayName = eq.item.name_ja || eq.item.name;
          if (eq.item.type === 'GEAR') {
            const keyStr = String(eq.item.key);
            if (keyStr.endsWith('1')) displayName += ' A';
            else if (keyStr.endsWith('2')) displayName += ' B';
          }

          // 完売したアイテムには「(売却済)」を付加
          if (eq.count === 0) {
            displayName += isEn ? ' (Sold)' : ' (売却済)';
          }

          // 最終装備（isFinal === true）のときは絵文字 🏆 を追加
          const prefix = eq.isFinal ? '🏆 ' : '';

          // 個数テキストの作成
          let countText = '';
          if (eq.count > 0 && eq.soldCount > 0) {
            countText = `x${eq.count} <span style="font-size:9px; color:#ffbb00;">(売却: x${eq.soldCount})</span>`;
          } else if (eq.count === 0 && eq.soldCount > 0) {
            countText = `<span style="color:#ffbb00; text-decoration: line-through;">x0</span> <span style="font-size:10px; color:#ffbb00; font-weight:bold;">(売却: x${eq.soldCount})</span>`;
          } else {
            countText = `x${eq.count}`;
          }

          card.innerHTML = `
            <div style="width:36px; height:36px; display:flex; align-items:center; justify-content:center; shrink-0;">
              ${iconHtml}
            </div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:12px; font-weight:700; color:${color}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                ${prefix}${displayName}
              </div>
              <div style="font-size:10px; color:var(--text-sec); margin-top:2px; display:flex; justify-content:space-between;">
                <span>Lv.${eq.level} (${eq.item.grade})</span>
                <span style="font-family:'Rajdhani'; font-weight:bold; color:var(--gain);">${priceText}</span>
              </div>
            </div>
            <div style="font-family:'Rajdhani'; font-size:14px; font-weight:800; color:#ffffff; padding-left:4px; text-align:right; white-space:nowrap;">${countText}</div>
          `;
          allGrid.appendChild(card);
        });
      }

      document.getElementById('mapSimLoadingState').style.display = 'none';
      document.getElementById('mapSimResults').style.display = 'flex';

    } catch (err) {
      console.error(err);
      alert(isEn ? 'An error occurred during simulation.' : 'シミュレーション実行中にエラーが発生しました。');
      document.getElementById('mapSimLoadingState').style.display = 'none';
      document.getElementById('mapSimEmptyState').style.display = 'block';
    }
  }, 50);
};

// 既存のページ初期化タイミングで、マップタブ用ドロップダウンも初期化する
if (typeof initMapFarmingTab === 'function') {
  try { initMapFarmingTab(); } catch(e) { console.error(e); }
}


