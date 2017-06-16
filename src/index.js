var antlr4 = require("../antlr4/index");
var { SolidityLexer } = require("../lib/SolidityLexer");
var { SolidityParser } = require("../lib/SolidityParser");
var { SolidityVisitor } = require("./ASTBuilder");

function parse(input) {
  var chars = antlr4.CharStreams.fromString(input);
  var lexer = new SolidityLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new SolidityParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.sourceUnit();
  var visitor = new SolidityVisitor();
  return visitor.visit(tree);
}

exports.parse = parse;
