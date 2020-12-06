import { assert } from 'chai'
import * as parser from '../src/index'

export function print(obj) {
  console.log(JSON.stringify(obj, null, 2))
}

export function parseContract(source, options = {}) {
  var ast = parser.parse(source, options)
  assert.isOk(ast.children[0])
  return ast.children[0]
}

export function parseNode(source, options = {}) {
  var contract = parseContract('contract test { ' + source + ' }', options)
  assert.isOk(contract.subNodes[0])
  return contract.subNodes[0]
}

export function parseStatement(source, options = {}) {
  var ast = parseNode('function () { ' + source + ' }', options)
  assert.isOk(ast.body.statements[0])
  return ast.body.statements[0]
}

export function parseExpression(source, options = {}) {
  var ast = parseNode('function () { ' + source + '; }', options)
  assert.isOk(ast.body.statements[0].expression)
  return ast.body.statements[0].expression
}

export function parseAssembly(source, options = {}) {
  var ast = parseNode('function () { assembly { ' + source + ' } }', options)
  assert.isOk(ast.body.statements[0].body.operations[0])
  return ast.body.statements[0].body.operations[0]
}
