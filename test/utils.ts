import { assert } from 'chai'
import * as parser from '../src/index'
import { ParseOptions } from '../src/types'

export function parseContract(source: string, options: ParseOptions = {}) {
  const ast: any = parser.parse(source, options)
  assert.isOk(ast.children[0])
  return ast.children[0]
}

export function parseNode(source: string, options = {}) {
  const contract = parseContract('contract test { ' + source + ' }', options)
  assert.isOk(contract.subNodes[0])
  return contract.subNodes[0]
}

export function parseStatement(source: string, options = {}) {
  const ast = parseNode('function () { ' + source + ' }', options)
  assert.isOk(ast.body.statements[0])
  return ast.body.statements[0]
}

export function parseExpression(source: string, options = {}) {
  const ast = parseNode('function () { ' + source + '; }', options)
  assert.isOk(ast.body.statements[0].expression)
  return ast.body.statements[0].expression
}

export function parseAssembly(source: string, options = {}) {
  const ast = parseNode('function () { assembly { ' + source + ' } }', options)
  assert.isOk(ast.body.statements[0].body.operations[0])
  return ast.body.statements[0].body.operations[0]
}
