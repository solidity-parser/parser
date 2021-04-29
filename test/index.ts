import fs from 'fs'
import { assert } from 'chai'
import * as parser from '../src/index'
import { parseNode, parseStatement } from './utils'

describe('#parse', function () {
  it('parses test file correctly', function () {
    const content = fs.readFileSync(__dirname + '/test.sol')
    parser.parse(content.toString())
  })

  it('throws ParserError on syntax error', function () {
    const source = 'contract {'
    assert.throws(() => {
      parser.parse(source)
    }, parser.ParserError)
  })

  it('supports tolerant mode', function () {
    const source = 'contract {'
    const root: any = parser.parse(source, { tolerant: true })
    assert.isAbove(root.errors.length, 0)
  })

  it('supports loc', function () {
    const source = 'contract test { uint a; }'
    const root: any = parser.parse(source, { loc: true })
    assert.isOk('loc' in root)
  })

  it('supports range', function () {
    const source = 'contract test { uint a; }'
    const root = parser.parse(source, { range: true })
    assert.isOk('range' in root)
  })

  it('can build ast with tolerant mode errors', () => {
    const cases = [
      'contract test { function () { 2 + + 2; } }',
      'contract test { modifier {  } }',
    ]

    for (const c of cases) {
      parser.parse(c, { tolerant: true })
    }
  })

  describe('node meta', function () {
    it('adds meta to VariableDeclaration inside StateVariableDeclaration', function () {
      const ast = parseNode('uint public a;', { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it('adds meta to VariableDeclaration inside VariableDeclarationStatement', function () {
      const ast = parseStatement('uint a;', { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it('adds meta to VariableDeclaration inside EventDefinition', function () {
      const ast = parseNode('event Foo(address bar);', { loc: true })
      assert.isOk(ast.parameters[0].loc)
    })
  })

  it('parses empty files', function () {
    const ast = parser.parse('')
    assert.deepEqual(ast, { type: 'SourceUnit', children: [] })
  })

  it('parses empty files with loc enabled', function () {
    const ast = parser.parse('', { loc: true })
    assert.deepEqual(ast, {
      type: 'SourceUnit',
      children: [],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 0,
        },
      },
    })
  })
})

describe('#visit', function () {
  it('walks visitor through AST', function () {
    const source = 'contract test { uint a; }'
    const ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: (node: any) => {
        assert.equal(node.type, 'ContractDefinition')
      },

      'ContractDefinition:exit': (node: any) => {
        assert.equal(node.type, 'ContractDefinition')
      },
    })
  })

  it('can stop visiting inner nodes by returning false', function () {
    const source = 'contract test { uint a; }'
    const ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: () => {
        return false
      },

      'ContractDefinition:exit': () => {
        assert.fail('should not reach here')
      },
    })
  })

  it("shouldn't print anything if the lexer fails", function () {
    const originalConsoleError = console.error
    let called = false
    console.error = () => (called = true)

    parser.parse('"', { tolerant: true })

    console.error = originalConsoleError

    assert.isFalse(called, 'Should not call console.error on lexer errors')
  })

  it("should receive an optional parent node", function () {
    const source = 'contract test { uint a; }'
    const ast = parser.parse(source)
    parser.visit(ast, {
      StateVariableDeclaration: (node, parent) => {
        if (parent === undefined) {
          assert.fail("parent node should be defined")
        }

        if (parent.type !== 'ContractDefinition') {
          assert.fail("parent node should be ContractDefinition")
        }

        assert.equal(parent.name, 'test');
      },
    })
  });
})
