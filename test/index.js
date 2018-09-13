var fs = require("fs")
var { assert } = require('chai')
var parser = require("../src/index")
var { parseNode, parseStatement } = require('./utils')

describe("#parse", function() {

  it("parses test file correctly", function() {
    var content = fs.readFileSync(__dirname + "/test.sol")
    parser.parse(content.toString())
  })

  it("throws ParserError on syntax error", function() {
    var source = "not good"
    assert.throws(() => {
      parser.parse(source)
    }, parser.ParseError)
  })

  it("supports tolerant mode", function() {
    var source = "not good"
    var root = parser.parse(source, { tolerant: true })
    assert.equal(root.errors.length, 1)
  })

  it("supports loc", function() {
    var source = "contract test { uint a; }"
    var root = parser.parse(source, { loc: true })
    assert.isOk(root.hasOwnProperty('loc'))
  })

  it("supports range", function() {
    var source = "contract test { uint a; }"
    var root = parser.parse(source, { range: true })
    assert.isOk(root.hasOwnProperty('range'))
  })

  it('can build ast with tolerant mode errors', () => {
    // TODO: just a few examples here, more should be added
    var cases = [
      'contract { function a() return bool {} }',
      'contract test { function () { 2 + + 2; } }',
      'contract test { uint ; }',
      'contract test { modifier {  } }'
    ]

    for (var c of cases) {
      parser.parse(c, { tolerant: true })
    }
  })


  describe("node meta", function() {

    it("adds meta to VariableDeclaration inside StateVariableDeclaration", function() {
      var ast = parseNode("uint public a;", { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it("adds meta to VariableDeclaration inside VariableDeclarationStatement", function() {
      var ast = parseStatement("uint a;", { loc: true })
      assert.isOk(ast.variables[0].loc)
    })

    it("adds meta to VariableDeclaration inside EventDefinition", function() {
      var ast = parseNode("event Foo(address bar);", { loc: true })
      assert.isOk(ast.parameters.parameters[0].loc)
    })

  })
})

describe("#visit", function() {

  it("walks visitor through AST", function() {
    var source = "contract test { uint a; }"
    var ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: (node) => {
        assert.equal(node.type, 'ContractDefinition')
      },

      'ContractDefinition:exit': (node) => {
        assert.equal(node.type, 'ContractDefinition')
      }
    })
  })

  it("can stop visiting inner nodes by returning false", function() {
    var source = "contract test { uint a; }"
    var ast = parser.parse(source)
    parser.visit(ast, {
      ContractDefinition: (node) => {
        return false
      },

      'ContractDefinition:exit': (node) => {
        assert.fail('should not reach here')
      }
    })
  })

  it("shouldn't print anything if the lexer fails", function() {
    const originalConsoleError = console.error
    let called = false
    console.error = () => called = true

    var ast = parser.parse('"', {tolerant: true})

    console.error = originalConsoleError

    assert.isFalse(called, "Should not call console.error on lexer errors")
  });

})
