const fs = require('fs');
const path = require('path');
const vm = require('vm');

const jsDir = path.join(__dirname, '../js');
const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));

console.log("Checking syntax of partitioned JS files...");
let hasError = false;

for (const file of files) {
  const filePath = path.join(jsDir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  
  try {
    // vm.Script will compile the code and throw syntax errors if any
    new vm.Script(code, { filename: file });
    console.log(`  [PASS] ${file}`);
  } catch (err) {
    console.error(`  [FAIL] ${file}: Syntax Error!`);
    console.error(err.stack);
    hasError = true;
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log("All partitioned JS files passed syntax validation successfully!");
}
