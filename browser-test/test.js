/* eslint-disable no-undef */
it('smoke test for browser', () => {
  if (SolidityParser === undefined) {
    throw new Error('SolidityParser is not available')
  }

  const ast = SolidityParser.parse('contract Foo {}')

  if (ast.type !== 'SourceUnit') {
    throw new Error('Parsing failed')
  }
})
