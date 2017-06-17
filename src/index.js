var antlr4 = require("../antlr4/index")
var { SolidityLexer } = require("../lib/SolidityLexer")
var { SolidityParser } = require("../lib/SolidityParser")
var ASTBuilder = require("./ASTBuilder")
var ErrorListener = require("./ErrorListener")

function ParserError(errors) {
  Error.call(this)
  this.errors = errors
}

ParserError.prototype = Object.create(Error)
ParserError.prototype.constructor = ParserError

function parse(input, options) {
  options = options || {}

  var chars = antlr4.CharStreams.fromString(input)
  var lexer = new SolidityLexer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)

  var parser = new SolidityParser(tokens)
  var listener = new ErrorListener()
  parser.removeErrorListeners()
  parser.addErrorListener(listener)
  parser.buildParseTrees = true

  var tree = parser.sourceUnit()

  if (!options.tolerant && listener.hasErrors())
    throw new ParserError({ errors: listener.getErrors() })

  var visitor = new ASTBuilder(options)
  var ast = visitor.visit(tree)

  if (options.tolerant && listener.hasErrors())
    ast.errors = listener.getErrors()

  return ast
}

function _isASTNode(node) {
  return typeof node === "object" && node.hasOwnProperty("type")
}

function visit(node, visitor) {
  if (!_isASTNode(node)) return

  var cont = true

  if (visitor[node.type]) {
    cont = visitor[node.type](node)
  }

  if (!cont) return

  for (var prop in node) {
    if (node.hasOwnProperty(prop)) {
      visit(node[prop], visitor)
    }
  }
}

exports.parse = parse
exports.visit = visit
exports.ParserError = ParserError
