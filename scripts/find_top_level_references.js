const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '../js');
const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));

console.log("Analyzing top-level variable usage in partitioned JS files...");

// A simple lexical parser to check if WIKI_ or global variables are referenced at top-level (outside function declarations)
for (const file of files) {
  const filePath = path.join(jsDir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  const lines = code.split('\n');
  
  let inFunctionDepth = 0;
  let inObjectLiteralDepth = 0; // sometimes config objects are top-level
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track function blocks and object blocks very basic
    // (a robust parser would use Babel/Acorn, but we can do a simple check)
    // Let's count open/close braces
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    
    // We also check for WIKI_ or global
    const hasWikiRef = line.includes('WIKI_');
    const hasGlobalRef = line.includes('globalMeta') || line.includes('globalItems') || line.includes('globalEffects') || line.includes('globalChests') || line.includes('globalHeroes') || line.includes('globalRunes') || line.includes('globalOfferingLoot');
    
    if ((hasWikiRef || hasGlobalRef) && inFunctionDepth === 0) {
      // It might be a top-level assignment or reference!
      // But wait, if it's var globalMeta; or window.globalMeta = ..., that's fine.
      // But if it's like const something = WIKI_META.something; or using it in a top-level array, that will crash if undefined.
      console.log(`[Potential Issue] ${file} Line ${i + 1}: ${trimmed}`);
    }
    
    // adjust function/block depth
    // Note: this brace counting is very rough but helps
    inFunctionDepth += (openBraces - closeBraces);
    if (inFunctionDepth < 0) inFunctionDepth = 0;
  }
}
