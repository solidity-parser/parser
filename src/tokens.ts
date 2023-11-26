import { Token, AntlrToken, TokenizeOptions } from './types'
import untypedTokens from './antlr/solidity-tokens'

const tokens = untypedTokens as { [key: string]: string }

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
      node.range = [token.startIndex, token.stopIndex + 1]
    }
    if (options.loc === true) {
      node.loc = {
        start: { line: token.line, column: token.charPositionInLine },
        end: {
          line: token.line,
          column: token.charPositionInLine + (token.text?.length ?? 0),
        },
      }
    }
    return node
  })

  return result
}
