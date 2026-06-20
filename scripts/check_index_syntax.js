const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

// A very basic check: run regular expression on <script> tags and test parsing their JS
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;
let match;
let count = 0;

console.log("Checking inline scripts syntax...");
while ((match = scriptRegex.exec(content)) !== null) {
  const js = match[1];
  if (js.trim().length === 0) continue;
  count++;
  try {
    new Function(js);
  } catch (err) {
    console.error(`Syntax error in script block #${count}:`, err.message);
    // Find approximate line number
    const offset = match.index;
    const linesUpToOffset = content.slice(0, offset).split('\n').length;
    console.error(`Approximate starting line in index.html: ${linesUpToOffset}`);
    process.exit(1);
  }
}

console.log(`Successfully validated ${count} inline script blocks. No syntax errors found!`);
