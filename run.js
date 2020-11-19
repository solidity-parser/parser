const fs = require('fs');
const parser = require('.');

if (!process.argv[2]) {
  console.error('No filename given');
  process.exit(1);
}

const content = fs.readFileSync(process.argv[2]).toString();

const ast = parser.parse(content);

console.log(JSON.stringify(ast, null, 2))
