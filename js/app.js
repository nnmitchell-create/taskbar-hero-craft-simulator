/* ──────────────────────────────────────────────
   INIT
────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  initChart();
  render();

  const loadingProgress = document.getElementById('loading-progress');
  const updateProgress = (completed, total) => {
    if (loadingProgress) {
      loadingProgress.textContent = `${Math.round((completed / total) * 100)}%`;
    }
  };

  const files = [
    { key: 'meta', url: 'data/meta.json' },
    { key: 'items', url: 'data/items.json' },
    { key: 'effects', url: 'data/effects.json' },
    { key: 'chests', url: 'data/chests.json' },
    { key: 'heroes', url: 'data/heroes.json' },
    { key: 'runes', url: 'data/runes.json' },
    { key: 'stages', url: 'data/stages.json' },
    { key: 'offeringLoot', url: 'data/offering_loot_table.json' }
  ];

  let completedCount = 0;
  updateProgress(0, files.length);

  const fetchPromises = files.map(file => {
    return fetch(file.url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        completedCount++;
        updateProgress(completedCount, files.length);
        return { key: file.key, data };
      });
  });

  Promise.all(fetchPromises)
    .then(results => {
      const dataMap = {};
      results.forEach(res => {
        dataMap[res.key] = res.data;
      });

      // グローバル変数へ代入
      window.WIKI_META = dataMap.meta;
      window.WIKI_ITEMS = dataMap.items;
      window.WIKI_EFFECTS = dataMap.effects;
      window.WIKI_CHESTS = dataMap.chests;
      window.WIKI_HEROES = dataMap.heroes;
      window.WIKI_RUNES = dataMap.runes;
      window.WIKI_STAGES = dataMap.stages;
      window.WIKI_OFFERING_LOOT = dataMap.offeringLoot;

      globalMeta = dataMap.meta;
      globalItems = dataMap.items;
      globalEffects = dataMap.effects;
      globalChests = dataMap.chests;
      globalHeroes = dataMap.heroes;
      globalRunes = dataMap.runes;
      globalOfferingLoot = dataMap.offeringLoot;

      // UIの初期化
      initMarketCache();

      // 価格データベースの初期化
      if (typeof loadPriceDatabaseMode === 'function') loadPriceDatabaseMode();
      if (typeof generateAiPriceDatabase === 'function') generateAiPriceDatabase();
      if (typeof updatePriceDatabaseSwitchUI === 'function') updatePriceDatabaseSwitchUI();

      initItemsDb();
      initEffects();
      initChests();
      loadBuildData();
      initHeroes();
      initFarm();
      initCraft();
      updateLangUI();
      initUpdateTimer();
      updateMultiSynthLevelOptions();

      // エラーパネルを非表示
      document.getElementById('panel-load-error').style.display = 'none';

      // ローディング画面をフェードアウトして削除
      const loadingScreen = document.getElementById('app-loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => loadingScreen.remove(), 500);
      }

      // URLクエリパラメータから初期タブを判定
      const urlParams = new URLSearchParams(window.location.search);
      const initialTab = urlParams.get('tab');
      if (initialTab && ['craft', 'farm', 'chests', 'items', 'effects', 'heroes'].includes(initialTab)) {
        switchMainTab(initialTab);
      } else {
        switchMainTab('craft');
      }
      checkDisclaimer();
    })
    .catch(err => {
      console.error('Failed to load JSON data:', err);
      // file:///で開いた場合のCORS対策としてエラーパネルを表示
      document.getElementById('panel-load-error').style.display = 'block';
      
      // ローディング画面を削除
      const loadingScreen = document.getElementById('app-loading-screen');
      if (loadingScreen) {
        loadingScreen.remove();
      }
    });
});

function checkDisclaimer() {
  // 免責事項ポップアップ無効化
}

function closeDisclaimerModal() {
  // 免責事項ポップアップ無効化
}

