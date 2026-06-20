/* ──────────────────────────────────────────────
   I18N (Multi-language Support)
   ────────────────────────────────────────────── */
const filterTranslations = {
  en: {
    'ALL': 'All',
    'COMMON': 'Common',
    'UNCOMMON': 'Uncommon',
    'RARE': 'Rare',
    'LEGENDARY': 'Legendary',
    'IMMORTAL': 'Immortal',
    'ARCANA': 'Arcana',
    'BEYOND': 'Beyond',
    'CELESTIAL': 'Celestial',
    'DIVINE': 'Divine',
    'COSMIC': 'Cosmic',
    'Knight': 'Knight',
    'Ranger': 'Ranger',
    'Sorcerer': 'Sorcerer',
    'Priest': 'Priest',
    'Hunter': 'Hunter',
    'Slayer': 'Slayer',
    'ARROW': 'Arrow',
    'AXE': 'Axe',
    'BOLT': 'Bolt',
    'BOW': 'Bow',
    'CROSSBOW': 'Crossbow',
    'HATCHET': 'Hatchet',
    'ORB': 'Orb',
    'SCEPTER': 'Scepter',
    'SHIELD': 'Shield',
    'STAFF': 'Staff',
    'SWORD': 'Sword',
    'TOME': 'Tome',
    'ARMOR': 'Armor',
    'BOOTS': 'Boots',
    'GLOVES': 'Gloves',
    'HELMET': 'Helmet',
    'AMULET': 'Amulet',
    'BRACER': 'Bracer',
    'EARRING': 'Earring',
    'RING': 'Ring'
  },
  ja: {
    'ALL': 'すべて',
    'COMMON': 'コモン',
    'UNCOMMON': 'アンコモン',
    'RARE': 'レア',
    'LEGENDARY': 'レジェンダリー',
    'IMMORTAL': 'イモータル',
    'ARCANA': 'アルカナ',
    'BEYOND': 'ビヨンド',
    'CELESTIAL': 'セレスティアル',
    'DIVINE': 'ディヴァイン',
    'COSMIC': 'コズミック',
    'Knight': 'ナイト',
    'Ranger': 'レンジャー',
    'Sorcerer': 'ソーサラー',
    'Priest': 'プリースト',
    'Hunter': 'ハンター',
    'Slayer': 'スレイヤー',
    'ARROW': '矢',
    'AXE': '両手斧',
    'BOLT': '太矢',
    'BOW': '弓',
    'CROSSBOW': '石弓',
    'HATCHET': '片手斧',
    'ORB': 'オーブ',
    'SCEPTER': '片手杖',
    'SHIELD': '盾',
    'STAFF': '両手杖',
    'SWORD': '片手剣',
    'TOME': '魔導書',
    'ARMOR': '鎧',
    'BOOTS': '靴',
    'GLOVES': '手袋',
    'HELMET': '兜',
    'AMULET': 'アミュレット',
    'BRACER': 'ブレイサー',
    'EARRING': 'イヤリング',
    'RING': 'リング'
  }
};

const I18N = {
  en: {
    site_title: "Taskbar Hero Craft Simulator & Database",
    site_description: "Calculate expected values, ROI, and simulate repetitive crafting with Monte Carlo simulation for Taskbar Hero.",
    timer_next: "NEXT UPDATE: ",
    timer_collecting: "COLLECTING MARKET DATA...",
    timer_delayed: "DATA DELAYED (LAST: {days}d AGO)",
    hero_title: "CRAFT SIMULATOR & DATABASE",
    hero_subtitle: "Craft Simulator & Comprehensive Database",
    hero_desc: "A fan site integrating various craft simulations, chest drop rates, material effects, and all in-game item data.<br><span style='opacity: 0.8; font-size: 11px;'>※ The information provided on this site is not guaranteed to be 100% accurate.</span>",
    tab_craft: "🛠️ Craft Profit",
    tab_farm: "🌾 Farm Planner",
    tab_chests: "📦 Chest Drops",
    tab_items: "🔍 Item DB",
    tab_effects: "💎 Material Effects",
    tab_heroes: "👤 Hero & Build",
    tab_offering: "🪙 Offering Gacha",
    offering_title: "◆ 🪙 Cube Offering Simulator",
    offering_desc: "Select an Anniversary Coin, simulate rolls, and compute EV based on current market prices.",
    offering_coin_select: "Select Coin: ",
    offering_gold_fee: "Gold Fee: ",
    offering_run_btn: "🎲 Run Gacha Simulation",
    offering_ev_title: "◆ Offering EV Summary",
    offering_sim_title: "◆ 🎲 Offering Gacha Simulator",
    tooltip_offering_sim: "<strong>[Offering Gacha Simulator]</strong><br>Simulates bulk rolls of the selected coin using the Monte Carlo method.<br><br>It displays the breakdown of pulled items by rarity, total revenue, total cost, net profit/loss, and actual ROI.",
    craft_roi_title: "Craft Recipes (Sorted by Profitability)",
    craft_market_link: "Market Price Synced 🔄",
    craft_cost_setting: "◆ Cost Settings",
    craft_mat_label: "Material: ",
    craft_cost_per: "Material Cost / Run",
    craft_price_basis: "Price Basis",
    craft_price_sold: "Recent Sold Price (History)",
    craft_price_sell: "Lowest Listing Price (Market)",
    craft_fee_rate: "Market Fee",
    craft_cost_note: "※ Material costs are calculated automatically from market prices, but can be adjusted manually.",
    craft_rarity_prob: "◆ Rarity Probability",
    craft_summary_title: "◆ EV Summary",
    craft_ev_revenue: "EV Revenue / Run",
    craft_ev_cost: "Craft Cost",
    craft_ev_profit: "EV Profit / Run",
    craft_ev_roi: "Profit Margin (ROI)",
    craft_ev_win_rate: "Profit Chance",
    craft_ev_max: "Max Sell Price",
    craft_details_title: "◆ Item Details in Recipe (Editable Prices)",
    craft_price_fallback_note: "*For items with no transaction history on the market, AI-estimated default fallback prices (Uncommon: 15.4, Rare: 35.7, Legendary: 83.8, Immortal: 80, Arcana: 300, Beyond: 1,000, Celestial: 3,800, Divine: 13,000, Cosmic: 36,000, etc.) are applied as initial values. Please edit the cells manually to adjust them to match actual rates.",
    craft_col_name: "Item Name",
    craft_col_rarity: "Rarity",
    craft_col_prob: "Prob %",
    craft_col_price: "Price ($)",
    craft_col_ev: "EV ($)",
    craft_sim_title: "◆ 🎲 Craft Simulator",
    tooltip_craft_sim: "<strong>[Craft Simulator]</strong><br>Simulates repetitive crafting based on the recipe probabilities using the Monte Carlo method.<br><br>It displays the breakdown of crafted items by rarity, total revenue, total cost, net profit/loss, and actual ROI.",
    craft_sim_runs: "Runs: ",
    craft_sim_run_btn: "🎲 Simulate Craft",
    craft_sim_total_rev: "Total Revenue",
    craft_sim_total_cost: "Total Cost",
    craft_sim_total_profit: "Net Profit/Loss",
    craft_sim_roi: "Actual ROI",
    craft_sim_beyond: "Beyond Drops",
    craft_sim_best: "Highest Value Drop",
    craft_sim_breakdown: "Detailed Item Drops:",
    farm_title: "Farm Planner",
    chest_search_placeholder: "Search chests...",
    chest_gear_lv_any: "Farm any gear level",
    chest_gear_lv_select: "Gear Lv ",
    chest_price_basis_sold: "Price Basis: Recent Sold Price (History)",
    chest_price_basis_sell: "Price Basis: Lowest Listing Price (Market)",
    chest_ranking_title: "🏆 EV Ranking <span style='font-size:11px; color:var(--text-sec); font-weight:normal;'>(Stage drops only)</span>",
    tooltip_chest_ranking: "<strong>[Expected Value Ranking (Stage Obtainable Only)]</strong><br>Ranks craftable chests that can actually drop or be obtained in-game stages, sorted by their expected net profit (Expected Item Value - Craft Cost).<br><br>Categorized into Act Boss, Stage Boss, and Normal chests.",
    chest_detail_lv: "Target Gear Level: ",
    chest_detail_ev_label: "Theoretical EV (per chest)",
    chest_detail_stable_ev_label: "Stable (出現率0.1%+): ",
    chest_detail_stage_source: "Dropped Stages",
    chest_detail_dlc_variant: "DLC Variant Selection",
    chest_detail_group_prob: "Drop Group Probability Distribution",
    chest_detail_sim_title: "Monte Carlo Drop Simulator",
    chest_detail_sim_runs: "Runs: ",
    chest_detail_sim_run_btn: "🎲 Simulate Drops",
    chest_detail_sim_total: "Total Drops",
    chest_detail_sim_val: "Total Value (Market)",
    chest_detail_sim_avg: "Average / Chest",
    chest_detail_sim_stable_avg: "Stable Average (0.1%+)",
    chest_detail_sim_uncommon_plus: "Uncommon+",
    chest_detail_sim_beyond_plus: "Beyond+",
    chest_detail_sim_breakdown: "Acquired Items Breakdown",
    chest_detail_sim_sort_label: "Sort:",
    chest_detail_sim_sort_count: "Count",
    chest_detail_sim_sort_rarity: "Rarity",
    chest_detail_sim_sort_desc: "Desc",
    chest_detail_sim_sort_asc: "Asc",
    effect_filter_title: "Material Effect Filter",
    effect_search_placeholder: "Search by material name or stat effect...",
    effect_stat_add: "+ Add Stat Filter...",
    effect_slot_label: "Equipment Slot",
    effect_cat_label: "Category",
    effect_empty_state: "No matching material effects found.",
    item_filter_title: "Item Filter",
    item_search_placeholder: "Search by item name or ID...",
    item_type_all: "All Slots",
    item_type_gear: "Gear (GEAR)",
    item_type_material: "Material (MATERIAL)",
    item_type_stagebox: "Chest (STAGEBOX)",
    item_stat_add: "+ Add Stat Filter...",
    item_tradable_only: "Tradable Only",
    item_obtainable_only: "Obtainable Only",
    item_favorites_only: "Favorites Only ⭐",
    item_sort_default: "Default (ID Order)",
    item_sort_price_asc: "Price: Low to High",
    item_sort_price_desc: "Price: High to Low",
    item_sort_volume_desc: "24h Volume",
    item_sort_listings_desc: "Listing Count",
    item_grade_label: "Grade",
    item_class_label: "Class Limits",
    item_weapon_label: "Weapon",
    item_armor_label: "Armor",
    item_acc_label: "Accessory",
    hero_search_placeholder: "Search heroes...",
    hero_tab_skill: "💡 Skill Simulator",
    hero_tab_build: "🛡️ Equipment Build",
    hero_level_label: "Hero Level",
    hero_points_display: "Points: ",
    hero_reset_btn: "RESET POINTS",
    hero_column_left: "Main/Sub Weapon",
    hero_column_right: "Accessory/Armor",
    hero_socket_title: "Sockets",
    hero_rune_toggle: "Rune level max limit",
    hero_final_stats_title: "◆ Final Build Stats",
    hero_stat_total: "Total Stat Value",
    hero_stat_base: "Base",
    hero_stat_equip: "Equip",
    hero_stat_socket: "Sockets",
    hero_stat_skill: "Skills",
    hero_empty_socket: "Empty Socket",
    hero_detail_instructions: "Select an equip slot or socket to configure.",
    loading_failed: "Local Data Load Failed",
    loading_failed_desc: "Due to browser security restrictions (CORS), local JSON files (like data/items.json) could not be loaded directly.<br>To run it fully, please start a simple web server or use a CORS-allowed browser.<br>Run <code style='display:inline-block; background:var(--bg-secondary); padding: 4px 10px; border-radius:6px; margin-top:10px; border:1px solid var(--border); font-family:monospace; color:var(--accent);'>python -m http.server 8000</code> and open <a href='http://localhost:8000' style='color:var(--accent); text-decoration:underline;'>http://localhost:8000</a>.",
    footer_text: "TASK BAR HERO Craft Profit Simulator<br>Price data is based on in-game market information (⭐ is estimated). Actual market values may fluctuate.",
    disc_modal_title: "Disclaimer & Terms",
    disc_modal_subtitle: "Disclaimer & Terms of Use",
    disc_item1_title: "1. Accuracy of Information",
    disc_item1_desc: "All information including drop probabilities, recipes, and expected values on this site is not guaranteed to be 100% accurate. Values may change due to game updates.",
    disc_item2_title: "2. Price Data Delay",
    disc_item2_desc: "The listed Steam Market trading price information is not synchronized in real-time. Price data is batch-updated roughly once a day, so discrepancies (delays) with actual market prices may occur. Please verify with the actual Steam Market.",
    disc_item3_title: "3. Financial Responsibility",
    disc_item3_desc: "This site provides simulation results and does not recommend or encourage buying, selling, or crafting items. All final crafting decisions and transactions must be made at your own risk.",
    disc_hide_checkbox: "Do not show again",
    disc_agree_btn: "Accept & Close",
    cat_sub: "🗡️ Sub Weapon",
    cat_armor: "🛡️ Armor",
    cat_acc: "💍 Accessory",
    farm_title_header: "Farm Planner (Farming Optimizer)",
    farm_desc: "Estimates hourly efficiency (EXP/Gold) based on measured clear times to calculate the optimal farming stage.",
    farm_target_label: "Goal:",
    farm_mode_exp: "Farming EXP",
    farm_mode_gold: "Farming Gold",
    farm_mode_chest: "Farming Chests",
    farm_mode_fav: "Targeting Favs",
    farm_hero_level: "Hero Level:",
    farm_exp_bonus_label: "EXP Bonus:",
    farm_gold_bonus_label: "Gold Bonus:",
    farm_chest_ct_label: "Chest Cooldown:",
    farm_chest_prob_label: "Chest Drop Rate:",
    farm_chest_ct_unit: "min",
    farm_fav_title: "Target Favorite Items (Select multiple, only chest containing all selected will be targeted):",
    farm_hint: "* Over-level EXP penalties per stage are automatically applied based on your hero level.",
    farm_input_1_1_title: "Baseline Stage (1-1) Time",
    farm_input_1_1_desc: "Clear time for 1-1 NORMAL. Used as a baseline to estimate DPS and wave times for all stages.",
    farm_input_ceiling_title: "Ceiling Stage",
    farm_input_ceiling_desc: "Highest level stage you can farm and its clear time. Fits your DPS and baseline wave time relative to 1-1.",
    farm_input_ceiling_placeholder: "-- Select Ceiling Stage --",
    farm_cal_title: "Calibration Results",
    farm_cal_dps: "Estimated DPS:",
    farm_cal_wave: "Base Wave Time:",
    farm_cal_anchors: "Measured Stages:",
    farm_cal_fit: "Fitting Accuracy:",
    farm_best_title_label: "Optimal Farming Stage",
    farm_table_stage: "Stage",
    farm_table_level: "Level",
    farm_table_wave: "Waves",
    farm_table_hp: "Total HP",
    farm_table_time: "Est. Clear Time",
    farm_penalty_title: "Hidden Over-Level EXP Penalty",
    farm_penalty_desc: "If the hero's level exceeds the stage level, an EXP penalty is applied.<br>This simulator back-calculates efficiency from the game's hidden logarithmic penalty formula.",
    craft_sim_runs_label: "Runs: ",
    craft_sim_before_run: "Before Simulation",
    craft_sim_run_action: "Simulate Craft",
    craft_sim_runs_10: "10 Runs",
    craft_sim_runs_100: "100 Runs",
    craft_sim_runs_1000: "1,000 Runs",
    tooltip_cost_setting: "<strong>[Material Cost Basis]</strong><br>Calculated automatically from the Steam Market based on the selected Price Basis.<br><br>• <strong>Recent Sold Price</strong>: Average price of recent completed sales.<br>• <strong>Lowest Price</strong>: The lowest current listing price.<br>*You can edit this field manually.",
    tooltip_rarity_prob: "<strong>[Rarity Drop Rates]</strong><br>The official drop rate (%) for each rarity grade under this craft recipe.",
    tooltip_ev_summary: "<strong>[Expected Value Summary]</strong><br>Summarizes the balance between theoretical 'Expected Revenue (after fee)' and 'Craft Cost' per run.",
    tooltip_ev_revenue: "<strong>[Expected Revenue / Run]</strong><br>The average value of the outcome items. Calculated as: Sum of (Item Drop Rate × Market Price).",
    tooltip_ev_cost: "<strong>[Craft Cost]</strong><br>The total cost of materials required for a single craft attempt.",
    tooltip_ev_roi: "<strong>[Expected Return on Investment (ROI)]</strong><br>The ratio of net profit to material cost per run.<br><br><strong>Formula</strong>: (Revenue - Cost) ÷ Cost × 100",
    tooltip_sim_runs: "<strong>[Simulation Runs (N)]</strong><br>Runs a Monte Carlo simulation where the computer mimics opening the chest N times. Helps visualize potential variances in net returns.",
    tooltip_risk_analysis: "<strong>[7-Day Lock Risk Analysis]</strong><br>Steam locks items from trade/sale for 7 days post-creation. This section assesses the price crash risk and item liquidity during this period.",
    tooltip_price_volatility: "<strong>[Price Volatility (7-Day)]</strong><br>Simulates the probability of a price drop during the 7-day trade lock based on historical price volatility.",
    tooltip_avg_digest_days: "<strong>[Average Liquidity (Days)]</strong><br>Estimated days to sell the item on the market.<br><br><strong>Formula</strong>: Current Listings (Supply) ÷ 24h Sales Volume (Demand)",
    tooltip_farm_eph: "<strong>[EPH (Expected Per Hour)]</strong><br>Expected rewards gained per hour.<br>Derived from clear time (estimated by DPS) and adjusted for level-difference penalties.",
    tooltip_farm_penalty: "<strong>[Over-Level Penalty]</strong><br>Gains decrease when your hero level exceeds the stage level. Calculated automatically using the game's penalty curve.",
    tooltip_farm_fav_prob: "<strong>[Favorite Drop Probability]</strong><br>• <strong>Target Prob</strong>: Combined chance to drop target items from boss chest.<br>• <strong>1h / 24h Rate</strong>: Probability of getting at least 1 target item in the specified duration.",
    stat_filter_tip: "💡 Click on an added status effect name to toggle it on/off (active/inactive).",
    tab_synthesis: "🧬 Synthesis Sim",
    tab_map: "🗺️ Map Farming",
    synth_title: "◆ 🧬 Item Synthesis Simulator",
    synth_desc: "Simulate item synthesis based on game mechanics (9 items of same grade/category) and calculate target material expectations.",
    synth_indiv_title: "◆ Individual Synthesis Simulator",
    synth_indiv_desc: "Place 9 items into the synthesis chamber. Levels will be averaged, and rates are determined by input grade.",
    synth_bulk_title: "◆ Bulk & Target Synthesis Simulator",
    synth_bulk_desc: "Calculate material expectation and simulate continuous synthesis to obtain target grade.",
    synth_btn_clear: "🧹 Clear Chamber",
    synth_btn_fill_same: "⚡ Fill Slot 1 Item",
    synth_btn_fill_rand: "🎲 Fill Random",
    synth_btn_run: "🧬 Execute Synthesis",
    synth_filled_lbl: "Filled Slots",
    synth_success_lbl: "Success Rate",
    synth_great_lbl: "Great Success Rate",
    synth_fail_lbl: "Failure (Maintain) Rate",
    synth_target_lbl: "Possible Results",
    synth_bulk_start_lbl: "Start Grade",
    synth_bulk_target_lbl: "Target Grade",
    synth_bulk_category_lbl: "Category",
    synth_bulk_run_btn: "🧪 Start Simulation",
    synth_bulk_ev_lbl: "Theoretical Material Expectation (EV)",
    synth_bulk_log_lbl: "Simulation Log"
  },
  ja: {
    site_title: "タスクバーヒーロー クラフトガチャ収益シミュレーター",
    site_description: "タスクバーヒーローのクラフトガチャで武器を作成・売却したときの収益をシミュレーションできるツール。レシピ別の期待値計算・モンテカルロシミュレーション対応。",
    timer_next: "次回更新まで: ",
    timer_collecting: "マーケットデータ収集中...",
    timer_delayed: "データ遅延中（最終更新: {days}日前）",
    hero_title: "CRAFT SIMULATOR & DATABASE",
    hero_subtitle: "クラフトガチャ 収益シミュレーター & 統合データベース",
    hero_desc: "各種クラフトシミュレーション、チェストドロップ率、マテリアル効果、およびゲーム内全アイテムデータを統合したファンサイトです。<br><span style='opacity: 0.8; font-size: 11px;'>※当サイトで取り扱っている情報は100%正確であることを保証するものではありません。</span>",
    tab_craft: "🛠️ クラフト収益",
    tab_farm: "🌾 周回プランナー",
    tab_chests: "📦 宝箱ドロップ",
    tab_items: "🔍 アイテムDB",
    tab_effects: "💎 マテリアル効果",
    tab_heroes: "👤 ヒーロー & ビルド",
    tab_offering: "🪙 オファリングガチャ",
    offering_title: "◆ 🪙 キューブ・オファリング シミュレーター",
    offering_desc: "アニバーサリーコインを選択し、現在の市場価格に基づいてガチャのシミュレーションと期待値計算を行います。",
    offering_coin_select: "コイン選択：",
    offering_gold_fee: "消費ゴールド：",
    offering_run_btn: "🎲 ガチャシミュレーション実行",
    offering_ev_title: "◆ オファリング期待値サマリー",
    offering_sim_title: "◆ 🎲 オファリングガチャ シミュレーター",
    tooltip_offering_sim: "<strong>【オファリングガチャ シミュレーター】</strong><br>選択した記念コインの確率に基づき、指定回数分のガチャ開封を高速でシミュレーション（モンテカルロ法）します。<br><br>獲得できた各レアリティの個数内訳、マーケット価格に基づいた総収入・総コスト・純損益・実際のROI（収益率）をリアルタイムに算出します。",
    craft_roi_title: "クラフトレシピ (利益率順)",
    craft_market_link: "市場価格自動連動 🔄",
    craft_cost_setting: "◆ コスト設定",
    craft_mat_label: "素材：",
    craft_cost_per: "素材コスト/回",
    craft_price_basis: "価格基準",
    craft_price_sold: "直近実売価格 (取引履歴)",
    craft_price_sell: "出品最安値 (販売価格)",
    craft_fee_rate: "販売手数料",
    craft_cost_note: "※素材コストは市場価格から自動算出されますが、手動調整も可能です。",
    craft_rarity_prob: "◆ レアリティ確率",
    craft_summary_title: "◆ 期待値サマリー",
    craft_ev_revenue: "期待収入/回",
    craft_ev_cost: "クラフトコスト",
    craft_ev_profit: "期待利益/回",
    craft_ev_roi: "利益率 (ROI)",
    craft_ev_win_rate: "黒字確率",
    craft_ev_max: "最高売却額",
    craft_details_title: "◆ レシピ内アイテム詳細（価格編集可能）",
    craft_price_fallback_note: "※マーケットに取引履歴がなく参考にできる価格がないアイテムは、AIによる推定デフォルト価格（Uncommon: 15.4, Rare: 35.7, Legendary: 83.8, Immortal: 80, Arcana: 300, Beyond: 1,000, Celestial: 3,800, Divine: 13,000, Cosmic: 36,000 等）が初期値として入力されています。必要に応じてセルを直接編集して調整してください。",
    craft_col_name: "アイテム名",
    craft_col_rarity: "レア",
    craft_col_prob: "確率",
    craft_col_price: "価格 (¥)",
    craft_col_ev: "期待値 (¥)",
    craft_sim_title: "◆ 🎲 クラフトガチャ シミュレーター",
    tooltip_craft_sim: "<strong>【クラフトガチャ シミュレーター】</strong><br>選択したレシピの確率に基づき、指定回数分のクラフト開封を高速でシミュレーション（モンテカルロ法）します。<br><br>実際に獲得できた各レアリティの個数内訳、マーケット価格に基づいた総収入・総コスト・純損益・実際のROI（収益率）をリアルタイムに算出します。",
    craft_sim_runs: "試行回数：",
    craft_sim_run_btn: "🎲 連続クラフト実行",
    craft_sim_total_rev: "総収入",
    craft_sim_total_cost: "総コスト",
    craft_sim_total_profit: "最終収支",
    craft_sim_roi: "実収益率 (ROI)",
    craft_sim_beyond: "Beyond 排出",
    craft_sim_best: "最高額獲得アイテム",
    craft_sim_breakdown: "獲得したアイテムの内訳:",
    farm_title: "周回プランナー",
    chest_search_placeholder: "宝箱を検索...",
    chest_gear_lv_any: "全装備レベル対象",
    chest_gear_lv_select: "装備 Lv ",
    chest_price_basis_sold: "価格基準: 直近実売価格 (取引履歴)",
    chest_price_basis_sell: "価格基準: 出品最安値 (販売価格)",
    chest_ranking_title: "🏆 期待値ランキング <span style='font-size:11px; color:var(--text-sec); font-weight:normal;'>(ステージ入手可のみ)</span>",
    tooltip_chest_ranking: "<strong>【期待値ランキング (ステージ入手可のみ)】</strong><br>ゲーム内の各ステージでドロップ入手可能なクラフト宝箱を対象に、1回あたりの期待純利益（期待販売価格 - クラフト素材コスト）が高い順にランキング表示しています。<br><br>「Act Boss」「Stage Boss」「Normal」の3カテゴリに分類されています。",
    chest_detail_lv: "対象装備レベル: ",
    chest_detail_ev_label: "理論期待値 (1箱あたり)",
    chest_detail_stable_ev_label: "安定(出現率0.1%+): ",
    chest_detail_stage_source: "入手ステージ",
    chest_detail_dlc_variant: "DLC バリアント選択",
    chest_detail_group_prob: "ドロップグループ確率分布",
    chest_detail_sim_title: "モンテカルロドロップシミュレーション",
    chest_detail_sim_runs: "試行回数：",
    chest_detail_sim_run_btn: "🎲 ドロップ実行",
    chest_detail_sim_total: "総ドロップ数",
    chest_detail_sim_val: "総獲得額 (マーケット)",
    chest_detail_sim_avg: "1箱平均 (シミュ)",
    chest_detail_sim_stable_avg: "安定平均 (0.1%+)",
    chest_detail_sim_uncommon_plus: "Uncommon以上",
    chest_detail_sim_beyond_plus: "Beyond以上",
    chest_detail_sim_breakdown: "獲得アイテム内訳",
    chest_detail_sim_sort_label: "ソート:",
    chest_detail_sim_sort_count: "獲得数",
    chest_detail_sim_sort_rarity: "レアリティ",
    chest_detail_sim_sort_desc: "降順",
    chest_detail_sim_sort_asc: "昇順",
    effect_filter_title: "マテリアル効果フィルター",
    effect_search_placeholder: "マテリアル名やステータス効果名で検索...",
    effect_stat_add: "+ 統計情報を追加...",
    effect_slot_label: "装備スロット",
    effect_cat_label: "カテゴリ",
    effect_empty_state: "条件に一致するマテリアル効果が見つかりませんでした。",
    item_filter_title: "アイテムフィルター",
    item_search_placeholder: "アイテム名やIDで検索...",
    item_type_all: "全部位",
    item_type_gear: "装備 (GEAR)",
    item_type_material: "素材 (MATERIAL)",
    item_type_stagebox: "宝箱 (STAGEBOX)",
    item_stat_add: "+ ステータス情報を追加...",
    item_tradable_only: "取引可能のみ",
    item_obtainable_only: "入手可能のみ",
    item_favorites_only: "お気に入りのみ ⭐",
    item_sort_default: "標準順 (ID順)",
    item_sort_price_asc: "安い順 (最安値)",
    item_sort_price_desc: "高い順 (最安値)",
    item_sort_volume_desc: "24h販売済み順",
    item_sort_listings_desc: "出品数順",
    item_grade_label: "グレード",
    item_class_label: "クラス制限",
    item_weapon_label: "武器",
    item_armor_label: "防具",
    item_acc_label: "アクセサリー",
    hero_search_placeholder: "ヒーローを検索...",
    hero_tab_skill: "💡 スキルシミュレーター",
    hero_tab_build: "🛡️ 装備ビルド",
    hero_level_label: "ヒーローレベル",
    hero_points_display: "残りポイント: ",
    hero_reset_btn: "ポイントリセット",
    hero_column_left: "メイン / サブ武器",
    hero_column_right: "防具 / アクセサリー",
    hero_socket_title: "ソケット",
    hero_rune_toggle: "ルーン上限最大制限",
    hero_final_stats_title: "◆ 最終ビルドステータス",
    hero_stat_total: "最終パラメータ合計",
    hero_stat_base: "基本",
    hero_stat_equip: "装備",
    hero_stat_socket: "ソケット",
    hero_stat_skill: "スキル",
    hero_empty_socket: "空スロット",
    hero_detail_instructions: "装備スロットまたはソケットを選択して構成してください。",
    loading_failed: "ローカルデータのロードに失敗しました",
    loading_failed_desc: "ブラウザのセキュリティ制限（CORS）により、直接ローカルの JSON ファイル (`data/items.json` 等) を取得できない可能性があります。<br>ツールを完全に動作させるには、ローカルで簡易 Web サーバーを立ち上げるか、CORS を許可したブラウザで開いてください。<br>ミニサーバーを立ち上げるには、フォルダ内で <code style='display:inline-block; background:var(--bg-secondary); padding: 4px 10px; border-radius:6px; margin-top:10px; border:1px solid var(--border); font-family:monospace; color:var(--accent);'>python -m http.server 8000</code> を実行し、ブラウザで <a href='http://localhost:8000' style='color:var(--accent); text-decoration:underline;'>http://localhost:8000</a> にアクセスします。",
    footer_text: "タスクバーヒーロー クラフトガチャ収益シミュレーター<br>価格データはゲーム内マーケット情報（⭐は推定値）に基づきます。実際の相場は変動することがあります。",
    disc_modal_title: "免責事項・注意事項",
    disc_modal_subtitle: "Disclaimer & Terms of Use",
    disc_item1_title: "1. 情報の正確性について",
    disc_item1_desc: "当サイトで取り扱っているドロップ確率、レシピ、期待値などの各種情報は100%正確であることを保証するものではありません。ゲームのアップデート等により数値が変更される場合があります。",
    disc_item2_title: "2. 価格データの遅延について",
    disc_item2_desc: "掲載されているSteamマーケットの取引価格情報は、リアルタイムの同期を行っておりません。価格データは1日に1回程度のバッチ更新であるため、実際の市場価格とはズレ（遅延）が生じる場合があります。必ず実際のSteamマーケットをご確認ください。",
    disc_item3_title: "3. 取引判断の自己責任",
    disc_item3_desc: "当サイトはシミュレーション結果を提供するものであり、ゲーム内アイテムの購入、売却、クラフト実行を推奨・助長するものではありません。最終的なクラフト実行や取引判断は、全てご自身の自己責任にてお願いいたします。",
    disc_hide_checkbox: "次回から表示しない / Do not show again",
    disc_agree_btn: "同意して閉じる / Accept & Close",
    cat_sub: "🗡️ サブ武器",
    cat_armor: "🛡️ 防具",
    cat_acc: "💍 アクセ",
    farm_title_header: "周回プランナー (Farming Optimizer)",
    farm_desc: "計測したクリアタイムをもとに、時間あたりの獲得効率（EXP/ゴールド）を推定して最適な周回ステージを算出します。",
    farm_target_label: "目標:",
    farm_mode_exp: "経験値重視",
    farm_mode_gold: "ゴールド重視",
    farm_mode_chest: "宝箱金策",
    farm_mode_fav: "お気に入り狙い",
    farm_hero_level: "ヒーローレベル:",
    farm_exp_bonus_label: "経験値ボーナス:",
    farm_gold_bonus_label: "ゴールドボーナス:",
    farm_chest_ct_label: "宝箱クールタイム:",
    farm_chest_prob_label: "宝箱ドロップ率:",
    farm_chest_ct_unit: "分",
    farm_fav_title: "ターゲットにするお気に入りアイテム (複数選択可、すべてを含む宝箱のみ対象):",
    farm_hint: "※ヒーローレベルに応じて、ステージごとの隠れたオーバーレベル経験値ペナルティが自动適用されます。",
    farm_input_1_1_title: "基準ステージ (1-1) のタイム",
    farm_input_1_1_desc: "1-1 NORMALのクリアタイム。すべてのステージのDPSとウェーブ時間を推定するベースになります。",
    farm_input_ceiling_title: "上限ステージ (Ceiling Stage)",
    farm_input_ceiling_desc: "周回可能な最高レベルのステージと、そのクリアタイム。1-1とのタイム差から、あなたのDPSとウェーブ基礎時間を求めます。",
    farm_input_ceiling_placeholder: "-- 上限ステージを選択 --",
    farm_cal_title: "キャリブレーション結果",
    farm_cal_dps: "推定DPS:",
    farm_cal_wave: "ウェーブ基礎時間:",
    farm_cal_anchors: "計測ステージ数:",
    farm_cal_fit: "フィッティング精度:",
    farm_best_title_label: "最適な周回ステージ",
    farm_table_stage: "ステージ",
    farm_table_level: "レベル",
    farm_table_wave: "ウェーブ",
    farm_table_hp: "総HP",
    farm_table_time: "推定クリア時間",
    farm_penalty_title: "隠れたオーバーレベル経験値ペナルティ",
    farm_penalty_desc: "ヒーローのレベルがステージレベルを上回ると、獲得できる経験値にペナルティが適用されます。<br>このシミュレーターはゲーム内の隠し計算式（対数モデル）からペナルティを逆算して効率を算出しています。",
    craft_sim_runs_label: "試行回数 : ",
    craft_sim_before_run: "シミュレーション実行前",
    craft_sim_run_action: "連続クラフト実行",
    craft_sim_runs_10: "10回",
    craft_sim_runs_100: "100回",
    craft_sim_runs_1000: "1,000回",
    tooltip_cost_setting: "<strong>【素材コストの計算基準】</strong><br>選択された「価格基準」に基づいて、Steamマーケットの最新データから自動算出されます。<br><br>• <strong>直近実売価格</strong>: 最近実際に取引された平均価格。<br>• <strong>最安値</strong>: 現在市場に出品されている最低価格。<br>※数値を直接書き換えてのシミュレーションも可能です。",
    tooltip_rarity_prob: "<strong>【各レアリティの排出確率】</strong><br>このクラフトレシピから各グレード（レアリティ）のアイテムが完成する確率（％）です。ゲーム内の公式確率設定に基づいています。",
    tooltip_ev_summary: "<strong>【期待値サマリー】</strong><br>クラフト（ガチャ）を1回行うことで、理論上得られるアイテムの「平均売却額（手数料引き後）」と「クラフトコスト」のバランスをまとめたセクションです。",
    tooltip_ev_revenue: "<strong>【期待収入/回】</strong><br>クラフト1回あたりに得られる完成品の理論上の平均価格です。各アイテムの「出現確率 × マーケット価格」を合算して算出されます。",
    tooltip_ev_cost: "<strong>【クラフトコスト】</strong><br>クラフトを1回実行するのに必要な素材コストの総額です。",
    tooltip_ev_roi: "<strong>【期待収益率 (ROI)】</strong><br>素材コストに対して、理論上どれだけの純利益が戻ってくるかの割合です。<br><br><strong>計算式</strong>: (期待収入 - コスト) ÷ コスト × 100",
    tooltip_sim_runs: "<strong>【試行回数 (N回)】</strong><br>コンピュータが実際に指定回数分のクラフト開封を疑似的に実行するモンテカルロシミュレーションです。運の偏りによる収支のブレ幅を視覚化できます。",
    tooltip_risk_analysis: "<strong>【7日取引制限リスク分析】</strong><br>Steamマーケットの仕様上、クラフトで完成したアイテムは入手後7日間売却制限（ロック）がかかります。その期間中の相場暴落リスクと流動性を分析します。",
    tooltip_price_volatility: "<strong>【価格変動リスク (7日間)】</strong><br>過去の価格ボラティリティから、7日間の売却制限ロック中に価格がどれだけ暴落しやすいかをシミュレートした数値です。",
    tooltip_avg_digest_days: "<strong>【平均在庫消化日数】</strong><br>出品してから実際に買い手が現れるまでに平均で何日かかるかの目安です。<br><br><strong>計算式</strong>: 現在の出品数（競合） ÷ 24時間の平均販売数（需要）",
    tooltip_farm_eph: "<strong>【放置効率 (EPH: Expected Per Hour)】</strong><br>1時間放置したときに得られると予想される期待報酬です。<br>DPSからクリア秒数を逆算し、オーバーレベルによる経験値ペナルティを加味して算出されます。",
    tooltip_farm_penalty: "<strong>【レベル差ペナルティ】</strong><br>プレイヤーのレベルがステージの推奨レベルより高くなると、獲得報酬にペナルティがかかります。計算機はこのペナルティによる減衰を自動的に組み込んでいます。",
    tooltip_farm_fav_prob: "<strong>【お気に入り獲得確率】</strong><br>• <strong>ターゲット確率</strong>: ボス箱から狙いのアイテムがいずれか落ちる合算確率。<br>• <strong>1h / 24h入手率</strong>: 該当時間放置した際、少なくとも1個以上入手できる確率。",
    stat_filter_tip: "💡 追加したステータス効果名をクリックすると、オン/オフ（有効/無効）を切り替えられます。",
    tab_synthesis: "🧬 合成シミュレータ",
    tab_map: "🗺️ マップ周回",
    synth_title: "◆ 🧬 アイテム合成シミュレータ",
    synth_desc: "ゲーム内の合成仕様（同グレード同カテゴリ9個の合成、確率による大成功・失敗、平均レベル依存のアイテム選出）を再現したシミュレータです。",
    synth_indiv_title: "◆ 個別合成シミュレータ",
    synth_indiv_desc: "チャンバー内に9個のアイテムを配置します。平均レベルが算出され、入力グレードに基づいて確率が変動します。",
    synth_bulk_title: "◆ 一括・目標合成シミュレータ",
    synth_bulk_desc: "目標グレードを獲得するまでに必要な素材数の期待値を計算し、連続合成のシミュレーションを実行します。",
    synth_btn_clear: "🧹 チャンバークリア",
    synth_btn_fill_same: "⚡ スロット1のアイテムで埋める",
    synth_btn_fill_rand: "🎲 ランダムで埋める",
    synth_btn_run: "🧬 合成を実行する",
    synth_filled_lbl: "配置数",
    synth_success_lbl: "合成成功率",
    synth_great_lbl: "大成功確率",
    synth_fail_lbl: "失敗 (グレード維持) 率",
    synth_target_lbl: "出現する可能性のあるグレード",
    synth_bulk_start_lbl: "開始グレード",
    synth_bulk_target_lbl: "目標グレード",
    synth_bulk_category_lbl: "カテゴリ",
    synth_bulk_run_btn: "🧪 シミュレーション開始",
    synth_bulk_ev_lbl: "目標1個あたりの理論上必要数期待値 (EV)",
    synth_bulk_log_lbl: "シミュレーション結果ログ"
  }
};

let currentLang = 'ja';

function setLang(lang) {
  currentLang = lang;
  updateLangUI();
}

function updateLangUI() {
  if (I18N[currentLang] && I18N[currentLang]['site_title']) {
    document.title = I18N[currentLang]['site_title'];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && I18N[currentLang] && I18N[currentLang]['site_description']) {
    metaDesc.setAttribute('content', I18N[currentLang]['site_description']);
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang] && I18N[currentLang][key]) {
      el.innerHTML = I18N[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[currentLang] && I18N[currentLang][key]) {
      el.placeholder = I18N[currentLang][key];
    }
  });

  updateDynamicLanguageElements();
  
  if (typeof updateAll === 'function') updateAll();
  if (typeof renderChestList === 'function') renderChestList();
  if (typeof renderHeroList === 'function') renderHeroList();
  if (typeof renderItemDb === 'function') renderItemDb();
  if (typeof renderEffects === 'function') {
    if (typeof globalEffects !== 'undefined') renderEffects(globalEffects);
  }
  if (typeof initUpdateTimer === 'function') initUpdateTimer();
  if (typeof translateFilterChips === 'function') translateFilterChips();
}

function translateFilterChips() {
  const lang = currentLang || 'ja';
  const trans = filterTranslations[lang] || filterTranslations['ja'];
  
  // グレードフィルター
  document.querySelectorAll('#itemGradeFilter .filter-chip').forEach(btn => {
    const key = btn.getAttribute('data-filter-key');
    if (key === 'ALL') {
      btn.textContent = trans['ALL'] || 'All';
    } else if (key) {
      const color = btn.getAttribute('data-filter-color') || '#fff';
      const label = trans[key] || key;
      btn.innerHTML = `<span style="color:${color}; margin-right:4px;">■</span>${label}`;
    }
  });

  // クラスフィルター
  document.querySelectorAll('#itemClassFilter .filter-chip').forEach(btn => {
    const key = btn.getAttribute('data-filter-key');
    if (key === 'ALL') {
      btn.textContent = trans['ALL'] || 'All';
    } else if (key) {
      btn.textContent = trans[key] || key;
    }
  });

  // 装備部位フィルター (WEAPON, ARMOR, ACCESSORY)
  ['WEAPON', 'ARMOR', 'ACCESSORY'].forEach(cat => {
    document.querySelectorAll(`#itemGearTypeFilter-${cat} .filter-chip`).forEach(btn => {
      const key = btn.getAttribute('data-filter-key');
      if (key === 'ALL') {
        btn.textContent = trans['ALL'] || 'All';
      } else if (key) {
        btn.textContent = trans[key] || key;
      }
    });
  });
}

function updateDynamicLanguageElements() {
  const isEn = currentLang === 'en';
  
  const effectStatAddSelect = document.getElementById('effectStatAddSelect');
  if (effectStatAddSelect && effectStatAddSelect.options[0]) {
    effectStatAddSelect.options[0].textContent = isEn ? "+ Add Stat Filter..." : "+ 統計情報を追加...";
  }

  const itemStatAddSelect = document.getElementById('itemStatAddSelect');
  if (itemStatAddSelect && itemStatAddSelect.options[0]) {
    itemStatAddSelect.options[0].textContent = isEn ? "+ Add Stat Filter..." : "+ ステータス情報を追加...";
  }

  const itemTypeFilter = document.getElementById('itemTypeFilter');
  if (itemTypeFilter) {
    itemTypeFilter.options[0].textContent = isEn ? "All Slots" : "全部位";
    itemTypeFilter.options[1].textContent = isEn ? "Gear (GEAR)" : "装備 (GEAR)";
    itemTypeFilter.options[2].textContent = isEn ? "Material (MATERIAL)" : "素材 (MATERIAL)";
    itemTypeFilter.options[3].textContent = isEn ? "Chest (STAGEBOX)" : "宝箱 (STAGEBOX)";
  }

  const itemSortFilter = document.getElementById('itemSortFilter');
  if (itemSortFilter) {
    itemSortFilter.options[0].textContent = isEn ? "Default (ID Order)" : "標準順 (ID順)";
    itemSortFilter.options[1].textContent = isEn ? "Price: Low to High" : "安い順 (最安値)";
    itemSortFilter.options[2].textContent = isEn ? "Price: High to Low" : "高い順 (最安値)";
    itemSortFilter.options[3].textContent = isEn ? "24h Volume" : "24h販売済み順";
    itemSortFilter.options[4].textContent = isEn ? "Listing Count" : "出品数順";
  }

  const chestGearLevelSelect = document.getElementById('chestGearLevelSelect');
  if (chestGearLevelSelect) {
    chestGearLevelSelect.options[0].textContent = isEn ? "Farm any gear level" : "全装備レベル対象";
    for (let i = 1; i < chestGearLevelSelect.options.length; i++) {
      const val = chestGearLevelSelect.options[i].value;
      chestGearLevelSelect.options[i].textContent = isEn ? `Gear Lv ${val}` : `装備 Lv ${val}`;
    }
  }

  const chestPriceBasisSelect = document.getElementById('chestPriceBasisSelect');
  if (chestPriceBasisSelect) {
    chestPriceBasisSelect.options[0].textContent = isEn ? "Basis: Recent Sold Price (History)" : "価格基準: 直近実売価格 (取引履歴)";
    chestPriceBasisSelect.options[1].textContent = isEn ? "Basis: Lowest Listing Price (Market)" : "価格基準: 出品最安値 (販売価格)";
  }
  
  const craftPriceBasisSelect = document.getElementById('craftPriceBasisSelect');
  if (craftPriceBasisSelect) {
    craftPriceBasisSelect.options[0].textContent = isEn ? "Recent Sold Price (History)" : "直近実売価格 (取引履歴)";
    craftPriceBasisSelect.options[1].textContent = isEn ? "Lowest Listing Price (Market)" : "出品最安値 (販売価格)";
  }

  const chestBdSortKey = document.getElementById('chestBdSortKey');
  if (chestBdSortKey) {
    chestBdSortKey.options[0].textContent = isEn ? "Count" : "獲得数";
    chestBdSortKey.options[1].textContent = isEn ? "Rarity" : "レアリティ";
  }

  const chestBdSortOrder = document.getElementById('chestBdSortOrder');
  if (chestBdSortOrder) {
    chestBdSortOrder.options[0].textContent = isEn ? "Desc" : "降順";
    chestBdSortOrder.options[1].textContent = isEn ? "Asc" : "昇順";
  }
  
  const craftCostCurrency = document.getElementById('craftCostCurrency');
  if (craftCostCurrency) {
    craftCostCurrency.textContent = getMarketCurrencySymbol();
  }

  // Update HTML tag lang attribute for browsers / Google Translate
  document.documentElement.lang = currentLang;

  // Dynamic craft table header translation with currency symbol
  const currencySymbol = getMarketCurrencySymbol();
  const thPrice = document.querySelector('[data-i18n="craft_col_price"]');
  const thEv = document.querySelector('[data-i18n="craft_col_ev"]');
  if (thPrice) thPrice.textContent = isEn ? `Price (${currencySymbol})` : `価格 (${currencySymbol})`;
  if (thEv) thEv.textContent = isEn ? `EV (${currencySymbol})` : `期待値 (${currencySymbol})`;

  // Dynamic farm ceiling select first option translation
  const farmSelectCeiling = document.getElementById('farm-select-ceiling');
  if (farmSelectCeiling && farmSelectCeiling.options[0]) {
    farmSelectCeiling.options[0].textContent = isEn ? "-- Select Ceiling Stage --" : "-- 上限ステージを選択 --";
  }

  // Dynamic Chart translation & refresh
  if (typeof chart !== 'undefined' && chart) {
    // Update Y axis tick formatting callback
    chart.config.options.scales.y.ticks.callback = v => currencySymbol + v.toLocaleString();
    
    // Update chart title if it matches known states
    const currentTitle = chart.config.options.plugins.title.text;
    if (currentTitle === 'シミュレーション実行前' || currentTitle === 'Before Simulation') {
      chart.config.options.plugins.title.text = isEn ? 'Before Simulation' : 'シミュレーション実行前';
    } else if (currentTitle.startsWith('各回の収入') || currentTitle.startsWith('Income per Run')) {
      const match = currentTitle.match(/\d+/);
      const num = match ? match[0] : '100';
      chart.config.options.plugins.title.text = isEn ? `Income per Run (Total ${num} Runs)` : `各回の収入（計${num}回）`;
    } else if (currentTitle.startsWith('累積利益推移') || currentTitle.startsWith('Cumulative Profit')) {
      const match = currentTitle.match(/\d+/);
      const num = match ? match[0] : '1000';
      chart.config.options.plugins.title.text = isEn ? `Cumulative Profit (Total ${num} Runs)` : `累積利益推移（計${num}回）`;
    }

    // Update datasets label
    if (chart.config.data.datasets && chart.config.data.datasets.length > 0) {
      chart.config.data.datasets.forEach(ds => {
        if (ds.label.startsWith('収入') || ds.label.startsWith('Income')) {
          ds.label = isEn ? `Income (${currencySymbol})` : `収入 (${currencySymbol})`;
        } else if (ds.label.startsWith('累積利益') || ds.label.startsWith('Cumulative Profit')) {
          ds.label = isEn ? `Cumulative Profit (${currencySymbol})` : `累積利益 (${currencySymbol})`;
        } else if (ds.label === '損益分岐ライン' || ds.label === 'Break-even Line') {
          ds.label = isEn ? 'Break-even Line' : '損益分岐ライン';
        }
      });
    }
    chart.update('none');
  }

  // Dynamic Chests Chart title refresh
  if (typeof chestsChart !== 'undefined' && chestsChart) {
    chestsChart.config.options.plugins.title.text = isEn ? 'Rarity Distribution' : '獲得レアリティ分布';
    chestsChart.update('none');
  }

  // 選択中レシピの素材表記を現在の言語で再反映
  if (typeof selectRecipeByIdx === 'function' && typeof getActiveCur === 'function') {
    const activeIdx = getActiveCur();
    if (activeIdx !== -1) {
      selectRecipeByIdx(activeIdx);
    }
  }

  // Refresh farm calculator UI translations
  if (typeof recalculateFarm === 'function') {
    recalculateFarm();
  }

  // Update Synthesis Bulk options
  const bulkSynthStartGrade = document.getElementById('bulkSynthStartGrade');
  if (bulkSynthStartGrade) {
    const grades = [
      { v: 'COMMON', en: 'Common', ja: 'コモン' },
      { v: 'UNCOMMON', en: 'Uncommon', ja: 'アンコモン' },
      { v: 'RARE', en: 'Rare', ja: 'レア' },
      { v: 'EPIC', en: 'Epic', ja: 'エピック' },
      { v: 'LEGENDARY', en: 'Legendary', ja: 'レジェンダリー' }
    ];
    Array.from(bulkSynthStartGrade.options).forEach(opt => {
      const info = grades.find(g => g.v === opt.value);
      if (info) {
        opt.textContent = isEn ? info.en : info.ja;
      }
    });
  }

  const bulkSynthTargetGrade = document.getElementById('bulkSynthTargetGrade');
  if (bulkSynthTargetGrade) {
    const grades = [
      { v: 'UNCOMMON', en: 'Uncommon', ja: 'アンコモン' },
      { v: 'RARE', en: 'Rare', ja: 'レア' },
      { v: 'EPIC', en: 'Epic', ja: 'エピック' },
      { v: 'LEGENDARY', en: 'Legendary', ja: 'レジェンダリー' },
      { v: 'MYTHIC', en: 'Mythic', ja: 'ミシック' },
      { v: 'DIVINE', en: 'Divine', ja: 'ディヴァイン' }
    ];
    Array.from(bulkSynthTargetGrade.options).forEach(opt => {
      const info = grades.find(g => g.v === opt.value);
      if (info) {
        opt.textContent = isEn ? info.en : info.ja;
      }
    });
  }

  const bulkSynthCategory = document.getElementById('bulkSynthCategory');
  if (bulkSynthCategory) {
    const cats = [
      { v: 'WEAPON', en: 'Weapon', ja: '武器' },
      { v: 'HELMET', en: 'Helmet', ja: '兜' },
      { v: 'ARMOR', en: 'Armor', ja: '鎧' },
      { v: 'GLOVES', en: 'Gloves', ja: '手袋' },
      { v: 'BOOTS', en: 'Boots', ja: '靴' },
      { v: 'RING', en: 'Ring', ja: '指輪' },
      { v: 'AMULET', en: 'Amulet', ja: 'アミュレット' },
      { v: 'BELT', en: 'Belt', ja: 'ベルト' },
      { v: 'CAPE', en: 'Cape', ja: 'ケープ' }
    ];
    Array.from(bulkSynthCategory.options).forEach(opt => {
      const info = cats.find(c => c.v === opt.value);
      if (info) {
        opt.textContent = isEn ? info.en : info.ja;
      }
    });
  }

  rebuildStatSelectOptions();
}

function rebuildStatSelectOptions() {
  const effectSelect = document.getElementById('effectStatAddSelect');
  if (effectSelect) {
    const savedVal = effectSelect.value;
    effectSelect.innerHTML = '';
    const option = document.createElement('option');
    option.value = "";
    option.textContent = currentLang === 'en' ? "+ Add Stat Filter..." : "+ ステータス情報を追加...";
    effectSelect.appendChild(option);
    
    const statsSet = new Set();
    if (typeof globalEffects !== 'undefined') {
      globalEffects.forEach(eff => {
        if (eff.groups) {
          eff.groups.forEach(g => {
            if (g.stat) statsSet.add(g.stat);
          });
        }
      });
    }
    const sortedStats = Array.from(statsSet).sort();
    sortedStats.forEach(stat => {
      const opt = document.createElement('option');
      opt.value = stat;
      opt.textContent = formatStatName(stat);
      effectSelect.appendChild(opt);
    });
    effectSelect.value = savedVal;
  }
  
  const itemSelect = document.getElementById('itemStatAddSelect');
  if (itemSelect) {
    const savedVal = itemSelect.value;
    itemSelect.innerHTML = '';
    const option = document.createElement('option');
    option.value = "";
    option.textContent = currentLang === 'en' ? "+ Add Stat Filter..." : "+ ステータス情報を追加...";
    itemSelect.appendChild(option);
    
    const statsSet = new Set();
    const uniqueModsSet = new Set();
    if (typeof globalItems !== 'undefined') {
      globalItems.forEach(it => {
        if (it.stats) {
          if (it.stats.base) {
            it.stats.base.forEach(s => statsSet.add(s.stat));
          }
          if (it.stats.inherent) {
            it.stats.inherent.forEach(s => statsSet.add(s.stat));
          }
        }
        if (it.uniqueMod && it.uniqueMod !== '0' && it.uniqueMod !== 0 && it.uniqueMod !== 'null' && it.uniqueMod !== 'undefined') {
          statsSet.add(it.uniqueMod);
          uniqueModsSet.add(it.uniqueMod);
        }
      });
    }
    
    const normalStats = [];
    const uniqueStats = [];
    statsSet.forEach(stat => {
      if (uniqueModsSet.has(stat)) {
        uniqueStats.push(stat);
      } else {
        normalStats.push(stat);
      }
    });

    normalStats.sort();
    uniqueStats.sort();

    const normalGroup = document.createElement('optgroup');
    normalGroup.label = currentLang === 'en' ? 'Normal Stats' : '一般ステータス';
    normalGroup.style.color = 'var(--text-sec)';
    
    const uniqueGroup = document.createElement('optgroup');
    uniqueGroup.label = currentLang === 'en' ? 'Special Skills (✨)' : '特殊スキル・固有効果 (✨)';
    uniqueGroup.style.color = 'var(--legendary)';
    uniqueGroup.style.fontWeight = 'bold';

    normalStats.forEach(stat => {
      const opt = document.createElement('option');
      opt.value = stat;
      opt.textContent = formatStatName(stat);
      opt.style.color = 'var(--text-pri)';
      normalGroup.appendChild(opt);
    });

    uniqueStats.forEach(stat => {
      const opt = document.createElement('option');
      opt.value = stat;
      opt.textContent = '✨ ' + formatStatName(stat);
      opt.style.color = 'var(--legendary)';
      opt.style.fontWeight = 'bold';
      uniqueGroup.appendChild(opt);
    });

    if (normalStats.length > 0) itemSelect.appendChild(normalGroup);
    if (uniqueStats.length > 0) itemSelect.appendChild(uniqueGroup);

    itemSelect.value = savedVal;
  }
}

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */
const RARITIES = [
  { key:'uncommon',  name:'Uncommon',  color:'#a6ff5c' },
  { key:'rare',      name:'Rare',      color:'#5cb8ff' },
  { key:'legendary', name:'Legendary', color:'#f5a623' },
  { key:'immortal',  name:'Immortal',  color:'#ff4d4d' },
  { key:'arcana',    name:'Arcana',    color:'#b04bff' },
  { key:'beyond',    name:'Beyond',    color:'#ff2d78' },
];

// prices: { uncommon, rare, legendary, immortal, arcana, beyond }
// rare は常に 0（売却不可・青色武器）
const RAW_CRAFT_TEMPLATES = [
  {
    "key": 6001001,
    "type": "MainWeapon",
    "tier": 1,
    "materials": [
      {
        "id": 140003,
        "name_en": "Leather",
        "name_ja": "レザー",
        "amount": 1,
        "icon": "/game/items/materials/Item_140003.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301011,
        301021,
        301031,
        311011,
        311021,
        311031,
        321011,
        321021,
        321031,
        331011,
        331021,
        331031,
        341011,
        341021,
        341031,
        351011,
        351021,
        351031
      ],
      "RARE": [
        302011,
        302021,
        302031,
        312011,
        312021,
        312031,
        322011,
        322021,
        322031,
        332011,
        332021,
        332031,
        342011,
        342021,
        342031,
        352011,
        352021,
        352031
      ],
      "LEGENDARY": [
        303011,
        303021,
        303031,
        313011,
        313021,
        313031,
        323011,
        323021,
        323031,
        333011,
        333021,
        333031,
        343011,
        343021,
        343031,
        353011,
        353021,
        353031
      ],
      "IMMORTAL": [
        304011,
        304021,
        304031,
        314011,
        314021,
        314031,
        324011,
        324021,
        324031,
        334011,
        334021,
        334031,
        344011,
        344021,
        344031,
        354011,
        354021,
        354031
      ]
    }
  },
  {
    "key": 6001002,
    "type": "SubWeapon",
    "tier": 1,
    "materials": [
      {
        "id": 140003,
        "name_en": "Leather",
        "name_ja": "レザー",
        "amount": 1,
        "icon": "/game/items/materials/Item_140003.png"
      },
      {
        "id": 140004,
        "name_en": "Copper Nugget",
        "name_ja": "銅の塊",
        "amount": 1,
        "icon": "/game/items/materials/Item_140004.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401011,
        401021,
        401031,
        411011,
        411021,
        411031,
        421011,
        421021,
        421031,
        431011,
        431021,
        431031,
        441011,
        441021,
        441031,
        451011,
        451021,
        451031
      ],
      "RARE": [
        402011,
        402021,
        402031,
        412011,
        412021,
        412031,
        422011,
        422021,
        422031,
        432011,
        432021,
        432031,
        442011,
        442021,
        442031,
        452011,
        452021,
        452031
      ],
      "LEGENDARY": [
        403011,
        403021,
        403031,
        413011,
        413021,
        413031,
        423011,
        423021,
        423031,
        433011,
        433021,
        433031,
        443011,
        443021,
        443031,
        453011,
        453021,
        453031
      ],
      "IMMORTAL": [
        404011,
        404021,
        404031,
        414011,
        414021,
        414031,
        424011,
        424021,
        424031,
        434011,
        434021,
        434031,
        444011,
        444021,
        444031,
        454011,
        454021,
        454031
      ]
    }
  },
  {
    "key": 6001003,
    "type": "Helmet",
    "tier": 1,
    "materials": [
      {
        "id": 140001,
        "name_en": "Wood",
        "name_ja": "木材",
        "amount": 1,
        "icon": "/game/items/materials/Item_140001.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501011,
        501021,
        501031
      ],
      "RARE": [
        502011,
        502021,
        502031
      ],
      "LEGENDARY": [
        503011,
        503021,
        503031
      ],
      "IMMORTAL": [
        504011,
        504021,
        504031
      ]
    }
  },
  {
    "key": 6001004,
    "type": "Armor",
    "tier": 1,
    "materials": [
      {
        "id": 140001,
        "name_en": "Wood",
        "name_ja": "木材",
        "amount": 1,
        "icon": "/game/items/materials/Item_140001.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511011,
        511021,
        511031
      ],
      "RARE": [
        512011,
        512021,
        512031
      ],
      "LEGENDARY": [
        513011,
        513021,
        513031
      ],
      "IMMORTAL": [
        514011,
        514021,
        514031
      ]
    }
  },
  {
    "key": 6001005,
    "type": "Gloves",
    "tier": 1,
    "materials": [
      {
        "id": 140001,
        "name_en": "Wood",
        "name_ja": "木材",
        "amount": 1,
        "icon": "/game/items/materials/Item_140001.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521011,
        521021,
        521031
      ],
      "RARE": [
        522011,
        522021,
        522031
      ],
      "LEGENDARY": [
        523011,
        523021,
        523031
      ],
      "IMMORTAL": [
        524011,
        524021,
        524031
      ]
    }
  },
  {
    "key": 6001006,
    "type": "Boots",
    "tier": 1,
    "materials": [
      {
        "id": 140001,
        "name_en": "Wood",
        "name_ja": "木材",
        "amount": 1,
        "icon": "/game/items/materials/Item_140001.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531011,
        531021,
        531031
      ],
      "RARE": [
        532011,
        532021,
        532031
      ],
      "LEGENDARY": [
        533011,
        533021,
        533031
      ],
      "IMMORTAL": [
        534011,
        534021,
        534031
      ]
    }
  },
  {
    "key": 6001007,
    "type": "Accessory",
    "tier": 1,
    "materials": [
      {
        "id": 110001,
        "name_en": "Minor Ruby",
        "name_ja": "スモールルビー",
        "amount": 1,
        "icon": "/game/items/materials/Item_110001.png"
      },
      {
        "id": 110002,
        "name_en": "Minor Sapphire",
        "name_ja": "マイナーサファイア",
        "amount": 1,
        "icon": "/game/items/materials/Item_110002.png"
      }
    ],
    "levelMin": 1,
    "levelMax": 10,
    "odds": {
      "UNCOMMON": 50.0,
      "RARE": 40.0,
      "LEGENDARY": 8.0,
      "IMMORTAL": 2.0
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601011,
        601021,
        601031,
        611011,
        611021,
        611031,
        621011,
        621021,
        621031,
        631011,
        631021,
        631031
      ],
      "RARE": [
        602011,
        602021,
        602031,
        612011,
        612021,
        612031,
        622011,
        622021,
        622031,
        632011,
        632021,
        632031
      ],
      "LEGENDARY": [
        603011,
        603021,
        603031,
        613011,
        613021,
        613031,
        623011,
        623021,
        623031,
        633011,
        633021,
        633031
      ],
      "IMMORTAL": [
        604011,
        604021,
        604031,
        614011,
        614021,
        614031,
        624011,
        624021,
        624031,
        634011,
        634021,
        634031
      ]
    }
  },
  {
    "key": 6002001,
    "type": "MainWeapon",
    "tier": 2,
    "materials": [
      {
        "id": 140004,
        "name_en": "Copper Nugget",
        "name_ja": "銅の塊",
        "amount": 1,
        "icon": "/game/items/materials/Item_140004.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301031,
        301041,
        301051,
        311031,
        311041,
        311051,
        321031,
        321041,
        321051,
        331031,
        331041,
        331051,
        341031,
        341041,
        341051,
        351031,
        351041,
        351051
      ],
      "RARE": [
        302031,
        302041,
        302051,
        312031,
        312041,
        312051,
        322031,
        322041,
        322051,
        332031,
        332041,
        332051,
        342031,
        342041,
        342051,
        352031,
        352041,
        352051
      ],
      "LEGENDARY": [
        303031,
        303041,
        303051,
        313031,
        313041,
        313051,
        323031,
        323041,
        323051,
        333031,
        333041,
        333051,
        343031,
        343041,
        343051,
        353031,
        353041,
        353051
      ],
      "IMMORTAL": [
        304031,
        304041,
        304051,
        314031,
        314041,
        314051,
        324031,
        324041,
        324051,
        334031,
        334041,
        334051,
        344031,
        344041,
        344051,
        354031,
        354041,
        354051
      ],
      "ARCANA": [
        305041,
        305051,
        315041,
        315051,
        325041,
        325051,
        335041,
        335051,
        345041,
        345051,
        355041,
        355051
      ]
    }
  },
  {
    "key": 6002002,
    "type": "SubWeapon",
    "tier": 2,
    "materials": [
      {
        "id": 140003,
        "name_en": "Leather",
        "name_ja": "レザー",
        "amount": 1,
        "icon": "/game/items/materials/Item_140003.png"
      },
      {
        "id": 140004,
        "name_en": "Copper Nugget",
        "name_ja": "銅の塊",
        "amount": 1,
        "icon": "/game/items/materials/Item_140004.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401031,
        401041,
        401051,
        411031,
        411041,
        411051,
        421031,
        421041,
        421051,
        431031,
        431041,
        431051,
        441031,
        441041,
        441051,
        451031,
        451041,
        451051
      ],
      "RARE": [
        402031,
        402041,
        402051,
        412031,
        412041,
        412051,
        422031,
        422041,
        422051,
        432031,
        432041,
        432051,
        442031,
        442041,
        442051,
        452031,
        452041,
        452051
      ],
      "LEGENDARY": [
        403031,
        403041,
        403051,
        413031,
        413041,
        413051,
        423031,
        423041,
        423051,
        433031,
        433041,
        433051,
        443031,
        443041,
        443051,
        453031,
        453041,
        453051
      ],
      "IMMORTAL": [
        404031,
        404041,
        404051,
        414031,
        414041,
        414051,
        424031,
        424041,
        424051,
        434031,
        434041,
        434051,
        444031,
        444041,
        444051,
        454031,
        454041,
        454051
      ],
      "ARCANA": [
        405041,
        405051,
        415041,
        415051,
        425041,
        425051,
        435041,
        435051,
        445041,
        445051,
        455041,
        455051
      ]
    }
  },
  {
    "key": 6002003,
    "type": "Helmet",
    "tier": 2,
    "materials": [
      {
        "id": 140002,
        "name_en": "Stone",
        "name_ja": "ストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_140002.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501031,
        501041,
        501051
      ],
      "RARE": [
        502031,
        502041,
        502051
      ],
      "LEGENDARY": [
        503031,
        503041,
        503051
      ],
      "IMMORTAL": [
        504031,
        504041,
        504051
      ],
      "ARCANA": [
        505041,
        505051
      ]
    }
  },
  {
    "key": 6002004,
    "type": "Armor",
    "tier": 2,
    "materials": [
      {
        "id": 140002,
        "name_en": "Stone",
        "name_ja": "ストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_140002.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511031,
        511041,
        511051
      ],
      "RARE": [
        512031,
        512041,
        512051
      ],
      "LEGENDARY": [
        513031,
        513041,
        513051
      ],
      "IMMORTAL": [
        514031,
        514041,
        514051
      ],
      "ARCANA": [
        515041,
        515051
      ]
    }
  },
  {
    "key": 6002005,
    "type": "Gloves",
    "tier": 2,
    "materials": [
      {
        "id": 140002,
        "name_en": "Stone",
        "name_ja": "ストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_140002.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521031,
        521041,
        521051
      ],
      "RARE": [
        522031,
        522041,
        522051
      ],
      "LEGENDARY": [
        523031,
        523041,
        523051
      ],
      "IMMORTAL": [
        524031,
        524041,
        524051
      ],
      "ARCANA": [
        525041,
        525051
      ]
    }
  },
  {
    "key": 6002006,
    "type": "Boots",
    "tier": 2,
    "materials": [
      {
        "id": 140002,
        "name_en": "Stone",
        "name_ja": "ストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_140002.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531031,
        531041,
        531051
      ],
      "RARE": [
        532031,
        532041,
        532051
      ],
      "LEGENDARY": [
        533031,
        533041,
        533051
      ],
      "IMMORTAL": [
        534031,
        534041,
        534051
      ],
      "ARCANA": [
        535041,
        535051
      ]
    }
  },
  {
    "key": 6002007,
    "type": "Accessory",
    "tier": 2,
    "materials": [
      {
        "id": 110003,
        "name_en": "Minor Topaz",
        "name_ja": "マイナートパーズ",
        "amount": 1,
        "icon": "/game/items/materials/Item_110003.png"
      },
      {
        "id": 110004,
        "name_en": "Minor Emerald",
        "name_ja": "スモールエメラルド",
        "amount": 1,
        "icon": "/game/items/materials/Item_110004.png"
      }
    ],
    "levelMin": 10,
    "levelMax": 20,
    "odds": {
      "UNCOMMON": 30.0,
      "RARE": 52.0,
      "LEGENDARY": 13.0,
      "IMMORTAL": 4.5,
      "ARCANA": 0.5
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601031,
        601041,
        601051,
        611031,
        611041,
        611051,
        621031,
        621041,
        621051,
        631031,
        631041,
        631051
      ],
      "RARE": [
        602031,
        602041,
        602051,
        612031,
        612041,
        612051,
        622031,
        622041,
        622051,
        632031,
        632041,
        632051
      ],
      "LEGENDARY": [
        603031,
        603041,
        603051,
        613031,
        613041,
        613051,
        623031,
        623041,
        623051,
        633031,
        633041,
        633051
      ],
      "IMMORTAL": [
        604031,
        604041,
        604051,
        614031,
        614041,
        614051,
        624031,
        624041,
        624051,
        634031,
        634041,
        634051
      ],
      "ARCANA": [
        605041,
        605051,
        615041,
        615051,
        625041,
        625051,
        635041,
        635051
      ]
    }
  },
  {
    "key": 6003001,
    "type": "MainWeapon",
    "tier": 3,
    "materials": [
      {
        "id": 141002,
        "name_en": "Iron Ingot",
        "name_ja": "鉄のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141002.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.01,
      "RARE": 56.01,
      "LEGENDARY": 18.01,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.07
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301051,
        301071,
        311051,
        311071,
        321051,
        321071,
        331051,
        331071,
        341051,
        341071,
        351051,
        351071
      ],
      "RARE": [
        302051,
        302071,
        312051,
        312071,
        322051,
        322071,
        332051,
        332071,
        342051,
        342071,
        352051,
        352071
      ],
      "LEGENDARY": [
        303051,
        303071,
        313051,
        313071,
        323051,
        323071,
        333051,
        333071,
        343051,
        343071,
        353051,
        353071
      ],
      "IMMORTAL": [
        304051,
        304071,
        314051,
        314071,
        324051,
        324071,
        334051,
        334071,
        344051,
        344071,
        354051,
        354071
      ],
      "ARCANA": [
        305051,
        305071,
        315051,
        315071,
        325051,
        325071,
        335051,
        335071,
        345051,
        345071,
        355051,
        355071
      ],
      "BEYOND": [
        306071,
        316071,
        326071,
        336071,
        346071,
        356071
      ]
    }
  },
  {
    "key": 6003002,
    "type": "SubWeapon",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      },
      {
        "id": 141002,
        "name_en": "Iron Ingot",
        "name_ja": "鉄のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141002.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.01,
      "RARE": 56.01,
      "LEGENDARY": 18.01,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.07
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401051,
        401071,
        411051,
        411071,
        421051,
        421071,
        431051,
        431071,
        441051,
        441071,
        451051,
        451071
      ],
      "RARE": [
        402051,
        402071,
        412051,
        412071,
        422051,
        422071,
        432051,
        432071,
        442051,
        442071,
        452051,
        452071
      ],
      "LEGENDARY": [
        403051,
        403071,
        413051,
        413071,
        423051,
        423071,
        433051,
        433071,
        443051,
        443071,
        453051,
        453071
      ],
      "IMMORTAL": [
        404051,
        404071,
        414051,
        414071,
        424051,
        424071,
        434051,
        434071,
        444051,
        444071,
        454051,
        454071
      ],
      "ARCANA": [
        405051,
        405071,
        415051,
        415071,
        425051,
        425071,
        435051,
        435071,
        445051,
        445071,
        455051,
        455071
      ],
      "BEYOND": [
        406071,
        416071,
        426071,
        436071,
        446071,
        456071
      ]
    }
  },
  {
    "key": 6003003,
    "type": "Helmet",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.0,
      "RARE": 56.01,
      "LEGENDARY": 18.0,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.08
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501051,
        501071
      ],
      "RARE": [
        502051,
        502071
      ],
      "LEGENDARY": [
        503051,
        503071
      ],
      "IMMORTAL": [
        504051,
        504071
      ],
      "ARCANA": [
        505051,
        505071
      ],
      "BEYOND": [
        506071
      ]
    }
  },
  {
    "key": 6003004,
    "type": "Armor",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.0,
      "RARE": 56.01,
      "LEGENDARY": 18.0,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.08
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511051,
        511071
      ],
      "RARE": [
        512051,
        512071
      ],
      "LEGENDARY": [
        513051,
        513071
      ],
      "IMMORTAL": [
        514051,
        514071
      ],
      "ARCANA": [
        515051,
        515071
      ],
      "BEYOND": [
        516071
      ]
    }
  },
  {
    "key": 6003005,
    "type": "Gloves",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.0,
      "RARE": 56.01,
      "LEGENDARY": 18.0,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.08
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521051,
        521071
      ],
      "RARE": [
        522051,
        522071
      ],
      "LEGENDARY": [
        523051,
        523071
      ],
      "IMMORTAL": [
        524051,
        524071
      ],
      "ARCANA": [
        525051,
        525071
      ],
      "BEYOND": [
        526071
      ]
    }
  },
  {
    "key": 6003006,
    "type": "Boots",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.0,
      "RARE": 56.01,
      "LEGENDARY": 18.0,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.08
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531051,
        531071
      ],
      "RARE": [
        532051,
        532071
      ],
      "LEGENDARY": [
        533051,
        533071
      ],
      "IMMORTAL": [
        534051,
        534071
      ],
      "ARCANA": [
        535051,
        535071
      ],
      "BEYOND": [
        536071
      ]
    }
  },
  {
    "key": 6003007,
    "type": "Accessory",
    "tier": 3,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      },
      {
        "id": 111001,
        "name_en": "Obsidian Shard",
        "name_ja": "黒曜石の破片",
        "amount": 1,
        "icon": "/game/items/materials/Item_111001.png"
      },
      {
        "id": 111002,
        "name_en": "Coral Piece",
        "name_ja": "珊瑚の欠片",
        "amount": 1,
        "icon": "/game/items/materials/Item_111002.png"
      }
    ],
    "levelMin": 20,
    "levelMax": 30,
    "odds": {
      "UNCOMMON": 18.0,
      "RARE": 56.02,
      "LEGENDARY": 18.0,
      "IMMORTAL": 7.0,
      "ARCANA": 0.9,
      "BEYOND": 0.07
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601051,
        601071,
        611051,
        611071,
        621051,
        621071,
        631051,
        631071
      ],
      "RARE": [
        602051,
        602071,
        612051,
        612071,
        622051,
        622071,
        632051,
        632071
      ],
      "LEGENDARY": [
        603051,
        603071,
        613051,
        613071,
        623051,
        623071,
        633051,
        633071
      ],
      "IMMORTAL": [
        604051,
        604071,
        614051,
        614071,
        624051,
        624071,
        634051,
        634071
      ],
      "ARCANA": [
        605051,
        605071,
        615051,
        615071,
        625051,
        625071,
        635051,
        635071
      ],
      "BEYOND": [
        606071,
        616071,
        626071,
        636071
      ]
    }
  },
  {
    "key": 6004001,
    "type": "MainWeapon",
    "tier": 4,
    "materials": [
      {
        "id": 141002,
        "name_en": "Iron Ingot",
        "name_ja": "鉄のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141002.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301071,
        301091,
        311071,
        311091,
        321071,
        321091,
        331071,
        331091,
        341071,
        341091,
        351071,
        351091
      ],
      "RARE": [
        302071,
        302091,
        312071,
        312091,
        322071,
        322091,
        332071,
        332091,
        342071,
        342091,
        352071,
        352091
      ],
      "LEGENDARY": [
        303071,
        303091,
        313071,
        313091,
        323071,
        323091,
        333071,
        333091,
        343071,
        343091,
        353071,
        353091
      ],
      "IMMORTAL": [
        304071,
        304091,
        314071,
        314091,
        324071,
        324091,
        334071,
        334091,
        344071,
        344091,
        354071,
        354091
      ],
      "ARCANA": [
        305071,
        305091,
        315071,
        315091,
        325071,
        325091,
        335071,
        335091,
        345071,
        345091,
        355071,
        355091
      ],
      "BEYOND": [
        306071,
        306091,
        316071,
        316091,
        326071,
        326091,
        336071,
        336091,
        346071,
        346091,
        356071,
        356091
      ]
    }
  },
  {
    "key": 6004002,
    "type": "SubWeapon",
    "tier": 4,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      },
      {
        "id": 141002,
        "name_en": "Iron Ingot",
        "name_ja": "鉄のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141002.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401071,
        401091,
        411071,
        411091,
        421071,
        421091,
        431071,
        431091,
        441071,
        441091,
        451071,
        451091
      ],
      "RARE": [
        402071,
        402091,
        412071,
        412091,
        422071,
        422091,
        432071,
        432091,
        442071,
        442091,
        452071,
        452091
      ],
      "LEGENDARY": [
        403071,
        403091,
        413071,
        413091,
        423071,
        423091,
        433071,
        433091,
        443071,
        443091,
        453071,
        453091
      ],
      "IMMORTAL": [
        404071,
        404091,
        414071,
        414091,
        424071,
        424091,
        434071,
        434091,
        444071,
        444091,
        454071,
        454091
      ],
      "ARCANA": [
        405071,
        405091,
        415071,
        415091,
        425071,
        425091,
        435071,
        435091,
        445071,
        445091,
        455071,
        455091
      ],
      "BEYOND": [
        406071,
        406091,
        416071,
        416091,
        426071,
        426091,
        436071,
        436091,
        446071,
        446091,
        456071,
        456091
      ]
    }
  },
  {
    "key": 6004003,
    "type": "Helmet",
    "tier": 4,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501071,
        501091
      ],
      "RARE": [
        502071,
        502091
      ],
      "LEGENDARY": [
        503071,
        503091
      ],
      "IMMORTAL": [
        504071,
        504091
      ],
      "ARCANA": [
        505071,
        505091
      ],
      "BEYOND": [
        506071,
        506091
      ]
    }
  },
  {
    "key": 6004004,
    "type": "Armor",
    "tier": 4,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511071,
        511091
      ],
      "RARE": [
        512071,
        512091
      ],
      "LEGENDARY": [
        513071,
        513091
      ],
      "IMMORTAL": [
        514071,
        514091
      ],
      "ARCANA": [
        515071,
        515091
      ],
      "BEYOND": [
        516071,
        516091
      ]
    }
  },
  {
    "key": 6004005,
    "type": "Gloves",
    "tier": 4,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521071,
        521091
      ],
      "RARE": [
        522071,
        522091
      ],
      "LEGENDARY": [
        523071,
        523091
      ],
      "IMMORTAL": [
        524071,
        524091
      ],
      "ARCANA": [
        525071,
        525091
      ],
      "BEYOND": [
        526071,
        526091
      ]
    }
  },
  {
    "key": 6004006,
    "type": "Boots",
    "tier": 4,
    "materials": [
      {
        "id": 141001,
        "name_en": "Bronze Ingot",
        "name_ja": "ブロンズインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_141001.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531071,
        531091
      ],
      "RARE": [
        532071,
        532091
      ],
      "LEGENDARY": [
        533071,
        533091
      ],
      "IMMORTAL": [
        534071,
        534091
      ],
      "ARCANA": [
        535071,
        535091
      ],
      "BEYOND": [
        536071,
        536091
      ]
    }
  },
  {
    "key": 6004007,
    "type": "Accessory",
    "tier": 4,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      },
      {
        "id": 111003,
        "name_en": "Jade Stone",
        "name_ja": "翡翠石",
        "amount": 1,
        "icon": "/game/items/materials/Item_111003.png"
      },
      {
        "id": 111004,
        "name_en": "Amber Gem",
        "name_ja": "アンバージェム",
        "amount": 1,
        "icon": "/game/items/materials/Item_111004.png"
      }
    ],
    "levelMin": 30,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 11.0,
      "RARE": 55.0,
      "LEGENDARY": 23.0,
      "IMMORTAL": 9.0,
      "ARCANA": 1.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601071,
        601091,
        611071,
        611091,
        621071,
        621091,
        631071,
        631091
      ],
      "RARE": [
        602071,
        602091,
        612071,
        612091,
        622071,
        622091,
        632071,
        632091
      ],
      "LEGENDARY": [
        603071,
        603091,
        613071,
        613091,
        623071,
        623091,
        633071,
        633091
      ],
      "IMMORTAL": [
        604071,
        604091,
        614071,
        614091,
        624071,
        624091,
        634071,
        634091
      ],
      "ARCANA": [
        605071,
        605091,
        615071,
        615091,
        625071,
        625091,
        635071,
        635091
      ],
      "BEYOND": [
        606071,
        606091,
        616071,
        616091,
        626071,
        626091,
        636071,
        636091
      ]
    }
  },
  {
    "key": 6005001,
    "type": "MainWeapon",
    "tier": 5,
    "materials": [
      {
        "id": 142002,
        "name_en": "Gold Ingot",
        "name_ja": "金のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142002.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301091,
        311091,
        321091,
        331091,
        341091,
        351091
      ],
      "RARE": [
        302091,
        312091,
        322091,
        332091,
        342091,
        352091
      ],
      "LEGENDARY": [
        303091,
        313091,
        323091,
        333091,
        343091,
        353091
      ],
      "IMMORTAL": [
        304091,
        314091,
        324091,
        334091,
        344091,
        354091
      ],
      "ARCANA": [
        305091,
        315091,
        325091,
        335091,
        345091,
        355091
      ],
      "BEYOND": [
        306091,
        316091,
        326091,
        336091,
        346091,
        356091
      ]
    }
  },
  {
    "key": 6005002,
    "type": "SubWeapon",
    "tier": 5,
    "materials": [
      {
        "id": 142001,
        "name_en": "Silver Ingot",
        "name_ja": "銀のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142001.png"
      },
      {
        "id": 142002,
        "name_en": "Gold Ingot",
        "name_ja": "金のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142002.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401091,
        411091,
        421091,
        431091,
        441091,
        451091
      ],
      "RARE": [
        402091,
        412091,
        422091,
        432091,
        442091,
        452091
      ],
      "LEGENDARY": [
        403091,
        413091,
        423091,
        433091,
        443091,
        453091
      ],
      "IMMORTAL": [
        404091,
        414091,
        424091,
        434091,
        444091,
        454091
      ],
      "ARCANA": [
        405091,
        415091,
        425091,
        435091,
        445091,
        455091
      ],
      "BEYOND": [
        406091,
        416091,
        426091,
        436091,
        446091,
        456091
      ]
    }
  },
  {
    "key": 6005003,
    "type": "Helmet",
    "tier": 5,
    "materials": [
      {
        "id": 142001,
        "name_en": "Silver Ingot",
        "name_ja": "銀のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142001.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501091
      ],
      "RARE": [
        502091
      ],
      "LEGENDARY": [
        503091
      ],
      "IMMORTAL": [
        504091
      ],
      "ARCANA": [
        505091
      ],
      "BEYOND": [
        506091
      ]
    }
  },
  {
    "key": 6005004,
    "type": "Armor",
    "tier": 5,
    "materials": [
      {
        "id": 142001,
        "name_en": "Silver Ingot",
        "name_ja": "銀のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142001.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511091
      ],
      "RARE": [
        512091
      ],
      "LEGENDARY": [
        513091
      ],
      "IMMORTAL": [
        514091
      ],
      "ARCANA": [
        515091
      ],
      "BEYOND": [
        516091
      ]
    }
  },
  {
    "key": 6005005,
    "type": "Gloves",
    "tier": 5,
    "materials": [
      {
        "id": 142001,
        "name_en": "Silver Ingot",
        "name_ja": "銀のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142001.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521091
      ],
      "RARE": [
        522091
      ],
      "LEGENDARY": [
        523091
      ],
      "IMMORTAL": [
        524091
      ],
      "ARCANA": [
        525091
      ],
      "BEYOND": [
        526091
      ]
    }
  },
  {
    "key": 6005006,
    "type": "Boots",
    "tier": 5,
    "materials": [
      {
        "id": 142001,
        "name_en": "Silver Ingot",
        "name_ja": "銀のインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_142001.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.0,
      "IMMORTAL": 11.0,
      "ARCANA": 2.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531091
      ],
      "RARE": [
        532091
      ],
      "LEGENDARY": [
        533091
      ],
      "IMMORTAL": [
        534091
      ],
      "ARCANA": [
        535091
      ],
      "BEYOND": [
        536091
      ]
    }
  },
  {
    "key": 6005007,
    "type": "Accessory",
    "tier": 5,
    "materials": [
      {
        "id": 143002,
        "name_en": "Void Iron",
        "name_ja": "ヴォイドアイアン",
        "amount": 1,
        "icon": "/game/items/materials/Item_143002.png"
      },
      {
        "id": 112001,
        "name_en": "Ruby",
        "name_ja": "ルビー",
        "amount": 1,
        "icon": "/game/items/materials/Item_112001.png"
      },
      {
        "id": 112002,
        "name_en": "Sapphire",
        "name_ja": "サファイア",
        "amount": 1,
        "icon": "/game/items/materials/Item_112002.png"
      }
    ],
    "levelMin": 40,
    "levelMax": 40,
    "odds": {
      "UNCOMMON": 7.0,
      "RARE": 53.0,
      "LEGENDARY": 26.01,
      "IMMORTAL": 11.0,
      "ARCANA": 2.79,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601091,
        611091,
        621091,
        631091
      ],
      "RARE": [
        602091,
        612091,
        622091,
        632091
      ],
      "LEGENDARY": [
        603091,
        613091,
        623091,
        633091
      ],
      "IMMORTAL": [
        604091,
        614091,
        624091,
        634091
      ],
      "ARCANA": [
        605091,
        615091,
        625091,
        635091
      ],
      "BEYOND": [
        606091,
        616091,
        626091,
        636091
      ]
    }
  },
  {
    "key": 6006001,
    "type": "MainWeapon",
    "tier": 6,
    "materials": [
      {
        "id": 143002,
        "name_en": "Void Iron",
        "name_ja": "ヴォイドアイアン",
        "amount": 1,
        "icon": "/game/items/materials/Item_143002.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        301111,
        311111,
        321111,
        331111,
        341111,
        351111
      ],
      "RARE": [
        302111,
        302141,
        312111,
        312141,
        322111,
        322141,
        332111,
        332141,
        342111,
        342141,
        352111,
        352141
      ],
      "LEGENDARY": [
        303111,
        303141,
        313111,
        313141,
        323111,
        323141,
        333111,
        333141,
        343111,
        343141,
        353111,
        353141
      ],
      "IMMORTAL": [
        304111,
        304141,
        314111,
        314141,
        324111,
        324141,
        334111,
        334141,
        344111,
        344141,
        354111,
        354141
      ],
      "ARCANA": [
        305111,
        305141,
        315111,
        315141,
        325111,
        325141,
        335111,
        335141,
        345111,
        345141,
        355111,
        355141
      ],
      "BEYOND": [
        306111,
        306141,
        316111,
        316141,
        326111,
        326141,
        336111,
        336141,
        346111,
        346141,
        356111,
        356141
      ]
    }
  },
  {
    "key": 6006002,
    "type": "SubWeapon",
    "tier": 6,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      },
      {
        "id": 143002,
        "name_en": "Void Iron",
        "name_ja": "ヴォイドアイアン",
        "amount": 1,
        "icon": "/game/items/materials/Item_143002.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        401111,
        411111,
        421111,
        431111,
        441111,
        451111
      ],
      "RARE": [
        402111,
        402141,
        412111,
        412141,
        422111,
        422141,
        432111,
        432141,
        442111,
        442141,
        452111,
        452141
      ],
      "LEGENDARY": [
        403111,
        403141,
        413111,
        413141,
        423111,
        423141,
        433111,
        433141,
        443111,
        443141,
        453111,
        453141
      ],
      "IMMORTAL": [
        404111,
        404141,
        414111,
        414141,
        424111,
        424141,
        434111,
        434141,
        444111,
        444141,
        454111,
        454141
      ],
      "ARCANA": [
        405111,
        405141,
        415111,
        415141,
        425111,
        425141,
        435111,
        435141,
        445111,
        445141,
        455111,
        455141
      ],
      "BEYOND": [
        406111,
        406141,
        416111,
        416141,
        426111,
        426141,
        436111,
        436141,
        446111,
        446141,
        456111,
        456141
      ]
    }
  },
  {
    "key": 6006003,
    "type": "Helmet",
    "tier": 6,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        501111
      ],
      "RARE": [
        502111,
        502141
      ],
      "LEGENDARY": [
        503111,
        503141
      ],
      "IMMORTAL": [
        504111,
        504141
      ],
      "ARCANA": [
        505111,
        505141
      ],
      "BEYOND": [
        506111,
        506141
      ]
    }
  },
  {
    "key": 6006004,
    "type": "Armor",
    "tier": 6,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        511111
      ],
      "RARE": [
        512111,
        512141
      ],
      "LEGENDARY": [
        513111,
        513141
      ],
      "IMMORTAL": [
        514111,
        514141
      ],
      "ARCANA": [
        515111,
        515141
      ],
      "BEYOND": [
        516111,
        516141
      ]
    }
  },
  {
    "key": 6006005,
    "type": "Gloves",
    "tier": 6,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        521111
      ],
      "RARE": [
        522111,
        522141
      ],
      "LEGENDARY": [
        523111,
        523141
      ],
      "IMMORTAL": [
        524111,
        524141
      ],
      "ARCANA": [
        525111,
        525141
      ],
      "BEYOND": [
        526111,
        526141
      ]
    }
  },
  {
    "key": 6006006,
    "type": "Boots",
    "tier": 6,
    "materials": [
      {
        "id": 143001,
        "name_en": "Stardust Ingot",
        "name_ja": "スターダストインゴット",
        "amount": 1,
        "icon": "/game/items/materials/Item_143001.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        531111
      ],
      "RARE": [
        532111,
        532141
      ],
      "LEGENDARY": [
        533111,
        533141
      ],
      "IMMORTAL": [
        534111,
        534141
      ],
      "ARCANA": [
        535111,
        535141
      ],
      "BEYOND": [
        536111,
        536141
      ]
    }
  },
  {
    "key": 6006007,
    "type": "Accessory",
    "tier": 6,
    "materials": [
      {
        "id": 144002,
        "name_en": "Thunderstone",
        "name_ja": "サンダーストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144002.png"
      },
      {
        "id": 112003,
        "name_en": "Topaz",
        "name_ja": "トパーズ",
        "amount": 1,
        "icon": "/game/items/materials/Item_112003.png"
      },
      {
        "id": 112004,
        "name_en": "Emerald",
        "name_ja": "エメラルド",
        "amount": 1,
        "icon": "/game/items/materials/Item_112004.png"
      }
    ],
    "levelMin": 50,
    "levelMax": 65,
    "odds": {
      "UNCOMMON": 1.5,
      "RARE": 51.5,
      "LEGENDARY": 29.0,
      "IMMORTAL": 14.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "UNCOMMON": [
        601111,
        611111,
        621111,
        631111
      ],
      "RARE": [
        602111,
        602141,
        612111,
        612141,
        622111,
        622141,
        632111,
        632141
      ],
      "LEGENDARY": [
        603111,
        603141,
        613111,
        613141,
        623111,
        623141,
        633111,
        633141
      ],
      "IMMORTAL": [
        604111,
        604141,
        614111,
        614141,
        624111,
        624141,
        634111,
        634141
      ],
      "ARCANA": [
        605111,
        605141,
        615111,
        615141,
        625111,
        625141,
        635111,
        635141
      ],
      "BEYOND": [
        606111,
        606141,
        616111,
        616141,
        626111,
        626141,
        636111,
        636141
      ]
    }
  },
  {
    "key": 6007001,
    "type": "MainWeapon",
    "tier": 7,
    "materials": [
      {
        "id": 144002,
        "name_en": "Thunderstone",
        "name_ja": "サンダーストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144002.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        302141,
        302171,
        312141,
        312171,
        322141,
        322171,
        332141,
        332171,
        342141,
        342171,
        352141,
        352171
      ],
      "LEGENDARY": [
        303141,
        303171,
        313141,
        313171,
        323141,
        323171,
        333141,
        333171,
        343141,
        343171,
        353141,
        353171
      ],
      "IMMORTAL": [
        304141,
        304171,
        314141,
        314171,
        324141,
        324171,
        334141,
        334171,
        344141,
        344171,
        354141,
        354171
      ],
      "ARCANA": [
        305141,
        305171,
        315141,
        315171,
        325141,
        325171,
        335141,
        335171,
        345141,
        345171,
        355141,
        355171
      ],
      "BEYOND": [
        306141,
        306171,
        316141,
        316171,
        326141,
        326171,
        336141,
        336171,
        346141,
        346171,
        356141,
        356171
      ]
    }
  },
  {
    "key": 6007002,
    "type": "SubWeapon",
    "tier": 7,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      },
      {
        "id": 144002,
        "name_en": "Thunderstone",
        "name_ja": "サンダーストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144002.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        402141,
        402171,
        412141,
        412171,
        422141,
        422171,
        432141,
        432171,
        442141,
        442171,
        452141,
        452171
      ],
      "LEGENDARY": [
        403141,
        403171,
        413141,
        413171,
        423141,
        423171,
        433141,
        433171,
        443141,
        443171,
        453141,
        453171
      ],
      "IMMORTAL": [
        404141,
        404171,
        414141,
        414171,
        424141,
        424171,
        434141,
        434171,
        444141,
        444171,
        454141,
        454171
      ],
      "ARCANA": [
        405141,
        405171,
        415141,
        415171,
        425141,
        425171,
        435141,
        435171,
        445141,
        445171,
        455141,
        455171
      ],
      "BEYOND": [
        406141,
        406171,
        416141,
        416171,
        426141,
        426171,
        436141,
        436171,
        446141,
        446171,
        456141,
        456171
      ]
    }
  },
  {
    "key": 6007003,
    "type": "Helmet",
    "tier": 7,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        502141,
        502171
      ],
      "LEGENDARY": [
        503141,
        503171
      ],
      "IMMORTAL": [
        504141,
        504171
      ],
      "ARCANA": [
        505141,
        505171
      ],
      "BEYOND": [
        506141,
        506171
      ]
    }
  },
  {
    "key": 6007004,
    "type": "Armor",
    "tier": 7,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        512141,
        512171
      ],
      "LEGENDARY": [
        513141,
        513171
      ],
      "IMMORTAL": [
        514141,
        514171
      ],
      "ARCANA": [
        515141,
        515171
      ],
      "BEYOND": [
        516141,
        516171
      ]
    }
  },
  {
    "key": 6007005,
    "type": "Gloves",
    "tier": 7,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        522141,
        522171
      ],
      "LEGENDARY": [
        523141,
        523171
      ],
      "IMMORTAL": [
        524141,
        524171
      ],
      "ARCANA": [
        525141,
        525171
      ],
      "BEYOND": [
        526141,
        526171
      ]
    }
  },
  {
    "key": 6007006,
    "type": "Boots",
    "tier": 7,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        532141,
        532171
      ],
      "LEGENDARY": [
        533141,
        533171
      ],
      "IMMORTAL": [
        534141,
        534171
      ],
      "ARCANA": [
        535141,
        535171
      ],
      "BEYOND": [
        536141,
        536171
      ]
    }
  },
  {
    "key": 6007007,
    "type": "Accessory",
    "tier": 7,
    "materials": [
      {
        "id": 145002,
        "name_en": "Arcane Ore",
        "name_ja": "アーケイン鉱石",
        "amount": 1,
        "icon": "/game/items/materials/Item_145002.png"
      },
      {
        "id": 113001,
        "name_en": "Crystal Quartz",
        "name_ja": "クリスタルクォーツ",
        "amount": 1,
        "icon": "/game/items/materials/Item_113001.png"
      },
      {
        "id": 113002,
        "name_en": "Pearl",
        "name_ja": "真珠",
        "amount": 1,
        "icon": "/game/items/materials/Item_113002.png"
      }
    ],
    "levelMin": 65,
    "levelMax": 80,
    "odds": {
      "RARE": 49.5,
      "LEGENDARY": 30.0,
      "IMMORTAL": 16.5,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        602141,
        602171,
        612141,
        612171,
        622141,
        622171,
        632141,
        632171
      ],
      "LEGENDARY": [
        603141,
        603171,
        613141,
        613171,
        623141,
        623171,
        633141,
        633171
      ],
      "IMMORTAL": [
        604141,
        604171,
        614141,
        614171,
        624141,
        624171,
        634141,
        634171
      ],
      "ARCANA": [
        605141,
        605171,
        615141,
        615171,
        625141,
        625171,
        635141,
        635171
      ],
      "BEYOND": [
        606141,
        606171,
        616141,
        616171,
        626141,
        626171,
        636141,
        636171
      ]
    }
  },
  {
    "key": 6008001,
    "type": "MainWeapon",
    "tier": 8,
    "materials": [
      {
        "id": 145002,
        "name_en": "Arcane Ore",
        "name_ja": "アーケイン鉱石",
        "amount": 1,
        "icon": "/game/items/materials/Item_145002.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        302171,
        312171,
        322171,
        332171,
        342171,
        352171
      ],
      "LEGENDARY": [
        303171,
        313171,
        323171,
        333171,
        343171,
        353171
      ],
      "IMMORTAL": [
        304171,
        314171,
        324171,
        334171,
        344171,
        354171
      ],
      "ARCANA": [
        305171,
        315171,
        325171,
        335171,
        345171,
        355171
      ],
      "BEYOND": [
        306171,
        316171,
        326171,
        336171,
        346171,
        356171
      ]
    }
  },
  {
    "key": 6008002,
    "type": "SubWeapon",
    "tier": 8,
    "materials": [
      {
        "id": 145001,
        "name_en": "Chaos Shard",
        "name_ja": "カオスシャード",
        "amount": 1,
        "icon": "/game/items/materials/Item_145001.png"
      },
      {
        "id": 145002,
        "name_en": "Arcane Ore",
        "name_ja": "アーケイン鉱石",
        "amount": 1,
        "icon": "/game/items/materials/Item_145002.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        402171,
        412171,
        422171,
        432171,
        442171,
        452171
      ],
      "LEGENDARY": [
        403171,
        413171,
        423171,
        433171,
        443171,
        453171
      ],
      "IMMORTAL": [
        404171,
        414171,
        424171,
        434171,
        444171,
        454171
      ],
      "ARCANA": [
        405171,
        415171,
        425171,
        435171,
        445171,
        455171
      ],
      "BEYOND": [
        406171,
        416171,
        426171,
        436171,
        446171,
        456171
      ]
    }
  },
  {
    "key": 6008003,
    "type": "Helmet",
    "tier": 8,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        502171
      ],
      "LEGENDARY": [
        503171
      ],
      "IMMORTAL": [
        504171
      ],
      "ARCANA": [
        505171
      ],
      "BEYOND": [
        506171
      ]
    }
  },
  {
    "key": 6008004,
    "type": "Armor",
    "tier": 8,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        512171
      ],
      "LEGENDARY": [
        513171
      ],
      "IMMORTAL": [
        514171
      ],
      "ARCANA": [
        515171
      ],
      "BEYOND": [
        516171
      ]
    }
  },
  {
    "key": 6008005,
    "type": "Gloves",
    "tier": 8,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        522171
      ],
      "LEGENDARY": [
        523171
      ],
      "IMMORTAL": [
        524171
      ],
      "ARCANA": [
        525171
      ],
      "BEYOND": [
        526171
      ]
    }
  },
  {
    "key": 6008006,
    "type": "Boots",
    "tier": 8,
    "materials": [
      {
        "id": 144001,
        "name_en": "Bloodstone",
        "name_ja": "ブラッドストーン",
        "amount": 1,
        "icon": "/game/items/materials/Item_144001.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        532171
      ],
      "LEGENDARY": [
        533171
      ],
      "IMMORTAL": [
        534171
      ],
      "ARCANA": [
        535171
      ],
      "BEYOND": [
        536171
      ]
    }
  },
  {
    "key": 6008007,
    "type": "Accessory",
    "tier": 8,
    "materials": [
      {
        "id": 146002,
        "name_en": "Orichalcum Ore",
        "name_ja": "オリハルコン鉱石",
        "amount": 1,
        "icon": "/game/items/materials/Item_146002.png"
      },
      {
        "id": 113003,
        "name_en": "Turquoise",
        "name_ja": "ターコイズ",
        "amount": 1,
        "icon": "/game/items/materials/Item_113003.png"
      },
      {
        "id": 113004,
        "name_en": "Garnet",
        "name_ja": "ガーネット",
        "amount": 1,
        "icon": "/game/items/materials/Item_113004.png"
      }
    ],
    "levelMin": 80,
    "levelMax": 80,
    "odds": {
      "RARE": 48.0,
      "LEGENDARY": 30.0,
      "IMMORTAL": 18.0,
      "ARCANA": 3.8,
      "BEYOND": 0.2
    },
    "itemsByGrade": {
      "RARE": [
        602171,
        612171,
        622171,
        632171
      ],
      "LEGENDARY": [
        603171,
        613171,
        623171,
        633171
      ],
      "IMMORTAL": [
        604171,
        614171,
        624171,
        634171
      ],
      "ARCANA": [
        605171,
        615171,
        625171,
        635171
      ],
      "BEYOND": [
        606171,
        616171,
        626171,
        636171
      ]
    }
  }
];


let RECIPES = [];
let SUB_RECIPES = [];
let ARMOR_RECIPES = [];
let ACC_RECIPES = [];

function buildDynamicRecipes() {
  RECIPES = [];
  SUB_RECIPES = [];
  ARMOR_RECIPES = [];
  ACC_RECIPES = [];

  if (typeof globalItems === 'undefined' || !globalItems || globalItems.length === 0) {
    console.warn("globalItems is not loaded yet, recipes will be empty.");
    return;
  }

  // RAW_CRAFT_TEMPLATES からレシピを構築
  RAW_CRAFT_TEMPLATES.forEach(tmpl => {
    // odds を rarities 配列 [uncommon, rare, legendary, immortal, arcana, beyond] にマッピング
    const rarities = [
      tmpl.odds.UNCOMMON || 0,
      tmpl.odds.RARE || 0,
      tmpl.odds.LEGENDARY || 0,
      tmpl.odds.IMMORTAL || 0,
      tmpl.odds.ARCANA || 0,
      tmpl.odds.BEYOND || 0
    ];

    // itemsByGrade にある ID リストから、globalItems 内のアイテム名とレベルを取得して items 配列を構築
    const items = [];
    const itemMap = new Map();
    
    const grades = ['UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND'];
    grades.forEach(g => {
      const ids = tmpl.itemsByGrade[g] || [];
      ids.forEach(id => {
        const match = globalItems.find(it => it.key === id || it.ItemKey === id || it.id === id);
        if (match && match.name) {
          const name = match.name;
          const rKeyLower = g.toLowerCase();
          
          // 各レアリティのデフォルトフォールバック価格
          const defaultPrices = {
            uncommon: 0,
            rare: 0,
            legendary: 20,
            immortal: 80,
            arcana: 400,
            beyond: 2000
          };
          const defaultVal = defaultPrices[rKeyLower] || 0;

          if (!itemMap.has(name)) {
            const prices = {
              uncommon: 0,
              rare: 0,
              legendary: 0,
              immortal: 0,
              arcana: 0,
              beyond: 0
            };
            prices[rKeyLower] = defaultVal;

            const itemObj = {
              name: name,
              lv: match.level || match.Level || tmpl.levelMax || 1,
              prices: prices
            };
            itemMap.set(name, itemObj);
            items.push(itemObj);
          } else {
            const itemObj = itemMap.get(name);
            itemObj.prices[rKeyLower] = defaultVal;
          }
        }
      });
    });

    const matsJa = tmpl.materials.map(m => {
      return { name: m.name_ja || m.name_en, key: m.id, count: m.amount };
    });
    const matsEn = tmpl.materials.map(m => {
      return { name: m.name_en || m.name_ja, key: m.id, count: m.amount };
    });

    const matNameJa = tmpl.materials.map(m => m.name_ja || m.name_en).join(' + ');
    const matNameEn = tmpl.materials.map(m => m.name_en || m.name_ja).join(' + ');
    
    // 素材カラー設定
    let matColor = 'var(--text-sec)';
    if (tmpl.tier === 8) matColor = 'var(--arcana)';
    else if (tmpl.tier === 7) matColor = 'var(--immortal)';
    else if (tmpl.tier === 6) matColor = 'var(--legendary)';
    else if (tmpl.tier === 5) matColor = 'var(--rare)';
    else if (tmpl.tier === 4) matColor = 'var(--uncommon)';

    // 日本語・英語部位ラベル
    const typeLabelsJa = {
      'MainWeapon': 'メイン武器',
      'SubWeapon': 'サブ武器',
      'Helmet': 'ヘルメット',
      'Armor': '鎧',
      'Gloves': '手袋',
      'Boots': 'ブーツ',
      'Accessory': 'アクセサリー'
    };
    const typeLabelsEn = {
      'MainWeapon': 'Main Weapon',
      'SubWeapon': 'Sub Weapon',
      'Helmet': 'Helmet',
      'Armor': 'Armor',
      'Gloves': 'Gloves',
      'Boots': 'Boots',
      'Accessory': 'Accessory'
    };

    let lvlText = '';
    if (tmpl.levelMin !== undefined && tmpl.levelMax !== undefined) {
      if (tmpl.levelMin === tmpl.levelMax) {
        lvlText = `Lv.${tmpl.levelMin}`;
      } else {
        lvlText = `Lv.${tmpl.levelMin}~${tmpl.levelMax}`;
      }
    }

    const recipeNameJa = `${typeLabelsJa[tmpl.type] || tmpl.type} T${tmpl.tier} ${lvlText ? '(' + lvlText + ')' : ''}`;
    const recipeNameEn = `${typeLabelsEn[tmpl.type] || tmpl.type} T${tmpl.tier} ${lvlText ? '(' + lvlText + ')' : ''}`;

    const recipe = {
      name_ja: recipeNameJa,
      name_en: recipeNameEn,
      name: recipeNameJa, // 後方互換
      items: items,
      rarities: rarities,
      matNameJa: matNameJa,
      matNameEn: matNameEn,
      matName: matNameJa, // 後方互換
      matCost: 0,
      matColor: matColor,
      mats_ja: matsJa,
      mats_en: matsEn,
      mats: matsJa // 後方互換
    };

    if (tmpl.type === 'MainWeapon') {
      RECIPES.push(recipe);
    } else if (tmpl.type === 'SubWeapon') {
      SUB_RECIPES.push(recipe);
    } else if (tmpl.type === 'Accessory') {
      ACC_RECIPES.push(recipe);
    } else {
      ARMOR_RECIPES.push(recipe);
    }
  });

  // T8〜T1 の降順にソート
  const sortByTierDesc = (a, b) => {
    const nameA = a.name_ja || a.name;
    const nameB = b.name_ja || b.name;
    const aTier = parseInt(nameA.match(/T(\d+)/)[1]);
    const bTier = parseInt(nameB.match(/T(\d+)/)[1]);
    return bTier - aTier;
  };

  RECIPES.sort(sortByTierDesc);
  SUB_RECIPES.sort(sortByTierDesc);
  ACC_RECIPES.sort(sortByTierDesc);
  
  // 防具は部位別かつTier降順
  ARMOR_RECIPES.sort((a, b) => {
    const nameA = a.name_ja || a.name;
    const nameB = b.name_ja || b.name;
    const aParts = nameA.split(' ');
    const bParts = nameB.split(' ');
    const aType = aParts[0];
    const bType = bParts[0];
    const aTier = parseInt(aParts[1].replace('T', ''));
    const bTier = parseInt(bParts[1].replace('T', ''));
    
    const typeOrder = {
      '鎧': 1, 'ヘルメット': 2, '手袋': 3, 'ブーツ': 4,
      'Armor': 1, 'Helmet': 2, 'Gloves': 3, 'Boots': 4
    };
    const aOrder = typeOrder[aType] || 99;
    const bOrder = typeOrder[bType] || 99;
    
    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }
    return bTier - aTier;
  });
}


// クラフト用の動的価格取得ヘルパー
function getMarketPriceForCraft(itemName, rarityKey) {
  if (typeof globalItems === 'undefined' || !globalItems || globalItems.length === 0) return 0;
  const gradeUpper = rarityKey.toUpperCase();
  const item = globalItems.find(it => {
    return it.name && it.name.trim().toLowerCase() === itemName.trim().toLowerCase() && it.grade === gradeUpper;
  });
  if (!item) return 0;
  const mData = getMarketDataForItem(item);
  const price = getItemPriceByBasis(mData, item);
  return price !== null ? price : 0;
}

function getRecipeMaterialCost(recipe) {
  if (!recipe.mats || recipe.mats.length === 0) return recipe.matCost;
  if (typeof globalItems === 'undefined' || !globalItems || globalItems.length === 0) return recipe.matCost;
  let totalCost = 0;
  recipe.mats.forEach(m => {
    const item = globalItems.find(it => {
      if (m.key !== undefined) return it.key === m.key;
      return it.name && it.name.trim().toLowerCase() === m.name.trim().toLowerCase();
    });
    if (item) {
      const mData = getMarketDataForItem(item);
      const price = getItemPriceByBasis(mData, item);
      if (price !== null) {
        totalCost += price * m.count;
      }
    }
  });
  return totalCost > 0 ? totalCost : recipe.matCost;
}

/* ──────────────────────────────────────────────
   STATE
────────────────────────────────────────────── */
let cur = 0;       // current recipe index for main weapon
let N   = 10;      // sim count
let custom = {};   // custom prices { 'category_recipeIdx': { 'itemName_rarity': price } }
let chart  = null;
let activeCat = 'main';  // current category
let subCur   = 0;
let armorCur = 0;
let accCur   = 0;

// 新しい状態変数 (Wikiデータ統合用)
let activeMainTab = 'craft';
let globalItems = [];
let globalOfferingLoot = null;
let globalMeta = {
  grades: [],
  classes: [],
  gearTypes: [],
  parts: [],
  types: [],
  gearLevels: []
};

let updateTimerIntervalId = null;
let updateTimerFn = null;
function initUpdateTimer() {
  if (updateTimerFn) {
    updateTimerFn(); // すでに初期化されていれば即座に再描画するだけ
    return;
  }

  const container = document.getElementById('updateTimerContainer');
  const icon = document.getElementById('timerIcon');
  const text = document.getElementById('timerText');
  if (!container || !icon || !text) return;

  // 1. 前回の更新日時 (JST) を取得する
  let lastUpdateMs = 0;
  if (window.DEFAULT_MARKET_DATA && window.DEFAULT_MARKET_DATA.length > 0) {
    // 最初のアイテムの updated_at を使用する (Unix秒 -> ミリ秒)
    lastUpdateMs = window.DEFAULT_MARKET_DATA[0].updated_at * 1000;
  }

  function getJstTime(date = new Date()) {
    // UTCミリ秒 + 9時間
    const utcMs = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utcMs + (9 * 3600000));
  }

  updateTimerFn = function() {
    const now = new Date();
    const jstNow = getJstTime(now);

    // 今日の日本時間 0:00:00 (JST)
    const jstToday0 = new Date(jstNow);
    jstToday0.setHours(0, 0, 0, 0);

    // 明日の日本時間 0:00:00 (JST)
    const jstTomorrow0 = new Date(jstToday0);
    jstTomorrow0.setDate(jstTomorrow0.getDate() + 1);

    // 前回のデータ更新日時を日本時間に変換
    const lastUpdateJst = lastUpdateMs > 0 ? getJstTime(new Date(lastUpdateMs)) : new Date(0);
    
    // 最終更新からの経過時間（時間）
    const diffHours = (jstNow.getTime() - lastUpdateJst.getTime()) / 3600000;

    let statusText = "countdown";
    let targetTime = jstToday0;

    // 1. 毎日 0:00 〜 0:30 の30分間だけを「収集時間中」とする
    const currentHour = jstNow.getHours();
    const currentMin = jstNow.getMinutes();
    const isUpdateWindow = (currentHour === 0 && currentMin >= 0 && currentMin < 30);

    if (isUpdateWindow) {
      statusText = "collecting";
    }
    // 2. 最終更新から28時間以上経過している場合は「遅延」とする
    else if (diffHours >= 28) {
      statusText = "delayed";
    }
    // 3. それ以外は正常カウントダウン
    else {
      statusText = "countdown";
      targetTime = (jstNow >= jstToday0) ? jstTomorrow0 : jstToday0;
    }

    // 多言語対応のテキスト取得
    const isJa = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'ja';

    if (statusText === 'collecting') {
      container.classList.add('collecting');
      container.classList.remove('delayed');
      icon.textContent = "🔄";
      text.textContent = isJa ? I18N.ja.timer_collecting : I18N.en.timer_collecting;
    } else if (statusText === 'delayed') {
      container.classList.remove('collecting');
      container.classList.add('delayed');
      icon.textContent = "⚠️";
      
      const daysAgo = Math.max(1, Math.floor(diffHours / 24));
      const rawText = isJa ? I18N.ja.timer_delayed : I18N.en.timer_delayed;
      text.textContent = rawText.replace('{days}', daysAgo);
    } else {
      container.classList.remove('collecting');
      container.classList.remove('delayed');
      icon.textContent = "🕒";

      // カウントダウン差分 (秒)
      const diffMs = Math.max(0, targetTime.getTime() - jstNow.getTime());
      const diffSec = Math.floor(diffMs / 1000);

      const hours = Math.floor(diffSec / 3600);
      const minutes = Math.floor((diffSec % 3600) / 60);
      const seconds = diffSec % 60;

      const timeStr = [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0')
      ].join(':');

      const label = isJa ? I18N.ja.timer_next : I18N.en.timer_next;
      text.textContent = label + timeStr;
    }
  };

  // 初回実行と毎秒のタイマー起動
  updateTimerFn();
  updateTimerIntervalId = setInterval(updateTimerFn, 1000);
}

/* ──────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────── */
let globalEffects = [];
let globalChests = [];
let globalHeroes = [];
let globalRunes = [];
let heroSkillPoints = {};
let currentHeroLevel = 30;
let activeHeroKey = null;
let activeSkillNodeKey = null;

// 装備ビルドシミュレーター用
let heroEquip = {}; // { heroKey: { partName: itemObj } }
let heroSockets = {}; // { heroKey: { partName: [materialObj, materialObj, ...] } }
let heroActiveSkills = {}; // { heroKey: [skillNodeObj, skillNodeObj] }
let applyRuneMax = true;

function saveBuildData() {
  try {
    // 装備のキーのみ保存
    const equipKeys = {};
    for (const heroKey in heroEquip) {
      equipKeys[heroKey] = {};
      for (const part in heroEquip[heroKey]) {
        const item = heroEquip[heroKey][part];
        if (item) equipKeys[heroKey][part] = item.key;
      }
    }

    // ソケットルーンのキーのみ保存
    const socketKeys = {};
    for (const heroKey in heroSockets) {
      socketKeys[heroKey] = {};
      for (const part in heroSockets[heroKey]) {
        const list = heroSockets[heroKey][part];
        if (list) {
          socketKeys[heroKey][part] = list.map(socket => {
            if (!socket) return null;
            return {
              key: socket.key,
              selectedGroupIndex: socket.groups && socket.selectedGroup 
                ? socket.groups.findIndex(g => g.stat === socket.selectedGroup.stat && g.disp === socket.selectedGroup.disp)
                : -1
            };
          });
        }
      }
    }

    // アクティブスキルノードのキーのみ保存
    const activeSkillKeys = {};
    for (const heroKey in heroActiveSkills) {
      const skills = heroActiveSkills[heroKey];
      if (skills) {
        activeSkillKeys[heroKey] = skills.map(skill => skill ? skill.key : null);
      }
    }

    const data = {
      activeHeroKey: activeHeroKey,
      currentHeroLevel: currentHeroLevel,
      heroEquipKeys: equipKeys,
      heroSocketKeys: socketKeys,
      heroSkillPoints: heroSkillPoints,
      heroActiveSkillKeys: activeSkillKeys
    };
    localStorage.setItem('tbh_simulator_build_data', JSON.stringify(data));
    console.log("Build data saved successfully:", data);
  } catch (e) {
    console.error("Failed to save build data to localStorage:", e);
  }
}

function loadBuildData() {
  try {
    const saved = localStorage.getItem('tbh_simulator_build_data');
    if (!saved) {
      console.log("No saved build data found in localStorage.");
      return;
    }
    const data = JSON.parse(saved);
    console.log("Loading saved build data:", data);
    
    if (data.currentHeroLevel) currentHeroLevel = data.currentHeroLevel;
    if (data.activeHeroKey) activeHeroKey = data.activeHeroKey;
    if (data.heroSkillPoints) heroSkillPoints = data.heroSkillPoints;

    // 装備の復元
    if (data.heroEquipKeys && typeof globalItems !== 'undefined' && globalItems.length > 0) {
      heroEquip = {};
      for (const heroKey in data.heroEquipKeys) {
        heroEquip[heroKey] = {};
        for (const part in data.heroEquipKeys[heroKey]) {
          const itemKey = data.heroEquipKeys[heroKey][part];
          if (itemKey) {
            const foundItem = globalItems.find(it => it.key === itemKey);
            if (foundItem) heroEquip[heroKey][part] = foundItem;
          }
        }
      }
    }

    // ソケットの復元
    if (data.heroSocketKeys && typeof globalEffects !== 'undefined' && globalEffects.length > 0) {
      heroSockets = {};
      for (const heroKey in data.heroSocketKeys) {
        heroSockets[heroKey] = {};
        for (const part in data.heroSocketKeys[heroKey]) {
          const list = data.heroSocketKeys[heroKey][part];
          if (list) {
            heroSockets[heroKey][part] = list.map(socketInfo => {
              if (!socketInfo) return null;
              const foundEffect = globalEffects.find(eff => eff.key === socketInfo.key);
              if (!foundEffect) return null;
              
              let selectedG = null;
              if (foundEffect.groups) {
                if (socketInfo.selectedGroupIndex !== undefined && socketInfo.selectedGroupIndex >= 0) {
                  selectedG = foundEffect.groups[socketInfo.selectedGroupIndex];
                }
                if (!selectedG) selectedG = foundEffect.groups[0];
              }
              
              return {
                key: foundEffect.key,
                name: foundEffect.name,
                icon: foundEffect.icon,
                grade: foundEffect.grade,
                category: foundEffect.category,
                groups: foundEffect.groups,
                selectedGroup: selectedG
              };
            });
          }
        }
      }
    }

    // アクティブスキルの復元
    if (data.heroActiveSkillKeys && typeof globalHeroes !== 'undefined' && globalHeroes.length > 0) {
      heroActiveSkills = {};
      for (const heroKey in data.heroActiveSkillKeys) {
        const keysList = data.heroActiveSkillKeys[heroKey];
        if (keysList) {
          const hero = globalHeroes.find(h => h.key === heroKey);
          if (hero && hero.tree) {
            const findSkillNode = (k) => {
              if (!k) return null;
              for (const tier of hero.tree) {
                for (const node of tier.nodes) {
                  if (node.key === k) return node;
                }
              }
              return null;
            };
            heroActiveSkills[heroKey] = keysList.map(k => findSkillNode(k));
          } else {
            heroActiveSkills[heroKey] = [null, null];
          }
        }
      }
    }
    console.log("Build data loaded successfully. heroEquip:", heroEquip);
  } catch (e) {
    console.error("Failed to load build data from localStorage:", e);
  }
}
let activeBuildSubTab = 'skill'; // 'skill' または 'build'
let currentEquipSelectSlot = null;
let currentSocketSelectSlot = null;
let currentActiveSkillSelectIdx = null;
let activeEquipDetailPart = null;
let marketItemsMap = {};

// 宝箱シミュ用
let chestsChart = null;
let activeChest = null;
let activeChestVariantIdx = 0;
let chestSimN = 10;
let currentChestSimCounts = null;

// フィルター用
let effectFilters = { query: '', slot: 'ALL', cat: 'ALL', selectedStats: [], disabledStats: new Set() };
let itemFilters = { query: '', type: 'ALL', grades: new Set(), classes: new Set(), levelMin: 1, levelMax: 100, selectedStats: [], disabledStats: new Set(), gearTypes: new Set() };
let itemCurPage = 0;

// お気に入り
let favoriteItems = new Set();
try {
  const saved = localStorage.getItem('tbh_favorite_items');
  if (saved) {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      favoriteItems = new Set(parsed.map(item => String(item)));
    }
  }
} catch (e) {
  console.error("Failed to load favorite items", e);
}

// 詳細モーダルのグラフインスタンス
let modalChartInstance = null;
let currentHistoryItem = null;
let itemHistoryCache = {};
const itemPageSize = 50;

const partIcons = {
  'MAIN_WEAPON': 'SWORD_300001',
  'SUB_WEAPON': 'SHIELD_400001',
  'HELMET': 'HELMET_500001',
  'ARMOR': 'ARMOR_510001',
  'GLOVES': 'GLOVES_520001',
  'BOOTS': 'BOOTS_530001',
  'AMULET': 'AMULET_600001',
  'EARING': 'EARING_610001',
  'RING': 'RING_620001',
  'BRACER': 'BRACER_630001'
};

function getPartHtml(part) {
  if (!part) return '';
  const icon = partIcons[part];
  if (icon) {
    let dispName = part;
    if (part === 'MAIN_WEAPON') dispName = 'Main Weapon';
    else if (part === 'SUB_WEAPON') dispName = 'Sub Weapon';
    else {
      dispName = part.charAt(0) + part.slice(1).toLowerCase();
    }
    return `
      <div style="display:flex; align-items:center; gap:6px;">
        <img src="data/icon_cache/${icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${icon}.png';}else{this.style.display='none';}" style="width:16px; height:16px; object-fit:contain; image-rendering:pixelated; border-radius:3px; background:var(--bg-secondary); border:1px solid var(--border);" />
        <span>${dispName}</span>
      </div>
    `;
  }
  return part;
}

function getGradeColor(grade) {
  const gUpper = grade.toUpperCase();
  const rarityObj = RARITIES.find(r => r.name.toUpperCase() === gUpper);
  if (rarityObj) return rarityObj.color;
  if (gUpper === 'COMMON') return '#7a85a8';
  if (gUpper === 'CELESTIAL') return '#00ffcc';
  if (gUpper === 'DIVINE') return '#ffbb00';
  if (gUpper === 'COSMIC') return '#ff00ff';
  return '#dde3f5';
}

function switchMainTab(tab) {
  activeMainTab = tab;
  const tabs = ['craft', 'farm', 'chests', 'items', 'effects', 'heroes', 'offering', 'synthesis', 'map'];
  tabs.forEach(t => {
    const btn = document.getElementById('tab-btn-' + t);
    const panel = document.getElementById('tab-panel-' + t);
    if (btn) btn.classList.toggle('active', t === tab);
    if (panel) panel.style.display = t === tab ? 'block' : 'none';
  });
  
  if (tab === 'craft' && chart) {
    chart.resize();
    chart.update();
  } else if (tab === 'chests' && chestsChart) {
    chestsChart.resize();
    chestsChart.update();
  } else if (tab === 'offering') {
    initOfferingGacha();
  } else if (tab === 'synthesis') {
    initSynthesisSim();
  } else if (tab === 'map') {
    initMapFarmingTab();
  }
}

function switchSynthMode(mode) {
  const bulkCard = document.getElementById('synth-card-bulk');
  const multiCard = document.getElementById('synth-card-multi');
  const btnBulk = document.getElementById('synth-btn-bulk');
  const btnMulti = document.getElementById('synth-btn-multi');
  
  if (mode === 'bulk') {
    if (bulkCard) bulkCard.style.display = 'flex';
    if (multiCard) multiCard.style.display = 'none';
    if (btnBulk) btnBulk.classList.add('active');
    if (btnMulti) btnMulti.classList.remove('active');
  } else {
    if (bulkCard) bulkCard.style.display = 'none';
    if (multiCard) multiCard.style.display = 'flex';
    if (btnBulk) btnBulk.classList.remove('active');
    if (btnMulti) btnMulti.classList.add('active');
    updateMultiSynthOddsDisplay();
  }
}

/* ── Wiki Data Integration JS ── */

// ── ITEMS DB ──
let filteredItems = [];

function initItemsDb() {
  const gradeContainer = document.getElementById('itemGradeFilter');
  gradeContainer.innerHTML = '';
  const allGradeBtn = document.createElement('button');
  allGradeBtn.className = 'filter-chip active';
  allGradeBtn.textContent = 'All';
  allGradeBtn.setAttribute('data-filter-key', 'ALL');
  allGradeBtn.onclick = () => toggleItemGradeFilter('ALL', allGradeBtn);
  gradeContainer.appendChild(allGradeBtn);
  
  if (globalMeta.grades) {
    globalMeta.grades.forEach(g => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip';
      const color = getGradeColor(g);
      btn.innerHTML = `<span style="color:${color}; margin-right:4px;">■</span>${g}`;
      btn.setAttribute('data-filter-key', g);
      btn.setAttribute('data-filter-color', color);
      btn.onclick = () => toggleItemGradeFilter(g, btn);
      gradeContainer.appendChild(btn);
    });
  }

  const classContainer = document.getElementById('itemClassFilter');
  classContainer.innerHTML = '';
  const allClassBtn = document.createElement('button');
  allClassBtn.className = 'filter-chip active';
  allClassBtn.textContent = 'All';
  allClassBtn.setAttribute('data-filter-key', 'ALL');
  allClassBtn.onclick = () => toggleItemClassFilter('ALL', allClassBtn);
  classContainer.appendChild(allClassBtn);

  if (globalMeta.classes) {
    globalMeta.classes.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip';
      btn.textContent = c;
      btn.setAttribute('data-filter-key', c);
      btn.onclick = () => toggleItemClassFilter(c, btn);
      classContainer.appendChild(btn);
    });
  }

  const categories = ['WEAPON', 'ARMOR', 'ACCESSORY'];
  categories.forEach(cat => {
    const container = document.getElementById('itemGearTypeFilter-' + cat);
    if (container) {
      container.innerHTML = '';
      
      // All ボタン
      const allBtn = document.createElement('button');
      allBtn.className = 'filter-chip active';
      allBtn.textContent = 'All';
      allBtn.setAttribute('data-filter-key', 'ALL');
      allBtn.onclick = () => toggleItemGearTypeFilter(cat, 'ALL', allBtn);
      container.appendChild(allBtn);
      
      // 個別部位ボタン
      const types = GEAR_CATEGORIES[cat];
      types.forEach(gt => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip';
        btn.textContent = gt === 'EARING' ? 'Earring' : (gt.charAt(0) + gt.slice(1).toLowerCase());
        btn.setAttribute('data-filter-key', gt);
        btn.onclick = () => toggleItemGearTypeFilter(cat, gt, btn);
        container.appendChild(btn);
      });
    }
  });

  if (typeof translateFilterChips === 'function') {
    translateFilterChips();
  }

  const statsSet = new Set();
  globalItems.forEach(item => {
    if (item.stats) {
      if (item.stats.base) {
        item.stats.base.forEach(s => statsSet.add(s.stat));
      }
      if (item.stats.inherent) {
        item.stats.inherent.forEach(s => statsSet.add(s.stat));
      }
    }
    if (item.uniqueMod && item.uniqueMod !== '0' && item.uniqueMod !== 0 && item.uniqueMod !== 'null' && item.uniqueMod !== 'undefined') {
      statsSet.add(item.uniqueMod);
    }
  });
  
  const uniqueModsSet = new Set();
  globalItems.forEach(item => {
    if (item.uniqueMod && item.uniqueMod !== '0' && item.uniqueMod !== 0 && item.uniqueMod !== 'null' && item.uniqueMod !== 'undefined') {
      uniqueModsSet.add(item.uniqueMod);
    }
  });

  const normalStats = [];
  const uniqueStats = [];
  statsSet.forEach(stat => {
    if (uniqueModsSet.has(stat)) {
      uniqueStats.push(stat);
    } else {
      normalStats.push(stat);
    }
  });
  
  normalStats.sort();
  uniqueStats.sort();
  
  const sortedStats = normalStats.concat(uniqueStats);
  
  const selectEl = document.getElementById('itemStatAddSelect');
  if (selectEl) {
    selectEl.innerHTML = '<option value="">+ ステータス情報を追加...</option>';
    
    const normalGroup = document.createElement('optgroup');
    normalGroup.label = '一般ステータス';
    normalGroup.style.color = 'var(--text-sec)';
    
    const uniqueGroup = document.createElement('optgroup');
    uniqueGroup.label = '特殊スキル・固有効果 (✨)';
    uniqueGroup.style.color = 'var(--legendary)';
    uniqueGroup.style.fontWeight = 'bold';

    normalStats.forEach(stat => {
      const option = document.createElement('option');
      option.value = stat;
      option.textContent = formatStatName(stat);
      option.style.color = 'var(--text-pri)';
      normalGroup.appendChild(option);
    });

    uniqueStats.forEach(stat => {
      const option = document.createElement('option');
      option.value = stat;
      option.textContent = '✨ ' + formatStatName(stat);
      option.style.color = 'var(--legendary)';
      option.style.fontWeight = 'bold';
      uniqueGroup.appendChild(option);
    });

    if (normalStats.length > 0) selectEl.appendChild(normalGroup);
    if (uniqueStats.length > 0) selectEl.appendChild(uniqueGroup);
  }
  
  itemFilters.selectedStats = [];
  itemFilters.disabledStats = new Set();
  renderItemStatChips();

  const lvMin = (globalMeta.gearLevels && globalMeta.gearLevels.length > 0) ? Math.min(...globalMeta.gearLevels) : 1;
  const lvMax = (globalMeta.gearLevels && globalMeta.gearLevels.length > 0) ? Math.max(...globalMeta.gearLevels) : 100;
  
  const lvMinSlider = document.getElementById('itemLevelMin');
  const lvMaxSlider = document.getElementById('itemLevelMax');
  
  if (lvMinSlider && lvMaxSlider) {
    lvMinSlider.min = lvMin;
    lvMinSlider.max = lvMax;
    lvMinSlider.value = lvMin;
    lvMaxSlider.min = lvMin;
    lvMaxSlider.max = lvMax;
    lvMaxSlider.value = lvMax;
  }
  
  updateItemLevelRange();
}

function addItemStatFilter() {
  const selectEl = document.getElementById('itemStatAddSelect');
  if (!selectEl) return;
  
  const selectedStat = selectEl.value;
  if (!selectedStat) return;
  
  if (!itemFilters.selectedStats.includes(selectedStat)) {
    itemFilters.selectedStats.push(selectedStat);
    renderItemStatChips();
    filterItems();
  }
  selectEl.value = '';
}

function renderItemStatChips() {
  const container = document.getElementById('itemSelectedStatsContainer');
  if (!container) return;
  
  const tipEl = document.getElementById('itemStatFilterTip');
  if (tipEl) {
    tipEl.style.display = itemFilters.selectedStats.length > 0 ? 'block' : 'none';
  }
  
  container.innerHTML = '';
  itemFilters.selectedStats.forEach(stat => {
    const isDisabled = itemFilters.disabledStats.has(stat);
    const chip = document.createElement('div');
    chip.style.display = 'inline-flex';
    chip.style.alignItems = 'center';
    chip.style.gap = '6px';
    chip.style.padding = '4px 10px';
    chip.style.borderRadius = '100px';
    chip.style.fontSize = '12px';
    chip.style.fontFamily = "'Rajdhani', sans-serif";
    chip.style.fontWeight = '600';
    chip.style.transition = 'all 0.2s';
    
    if (isDisabled) {
      chip.style.background = 'rgba(255, 255, 255, 0.04)';
      chip.style.border = '1px solid rgba(255, 255, 255, 0.12)';
      chip.style.color = 'var(--text-sec)';
      chip.style.opacity = '0.5';
    } else {
      chip.style.background = 'rgba(245, 166, 35, 0.1)';
      chip.style.border = '1px solid rgba(245, 166, 35, 0.3)';
      chip.style.color = '#f5a623';
      chip.style.opacity = '1';
    }
    
    const label = document.createElement('span');
    label.textContent = formatStatName(stat);
    label.style.cursor = 'pointer';
    label.onclick = () => toggleItemStatActive(stat);
    chip.appendChild(label);
    
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '10px';
    closeBtn.style.marginLeft = '4px';
    closeBtn.style.opacity = '0.7';
    closeBtn.style.transition = 'opacity 0.2s';
    closeBtn.onmouseenter = () => { closeBtn.style.opacity = '1'; };
    closeBtn.onmouseleave = () => { closeBtn.style.opacity = '0.7'; };
    closeBtn.onclick = () => {
      removeItemStatFilter(stat);
    };
    chip.appendChild(closeBtn);
    
    container.appendChild(chip);
  });
}

function toggleItemStatActive(stat) {
  if (itemFilters.disabledStats.has(stat)) {
    itemFilters.disabledStats.delete(stat);
  } else {
    itemFilters.disabledStats.add(stat);
  }
  renderItemStatChips();
  filterItems();
}

function removeItemStatFilter(stat) {
  itemFilters.selectedStats = itemFilters.selectedStats.filter(s => s !== stat);
  itemFilters.disabledStats.delete(stat);
  renderItemStatChips();
  filterItems();
}

function updateItemLevelRange() {
  const lvMinSlider = document.getElementById('itemLevelMin');
  const lvMaxSlider = document.getElementById('itemLevelMax');
  if (!lvMinSlider || !lvMaxSlider) return;

  const minVal = parseInt(lvMinSlider.value);
  const maxVal = parseInt(lvMaxSlider.value);
  
  if (minVal > maxVal) {
    lvMinSlider.value = maxVal;
    document.getElementById('itemLevelMinVal').textContent = maxVal;
    itemFilters.levelMin = maxVal;
  } else {
    document.getElementById('itemLevelMinVal').textContent = minVal;
    itemFilters.levelMin = minVal;
  }
  
  document.getElementById('itemLevelMaxVal').textContent = maxVal;
  itemFilters.levelMax = maxVal;
  
  filterItems();
}

function toggleItemGradeFilter(grade, btn) {
  if (grade === 'ALL') {
    itemFilters.grades.clear();
    const siblings = btn.parentNode.children;
    for (let sib of siblings) sib.classList.remove('active');
    btn.classList.add('active');
  } else {
    btn.parentNode.children[0].classList.remove('active');
    if (itemFilters.grades.has(grade)) {
      itemFilters.grades.delete(grade);
      btn.classList.remove('active');
    } else {
      itemFilters.grades.add(grade);
      btn.classList.add('active');
    }
    if (itemFilters.grades.size === 0) {
      btn.parentNode.children[0].classList.add('active');
    }
  }
  filterItems();
}

function toggleItemClassFilter(cls, btn) {
  if (cls === 'ALL') {
    itemFilters.classes.clear();
    const siblings = btn.parentNode.children;
    for (let sib of siblings) sib.classList.remove('active');
    btn.classList.add('active');
  } else {
    btn.parentNode.children[0].classList.remove('active');
    if (itemFilters.classes.has(cls)) {
      itemFilters.classes.delete(cls);
      btn.classList.remove('active');
    } else {
      itemFilters.classes.add(cls);
      btn.classList.add('active');
    }
    if (itemFilters.classes.size === 0) {
      btn.parentNode.children[0].classList.add('active');
    }
  }
  filterItems();
}

function filterItems() {
  const searchInput = document.getElementById('itemSearchInput');
  const typeFilter = document.getElementById('itemTypeFilter');
  if (!searchInput || !typeFilter) return;

  const query = searchInput.value.toLowerCase().trim();
  const type = typeFilter.value;
  const activeStats = itemFilters.selectedStats.filter(stat => !itemFilters.disabledStats.has(stat));
  
  const tradableFilter = document.getElementById('itemTradableFilter');
  const onlyTradable = tradableFilter ? tradableFilter.checked : false;
  const obtainableFilter = document.getElementById('itemObtainableFilter');
  const onlyObtainable = obtainableFilter ? obtainableFilter.checked : false;
  const favoriteFilter = document.getElementById('itemFavoriteFilter');
  const onlyFavorite = favoriteFilter ? favoriteFilter.checked : false;
  const sortFilter = document.getElementById('itemSortFilter');
  const sortVal = sortFilter ? sortFilter.value : 'default';
  
  const gearGroupEl = document.getElementById('itemGearTypeFilterGroup');
  if (gearGroupEl) {
    if (type === 'ALL' || type === 'GEAR') {
      gearGroupEl.style.display = 'flex';
    } else {
      gearGroupEl.style.display = 'none';
      itemFilters.gearTypes.clear();
      const categories = ['WEAPON', 'ARMOR', 'ACCESSORY'];
      categories.forEach(cat => {
        const container = document.getElementById('itemGearTypeFilter-' + cat);
        if (container) {
          const chips = container.children;
          for (let i = 0; i < chips.length; i++) {
            if (i === 0) chips[i].classList.add('active');
            else chips[i].classList.remove('active');
          }
        }
      });
    }
  }
  
  filteredItems = globalItems.filter(item => {
    if (query) {
      const nameMatch = item.name && item.name.toLowerCase().includes(query);
      const keyMatch = item.key && String(item.key).includes(query);
      if (!nameMatch && !keyMatch) return false;
    }
    
    if (type !== 'ALL') {
      if (type === 'GEAR' && item.type !== 'GEAR') return false;
      if (type === 'MATERIAL' && item.type !== 'MATERIAL') return false;
      if (type === 'STAGEBOX' && item.type !== 'STAGEBOX') return false;
    }
    
    if (itemFilters.grades.size > 0 && !itemFilters.grades.has(item.grade)) {
      return false;
    }
    
    if (itemFilters.classes.size > 0) {
      if (item.type !== 'GEAR') return false;
      const match = item.classes && item.classes.some(c => itemFilters.classes.has(c));
      if (!match) return false;
    }
    
    if (itemFilters.gearTypes.size > 0) {
      if (item.type !== 'GEAR') return false;
      if (!itemFilters.gearTypes.has(item.gearType)) return false;
    }
    
    if (item.type === 'GEAR') {
      const lv = item.level || 0;
      if (lv < itemFilters.levelMin || lv > itemFilters.levelMax) {
        return false;
      }
    }
    
    if (activeStats && activeStats.length > 0) {
      const hasAllStats = activeStats.every(selStat => {
        const hasBase = item.stats && item.stats.base && item.stats.base.some(s => s.stat === selStat);
        const hasInherent = item.stats && item.stats.inherent && item.stats.inherent.some(s => s.stat === selStat);
        const hasUnique = item.uniqueMod === selStat;
        return hasBase || hasInherent || hasUnique;
      });
      if (!hasAllStats) return false;
    }
    
    if (onlyTradable) {
      const mData = getMarketDataForItem(item);
      if (!mData || mData.sell_price === undefined) return false;
    }
    
    if (onlyObtainable) {
      if (item.obtainable === false) return false;
    }
    
    if (onlyFavorite) {
      if (!favoriteItems.has(String(item.key))) return false;
    }
    
    return true;
  });
  
  if (sortVal === 'price_asc') {
    filteredItems.sort((a, b) => {
      const mDecA = getMarketDataForItem(a);
      const mDecB = getMarketDataForItem(b);
      const pA = (mDecA && mDecA.sell_price !== undefined) ? mDecA.sell_price : Infinity;
      const pB = (mDecB && mDecB.sell_price !== undefined) ? mDecB.sell_price : Infinity;
      if (pA === pB) return (a.key || 0) - (b.key || 0);
      return pA - pB;
    });
  } else if (sortVal === 'price_desc') {
    filteredItems.sort((a, b) => {
      const mDecA = getMarketDataForItem(a);
      const mDecB = getMarketDataForItem(b);
      const pA = (mDecA && mDecA.sell_price !== undefined) ? mDecA.sell_price : -Infinity;
      const pB = (mDecB && mDecB.sell_price !== undefined) ? mDecB.sell_price : -Infinity;
      if (pA === pB) return (a.key || 0) - (b.key || 0);
      return pB - pA;
    });
  } else if (sortVal === 'volume_desc') {
    filteredItems.sort((a, b) => {
      const mDecA = getMarketDataForItem(a);
      const mDecB = getMarketDataForItem(b);
      const vA = mDecA ? get24hVolume(mDecA) : -1;
      const vB = mDecB ? get24hVolume(mDecB) : -1;
      if (vA === vB) return (a.key || 0) - (b.key || 0);
      return vB - vA;
    });
  } else if (sortVal === 'listings_desc') {
    filteredItems.sort((a, b) => {
      const mDecA = getMarketDataForItem(a);
      const mDecB = getMarketDataForItem(b);
      const lA = (mDecA && mDecA.listings !== undefined) ? mDecA.listings : -1;
      const lB = (mDecB && mDecB.listings !== undefined) ? mDecB.listings : -1;
      if (lA === lB) return (a.key || 0) - (b.key || 0);
      return lB - lA;
    });
  } else {
    if (onlyFavorite) {
      const favList = [...favoriteItems];
      filteredItems.sort((a, b) => {
        const idxA = favList.indexOf(String(a.key));
        const idxB = favList.indexOf(String(b.key));
        if (idxA !== -1 && idxB !== -1) {
          return idxA - idxB;
        }
        return (a.key || 0) - (b.key || 0);
      });
    } else {
      filteredItems.sort((a,b) => (a.key || 0) - (b.key || 0));
    }
  }
  
  itemCurPage = 0;
  renderItemDb();
}

function renderItemDb() {
  const tbody = document.getElementById('itemDbTbody');
  const emptyState = document.getElementById('itemDbEmptyState');
  if (!tbody || !emptyState) return;

  tbody.innerHTML = '';
  document.getElementById('itemTotalCount').textContent = filteredItems.length;
  
  if (filteredItems.length === 0) {
    emptyState.style.display = 'block';
    document.getElementById('itemPaginationInfo').textContent = '';
    document.getElementById('itemPaginationTop').innerHTML = '';
    document.getElementById('itemPaginationBottom').innerHTML = '';
    return;
  }
  
  emptyState.style.display = 'none';
  
  const start = itemCurPage * itemPageSize;
  const end = Math.min(start + itemPageSize, filteredItems.length);
  const pageItems = filteredItems.slice(start, end);
  
  pageItems.forEach(item => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(36,43,69,0.5)';
    
    let gColor = '#dde3f5';
    const rarityObj = RARITIES.find(r => r.name.toUpperCase() === item.grade);
    if (rarityObj) gColor = rarityObj.color;
    else if (item.grade === 'COMMON') gColor = '#7a85a8';
    else if (item.grade === 'CELESTIAL') gColor = '#00ffcc';
    else if (item.grade === 'DIVINE') gColor = '#ffbb00';
    else if (item.grade === 'COSMIC') gColor = '#ff00ff';
    
    let statHtml = '—';
    const allStats = [];
    if (item.stats) {
      if (item.stats.base) {
        item.stats.base.forEach(s => allStats.push({ ...s, type: 'base' }));
      }
      if (item.stats.inherent) {
        item.stats.inherent.forEach(s => allStats.push({ ...s, type: 'inherent' }));
      }
    }
    
    if (allStats.length > 0) {
      statHtml = allStats.map(s => {
        const isSelected = itemFilters.selectedStats.includes(s.stat) && !itemFilters.disabledStats.has(s.stat);
        const label = formatStatName(s.stat);
        const sign = val => val >= 0 ? '+' : '';
        
        let style = 'display:inline-block; font-size:11px; margin-right:6px; margin-bottom:4px; padding:2px 8px; border-radius:4px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-sec);';
        if (isSelected) {
          style = 'display:inline-block; font-size:11px; margin-right:6px; margin-bottom:4px; padding:2px 8px; border-radius:4px; border:1px solid #00e676; background:rgba(0, 230, 118, 0.15); color:#fff; font-weight:700;';
        }
        
        const typeLabel = s.type === 'inherent' ? '<span style="font-size:9px; color:var(--legendary); margin-right:4px;">(Inherent)</span>' : '';
        return `<span style="${style}">${typeLabel}${label} <strong style="color:${isSelected ? '#00e676' : 'var(--accent)'};">${s.disp}</strong></span>`;
      }).join('');
    }
    
    if (item.uniqueMod && item.uniqueMod !== '0' && item.uniqueMod !== 0 && item.uniqueMod !== 'null' && item.uniqueMod !== 'undefined') {
      if (statHtml === '—') statHtml = '';
      const isSelected = itemFilters.selectedStats.includes(item.uniqueMod) && !itemFilters.disabledStats.has(item.uniqueMod);
      const color = isSelected ? '#00e676' : 'var(--legendary)';
      const weight = isSelected ? 'font-weight:700;' : '';
      const border = isSelected ? 'border:1px solid #00e676; background:rgba(0, 230, 118, 0.15); padding:2px 8px; border-radius:4px; display:inline-block; margin-top:4px;' : '';
      statHtml += `<div style="font-size:12px; color:${color}; font-style:italic; margin-top:4px; ${weight} ${border}">✨ ${formatStatName(item.uniqueMod)}</div>`;
    }
    
    const clsText = (item.classes && item.classes.length > 0) ? item.classes.join(', ') : 'All';
    
    const iconHtml = item.icon ? `<img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}else{this.style.display='none';}" style="width:24px; height:24px; object-fit:contain; image-rendering:pixelated; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border);" />` : '';

    const mData = getMarketDataForItem(item);
    let sellPriceText = '—';
    const price = getItemPriceByBasis(mData, item);
    if (price !== null && price !== undefined && !isNaN(price)) {
      sellPriceText = '¥' + Math.round(price).toLocaleString();
      if (typeof currentPriceDatabaseMode !== 'undefined' && currentPriceDatabaseMode === 'ai') {
        sellPriceText += ' (AI)';
      }
    }
    const listingsText = (mData && mData.listings !== undefined) ? mData.listings.toLocaleString() : '—';
    const volume24h = mData ? get24hVolume(mData) : 0;
    const volumeText = mData ? volume24h.toLocaleString() : '—';

    let displayName = item.name;
    if (item.type === 'GEAR') {
      const keyStr = String(item.key);
      if (keyStr.endsWith('1')) displayName += ' A';
      else if (keyStr.endsWith('2')) displayName += ' B';
    }

    tr.innerHTML = `
      <td style="padding:10px 14px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="cursor:pointer; font-size:16px; user-select:none; color:${favoriteItems.has(String(item.key)) ? '#ffbb00' : 'var(--text-faint)'};" onclick="toggleFavorite(${item.key}); event.stopPropagation();">
            ${favoriteItems.has(String(item.key)) ? '★' : '☆'}
          </span>
          ${iconHtml}
          <div>
            <div style="font-family:'Rajdhani', sans-serif; font-weight:700; color:${gColor}; cursor:pointer;" onclick="showItemDetail(${item.key})">${displayName}</div>
            <span style="font-size:10px; color:var(--text-sec);">(${item.key})</span>
          </div>
        </div>
      </td>
      <td style="padding:10px 14px;"><span class="rb" style="background:rgba(255,255,255,0.05); color:${gColor}; border:1px solid ${gColor}50;">${item.grade}</span></td>
      <td style="padding:10px 14px; color:var(--text-sec); font-size:12px;">${item.parts ? getPartHtml(item.parts) : item.type}</td>
      <td style="padding:10px 14px; color:var(--text-sec); font-size:12px;">${clsText}</td>
      <td style="padding:10px 14px; text-align:right;" class="mono">${item.level || '—'}</td>
      <td style="padding:10px 14px; text-align:right;" class="mono">${sellPriceText}</td>
      <td style="padding:10px 14px; text-align:right;" class="mono">${listingsText}</td>
      <td style="padding:10px 14px; text-align:right;" class="mono">${volumeText}</td>
      <td style="padding:10px 14px;">${statHtml}</td>
    `;
    tbody.appendChild(tr);
  });
  
  const totalPages = Math.ceil(filteredItems.length / itemPageSize);
  document.getElementById('itemPaginationInfo').textContent = `${totalPages} ページ中 ${itemCurPage + 1} ページ目 (${start+1}〜${end}件を表示)`;
  
  renderItemPagination(totalPages);
}

function renderItemPagination(totalPages) {
  const makePagHtml = () => {
    let html = `
      <button class="pag-btn" ${itemCurPage === 0 ? 'disabled' : ''} onclick="changeItemPage(0)">«</button>
      <button class="pag-btn" ${itemCurPage === 0 ? 'disabled' : ''} onclick="changeItemPage(${itemCurPage - 1})">＜</button>
    `;
    
    const startRange = Math.max(0, itemCurPage - 2);
    const endRange = Math.min(totalPages - 1, itemCurPage + 2);
    
    for (let i = startRange; i <= endRange; i++) {
      html += `
        <button class="pag-btn ${i === itemCurPage ? 'active' : ''}" onclick="changeItemPage(${i})">${i + 1}</button>
      `;
    }
    
    html += `
      <button class="pag-btn" ${itemCurPage === totalPages - 1 ? 'disabled' : ''} onclick="changeItemPage(${itemCurPage + 1})">＞</button>
      <button class="pag-btn" ${itemCurPage === totalPages - 1 ? 'disabled' : ''} onclick="changeItemPage(${totalPages - 1})">»</button>
    `;
    return html;
  };
  
  const pagHtml = totalPages > 1 ? makePagHtml() : '';
  document.getElementById('itemPaginationTop').innerHTML = pagHtml;
  document.getElementById('itemPaginationBottom').innerHTML = pagHtml;
}

function changeItemPage(page) {
  itemCurPage = page;
  renderItemDb();
}

// ── EFFECTS ──
function initEffects() {
  const statsSet = new Set();
  globalEffects.forEach(eff => {
    if (eff.groups) {
      eff.groups.forEach(g => {
        if (g.stat) statsSet.add(g.stat);
      });
    }
  });
  
  const sortedStats = Array.from(statsSet).sort();
  const selectEl = document.getElementById('effectStatAddSelect');
  if (selectEl) {
    selectEl.innerHTML = '<option value="">+ 統計情報を追加...</option>';
    sortedStats.forEach(stat => {
      const option = document.createElement('option');
      option.value = stat;
      option.textContent = formatStatName(stat);
      selectEl.appendChild(option);
    });
  }
  
  effectFilters.selectedStats = [];
  effectFilters.disabledStats = new Set();
  renderEffectStatChips();
  filterEffects();
}

function formatStatName(stat) {
  if (!stat || stat === '0' || stat === 0 || stat === 'null' || stat === 'undefined') return '';
  const translations = {
    en: {
      'MaxHp': 'Max HP',
      'Armor': 'Armor',
      'AttackDamage': 'Attack Damage',
      'AttackSpeed': 'Attack Speed',
      'CastSpeed': 'Cast Speed',
      'CooldownReduction': 'Cooldown Reduction',
      'CriticalChance': 'Critical Chance',
      'CriticalDamage': 'Critical Damage',
      'MovementSpeed': 'Movement Speed',
      'AreaOfEffect': 'Area of Effect (AoE)',
      'IncreaseExpAmount': 'Experience Gain',
      'BlockChance': 'Block Chance',
      'DodgeChance': 'Dodge Chance',
      'DamageReduction': 'Damage Reduction',
      'AllElementalResistance': 'All Elemental Resistance',
      'HpLeech': 'HP Leech %',
      'IncreaseProjectileDamage': 'Projectile Damage Increase',
      'SkillHealIncrease': 'Skill Healing Increase',
      'DamageAbsorption': 'Damage Absorption',
      'SkillDurationIncrease': 'Skill Duration Increase',
      'SkillRangeExpansion': 'Skill Range Expansion',
      'AddHpPerHit': 'HP Recovery per Hit',
      'AddHpPerKill': 'HP Recovery on Kill',
      'AddAllSkillLevel': 'All Skill Level Increase',
      'HpRegenPerSec': 'HP Regen / sec',
      'Multistrike': 'Multistrike',
      'ProjectileCount': 'Projectile Count',
      'BaseAttackCountReduction': 'Base Attack Count Reduction',
      'ElementalDodgeChance': 'Elemental Dodge Chance',
      'SpellDodgeChance': 'Spell Dodge Chance',
      'ElementalBlockChance': 'Elemental Block Chance',
      'SpellBlockChance': 'Spell Block Chance'
    },
    ja: {
      'MaxHp': '最大HP',
      'Armor': '防御力',
      'AttackDamage': '攻撃力',
      'AttackSpeed': '攻撃速度',
      'CastSpeed': '詠唱速度',
      'CooldownReduction': 'クールタイム短縮',
      'CriticalChance': 'クリティカル率',
      'CriticalDamage': 'クリティカルダメージ',
      'MovementSpeed': '移動速度',
      'AreaOfEffect': '効果範囲強化',
      'IncreaseExpAmount': '経験値獲得強化',
      'BlockChance': 'ブロック率',
      'DodgeChance': '回避率',
      'DamageReduction': '被ダメージ減少',
      'AllElementalResistance': '全元素耐性',
      'HpLeech': 'HP吸収',
      'IncreaseProjectileDamage': '投射物ダメージ増加',
      'SkillHealIncrease': 'スキル回復量強化',
      'DamageAbsorption': 'ダメージ吸収',
      'SkillDurationIncrease': 'スキル持続時間増加',
      'SkillRangeExpansion': 'スキル範囲拡張',
      'AddHpPerHit': '打撃ごとにHP追加',
      'AddHpPerKill': 'キルごとにHP追加',
      'AddAllSkillLevel': '全スキルレベル増加',
      'HpRegenPerSec': '秒間HP回復',
      'Multistrike': 'マルチストライク',
      'ProjectileCount': '投射物数',
      'BaseAttackCountReduction': '基本攻撃回数減少',
      'ElementalDodgeChance': '属性回避率',
      'SpellDodgeChance': '属性回避率',
      'ElementalBlockChance': '属性ブロック率',
      'SpellBlockChance': '属性ブロック率',
      'ColdDamagePercent': '氷属性ダメージ増加',
      'ColdResistance': '氷属性耐性',
      'FireDamagePercent': '火属性ダメージ増加',
      'FireResistance': '火属性耐性',
      'LightningDamagePercent': '雷属性ダメージ増加',
      'LightningResistance': '雷属性耐性',
      'PhysicalDamagePercent': '物理ダメージ増加',
      'ChaosResistance': 'カオス耐性',
      'IncreaseAreaOfEffectDamage': '範囲ダメージ増加',
      'IncreaseMeleeDamage': '近接ダメージ増加',
      'IncreaseSummonDamage': '召喚ダメージ増加',
      'ArrowRainCriticalCooldown': 'アローレイン: クリティカル発生時にクールタイム短縮',
      'AxeSpinBleedingChance': 'アックススピン: 出血付与率増加',
      'ChargeTrapExplosiveCooldown': 'チャージトラップ: 爆発クールタイム短縮',
      'CrossbowTurretAddAmount': 'クロスボウタレット: 設置数増加',
      'CrossbowTurretCooldown': 'クロスボウタレット: クールタイム短縮',
      'ExplosiveBoltHalf': 'エクスプローシブボルト: クールタイム半減',
      'FlameHydraBerserk': 'フレイムハイドラ: バーサク状態発動',
      'IceOrbFreezeToCold': 'アイスオーブ: 凍結状態の敵への氷ダメージ増加',
      'ShieldChargeKillCooldown': 'シールドチャージ: キル時にクールタイムリセット',
      'SkewerShotBleedingStrike': 'スキュワーショット: 出血状態の敵へのダメージ増加',
      'SkillBaseAttackCountReduce': 'スキル基本攻撃回数減少',
      'SkillCooldownReduce': 'スキルクールタイム短縮',
      'SkillElementChange': 'スキル属性変更',
      'SkillMultiStrikeCountUp': 'スキルマルチストライク回数増加',
      'SkillProjectileCountUp': 'スキル投射物数増加',
      'SnowstormEnhanceFrozenEnemy': 'スノーストーム: 凍結状態の敵への効果増加',
      'SorcererLightningShock': 'ソーサラー: 雷撃ショック効果追加',
      'WaveMoveFastestPartyMember': 'ウェーブ移動: 最も速いパーティメンバーの速度をコピー',
      'WaveMoveSlowestPartyExcludeSelf': 'ウェーブ移動: 自分を除く最も遅いパーティメンバーの速度増加',
      'WhirlwindFireIgnite': 'ホイールウィインド: 火属性追加かつ点火付与',
      'WrathOfHeavenHeal': 'ラースオブヘブン: 回復効果追加',
      'SlayerLowHpAttackSpeed': 'スレイヤー: 低HP時に攻撃速度増加'
    }
  };
  const curLang = (typeof currentLang !== 'undefined') ? currentLang : 'ja';
  if (translations[curLang] && translations[curLang][stat]) {
    return translations[curLang][stat];
  }
  let formatted = stat.replace(/([A-Z])/g, ' $1').trim();
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  return formatted;
}

function addEffectStatFilter() {
  const selectEl = document.getElementById('effectStatAddSelect');
  if (!selectEl) return;
  
  const selectedStat = selectEl.value;
  if (!selectedStat) return;
  
  if (!effectFilters.selectedStats.includes(selectedStat)) {
    effectFilters.selectedStats.push(selectedStat);
    renderEffectStatChips();
    filterEffects();
  }
  selectEl.value = '';
}

function renderEffectStatChips() {
  const container = document.getElementById('effectSelectedStatsContainer');
  if (!container) return;
  
  const tipEl = document.getElementById('effectStatFilterTip');
  if (tipEl) {
    tipEl.style.display = effectFilters.selectedStats.length > 0 ? 'block' : 'none';
  }
  
  container.innerHTML = '';
  effectFilters.selectedStats.forEach(stat => {
    const isDisabled = effectFilters.disabledStats.has(stat);
    const chip = document.createElement('div');
    chip.style.display = 'inline-flex';
    chip.style.alignItems = 'center';
    chip.style.gap = '6px';
    chip.style.padding = '4px 10px';
    chip.style.borderRadius = '100px';
    chip.style.fontSize = '12px';
    chip.style.fontFamily = "'Rajdhani', sans-serif";
    chip.style.fontWeight = '600';
    chip.style.transition = 'all 0.2s';
    
    if (isDisabled) {
      chip.style.background = 'rgba(255, 255, 255, 0.04)';
      chip.style.border = '1px solid rgba(255, 255, 255, 0.12)';
      chip.style.color = 'var(--text-sec)';
      chip.style.opacity = '0.5';
    } else {
      chip.style.background = 'rgba(245, 166, 35, 0.1)';
      chip.style.border = '1px solid rgba(245, 166, 35, 0.3)';
      chip.style.color = '#f5a623';
      chip.style.opacity = '1';
    }
    
    const label = document.createElement('span');
    label.textContent = formatStatName(stat);
    label.style.cursor = 'pointer';
    label.onclick = () => toggleEffectStatActive(stat);
    chip.appendChild(label);
    
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '10px';
    closeBtn.style.marginLeft = '4px';
    closeBtn.style.opacity = '0.7';
    closeBtn.style.transition = 'opacity 0.2s';
    closeBtn.onmouseenter = () => { closeBtn.style.opacity = '1'; };
    closeBtn.onmouseleave = () => { closeBtn.style.opacity = '0.7'; };
    closeBtn.onclick = () => {
      removeEffectStatFilter(stat);
    };
    chip.appendChild(closeBtn);
    
    container.appendChild(chip);
  });
}

function toggleEffectStatActive(stat) {
  if (effectFilters.disabledStats.has(stat)) {
    effectFilters.disabledStats.delete(stat);
  } else {
    effectFilters.disabledStats.add(stat);
  }
  renderEffectStatChips();
  filterEffects();
}

function removeEffectStatFilter(stat) {
  effectFilters.selectedStats = effectFilters.selectedStats.filter(s => s !== stat);
  effectFilters.disabledStats.delete(stat);
  renderEffectStatChips();
  filterEffects();
}

function setEffectFilter(type, val, btn) {
  const siblings = btn.parentNode.children;
  for (let sib of siblings) sib.classList.remove('active');
  btn.classList.add('active');
  
  effectFilters[type] = val;
  filterEffects();
}

function filterEffects() {
  const searchInput = document.getElementById('effectSearchInput');
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase().trim();
  const slot = effectFilters.slot;
  const cat = effectFilters.cat;
  const activeStats = effectFilters.selectedStats.filter(stat => !effectFilters.disabledStats.has(stat));
  
  const filtered = globalEffects.filter(eff => {
    if (query) {
      const nameMatch = eff.name && eff.name.toLowerCase().includes(query);
      const statMatch = eff.groups && eff.groups.some(g => g.stat.toLowerCase().includes(query) || (g.disp && g.disp.toLowerCase().includes(query)));
      if (!nameMatch && !statMatch) return false;
    }
    
    if (cat !== 'ALL' && eff.category !== cat) return false;
    
    if (slot !== 'ALL') {
      const hasSlot = eff.groups && eff.groups.some(g => g.slot === slot);
      if (!hasSlot) return false;
    }
    
    if (activeStats && activeStats.length > 0) {
      const hasAllStats = activeStats.every(selStat => {
        return eff.groups && eff.groups.some(g => g.stat === selStat);
      });
      if (!hasAllStats) return false;
    }
    
    return true;
  });
  
  renderEffects(filtered);
}

function renderEffects(list) {
  const container = document.getElementById('effectsGridContainer');
  const emptyState = document.getElementById('effectsEmptyState');
  if (!container || !emptyState) return;

  const slotTranslation = {
    'Weapon': '武器',
    'Armor': '防具',
    'Accessory': 'アクセサリー'
  };
  const catTranslation = {
    'DECORATION': '宝石・装飾',
    'ENGRAVING': 'ルーン・刻印',
    'INSCRIPTION': '碑文',
    'EQUIPMENT': '装備'
  };

  container.innerHTML = '';
  
  if (list.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  
  emptyState.style.display = 'none';
  
  list.forEach(eff => {
    const card = document.createElement('div');
    card.className = 'effect-card fade-up';
    
    let gColor = '#7a85a8';
    const rarityObj = RARITIES.find(r => r.name.toUpperCase() === eff.grade);
    if (rarityObj) gColor = rarityObj.color;
    else if (eff.grade === 'CELESTIAL') gColor = '#00ffcc';
    
    const rowsHtml = eff.groups.map(g => {
      const isActiveSlot = (effectFilters.slot === 'ALL' || effectFilters.slot === g.slot);
      const isSelectedStat = effectFilters.selectedStats.includes(g.stat) && !effectFilters.disabledStats.has(g.stat);
      
      let rowStyle = '';
      if (isSelectedStat) {
        rowStyle = 'background: rgba(0, 230, 118, 0.12); border-left: 2px solid #00e676; padding: 2px 6px; border-radius: 4px;';
      } else {
        rowStyle = 'padding: 2px 6px;';
      }
      
      const op = isActiveSlot ? 'opacity: 1;' : 'opacity: 0.45;';
      const label = formatStatName(g.stat);
      const tierHtml = g.maxTier ? `<span style="font-size:10px; color:var(--text-sec); font-family:'Rajdhani', sans-serif; margin-left: 8px;">T${g.maxTier}</span>` : '';
      
      return `
        <div class="effect-stat-row" style="${op} ${rowStyle} display: flex; align-items: center; margin-bottom: 2px;">
          <span style="font-size:11px; font-weight:700; color:var(--text-sec); border:1px solid var(--border); border-radius:4px; padding:1px 5px; background:var(--bg-secondary); margin-right:6px; min-width: 55px; text-align: center;">${slotTranslation[g.slot] || g.slot}</span>
          <span style="flex:1; color:${isSelectedStat ? '#fff' : 'var(--text-pri)'}; font-size:12px; font-weight:${isSelectedStat ? '700' : 'normal'};">${label}</span>
          <span class="mono" style="color:var(--accent); font-weight:700; font-size:13px;">${g.disp}</span>
          ${tierHtml}
        </div>
      `;
    }).join('');
    
    const iconHtml = eff.icon ? `<div style="width:36px; height:36px; border:1px solid var(--border); border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); shrink-0;"><img src="data/icon_cache/${eff.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${eff.icon}.png';}else{this.style.display='none';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" /></div>` : '';

    card.innerHTML = `
      <div class="effect-card-hd" style="display:flex; align-items:center; gap:12px;">
        ${iconHtml}
        <div style="flex:1; min-width:0;">
          <div class="effect-title-link" style="font-weight:700; font-size:14px; color:${gColor}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" onclick="showItemDetail(${eff.key})">${eff.name}</div>
          <div style="display:flex; gap:6px; margin-top:4px; align-items:center;">
            <span class="rb" style="font-size:8px; padding:1px 5px; background:rgba(255,255,255,0.03); color:${gColor}; border:1px solid ${gColor}30;">${eff.grade}</span>
            <span style="font-size:9px; color:var(--text-sec); font-family:'Rajdhani', sans-serif; letter-spacing:0.5px;">${catTranslation[eff.category] || eff.category}</span>
          </div>
        </div>
      </div>
      <div class="effect-card-bd">
        ${rowsHtml}
      </div>
    `;
    container.appendChild(card);
  });
}

// ── CHESTS ──
function initChests() {
  const container = document.getElementById('chestListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  if (globalChests.length === 0) return;
  
  globalChests.forEach((chest, idx) => {
    const item = document.createElement('div');
    item.className = 'chest-item';
    item.id = 'chest-item-' + idx;
    
    const src = chest.sources && chest.sources[0];
    const name = src ? src.name : 'Unknown Box';
    const grade = src ? src.grade : 'COMMON';
    
    let gColor = '#dde3f5';
    const rarityObj = RARITIES.find(r => r.name.toUpperCase() === grade);
    if (rarityObj) gColor = rarityObj.color;
    else if (grade === 'COMMON') gColor = '#7a85a8';
    
    const chestIcon = src && src.icon ? src.icon : 'Item_910011';
    const iconHtml = `<img src="data/icon_cache/${chestIcon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${chestIcon}.png';}else{this.style.display='none';}" style="width:24px; height:24px; object-fit:contain; image-rendering:pixelated;" />`;

    item.innerHTML = `
      <div style="width:32px; height:32px; border:1px solid var(--border); border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); shrink-0;">
        ${iconHtml}
      </div>
      <div style="flex:1; min-width:0;">
        <div style="font-size:13px; font-weight:700; color:${gColor}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${name}</div>
        <div style="font-size:10px; color:var(--text-sec); margin-top:2px; display:flex; gap:6px;">
          <span>Lv:${chest.gearLevelMin || 0}-${chest.gearLevelMax || 0}</span>
          <span>Stages:${chest.stages ? chest.stages.length : 0}</span>
        </div>
      </div>
    `;
    item.onclick = () => selectChest(chest, idx);
    container.appendChild(item);
  });
  
  initChestChart();
  
  updateRankingsData();
  switchRankTab('act');
}

let priceBasis = 'sold'; // 'sold' (直近実売価格優先) または 'sell' (出品最安値)

/* ═══════════════ PRICE DATABASE SYSTEM (AI PREDICT & MARKET) ═══════════════ */
let currentPriceDatabaseMode = 'ai'; // 'market' or 'ai'。初期値は'ai'
let aiPriceDatabase = {}; // key -> price のマップ

function loadPriceDatabaseMode() {
  const saved = localStorage.getItem('tbh_price_db_mode');
  if (saved === 'market' || saved === 'ai') {
    currentPriceDatabaseMode = saved;
  } else {
    currentPriceDatabaseMode = 'ai'; // デフォルトはAI推定モード
  }
}

function savePriceDatabaseMode() {
  localStorage.setItem('tbh_price_db_mode', currentPriceDatabaseMode);
}

function generateAiPriceDatabase() {
  aiPriceDatabase = {};
  if (typeof globalItems === 'undefined' || !globalItems) return;
  
  const targetLimit = new Date('2026-06-09').getTime();
  
  // オファリングコインの固定推定価格定義
  const offeringCoinPrices = {
    160001: 1850,
    160002: 1200,
    160003: 999,
    160004: 2484,
    160005: 3000, // Kingdom 50th を 3000円に調整
    160006: 3000, // Empire 50th を 3000円に変更
    160007: 7500, // Kingdom 100th
    160008: 18000, // Empire 100th
    160009: 48000, // Sacred Kingdom 1000th
    160010: 120000 // Eternal Empire 1000th
  };
  
  globalItems.forEach(item => {
    // オファリングコインの場合は、固定のオファリング推定価格を優先適用
    if (offeringCoinPrices[item.key] !== undefined) {
      aiPriceDatabase[item.key] = offeringCoinPrices[item.key];
      return;
    }
    
    const mData = getMarketDataForItem(item);
    let price = null;
    
    // 1. 履歴データから算出を試みる
    if (mData && mData.history && mData.history.length > 0) {
      let sumPriceVol = 0;
      let sumVol = 0;
      let lastPrice = null;
      let lastTime = 0;
      
      const isCheatPrice = (p, grade) => {
        const g = String(grade || '').toUpperCase();
        const minLimit = {
          'IMMORTAL': 40, 'ARCANA': 100, 'BEYOND': 300,
          'CELESTIAL': 7000, 'DIVINE': 12000, 'COSMIC': 40000
        };
        return (minLimit[g] && p < minLimit[g]);
      };
      
      mData.history.forEach(h => {
        const hTime = new Date(h.date).getTime();
        if (hTime <= targetLimit && h.volume > 0 && !isCheatPrice(h.price, item.grade)) {
          sumPriceVol += h.price * h.volume;
          sumVol += h.volume;
          
          if (hTime > lastTime) {
            lastTime = hTime;
            lastPrice = h.price;
          }
        }
      });
      
      if (sumVol > 0) {
        const weightedAvg = sumPriceVol / sumVol;
        // 救済ロジック: 直近の取引価格が加重平均の1.2倍以上の場合は、直近の取引価格を優先採用
        if (lastPrice !== null && lastPrice >= weightedAvg * 1.2) {
          price = lastPrice;
        } else {
          price = weightedAvg;
        }
      }
    }
    
    // 2. 履歴がない、あるいは価格が決定できなかった場合のAI妥当価格推計補完（オファリングガチャ期待値ベース）
    if (price === null || price <= 0) {
      const g = String(item.grade || 'COMMON').toUpperCase();
      
      // オファリングガチャの期待入手コストから逆算した妥当なグレード別ベース価格（市場実売ディカウント適用後）
      const basePrices = {
        'COMMON': 8.93,
        'UNCOMMON': 15.44,
        'RARE': 35.68,
        'LEGENDARY': 83.75,
        'IMMORTAL': 80.0,
        'ARCANA': 300.0,
        'BEYOND': 1000.0,
        'CELESTIAL': 3800.0,
        'DIVINE': 13000.0,
        'COSMIC': 36000.0
      };
      
      const base = basePrices[g] || 8.93;
      
      // レベル補正 (高レベルほど入手難度が高いため、レベル1増減あたり5%補正)
      const level = typeof item.level === 'number' ? item.level : 15;
      const levelScale = Math.max(0.1, 1 + (level - 15) * 0.05);
      
      // タイプ補正 (アクセサリー ＞＞ サブ武器 ＞ メイン武器 ＝ 防具４種の順で価格を設定)
      let typeScale = 1.0;
      if (item.type === 'GEAR') {
        const gt = String(item.gearType || '').toUpperCase();
        const accessories = ['AMULET', 'BRACER', 'EARING', 'RING'];
        const subWeapons = ['SHIELD', 'ARROW', 'ORB', 'TOME', 'BOLT'];
        const mainWeapons = ['SWORD', 'AXE', 'SCEPTER', 'STAFF', 'BOW', 'CROSSBOW', 'HATCHET'];
        const armors = ['ARMOR', 'BOOTS', 'GLOVES', 'HELMET'];
        
        if (accessories.includes(gt)) {
          typeScale = 1.8; // アクセサリー4種 (最も高価)
        } else if (subWeapons.includes(gt)) {
          typeScale = 1.3; // サブ武器
        } else if (mainWeapons.includes(gt) || armors.includes(gt)) {
          typeScale = 1.0; // メイン武器 ＝ 防具4種 (基準価格)
        }
      } else if (item.type === 'MATERIAL') {
        typeScale = 0.25; // 素材はベース価格の25%（4分の1）に値下げ
      }
      
      // gold (売却額) による補正
      const gold = typeof item.gold === 'number' ? item.gold : 0;
      const goldScale = gold > 0 ? (1 + Math.log10(gold) * 0.1) : 1.0;
      
      price = base * levelScale * typeScale * goldScale;
    }
    
    // 最安値下限（6円）を適用
    aiPriceDatabase[item.key] = Math.max(6, price);
  });
}

function togglePriceDatabase() {
  if (currentPriceDatabaseMode === 'ai') {
    currentPriceDatabaseMode = 'market';
  } else {
    currentPriceDatabaseMode = 'ai';
  }
  savePriceDatabaseMode();
  updatePriceDatabaseSwitchUI();
  triggerAllRedraws();
}

function updatePriceDatabaseSwitchUI() {
  const box = document.getElementById('dbSwitchBox');
  if (!box) return;
  
  if (currentPriceDatabaseMode === 'ai') {
    box.classList.remove('market-mode');
    box.classList.add('ai-mode');
  } else {
    box.classList.remove('ai-mode');
    box.classList.add('market-mode');
  }
}

function triggerAllRedraws() {
  // クラフト収益タブの更新
  if (typeof initCraft === 'function') {
    try { initCraft(); } catch(e) { console.error(e); }
  }
  // 周回プランナーの更新
  if (typeof recalculateFarm === 'function') {
    try { recalculateFarm(); } catch(e) { console.error(e); }
  }
  // アイテムDBの更新
  if (typeof renderItemDb === 'function') {
    try { renderItemDb(); } catch(e) { console.error(e); }
  }
  // 合成シミュレータの期待値表示・複数回合成シミュレータの期待値表示の更新
  if (typeof updateSynthesisEVDisplay === 'function') {
    try { updateSynthesisEVDisplay(); } catch(e) { console.error(e); }
  }
  if (typeof updateMultiSynthOddsDisplay === 'function') {
    try { updateMultiSynthOddsDisplay(); } catch(e) { console.error(e); }
  }
  
  // 他の価格が影響する箇所の再計算 (期待値など)
  if (typeof updateChestExpectedValue === 'function') {
    try { updateChestExpectedValue(); } catch(e) { console.error(e); }
  }
  if (typeof updateChestDetailProbs === 'function') {
    try { updateChestDetailProbs(); } catch(e) { console.error(e); }
  }
  if (typeof updateChestSimResultsPrices === 'function') {
    try { updateChestSimResultsPrices(); } catch(e) { console.error(e); }
  }
  if (typeof updateRankingsData === 'function') {
    try { updateRankingsData(); } catch(e) { console.error(e); }
  }
  if (typeof renderRankedList === 'function') {
    try { renderRankedList(); } catch(e) { console.error(e); }
  }
  if (typeof getActiveCur === 'function' && typeof selectRecipeByIdx === 'function') {
    try { selectRecipeByIdx(getActiveCur()); } catch(e) { console.error(e); }
  }
}

function getItemPriceByBasis(mData, item = null) {
  // AI推定価格モードの場合
  if (currentPriceDatabaseMode === 'ai' && typeof aiPriceDatabase !== 'undefined') {
    const key = (mData ? (mData.key || mData.id) : null) || (item ? (item.key || item.id) : null);
    if (key && aiPriceDatabase[key] !== undefined) {
      return Math.max(6, aiPriceDatabase[key]);
    }
  }
  
  if (!mData) return null;
  
  // 不正チート格安出品の判定
  const isCheatPrice = (p, grade) => {
    const g = String(grade || '').toUpperCase();
    const minLimit = {
      'IMMORTAL': 40, 'ARCANA': 100, 'BEYOND': 300,
      'CELESTIAL': 7000, 'DIVINE': 12000, 'COSMIC': 40000
    };
    return (minLimit[g] && p < minLimit[g]);
  };
  
  let price = null;
  if (priceBasis === 'sell') {
    const rawSellPrice = typeof mData.sell_price === 'number' ? mData.sell_price : null;
    if (rawSellPrice !== null && !isCheatPrice(rawSellPrice, mData.grade)) {
      price = rawSellPrice;
    }
  } else if (mData.history && mData.history.length > 0) {
    const now = Date.now();
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    
    let sumPriceVol = 0;
    let sumVol = 0;
    
    mData.history.forEach(h => {
      const hTime = new Date(h.date).getTime();
      if (now - hTime <= sevenDaysMs && h.volume > 0 && !isCheatPrice(h.price, mData.grade)) {
        sumPriceVol += h.price * h.volume;
        sumVol += h.volume;
      }
    });
    
    if (sumVol > 0) {
      price = sumPriceVol / sumVol;
    } else {
      const sortedHistory = [...mData.history]
        .filter(h => typeof h.price === 'number' && !isCheatPrice(h.price, mData.grade))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      if (sortedHistory[0]) {
        price = sortedHistory[0].price;
      }
    }
  }
  
  if (price === null) {
    const rawSellPrice = typeof mData.sell_price === 'number' ? mData.sell_price : null;
    if (rawSellPrice !== null && !isCheatPrice(rawSellPrice, mData.grade)) {
      price = rawSellPrice;
    }
  }

  return price !== null ? Math.max(6, price) : null;
}

function switchPriceBasis(basis) {
  priceBasis = basis;
  
  // セレクトボックスの同期
  const chestSelect = document.getElementById('chestPriceBasisSelect');
  if (chestSelect) chestSelect.value = basis;
  const craftSelect = document.getElementById('craftPriceBasisSelect');
  if (craftSelect) craftSelect.value = basis;
  
  updateChestExpectedValue();
  updateChestDetailProbs();
  updateChestSimResultsPrices();
  updateRankingsData();
  renderRankedList();
  
  if (typeof activeCat !== 'undefined') {
    selectRecipeByIdx(getActiveCur());
    if (typeof render === 'function') render();
    if (typeof renderRecipeList === 'function') renderRecipeList();
  }
}

function updateChestSimResultsPrices() {
  const resultsEl = document.getElementById('chestSimResults');
  if (!resultsEl || resultsEl.style.display === 'none' || !currentChestSimCounts) return;
  
  let totalValue = 0;
  let totalValueStable = 0;
  let hasPriceData = false;
  let hasStablePriceData = false;
  
  Object.entries(currentChestSimCounts).forEach(([key, d]) => {
    const item = globalItems.find(it => it.key == key);
    if (item) {
      const mData = getMarketDataForItem(item);
      const price = getItemPriceByBasis(mData);
      if (price !== null && typeof price === 'number') {
        const itemTotal = d.count * price;
        totalValue += itemTotal;
        hasPriceData = true;
        
        const pool = activeChest.pools[activeChestVariantIdx];
        let isUltraRare = false;
        if (pool && pool.entries) {
          const ent = pool.entries.find(e => e.items && e.items.includes(item.key));
          if (ent) {
            const itemProb = ent.probability / ent.items.length;
            isUltraRare = itemProb < 0.001;
          }
        }
        
        if (!isUltraRare) {
          totalValueStable += itemTotal;
          hasStablePriceData = true;
        }
      }
    }
  });
  
  const totalValEl = document.getElementById('cTotalValue');
  const avgValEl = document.getElementById('cAvgValue');
  const stableAvgValEl = document.getElementById('cStableAvgValue');
  
  if (hasPriceData) {
    totalValEl.textContent = `¥${Math.round(totalValue).toLocaleString()}`;
    avgValEl.textContent = `¥${Math.round(totalValue / chestSimN).toLocaleString()}`;
  } else {
    totalValEl.textContent = '価格データなし';
    avgValEl.textContent = '価格データなし';
  }
  
  if (stableAvgValEl) {
    if (hasStablePriceData) {
      stableAvgValEl.textContent = `¥${Math.round(totalValueStable / chestSimN).toLocaleString()}`;
    } else if (hasPriceData) {
      stableAvgValEl.textContent = '¥0';
    } else {
      stableAvgValEl.textContent = '価格データなし';
    }
  }
  
  renderChestBd();
}

let activeRankTab = 'act';
let rankedChestsData = {
  act: [],
  stage: [],
  normal: []
};

function switchRankTab(tab) {
  activeRankTab = tab;
  ['act', 'stage', 'normal'].forEach(t => {
    const btn = document.getElementById('rank-tab-' + t);
    if (btn) {
      if (t === tab) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderRankedList();
}

function updateRankingsData() {
  if (typeof globalChests === 'undefined' || !globalChests) return;
  
  const categories = {
    act: [],
    stage: [],
    normal: []
  };
  
  globalChests.forEach((chest, idx) => {
    if (!chest.stages || chest.stages.length === 0) return;
    
    const src = chest.sources && chest.sources[0];
    if (!src) return;
    
    const name = src.name || '';
    let category = null;
    
    if (name.startsWith('Act Boss Box')) {
      category = 'act';
    } else if (name.startsWith('Stage Boss Box')) {
      category = 'stage';
    } else if (name.startsWith('Normal Monster Box') || name.startsWith('Monster Box')) {
      category = 'normal';
    }
    
    if (category) {
      const evFull = getChestEvForRanking(chest, false);
      const evStable = getChestEvForRanking(chest, true);
      
      categories[category].push({
        chest,
        globalIndex: idx,
        name,
        icon: src.icon || 'Item_910011',
        evFull,
        evStable
      });
    }
  });
  
  Object.keys(categories).forEach(cat => {
    categories[cat].sort((a, b) => b.evFull - a.evFull);
    rankedChestsData[cat] = categories[cat].slice(0, 5);
  });
}

function getChestEvForRanking(chest, stableOnly = false) {
  const pool = chest.pools && chest.pools[0];
  if (!pool || !pool.entries || pool.entries.length === 0) return 0;
  
  let expectedValue = 0;
  pool.entries.forEach(ent => {
    if (!ent.items || ent.items.length === 0) return;
    let groupTotal = 0;
    
    const itemProb = ent.probability / ent.items.length;
    const isUltraRare = stableOnly && (itemProb < 0.001);
    
    ent.items.forEach(key => {
      const item = globalItems.find(it => it.key === key);
      if (item) {
        const mData = getMarketDataForItem(item);
        const price = getItemPriceByBasis(mData);
        if (price !== null && typeof price === 'number') {
          if (!isUltraRare) {
            groupTotal += price;
          }
        }
      }
    });
    
    expectedValue += ent.probability * (groupTotal / ent.items.length);
  });
  
  return Math.round(expectedValue);
}

function renderRankedList() {
  const container = document.getElementById('chestRankingList');
  if (!container) return;
  container.innerHTML = '';
  
  const data = rankedChestsData[activeRankTab] || [];
  if (data.length === 0) {
    container.innerHTML = '<div style="font-size:12px; color:var(--text-sec); text-align:center; padding:16px;">データがありません</div>';
    return;
  }
  
  const medalIcons = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
  
  data.forEach((item, index) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:8px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); cursor:pointer; transition:all 0.15s;';
    
    row.onmouseenter = () => {
      row.style.background = 'rgba(255,255,255,0.08)';
      row.style.borderColor = 'var(--accent)';
    };
    row.onmouseleave = () => {
      row.style.background = 'rgba(255,255,255,0.03)';
      row.style.borderColor = 'rgba(255,255,255,0.05)';
    };
    
    row.onclick = () => {
      selectChest(item.chest, item.globalIndex);
      const targetEl = document.getElementById('chest-item-' + item.globalIndex);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };
    
    const rankBadge = medalIcons[index] || `${index + 1}`;
    
    row.innerHTML = `
      <span style="font-size:20px; flex-shrink:0; width:26px; text-align:center;">${rankBadge}</span>
      <img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}else{this.style.display='none';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" />
      <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:2px;">
        <span style="font-size:13px; font-weight:700; color:var(--text-pri); overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${item.name}</span>
        <span style="font-size:11px; color:var(--text-sec);">安定: ¥${Math.round(item.evStable).toLocaleString()}</span>
      </div>
      <span style="font-size:16px; font-weight:700; color:var(--accent); font-family:'Rajdhani';" title="理論期待値">¥${Math.round(item.evFull).toLocaleString()}</span>
    `;
    
    container.appendChild(row);
  });
}

function filterChests() {
  const searchInput = document.getElementById('chestSearchInput');
  const levelSelect = document.getElementById('chestGearLevelSelect');
  if (!searchInput || !levelSelect) return;
  
  const query = searchInput.value.toLowerCase().trim();
  const selectedLevel = levelSelect.value;
  
  globalChests.forEach((chest, idx) => {
    const itemEl = document.getElementById('chest-item-' + idx);
    if (!itemEl) return;
    
    const src = chest.sources && chest.sources[0];
    const name = src ? src.name.toLowerCase() : '';
    
    let matchesQuery = true;
    if (query) {
      matchesQuery = name.includes(query);
    }
    
    let matchesLevel = true;
    if (selectedLevel !== 'ALL') {
      const lv = parseInt(selectedLevel);
      matchesLevel = (chest.gearLevelMin <= lv && lv <= chest.gearLevelMax);
    }
    
    if (matchesQuery && matchesLevel) {
      itemEl.style.display = 'flex';
    } else {
      itemEl.style.display = 'none';
    }
  });
}

function selectChest(chest, idx) {
  activeChest = chest;
  activeChestVariantIdx = 0;
  
  const container = document.getElementById('chestListContainer');
  if (container) {
    const items = container.children;
    for (let it of items) it.classList.remove('active');
  }
  const itemEl = document.getElementById('chest-item-' + idx);
  if (itemEl) itemEl.classList.add('active');
  
  document.getElementById('chestEmptyState').style.display = 'none';
  document.getElementById('chestDetailCard').style.display = 'block';
  
  const src = chest.sources && chest.sources[0];
  document.getElementById('chestDetailName').textContent = src ? src.name : 'Unknown Box';
  document.getElementById('chestDetailLv').textContent = `${chest.gearLevelMin || 0} 〜 ${chest.gearLevelMax || 0}`;
  
  const chestIcon = src && src.icon ? src.icon : 'Item_910011';
  const chestImgEl = document.getElementById('chestDetailIcon');
  delete chestImgEl.dataset.triedFallback;
  chestImgEl.onerror = () => {
    if (!chestImgEl.dataset.triedFallback) {
      chestImgEl.dataset.triedFallback = 'true';
      chestImgEl.src = `https://taskbarherowiki.com/icons/${chestIcon}.png`;
    } else {
      chestImgEl.style.display = 'none';
    }
  };
  chestImgEl.style.display = 'block';
  chestImgEl.src = `data/icon_cache/${chestIcon}.png`;
  document.getElementById('chestDetailIconSlot').style.display = 'flex';
  
  const stageContainer = document.getElementById('chestDetailStages');
  stageContainer.innerHTML = '';
  if (chest.stages && chest.stages.length > 0) {
    chest.stages.forEach(st => {
      const badge = document.createElement('span');
      badge.className = 'stage-badge';
      badge.textContent = `${st.label} (${st.difficulty})`;
      stageContainer.appendChild(badge);
    });
  } else {
    stageContainer.innerHTML = '<span style="font-size:12px; color:var(--text-sec);">情報なし</span>';
  }
  
  const variantContainer = document.getElementById('chestDetailVariants');
  variantContainer.innerHTML = '';
  if (chest.pools && chest.pools.length > 0) {
    chest.pools.forEach((p, pIdx) => {
      const chip = document.createElement('button');
      chip.className = 'filter-chip' + (pIdx === 0 ? ' active' : '');
      chip.textContent = p.label;
      chip.onclick = () => selectChestVariant(pIdx, chip);
      variantContainer.appendChild(chip);
    });
    
    updateChestVariantDesc();
  }
  
  updateChestDetailProbs();
  
  document.getElementById('chestSimResults').style.display = 'none';
  document.getElementById('chestBdSection').style.display = 'none';
  document.getElementById('chestChartWrapper').style.display = 'none';
  if (chestsChart) {
    chestsChart.data.labels = [];
    chestsChart.data.datasets = [];
    chestsChart.update();
  }
}

function selectChestVariant(idx, btn) {
  const siblings = btn.parentNode.children;
  for (let sib of siblings) sib.classList.remove('active');
  btn.classList.add('active');
  
  activeChestVariantIdx = idx;
  updateChestVariantDesc();
  updateChestDetailProbs();
}

function updateChestVariantDesc() {
  const pool = activeChest.pools[activeChestVariantIdx];
  const descEl = document.getElementById('chestVariantDesc');
  if (pool) {
    descEl.textContent = `総ドロップテーブル重量: ${pool.totalWeight.toLocaleString()} | 報酬グループ数: ${pool.entries.length}`;
  } else {
    descEl.textContent = '';
  }
}

function updateChestDetailProbs() {
  const container = document.getElementById('chestDetailProbs');
  if (!container) return;
  container.innerHTML = '';
  
  const pool = activeChest.pools[activeChestVariantIdx];
  if (!pool) return;
  
  const classInitials = {
    'Knight': 'K', 'Ranger': 'R', 'Sorcerer': 'S',
    'Priest': 'P', 'Hunter': 'H', 'Slayer': 'Y'
  };
  
  function getClassBadgeHtml(item) {
    if (item.type !== 'GEAR') return '';
    if (!item.classes || item.classes.length === 0 || item.classes.length === 6) {
      return `<span style="font-size:9px; font-weight:700; color:var(--text-sec); background:rgba(255,255,255,0.08); border:1px solid var(--border); border-radius:3px; padding:0 3px; margin-left:4px; font-family:'Rajdhani';">A</span>`;
    }
    return item.classes.map(c => {
      const init = classInitials[c] || c.charAt(0);
      return `<span style="font-size:9px; font-weight:700; color:var(--accent); background:rgba(100,255,218,0.08); border:1px solid rgba(100,255,218,0.25); border-radius:3px; padding:0 3px; margin-left:4px; font-family:'Rajdhani';" title="${c}">${init}</span>`;
    }).join('');
  }

  const sortedEntries = [...pool.entries].sort((a, b) => b.probability - a.probability);
  
  sortedEntries.forEach(ent => {
    const row = document.createElement('div');
    
    const rawPct = ent.probability * 100;
    let probPctText;
    let barPct = rawPct;
    if (rawPct > 0 && rawPct < 0.01) {
      probPctText = rawPct.toFixed(6).replace(/\.?0+$/, "") + '%';
      barPct = 0.01;
    } else {
      probPctText = rawPct.toFixed(2) + '%';
    }
    
    let rarityName = 'Common';
    let rarityColor = '#7a85a8';
    
    const groupItems = (ent.items || []).map(key => globalItems.find(it => it.key === key)).filter(Boolean);
    if (groupItems.length > 0) {
      const g = groupItems[0].grade || 'COMMON';
      const rObj = RARITIES.find(r => r.name.toUpperCase() === g);
      if (rObj) {
        rarityName = rObj.name;
        rarityColor = rObj.color;
      } else if (g === 'COMMON') {
        rarityName = 'Common';
        rarityColor = '#7a85a8';
      } else if (g === 'CELESTIAL') {
        rarityName = 'Celestial';
        rarityColor = '#00ffcc';
      } else if (g === 'DIVINE') {
        rarityName = 'Divine';
        rarityColor = '#ffbb00';
      } else if (g === 'COSMIC') {
        rarityName = 'Cosmic';
        rarityColor = '#ff00ff';
      }
    }
    
    const chipsHtml = groupItems.map(item => {
      const gUpper = (item.grade || 'COMMON').toUpperCase();
      let color = '#7a85a8';
      const rObj = RARITIES.find(r => r.name.toUpperCase() === gUpper);
      if (rObj) color = rObj.color;
      else if (gUpper === 'CELESTIAL') color = '#00ffcc';
      else if (gUpper === 'DIVINE') color = '#ffbb00';
      else if (gUpper === 'COSMIC') color = '#ff00ff';
      
      const badgeHtml = getClassBadgeHtml(item);
      const iconHtml = item.icon ? `<img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}else{this.style.display='none';}" style="width:16px; height:16px; object-fit:contain; image-rendering:pixelated;" />` : '';
      const borderStyle = `border: 1px solid ${color}40; background: ${color}05;`;
      
      const mData = getMarketDataForItem(item);
      const price = getItemPriceByBasis(mData);
      const priceText = price !== null
        ? `<span style="color:var(--text-sec); font-size:11px; margin-left:2px;">(¥${Math.round(price).toLocaleString()})</span>`
        : `<span style="color:var(--text-faint); font-size:11px; margin-left:2px;">(¥—)</span>`;
      
      return `
        <div style="display:inline-flex; align-items:center; gap:6px; padding:4px 8px; border-radius:6px; ${borderStyle} font-size:12px; margin-right:6px; margin-bottom:6px;">
          ${iconHtml}
          <span style="color:${color}; font-weight:600; cursor:pointer; text-decoration:underline; text-underline-offset:2px;" onclick="showItemDetail(${item.key})" title="詳細を表示">${item.name}</span>
          ${priceText}
          ${badgeHtml}
        </div>
      `;
    }).join('');
    
    const weightText = ent.weight ? `w ${ent.weight.toLocaleString()}` : '';
    const descText = `One of ${groupItems.length} <span style="color:${rarityColor}; font-weight:700;">${rarityName}</span> items:`;
    
    row.style.cssText = 'display:flex; flex-direction:column; gap:8px; padding:12px; border:1px solid var(--border); border-radius:10px; background:rgba(0,0,0,0.15); margin-bottom:12px;';
    
    row.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px; justify-content:space-between; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:240px;">
          <span class="mono" style="font-size:14px; font-weight:700; color:var(--text-pri); width:60px; flex-shrink:0;">${probPctText}</span>
          <div class="prob-bar-bg" style="height:8px; border-radius:4px; flex:1; background:var(--bg-secondary); overflow:hidden;">
            <div class="prob-bar-fill" style="width:${barPct}%; height:100%; background:linear-gradient(90deg, var(--accent), var(--accent2));"></div>
          </div>
        </div>
        <span class="mono" style="font-size:11px; color:var(--text-sec); flex-shrink:0;">${weightText}</span>
      </div>
      
      <div style="font-size:12px; color:var(--text-sec); display:flex; align-items:center; gap:4px; margin-top:2px;">
        <span>${descText}</span>
      </div>
      
      <div style="display:flex; flex-wrap:wrap; margin-top:4px;">
        ${chipsHtml}
      </div>
    `;
    container.appendChild(row);
  });
  
  updateChestExpectedValue();
}

function updateChestExpectedValue() {
  const el = document.getElementById('chestExpectedValue');
  const stableEl = document.getElementById('chestStableExpectedValue');
  if (!el) return;
  
  if (!activeChest) {
    el.textContent = '—';
    if (stableEl) stableEl.textContent = '安定(出現率0.1%+): —';
    return;
  }
  
  const pool = activeChest.pools[activeChestVariantIdx];
  if (!pool || !pool.entries || pool.entries.length === 0) {
    el.textContent = '—';
    if (stableEl) stableEl.textContent = '安定(出現率0.1%+): —';
    return;
  }
  
  let expectedValueFull = 0;
  let expectedValueStable = 0;
  let hasPriceData = false;
  let hasStablePriceData = false;
  
  pool.entries.forEach(ent => {
    if (!ent.items || ent.items.length === 0) return;
    let groupTotalFull = 0;
    let groupTotalStable = 0;
    
    // 個別ドロップ確率を算出 (0.1%未満を上振れ枠として除外)
    const itemProb = ent.probability / ent.items.length;
    const isUltraRare = itemProb < 0.001;
    
    ent.items.forEach(key => {
      const item = globalItems.find(it => it.key === key);
      if (item) {
        const mData = getMarketDataForItem(item);
        const price = getItemPriceByBasis(mData);
        if (price !== null && typeof price === 'number') {
          groupTotalFull += price;
          hasPriceData = true;
          
          if (!isUltraRare) {
            groupTotalStable += price;
            hasStablePriceData = true;
          }
        }
      }
    });
    
    expectedValueFull += ent.probability * (groupTotalFull / ent.items.length);
    expectedValueStable += ent.probability * (groupTotalStable / ent.items.length);
  });
  
  if (hasPriceData) {
    el.textContent = `¥${Math.round(expectedValueFull).toLocaleString()}`;
  } else {
    el.textContent = '価格データなし';
  }
  
  if (stableEl) {
    if (hasStablePriceData) {
      stableEl.textContent = `安定(出現率0.1%+): ¥${Math.round(expectedValueStable).toLocaleString()}`;
    } else if (hasPriceData) {
      stableEl.textContent = `安定(出現率0.1%+): ¥0`;
    } else {
      stableEl.textContent = '安定(出現率0.1%+): 価格データなし';
    }
  }
}

function setChestSimN(n, btn) {
  chestSimN = n;
  const siblings = btn.parentNode.children;
  for (let sib of siblings) sib.classList.remove('active');
  btn.classList.add('active');
}

function initChestChart() {
  const canvas = document.getElementById('chestSimChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  chestsChart = new Chart(ctx, {
    type: 'bar',
    data: { labels:[], datasets:[] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title:  { display:true, text: (isEn ? 'Rarity Distribution' : '獲得レアリティ分布'), color:'#7a85a8', font:{ family:'Rajdhani', size:14 } },
      },
      scales: {
        x: { ticks:{ color:'#7a85a8', font:{size:11} }, grid:{ color:'rgba(36,43,69,0.25)' } },
        y: { ticks:{ color:'#7a85a8', font:{size:11} }, grid:{ color:'rgba(36,43,69,0.25)' } }
      }
    }
  });
}

function runChestSim() {
  if (!activeChest) return;
  const btn = document.getElementById('chestRunBtn');
  const isEn = (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en';
  if (btn) {
    btn.disabled = true;
    btn.textContent = isEn ? '⏳ Simulating...' : '⏳ シミュレート中...';
  }
  
  setTimeout(() => {
    _doChestSim();
    if (btn) {
      btn.disabled = false;
      btn.textContent = isEn ? '🎲 Simulate Drops' : '🎲 ドロップ実行';
    }
  }, 20);
}

function _doChestSim() {
  const pool = activeChest.pools[activeChestVariantIdx];
  if (!pool) return;
  
  const entries = pool.entries;
  if (entries.length === 0) return;
  
  let cum = 0;
  const cdf = entries.map(ent => {
    cum += ent.probability;
    return { entry: ent, cum };
  });
  
  const itemCounts = {};
  const gradeCounts = {};
  let uncommonPlus = 0;
  let beyondPlus = 0;
  let totalValue = 0;
  let totalValueStable = 0;
  let hasPriceData = false;
  let hasStablePriceData = false;
  
  for (let i = 0; i < chestSimN; i++) {
    const rnd = Math.random();
    const pickedCdf = cdf.find(c => rnd <= c.cum) || cdf[cdf.length - 1];
    const ent = pickedCdf.entry;
    
    if (ent.items && ent.items.length > 0) {
      const itemIdx = Math.floor(Math.random() * ent.items.length);
      const pickedItemKey = ent.items[itemIdx];
      
      const item = globalItems.find(it => it.key === pickedItemKey);
      if (item) {
        if (!itemCounts[pickedItemKey]) {
          itemCounts[pickedItemKey] = {
            name: item.name,
            grade: item.grade || 'COMMON',
            count: 0
          };
        }
        itemCounts[pickedItemKey].count++;
        
        const mData = getMarketDataForItem(item);
        const price = getItemPriceByBasis(mData);
        if (price !== null && typeof price === 'number') {
          totalValue += price;
          hasPriceData = true;
          
          const itemProb = ent.probability / ent.items.length;
          const isUltraRare = itemProb < 0.001;
          if (!isUltraRare) {
            totalValueStable += price;
            hasStablePriceData = true;
          }
        }
        
        const g = item.grade || 'COMMON';
        gradeCounts[g] = (gradeCounts[g] || 0) + 1;
        
        if (['UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'].includes(g)) {
          uncommonPlus++;
        }
        if (['BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'].includes(g)) {
          beyondPlus++;
        }
      }
    }
  }
  
  document.getElementById('chestSimResults').style.display = 'grid';
  document.getElementById('cTotalDrop').textContent = `${chestSimN.toLocaleString()} 個`;
  
  const totalValEl = document.getElementById('cTotalValue');
  const avgValEl = document.getElementById('cAvgValue');
  const stableAvgValEl = document.getElementById('cStableAvgValue');
  if (hasPriceData) {
    totalValEl.textContent = `¥${Math.round(totalValue).toLocaleString()}`;
    avgValEl.textContent = `¥${Math.round(totalValue / chestSimN).toLocaleString()}`;
  } else {
    totalValEl.textContent = '価格データなし';
    avgValEl.textContent = '価格データなし';
  }
  
  if (stableAvgValEl) {
    if (hasStablePriceData) {
      stableAvgValEl.textContent = `¥${Math.round(totalValueStable / chestSimN).toLocaleString()}`;
    } else if (hasPriceData) {
      stableAvgValEl.textContent = '¥0';
    } else {
      stableAvgValEl.textContent = '価格データなし';
    }
  }
  
  document.getElementById('cUncommonPlus').textContent = `${uncommonPlus.toLocaleString()} 個 (${(uncommonPlus / chestSimN * 100).toFixed(1)}%)`;
  document.getElementById('cBeyondPlus').textContent = `${beyondPlus.toLocaleString()} 個 (${(beyondPlus / chestSimN * 100).toFixed(2)}%)`;
  
  currentChestSimCounts = itemCounts;

  const bdSection = document.getElementById('chestBdSection');
  if (bdSection) bdSection.style.display = 'block';
  
  renderChestBd();
  
  const canvas = document.getElementById('chestChartWrapper');
  if (canvas) canvas.style.display = 'block';
  
  const allGrades = globalMeta.grades || ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];
  const labels = [];
  const data = [];
  const backgroundColors = [];
  
  allGrades.forEach(g => {
    const count = gradeCounts[g] || 0;
    if (count > 0 || chestSimN <= 1000) {
      labels.push(g);
      data.push(count);
      
      let color = '#7a85a8';
      const rarityObj = RARITIES.find(r => r.name.toUpperCase() === g);
      if (rarityObj) color = rarityObj.color;
      backgroundColors.push(color);
    }
  });
  
  if (chestsChart) {
    chestsChart.data.labels = labels;
    chestsChart.data.datasets = [{
      label: '獲得数',
      data: data,
      backgroundColor: backgroundColors,
      borderWidth: 0
    }];
    chestsChart.update();
  }
}

function renderChestBd() {
  if (!currentChestSimCounts) return;
  
  const sortKey = document.getElementById('chestBdSortKey').value;
  const sortOrder = document.getElementById('chestBdSortOrder').value;
  
  const gradeOrder = ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];
  
  const items = Object.entries(currentChestSimCounts)
    .map(([key, data]) => ({ key, ...data }));
    
  items.sort((a, b) => {
    let cmp = 0;
    if (sortKey === 'rarity') {
      const idxA = gradeOrder.indexOf(a.grade.toUpperCase());
      const idxB = gradeOrder.indexOf(b.grade.toUpperCase());
      cmp = idxA - idxB;
      if (cmp === 0) {
        cmp = b.count - a.count;
      }
    } else {
      cmp = a.count - b.count;
      if (cmp === 0) {
        const idxA = gradeOrder.indexOf(a.grade.toUpperCase());
        const idxB = gradeOrder.indexOf(b.grade.toUpperCase());
        cmp = idxA - idxB;
      }
    }
    return sortOrder === 'desc' ? -cmp : cmp;
  });
  
  const grid = document.getElementById('chestBdGrid');
  if (grid) {
    grid.innerHTML = items.map(d => {
      let gColor = '#dde3f5';
      const rarityObj = RARITIES.find(r => r.name.toUpperCase() === d.grade);
      if (rarityObj) gColor = rarityObj.color;
      else if (d.grade === 'COMMON') gColor = '#7a85a8';
      else if (d.grade === 'CELESTIAL') gColor = '#00ffcc';
      else if (d.grade === 'DIVINE') gColor = '#ffbb00';
      else if (d.grade === 'COSMIC') gColor = '#ff00ff';
      
      const foundItem = (typeof globalItems !== 'undefined') ? globalItems.find(it => it.key == d.key) : null;
      const iconName = foundItem ? foundItem.icon : null;
      const iconHtml = iconName ? `<img src="data/icon_cache/${iconName}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${iconName}.png';}else{this.style.display='none';}" style="width:18px; height:18px; object-fit:contain; image-rendering:pixelated; border-radius:3px; background:var(--bg-secondary); border:1px solid var(--border);" />` : '';

      const mData = foundItem ? getMarketDataForItem(foundItem) : null;
      const price = getItemPriceByBasis(mData);
      let priceHtml = '';
      if (price !== null && typeof price === 'number') {
        const itemTotalVal = d.count * price;
        priceHtml = `
          <div style="display:flex; flex-direction:column; align-items:flex-end; min-width:85px; margin-left:8px; line-height:1.2;">
            <span style="font-size:12px; color:var(--accent); font-family:'Rajdhani'; font-weight:700;">¥${Math.round(itemTotalVal).toLocaleString()}</span>
            <span style="font-size:9px; color:var(--text-sec);">¥${Math.round(price).toLocaleString()}/個</span>
          </div>
        `;
      } else {
        priceHtml = `
          <div style="display:flex; flex-direction:column; align-items:flex-end; min-width:85px; margin-left:8px; line-height:1.2;">
            <span style="font-size:12px; color:var(--text-faint); font-family:'Rajdhani';">—</span>
          </div>
        `;
      }

      return `
        <div class="bd-row">
          <div class="bd-left" style="min-width:0; flex:1; display:flex; align-items:center; gap:6px;">
            <span class="rb" style="background:rgba(255,255,255,0.05); color:${gColor}; border:1px solid ${gColor}30; font-size:9px; padding:1px 4px;">${d.grade}</span>
            ${iconHtml}
            <span style="color:${gColor}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:pointer; text-decoration:underline; text-underline-offset:3px;" onclick="showItemDetail(${d.key})" title="${d.name} - 詳細を表示">${d.name}</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px; flex-shrink:0;">
            <span class="bd-count" style="margin-left:8px;">${d.count}個</span>
            <span class="bd-val" style="color:var(--text-sec); min-width:45px; text-align:right;">${(d.count / chestSimN * 100).toFixed(2)}%</span>
            ${priceHtml}
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ── initial render ── */
// render(); // Removed to avoid load-time reference error (render is in sim-craft.js and runs in app.js after fetch)

function getItemDropSources(itemKey) {
  const sources = [];
  
  globalChests.forEach(chest => {
    if (!chest.pools) return;
    
    chest.pools.forEach(pool => {
      if (!pool || !pool.entries) return;
      
      let totalProb = 0;
      let itemFraction = 1;
      let hasItem = false;
      
      pool.entries.forEach(ent => {
        if (ent.items && ent.items.includes(itemKey)) {
          hasItem = true;
          totalProb += ent.probability / ent.items.length;
          itemFraction = ent.items.length;
        }
      });
      
      if (hasItem) {
        const src = chest.sources && chest.sources[0];
        let chestName = src ? src.name : 'Unknown Box';
        const chestIcon = src && src.icon ? src.icon : 'Item_910011';
        
        if (pool.label && pool.label !== 'Default' && pool.label !== 'Normal') {
          const displayLabel = pool.label === 'With Hunter & Slayer' ? 'スレイヤー＆ハンター有効時' : pool.label;
          chestName = `${chestName} (${displayLabel})`;
        }
        
        sources.push({
          chestName,
          chestIcon,
          probability: totalProb,
          fraction: itemFraction
        });
      }
    });
  });
  return sources.sort((a, b) => b.probability - a.probability);
}

function buildHashName(item) {
  let name = item.name;
  if (item.type === 'GEAR') {
    const gradeStr = item.grade.charAt(0) + item.grade.slice(1).toLowerCase();
    const keyStr = String(item.key);
    let suffix = '';
    if (keyStr.endsWith('1')) {
      suffix = 'A';
    } else if (keyStr.endsWith('2')) {
      suffix = 'B';
    }
    name = suffix ? `${item.name} (${gradeStr}) ${suffix}` : `${item.name} (${gradeStr})`;
  }
  return name;
}

function showItemDetail(keyOrName) {
  let item;
  if (typeof keyOrName === 'number') {
    item = globalItems.find(it => it.key === keyOrName);
  } else if (typeof keyOrName === 'string') {
    const parsedKey = parseInt(keyOrName);
    if (!isNaN(parsedKey) && String(parsedKey) === keyOrName) {
      item = globalItems.find(it => it.key === parsedKey);
    }
  }
  if (!item) return;
  
  currentModalItemKey = item.key;
  updateModalFavoriteUI();
  
  document.getElementById('modalItemName').textContent = item.name;
  
  let gColor = '#dde3f5';
  const rarityObj = RARITIES.find(r => r.name.toUpperCase() === item.grade);
  if (rarityObj) gColor = rarityObj.color;
  else if (item.grade === 'COMMON') gColor = '#7a85a8';
  else if (item.grade === 'CELESTIAL') gColor = '#00ffcc';
  else if (item.grade === 'DIVINE') gColor = '#ffbb00';
  else if (item.grade === 'COSMIC') gColor = '#ff00ff';
  
  document.getElementById('modalItemName').style.color = gColor;
  const modalIconImg = document.getElementById('modalItemIcon');
  if (modalIconImg) {
    if (item.icon) {
      delete modalIconImg.dataset.triedFallback;
      modalIconImg.onerror = () => {
        if (!modalIconImg.dataset.triedFallback) {
          modalIconImg.dataset.triedFallback = 'true';
          modalIconImg.src = `https://taskbarherowiki.com/icons/${item.icon}.png`;
        } else {
          modalIconImg.onerror = null;
        }
      };
      modalIconImg.src = `data/icon_cache/${item.icon}.png`;
    } else {
      modalIconImg.src = '';
    }
  }
  document.getElementById('modalItemLevelBadge').textContent = item.level ? 'Lv' + item.level : '';
  
  const badgesContainer = document.getElementById('modalItemBadges');
  badgesContainer.innerHTML = `
    <span class="rb" style="background:rgba(255,255,255,0.05); color:${gColor}; border:1px solid ${gColor}50; font-size:10px; padding:1px 6px;">${item.grade}</span>
    <span class="rb" style="background:rgba(255,255,255,0.03); color:var(--text-sec); border:1px solid var(--border); font-size:10px; padding:1px 6px;">${item.type}</span>
  `;
  if (item.gearType) {
    badgesContainer.innerHTML += `<span class="rb" style="background:rgba(255,255,255,0.03); color:var(--text-sec); border:1px solid var(--border); font-size:10px; padding:1px 6px;">${formatStatName(item.gearType)}</span>`;
  }
  if (item.parts) {
    const partHtml = getPartHtml(item.parts);
    badgesContainer.innerHTML += `<span class="rb" style="background:rgba(255,255,255,0.03); color:var(--text-sec); border:1px solid var(--border); font-size:10px; padding:1px 6px; display:inline-flex; align-items:center; gap:4px;">${partHtml}</span>`;
  }
  if (item.classes && item.classes.length > 0) {
    badgesContainer.innerHTML += `<span class="rb" style="background:rgba(255,255,255,0.03); color:var(--accent); border:1px solid var(--accent)50; font-size:10px; padding:1px 6px;">${item.classes.join(', ')}</span>`;
  }
  badgesContainer.innerHTML += `<span style="font-size:11px; color:var(--text-faint); margin-left:4px;">#${item.key}</span>`;
  
  document.getElementById('modalItemTradable').textContent = item.tradable ? '市場で取引可能' : '市場で取引できない';
  
  // マーケット情報の更新
  const mData = getMarketDataForItem(item);
  const recentSoldEl = document.getElementById('modalMarketRecentSoldPrice');
  const sellPriceEl = document.getElementById('modalMarketSellPrice');
  const listingsEl = document.getElementById('modalMarketListings');
  const volumeEl = document.getElementById('modalMarketVolume');
  const steamMarketBtn = document.getElementById('modalSteamMarketBtn');
  
  let recentSoldPriceText = '—';
  let sellPriceText = '—';
  let listingsText = '—';
  let volumeText = '—';
  
  if (mData) {
    recentSoldPriceText = (mData.last_sold_price_text && mData.last_sold_price_text !== 'undefined' && mData.last_sold_price_text !== 'null') ? mData.last_sold_price_text : '—';
    sellPriceText = (mData.sell_price_text && mData.sell_price_text !== 'undefined' && mData.sell_price_text !== 'null') ? mData.sell_price_text : '—';
    listingsText = mData.listings !== undefined ? mData.listings.toLocaleString() : '—';
    const volume24h = get24hVolume(mData);
    volumeText = volume24h.toLocaleString();
  }
  
  if (typeof currentPriceDatabaseMode !== 'undefined' && currentPriceDatabaseMode === 'ai') {
    const aiPrice = getItemPriceByBasis(mData, item);
    if (aiPrice !== null && aiPrice !== undefined && !isNaN(aiPrice)) {
      sellPriceText = '¥' + Math.round(aiPrice).toLocaleString() + ' (AI)';
      recentSoldPriceText = '¥' + Math.round(aiPrice).toLocaleString() + ' (AI)';
    }
  }
  
  if (recentSoldEl) recentSoldEl.textContent = recentSoldPriceText;
  if (sellPriceEl) sellPriceEl.textContent = sellPriceText;
  if (listingsEl) listingsEl.textContent = listingsText;
  if (volumeEl) volumeEl.textContent = volumeText;
  
  if (steamMarketBtn) {
    if (mData) {
      const steamSearchName = buildHashName(item);
      steamMarketBtn.href = `https://steamcommunity.com/market/listings/3678970/${encodeURIComponent(steamSearchName)}`;
      steamMarketBtn.style.pointerEvents = 'auto';
      steamMarketBtn.style.opacity = '1';
      steamMarketBtn.innerHTML = (typeof currentLang !== 'undefined' && currentLang === 'ja') ? 'STEAM MARKET で開く ➔' : 'Open in Steam Market ➔';
    } else {
      steamMarketBtn.removeAttribute('href');
      steamMarketBtn.style.pointerEvents = 'none';
      steamMarketBtn.style.opacity = '0.4';
      steamMarketBtn.innerHTML = (typeof currentLang !== 'undefined' && currentLang === 'ja') ? 'STEAM MARKET 未出品' : 'Not Listed on Steam Market';
    }
  }
  
  let statsHtml = '';
  if (item.stats) {
    if (item.stats.base && item.stats.base.length > 0) {
      statsHtml += '<div style="font-size:11px; color:var(--text-sec); margin-bottom:6px; font-weight:700;">ベース</div>';
      item.stats.base.forEach(s => {
        statsHtml += `
          <div style="display:flex; justify-content:space-between; font-size:13px; border-bottom:1px dashed rgba(255,255,255,0.05); padding-bottom:4px; margin-bottom:6px;">
            <span style="color:var(--text-pri);">${formatStatName(s.stat)}</span>
            <strong style="color:var(--accent); font-family:'Rajdhani';">${s.disp}</strong>
          </div>
        `;
      });
    }
    if (item.stats.inherent && item.stats.inherent.length > 0) {
      statsHtml += '<div style="font-size:11px; color:var(--text-sec); margin-top:10px; margin-bottom:6px; font-weight:700;">固有</div>';
      item.stats.inherent.forEach(s => {
        statsHtml += `
          <div style="display:flex; justify-content:space-between; font-size:13px; border-bottom:1px dashed rgba(255,255,255,0.05); padding-bottom:4px; margin-bottom:6px;">
            <span style="color:var(--text-pri);">${formatStatName(s.stat)}</span>
            <strong style="color:var(--legendary); font-family:'Rajdhani';">${s.disp}</strong>
          </div>
        `;
      });
    }
  }
  if (item.uniqueMod && item.uniqueMod !== '0' && item.uniqueMod !== 0 && item.uniqueMod !== 'null' && item.uniqueMod !== 'undefined') {
    statsHtml += `<div style="font-size:12px; color:var(--legendary); margin-top:10px; font-style:italic;">✨ ${formatStatName(item.uniqueMod)}</div>`;
  }
  if (!statsHtml) statsHtml = '<div style="font-size:12px; color:var(--text-faint);">ステータス効果はありません。</div>';
  document.getElementById('modalItemStatsContent').innerHTML = statsHtml;
  
  let dropsHtml = '';
  const dropSources = getItemDropSources(item.key);
  if (dropSources.length > 0) {
    document.getElementById('modalItemDropsEmpty').style.display = 'none';
    dropSources.forEach(ds => {
      const rawPct = ds.probability * 100;
      let probPctText;
      if (rawPct > 0 && rawPct < 0.01) {
        probPctText = rawPct.toFixed(6).replace(/\.?0+$/, "") + '%';
      } else {
        probPctText = rawPct.toFixed(2) + '%';
      }
      const trueFraction = Math.round(1 / ds.probability);
      const fracHtml = trueFraction > 1 ? `<span style="font-size:10px; color:var(--text-sec); margin-left:6px;">1/${trueFraction.toLocaleString()}</span>` : '';
      dropsHtml += `
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:6px; margin-bottom:6px;">
          <div style="display:flex; align-items:center; gap:8px; min-width:0; flex:1;">
            <img src="data/icon_cache/${ds.chestIcon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${ds.chestIcon}.png';}else{this.style.display='none';}" style="width:18px; height:18px; object-fit:contain; image-rendering:pixelated;" />
            <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:pointer; text-decoration:underline; color:var(--accent);" onclick="jumpToChestDrop('${ds.chestName.replace(/'/g, '\\\\\'')}')">${ds.chestName}</span>
          </div>
          <div style="font-family:'Rajdhani'; font-weight:700;">
            <span>${probPctText}</span>${fracHtml}
          </div>
        </div>
      `;
    });
    document.getElementById('modalItemDropsContent').innerHTML = dropsHtml;
  } else {
    document.getElementById('modalItemDropsContent').innerHTML = '';
    document.getElementById('modalItemDropsEmpty').style.display = 'block';
  }

  // マーケット詳細セクションの表示制御
  const marketDetailSec = document.getElementById('modalMarketDetailSection');
  const hasMarketData = mData && (mData.sell_price !== undefined || mData.last_sold_price !== undefined);
  if (item.tradable && hasMarketData) {
    if (marketDetailSec) marketDetailSec.style.display = 'grid';
    initMarketHistoryData(item);
    updateMarketHistoryChart('month');
    renderOrderBook(item);
  } else {
    if (marketDetailSec) marketDetailSec.style.display = 'none';
  }
  
  const modal = document.getElementById('itemDetailModal');
  modal.style.display = 'flex';
}

function closeItemDetailModal() {
  document.getElementById('itemDetailModal').style.display = 'none';
}

window.addEventListener('click', (event) => {
  const modal = document.getElementById('itemDetailModal');
  if (event.target === modal) {
    closeItemDetailModal();
  }
});

const GEAR_CATEGORIES = {
  'WEAPON': ['ARROW', 'AXE', 'BOLT', 'BOW', 'CROSSBOW', 'HATCHET', 'ORB', 'SCEPTER', 'SHIELD', 'STAFF', 'SWORD', 'TOME'],
  'ARMOR': ['ARMOR', 'BOOTS', 'GLOVES', 'HELMET'],
  'ACCESSORY': ['AMULET', 'BRACER', 'EARING', 'RING']
};

function toggleItemGearTypeFilter(category, gearType, btn) {
  const container = document.getElementById('itemGearTypeFilter-' + category);
  if (!container) return;
  
  const allBtn = container.children[0];
  
  if (gearType === 'ALL') {
    GEAR_CATEGORIES[category].forEach(gt => itemFilters.gearTypes.delete(gt));
    for (let sib of container.children) sib.classList.remove('active');
    allBtn.classList.add('active');
  } else {
    allBtn.classList.remove('active');
    if (itemFilters.gearTypes.has(gearType)) {
      itemFilters.gearTypes.delete(gearType);
      btn.classList.remove('active');
    } else {
      itemFilters.gearTypes.add(gearType);
      btn.classList.add('active');
    }
    
    const anySelected = GEAR_CATEGORIES[category].some(gt => itemFilters.gearTypes.has(gt));
    if (!anySelected) {
      allBtn.classList.add('active');
    }
  }
  
  filterItems();
}
// お気に入り関連関数
let currentModalItemKey = null;

function toggleFavoriteCurrentItem() {
  if (currentModalItemKey === null) return;
  toggleFavorite(currentModalItemKey);
}

function toggleFavorite(itemKey) {
  const keyStr = String(itemKey);
  if (favoriteItems.has(keyStr)) {
    favoriteItems.delete(keyStr);
  } else {
    favoriteItems.add(keyStr);
  }
  localStorage.setItem('tbh_favorite_items', JSON.stringify([...favoriteItems]));
  updateModalFavoriteUI();
  
  if (typeof isSynthesisInitialized !== 'undefined' && isSynthesisInitialized) {
    renderSynthFavItems();
  }
  
  const onlyFavorite = document.getElementById('itemFavoriteFilter')?.checked;
  if (onlyFavorite) {
    filterItems();
  } else {
    renderItemDb();
  }
}

function updateModalFavoriteUI() {
  const favBtn = document.getElementById('modalItemFavoriteBtn');
  if (!favBtn || currentModalItemKey === null) return;
  const keyStr = String(currentModalItemKey);
  if (favoriteItems.has(keyStr)) {
    favBtn.textContent = '★';
    favBtn.style.color = '#ffbb00';
  } else {
    favBtn.textContent = '☆';
    favBtn.style.color = 'var(--text-sec)';
  }
}

// 宝箱へのジャンプ機能
function jumpToChestDrop(chestName) {
  closeItemDetailModal();
  switchMainTab('chests');
  
  const chestIdx = globalChests.findIndex(c => {
    return c.sources && c.sources.some(src => src.name === chestName);
  });
  
  if (chestIdx !== -1) {
    const chest = globalChests[chestIdx];
    const searchInput = document.getElementById('chestSearchInput');
    const levelSelect = document.getElementById('chestGearLevelSelect');
    if (searchInput) searchInput.value = '';
    if (levelSelect) levelSelect.value = 'ALL';
    filterChests();
    
    selectChest(chest, chestIdx);
    
    const itemEl = document.getElementById('chest-item-' + chestIdx);
    if (itemEl) {
      itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

// 取引履歴・累積オーダーブックのモックデータ生成
function createSeededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function initMarketHistoryData(item) {
  currentHistoryItem = item;
  const key = item.key;
  if (itemHistoryCache[key]) return;

  const mData = getMarketDataForItem(item);
  
  if (mData && mData.history && Array.isArray(mData.history) && mData.history.length > 0) {
    itemHistoryCache[key] = mData.history;
    return;
  }

  // 架空データの自動生成を廃止し、空配列をセット
  itemHistoryCache[key] = [];
}

function aggregateHistoryByDay(rawHistory) {
  if (!rawHistory || rawHistory.length === 0) return [];
  const dailyMap = {};
  rawHistory.forEach(h => {
    const date = h.date;
    if (!dailyMap[date]) {
      dailyMap[date] = {
        date: date,
        priceSum: 0,
        priceCount: 0,
        volume: 0
      };
    }
    dailyMap[date].priceSum += h.price;
    dailyMap[date].priceCount += 1;
    dailyMap[date].volume += h.volume;
  });
  
  const dailyList = Object.keys(dailyMap).map(date => {
    const entry = dailyMap[date];
    return {
      date: date,
      price: Math.round(entry.priceSum / entry.priceCount),
      volume: entry.volume
    };
  });
  
  dailyList.sort((a, b) => new Date(a.date) - new Date(b.date));
  return dailyList;
}

function updateMarketHistoryChart(range) {
  if (!currentHistoryItem) return;
  const key = currentHistoryItem.key;
  const rawHistory = itemHistoryCache[key];
  if (!rawHistory) return;

  const dailyHistory = aggregateHistoryByDay(rawHistory);

  let days = 30;
  if (range === 'week') days = 7;
  else if (range === 'month') days = 30;
  else if (range === 'year') days = 365;
  else if (range === 'all') days = dailyHistory.length;

  const dataSlice = dailyHistory.slice(-days);
  const labels = dataSlice.map(h => {
    const d = new Date(h.date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });
  const prices = dataSlice.map(h => h.price);
  const volumes = dataSlice.map(h => h.volume);

  const buttons = ['btnHistoryWeek', 'btnHistoryMonth', 'btnHistoryYear', 'btnHistoryAll'];
  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.remove('active');
  });
  const activeBtnId = 'btnHistory' + range.charAt(0).toUpperCase() + range.slice(1);
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) activeBtn.classList.add('active');

  const ctx = document.getElementById('modalHistoryChart').getContext('2d');
  if (modalChartInstance) {
    modalChartInstance.destroy();
  }

  modalChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: (typeof currentLang !== 'undefined' ? currentLang : 'en') === 'en' ? `Price (${getMarketCurrencySymbol()})` : `販売価格 (${getMarketCurrencySymbol()})`,
          data: prices,
          borderColor: '#00e676',
          backgroundColor: 'rgba(0, 230, 118, 0.1)',
          borderWidth: 2,
          pointRadius: days > 30 ? 0 : 2,
          yAxisID: 'yPrice',
          fill: true,
          tension: 0.2
        },
        {
          label: '販売済み (個)',
          data: volumes,
          type: 'bar',
          backgroundColor: 'rgba(0, 229, 255, 0.3)',
          borderColor: 'rgba(0, 229, 255, 0.5)',
          borderWidth: 1,
          yAxisID: 'yVolume',
          barPercentage: 0.6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { color: '#dde3f5', font: { size: 10 } }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#7a85a8', font: { size: 10 } }
        },
        yPrice: {
          type: 'linear',
          position: 'left',
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: '#dde3f5',
            font: { size: 10, family: 'Rajdhani' },
            callback: value => {
              const symbol = getMarketCurrencySymbol();
              return symbol + Math.round(value).toLocaleString();
            }
          }
        },
        yVolume: {
          type: 'linear',
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: 'rgba(0, 229, 255, 0.8)',
            font: { size: 10, family: 'Rajdhani' }
          }
        }
      }
    }
  });
}

function renderOrderBook(item) {
  const mData = getMarketDataForItem(item);
  const currencySymbol = getMarketCurrencySymbol();
  const sellBody = document.getElementById('modalSellOrdersBody');
  const buyBody = document.getElementById('modalBuyOrdersBody');
  if (!sellBody || !buyBody) return;

  sellBody.innerHTML = '';
  buyBody.innerHTML = '';

  let sellOrders = [];
  let buyOrders = [];

  if (mData && mData.orderbook && (mData.orderbook.bids || mData.orderbook.asks)) {
    if (mData.orderbook.asks) {
      let prevQty = 0;
      mData.orderbook.asks.forEach((ask) => {
        const price = ask[0];
        const accumQty = ask[1];
        const qty = accumQty - prevQty;
        prevQty = accumQty;
        if (qty > 0 && sellOrders.length < 5) {
          sellOrders.push({ price, count: qty });
        }
      });
    }
    if (mData.orderbook.bids) {
      let prevQty = 0;
      mData.orderbook.bids.forEach((bid) => {
        const price = bid[0];
        const accumQty = bid[1];
        const qty = accumQty - prevQty;
        prevQty = accumQty;
        if (qty > 0 && buyOrders.length < 5) {
          buyOrders.push({ price, count: qty });
        }
      });
    }
  }

  if (sellOrders.length === 0 && buyOrders.length === 0) {
    const isJa = typeof currentLang !== 'undefined' && currentLang === 'ja';
    const emptyMsg = isJa ? '注文データなし' : 'No Order Data';
    const emptyRow = `<tr><td colspan="2" style="text-align:center; color:var(--text-faint); font-style:italic; padding:12px;">${emptyMsg}</td></tr>`;
    sellBody.innerHTML = emptyRow;
    buyBody.innerHTML = emptyRow;
    return;
  }

  sellOrders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:left; color:#ff4444; font-family:'Rajdhani'; font-weight:600;">${currencySymbol}${Math.round(order.price).toLocaleString()}</td>
      <td style="font-family:'Rajdhani'; color:var(--text-pri);">${order.count}</td>
    `;
    sellBody.appendChild(tr);
  });

  buyOrders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="text-align:left; color:#00e676; font-family:'Rajdhani'; font-weight:600;">${currencySymbol}${Math.round(order.price).toLocaleString()}</td>
      <td style="font-family:'Rajdhani'; color:var(--text-pri);">${order.count}</td>
    `;
    buyBody.appendChild(tr);
  });
}

const heroTranslations = {
  en: {
    'Knight': 'Knight',
    'Ranger': 'Ranger',
    'Sorcerer': 'Sorcerer',
    'Priest': 'Priest',
    'Hunter': 'Hunter',
    'Slayer': 'Slayer',
    'SWORD': 'Sword',
    'SHIELD': 'Shield',
    'BOW': 'Bow',
    'ARROW': 'Arrow',
    'STAFF': 'Staff',
    'ORB': 'Orb',
    'SCEPTER': 'Scepter',
    'TOME': 'Tome',
    'CROSSBOW': 'Crossbow',
    'BOLT': 'Bolt',
    'AXE': 'Axe',
    'HATCHET': 'Hatchet',
    'A tanky melee fighter with strong defense and shields equipment.': 'A tanky melee fighter with strong defense and shields equipment.',
    'An agile archer specializing in precise ranged attacks with bow.': 'An agile archer specializing in precise ranged attacks with bow.',
    'A powerful mage dealing devastating area magic damage.': 'A powerful mage dealing devastating area magic damage.',
    'A holy healer who supports allies with restoration magic.': 'A holy healer who supports allies with restoration magic.',
    'A tactical expert using traps and crossbow.': 'A tactical expert using traps and crossbow.',
    'A wild berserker dealing devastating melee damage through rage.': 'A wild berserker dealing devastating melee damage through rage.',
    'Physical': 'Physical',
    'Cold': 'Cold',
    'Fire': 'Fire',
    'Lightning': 'Lightning',
    'Chaos': 'Chaos',
    'Melee': 'Melee',
    'Projectile': 'Projectile',
    'AOE': 'AOE',
    'Buff': 'Buff',
    'Passive': 'Passive',
    'Active': 'Active',
    'Unlock': 'Unlock',
    'Weapons': 'Weapons',
    'Piercing Thrust': 'Piercing Thrust',
    'Shield Charge': 'Shield Charge',
    'Retribution Strike': 'Retribution Strike',
    'Aegis Field': 'Aegis Field',
    'Sacred Blade': 'Sacred Blade',
    'Unyielding Will': 'Unyielding Will',
    'Rapid Fire': 'Rapid Fire',
    'Scatter Shot': 'Scatter Shot',
    'Arrow Rain': 'Arrow Rain',
    'Swift Surge': 'Swift Surge',
    'Piercing Arrow': 'Piercing Arrow',
    'Skewer Shot': 'Skewer Shot',
    'Fireball': 'Fireball',
    'Ice Orb': 'Ice Orb',
    'Lightning': 'Lightning',
    'Flame Hydra': 'Flame Hydra',
    'Snowstorm': 'Snowstorm',
    'Meteor Strike': 'Meteor Strike',
    'Heal': 'Heal',
    'Blessing Of Might': 'Blessing Of Might',
    'Wrath of Heaven': 'Wrath of Heaven',
    'Sanctuary': 'Sanctuary',
    'Blessing of Warding': 'Blessing of Warding',
    'Resurrection': 'Resurrection',
    'Explosive Bolt': 'Explosive Bolt',
    'Frost Bolt': 'Frost Bolt',
    'Quick Loader': 'Quick Loader',
    'Charge Trap': 'Charge Trap',
    'Crossbow Turret': 'Crossbow Turret',
    'Shock Bolt': 'Shock Bolt',
    'Slam Jump': 'Slam Jump',
    'Crushing Blow': 'Crushing Blow',
    'Commander’s Cry': 'Commander’s Cry',
    'Ground Slam': 'Ground Slam',
    'Axe Spin': 'Axe Spin',
    'Bloodlust': 'Bloodlust'
  },
  ja: {
    'Knight': 'ナイト',
    'Ranger': 'レンジャー',
    'Sorcerer': 'ソーサラー',
    'Priest': 'プリースト',
    'Hunter': 'ハンター',
    'Slayer': 'スレイヤー',
    'SWORD': '片手剣',
    'SHIELD': '盾',
    'BOW': '弓',
    'ARROW': '矢',
    'STAFF': '両手杖',
    'ORB': 'オーブ',
    'SCEPTER': '片手杖',
    'TOME': '魔導書',
    'CROSSBOW': '石弓',
    'BOLT': '太矢',
    'AXE': '両手斧',
    'HATCHET': '片手斧',
    'A tanky melee fighter with strong defense and shields equipment.': '強固な防御力と盾装備を特徴とする、高耐久の近接ファイター。',
    'An agile archer specializing in precise ranged attacks with bow.': '弓を用いた精密な遠距離攻撃を得意とする、俊敏なアーチャー。',
    'A powerful mage dealing devastating area magic damage.': '強力な範囲魔法ダメージを操る、破壊力抜群のメイジ。',
    'A holy healer who supports allies with restoration magic.': '回復魔法で味方をサポートする、神聖なヒーラー。',
    'A tactical expert using traps and crossbow.': 'トラップとクロスボウを駆使する、戦術のスペシャリスト。',
    'A wild berserker dealing devastating melee damage through rage.': '怒りを力に変え、圧倒的な近接ダメージを叩き出す野性的なバーサーカー。',
    'Physical': '物理',
    'Cold': '氷',
    'Fire': '火',
    'Lightning': '雷',
    'Chaos': 'カオス',
    'Melee': '近接',
    'Projectile': '投射',
    'AOE': '範囲攻撃',
    'Buff': 'バフ',
    'Passive': 'パッシブ',
    'Active': 'アクティブ',
    'Unlock': '解放コスト',
    'Weapons': '使用武器',
    'Piercing Thrust': 'ピアシングスラスト',
    'Shield Charge': 'シールドチャージ',
    'Retribution Strike': 'レトリビューションストライク',
    'Aegis Field': 'イージスフィールド',
    'Sacred Blade': 'セイクレッドブレード',
    'Unyielding Will': 'アンイェルディングウィル',
    'Rapid Fire': 'ラピッドファイア',
    'Scatter Shot': 'スキャッターショット',
    'Arrow Rain': 'アローレイン',
    'Swift Surge': 'スウィフトサージ',
    'Piercing Arrow': 'ピアシングアロー',
    'Skewer Shot': 'スキュワーショット',
    'Fireball': 'ファイアボール',
    'Ice Orb': 'アイスオーブ',
    'Lightning': 'ライトニング',
    'Flame Hydra': 'フレイムハイドラ',
    'Snowstorm': 'スノーストーム',
    'Meteor Strike': 'メテオストライク',
    'Heal': 'ヒール',
    'Blessing Of Might': 'マイトブレッシング',
    'Wrath of Heaven': 'ラースオブヘブン',
    'Sanctuary': 'サンクチュアリ',
    'Blessing of Warding': 'ワーディングブレッシング',
    'Resurrection': 'リザレクション',
    'Explosive Bolt': 'エクスプローシブボルト',
    'Frost Bolt': 'フロストボルト',
    'Quick Loader': 'クイックローダー',
    'Charge Trap': 'チャージトラップ',
    'Crossbow Turret': 'クロスボウタレット',
    'Shock Bolt': 'ショックボルト',
    'Slam Jump': 'スラムジャンプ',
    'Crushing Blow': 'クラッシングブロウ',
    'Commander’s Cry': 'コマンダーズクライ',
    'Ground Slam': 'グランドスラム',
    'Axe Spin': 'アックススピン',
    'Bloodlust': 'ブラッドラスト',
    'Thrust your sword deeply forward, dealing 250–330% physical damage to enemies in range.': '剣を前方へ深く突き刺し、範囲内の敵に250–330%の物理ダメージを与えます。',
    'Thrust your sword deeply forward, dealing {0}% physical damage to enemies in range.': '剣を前方へ深く突き刺し、範囲内の敵に{0}%の物理ダメージを与えます。',
    'Raise your shield and charge forward. Deal 300–420% physical damage to enemies you collide with.': '盾を構えて前方へ突進します。接触した敵に300–420%の物理ダメージを与えます。',
    'Raise your shield and charge forward. Deal {0}% physical damage to enemies you collide with.': '盾を構えて前方へ突進します。接触した敵に{0}%の物理ダメージを与えます。',
    "Strike enemies multiple times, dealing 150–230% physical damage per hit. The lower the hero's HP, the more strikes.": '敵を複数回攻撃し、ヒットごとに150–230%の物理ダメージを与えます。ヒーローのHPが低いほど、攻撃回数が増加します。',
    "Strike enemies multiple times, dealing {0}% physical damage per hit. The lower the hero's HP, the more strikes.": '敵を複数回攻撃し、ヒットごとに{0}%の物理ダメージを与えます。ヒーローのHPが低いほど、攻撃回数が増加します。',
    'Deploy a protective aura that blocks 50–110 damage for allies within the area.': '保護オーラを展開し、範囲内の味方が受けるダメージを50–110ブロックします。',
    'Deploy a protective aura that blocks {0} damage for allies within the area.': '保護オーラを展開し、範囲内の味方が受けるダメージを{0}ブロックします。',
    'Imbue your sword with holy power. While buffed, attack damage increases by 50% and attacks restore 2–10 HP.': '剣に神聖な力を宿します。バフ中、攻撃力が50%増加し、通常攻撃時にHPが2–10回復します。',
    'Imbue your sword with holy power. While buffed, attack damage increases by 50% and attacks restore {0} HP.': '剣に神聖な力を宿します。バフ中、攻撃力が50%増加し、通常攻撃時にHPが{0}回復します。',
    'Once per stage, when near-death, focus your mind to rise again with 30–70% HP.': 'ステージごとに1回、瀕死時に精神を統一してHP30–70%で復活します。',
    'Once per stage, when near-death, focus your mind to rise again with {0}% HP.': 'ステージごとに1回、瀕死時に精神を統一してHP{0}%で復活します。',
    'Fire multiple arrows in succession, dealing 132–180% physical damage per arrow.': '矢を連続で発射し、矢1本につき132–180%の物理ダメージを与えます。',
    'Fire multiple arrows in succession, dealing {0}% physical damage per arrow.': '矢を連続で発射し、矢1本につき{0}%の物理ダメージを与えます。',
    'Fire multiple homing arrows. Deal 162–226% physical damage per arrow.': '複数の追尾矢を発射します。矢1本につき162–226%の物理ダメージを与えます。',
    'Fire multiple homing arrows. Deal {0}% physical damage per arrow.': '複数の追尾矢を発射します。矢1本につき{0}%の物理ダメージを与えます。',
    'Fire multiple arrows into the sky, dealing 215–319% physical damage to enemies in a wide area.': '上空へ向けて複数の矢を放ち、広範囲の敵に215–319%の物理ダメージを与えます。',
    'Fire multiple arrows into the sky, dealing {0}% physical damage to enemies in a wide area.': '上空へ向けて複数の矢を放ち、広範囲の敵に{0}%の物理ダメージを与えます。',
    'Temporarily accelerate your metabolism. Attack speed increases by 50–90% for the duration.': '一時的に代謝を活性化します。効果時間中、攻撃速度が50–90%増加します。',
    'Temporarily accelerate your metabolism. Attack speed increases by {0}% for the duration.': '一時的に代謝を活性化します。効果時間中、攻撃速度が{0}%増加します。',
    'Fire a piercing arrow that deals 244–308% physical damage to enemies hit.': '敵を貫通する矢を発射し、244–308%の物理ダメージを与えます。',
    'Fire a piercing arrow that deals {0}% physical damage to enemies hit.': '敵を貫通する矢を発射し、{0}%の物理ダメージを与えます。',
    'Fire a deep-wounding arrow. Damage increases by 100–220% per lodged arrow; 3+ arrows cause bleeding.': '深い傷を負わせる矢を発射します。敵に突き刺さった矢1本につきダメージが100–220%増加し、3本以上刺さると出血状態にします。',
    'Fire a deep-wounding arrow. Damage increases by {0}% per lodged arrow; 3+ arrows cause bleeding.': '深い傷を負わせる矢を発射します。敵に突き刺さった矢1本につきダメージが{0}%増加し、3本以上刺さると出血状態にします。',
    'A fireball that explodes on impact, dealing 270–370% AoE fire damage.': '着弾時に爆発し、270–370%の範囲火属性ダメージを与えるファイアボールを放ちます。',
    'A fireball that explodes on impact, dealing {0}% AoE fire damage.': '着弾時に爆発し、{0}%の範囲火属性ダメージを与えるファイアボールを放ちます。',
    'Summon an ice orb and hurl it at enemies. Slows enemies hit and deals 150–198% multi-hit cold damage.': 'アイスオーブを召喚して敵へ投げつけます。命中した敵の移動速度を低下させ、150–198%の多段氷属性ダメージを与えます。',
    'Summon an ice orb and hurl it at enemies. Slows enemies hit and deals {0}% multi-hit cold damage.': 'アイスオーブを召喚して敵へ投げつけます。命中した敵の移動速度を低下させ、{0}%の多段氷属性ダメージを与えます。',
    'Unleash electricity forward, dealing 255–363% lightning damage to enemies.': '前方へ雷撃を放ち、敵に255–363%の雷属性ダメージを与えます。',
    'Unleash electricity forward, dealing {0}% lightning damage to enemies.': '前方へ雷撃を放ち、敵に{0}%の雷属性ダメージを与えます。',
    'Summon a hydra that fires fireballs dealing 230–290% damage.': 'ファイアボールを発射して230–290%のダメージを与えるハイドラを召喚します。',
    'Summon a hydra that fires fireballs dealing {0}% damage.': 'ファイアボールを発射して{0}%のダメージを与えるハイドラを召喚します。',
    'Summon a mass of ice shards raining on enemies. Deals 50–114% cold damage per second and chills enemies in the area.': '敵の上に氷の破片を降らせます。毎秒50–114%の氷属性ダメージを与え、範囲内の敵を冷気状態にします。',
    'Summon a mass of ice shards raining on enemies. Deals {0}% cold damage per second and chills enemies in the area.': '敵の上に氷の破片を降らせます。毎秒{0}%の氷属性ダメージを与え、範囲内の敵を冷気状態にします。',
    'Summon a meteor, dealing 550–730% damage to enemies in a wide area.': '隕石を召喚し、広範囲の敵に550–730%のダメージを与えます。',
    'Summon a meteor, dealing {0}% damage to enemies in a wide area.': '隕石を召喚し、広範囲の敵に{0}%のダメージを与えます。',
    "Restore one ally's HP by an amount equal to 10–18% of their maximum HP.": '味方1人のHPを最大HPの10–18%分回復します。',
    "Restore one ally's HP by an amount equal to {0}% of their maximum HP.": '味方1人のHPを最大HPの{0}%分回復します。',
    'A blessing active while equipped. Increases attack damage of self and nearby party members by 50–90%.': '装備中に発動する祝福。自身と近くのパーティメンバーの攻撃力を50–90%増加させます。',
    'A blessing active while equipped. Increases attack damage of self and nearby party members by {0}%.': '装備中に発動する祝福。自身と近くのパーティメンバーの攻撃力を{0}%増加させます。',
    'Imbue your scepter with divine lightning. For the duration, attacks deal 430–590% lightning area damage.': '片手杖に神聖な雷を宿します。効果時間中、通常攻撃が430–590%の範囲雷属性ダメージになります。',
    'Imbue your scepter with divine lightning. For the duration, attacks deal {0}% lightning area damage.': '片手杖に神聖な雷を宿します。効果時間中、通常攻撃が{0}%の範囲雷属性ダメージになります。',
    'Deploy a holy sanctuary across the battlefield. For the duration, all allies inside regenerate 30–82 HP per second.': '戦場に神聖な結界を展開します。効果時間中、結界内のすべての味方のHPが毎秒30–82回復します。',
    'Deploy a holy sanctuary across the battlefield. For the duration, all allies inside regenerate {0} HP per second.': '戦場に神聖な結界を展開します。効果時間中、結界内のすべての味方のHPが毎秒{0}回復します。',
    'A blessing active while equipped. Increases elemental resistance of self and nearby party members by 10–30.': '装備中に発動する祝福。自身と近くのパーティメンバーの元素耐性を10–30増加させます。',
    'A blessing active while equipped. Increases elemental resistance of self and nearby party members by {0}.': '装備中に発動する祝福。自身と近くのパーティメンバーの元素耐性を{0}増加させます。',
    'Revive a fallen party member with 30–50% of their max HP.': '倒れたパーティメンバーを最大HPの30–50%で復活させます。',
    'Revive a fallen party member with {0}% of their max HP.': '倒れたパーティメンバーを最大HPの{0}%で復活させます。',
    'Fire a crossbow bolt that explodes on impact, dealing 484–688% area fire damage.': '着弾時に爆発し、484–688%の範囲火属性ダメージを与えるボルトを発射します。',
    'Fire a crossbow bolt that explodes on impact, dealing {0}% area fire damage.': '着弾時に爆発し、{0}%の範囲火属性ダメージを与えるボルトを発射します。',
    'Fire a crossbow bolt that explodes on impact, dealing 210–270% area cold damage and freezing enemies hit.': '着弾時に爆発し、210–270%の範囲氷属性ダメージを与えて命中した敵を凍結させるボルトを発射します。',
    'Fire a crossbow bolt that explodes on impact, dealing {0}% area cold damage and freezing enemies hit.': '着弾時に爆発し、{0}%の範囲氷属性ダメージを与えて命中した敵を凍結させるボルトを発射します。',
    'Rapidly reload crossbow bolts. Attack speed increases by 50% for 3–7 attacks.': 'ボルトを急速装填します。3–7回の通常攻撃の間、攻撃速度が50%増加します。',
    'Rapidly reload crossbow bolts. Attack speed increases by 50% for {0} attacks.': 'ボルトを急速装填します。{0}回の通常攻撃の間、攻撃速度が50%増加します。',
    'Launch 2–6 traps that explode when struck by elemental damage.': '元素ダメージを受けると爆発するトラップを2–6個投げつけます。',
    'Launch {0} traps that explode when struck by elemental damage.': '元素ダメージを受けると爆発するトラップを{0}個投げつけます。',
    'Deploy an automated crossbow that fires bolts dealing 175–239% physical damage.': '175–239%の物理ダメージを与えるボルトを発射する自動クロスボウタレットを設置します。',
    'Deploy an automated crossbow that fires bolts dealing {0}% physical damage.': '{0}%の物理ダメージを与えるボルトを発射する自動クロスボウタレットを設置します。',
    'Fire a crossbow bolt that lodges in an enemy and emits lightning for a time. The bolt releases currents dealing 270–350% lightning damage to nearby enemies.': '敵に突き刺さり、一定時間雷を放出するボルトを発射します。ボルトは電流を放ち、周囲の敵に270–350%の雷属性ダメージを与えます。',
    'Fire a crossbow bolt that lodges in an enemy and emits lightning for a time. The bolt releases currents dealing {0}% lightning damage to nearby enemies.': '敵に突き刺さり、一定時間雷を放出するボルトを発射します。ボルトは電流を放ち、周囲の敵に{0}%の雷属性ダメージを与えます。',
    'Gather strength and smash an enemy for 310–410% physical damage. If it kills the enemy, a shockwave deals 350% damage to nearby enemies.': '力を溜めて敵を叩きつけ、310–410%の物理ダメージを与えます。敵を倒した場合、周囲 of 敵に350%ダメージの衝撃波を発生させます。',
    'Gather strength and smash an enemy for {0}% physical damage. If it kills the enemy, a shockwave deals 350% damage to nearby enemies.': '力を溜めて敵を叩きつけ、{0}%の物理ダメージを与えます。敵を倒した場合、周囲の敵に350%ダメージの衝撃波を発生させます。',
    'Gather strength and smash an enemy for 620–780% physical damage. If it kills the enemy, a shockwave deals 350% damage to nearby enemies.': '力を溜めて敵を叩きつけ、620–780%の物理ダメージを与えます。敵を倒した場合、周囲の敵に350%ダメージの衝撃波を発生させます。',
    'Let out a cry that stuns nearby enemies and increases party critical chance multiplier by 50–70%.': '叫び声を上げて周囲の敵をスタンさせ、パーティ全員のクリティカル率倍率を50–70%増加させます。',
    'Let out a cry that stuns nearby enemies and increases party critical chance multiplier by {0}%.': '叫び声を上げて周囲の敵をスタンさせ、パーティ全員のクリティカル率倍率を{0}%増加させます。',
    'Smash the ground hard, causing an earthquake that deals 370–470% physical damage to enemies. Rocks created by the earthquake explode when hit by AoE physical attacks.': '地面を激しく叩いて地震を起こし、敵に370–470%の物理ダメージを与えます。地震で生成された岩は、範囲物理攻撃を受けると爆発します。',
    'Smash the ground hard, causing an earthquake that deals {0}% physical damage to enemies. Rocks created by the earthquake explode when hit by AoE physical attacks.': '地面を激しく叩いて地震を起こし、敵に{0}%の物理ダメージを与えます。地震で生成された岩は、範囲物理攻撃を受けると爆発します。',
    'Spin with an axe, dealing 100–132% physical damage per second to nearby enemies and a chance to apply bleeding. Attacks against bleeding enemies deal bonus damage.': '斧を持って回転し、周囲の敵に毎秒100–132%の物理ダメージを与え、一定確率で出血状態にします。出血状態の敵への攻撃は追加ダメージを与えます。',
    'Spin with an axe, dealing {0}% physical damage per second to nearby enemies and a chance to apply bleeding. Attacks against bleeding enemies deal bonus damage.': '斧を持って回転し、周囲の敵に毎秒{0}%の物理ダメージを与え、一定確率で出血状態にします。出血状態の敵への攻撃は追加ダメージを与えます。',
    'Consume half of current HP to increase attack damage by 400–520% for a time.': '現在HPの半分を消費し、一定時間攻撃力を400–520%増加させます。',
    'Consume half of current HP to increase attack damage by {0}% for a time.': '現在HP의半分を消費し、一定時間攻撃力を{0}%増加させます。'
  }
};

function translateHeroText(text) {
  if (!text) return '';
  if (typeof text !== 'string') return text;
  const curLang = (typeof currentLang !== 'undefined') ? currentLang : 'ja';
  const dict = heroTranslations[curLang] || heroTranslations['ja'];
  
  const normalizedText = text.replace(/\r\n/g, '\n').trim();
  if (dict[normalizedText]) {
    return dict[normalizedText];
  }
  
  for (let key in dict) {
    if (key.replace(/\r\n/g, '\n').trim() === normalizedText) {
      return dict[key];
    }
  }
  return text;
}

function initHeroes() {
  const container = document.getElementById('heroListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  if (!globalHeroes || globalHeroes.length === 0) return;
  
  globalHeroes.forEach((hero, idx) => {
    const item = document.createElement('div');
    item.className = 'hero-item';
    item.id = 'hero-item-' + idx;
    
    const iconHtml = `<img src="data/icon_cache/${hero.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${hero.icon}.png';}else{this.src='https://taskbarherowiki.com/icons/Hero_101.png';}" style="width:28px; height:28px; object-fit:contain; image-rendering:pixelated;" />`;
    
    const dlcHtml = hero.isDlc ? `<span class="rb rb-beyond" style="font-size:8px; padding:1px 4px; margin-left:6px;">DLC</span>` : '';
    
    item.innerHTML = `
      <div style="width:36px; height:36px; border:1px solid var(--border); border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); flex-shrink:0;">
        ${iconHtml}
      </div>
      <div style="flex:1; min-width:0;">
        <div style="font-size:13px; font-weight:700; color:var(--text-pri); display:flex; align-items:center; justify-content:space-between;">
          <span>${translateHeroText(hero.name)}</span>
          ${dlcHtml}
        </div>
        <div style="font-size:10px; color:var(--text-sec); margin-top:2px; display:flex; gap:8px;">
          <span>${translateHeroText('Weapons')}: ${translateHeroText(hero.mainWeapon)}/${translateHeroText(hero.subWeapon)}</span>
        </div>
      </div>
    `;
    item.onclick = () => selectHero(hero, idx);
    container.appendChild(item);
  });
  
  // 保存されたヒーローを復元、なければ最初のヒーローを選択
  let activeIdx = 0;
  if (activeHeroKey) {
    const foundIdx = globalHeroes.findIndex(h => h.key === activeHeroKey);
    if (foundIdx !== -1) activeIdx = foundIdx;
  }
  selectHero(globalHeroes[activeIdx], activeIdx);
}

function selectHero(hero, idx) {
  const container = document.getElementById('heroDetailContainer');
  if (!container) return;
  
  // アクティブクラスの切り替え
  document.querySelectorAll('.hero-item').forEach(el => el.classList.remove('active'));
  const activeItem = document.getElementById('hero-item-' + idx);
  if (activeItem) activeItem.classList.add('active');
  
  activeHeroKey = hero.key;
  
  // スキル割り振り状態の初期化
  if (!heroSkillPoints[hero.key]) {
    heroSkillPoints[hero.key] = {};
    if (hero.tree) {
      hero.tree.forEach(tier => {
        tier.nodes.forEach(node => {
          heroSkillPoints[hero.key][node.key] = 0;
        });
      });
    }
  }
  
  // 装備等の初期化
  if (!heroEquip[hero.key]) heroEquip[hero.key] = {};
  if (!heroSockets[hero.key]) heroSockets[hero.key] = {};
  if (!heroActiveSkills[hero.key]) heroActiveSkills[hero.key] = [null, null];
  
  // 基礎ステータスのマッピング
  const statMap = {};
  if (hero.stats) {
    hero.stats.forEach(s => {
      statMap[s.stat] = s.disp;
    });
  }
  
  // 基本攻撃情報
  const attackInfo = hero.baseAttack || { damageType: '—', delivery: [], range: '—' };
  const deliveryText = attackInfo.delivery ? attackInfo.delivery.join(', ') : '—';
  
  // デフォルトで最初のノードを選択状態にする
  if (hero.tree && hero.tree.length > 0 && hero.tree[0].nodes && hero.tree[0].nodes.length > 0) {
    const firstNode = hero.tree[0].nodes[0];
    let keyExists = false;
    hero.tree.forEach(tier => {
      tier.nodes.forEach(node => {
        if (node.key === activeSkillNodeKey) keyExists = true;
      });
    });
    if (!keyExists) {
      activeSkillNodeKey = firstNode.key;
    }
  } else {
    activeSkillNodeKey = null;
  }
  
  container.innerHTML = `
    <div class="hero-detail-header">
      <img class="hero-art-img" src="data/icon_cache/${hero.art}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${hero.art}.png';}else{this.src='data/icon_cache/${hero.icon}.png';}" />
      <div style="flex:1; min-width:0;">
        <h2 style="font-size:20px; font-weight:700; color:var(--accent); display:flex; align-items:center; gap:8px;">
          <span>${translateHeroText(hero.name)}</span>
          ${hero.isDlc ? `<span class="rb rb-beyond" style="font-size:10px;">DLC HERO</span>` : ''}
        </h2>
        <div style="font-size:12px; color:var(--text-sec); margin-top:4px; line-height:1.6;">${translateHeroText(hero.description)}</div>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px; font-size:11px;">
          <span style="background:var(--bg-secondary); border:1px solid var(--border); padding:3px 8px; border-radius:4px; color:var(--text-pri);">⚔️ メイン武器: <strong>${translateHeroText(hero.mainWeapon)}</strong></span>
          <span style="background:var(--bg-secondary); border:1px solid var(--border); padding:3px 8px; border-radius:4px; color:var(--text-pri);">🛡️ サブ武器: <strong>${translateHeroText(hero.subWeapon)}</strong></span>
        </div>
      </div>
    </div>
    
    <div class="card" style="margin-top:16px;">
      <div class="card-title">基礎ステータス & 基本攻撃</div>
      <div class="stats-grid" style="margin-bottom:14px;">
        <div class="stat-card">
          <div class="stat-label">${formatStatName('MaxHp')}</div>
          <div class="stat-val val-accent">${statMap['MaxHp'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('Armor')}</div>
          <div class="stat-val val-accent">${statMap['Armor'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('AttackDamage')}</div>
          <div class="stat-val val-accent">${statMap['AttackDamage'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('AttackSpeed')}</div>
          <div class="stat-val val-accent">${statMap['AttackSpeed'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('CastSpeed')}</div>
          <div class="stat-val val-accent">${statMap['CastSpeed'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('CooldownReduction')}</div>
          <div class="stat-val val-accent">${statMap['CooldownReduction'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('CriticalChance')}</div>
          <div class="stat-val val-accent">${statMap['CriticalChance'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('CriticalDamage')}</div>
          <div class="stat-val val-accent">${statMap['CriticalDamage'] || '—'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${formatStatName('MovementSpeed')}</div>
          <div class="stat-val val-accent">${statMap['MovementSpeed'] || '—'}</div>
        </div>
      </div>
      
      <div style="background:var(--bg-secondary); border:1px solid var(--border); border-radius:8px; padding:12px 16px; font-size:12px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;">
        <div>🔥 攻撃属性: <strong style="color:var(--text-pri);">${translateHeroText(attackInfo.damageType)}</strong></div>
        <div>🏹 攻撃タイプ: <strong style="color:var(--text-pri);">${attackInfo.delivery ? attackInfo.delivery.map(d => translateHeroText(d)).join(', ') : '—'}</strong></div>
        <div>📏 攻撃射程: <strong style="color:var(--text-pri);">${attackInfo.range} px</strong></div>
      </div>
    </div>

    <!-- サブタブナビゲーション -->
    <div class="sub-tabs" style="display:flex; gap:8px; border-bottom:1px solid var(--border); margin-top:20px; margin-bottom:16px; padding-bottom:8px;">
      <button class="sub-tab-btn ${activeBuildSubTab === 'skill' ? 'active' : ''}" id="sub-tab-btn-skill" onclick="switchBuildSubTab('skill')" style="background:transparent; border:none; color:${activeBuildSubTab === 'skill' ? 'var(--accent)' : 'var(--text-sec)'}; border-bottom: 2px solid ${activeBuildSubTab === 'skill' ? 'var(--accent)' : 'transparent'}; font-size:14px; font-weight:700; cursor:pointer; padding:6px 12px; transition:all 0.2s;">🛠️ スキルシミュレータ</button>
      <button class="sub-tab-btn ${activeBuildSubTab === 'build' ? 'active' : ''}" id="sub-tab-btn-build" onclick="switchBuildSubTab('build')" style="background:transparent; border:none; color:${activeBuildSubTab === 'build' ? 'var(--accent)' : 'var(--text-sec)'}; border-bottom: 2px solid ${activeBuildSubTab === 'build' ? 'var(--accent)' : 'transparent'}; font-size:14px; font-weight:700; cursor:pointer; padding:6px 12px; transition:all 0.2s;">⚔️ 装備ビルド</button>
    </div>
    
    <!-- サブパネル：スキル -->
    <div id="buildSubPanel-skill" style="display:${activeBuildSubTab === 'skill' ? 'block' : 'none'};">
      <div class="sim-container">
        <div class="sim-ctrl-bar">
          <div class="lvl-ctrl">
            <span class="lvl-label">LEVEL</span>
            <button class="lvl-btn" onclick="adjustHeroLevel(-1)">−</button>
            <span class="lvl-num" id="simHeroLevel">${currentHeroLevel}</span>
            <button class="lvl-btn" onclick="adjustHeroLevel(1)">+</button>
            <input type="range" class="lvl-slider" id="simLevelSlider" min="1" max="100" value="${currentHeroLevel}" oninput="onSimLevelSliderChange()">
          </div>
          <div class="pts-disp">
            SKILL POINTS <strong id="simUsedPoints">0</strong> / <span id="simMaxPoints">29</span>
          </div>
          <button class="rst-btn" onclick="resetSkillPoints()">RESET</button>
        </div>
        
        <div class="sim-body">
          <div class="tree-pane" id="simTreePane"></div>
          <div class="detail-pane" id="simDetailPane"></div>
        </div>
      </div>
    </div>

    <!-- サブパネル：ビルド（新規） -->
    <div id="buildSubPanel-build" style="display:${activeBuildSubTab === 'build' ? 'block' : 'none'};">
      <div style="display:flex; flex-direction:column; gap:16px;">
        <!-- 合計価格表示エリア -->
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-secondary); border:1px solid var(--border-soft); border-radius:10px; padding:10px 16px; gap:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2);">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:12px; color:var(--text-sec); font-weight:700;">💰 装備構成 合計市場価格 (最安値基準):</span>
            <span id="buildTotalPrice" style="font-size:16px; font-weight:bold; color:var(--accent);">未同期</span>
          </div>
        </div>

        <!-- ビルド本体 -->
        <div class="card" style="padding:16px; display:grid; grid-template-columns: 80px 1fr 80px; gap:12px; align-items:stretch; min-height:420px; background:rgba(0,0,0,0.25);">
          <!-- 左側装備列（5スロット） -->
          <div class="build-column" style="justify-content: space-around;">
            <div class="equip-slot" id="eqslot-MAIN_WEAPON" onclick="onEquipSlotClick('MAIN_WEAPON')">
              <span class="slot-label-overlay">MainWpn</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/SWORD_300001.png" onerror="this.src='https://taskbarherowiki.com/icons/SWORD_300001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-HELMET" onclick="onEquipSlotClick('HELMET')">
              <span class="slot-label-overlay">Helmet</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/HELMET_500001.png" onerror="this.src='https://taskbarherowiki.com/icons/HELMET_500001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-GLOVES" onclick="onEquipSlotClick('GLOVES')">
              <span class="slot-label-overlay">Gloves</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/GLOVES_520001.png" onerror="this.src='https://taskbarherowiki.com/icons/GLOVES_520001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-AMULET" onclick="onEquipSlotClick('AMULET')">
              <span class="slot-label-overlay">Amulet</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/AMULET_600001.png" onerror="this.src='https://taskbarherowiki.com/icons/AMULET_600001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-RING" onclick="onEquipSlotClick('RING')">
              <span class="slot-label-overlay">Ring</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/RING_620001.png" onerror="this.src='https://taskbarherowiki.com/icons/RING_620001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
          </div>

          <!-- 中央ヒーロー画像＆アクティブスキル＆ルーンMAXトグル -->
          <div class="build-center-panel" style="display:flex; flex-direction:column; justify-content:space-between; align-items:center; padding:10px 0;">
            <!-- 上部：ルーンMAXトグル -->
            <div class="toggle-switch-wrap" style="background:var(--bg-secondary); border:1px solid var(--border); border-radius:30px; padding:6px 14px; box-shadow:0 2px 8px rgba(0,0,0,0.3);">
              <span>Runes MAX (Global)</span>
              <label class="switch">
                <input type="checkbox" id="runeMaxToggle" onchange="toggleRuneMax(this)" ${applyRuneMax ? 'checked' : ''}>
                <span class="slider-toggle"></span>
              </label>
            </div>

            <!-- 中央：ヒーローポートレート -->
            <img class="build-hero-portrait" src="data/icon_cache/${hero.art}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${hero.art}.png';}else{this.src='data/icon_cache/${hero.icon}.png';}" />

            <!-- 下部：アクティブスキルスロット（2個） -->
            <div class="active-skills-row">
              <div class="hex-slot-wrap">
                <div class="hexagon-slot" id="actskill-0" onclick="openActiveSkillSelector(0)">
                  <img class="hexagon-img" style="opacity: 0.15;" src="data/icon_cache/Passive_MaxHp.png" onerror="this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png'" />
                </div>
                <span class="hex-slot-lbl">Skill 1</span>
              </div>
              <div class="hex-slot-wrap">
                <div class="hexagon-slot" id="actskill-1" onclick="openActiveSkillSelector(1)">
                  <img class="hexagon-img" style="opacity: 0.15;" src="data/icon_cache/Passive_MaxHp.png" onerror="this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png'" />
                </div>
                <span class="hex-slot-lbl">Skill 2</span>
              </div>
            </div>
          </div>

          <!-- 右側装備列（5スロット） -->
          <div class="build-column" style="justify-content: space-around;">
            <div class="equip-slot" id="eqslot-SUB_WEAPON" onclick="onEquipSlotClick('SUB_WEAPON')">
              <span class="slot-label-overlay">SubWpn</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/SHIELD_400001.png" onerror="this.src='https://taskbarherowiki.com/icons/SHIELD_400001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-ARMOR" onclick="onEquipSlotClick('ARMOR')">
              <span class="slot-label-overlay">Armor</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/ARMOR_510001.png" onerror="this.src='https://taskbarherowiki.com/icons/ARMOR_510001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-BOOTS" onclick="onEquipSlotClick('BOOTS')">
              <span class="slot-label-overlay">Boots</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/BOOTS_530001.png" onerror="this.src='https://taskbarherowiki.com/icons/BOOTS_530001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-EARING" onclick="onEquipSlotClick('EARING')">
              <span class="slot-label-overlay">Earing</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/EARING_610001.png" onerror="this.src='https://taskbarherowiki.com/icons/EARING_610001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
            <div class="equip-slot" id="eqslot-BRACER" onclick="onEquipSlotClick('BRACER')">
              <span class="slot-label-overlay">Bracer</span>
              <img class="slot-icon-placeholder" src="data/icon_cache/BRACER_630001.png" onerror="this.src='https://taskbarherowiki.com/icons/BRACER_630001.png'" />
              <div class="slot-sockets-overlay"></div>
            </div>
          </div>
        </div>

        <!-- 装備詳細 ＆ ソケット編集パネル -->
        <div class="card build-detail-pane" id="buildDetailPane" style="display:none;">
          <!-- JSでレンダリング -->
        </div>

        <!-- 最終ステータス表示パネル -->
        <div class="card final-stats-pane" style="background:rgba(0,0,0,0.2);">
          <div class="card-title" style="margin-bottom:8px; border-bottom:1px solid var(--border); padding-bottom:8px;">📊 最終ステータス（合算）</div>
          <div id="finalStatsContent">
            <!-- JSでレンダリング -->
          </div>
        </div>
      </div>
    </div>
  `;

  updateSimulator();
}

function switchBuildSubTab(tab) {
  activeBuildSubTab = tab;
  
  const btnSkill = document.getElementById('sub-tab-btn-skill');
  const btnBuild = document.getElementById('sub-tab-btn-build');
  if (btnSkill) {
    btnSkill.style.color = tab === 'skill' ? 'var(--accent)' : 'var(--text-sec)';
    btnSkill.style.borderBottom = `2px solid ${tab === 'skill' ? 'var(--accent)' : 'transparent'}`;
  }
  if (btnBuild) {
    btnBuild.style.color = tab === 'build' ? 'var(--accent)' : 'var(--text-sec)';
    btnBuild.style.borderBottom = `2px solid ${tab === 'build' ? 'var(--accent)' : 'transparent'}`;
  }
  
  const panelSkill = document.getElementById('buildSubPanel-skill');
  const panelBuild = document.getElementById('buildSubPanel-build');
  if (panelSkill) panelSkill.style.display = tab === 'skill' ? 'block' : 'none';
  if (panelBuild) panelBuild.style.display = tab === 'build' ? 'block' : 'none';
  
  updateSimulator();
}

function updateSimulator() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  let usedPoints = 0;
  const pointsObj = heroSkillPoints[hero.key];
  if (pointsObj) {
    Object.values(pointsObj).forEach(val => {
      usedPoints += val;
    });
  }
  
  const maxPoints = currentHeroLevel;
  
  const simLvlText = document.getElementById('simHeroLevel');
  const simSlider = document.getElementById('simLevelSlider');
  const simUsed = document.getElementById('simUsedPoints');
  const simMax = document.getElementById('simMaxPoints');
  
  if (simLvlText) simLvlText.textContent = currentHeroLevel;
  if (simSlider) simSlider.value = currentHeroLevel;
  if (simUsed) simUsed.textContent = usedPoints;
  if (simMax) simMax.textContent = maxPoints;
  
  if (activeBuildSubTab === 'skill') {
    renderSkillTree(hero, usedPoints, maxPoints);
    renderSkillDetail(hero, usedPoints, maxPoints);
  } else {
    updateBuildTab();
  }

  const totalPriceEl = document.getElementById('buildTotalPrice');
  if (totalPriceEl) {
    const price = calculateTotalBuildPrice();
    if (price === null) {
      totalPriceEl.textContent = '未同期';
      totalPriceEl.style.color = 'var(--text-sec)';
    } else {
      const symbol = getMarketCurrencySymbol();
      totalPriceEl.textContent = `${symbol}${Math.round(price).toLocaleString()}`;
      totalPriceEl.style.color = 'var(--accent)';
    }
  }
  saveBuildData();
}

function getMarketCurrencySymbol() {
  if (typeof marketItemsMap !== 'undefined') {
    const keys = Object.keys(marketItemsMap);
    for (const key of keys) {
      const item = marketItemsMap[key];
      if (item && item.sell_price_text) {
        if (item.sell_price_text.includes('$')) return '$';
        if (item.sell_price_text.includes('¥')) return '¥';
        if (item.sell_price_text.includes('円')) return '円';
      }
    }
  }
  return '¥';
}

function formatCurrency(value, symbol) {
  if (value === null || value === undefined) return '—';
  const sym = symbol || getMarketCurrencySymbol();
  return `${sym}${Math.round(value).toLocaleString()}`;
}

function adjustHeroLevel(delta) {
  const newLvl = Math.max(1, Math.min(100, currentHeroLevel + delta));
  if (newLvl !== currentHeroLevel) {
    currentHeroLevel = newLvl;
    updateSimulator();
  }
}

function onSimLevelSliderChange() {
  const slider = document.getElementById('simLevelSlider');
  if (slider) {
    currentHeroLevel = parseInt(slider.value) || 1;
    updateSimulator();
  }
}

function checkActiveSkillEquipStatus(heroKey, skillNodeKey) {
  const pointsObj = heroSkillPoints[heroKey];
  const pt = pointsObj ? (pointsObj[skillNodeKey] || 0) : 0;
  if (pt === 0 && heroActiveSkills[heroKey]) {
    for (let i = 0; i < 2; i++) {
      if (heroActiveSkills[heroKey][i] && heroActiveSkills[heroKey][i].key === skillNodeKey) {
        heroActiveSkills[heroKey][i] = null;
      }
    }
  }
}

function resetSkillPoints() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  if (heroSkillPoints[hero.key]) {
    Object.keys(heroSkillPoints[hero.key]).forEach(key => {
      heroSkillPoints[hero.key][key] = 0;
    });
  }
  if (heroActiveSkills[hero.key]) {
    heroActiveSkills[hero.key] = [null, null];
  }
  updateSimulator();
}

function renderSkillTree(hero, usedPoints, maxPoints) {
  const treePane = document.getElementById('simTreePane');
  if (!treePane) return;
  
  treePane.innerHTML = '';
  
  if (!hero.tree) return;
  
  hero.tree.forEach((tier, tierIdx) => {
    const isLocked = isTierLocked(hero, tierIdx);
    
    const rowDiv = document.createElement('div');
    rowDiv.className = `tree-row ${isLocked ? 'locked' : ''}`;
    
    const gateDiv = document.createElement('div');
    gateDiv.className = 'row-gate';
    gateDiv.innerHTML = `
      <span class="row-gate-lv">LV</span>
      <span class="row-gate-lv" style="margin-top:2px;">${tier.levelGate}</span>
    `;
    rowDiv.appendChild(gateDiv);
    
    const skillsDiv = document.createElement('div');
    skillsDiv.className = 'row-skills';
    
    tier.nodes.forEach(node => {
      const curLvl = heroSkillPoints[hero.key][node.key] || 0;
      const isSelected = activeSkillNodeKey === node.key;
      const isLearned = curLvl > 0;
      const isMaxed = curLvl >= node.maxLevel;
      
      let statusClass = '';
      if (isSelected) statusClass += ' selected';
      if (isLearned) statusClass += ' learned';
      if (isMaxed) statusClass += ' maxed';
      
      const nodeBox = document.createElement('div');
      nodeBox.className = `skill-icon-box${statusClass}`;
      nodeBox.innerHTML = `
        <div class="skill-img-wrap">
          <img class="skill-img" src="data/icon_cache/${node.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${node.icon}.png';}else{this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png';}" />
        </div>
        <div class="skill-lvl-badge">${curLvl}/${node.maxLevel}</div>
      `;
      
      nodeBox.onclick = () => {
        activeSkillNodeKey = node.key;
        updateSimulator();
      };
      
      nodeBox.oncontextmenu = (e) => {
        e.preventDefault();
        activeSkillNodeKey = node.key;
        refundSkill(hero, node, usedPoints);
      };
      
      skillsDiv.appendChild(nodeBox);
    });
    
    rowDiv.appendChild(skillsDiv);
    treePane.appendChild(rowDiv);
  });
}

function renderSkillDetail(hero, usedPoints, maxPoints) {
  const detailPane = document.getElementById('simDetailPane');
  if (!detailPane) return;
  
  detailPane.innerHTML = '';
  
  let activeNode = null;
  if (hero.tree) {
    hero.tree.forEach(tier => {
      tier.nodes.forEach(node => {
        if (node.key === activeSkillNodeKey) {
          activeNode = node;
        }
      });
    });
  }
  
  if (!activeNode) {
    detailPane.innerHTML = '<div style="font-size:12px; color:var(--text-sec); text-align:center; padding-top:40px;">スキルを選択してください</div>';
    return;
  }
  
  const curLvl = heroSkillPoints[hero.key][activeNode.key] || 0;
  const isPassive = activeNode.kind === 'passive';
  
  let descText = activeNode.desc || '';
  if (isPassive) {
    descText = `各レベルでのステータス上昇値: <strong>${activeNode.perPoint}</strong><br>最大レベル時合計: <strong>${activeNode.total}</strong><br><span style="color:var(--text-sec); font-size:11px;">※パッシブ効果は解放時に自動でステータスへ加算されます。</span>`;
  } else if (activeNode.levelValues && activeNode.levelValues.length > 0) {
    if (curLvl > 0) {
      const activeVal = activeNode.levelValues[curLvl - 1];
      const valStr = activeNode.pct ? `${activeVal}%` : `${activeVal}`;
      if (activeNode.descTemplate) {
        const translatedTemplate = translateHeroText(activeNode.descTemplate);
        descText = translatedTemplate.replace('{0}', valStr);
      } else {
        descText = translateHeroText(activeNode.desc);
      }
    } else {
      descText = translateHeroText(activeNode.desc);
    }
  } else {
    descText = translateHeroText(descText);
  }
  
  // 重複したパーセント記号 (%%) を綺麗にクレンジング
  descText = descText.replace(/%%/g, '%');
  
  let lvlGridHtml = '';
  if (!isPassive && activeNode.levelValues) {
    activeNode.levelValues.forEach((val, i) => {
      const lvlNum = i + 1;
      const valText = activeNode.pct ? `${val}%` : `${val}`;
      const isActiveLvl = curLvl === lvlNum;
      
      lvlGridHtml += `
        <div class="lvl-badge ${isActiveLvl ? 'active-lvl' : ''}">
          Lvl ${lvlNum}
          <strong>${valText}</strong>
        </div>
      `;
    });
  } else if (isPassive) {
    const baseVal = parseFloat(activeNode.perPoint.replace(/[^0-9.-]/g, '')) || 0;
    const suffix = activeNode.perPoint.replace(/[0-9.+-]/g, '');
    const prefix = activeNode.perPoint.startsWith('+') ? '+' : (activeNode.perPoint.startsWith('-') ? '-' : '');
    
    for (let i = 0; i < activeNode.maxLevel; i++) {
      const lvlNum = i + 1;
      const computed = (baseVal * lvlNum);
      const computedStr = Number.isInteger(computed) ? computed : computed.toFixed(1);
      const dispText = `${prefix}${computedStr}${suffix}`;
      const isActiveLvl = curLvl === lvlNum;
      
      lvlGridHtml += `
        <div class="lvl-badge ${isActiveLvl ? 'active-lvl' : ''}">
          Lvl ${lvlNum}
          <strong>${dispText}</strong>
        </div>
      `;
    }
  }
  
  let badgesHtml = '';
  if (!isPassive) {
    if (activeNode.activation) {
      let actText = '';
      if (activeNode.activation.type === 'BASEATTACK_COUNT') {
        actText = `通常攻撃 ${activeNode.activation.value}回ごと`;
      } else if (activeNode.activation.type === 'COOLDOWN') {
        actText = `クールダウン: ${activeNode.activation.value}秒`;
      } else {
        actText = `${translateHeroText(activeNode.activation.type)}: ${activeNode.activation.value}`;
      }
      badgesHtml += `<span class="detail-badge-item accent-badge">${actText}</span>`;
    }
    if (activeNode.range) {
      badgesHtml += `<span class="detail-badge-item">射程 ${activeNode.range}</span>`;
    }
  } else {
    badgesHtml += `<span class="detail-badge-item legend-badge">パッシブ効果</span>`;
    badgesHtml += `<span class="detail-badge-item accent-badge">付与: ${formatStatName(activeNode.stat)}</span>`;
  }
  
  let tagsHtml = '';
  if (!isPassive) {
    if (activeNode.damageType) {
      tagsHtml += `<span class="detail-tag">${translateHeroText(activeNode.damageType)}</span>`;
    }
    if (activeNode.delivery) {
      activeNode.delivery.forEach(del => {
        tagsHtml += `<span class="detail-tag">${translateHeroText(del)}</span>`;
      });
    }
  } else {
    tagsHtml += `<span class="detail-tag">パッシブ</span>`;
    tagsHtml += `<span class="detail-tag">${activeNode.mod}</span>`;
  }
  
  let tierIdx = 0;
  if (hero.tree) {
    hero.tree.forEach((t, idx) => {
      t.nodes.forEach(n => {
        if (n.key === activeNode.key) tierIdx = idx;
      });
    });
  }
  const isLocked = isTierLocked(hero, tierIdx);
  const isMaxed = curLvl >= activeNode.maxLevel;
  const canLearn = !isLocked && !isMaxed && usedPoints < maxPoints;
  const canRefund = canRefundSkill(hero, activeNode.key);
  
  detailPane.innerHTML = `
    <div class="detail-card">
      <div class="detail-hd">
        <div class="detail-icon-wrap" style="border-color:${isPassive ? 'var(--legendary)' : 'var(--rare)'}">
          <img class="detail-icon" src="data/icon_cache/${activeNode.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${activeNode.icon}.png';}else{this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png';}" />
        </div>
        <div class="detail-title-wrap">
          <div class="detail-name">${activeNode.name ? translateHeroText(activeNode.name) : formatStatName(activeNode.stat)}</div>
          <div class="detail-type">${isPassive ? 'パッシブ' : 'アクティブ'} — ${curLvl}/${activeNode.maxLevel}</div>
        </div>
      </div>
      
      <div class="detail-desc">${descText}</div>
      
      <div class="detail-badges">${badgesHtml}</div>
      <div class="detail-tags">${tagsHtml}</div>
      
      <div class="sep" style="margin:8px 0;"></div>
      
      <div style="font-size:11px; color:var(--text-sec); font-weight:700;">レベル効果一覧</div>
      <div class="lvl-grid">${lvlGridHtml}</div>
      
      <div class="detail-actions">
        <button class="action-btn refund-btn" ${!canRefund ? 'disabled' : ''} onclick="refundActiveSkill()">取り消し</button>
        ${isMaxed 
          ? `<button class="action-btn maxed-btn" disabled>最大修得済</button>`
          : `<button class="action-btn learn-btn" ${!canLearn ? 'disabled' : ''} onclick="learnActiveSkill()">修得</button>`
        }
      </div>
    </div>
  `;
}

function getSkillTierGate(hero, skillKey) {
  if (!hero.tree) return 0;
  let gate = 0;
  hero.tree.forEach(tier => {
    tier.nodes.forEach(node => {
      if (node.key === skillKey) {
        gate = tier.levelGate;
      }
    });
  });
  return gate;
}

function isTierLocked(hero, tierIdx) {
  if (tierIdx === 0) return false;
  const tier = hero.tree[tierIdx];
  if (!tier) return true;
  
  if (currentHeroLevel < tier.levelGate) return true;
  
  let prevPoints = 0;
  for (let i = 0; i < tierIdx; i++) {
    const prevTier = hero.tree[i];
    prevTier.nodes.forEach(node => {
      prevPoints += heroSkillPoints[hero.key][node.key] || 0;
    });
  }
  
  if (prevPoints < tier.levelGate) return true;
  return false;
}

function canRefundSkill(hero, nodeKey) {
  const pointsObj = heroSkillPoints[hero.key];
  const curLvl = pointsObj ? (pointsObj[nodeKey] || 0) : 0;
  if (curLvl <= 0) return false;
  
  pointsObj[nodeKey] = curLvl - 1;
  
  let canRefund = true;
  if (hero.tree) {
    for (let i = 0; i < hero.tree.length; i++) {
      const tier = hero.tree[i];
      let hasPointsInTier = false;
      tier.nodes.forEach(n => {
        if ((pointsObj[n.key] || 0) > 0) {
          hasPointsInTier = true;
        }
      });
      
      if (hasPointsInTier && isTierLocked(hero, i)) {
        canRefund = false;
        break;
      }
    }
  }
  
  pointsObj[nodeKey] = curLvl;
  return canRefund;
}

function learnActiveSkill() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  let activeNode = null;
  let tierIdx = 0;
  hero.tree.forEach((tier, idx) => {
    tier.nodes.forEach(node => {
      if (node.key === activeSkillNodeKey) {
        activeNode = node;
        tierIdx = idx;
      }
    });
  });
  
  if (!activeNode) return;
  
  let usedPoints = 0;
  Object.values(heroSkillPoints[hero.key]).forEach(val => {
    usedPoints += val;
  });
  
  const maxPoints = currentHeroLevel;
  const isLocked = isTierLocked(hero, tierIdx);
  const curLvl = heroSkillPoints[hero.key][activeNode.key] || 0;
  
  if (!isLocked && curLvl < activeNode.maxLevel && usedPoints < maxPoints) {
    heroSkillPoints[hero.key][activeNode.key] = curLvl + 1;
    updateSimulator();
  }
}

function refundActiveSkill() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  if (canRefundSkill(hero, activeSkillNodeKey)) {
    const curLvl = heroSkillPoints[hero.key][activeSkillNodeKey] || 0;
    heroSkillPoints[hero.key][activeSkillNodeKey] = curLvl - 1;
    checkActiveSkillEquipStatus(hero.key, activeSkillNodeKey);
    updateSimulator();
  }
}

function refundSkill(hero, node, usedPoints) {
  if (canRefundSkill(hero, node.key)) {
    const curLvl = heroSkillPoints[hero.key][node.key] || 0;
    heroSkillPoints[hero.key][node.key] = curLvl - 1;
    checkActiveSkillEquipStatus(hero.key, node.key);
    updateSimulator();
  }
}

// ── ビルドシミュレーター表示 ──
function getSocketCountForRarity(rarity) {
  if (!rarity) return { decoration: 0, engraving: 0, inscription: 0 };
  const r = rarity.toUpperCase();
  if (r === 'CELESTIAL' || r === 'DIVINE' || r === 'COSMIC') {
    return { decoration: 2, engraving: 2, inscription: 2 };
  }
  if (r === 'BEYOND') {
    return { decoration: 2, engraving: 2, inscription: 1 };
  }
  if (r === 'IMMORTAL') {
    return { decoration: 2, engraving: 1, inscription: 0 };
  }
  if (r === 'LEGENDARY') {
    return { decoration: 2, engraving: 0, inscription: 0 };
  }
  return { decoration: 0, engraving: 0, inscription: 0 };
}

function toggleRuneMax(chk) {
  applyRuneMax = chk.checked;
  updateSimulator();
}

function updateBuildTab() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  const equips = heroEquip[hero.key] || {};
  const sockets = heroSockets[hero.key] || {};
  
  const parts = ['MAIN_WEAPON', 'SUB_WEAPON', 'HELMET', 'ARMOR', 'GLOVES', 'BOOTS', 'AMULET', 'EARING', 'RING', 'BRACER'];
  parts.forEach(part => {
    const el = document.getElementById('eqslot-' + part);
    if (!el) return;
    
    const item = equips[part];
    if (item) {
      el.classList.add('equipped');
      let rColor = '#7a85a8';
      const rarityObj = RARITIES.find(r => r.name.toUpperCase() === item.grade.toUpperCase());
      if (rarityObj) rColor = rarityObj.color;
      el.style.borderColor = rColor;
      
      const img = el.querySelector('.slot-icon-placeholder') || el.querySelector('.slot-icon-equipped');
      if (img) {
        img.className = 'slot-icon-equipped';
        img.src = `data/icon_cache/${item.icon}.png`;
        img.onerror = function() {
          if (!this.dataset.triedFallback) {
            this.dataset.triedFallback = true;
            this.src = `https://taskbarherowiki.com/icons/${item.icon}.png`;
          }
        };
        img.style.opacity = '1';
      }
      
      const socketsOverlay = el.querySelector('.slot-sockets-overlay');
      if (socketsOverlay) {
        socketsOverlay.innerHTML = '';
        const socketCounts = getSocketCountForRarity(item.grade);
        const itemSockets = sockets[part] || [];
        
        let socketIdx = 0;
        for (let i = 0; i < socketCounts.decoration; i++) {
          const isFilled = !!itemSockets[socketIdx];
          const dot = document.createElement('span');
          dot.className = `socket-dot-micro socket-dec ${isFilled ? 'filled' : ''}`;
          if (isFilled) dot.style.color = 'var(--legendary)';
          socketsOverlay.appendChild(dot);
          socketIdx++;
        }
        for (let i = 0; i < socketCounts.engraving; i++) {
          const isFilled = !!itemSockets[socketIdx];
          const dot = document.createElement('span');
          dot.className = `socket-dot-micro socket-eng ${isFilled ? 'filled' : ''}`;
          if (isFilled) dot.style.color = 'var(--accent2)';
          socketsOverlay.appendChild(dot);
          socketIdx++;
        }
        for (let i = 0; i < socketCounts.inscription; i++) {
          const isFilled = !!itemSockets[socketIdx];
          const dot = document.createElement('span');
          dot.className = `socket-dot-micro socket-ins ${isFilled ? 'filled' : ''}`;
          if (isFilled) dot.style.color = 'var(--beyond)';
          socketsOverlay.appendChild(dot);
          socketIdx++;
        }
      }
    } else {
      el.classList.remove('equipped');
      el.style.borderColor = 'var(--border-light)';
      
      const img = el.querySelector('.slot-icon-placeholder') || el.querySelector('.slot-icon-equipped');
      if (img) {
        img.className = 'slot-icon-placeholder';
        img.src = `data/icon_cache/${partIcons[part]}.png`;
        img.onerror = function() {
          if (!this.dataset.triedFallback) {
            this.dataset.triedFallback = true;
            this.src = `https://taskbarherowiki.com/icons/${partIcons[part]}.png`;
          }
        };
        img.style.opacity = '0.25';
      }
      
      const socketsOverlay = el.querySelector('.slot-sockets-overlay');
      if (socketsOverlay) socketsOverlay.innerHTML = '';
    }
  });

  const activeSkills = heroActiveSkills[hero.key] || [];
  for (let idx = 0; idx < 2; idx++) {
    const el = document.getElementById(`actskill-${idx}`);
    if (!el) continue;
    
    const skillNode = activeSkills[idx];
    if (skillNode) {
      el.classList.add('equipped');
      el.innerHTML = `<img class="hexagon-img" src="data/icon_cache/${skillNode.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${skillNode.icon}.png';}" />`;
    } else {
      el.classList.remove('equipped');
      el.innerHTML = `<img class="hexagon-img" style="opacity: 0.15;" src="data/icon_cache/Passive_MaxHp.png" onerror="this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png'" />`;
    }
  }

  renderEquipDetailPane();
  renderFinalStats();
}

function renderEquipDetailPane() {
  const pane = document.getElementById('buildDetailPane');
  if (!pane) return;
  
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) {
    pane.style.display = 'none';
    return;
  }
  
  const equips = heroEquip[hero.key] || {};
  const part = activeEquipDetailPart;
  
  if (!part || !equips[part]) {
    pane.style.display = 'none';
    return;
  }
  
  pane.style.display = 'block';
  const item = equips[part];
  const sockets = heroSockets[hero.key] || {};
  const itemSockets = sockets[part] || [];
  const socketCounts = getSocketCountForRarity(item.grade);
  
  let statsHtml = '';
  if (item.stats) {
    if (item.stats.base) {
      item.stats.base.forEach(s => {
        statsHtml += `<div>• ${formatStatName(s.stat)}: <strong style="color:var(--text-pri);">${s.disp}</strong></div>`;
      });
    }
    if (item.stats.inherent) {
      item.stats.inherent.forEach(s => {
        statsHtml += `<div>• ${formatStatName(s.stat)}: <strong style="color:var(--accent);">${s.disp} (Inherent)</strong></div>`;
      });
    }
  }
  if (item.uniqueMod && item.uniqueMod !== '0' && item.uniqueMod !== 0 && item.uniqueMod !== 'null' && item.uniqueMod !== 'undefined') {
    statsHtml += `<div style="font-size:12px; color:var(--legendary); margin-top:10px; font-style:italic; border-top:1px dashed rgba(255,255,255,0.05); padding-top:6px;">✨ ${formatStatName(item.uniqueMod)}</div>`;
  }
  
  let socketRowsHtml = '';
  let socketIdx = 0;
  
  const addSocketRow = (category, label, socketClass) => {
    const installed = itemSockets[socketIdx];
    let content = '';
    if (installed) {
      let g = installed.selectedGroup;
      if (!g && installed.groups) {
        g = installed.groups.find(group => isGroupApplicable(group, part)) || installed.groups[0];
      }
      if (!g) g = { stat: '', disp: '' };
      
      const maxDisp = formatMaxDisp(g.disp);
      content = `
        <span class="socket-filled-name">${installed.name}</span>
        <span class="socket-filled-val">${maxDisp} (${formatStatName(g.stat)})</span>
      `;
    } else {
      content = `<span class="socket-empty-lbl">スロット空き（クリックして装着）</span>`;
    }
    
    const curIdx = socketIdx;
    socketRowsHtml += `
      <button class="socket-row-btn" onclick="openSocketSelector('${part}', ${curIdx}, '${category}')">
        <span class="socket-color-indicator ${socketClass}"></span>
        <span style="font-size:11px; font-weight:700; color:var(--text-sec); min-width:40px;">${label}</span>
        ${content}
      </button>
    `;
    socketIdx++;
  };
  
  for (let i = 0; i < socketCounts.decoration; i++) {
    addSocketRow('DECORATION', '装飾', 'socket-decoration');
  }
  for (let i = 0; i < socketCounts.engraving; i++) {
    addSocketRow('ENGRAVING', '刻印', 'socket-engraving');
  }
  for (let i = 0; i < socketCounts.inscription; i++) {
    addSocketRow('INSCRIPTION', '碑文', 'socket-inscription');
  }
  
  let rarityColor = '#7a85a8';
  const rarityObj = RARITIES.find(r => r.name.toUpperCase() === item.grade.toUpperCase());
  if (rarityObj) rarityColor = rarityObj.color;
  
  pane.innerHTML = `
    <div class="equip-detail-card">
      <div class="eq-detail-info">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
          <div style="width:40px; height:40px; border:1px solid ${rarityColor}; border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); cursor:pointer;" onclick="showItemDetail(${item.key})" title="Wiki詳細を表示">
            <img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}" style="width:30px; height:30px; object-fit:contain; image-rendering:pixelated;" />
          </div>
          <div>
            <div class="eq-detail-name" style="color:${rarityColor}; cursor:pointer;" onclick="showItemDetail(${item.key})" title="Wiki詳細を表示">${item.name}</div>
            <div style="font-size:10px; color:var(--text-sec); margin-top:2px;">
              <span class="rb" style="font-size:8px; padding:1px 4px; border:1px solid ${rarityColor}30; color:${rarityColor}; background:rgba(255,255,255,0.03);">${item.grade}</span>
              <span style="margin-left:6px;">Lv.${item.level} ${item.gearType}</span>
            </div>
          </div>
          <div style="margin-left:auto; display:flex; gap:8px;">
            <button onclick="openEquipSelector('${part}')" style="padding:5px 10px; font-size:11px; font-weight:bold; background:var(--bg-secondary); border:1px solid var(--border-soft); border-radius:4px; color:var(--text-pri); cursor:pointer; display:flex; align-items:center; gap:4px; transition:background 0.2s;" onmouseover="this.style.background='var(--border-soft)'" onmouseout="this.style.background='var(--bg-secondary)'">
              🔄 装備変更
            </button>
            <button onclick="currentEquipSelectSlot='${part}'; unequipCurrentSlot();" style="padding:5px 10px; font-size:11px; font-weight:bold; background:rgba(255,61,106,0.1); border:1px solid rgba(255,61,106,0.3); border-radius:4px; color:var(--loss); cursor:pointer; display:flex; align-items:center; gap:4px; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,61,106,0.2)'" onmouseout="this.style.background='rgba(255,61,106,0.1)'">
              ✕ 装備解除
            </button>
          </div>
        </div>
        <div class="eq-detail-stats" style="background:rgba(0,0,0,0.15); border:1px solid var(--border-soft); border-radius:8px; padding:10px 14px;">
          ${statsHtml || '<div style="font-style:italic; color:var(--text-faint);">ステータス情報なし</div>'}
        </div>
      </div>
      
      <div class="eq-detail-sockets-wrap">
        <div class="eq-sockets-title">💎 ルーンソケット</div>
        <div class="eq-sockets-list">
          ${socketRowsHtml || '<div style="font-style:italic; color:var(--text-faint); font-size:12px;">ソケットなし</div>'}
        </div>
      </div>
    </div>
  `;
}

function parseStatValue(valStr, statName = '') {
  if (!valStr) return { val: 0, isPercent: false };
  const str = valStr.toString().trim();
  const isPercent = str.includes('%') || (statName && statName.toLowerCase().endsWith('percent'));
  const match = str.match(/([+-]?\d+(?:\.\d+)?)/);
  const val = match ? parseFloat(match[1]) : 0;
  return { val, isPercent };
}

function parseMaxStatValue(valStr, statName = '') {
  if (!valStr) return { val: 0, isPercent: false };
  const str = valStr.toString().trim();
  const isPercent = str.includes('%') || (statName && statName.toLowerCase().endsWith('percent'));
  if (str.includes('~')) {
    const parts = str.split('~');
    const right = parts[1];
    const match = right.match(/([+-]?\d+(?:\.\d+)?)/);
    const val = match ? parseFloat(match[1]) : 0;
    return { val, isPercent };
  }
  const match = str.match(/([+-]?\d+(?:\.\d+)?)/);
  const val = match ? parseFloat(match[1]) : 0;
  return { val, isPercent };
}

function formatMaxDisp(disp) {
  if (!disp) return '';
  const str = disp.toString().trim();
  const isPercent = str.includes('%');
  if (str.includes('~')) {
    const parts = str.split('~');
    const right = parts[1];
    const match = right.match(/([+-]?\d+(?:\.\d+)?)/);
    const val = match ? parseFloat(match[1]) : 0;
    return `+${val}${isPercent ? '%' : ''}`;
  }
  return disp;
}

function getMaterialSlotForPart(part) {
  if (part === 'MAIN_WEAPON' || part === 'SUB_WEAPON') return 'Weapon';
  if (part === 'HELMET' || part === 'ARMOR' || part === 'GLOVES' || part === 'BOOTS') return 'Armor';
  if (part === 'AMULET' || part === 'RING' || part === 'EARING' || part === 'BRACER') return 'Accessory';
  return 'All';
}

function isGroupApplicable(g, part) {
  if (!g.slot) return false;
  if (g.slot.toUpperCase() === 'ALL') return true;
  const matSlot = getMaterialSlotForPart(part);
  return g.slot.toUpperCase() === matSlot.toUpperCase();
}

function mapStatName(name) {
  if (!name) return '';
  const clean = name.toString().replace(/[^a-zA-Z0-9\u3040-\u30ff\u4e00-\u9faf]/g, '').toLowerCase();
  
  if (clean === 'hp' || clean === 'maxhp' || clean === 'maxhppercent' || clean === 'hp増加' || clean === '最大hp') return 'MaxHp';
  if (clean === 'armor' || clean === 'def' || clean === 'defense' || clean === 'armorpercent' || clean === '防御力' || clean === '防御増加' || clean === '防御力増加') return 'Armor';
  if (clean === 'attackdamage' || clean === 'atk' || clean === 'damage' || clean === 'attack' || clean === 'attackdamagepercent' || clean === 'atkpercent' || clean === 'attackpercent' || clean === '攻撃力' || clean === '攻撃増加' || clean === '攻撃力増加') return 'AttackDamage';
  if (clean === 'attackspeed' || clean === 'atkspd' || clean === 'attackspeedpercent' || clean === 'atkspdpercent') return 'AttackSpeed';
  if (clean === 'castspeed' || clean === 'castspeedpercent') return 'CastSpeed';
  if (clean === 'cooldownreduction' || clean === 'cdr') return 'CooldownReduction';
  if (clean === 'criticalchance' || clean === 'critchance' || clean === 'crit') return 'CriticalChance';
  if (clean === 'criticaldamage' || clean === 'critdamage' || clean === 'critdmg') return 'CriticalDamage';
  if (clean === 'movementspeed' || clean === 'movespeed' || clean === 'ms' || clean === '移動速度' || clean === '移動速度増加') return 'MovementSpeed';
  
  if (clean === 'allheroattackdamage' || clean === 'allheroattackdamagepercent') return 'AttackDamage';
  if (clean === 'allheroarmor' || clean === 'allheroarmorpercent') return 'Armor';
  if (clean === 'allheromovespeed') return 'MovementSpeed';
  if (clean === 'allheroattackspeed') return 'AttackSpeed';

  if (name === 'MaxHp' || name === 'Armor' || name === 'AttackDamage' || name === 'AttackSpeed' || 
      name === 'CastSpeed' || name === 'CooldownReduction' || name === 'CriticalChance' || 
      name === 'CriticalDamage' || name === 'MovementSpeed') {
    return name;
  }
  return name;
}

function mapRuneStatName(runeStat) {
  if (!runeStat) return '';
  if (runeStat === 'AllHeroAttackDamage' || runeStat === 'AllHeroAttackDamagePercent') return 'AttackDamage';
  if (runeStat === 'AllHeroArmor' || runeStat === 'AllHeroArmorPercent') return 'Armor';
  if (runeStat === 'AllHeroMoveSpeed') return 'MovementSpeed';
  if (runeStat === 'AllHeroAttackSpeed') return 'AttackSpeed';
  return runeStat;
}

function calculateFinalStats() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return null;

  const stats = {
    MaxHp: { base: 0, flat: 0, pct: 0 },
    Armor: { base: 0, flat: 0, pct: 0 },
    AttackDamage: { base: 0, flat: 0, pct: 0 },
    AttackSpeed: { base: 0, flat: 0, pct: 0 },
    CastSpeed: { base: 0, flat: 0, pct: 0 },
    CooldownReduction: { base: 0, flat: 0, pct: 0 },
    CriticalChance: { base: 0, flat: 0, pct: 0 },
    CriticalDamage: { base: 0, flat: 0, pct: 0 },
    MovementSpeed: { base: 0, flat: 0, pct: 0 },
    AreaOfEffect: { base: 100, flat: 0, pct: 0 },
    IncreaseExpAmount: { base: 100, flat: 0, pct: 0 },
    BlockChance: { base: 0, flat: 0, pct: 0 },
    DodgeChance: { base: 0, flat: 0, pct: 0 },
    DamageReduction: { base: 0, flat: 0, pct: 0 },
    AllElementalResistance: { base: 0, flat: 0, pct: 0 },
    HpLeech: { base: 0, flat: 0, pct: 0 },
    IncreaseProjectileDamage: { base: 0, flat: 0, pct: 0 },
    SkillHealIncrease: { base: 0, flat: 0, pct: 0 },
    DamageAbsorption: { base: 0, flat: 0, pct: 0 },
    SkillDurationIncrease: { base: 0, flat: 0, pct: 0 },
    SkillRangeExpansion: { base: 0, flat: 0, pct: 0 }
  };

  const ensureStat = (sName) => {
    if (!stats[sName]) {
      let baseVal = 0;
      if (sName === 'AreaOfEffect' || sName === 'IncreaseExpAmount') {
        baseVal = 100;
      }
      stats[sName] = { base: baseVal, flat: 0, pct: 0 };
    }
  };

  if (hero.stats) {
    hero.stats.forEach(s => {
      if (stats[s.stat]) {
        const parsed = parseStatValue(s.disp, s.stat);
        stats[s.stat].base = parsed.val;
      }
    });
  }

  const pointsObj = heroSkillPoints[hero.key];
  if (pointsObj && hero.tree) {
    hero.tree.forEach(tier => {
      tier.nodes.forEach(node => {
        const pt = pointsObj[node.key] || 0;
        if (pt > 0 && node.kind === 'passive' && node.stat) {
          const targetStat = mapStatName(node.stat);
          ensureStat(targetStat);
          if (stats[targetStat]) {
            const parsed = parseStatValue(node.perPoint, node.stat);
            const totalVal = parsed.val * pt;
            if (parsed.isPercent) {
              stats[targetStat].pct += totalVal;
            } else {
              stats[targetStat].flat += totalVal;
            }
          }
        }
      });
    });
  }

  const equips = heroEquip[hero.key] || {};
  Object.keys(equips).forEach(part => {
    const item = equips[part];
    if (item && item.stats) {
      if (item.stats.base) {
        item.stats.base.forEach(s => {
          const targetStat = mapStatName(s.stat);
          ensureStat(targetStat);
          if (stats[targetStat]) {
            const parsed = parseStatValue(s.disp, s.stat);
            if (parsed.isPercent) {
              stats[targetStat].pct += parsed.val;
            } else {
              stats[targetStat].flat += parsed.val;
            }
          }
        });
      }
      if (item.stats.inherent) {
        item.stats.inherent.forEach(s => {
          const targetStat = mapStatName(s.stat);
          ensureStat(targetStat);
          if (stats[targetStat]) {
            const parsed = parseStatValue(s.disp, s.stat);
            if (parsed.isPercent) {
              stats[targetStat].pct += parsed.val;
            } else {
              stats[targetStat].flat += parsed.val;
            }
          }
        });
      }
    }
  });

  const sockets = heroSockets[hero.key] || {};
  Object.keys(sockets).forEach(part => {
    const mats = sockets[part] || [];
    mats.forEach(mat => {
      if (mat) {
        if (mat.selectedGroup) {
          const g = mat.selectedGroup;
          const targetStat = mapStatName(g.stat);
          ensureStat(targetStat);
          if (stats[targetStat]) {
            const parsed = parseMaxStatValue(g.disp, g.stat);
            if (parsed.isPercent) {
              stats[targetStat].pct += parsed.val;
            } else {
              stats[targetStat].flat += parsed.val;
            }
          }
        } else if (mat.groups) {
          mat.groups.forEach(g => {
            if (isGroupApplicable(g, part)) {
              const targetStat = mapStatName(g.stat);
              ensureStat(targetStat);
              if (stats[targetStat]) {
                const parsed = parseMaxStatValue(g.disp, g.stat);
                if (parsed.isPercent) {
                  stats[targetStat].pct += parsed.val;
                } else {
                  stats[targetStat].flat += parsed.val;
                }
              }
            }
          });
        }
      }
    });
  });

  if (applyRuneMax && globalRunes && globalRunes.runes) {
    const combatStats = ['MaxHp', 'Armor', 'AttackDamage', 'AttackSpeed', 'CastSpeed', 'CooldownReduction', 'CriticalChance', 'CriticalDamage', 'MovementSpeed'];
    globalRunes.runes.forEach(rune => {
      const targetStat = mapRuneStatName(rune.stat);
      if (combatStats.includes(targetStat)) {
        ensureStat(targetStat);
        if (stats[targetStat] && rune.levels && rune.levels.length > 0) {
          const parsed = parseStatValue(rune.levels[0].value, rune.stat);
          const totalVal = parsed.val * rune.maxLevel;
          if (parsed.isPercent) {
            stats[targetStat].pct += totalVal;
          } else {
            stats[targetStat].flat += totalVal;
          }
        }
      }
    });
  }

  const finalStats = {};
  Object.keys(stats).forEach(k => {
    const base = stats[k].base;
    const flat = stats[k].flat;
    const pct = stats[k].pct;

    let finalVal = 0;
    const isAddType = ['CastSpeed', 'CooldownReduction', 'CriticalChance', 'CriticalDamage', 'BlockChance', 'DodgeChance', 'AreaOfEffect', 'DamageReduction', 'AllElementalResistance', 'HpLeech', 'IncreaseProjectileDamage', 'SkillHealIncrease', 'DamageAbsorption', 'SkillDurationIncrease', 'SkillRangeExpansion'].includes(k) || k.endsWith('Percent');
    if (isAddType) {
      finalVal = base + flat + pct;
    } else {
      finalVal = (base + flat) * (1 + pct / 100);
    }
    finalStats[k] = finalVal;
  });

  // 固有効果の収集
  const uniqueMods = [];
  Object.values(equips).forEach(item => {
    if (item && item.uniqueMod && item.uniqueMod !== '0') {
      uniqueMods.push(item.uniqueMod);
    }
  });
  finalStats._uniqueMods = uniqueMods;

  return finalStats;
}

function getStatBreakdown(k) {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return { base: 0, skill: 0, equip: 0, socket: 0, rune: 0 };
  
  let baseDisp = '0';
  let skillDisp = '0';
  let equipDisp = '0';
  let socketDisp = '0';
  let runeDisp = '0';
  
  if (hero.stats) {
    const s = hero.stats.find(st => st.stat === k);
    if (s) {
      const parsed = parseStatValue(s.disp, s.stat);
      baseDisp = parsed.val + (parsed.isPercent ? '%' : '');
    }
  }
  
  let skillFlat = 0;
  let skillPct = 0;
  const pointsObj = heroSkillPoints[hero.key];
  if (pointsObj && hero.tree) {
    hero.tree.forEach(tier => {
      tier.nodes.forEach(node => {
        const pt = pointsObj[node.key] || 0;
        if (pt > 0 && node.kind === 'passive' && node.stat) {
          const targetStat = mapStatName(node.stat);
          if (targetStat === k) {
            const parsed = parseStatValue(node.perPoint, node.stat);
            const total = parsed.val * pt;
            if (parsed.isPercent) skillPct += total;
            else skillFlat += total;
          }
        }
      });
    });
  }
  if (skillFlat > 0 || skillPct > 0) {
    skillDisp = (skillFlat > 0 ? `+${skillFlat}` : '') + (skillPct > 0 ? `+${skillPct}%` : '');
    if (skillFlat > 0 && skillPct > 0) {
      skillDisp = `+${skillFlat}/+${skillPct}%`;
    }
  }
  
  let eqFlat = 0;
  let eqPct = 0;
  const equips = heroEquip[hero.key] || {};
  Object.values(equips).forEach(item => {
    if (item && item.stats) {
      const allStats = (item.stats.base || []).concat(item.stats.inherent || []);
      allStats.forEach(s => {
        const targetStat = mapStatName(s.stat);
        if (targetStat === k) {
          const parsed = parseStatValue(s.disp, s.stat);
          if (parsed.isPercent) eqPct += parsed.val;
          else eqFlat += parsed.val;
        }
      });
    }
  });
  if (eqFlat > 0 || eqPct > 0) {
    equipDisp = (eqFlat > 0 ? `+${eqFlat}` : '') + (eqPct > 0 ? `+${eqPct}%` : '');
  }
  
  let matFlat = 0;
  let matPct = 0;
  const sockets = heroSockets[hero.key] || {};
  Object.values(sockets).forEach(mats => {
    (mats || []).forEach(mat => {
      if (mat && mat.groups) {
        mat.groups.forEach(g => {
          const targetStat = mapStatName(g.stat);
          if (targetStat === k) {
            const parsed = parseStatValue(g.disp, g.stat);
            if (parsed.isPercent) matPct += parsed.val;
            else matFlat += parsed.val;
          }
        });
      }
    });
  });
  if (matFlat > 0 || matPct > 0) {
    socketDisp = (matFlat > 0 ? `+${matFlat}` : '') + (matPct > 0 ? `+${matPct}%` : '');
  }
  
  let runeFlat = 0;
  let runePct = 0;
  if (applyRuneMax && globalRunes && globalRunes.runes) {
    globalRunes.runes.forEach(rune => {
      const targetStat = mapRuneStatName(rune.stat);
      if (targetStat === k && rune.levels && rune.levels.length > 0) {
        const parsed = parseStatValue(rune.levels[0].value, rune.stat);
        const total = parsed.val * rune.maxLevel;
        if (parsed.isPercent) runePct += total;
        else runeFlat += total;
      }
    });
  }
  if (runeFlat > 0 || runePct > 0) {
    runeDisp = (runeFlat > 0 ? `+${runeFlat}` : '') + (runePct > 0 ? `+${runePct}%` : '');
  }
  
  return { base: baseDisp, skill: skillDisp, equip: equipDisp, socket: socketDisp, rune: runeDisp };
}

function renderFinalStats() {
  const el = document.getElementById('finalStatsContent');
  if (!el) return;
  
  const finalStats = calculateFinalStats();
  if (!finalStats) {
    el.innerHTML = '<div style="color:var(--text-sec); font-size:12px;">データ取得エラー</div>';
    return;
  }
  
  const baseStatKeys = ['MaxHp', 'Armor', 'AttackDamage', 'AttackSpeed', 'CastSpeed', 'CooldownReduction', 'CriticalChance', 'CriticalDamage', 'MovementSpeed'];
  const displayAlwaysKeys = [
    'BlockChance', 'DodgeChance', 'DamageReduction', 'AllElementalResistance',
    'HpLeech', 'IncreaseProjectileDamage', 'SkillHealIncrease', 'DamageAbsorption',
    'SkillDurationIncrease', 'SkillRangeExpansion', 'AreaOfEffect', 'IncreaseExpAmount'
  ];
  const plainStatKeys = baseStatKeys.concat(displayAlwaysKeys);
  
  let html = '';
  
  // 1. 固有効果 (uniqueMod) を一番最初に表示
  if (finalStats._uniqueMods && finalStats._uniqueMods.length > 0) {
    finalStats._uniqueMods.forEach(mod => {
      const dispLabel = `✨ ${formatStatName(mod)}`;
      html += `
        <div class="final-stat-row" style="background: rgba(245, 166, 35, 0.08); border-left: 2px solid var(--legendary); padding-left: 6px;">
          <span class="final-stat-label" style="color: var(--legendary); font-weight: 700;">${dispLabel}</span>
          <span class="final-stat-val" style="color: var(--legendary);">Active</span>
          <span class="final-stat-breakdown">(装備固有効果)</span>
        </div>
      `;
    });
  }
  
  // 2. プレーンな配色で表示するステータス（基礎9ステータス + 常時表示 of 12項目）をその次に表示
  plainStatKeys.forEach(k => {
    const val = finalStats[k];
    const dispLabel = formatStatName(k);
    
    let dispVal = '';
    if (k === 'AttackSpeed' || k === 'CastSpeed') {
      dispVal = (val / 100).toFixed(2);
    } else if (k === 'CriticalDamage') {
      dispVal = `${Math.round(val)}%`;
    } else if (k === 'CooldownReduction' || k === 'CriticalChance') {
      dispVal = `${val.toFixed(1)}%`;
    } else if (k === 'MovementSpeed') {
      dispVal = `${Math.round(val)}`;
    } else {
      const isPct = ['BlockChance', 'DodgeChance', 'AreaOfEffect', 'DamageReduction', 'AllElementalResistance', 'HpLeech', 'IncreaseProjectileDamage', 'SkillHealIncrease', 'DamageAbsorption', 'SkillDurationIncrease', 'SkillRangeExpansion'].includes(k) || k.endsWith('Percent');
      if (isPct) {
        dispVal = `${val.toFixed(1)}%`;
      } else {
        dispVal = `${Math.round(val).toLocaleString()}`;
      }
    }
    
    const bd = getStatBreakdown(k);
    const isModified = bd.equip !== '0' || bd.socket !== '0';
    const overLimitKeys = ['CooldownReduction', 'DodgeChance', 'BlockChance', 'ElementalDodgeChance', 'SpellDodgeChance', 'ElementalBlockChance', 'SpellBlockChance'];
    const isOverLimit = overLimitKeys.includes(k) && val > 75;
    
    let rowStyle = '';
    let valStyle = '';
    if (isModified) {
      rowStyle = 'background: rgba(100, 255, 218, 0.05); border-left: 2px solid var(--accent); padding-left: 8px; border-radius: 0 4px 4px 0; transition: all 0.3s ease;';
      valStyle = 'color: var(--accent); font-weight: 700; text-shadow: 0 0 8px rgba(100, 255, 218, 0.3);';
    }
    if (isOverLimit) {
      valStyle = 'color: var(--loss); font-weight: 700; text-shadow: 0 0 8px rgba(255, 61, 106, 0.4);';
    }
    
    let breakdownText = `(基礎: ${bd.base} / スキル: ${bd.skill} / `;
    if (bd.equip !== '0') {
      breakdownText += `<strong style="color:var(--accent);">装備: ${bd.equip}</strong>`;
    } else {
      breakdownText += `装備: ${bd.equip}`;
    }
    breakdownText += ' / ';
    if (bd.socket !== '0') {
      breakdownText += `<strong style="color:var(--accent2);">マテリアル: ${bd.socket}</strong>`;
    } else {
      breakdownText += `マテリアル: ${bd.socket}`;
    }
    breakdownText += ` / ルーン: ${bd.rune})`;
    
    html += `
      <div class="final-stat-row" style="${rowStyle}">
        <span class="final-stat-label">${dispLabel}</span>
        <span class="final-stat-val" style="${valStyle}">${dispVal}</span>
        <span class="final-stat-breakdown">${breakdownText}</span>
      </div>
    `;
  });
  
  // 3. それ以外の特殊ステータス（値が0ではないもの）を最下部にアクセントカラーで表示
  const otherKeys = Object.keys(finalStats).filter(k => {
    if (k.startsWith('_')) return false;
    if (plainStatKeys.includes(k)) return false;
    // 値が0の場合は表示しない
    return finalStats[k] !== 0;
  });
  
  otherKeys.forEach(k => {
    const val = finalStats[k];
    const dispLabel = formatStatName(k);
    
    let dispVal = '';
    const isPct = ['BlockChance', 'DodgeChance', 'AreaOfEffect', 'DamageReduction', 'AllElementalResistance', 'HpLeech', 'IncreaseProjectileDamage', 'SkillHealIncrease', 'DamageAbsorption', 'SkillDurationIncrease', 'SkillRangeExpansion'].includes(k) || k.endsWith('Percent');
    if (isPct) {
      dispVal = `${val.toFixed(1)}%`;
    } else {
      dispVal = `${Math.round(val).toLocaleString()}`;
    }
    
    const bd = getStatBreakdown(k);
    const breakdownText = `(基礎: ${bd.base} / スキル: ${bd.skill} / 装備: ${bd.equip} / マテリアル: ${bd.socket} / ルーン: ${bd.rune})`;
    
    const overLimitKeys = ['CooldownReduction', 'DodgeChance', 'BlockChance', 'ElementalDodgeChance', 'SpellDodgeChance', 'ElementalBlockChance', 'SpellBlockChance'];
    const isOverLimit = overLimitKeys.includes(k) && val > 75;
    const valColor = isOverLimit ? 'var(--loss)' : 'var(--accent)';
    const valShadow = isOverLimit ? '0 0 8px rgba(255, 61, 106, 0.4)' : 'none';
    
    html += `
      <div class="final-stat-row" style="background: rgba(100, 255, 218, 0.04); border-left: 2px solid var(--accent); padding-left: 6px;">
        <span class="final-stat-label" style="color: var(--accent); font-weight: 700;">${dispLabel}</span>
        <span class="final-stat-val" style="color: ${valColor}; font-weight: 700; text-shadow: ${valShadow};">${dispVal}</span>
        <span class="final-stat-breakdown">${breakdownText}</span>
      </div>
    `;
  });

  // ── ワンパン可能ステージ評価 ──
  if (typeof WIKI_STAGES !== 'undefined' && WIKI_STAGES.length > 0) {
    const difficultyOrder = { 'NORMAL': 1, 'NIGHTMARE': 2, 'HELL': 3, 'TORMENT': 4 };
    const sortedStages = [...WIKI_STAGES].sort((a, b) => {
      const diffA = difficultyOrder[a.difficulty] || 0;
      const diffB = difficultyOrder[b.difficulty] || 0;
      if (diffA !== diffB) return diffA - diffB;
      return a.level - b.level;
    });

    const getDifficultyColor = (diff) => {
      if (diff === 'NORMAL') return '#b0bec5';
      if (diff === 'NIGHTMARE') return '#29b6f6';
      if (diff === 'HELL') return '#ab47bc';
      if (diff === 'TORMENT') return '#ef5350';
      return '#fff';
    };

    const formatStage = (st, dmg) => {
      if (!st) return `<span style="color:var(--text-sec); font-style: italic;">なし (通常攻撃力不足)</span>`;
      const avgHp = Math.round(st.totalHP / st.count);
      const diffColor = getDifficultyColor(st.difficulty);
      return `
        <span style="font-weight: 700; color: #fff;">
          <span style="color: ${diffColor}; font-family: 'Rajdhani', sans-serif; font-weight:700;">[${st.difficulty} ${st.label}]</span> ${st.name} 
          <span style="font-size:11px; color:var(--text-sec); font-weight:normal;">(敵HP: ${avgHp.toLocaleString()})</span>
          <span style="margin-left: 12px; color: var(--accent); font-family: 'Rajdhani', sans-serif;">ダメージ: ${Math.round(dmg).toLocaleString()}</span>
        </span>
      `;
    };

    const atkDmg = finalStats.AttackDamage || 0;
    const critDmg = finalStats.CriticalDamage || 100;
    const normalAtkDmg = atkDmg;
    const critAtkDmg = atkDmg * (critDmg / 100);

    // 通常攻撃の検索
    let highestNormal = null;
    let highestCrit = null;
    sortedStages.forEach(st => {
      const avgHp = st.totalHP / st.count;
      if (normalAtkDmg >= avgHp) highestNormal = st;
      if (critAtkDmg >= avgHp) highestCrit = st;
    });

    // スキルの計算
    const activeSkills = (activeHeroKey && heroActiveSkills[activeHeroKey]) ? heroActiveSkills[activeHeroKey] : [null, null];
    const skillResults = [];

    activeSkills.forEach((node, idx) => {
      if (!node) return;
      const pointsObj = heroSkillPoints[activeHeroKey] || {};
      const lvl = pointsObj[node.key] || 0;
      if (lvl <= 0) return;

      // pct: true のアクティブスキル（ダメージスキル）
      if (node.kind === 'active' && node.pct === true && node.levelValues) {
        const mult = node.levelValues[lvl - 1] || 0;
        if (mult > 0) {
          const sDmg = atkDmg * (mult / 100);
          const sCritDmg = sDmg * (critDmg / 100);

          let highestSkillNormal = null;
          let highestSkillCrit = null;
          sortedStages.forEach(st => {
            const avgHp = st.totalHP / st.count;
            if (sDmg >= avgHp) highestSkillNormal = st;
            if (sCritDmg >= avgHp) highestSkillCrit = st;
          });

          skillResults.push({
            name: node.name,
            lvl: lvl,
            dmg: sDmg,
            critDmg: sCritDmg,
            highestNormal: highestSkillNormal,
            highestCrit: highestSkillCrit
          });
        }
      }
    });

    html += `
      <div class="one-punch-container" style="margin-top: 24px; background: rgba(20, 15, 10, 0.4); border: 1px solid var(--border); border-radius: 8px; padding: 14px; box-shadow: inset 0 0 10px rgba(0,0,0,0.5);">
        <div style="font-size: 14px; font-weight: 700; color: var(--gold); margin-bottom: 12px; display: flex; align-items: center; gap: 6px; font-family: 'Rajdhani', sans-serif; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
          ⚔️ ワンパン可能最高ステージ (One-Punch Kill Stages)
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
          
          <!-- 通常攻撃 (通常ヒット) -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(255,255,255,0.02); border-radius: 4px; border-left: 3px solid #b0bec5;">
            <span style="color: var(--text-sec);">通常攻撃 (通常ヒット)</span>
            <div>${formatStage(highestNormal, normalAtkDmg)}</div>
          </div>

          <!-- 通常攻撃 (クリティカル) -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(255,255,255,0.02); border-radius: 4px; border-left: 3px solid var(--legendary);">
            <span style="color: var(--text-sec);">通常攻撃 (クリティカル)</span>
            <div>${formatStage(highestCrit, critAtkDmg)}</div>
          </div>
    `;

    if (skillResults.length > 0) {
      skillResults.forEach(res => {
        html += `
          <!-- スキル (通常) -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(255,255,255,0.02); border-radius: 4px; border-left: 3px solid var(--accent);">
            <span style="color: var(--text-sec);">スキル: ${res.name} (Lv.${res.lvl})</span>
            <div>${formatStage(res.highestNormal, res.dmg)}</div>
          </div>

          <!-- スキル (クリティカル) -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: rgba(255,255,255,0.02); border-radius: 4px; border-left: 3px solid var(--epic);">
            <span style="color: var(--text-sec);">スキル: ${res.name} (Lv.${res.lvl}) [クリティカル]</span>
            <div>${formatStage(res.highestCrit, res.critDmg)}</div>
          </div>
        `;
      });
    } else {
      html += `
        <div style="padding: 8px; text-align: center; color: var(--text-faint); font-style: italic; background: rgba(255,255,255,0.01); border-radius: 4px;">
          装備中または習得済みのアクティブ攻撃スキルがありません。
        </div>
      `;
    }

    html += `
        </div>
        <div style="margin-top: 8px; font-size: 10px; color: var(--text-faint); text-align: right;">
          ※ 雑魚敵のHPは「ステージ総HP ÷ 敵総数」の平均値で計算しています。
        </div>
      </div>
    `;
  }
  
  el.innerHTML = html;
}

function onEquipSlotClick(part) {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const equips = heroEquip[hero.key] || {};
  
  if (equips[part]) {
    activeEquipDetailPart = part;
    updateSimulator();
  } else {
    openEquipSelector(part);
  }
}

// ── 装備選択モーダル ──
function openEquipSelector(part) {
  currentEquipSelectSlot = part;
  const modal = document.getElementById('equipSelectModal');
  if (!modal) return;
  
  document.getElementById('equipSelectModalTitle').textContent = `${formatPartName(part)}を選択`;
  document.getElementById('equipSelectSearchInput').value = '';
  
  modal.style.display = 'flex';
  filterEquipSelectList();
}

function closeEquipSelectModal() {
  const modal = document.getElementById('equipSelectModal');
  if (modal) modal.style.display = 'none';
  currentEquipSelectSlot = null;
}

function formatPartName(part) {
  if (part === 'MAIN_WEAPON') return 'メイン武器';
  if (part === 'SUB_WEAPON') return 'サブ武器';
  if (part === 'HELMET') return '兜';
  if (part === 'ARMOR') return '鎧';
  if (part === 'GLOVES') return '手袋';
  if (part === 'BOOTS') return '靴';
  if (part === 'AMULET') return 'アミュレット';
  if (part === 'EARING') return 'イヤリング';
  if (part === 'RING') return '指輪';
  if (part === 'BRACER') return '腕輪';
  return part;
}

function filterEquipSelectList() {
  const container = document.getElementById('equipSelectListContent');
  if (!container) return;
  
  const query = document.getElementById('equipSelectSearchInput').value.toLowerCase().trim();
  const part = currentEquipSelectSlot;
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  const list = globalItems.filter(item => {
    if (item.type !== 'GEAR') return false;
    if (!item.parts || !item.parts.includes(part)) return false;
    
    const isWeapon = (part === 'MAIN_WEAPON' || part === 'SUB_WEAPON');
    if (isWeapon && item.classes && item.classes.length > 0 && !item.classes.includes(hero.class)) return false;
    
    if (query && !item.name.toLowerCase().includes(query)) return false;
    return true;
  });
  
  list.sort((a, b) => {
    const favA = favoriteItems.has(String(a.key));
    const favB = favoriteItems.has(String(b.key));
    if (favA !== favB) return favA ? -1 : 1;

    const rarityOrder = ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];
    const rA = rarityOrder.indexOf(a.grade.toUpperCase());
    const rB = rarityOrder.indexOf(b.grade.toUpperCase());
    if (rA !== rB) return rB - rA;
    return (b.level || 0) - (a.level || 0);
  });
  
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-sec); font-size:12px;">該当する装備がありません</div>';
    return;
  }
  
  const equips = heroEquip[hero.key] || {};
  const currentlyEquipped = equips[part];
  
  list.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.className = 'bd-row';
    itemCard.style.cursor = 'pointer';
    itemCard.style.marginBottom = '6px';
    itemCard.style.transition = 'all 0.2s';
    
    const rarityColor = getGradeColor(item.grade);
    
    const isEquipped = currentlyEquipped && currentlyEquipped.key === item.key;
    if (isEquipped) {
      itemCard.style.background = 'rgba(100,255,218,0.06)';
      itemCard.style.borderColor = 'var(--accent)';
    }
    
    let statSum = '';
    if (item.stats) {
      const all = (item.stats.base || []).concat(item.stats.inherent || []);
      statSum = all.map(s => `${formatStatName(s.stat)} ${s.disp}`).join(', ');
    }
    
    const iconWrapper = document.createElement('div');
    iconWrapper.style.width = '36px';
    iconWrapper.style.height = '36px';
    iconWrapper.style.border = `1px solid ${rarityColor}`;
    iconWrapper.style.borderRadius = '6px';
    iconWrapper.style.display = 'flex';
    iconWrapper.style.alignItems = 'center';
    iconWrapper.style.justifyContent = 'center';
    iconWrapper.style.background = 'var(--bg-secondary)';
    iconWrapper.style.flexShrink = '0';
    iconWrapper.style.cursor = 'pointer';
    iconWrapper.title = 'クリックで詳細を表示';
    iconWrapper.innerHTML = `<img src="data/icon_cache/${item.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${item.icon}.png';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" />`;
    
    iconWrapper.onclick = (e) => {
      e.stopPropagation();
      showItemDetail(item.key);
    };

    const leftDiv = document.createElement('div');
    leftDiv.className = 'bd-left';
    leftDiv.style.flex = '1';
    leftDiv.style.minWidth = '0';
    leftDiv.style.gap = '10px';
    leftDiv.appendChild(iconWrapper);

    const infoDiv = document.createElement('div');
    infoDiv.style.flex = '1';
    infoDiv.style.minWidth = '0';
    const isFav = favoriteItems.has(String(item.key));
    infoDiv.innerHTML = `
      <div style="font-size:13px; font-weight:700; color:${rarityColor}; display:flex; align-items:center; gap:8px;">
        <span style="color:${rarityColor};">${item.name}</span>
        <span style="font-size:9px; color:var(--text-sec); font-weight:normal;">Lv.${item.level}</span>
        ${isFav ? '<span style="color:#ffbb00; font-size:14px; line-height:1;" title="お気に入り">★</span>' : ''}
        ${isEquipped ? '<span style="font-size:8px; background:var(--accent); color:#101424; padding:0 4px; border-radius:3px; font-weight:bold;">装備中</span>' : ''}
      </div>
      <div style="font-size:10px; color:var(--text-sec); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; margin-top:2px;">
        ${statSum || '追加効果なし'}
      </div>
    `;
    leftDiv.appendChild(infoDiv);
    itemCard.appendChild(leftDiv);
    
    itemCard.onclick = () => selectEquipItem(item);
    container.appendChild(itemCard);
  });
}

function selectEquipItem(item) {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const part = currentEquipSelectSlot;
  
  if (!heroEquip[hero.key]) heroEquip[hero.key] = {};
  heroEquip[hero.key][part] = item;
  
  if (!heroSockets[hero.key]) heroSockets[hero.key] = {};
  const socketCounts = getSocketCountForRarity(item.grade);
  const totalSockets = socketCounts.decoration + socketCounts.engraving + socketCounts.inscription;
  heroSockets[hero.key][part] = new Array(totalSockets).fill(null);
  
  activeEquipDetailPart = part;
  
  closeEquipSelectModal();
  updateSimulator();
}

function unequipCurrentSlot() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const part = currentEquipSelectSlot;
  
  if (heroEquip[hero.key]) {
    delete heroEquip[hero.key][part];
  }
  if (heroSockets[hero.key]) {
    delete heroSockets[hero.key][part];
  }
  
  if (activeEquipDetailPart === part) {
    activeEquipDetailPart = null;
  }
  
  closeEquipSelectModal();
  updateSimulator();
}

// ── ルーンソケット選択モーダル ──
function openSocketSelector(part, socketIdx, category) {
  currentSocketSelectSlot = { part, index: socketIdx, category };
  const modal = document.getElementById('socketSelectModal');
  if (!modal) return;
  
  document.getElementById('socketSelectModalTitle').textContent = `ルーン（マテリアル - ${category === 'DECORATION' ? '装飾' : (category === 'ENGRAVING' ? '刻印' : '碑文')}）を選択`;
  document.getElementById('socketSelectSearchInput').value = '';
  
  modal.style.display = 'flex';
  filterSocketSelectList();
}

function closeSocketSelectModal() {
  const modal = document.getElementById('socketSelectModal');
  if (modal) modal.style.display = 'none';
  currentSocketSelectSlot = null;
}

function filterSocketSelectList() {
  const container = document.getElementById('socketSelectListContent');
  if (!container) return;
  
  const searchRow = document.querySelector('#socketSelectModal .search-row');
  if (searchRow) searchRow.style.display = 'block';
  
  const query = document.getElementById('socketSelectSearchInput').value.toLowerCase().trim();
  const selectInfo = currentSocketSelectSlot;
  if (!selectInfo) return;
  
  const list = globalEffects.filter(eff => {
    if (eff.category !== selectInfo.category) return false;
    if (query) {
      const nameMatch = eff.name && eff.name.toLowerCase().includes(query);
      const statMatch = eff.groups && eff.groups.some(g => g.stat.toLowerCase().includes(query) || (g.disp && g.disp.toLowerCase().includes(query)));
      if (!nameMatch && !statMatch) return false;
    }
    return true;
  });
  
  list.sort((a, b) => {
    const favA = favoriteItems.has(String(a.key));
    const favB = favoriteItems.has(String(b.key));
    if (favA !== favB) return favA ? -1 : 1;

    const rarityOrder = ['COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'IMMORTAL', 'ARCANA', 'BEYOND', 'CELESTIAL', 'DIVINE', 'COSMIC'];
    const rA = rarityOrder.indexOf(a.grade.toUpperCase());
    const rB = rarityOrder.indexOf(b.grade.toUpperCase());
    return rB - rA;
  });
  
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-sec); font-size:12px;">該当するマテリアルがありません</div>';
    return;
  }
  
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  const sockets = heroSockets[hero.key] || {};
  const partSockets = sockets[selectInfo.part] || [];
  const currentlyInstalled = partSockets[selectInfo.index];
  
  list.forEach(eff => {
    const itemCard = document.createElement('div');
    itemCard.className = 'bd-row';
    itemCard.style.cursor = 'pointer';
    itemCard.style.marginBottom = '6px';
    itemCard.style.transition = 'all 0.2s';
    
    const rarityColor = getGradeColor(eff.grade);
    
    const isInstalled = currentlyInstalled && currentlyInstalled.key === eff.key;
    if (isInstalled) {
      itemCard.style.background = 'rgba(100,255,218,0.06)';
      itemCard.style.borderColor = 'var(--accent)';
    }
    
    const applicable = eff.groups ? eff.groups.filter(g => isGroupApplicable(g, selectInfo.part)) : [];
    
    let effectsText = '';
    if (applicable.length > 0) {
      effectsText = applicable.map(g => `${formatMaxDisp(g.disp)} (${formatStatName(g.stat)})`).join(' / ');
    } else if (eff.groups && eff.groups[0]) {
      effectsText = `${formatMaxDisp(eff.groups[0].disp)} (${formatStatName(eff.groups[0].stat)})`;
    }
    
    const isFav = favoriteItems.has(String(eff.key));
    itemCard.innerHTML = `
      <div class="bd-left" style="flex:1; min-width:0; gap:10px;">
        <div style="width:36px; height:36px; border:1px solid ${rarityColor}; border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); shrink-0;">
          <img src="data/icon_cache/${eff.icon || 'Passive_MaxHp'}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${eff.icon || 'Passive_MaxHp'}.png';}else{this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" />
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:13px; font-weight:700; color:${rarityColor}; display:flex; align-items:center; gap:8px;">
            <span style="color:${rarityColor};">${eff.name}</span>
            <span style="font-size:8px; background:rgba(255,255,255,0.03); color:${rarityColor}; border:1px solid ${rarityColor}30; padding:1px 4px; border-radius:2px;">${eff.grade}</span>
            ${isFav ? '<span style="color:#ffbb00; font-size:14px; line-height:1;" title="お気に入り">★</span>' : ''}
            ${isInstalled ? '<span style="font-size:8px; background:var(--accent); color:#101424; padding:0 4px; border-radius:3px; font-weight:bold;">装着中</span>' : ''}
          </div>
          <div style="font-size:10px; color:var(--text-sec); margin-top:2px;">
            効果: <strong style="color:var(--accent);">${effectsText || '効果なし'}</strong>
            ${applicable.length > 1 ? ' <span style="font-size:9px; color:var(--text-faint);">(クリック後効果を選択)</span>' : ''}
          </div>
        </div>
      </div>
    `;
    
    itemCard.onclick = () => {
      if (applicable.length > 1) {
        renderSocketGroupSelectList(eff, applicable);
      } else {
        selectSocketMaterial(eff, applicable[0] || (eff.groups && eff.groups[0]));
      }
    };
    container.appendChild(itemCard);
  });
}

function renderSocketGroupSelectList(eff, applicableGroups) {
  const container = document.getElementById('socketSelectListContent');
  if (!container) return;
  
  const searchRow = document.querySelector('#socketSelectModal .search-row');
  if (searchRow) searchRow.style.display = 'none';
  
  document.getElementById('socketSelectModalTitle').textContent = `効果を選択: ${eff.name}`;
  container.innerHTML = '';
  
  const backCard = document.createElement('div');
  backCard.className = 'bd-row';
  backCard.style.cursor = 'pointer';
  backCard.style.marginBottom = '12px';
  backCard.style.background = 'rgba(255,255,255,0.05)';
  backCard.innerHTML = `
    <div style="font-size:13px; font-weight:700; color:var(--text-sec); display:flex; align-items:center; gap:8px; width:100%; justify-content:center;">
      <span>🔙 マテリアル選択に戻る</span>
    </div>
  `;
  backCard.onclick = () => {
    document.getElementById('socketSelectModalTitle').textContent = `ルーン（マテリアル - ${eff.category === 'DECORATION' ? '装飾' : (eff.category === 'ENGRAVING' ? '刻印' : '碑文')}）を選択`;
    filterSocketSelectList();
  };
  container.appendChild(backCard);
  
  const rarityColor = getGradeColor(eff.grade);
  
  applicableGroups.forEach(g => {
    const card = document.createElement('div');
    card.className = 'bd-row';
    card.style.cursor = 'pointer';
    card.style.marginBottom = '6px';
    card.style.transition = 'all 0.2s';
    
    const maxDisp = formatMaxDisp(g.disp);
    
    card.innerHTML = `
      <div class="bd-left" style="flex:1; min-width:0; gap:10px;">
        <div style="width:36px; height:36px; border:1px solid ${rarityColor}; border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); shrink-0;">
          <img src="data/icon_cache/${eff.icon || 'Passive_MaxHp'}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${eff.icon || 'Passive_MaxHp'}.png';}else{this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" />
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:13px; font-weight:700; color:${rarityColor};">
            <span style="color:${rarityColor};">${eff.name} - 効果適用</span>
          </div>
          <div style="font-size:11px; color:var(--text-pri); margin-top:2px;">
            <strong style="color:var(--accent);">${maxDisp}</strong> ${formatStatName(g.stat)}
          </div>
        </div>
      </div>
    `;
    card.onclick = () => selectSocketMaterial(eff, g);
    container.appendChild(card);
  });
}

function selectSocketMaterial(eff, selectedGroup) {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const selectInfo = currentSocketSelectSlot;
  if (!selectInfo) return;
  
  if (!heroSockets[hero.key]) heroSockets[hero.key] = {};
  if (!heroSockets[hero.key][selectInfo.part]) {
    const equips = heroEquip[hero.key] || {};
    const item = equips[selectInfo.part];
    if (item) {
      const socketCounts = getSocketCountForRarity(item.grade);
      const totalSockets = socketCounts.decoration + socketCounts.engraving + socketCounts.inscription;
      heroSockets[hero.key][selectInfo.part] = new Array(totalSockets).fill(null);
    } else {
      return;
    }
  }
  
  const socketData = {
    key: eff.key,
    name: eff.name,
    icon: eff.icon,
    grade: eff.grade,
    category: eff.category,
    groups: eff.groups,
    selectedGroup: selectedGroup
  };
  
  heroSockets[hero.key][selectInfo.part][selectInfo.index] = socketData;
  
  closeSocketSelectModal();
  updateSimulator();
}

function removeSocketCurrent() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const selectInfo = currentSocketSelectSlot;
  if (!selectInfo) return;
  
  if (heroSockets[hero.key] && heroSockets[hero.key][selectInfo.part]) {
    heroSockets[hero.key][selectInfo.part][selectInfo.index] = null;
  }
  
  closeSocketSelectModal();
  updateSimulator();
}

// ── アクティブスキル装備モーダル ──
function openActiveSkillSelector(idx) {
  currentActiveSkillSelectIdx = idx;
  const modal = document.getElementById('activeSkillSelectModal');
  if (!modal) return;
  
  modal.style.display = 'flex';
  renderActiveSkillSelectList();
}

function closeActiveSkillSelectModal() {
  const modal = document.getElementById('activeSkillSelectModal');
  if (modal) modal.style.display = 'none';
  currentActiveSkillSelectIdx = null;
}

function renderActiveSkillSelectList() {
  const container = document.getElementById('activeSkillSelectListContent');
  if (!container) return;
  
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  
  const pointsObj = heroSkillPoints[hero.key] || {};
  const activeSkills = heroActiveSkills[hero.key] || [];
  
  const learnedActives = [];
  if (hero.tree) {
    hero.tree.forEach(tier => {
      tier.nodes.forEach(node => {
        const pt = pointsObj[node.key] || 0;
        if (node.kind === 'active' && pt > 0) {
          learnedActives.push(node);
        }
      });
    });
  }
  
  container.innerHTML = '';
  
  if (learnedActives.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:20px; color:var(--text-sec); font-size:12px;">
        現在解放されているアクティブスキルがありません。<br>
        <span style="color:var(--accent2); font-weight:700;">先に「🛠️ スキル」タブでアクティブスキルにポイントを振ってください。</span>
      </div>
    `;
    return;
  }
  
  const currentSkill = activeSkills[currentActiveSkillSelectIdx];
  
  learnedActives.forEach(node => {
    const itemCard = document.createElement('div');
    itemCard.className = 'bd-row';
    itemCard.style.cursor = 'pointer';
    itemCard.style.marginBottom = '6px';
    itemCard.style.transition = 'all 0.2s';
    
    const isEquipped = currentSkill && currentSkill.key === node.key;
    if (isEquipped) {
      itemCard.style.background = 'rgba(100,255,218,0.06)';
      itemCard.style.borderColor = 'var(--accent)';
    }
    
    const otherIdx = currentActiveSkillSelectIdx === 0 ? 1 : 0;
    const isEquippedOther = activeSkills[otherIdx] && activeSkills[otherIdx].key === node.key;
    
    itemCard.innerHTML = `
      <div class="bd-left" style="flex:1; min-width:0; gap:10px;">
        <div style="width:36px; height:36px; border:1px solid var(--border); border-radius:6px; display:flex; align-items:center; justify-content:center; background:var(--bg-secondary); shrink-0;">
          <img src="data/icon_cache/${node.icon}.png" onerror="if(!this.dataset.triedFallback){this.dataset.triedFallback=true; this.src='https://taskbarherowiki.com/icons/${node.icon}.png';}else{this.src='https://taskbarherowiki.com/icons/Passive_MaxHp.png';}" style="width:26px; height:26px; object-fit:contain; image-rendering:pixelated;" />
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:13px; font-weight:700; color:var(--text-pri); display:flex; align-items:center; gap:8px;">
            <span>${node.name || formatStatName(node.stat)}</span>
            <span style="font-size:10px; color:var(--accent);">Lvl ${pointsObj[node.key]}/${node.maxLevel}</span>
            ${isEquipped ? '<span style="font-size:8px; background:var(--accent); color:#101424; padding:0 4px; border-radius:3px; font-weight:bold;">装備中</span>' : ''}
            ${isEquippedOther ? '<span style="font-size:8px; background:rgba(255,255,255,0.08); color:var(--text-sec); padding:0 4px; border-radius:3px; font-weight:bold;">別枠で装備中</span>' : ''}
          </div>
          <div style="font-size:10px; color:var(--text-sec); margin-top:2px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
            ${node.desc || 'アクティブスキル'}
          </div>
        </div>
      </div>
    `;
    
    itemCard.onclick = () => selectActiveSkill(node, isEquippedOther);
    container.appendChild(itemCard);
  });
}

function selectActiveSkill(node, isEquippedOther) {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const idx = currentActiveSkillSelectIdx;
  
  if (!heroActiveSkills[hero.key]) heroActiveSkills[hero.key] = [null, null];
  
  if (isEquippedOther) {
    const otherIdx = idx === 0 ? 1 : 0;
    heroActiveSkills[hero.key][otherIdx] = null;
  }
  
  heroActiveSkills[hero.key][idx] = node;
  
  closeActiveSkillSelectModal();
  updateSimulator();
}

function unequipActiveSkillCurrent() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return;
  const idx = currentActiveSkillSelectIdx;
  
  if (heroActiveSkills[hero.key]) {
    heroActiveSkills[hero.key][idx] = null;
  }
  
  closeActiveSkillSelectModal();
  updateSimulator();
}



function calculateTotalBuildPrice() {
  const hero = globalHeroes.find(h => h.key === activeHeroKey);
  if (!hero) return null;
  
  let totalPrice = 0;
  let hasData = false;
  
  // 装備の価格
  const equips = heroEquip[hero.key] || {};
  Object.keys(equips).forEach(part => {
    const item = equips[part];
    if (item) {
      const mData = getMarketDataForItem(item);
      if (mData) {
        if (mData.sell_price) totalPrice += mData.sell_price;
        hasData = true;
      }
    }
  });
  
  // ルーン（ソケット）の価格
  const sockets = heroSockets[hero.key] || {};
  Object.keys(sockets).forEach(part => {
    const mats = sockets[part] || [];
    mats.forEach(mat => {
      if (mat) {
        const mData = getMarketDataForItem(mat);
        if (mData) {
          if (mData.sell_price) totalPrice += mData.sell_price;
          hasData = true;
        }
      }
    });
  });
  
  return hasData ? totalPrice : null;
}

function showToastMessage(msg, isError = false) {
  alert(msg);
}



