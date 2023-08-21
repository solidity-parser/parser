const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const parser = require('..')

describe('integration', function () {
  it('parses test file correctly', function () {
    const content = fs.readFileSync(
      path.join(__dirname, '..', 'antlr', 'test.sol')
    )
    parser.parse(content.toString())
  })

  it('parses an empty string', function () {
    const ast = parser.parse('')
    assert.deepEqual(ast, {
      type: 'SourceUnit',
      children: [],
    })
  })

  it('tokenizes correctly', function () {
    const tokens = parser.tokenize('contract Foo {} // a comment')

    assert.deepEqual(tokens, [
      {
        type: 'Keyword',
        value: 'contract',
      },
      {
        type: 'Identifier',
        value: 'Foo',
      },
      {
        type: 'Punctuator',
        value: '{',
      },
      {
        type: 'Punctuator',
        value: '}',
      },
      {
        type: 'Keyword',
        value: '// a comment',
      },
    ])
  })
})
