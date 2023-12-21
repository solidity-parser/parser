import { Token as AntlrToken } from 'antlr4'
import { Token, TokenizeOptions } from './types'
import { tokens } from './antlr/solidity-tokens'

const TYPE_TOKENS = [
  'var',
  'bool',
  'address',
  'string',
  'Int',
  'Uint',
  'Byte',
  'Fixed',
  'UFixed',
]

function getTokenType(value: string) {
  if (value === 'Identifier' || value === 'from') {
    return 'Identifier'
  } else if (value === 'TrueLiteral' || value === 'FalseLiteral') {
    return 'Boolean'
  } else if (value === 'VersionLiteral') {
    return 'Version'
  } else if (value === 'StringLiteral') {
    return 'String'
  } else if (TYPE_TOKENS.includes(value)) {
    return 'Type'
  } else if (value === 'NumberUnit') {
    return 'Subdenomination'
  } else if (value === 'DecimalNumber') {
    return 'Numeric'
  } else if (value === 'HexLiteral') {
    return 'Hex'
  } else if (value === 'ReservedKeyword') {
    return 'Reserved'
  } else if (/^\W+$/.test(value)) {
    return 'Punctuator'
  } else {
    return 'Keyword'
  }
}

export function buildTokenList(
  tokensArg: AntlrToken[],
  options: TokenizeOptions
): Token[] {
  const result = tokensArg.map((token) => {
    const type = getTokenType(tokens[token.type.toString()])
    const node: Token = { type, value: token.text }
    if (options.range === true) {
      node.range = [token.start, token.stop + 1]
    }
    if (options.loc === true) {
      node.loc = {
        start: { line: token.line, column: token.column },
        end: {
          line: token.line,
          column: token.column + (token.text?.length ?? 0),
        },
      }
    }
    return node
  })

  return result
}
