const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("Starting JS load-time runtime error test...");

// Mock browser environment
const sandbox = {
  window: {},
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  Promise: Promise,
  Math: Math,
  Date: Date,
  JSON: JSON,
  Array: Array,
  Object: Object,
  String: String,
  Number: Number,
  RegExp: RegExp,
  Error: Error,
  TypeError: TypeError,
  ReferenceError: ReferenceError,
  Map: Map,
  Set: Set,
  localStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  }
};

// Circular reference
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.global = sandbox;
sandbox.addEventListener = () => {};

sandbox.document = {
  documentElement: { lang: "" },
  getElementById: (id) => {
    return {
      style: {},
      addEventListener: () => {},
      appendChild: () => {},
      removeChild: () => {},
      getContext: () => ({
        clearRect: () => {},
        fillRect: () => {},
        fillText: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        stroke: () => {}
      }),
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false,
        toggle: () => {}
      },
      setAttribute: () => {},
      removeAttribute: () => {},
      getAttribute: () => null,
      childNodes: [],
      children: [],
      innerHTML: "",
      textContent: "",
      value: "",
      disabled: false,
      dataset: {},
      options: new Proxy([], {
        get: (target, prop) => {
          if (typeof prop === 'symbol') {
            return target[prop];
          }
          if (typeof prop === 'string' && !isNaN(prop)) {
            const idx = parseInt(prop, 10);
            if (!target[idx]) {
              target[idx] = { textContent: "", value: "1" };
            }
            return target[idx];
          }
          if (prop === 'length') {
            return target.length || 10;
          }
          return target[prop];
        }
      })
    };
  },
  createElement: (tag) => {
    return {
      style: {},
      addEventListener: () => {},
      appendChild: () => {},
      removeChild: () => {},
      getContext: () => ({}),
      classList: { add: () => {}, remove: () => {} },
      setAttribute: () => {},
      innerHTML: "",
      textContent: ""
    };
  },
  addEventListener: () => {},
  querySelectorAll: () => [],
  querySelector: () => null,
  body: {
    appendChild: () => {},
    style: {}
  }
};

sandbox.navigator = {
  userAgent: "Mozilla/5.0 NodeTest",
  language: "ja"
};

sandbox.location = {
  search: "?tab=craft",
  href: "http://localhost/",
  protocol: "http:"
};

sandbox.URLSearchParams = class {
  constructor(query) {
    this.query = query;
  }
  get(key) {
    if (key === 'tab') return 'craft';
    return null;
  }
};

sandbox.Audio = class {
  constructor() {
    this.play = () => {};
    this.pause = () => {};
  }
};

sandbox.Chart = class {
  constructor() {
    this.destroy = () => {};
    this.update = () => {};
  }
};

// Create a context
const context = vm.createContext(sandbox);

// Helper to load file in context
function loadJS(filename) {
  const filePath = path.join(__dirname, '../js', filename);
  const code = fs.readFileSync(filePath, 'utf8');
  console.log(`Executing ${filename} in VM context...`);
  try {
    vm.runInContext(code, context, { filename });
    console.log(`  [OK] ${filename} loaded successfully.`);
  } catch (err) {
    console.error(`  [ERROR] Failed to load ${filename}:`);
    console.error(err.stack);
    process.exit(1);
  }
}

// Order of execution in index.html
loadJS('ui-core.js');
loadJS('market.js');
loadJS('sim-synthesis.js');
loadJS('sim-craft.js');
loadJS('sim-map.js');

// We don't load app.js because it triggers fetch/DOMContentLoaded immediately,
// which we can test separately or verify. But let's load it to see if it syntax loads.
// Note: DOMContentLoaded event won't fire in vm automatically, so it's safe to load.
loadJS('app.js');

console.log("All files loaded successfully in VM environment without throwing runtime errors at load-time!");

console.log("Simulating DOMContentLoaded initialization sequence...");

// Mock WIKI databases as empty arrays/objects
context.WIKI_META = { grades: [], classes: [], gearTypes: [], parts: [], types: [], effectStats: [], effectSlots: [], effectCategories: [], acts: [], difficulties: [], gearLevels: [], chestGearLevels: [], counts: {} };
context.WIKI_ITEMS = [];
context.WIKI_EFFECTS = [];
context.WIKI_CHESTS = [];
context.WIKI_HEROES = [];
context.WIKI_RUNES = [];
context.WIKI_STAGES = [];
context.WIKI_OFFERING_LOOT = { coins: [] };

context.globalMeta = context.WIKI_META;
context.globalItems = context.WIKI_ITEMS;
context.globalEffects = context.WIKI_EFFECTS;
context.globalChests = context.WIKI_CHESTS;
context.globalHeroes = context.WIKI_HEROES;
context.globalRunes = context.WIKI_RUNES;
context.globalOfferingLoot = context.WIKI_OFFERING_LOOT;

// Mock DEFAULT_MARKET_DATA and MARKET_DB
context.DEFAULT_MARKET_DATA = [];
context.MARKET_DB = {};

// Call the initialization functions one by one
const initFunctions = [
  'initMarketCache',
  'initItemsDb',
  'initEffects',
  'initChests',
  'loadBuildData',
  'initHeroes',
  'initFarm',
  'initCraft',
  'updateLangUI',
  'initUpdateTimer',
  'updateMultiSynthLevelOptions'
];

for (const fn of initFunctions) {
  console.log(`Calling ${fn}()...`);
  try {
    if (typeof context[fn] === 'function') {
      context[fn]();
      console.log(`  [OK] ${fn}() executed successfully.`);
    } else {
      console.warn(`  [WARNING] ${fn} is not defined in context!`);
    }
  } catch (err) {
    console.error(`  [ERROR] Failed during ${fn}():`);
    console.error(err.stack);
    process.exit(1);
  }
}

console.log("All initialization functions executed successfully!");
process.exit(0);
