const fs = require('fs')
const path = require('path')

const tokens = fs
  .readFileSync(path.join(__dirname, '../src/antlr/Solidity.tokens'))
  .toString()

function rsplit(str, value) {
  const index = str.lastIndexOf(value)
  return [str.substring(0, index), str.substring(index + 1, str.length)]
}

function normalizeTokenType(value) {
  if (value.endsWith("'")) {
    value = value.substring(0, value.length - 1)
  }
  if (value.startsWith("'")) {
    value = value.substring(1, value.length)
  }
  return value
}

function getTokenTypeMap() {
  return tokens
    .split('\n')
    .map((line) => rsplit(line, '='))
    .reduce((acum, [value, key]) => {
      keyNumber = parseInt(key, 10)
      if (!isNaN(keyNumber)) acum[keyNumber] = normalizeTokenType(value)
      return acum
    }, {})
}

fs.writeFileSync(
  `${__dirname}/../src/antlr/solidity-tokens.ts`,
  `export default ${JSON.stringify(getTokenTypeMap(), null, 2)}`
)
