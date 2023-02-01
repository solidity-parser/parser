import { assert } from 'chai'
import * as parser from '../src/index'
import {
  parseContract,
  parseNode,
  parseStatement,
  parseExpression,
  parseAssembly,
} from './utils'

describe('AST', () => {
  it('SourceUnit', function () {
    const ast: any = parser.parse('')
    assert.deepEqual(ast, {
      type: 'SourceUnit',
      children: [],
    })
  })

  it('EnumDefinition / EnumValue', function () {
    const ast: any = parseNode('enum Hello { A, B, C }')
    assert.deepEqual(ast, {
      type: 'EnumDefinition',
      name: 'Hello',
      members: [
        {
          type: 'EnumValue',
          name: 'A',
        },
        {
          type: 'EnumValue',
          name: 'B',
        },
        {
          type: 'EnumValue',
          name: 'C',
        },
      ],
    })
  })

  describe('UsingForDeclaration', function () {
    it('using library, non-global', function () {
      let ast = parseNode('using Lib for uint;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using Lib for *;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: null,
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using Lib for S;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using L.Lib for S;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: 'L.Lib',
        functions: [],
      })
    })

    it('using library, global', function () {
      let ast = parseNode('using Lib for uint global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using Lib for * global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: null,
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using Lib for S global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: 'Lib',
        functions: [],
      })

      ast = parseNode('using L.Lib for S global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: 'L.Lib',
        functions: [],
      })
    })

    it('using functions, non-global', function () {
      let ast = parseNode('using { f } for uint;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: null,
        functions: ['f'],
      })

      ast = parseNode('using { f, g } for uint;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: null,
        functions: ['f', 'g'],
      })

      ast = parseNode('using { f } for *;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: null,
        libraryName: null,
        functions: ['f'],
      })

      ast = parseNode('using { f } for S;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: false,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: null,
        functions: ['f'],
      })
    })

    it('using functions, global', function () {
      let ast = parseNode('using { f } for uint global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: null,
        functions: ['f'],
      })

      ast = parseNode('using { f, g } for uint global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'ElementaryTypeName',
          name: 'uint',
          stateMutability: null,
        },
        libraryName: null,
        functions: ['f', 'g'],
      })

      ast = parseNode('using { f } for * global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: null,
        libraryName: null,
        functions: ['f'],
      })

      ast = parseNode('using { f } for S global;')
      assert.deepEqual(ast, {
        type: 'UsingForDeclaration',
        isGlobal: true,
        typeName: {
          type: 'UserDefinedTypeName',
          namePath: 'S',
        },
        libraryName: null,
        functions: ['f'],
      })
    })
  })

  const versions = [
    '0.4.12',
    '0.0.0',
    '0.0',
    '0',
    '>0.5.1',
    '>0.5',
    '>1',
    '>=100.500.100',
    '>=100.500',
    '^0.4.0',
    '^0.4',
    '^1',
    '~0.3.11',
    '~1.3',
    '~10',
    '=0.0.1',
    '=0.6',
    '=1',
    '<=1.1.1',
    '<=11.11',
    '<=111',
    '<0.5.11',
    '>=0.6.7 <0.7.0',
    '^0.5.0 || ^0.6.0',
    '^0.5.0 || ^0.6.0 || ^0.7.0',
    '^0.5.0 || >=0.6.0 <0.8.0',
    '*',
  ]
  versions.forEach(function (version) {
    it('PragmaDirective ' + version, function () {
      const ast: any = parser.parse('pragma solidity ' + version + ';')
      const pragma = ast.children[0]
      assert.deepEqual(pragma, {
        type: 'PragmaDirective',
        name: 'solidity',
        value: version,
      })
    })
  })

  it('PragmaDirective experimental', function () {
    const ast: any = parser.parse('pragma experimental ABIEncoderV2;')
    const pragma = ast.children[0]
    assert.deepEqual(pragma, {
      type: 'PragmaDirective',
      name: 'experimental',
      value: 'ABIEncoderV2',
    })
  })

  it('PragmaDirective abicoder v1', function () {
    const ast: any = parser.parse('pragma abicoder v1;')
    const pragma = ast.children[0]
    assert.deepEqual(pragma, {
      type: 'PragmaDirective',
      name: 'abicoder',
      value: 'v1',
    })
  })

  it('PragmaDirective abicoder v2', function () {
    const ast: any = parser.parse('pragma abicoder v2;')
    const pragma = ast.children[0]
    assert.deepEqual(pragma, {
      type: 'PragmaDirective',
      name: 'abicoder',
      value: 'v2',
    })
  })

  it('ContractDefinition', function () {
    let ast = parseContract('contract test {}')
    assert.deepEqual(ast, {
      type: 'ContractDefinition',
      name: 'test',
      baseContracts: [],
      subNodes: [],
      kind: 'contract',
    })

    // inheritance
    ast = parseContract('contract test is foo, bar {}')
    assert.deepEqual(ast, {
      type: 'ContractDefinition',
      name: 'test',
      baseContracts: [
        {
          type: 'InheritanceSpecifier',
          baseName: {
            type: 'UserDefinedTypeName',
            namePath: 'foo',
          },
          arguments: [],
        },
        {
          type: 'InheritanceSpecifier',
          baseName: {
            type: 'UserDefinedTypeName',
            namePath: 'bar',
          },
          arguments: [],
        },
      ],
      subNodes: [],
      kind: 'contract',
    })

    // library
    ast = parseContract('library test {}')
    assert.deepEqual(ast, {
      type: 'ContractDefinition',
      name: 'test',
      baseContracts: [],
      subNodes: [],
      kind: 'library',
    })

    // interface
    ast = parseContract('interface test {}')
    assert.deepEqual(ast, {
      type: 'ContractDefinition',
      name: 'test',
      baseContracts: [],
      subNodes: [],
      kind: 'interface',
    })
  })

  it('FunctionDefinition constructor case', () => {
    const ast: any = parseNode('constructor(uint a) public {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: null,
      isConstructor: true,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('FunctionDefinition constructor case without public', () => {
    const ast: any = parseNode('constructor(uint a) {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'default',
      modifiers: [],
      override: null,
      isConstructor: true,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('FunctionDefinition fallback case', () => {
    const ast: any = parseNode('fallback () external {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: true,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('FunctionDefinition payable virtual fallback', () => {
    const ast: any = parseNode('fallback () external payable virtual {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: true,
      isReceiveEther: false,
      isVirtual: true,
      stateMutability: 'payable',
    })
  })

  it('FunctionDefinition fallback with argument and return value', () => {
    const ast: any = parseNode(
      'fallback (bytes calldata input) external returns (bytes memory output) {}'
    )
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [
        {
          isIndexed: false,
          isStateVar: false,
          name: 'input',
          identifier: {
            type: 'Identifier',
            name: 'input',
          },
          storageLocation: 'calldata',
          type: 'VariableDeclaration',
          typeName: {
            name: 'bytes',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
      ],
      returnParameters: [
        {
          isIndexed: false,
          isStateVar: false,
          name: 'output',
          identifier: {
            name: 'output',
            type: 'Identifier',
          },
          storageLocation: 'memory',
          type: 'VariableDeclaration',
          typeName: {
            name: 'bytes',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: true,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('FunctionDefinition virtual receive', () => {
    const ast: any = parseNode('receive () external payable virtual {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: true,
      isVirtual: true,
      stateMutability: 'payable',
    })
  })

  it('FunctionDefinition fallback old definition', () => {
    const ast: any = parseNode('function () external {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: '',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: true,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('FunctionDefinition receive ether case', () => {
    const ast: any = parseNode('receive () external payable {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: null,
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'external',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: true,
      isVirtual: false,
      stateMutability: 'payable',
    })
  })

  it('FunctionDefinition with override', () => {
    const ast: any = parseNode('function foo() public override {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: [],
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('StateVariableDeclaration with override', () => {
    const ast: any = parseNode('uint public override foo;')
    assert.deepEqual(ast, {
      type: 'StateVariableDeclaration',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'foo',
          identifier: {
            type: 'Identifier',
            name: 'foo',
          },
          expression: null,
          visibility: 'public',
          override: [],
          isStateVar: true,
          isDeclaredConst: false,
          isIndexed: false,
          isImmutable: false,
          storageLocation: null,
        },
      ],
      initialValue: null,
    })
  })

  it('StateVariableDeclaration with immutable', () => {
    const ast: any = parseNode('uint immutable foo;')
    assert.deepEqual(ast, {
      type: 'StateVariableDeclaration',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'foo',
          identifier: {
            type: 'Identifier',
            name: 'foo',
          },
          expression: null,
          visibility: 'default',
          override: null,
          isStateVar: true,
          isDeclaredConst: false,
          isIndexed: false,
          isImmutable: true,
          storageLocation: null,
        },
      ],
      initialValue: null,
    })
  })

  it('FunctionDefinition with one explicit override', () => {
    const ast: any = parseNode('function foo() public override(Base) {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: [
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base',
        },
      ],
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('StateVariableDeclaration with one explicit override', () => {
    const ast: any = parseNode('uint public override(Base) foo;')
    assert.deepEqual(ast, {
      type: 'StateVariableDeclaration',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'foo',
          identifier: {
            type: 'Identifier',
            name: 'foo',
          },
          expression: null,
          visibility: 'public',
          override: [
            {
              type: 'UserDefinedTypeName',
              namePath: 'Base',
            },
          ],
          isStateVar: true,
          isDeclaredConst: false,
          isIndexed: false,
          isImmutable: false,
          storageLocation: null,
        },
      ],
      initialValue: null,
    })
  })

  it('FunctionDefinition with two overrides', () => {
    const ast: any = parseNode(
      'function foo() public override(Base1, Base2) {}'
    )
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: [
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base1',
        },
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base2',
        },
      ],
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: null,
    })
  })

  it('StateVariableDeclaration with two overrides', () => {
    const ast: any = parseNode('uint public override(Base1, Base2) foo;')
    assert.deepEqual(ast, {
      type: 'StateVariableDeclaration',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'foo',
          identifier: {
            type: 'Identifier',
            name: 'foo',
          },
          expression: null,
          visibility: 'public',
          override: [
            {
              type: 'UserDefinedTypeName',
              namePath: 'Base1',
            },
            {
              type: 'UserDefinedTypeName',
              namePath: 'Base2',
            },
          ],
          isStateVar: true,
          isDeclaredConst: false,
          isIndexed: false,
          isImmutable: false,
          storageLocation: null,
        },
      ],
      initialValue: null,
    })
  })

  it('FunctionDefinition', function () {
    let ast = parseNode('function foo(uint a) pure {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'default',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: 'pure',
    })

    ast = parseNode('function foo() virtual public {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: true,
      stateMutability: null,
    })

    // Function Definition with return parameters
    ast = parseNode('function foo(uint a) pure returns (uint256) {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: [
        {
          isIndexed: false,
          isStateVar: false,
          name: null,
          identifier: null,
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: {
            name: 'uint256',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'default',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: 'pure',
    })
  })

  it('top-level FunctionDefinition', function () {
    let ast: any = parser.parse('function foo(uint a) pure {}')
    const functionNode = ast.children[0]
    assert.deepEqual(functionNode, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'default',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: 'pure',
    })

    ast = parseNode('function foo() virtual public {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [],
      returnParameters: null,
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'public',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: true,
      stateMutability: null,
    })

    // Function Definition with return parameters
    ast = parseNode('function foo(uint a) pure returns (uint256) {}')
    assert.deepEqual(ast, {
      type: 'FunctionDefinition',
      name: 'foo',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnParameters: [
        {
          isIndexed: false,
          isStateVar: false,
          name: null,
          identifier: null,
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: {
            name: 'uint256',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      visibility: 'default',
      modifiers: [],
      override: null,
      isConstructor: false,
      isFallback: false,
      isReceiveEther: false,
      isVirtual: false,
      stateMutability: 'pure',
    })
  })

  it('file-level constants', function () {
    const ast: any = parser.parse('uint constant EXPONENT = 10;')
    const fileLevelConstantNode = ast.children[0]

    assert.deepEqual(fileLevelConstantNode, {
      type: 'FileLevelConstant',
      initialValue: {
        number: '10',
        subdenomination: null,
        type: 'NumberLiteral',
      },
      name: 'EXPONENT',
      typeName: {
        name: 'uint',
        type: 'ElementaryTypeName',
        stateMutability: null,
      },
      isDeclaredConst: true,
      isImmutable: false,
    })
  })

  it('ModifierInvocation', function () {
    let ast: any = parseNode('function foo(uint a) onlyOwner {}')
    assert.deepEqual(ast.modifiers[0], {
      type: 'ModifierInvocation',
      name: 'onlyOwner',
      arguments: null,
    })

    ast = parseNode('function foo(uint a) onlyOwner() {}')
    assert.deepEqual(ast.modifiers[0], {
      type: 'ModifierInvocation',
      name: 'onlyOwner',
      arguments: [],
    })

    ast = parseNode('function foo(uint a) bar(true, 1) {}')
    assert.deepEqual(ast.modifiers[0], {
      type: 'ModifierInvocation',
      name: 'bar',
      arguments: [
        {
          type: 'BooleanLiteral',
          value: true,
        },
        {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: null,
        },
      ],
    })
  })

  it('TypeName expression', function () {
    const stmt = parseStatement('uint(a);')
    assert.deepEqual(stmt.expression.expression, {
      type: 'ElementaryTypeName',
      name: 'uint',
      stateMutability: null,
    })
  })

  it('TypeName', function () {
    let ast: any = parseNode('uint256[2] a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'ArrayTypeName',
      baseTypeName: {
        type: 'ElementaryTypeName',
        name: 'uint256',
        stateMutability: null,
      },
      length: {
        type: 'NumberLiteral',
        number: '2',
        subdenomination: null,
      },
    })

    ast = parseNode('uint256[] a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'ArrayTypeName',
      baseTypeName: {
        type: 'ElementaryTypeName',
        name: 'uint256',
        stateMutability: null,
      },
      length: null,
    })

    // typename as expression
    ast = parseExpression('A[]')
    assert.deepEqual(ast, {
      type: 'ArrayTypeName',
      length: null,
      baseTypeName: {
        namePath: 'A',
        type: 'UserDefinedTypeName',
      },
    })

    ast = parseExpression('uint256[]')
    assert.deepEqual(ast, {
      type: 'ArrayTypeName',
      length: null,
      baseTypeName: {
        name: 'uint256',
        stateMutability: null,
        type: 'ElementaryTypeName',
      },
    })

    ast = parseExpression('uint256[][]')
    assert.deepEqual(ast, {
      type: 'ArrayTypeName',
      length: null,
      baseTypeName: {
        type: 'ArrayTypeName',
        length: null,
        baseTypeName: {
          name: 'uint256',
          stateMutability: null,
          type: 'ElementaryTypeName',
        },
      },
    })
  })

  it('ElementaryTypeName', function () {
    const ast: any = parseNode('address payable a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'ElementaryTypeName',
      name: 'address',
      stateMutability: 'payable',
    })
  })

  it('FunctionTypeName', function () {
    const ast: any = parseNode('function (uint, uint) returns(bool) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'FunctionTypeName',
      parameterTypes: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: null,
          identifier: null,
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: null,
          identifier: null,
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      returnTypes: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'bool',
            stateMutability: null,
          },
          name: null,
          identifier: null,
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      visibility: 'default',
      stateMutability: null,
    })
  })

  it('ReturnStatement', function () {
    let ast: any = parseStatement('return;')
    assert.deepEqual(ast, {
      type: 'ReturnStatement',
      expression: null,
    })

    ast = parseStatement('return 2;')
    assert.deepEqual(ast, {
      type: 'ReturnStatement',
      expression: {
        type: 'NumberLiteral',
        number: '2',
        subdenomination: null,
      },
    })

    ast = parseStatement('return ();')
    assert.deepEqual(ast, {
      type: 'ReturnStatement',
      expression: {
        type: 'TupleExpression',
        isArray: false,
        components: [],
      },
    })
  })

  it('ThrowStatement', function () {
    const ast: any = parseStatement('throw;')
    assert.deepEqual(ast, {
      type: 'ThrowStatement',
    })
  })

  it('EmitStatement', function () {
    const ast: any = parseStatement('emit EventCalled(1);')
    assert.deepEqual(ast, {
      type: 'EmitStatement',
      eventCall: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'EventCalled',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
        ],
        names: [],
        identifiers: [],
      },
    })
  })

  it('EmitStatement with name/value pair', function () {
    const ast: any = parseStatement('emit EventCalled({x : 1});')
    assert.deepEqual(ast, {
      type: 'EmitStatement',
      eventCall: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'EventCalled',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
        ],
        names: ['x'],
        identifiers: [
          {
            type: 'Identifier',
            name: 'x',
          },
        ],
      },
    })
  })

  it('StructDefinition', function () {
    const ast: any = parseNode('struct hello { uint a; }')
    assert.deepEqual(ast, {
      type: 'StructDefinition',
      name: 'hello',
      members: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
    })
  })

  it('VariableDeclaration', function () {
    // state variable
    const ast: any = parseNode('uint a;')
    assert.deepEqual(ast.variables[0], {
      type: 'VariableDeclaration',
      typeName: {
        type: 'ElementaryTypeName',
        name: 'uint',
        stateMutability: null,
      },
      name: 'a',
      identifier: {
        type: 'Identifier',
        name: 'a',
      },
      expression: null,
      visibility: 'default',
      isStateVar: true,
      isDeclaredConst: false,
      isIndexed: false,
      override: null,
      isImmutable: false,
      storageLocation: null,
    })
  })

  it('WhileStatement', function () {
    let stmt = parseStatement('while (true) {}')
    assert.deepEqual(stmt, {
      type: 'WhileStatement',
      condition: {
        type: 'BooleanLiteral',
        value: true,
      },
      body: {
        type: 'Block',
        statements: [],
      },
    })

    stmt = parseStatement('do {} while (true);')
    assert.deepEqual(stmt, {
      type: 'DoWhileStatement',
      condition: {
        type: 'BooleanLiteral',
        value: true,
      },
      body: {
        type: 'Block',
        statements: [],
      },
    })
  })

  it('IfStatement', function () {
    let stmt = parseStatement('if (true) {}')
    assert.deepEqual(stmt, {
      type: 'IfStatement',
      condition: {
        type: 'BooleanLiteral',
        value: true,
      },
      trueBody: {
        type: 'Block',
        statements: [],
      },
      falseBody: null,
    })

    // else
    stmt = parseStatement('if (true) {} else {}')
    assert.deepEqual(stmt, {
      type: 'IfStatement',
      condition: {
        type: 'BooleanLiteral',
        value: true,
      },
      trueBody: {
        type: 'Block',
        statements: [],
      },
      falseBody: {
        type: 'Block',
        statements: [],
      },
    })
  })

  it('TryStatement', function () {
    // try with one catch clause
    const stmt = parseStatement(
      'try f(1, 2) returns (uint a) {} catch (bytes memory a) {}'
    )
    assert.deepEqual(stmt, {
      type: 'TryStatement',
      expression: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'f',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
          {
            type: 'NumberLiteral',
            number: '2',
            subdenomination: null,
          },
        ],
        names: [],
        identifiers: [],
      },
      returnParameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      catchClauses: [
        {
          kind: null,
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'a',
              identifier: {
                type: 'Identifier',
                name: 'a',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'bytes',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
      ],
    })
  })

  it('TryStatement with Error', function () {
    const stmt = parseStatement(
      'try f(1, 2) returns (uint a) {} catch Error(string memory b) {} catch (bytes memory c) {}'
    )
    assert.deepEqual(stmt, {
      type: 'TryStatement',
      expression: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'f',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
          {
            type: 'NumberLiteral',
            number: '2',
            subdenomination: null,
          },
        ],
        names: [],
        identifiers: [],
      },
      returnParameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      catchClauses: [
        {
          kind: 'Error',
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: true,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'b',
              identifier: {
                type: 'Identifier',
                name: 'b',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'string',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
        {
          kind: null,
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'c',
              identifier: {
                type: 'Identifier',
                name: 'c',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'bytes',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
      ],
    })
  })

  it('TryStatement with Panic', function () {
    const stmt = parseStatement(
      'try f(1, 2) returns (uint a) {} catch Panic(uint errorCode) {} catch (bytes memory c) {}'
    )
    assert.deepEqual(stmt, {
      type: 'TryStatement',
      expression: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'f',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
          {
            type: 'NumberLiteral',
            number: '2',
            subdenomination: null,
          },
        ],
        names: [],
        identifiers: [],
      },
      returnParameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      catchClauses: [
        {
          kind: 'Panic',
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'errorCode',
              identifier: {
                type: 'Identifier',
                name: 'errorCode',
              },
              storageLocation: null,
              type: 'VariableDeclaration',
              typeName: {
                name: 'uint',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
        {
          kind: null,
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'c',
              identifier: {
                type: 'Identifier',
                name: 'c',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'bytes',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
      ],
    })
  })

  it('TryStatement with Error and Panic', function () {
    const stmt = parseStatement(
      'try f(1, 2) returns (uint a) {} catch Error(string memory b) {} catch Panic(uint errorCode) {} catch (bytes memory c) {}'
    )
    assert.deepEqual(stmt, {
      type: 'TryStatement',
      expression: {
        type: 'FunctionCall',
        expression: {
          type: 'Identifier',
          name: 'f',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            number: '1',
            subdenomination: null,
          },
          {
            type: 'NumberLiteral',
            number: '2',
            subdenomination: null,
          },
        ],
        names: [],
        identifiers: [],
      },
      returnParameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      body: {
        type: 'Block',
        statements: [],
      },
      catchClauses: [
        {
          kind: 'Error',
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: true,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'b',
              identifier: {
                type: 'Identifier',
                name: 'b',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'string',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
        {
          kind: 'Panic',
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'errorCode',
              identifier: {
                type: 'Identifier',
                name: 'errorCode',
              },
              storageLocation: null,
              type: 'VariableDeclaration',
              typeName: {
                name: 'uint',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
        {
          kind: null,
          body: {
            statements: [],
            type: 'Block',
          },
          isReasonStringType: false,
          parameters: [
            {
              isIndexed: false,
              isStateVar: false,
              name: 'c',
              identifier: {
                type: 'Identifier',
                name: 'c',
              },
              storageLocation: 'memory',
              type: 'VariableDeclaration',
              typeName: {
                name: 'bytes',
                type: 'ElementaryTypeName',
                stateMutability: null,
              },
              expression: null,
            },
          ],
          type: 'CatchClause',
        },
      ],
    })
  })

  it('UserDefinedTypeName', function () {
    const ast: any = parseStatement('Foo.Bar a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'UserDefinedTypeName',
      namePath: 'Foo.Bar',
    })
  })

  it('ExpressionStatement', function () {
    const stmt = parseStatement('true;')
    assert.deepEqual(stmt, {
      type: 'ExpressionStatement',
      expression: {
        type: 'BooleanLiteral',
        value: true,
      },
    })
  })

  it('NumberLiteral', function () {
    let expr = parseExpression('2 ether')
    assert.deepEqual(expr, {
      type: 'NumberLiteral',
      number: '2',
      subdenomination: 'ether',
    })

    expr = parseExpression('2.3e5')
    assert.deepEqual(expr, {
      type: 'NumberLiteral',
      number: '2.3e5',
      subdenomination: null,
    })

    expr = parseExpression('.1')
    assert.deepEqual(expr, {
      type: 'NumberLiteral',
      number: '.1',
      subdenomination: null,
    })

    expr = parseExpression('1_000_000')
    assert.deepEqual(expr, {
      type: 'NumberLiteral',
      number: '1_000_000',
      subdenomination: null,
    })
  })

  it('StringLiteral with double quotes', function () {
    const expr = parseExpression('"Hello"')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello',
      parts: ['Hello'],
      isUnicode: [false],
    })
  })

  it('StringLiteral with single quotes', function () {
    const expr = parseExpression("'Hello'")
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello',
      parts: ['Hello'],
      isUnicode: [false],
    })
  })

  it('StringLiteral with escaped double quotes', function () {
    const expr = parseExpression('"Hello \\"goodbye\\""')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello "goodbye"',
      parts: ['Hello "goodbye"'],
      isUnicode: [false],
    })
  })

  it('StringLiteral with escaped single quotes', function () {
    const expr = parseExpression("'Hello \\'goodbye\\''")
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: "Hello 'goodbye'",
      parts: ["Hello 'goodbye'"],
      isUnicode: [false],
    })
  })

  it('Multiline StringLiteral with newline', function () {
    const expr = parseExpression('"Hello "\n"World"')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello World',
      parts: ['Hello ', 'World'],
      isUnicode: [false, false],
    })
  })

  it('Multiline StringLiteral with space', function () {
    const expr = parseExpression('"Hello " "World"')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello World',
      parts: ['Hello ', 'World'],
      isUnicode: [false, false],
    })
  })

  it('Multiline StringLiteral with no space', function () {
    const expr = parseExpression('"Hello ""World"')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello World',
      parts: ['Hello ', 'World'],
      isUnicode: [false, false],
    })
  })

  it('unicode StringLiteral with double quotes', function () {
    const expr = parseExpression('unicode"Hello 🦄 World"')
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello 🦄 World',
      parts: ['Hello 🦄 World'],
      isUnicode: [true],
    })
  })

  it('unicode StringLiteral with single quotes', function () {
    const expr = parseExpression("unicode'Hello 🦄 World'")
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello 🦄 World',
      parts: ['Hello 🦄 World'],
      isUnicode: [true],
    })
  })

  it('multipart string where some parts are unicode', function () {
    const expr = parseExpression("unicode'Hello 🦄 World' 'bye world'")
    assert.deepEqual(expr, {
      type: 'StringLiteral',
      value: 'Hello 🦄 Worldbye world',
      parts: ['Hello 🦄 World', 'bye world'],
      isUnicode: [true, false],
    })
  })

  it('HexLiteral', function () {
    const expr = parseExpression('hex"fafafa"')
    assert.deepEqual(expr, {
      type: 'HexLiteral',
      value: 'fafafa',
      parts: ['fafafa'],
    })
  })

  it('Empty HexLiteral', function () {
    const expr = parseExpression('hex""')
    assert.deepEqual(expr, {
      type: 'HexLiteral',
      value: '',
      parts: [''],
    })
  })

  it('Multipart HexLiteral', function () {
    const expr = parseExpression('hex"dead" hex\'beef\'')
    assert.deepEqual(expr, {
      type: 'HexLiteral',
      value: 'deadbeef',
      parts: ['dead', 'beef'],
    })
  })

  it('BooleanLiteral', function () {
    const expr = parseExpression('false')
    assert.deepEqual(expr, {
      type: 'BooleanLiteral',
      value: false,
    })
  })

  it('Mapping with elementary type key', function () {
    const ast: any = parseNode('mapping(uint => address) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'Mapping',
      keyType: {
        type: 'ElementaryTypeName',
        name: 'uint',
        stateMutability: null,
      },
      valueType: {
        type: 'ElementaryTypeName',
        name: 'address',
        stateMutability: null,
      },
      keyName: null,
      valueName: null,
    })
  })

  it('Mapping with user defined type key', function () {
    const ast: any = parseNode('mapping(Foo => address) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'Mapping',
      keyType: {
        type: 'UserDefinedTypeName',
        namePath: 'Foo',
      },
      valueType: {
        type: 'ElementaryTypeName',
        name: 'address',
        stateMutability: null,
      },
      keyName: null,
      valueName: null,
    })
  })

  it('Mapping with named key', function () {
    const ast: any = parseNode('mapping(uint x => address) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'Mapping',
      keyType: {
        type: 'ElementaryTypeName',
        name: 'uint',
        stateMutability: null,
      },
      valueType: {
        type: 'ElementaryTypeName',
        name: 'address',
        stateMutability: null,
      },
      keyName: {
        type: 'Identifier',
        name: 'x',
      },
      valueName: null,
    })
  })

  it('Mapping with named value', function () {
    const ast: any = parseNode('mapping(uint => address y) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'Mapping',
      keyType: {
        type: 'ElementaryTypeName',
        name: 'uint',
        stateMutability: null,
      },
      valueType: {
        type: 'ElementaryTypeName',
        name: 'address',
        stateMutability: null,
      },
      keyName: null,
      valueName: {
        type: 'Identifier',
        name: 'y',
      },
    })
  })

  it('Mapping with both named key and named value', function () {
    const ast: any = parseNode('mapping(uint x => address y) a;')
    assert.deepEqual(ast.variables[0].typeName, {
      type: 'Mapping',
      keyType: {
        type: 'ElementaryTypeName',
        name: 'uint',
        stateMutability: null,
      },
      valueType: {
        type: 'ElementaryTypeName',
        name: 'address',
        stateMutability: null,
      },
      keyName: {
        type: 'Identifier',
        name: 'x',
      },
      valueName: {
        type: 'Identifier',
        name: 'y',
      },
    })
  })

  it('ModifierDefinition', function () {
    let ast: any = parseNode('modifier onlyOwner {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'onlyOwner',
      parameters: null,
      isVirtual: false,
      override: null,
      body: {
        type: 'Block',
        statements: [],
      },
    })
    ast = parseNode('modifier onlyOwner() {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'onlyOwner',
      parameters: [],
      isVirtual: false,
      override: null,
      body: {
        type: 'Block',
        statements: [],
      },
    })
  })

  it('Expression', function () {
    // new expression
    let expr = parseExpression('new MyContract')
    assert.deepEqual(expr, {
      type: 'NewExpression',
      typeName: {
        type: 'UserDefinedTypeName',
        namePath: 'MyContract',
      },
    })

    // prefix operation
    expr = parseExpression('!true')
    assert.deepEqual(expr, {
      type: 'UnaryOperation',
      operator: '!',
      subExpression: {
        type: 'BooleanLiteral',
        value: true,
      },
      isPrefix: true,
    })

    // postfix operation
    expr = parseExpression('i++')
    assert.deepEqual(expr, {
      type: 'UnaryOperation',
      operator: '++',
      subExpression: {
        type: 'Identifier',
        name: 'i',
      },
      isPrefix: false,
    })

    // prefix operation
    expr = parseExpression('--i')
    assert.deepEqual(expr, {
      type: 'UnaryOperation',
      operator: '--',
      subExpression: {
        type: 'Identifier',
        name: 'i',
      },
      isPrefix: true,
    })
  })

  it('FunctionCall', function () {
    let expr = parseExpression('f(1, 2)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'Identifier',
        name: 'f',
      },
      arguments: [
        {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: null,
        },
        {
          type: 'NumberLiteral',
          number: '2',
          subdenomination: null,
        },
      ],
      names: [],
      identifiers: [],
    })
    expr = parseExpression('type(MyContract)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'Identifier',
        name: 'type',
      },
      arguments: [
        {
          type: 'Identifier',
          name: 'MyContract',
        },
      ],
      names: [],
      identifiers: [],
    })
  })

  it('FunctionCall with name/value pairs', function () {
    let expr = parseExpression('f{value: 10}(1, 2)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'NameValueExpression',
        expression: {
          type: 'Identifier',
          name: 'f',
        },
        arguments: {
          type: 'NameValueList',
          names: ['value'],
          identifiers: [{ type: 'Identifier', name: 'value' }],
          arguments: [
            {
              type: 'NumberLiteral',
              number: '10',
              subdenomination: null,
            },
          ],
        },
      },
      arguments: [
        {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: null,
        },
        {
          type: 'NumberLiteral',
          number: '2',
          subdenomination: null,
        },
      ],
      names: [],
      identifiers: [],
    })
    expr = parseExpression('type(MyContract)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'Identifier',
        name: 'type',
      },
      arguments: [
        {
          type: 'Identifier',
          name: 'MyContract',
        },
      ],
      names: [],
      identifiers: [],
    })
  })

  it('FunctionCall with name/value arguments', function () {
    let expr = parseExpression('f({x: 1, y: 2})')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'Identifier',
        name: 'f',
      },
      arguments: [
        {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: null,
        },
        {
          type: 'NumberLiteral',
          number: '2',
          subdenomination: null,
        },
      ],
      names: ['x', 'y'],
      identifiers: [
        {
          type: 'Identifier',
          name: 'x',
        },
        {
          type: 'Identifier',
          name: 'y',
        },
      ],
    })
    expr = parseExpression('type(MyContract)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        type: 'Identifier',
        name: 'type',
      },
      arguments: [
        {
          type: 'Identifier',
          name: 'MyContract',
        },
      ],
      names: [],
      identifiers: [],
    })
  })

  it('StateVariableDeclaration', function () {
    const ast: any = parseNode('uint a;')
    assert.deepEqual(ast, {
      type: 'StateVariableDeclaration',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          expression: null,
          visibility: 'default',
          override: null,
          isStateVar: true,
          isDeclaredConst: false,
          isIndexed: false,
          isImmutable: false,
          storageLocation: null,
        },
      ],
      initialValue: null,
    })
  })

  it('ForStatement', function () {
    let stmt = parseStatement('for (i = 0; i < 10; i++) {}')
    assert.deepEqual(stmt, {
      type: 'ForStatement',
      initExpression: {
        type: 'ExpressionStatement',
        expression: {
          type: 'BinaryOperation',
          operator: '=',
          left: {
            type: 'Identifier',
            name: 'i',
          },
          right: {
            type: 'NumberLiteral',
            number: '0',
            subdenomination: null,
          },
        },
      },
      conditionExpression: {
        type: 'BinaryOperation',
        operator: '<',
        left: {
          type: 'Identifier',
          name: 'i',
        },
        right: {
          type: 'NumberLiteral',
          number: '10',
          subdenomination: null,
        },
      },
      loopExpression: {
        type: 'ExpressionStatement',
        expression: {
          type: 'UnaryOperation',
          operator: '++',
          subExpression: {
            type: 'Identifier',
            name: 'i',
          },
          isPrefix: false,
        },
      },
      body: {
        type: 'Block',
        statements: [],
      },
    })
    stmt = parseStatement('for (;; i++) {}')
    assert.deepEqual(stmt, {
      type: 'ForStatement',
      initExpression: null,
      conditionExpression: null,
      loopExpression: {
        type: 'ExpressionStatement',
        expression: {
          type: 'UnaryOperation',
          operator: '++',
          subExpression: {
            type: 'Identifier',
            name: 'i',
          },
          isPrefix: false,
        },
      },
      body: {
        type: 'Block',
        statements: [],
      },
    })
  })

  it('IdentifierList', function () {
    let expr = parseExpression('(a,) = (1,2)')
    assert.deepEqual(expr.left, {
      components: [
        {
          name: 'a',
          type: 'Identifier',
        },
        null,
      ],
      isArray: false,
      type: 'TupleExpression',
    })
    expr = parseExpression('(a) = (1,)')
    assert.deepEqual(expr.left, {
      components: [
        {
          name: 'a',
          type: 'Identifier',
        },
      ],
      isArray: false,
      type: 'TupleExpression',
    })
    expr = parseExpression('(a,,b,) = (1,2,1)')
    assert.deepEqual(expr.left, {
      components: [
        {
          name: 'a',
          type: 'Identifier',
        },
        null,
        {
          name: 'b',
          type: 'Identifier',
        },
        null,
      ],
      isArray: false,
      type: 'TupleExpression',
    })
  })

  it('Identifier', function () {
    let expr = parseExpression('a')
    assert.deepEqual(expr, {
      type: 'Identifier',
      name: 'a',
    })
    expr = parseExpression('calldata')
    assert.deepEqual(expr, {
      type: 'Identifier',
      name: 'calldata',
    })
  })

  it('TupleExpression', function () {
    // tuple
    let ast: any = parseExpression('(,a,, b,,)')
    assert.deepEqual(ast, {
      type: 'TupleExpression',
      components: [
        null,
        {
          type: 'Identifier',
          name: 'a',
        },
        null,
        {
          type: 'Identifier',
          name: 'b',
        },
        null,
        null,
      ],
      isArray: false,
    })

    // array
    ast = parseExpression('[a, b]')
    assert.deepEqual(ast, {
      type: 'TupleExpression',
      components: [
        {
          type: 'Identifier',
          name: 'a',
        },
        {
          type: 'Identifier',
          name: 'b',
        },
      ],
      isArray: true,
    })
  })

  it('VariableDeclarationStatement', function () {
    let stmt = parseStatement('uint a;')
    assert.deepEqual(stmt, {
      type: 'VariableDeclarationStatement',
      variables: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
        },
      ],
      initialValue: null,
    })

    stmt = parseStatement('var (a,,b) = 0;')
    assert.deepEqual(stmt, {
      type: 'VariableDeclarationStatement',
      initialValue: {
        number: '0',
        subdenomination: null,
        type: 'NumberLiteral',
      },
      variables: [
        {
          isIndexed: false,
          isStateVar: false,
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: null,
          expression: null,
        },
        null,
        {
          isIndexed: false,
          isStateVar: false,
          name: 'b',
          identifier: {
            type: 'Identifier',
            name: 'b',
          },
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: null,
          expression: null,
        },
      ],
    })

    stmt = parseStatement('(uint a,, uint b) = 0;')
    assert.deepEqual(stmt, {
      type: 'VariableDeclarationStatement',
      initialValue: {
        number: '0',
        subdenomination: null,
        type: 'NumberLiteral',
      },
      variables: [
        {
          isIndexed: false,
          isStateVar: false,
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: {
            name: 'uint',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
        null,
        {
          isIndexed: false,
          isStateVar: false,
          name: 'b',
          identifier: {
            type: 'Identifier',
            name: 'b',
          },
          storageLocation: null,
          type: 'VariableDeclaration',
          typeName: {
            name: 'uint',
            type: 'ElementaryTypeName',
            stateMutability: null,
          },
          expression: null,
        },
      ],
    })
  })

  it('ImportDirective', function () {
    let ast: any = parser.parse('import "./abc.sol";')
    assert.deepEqual(ast.children[0], {
      type: 'ImportDirective',
      path: './abc.sol',
      pathLiteral: {
        type: 'StringLiteral',
        value: './abc.sol',
        parts: ['./abc.sol'],
        isUnicode: [false],
      },
      unitAlias: null,
      unitAliasIdentifier: null,
      symbolAliases: null,
      symbolAliasesIdentifiers: null,
    })

    ast = parser.parse('import "./abc.sol" as x;')
    assert.deepEqual(ast.children[0], {
      type: 'ImportDirective',
      path: './abc.sol',
      pathLiteral: {
        type: 'StringLiteral',
        value: './abc.sol',
        parts: ['./abc.sol'],
        isUnicode: [false],
      },
      unitAlias: 'x',
      unitAliasIdentifier: {
        type: 'Identifier',
        name: 'x',
      },
      symbolAliases: null,
      symbolAliasesIdentifiers: null,
    })

    ast = parser.parse('import * as x from "./abc.sol";')
    assert.deepEqual(ast.children[0], {
      type: 'ImportDirective',
      path: './abc.sol',
      pathLiteral: {
        type: 'StringLiteral',
        value: './abc.sol',
        parts: ['./abc.sol'],
        isUnicode: [false],
      },
      unitAlias: 'x',
      unitAliasIdentifier: {
        type: 'Identifier',
        name: 'x',
      },
      symbolAliases: null,
      symbolAliasesIdentifiers: null,
    })

    ast = parser.parse('import { a as b, c as d, f } from "./abc.sol";')
    assert.deepEqual(ast.children[0], {
      type: 'ImportDirective',
      path: './abc.sol',
      pathLiteral: {
        type: 'StringLiteral',
        value: './abc.sol',
        parts: ['./abc.sol'],
        isUnicode: [false],
      },
      unitAlias: null,
      unitAliasIdentifier: null,
      symbolAliases: [
        ['a', 'b'],
        ['c', 'd'],
        ['f', null],
      ],
      symbolAliasesIdentifiers: [
        [
          { type: 'Identifier', name: 'a' },
          { type: 'Identifier', name: 'b' },
        ],
        [
          { type: 'Identifier', name: 'c' },
          { type: 'Identifier', name: 'd' },
        ],
        [{ type: 'Identifier', name: 'f' }, null],
      ],
    })
  })

  it('EventDefinition', function () {
    const ast: any = parseNode('event Foo(address indexed a, uint b);')
    assert.deepEqual(ast, {
      type: 'EventDefinition',
      name: 'Foo',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'address',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          isStateVar: false,
          isIndexed: true,
          expression: null,
          storageLocation: null,
        },
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'b',
          identifier: {
            type: 'Identifier',
            name: 'b',
          },
          isStateVar: false,
          isIndexed: false,
          expression: null,
          storageLocation: null,
        },
      ],
      isAnonymous: false,
    })
  })

  it('InlineAssemblyStatement', function () {
    let ast: any = parseStatement('assembly {}')
    assert.deepEqual(ast, {
      type: 'InlineAssemblyStatement',
      language: null,
      flags: [],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })

    ast = parseStatement('assembly "evmasm" {}')
    assert.deepEqual(ast, {
      type: 'InlineAssemblyStatement',
      language: 'evmasm',
      flags: [],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })

    ast = parseStatement('assembly ("memory-safe") {}')
    assert.deepEqual(ast, {
      type: 'InlineAssemblyStatement',
      language: null,
      flags: ['memory-safe'],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })

    ast = parseStatement('assembly "evmasm" ("memory-safe") {}')
    assert.deepEqual(ast, {
      type: 'InlineAssemblyStatement',
      language: 'evmasm',
      flags: ['memory-safe'],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })
  })

  it('AssemblyCall', function () {
    const ast: any = parseAssembly('mload(0x04)')
    assert.deepEqual(ast, {
      type: 'AssemblyCall',
      functionName: 'mload',
      arguments: [
        {
          type: 'HexNumber',
          value: '0x04',
        },
      ],
    })
  })

  it('AssemblyLiteral', function () {
    let ast: any = parseAssembly('0x04')
    assert.deepEqual(ast, {
      type: 'HexNumber',
      value: '0x04',
    })

    ast = parseAssembly('"hello"')
    assert.deepEqual(ast, {
      type: 'StringLiteral',
      value: 'hello',
      parts: ['hello'],
      isUnicode: [false],
    })
  })

  it('AssemblySwitch / AssemblyCase', function () {
    const ast: any = parseAssembly(
      'switch x case 0 { y := mul(x, 2) } default { y := 0 }'
    )
    assert.deepEqual(ast, {
      type: 'AssemblySwitch',
      expression: {
        type: 'AssemblyCall',
        functionName: 'x',
        arguments: [],
      },
      cases: [
        {
          type: 'AssemblyCase',
          block: {
            type: 'AssemblyBlock',
            operations: [
              {
                type: 'AssemblyAssignment',
                names: [
                  {
                    type: 'Identifier',
                    name: 'y',
                  },
                ],
                expression: {
                  type: 'AssemblyCall',
                  functionName: 'mul',
                  arguments: [
                    {
                      type: 'AssemblyCall',
                      functionName: 'x',
                      arguments: [],
                    },
                    {
                      type: 'DecimalNumber',
                      value: '2',
                    },
                  ],
                },
              },
            ],
          },
          value: {
            type: 'DecimalNumber',
            value: '0',
          },
          default: false,
        },
        {
          type: 'AssemblyCase',
          block: {
            type: 'AssemblyBlock',
            operations: [
              {
                type: 'AssemblyAssignment',
                names: [
                  {
                    type: 'Identifier',
                    name: 'y',
                  },
                ],
                expression: {
                  type: 'DecimalNumber',
                  value: '0',
                },
              },
            ],
          },
          value: null,
          default: true,
        },
      ],
    })
  })

  it('AssemblyLocalDefinition', function () {
    const ast: any = parseAssembly('let x := 0x04')
    assert.deepEqual(ast, {
      type: 'AssemblyLocalDefinition',
      names: [
        {
          type: 'Identifier',
          name: 'x',
        },
      ],
      expression: {
        type: 'HexNumber',
        value: '0x04',
      },
    })
  })

  it('AssemblyFunctionDefinition', function () {
    let ast: any = parseAssembly('function power(base, exponent) -> result {}')
    assert.deepEqual(ast, {
      type: 'AssemblyFunctionDefinition',
      name: 'power',
      arguments: [
        {
          type: 'Identifier',
          name: 'base',
        },
        {
          type: 'Identifier',
          name: 'exponent',
        },
      ],
      returnArguments: [
        {
          type: 'Identifier',
          name: 'result',
        },
      ],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })
    ast = parseAssembly('function foo() -> result {}')
    assert.deepEqual(ast, {
      type: 'AssemblyFunctionDefinition',
      name: 'foo',
      arguments: [],
      returnArguments: [
        {
          type: 'Identifier',
          name: 'result',
        },
      ],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })
    ast = parseAssembly('function foo(x) {}')
    assert.deepEqual(ast, {
      type: 'AssemblyFunctionDefinition',
      name: 'foo',
      arguments: [
        {
          type: 'Identifier',
          name: 'x',
        },
      ],
      returnArguments: [],
      body: {
        type: 'AssemblyBlock',
        operations: [],
      },
    })
  })

  it('AssemblyAssignment', function () {
    const ast: any = parseAssembly('a := 10')
    assert.deepEqual(ast, {
      type: 'AssemblyAssignment',
      names: [
        {
          type: 'Identifier',
          name: 'a',
        },
      ],
      expression: {
        type: 'DecimalNumber',
        value: '10',
      },
    })
  })

  it('AssemblyAssignment, left member access', function () {
    const ast: any = parseAssembly('a.slot := 10')
    assert.deepEqual(ast, {
      type: 'AssemblyAssignment',
      names: [
        {
          type: 'AssemblyMemberAccess',
          expression: {
            name: 'a',
            type: 'Identifier',
          },
          memberName: {
            name: 'slot',
            type: 'Identifier',
          },
        },
      ],
      expression: {
        type: 'DecimalNumber',
        value: '10',
      },
    })
  })

  it('AssemblyAssignment, right member access', function () {
    const ast: any = parseAssembly('o := x.offset')
    assert.deepEqual(ast, {
      type: 'AssemblyAssignment',
      names: [
        {
          type: 'Identifier',
          name: 'o',
        },
      ],
      expression: {
        type: 'AssemblyMemberAccess',
        expression: {
          name: 'x',
          type: 'Identifier',
        },
        memberName: {
          name: 'offset',
          type: 'Identifier',
        },
      },
    })
  })

  it('LabelDefinition', function () {
    const ast: any = parseAssembly('loop:')
    assert.deepEqual(ast, {
      type: 'LabelDefinition',
      name: 'loop',
    })
  })

  it('AssemblyStackAssignment', function () {
    const ast: any = parseAssembly('3 =: a')
    assert.deepEqual(ast, {
      type: 'AssemblyStackAssignment',
      name: 'a',
      expression: {
        type: 'DecimalNumber',
        value: '3',
      },
    })
  })

  it('AssemblyFor', function () {
    const ast: any = parseAssembly(
      'for { let i := 0  } lt(i, x) { i := add(i, 1)  } { y := mul(2, y) }'
    )
    assert.deepEqual(ast, {
      type: 'AssemblyFor',
      pre: {
        type: 'AssemblyBlock',
        operations: [
          {
            type: 'AssemblyLocalDefinition',
            names: [
              {
                type: 'Identifier',
                name: 'i',
              },
            ],
            expression: {
              type: 'DecimalNumber',
              value: '0',
            },
          },
        ],
      },
      condition: {
        type: 'AssemblyCall',
        functionName: 'lt',
        arguments: [
          {
            type: 'AssemblyCall',
            functionName: 'i',
            arguments: [],
          },
          {
            type: 'AssemblyCall',
            functionName: 'x',
            arguments: [],
          },
        ],
      },
      post: {
        type: 'AssemblyBlock',
        operations: [
          {
            type: 'AssemblyAssignment',
            names: [
              {
                type: 'Identifier',
                name: 'i',
              },
            ],
            expression: {
              type: 'AssemblyCall',
              functionName: 'add',
              arguments: [
                {
                  type: 'AssemblyCall',
                  functionName: 'i',
                  arguments: [],
                },
                {
                  type: 'DecimalNumber',
                  value: '1',
                },
              ],
            },
          },
        ],
      },
      body: {
        type: 'AssemblyBlock',
        operations: [
          {
            type: 'AssemblyAssignment',
            names: [
              {
                type: 'Identifier',
                name: 'y',
              },
            ],
            expression: {
              type: 'AssemblyCall',
              functionName: 'mul',
              arguments: [
                {
                  type: 'DecimalNumber',
                  value: '2',
                },
                {
                  type: 'AssemblyCall',
                  functionName: 'y',
                  arguments: [],
                },
              ],
            },
          },
        ],
      },
    })
  })

  it('AssemblyIf', function () {
    const ast: any = parseAssembly('if lt(i, x) { revert(0, 0) }')
    assert.deepEqual(ast, {
      body: {
        operations: [
          {
            arguments: [
              {
                type: 'DecimalNumber',
                value: '0',
              },
              {
                type: 'DecimalNumber',
                value: '0',
              },
            ],
            functionName: 'revert',
            type: 'AssemblyCall',
          },
        ],
        type: 'AssemblyBlock',
      },
      condition: {
        arguments: [
          {
            arguments: [],
            functionName: 'i',
            type: 'AssemblyCall',
          },
          {
            arguments: [],
            functionName: 'x',
            type: 'AssemblyCall',
          },
        ],
        functionName: 'lt',
        type: 'AssemblyCall',
      },
      type: 'AssemblyIf',
    })
  })

  it('Function call with name/value list', function () {
    let expr = parseExpression('recipient.call{value: 1}()')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        arguments: {
          type: 'NameValueList',
          names: ['value'],
          identifiers: [{ type: 'Identifier', name: 'value' }],
          arguments: [
            {
              number: '1',
              subdenomination: null,
              type: 'NumberLiteral',
            },
          ],
        },
        expression: {
          expression: {
            name: 'recipient',
            type: 'Identifier',
          },
          memberName: 'call',
          type: 'MemberAccess',
        },
        type: 'NameValueExpression',
      },
      arguments: [],
      names: [],
      identifiers: [],
    })

    expr = parseExpression('recipient.call{value: 1, gas: 21000}()')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        arguments: {
          type: 'NameValueList',
          names: ['value', 'gas'],
          identifiers: [
            { type: 'Identifier', name: 'value' },
            { type: 'Identifier', name: 'gas' },
          ],
          arguments: [
            {
              number: '1',
              subdenomination: null,
              type: 'NumberLiteral',
            },
            {
              number: '21000',
              subdenomination: null,
              type: 'NumberLiteral',
            },
          ],
        },
        expression: {
          expression: {
            name: 'recipient',
            type: 'Identifier',
          },
          memberName: 'call',
          type: 'MemberAccess',
        },
        type: 'NameValueExpression',
      },
      arguments: [],
      names: [],
      identifiers: [],
    })
  })

  it('should allow using payable as a function', function () {
    const expr = parseExpression('payable(recipient)')
    assert.deepEqual(expr, {
      type: 'FunctionCall',
      expression: {
        name: 'payable',
        type: 'Identifier',
      },
      arguments: [
        {
          name: 'recipient',
          type: 'Identifier',
        },
      ],
      names: [],
      identifiers: [],
    })
  })

  it('should allow using virtual in a modifier', function () {
    const ast: any = parseNode('modifier foo() virtual {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'foo',
      parameters: [],
      body: {
        type: 'Block',
        statements: [],
      },
      isVirtual: true,
      override: null,
    })
  })

  it('should allow modifiers without body', function () {
    const ast: any = parseNode('modifier foo() virtual;')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'foo',
      parameters: [],
      body: null,
      isVirtual: true,
      override: null,
    })
  })

  it('should allow using override in a modifier', function () {
    const ast: any = parseNode('modifier foo() override {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'foo',
      parameters: [],
      body: {
        type: 'Block',
        statements: [],
      },
      isVirtual: false,
      override: [],
    })
  })

  it('should allow using one explit override in a modifier', function () {
    const ast: any = parseNode('modifier foo() override(Base) {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'foo',
      parameters: [],
      body: {
        type: 'Block',
        statements: [],
      },
      isVirtual: false,
      override: [
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base',
        },
      ],
    })
  })

  it('should allow using two explit overrides in a modifier', function () {
    const ast: any = parseNode('modifier foo() override(Base1, Base2) {}')
    assert.deepEqual(ast, {
      type: 'ModifierDefinition',
      name: 'foo',
      parameters: [],
      body: {
        type: 'Block',
        statements: [],
      },
      isVirtual: false,
      override: [
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base1',
        },
        {
          type: 'UserDefinedTypeName',
          namePath: 'Base2',
        },
      ],
    })
  })

  it('should allow empty unchecked blocks', function () {
    const ast: any = parseStatement('unchecked { }')
    assert.deepEqual(ast, {
      type: 'UncheckedStatement',
      block: {
        statements: [],
        type: 'Block',
      },
    })
  })

  it('should allow non-empty unchecked blocks', function () {
    const ast: any = parseStatement('unchecked { x++; }')
    assert.deepEqual(ast, {
      type: 'UncheckedStatement',
      block: {
        type: 'Block',
        statements: [
          {
            type: 'ExpressionStatement',
            expression: {
              type: 'UnaryOperation',
              isPrefix: false,
              operator: '++',
              subExpression: {
                name: 'x',
                type: 'Identifier',
              },
            },
          },
        ],
      },
    })
  })

  it('should support units', function () {
    let ast = parseStatement('a = 1 wei;')
    assert.deepEqual(ast, {
      type: 'ExpressionStatement',
      expression: {
        type: 'BinaryOperation',
        left: {
          name: 'a',
          type: 'Identifier',
        },
        operator: '=',
        right: {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: 'wei',
        },
      },
    })

    ast = parseStatement('a = 1 gwei;')
    assert.deepEqual(ast, {
      type: 'ExpressionStatement',
      expression: {
        type: 'BinaryOperation',
        left: {
          name: 'a',
          type: 'Identifier',
        },
        operator: '=',
        right: {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: 'gwei',
        },
      },
    })

    ast = parseStatement('a = 1 seconds;')
    assert.deepEqual(ast, {
      type: 'ExpressionStatement',
      expression: {
        type: 'BinaryOperation',
        left: {
          name: 'a',
          type: 'Identifier',
        },
        operator: '=',
        right: {
          type: 'NumberLiteral',
          number: '1',
          subdenomination: 'seconds',
        },
      },
    })
  })

  it('should support array slices with both start and end', function () {
    const ast: any = parseExpression('a[0:4]')
    assert.deepEqual(ast, {
      type: 'IndexRangeAccess',
      base: {
        type: 'Identifier',
        name: 'a',
      },
      indexStart: {
        type: 'NumberLiteral',
        number: '0',
        subdenomination: null,
      },
      indexEnd: {
        type: 'NumberLiteral',
        number: '4',
        subdenomination: null,
      },
    })
  })

  it('should support array slices with only start', function () {
    const ast: any = parseExpression('a[3:]')
    assert.deepEqual(ast, {
      type: 'IndexRangeAccess',
      base: {
        type: 'Identifier',
        name: 'a',
      },
      indexStart: {
        type: 'NumberLiteral',
        number: '3',
        subdenomination: null,
      },
    })
  })

  it('should support array slices with only end', function () {
    const ast: any = parseExpression('a[:20]')
    assert.deepEqual(ast, {
      type: 'IndexRangeAccess',
      base: {
        type: 'Identifier',
        name: 'a',
      },
      indexEnd: {
        type: 'NumberLiteral',
        number: '20',
        subdenomination: null,
      },
    })
  })

  it('should support array slices without start nor end', function () {
    const ast: any = parseExpression('a[:]')
    assert.deepEqual(ast, {
      type: 'IndexRangeAccess',
      base: {
        type: 'Identifier',
        name: 'a',
      },
    })
  })

  it('should support top-level custom errors', function () {
    let ast: any = parser.parse('error MyCustomError();')
    assert.deepEqual(ast.children[0], {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [],
    })

    ast = parser.parse('error MyCustomError(uint a);')
    assert.deepEqual(ast.children[0], {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          isStateVar: false,
          isIndexed: false,
          expression: null,
          storageLocation: null,
        },
      ],
    })

    ast = parser.parse('error MyCustomError(string);')
    assert.deepEqual(ast.children[0], {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'string',
            stateMutability: null,
          },
          name: null,
          identifier: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
          storageLocation: null,
        },
      ],
    })
  })

  it('should support contract-level custom errors', function () {
    let ast: any = parseNode('error MyCustomError();')
    assert.deepEqual(ast, {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [],
    })

    ast = parseNode('error MyCustomError(uint a);')
    assert.deepEqual(ast, {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'uint',
            stateMutability: null,
          },
          name: 'a',
          identifier: {
            type: 'Identifier',
            name: 'a',
          },
          isStateVar: false,
          isIndexed: false,
          expression: null,
          storageLocation: null,
        },
      ],
    })

    ast = parseNode('error MyCustomError(string);')
    assert.deepEqual(ast, {
      type: 'CustomErrorDefinition',
      name: 'MyCustomError',
      parameters: [
        {
          type: 'VariableDeclaration',
          typeName: {
            type: 'ElementaryTypeName',
            name: 'string',
            stateMutability: null,
          },
          name: null,
          identifier: null,
          isStateVar: false,
          isIndexed: false,
          expression: null,
          storageLocation: null,
        },
      ],
    })
  })

  it('should support revert statements', function () {
    let ast: any = parseStatement('revert MyCustomError();')
    assert.deepEqual(ast, {
      type: 'RevertStatement',
      revertCall: {
        arguments: [],
        expression: {
          name: 'MyCustomError',
          type: 'Identifier',
        },
        names: [],
        identifiers: [],
        type: 'FunctionCall',
      },
    })

    ast = parseStatement('revert MyCustomError(3);')
    assert.deepEqual(ast, {
      type: 'RevertStatement',
      revertCall: {
        arguments: [
          {
            number: '3',
            subdenomination: null,
            type: 'NumberLiteral',
          },
        ],
        expression: {
          name: 'MyCustomError',
          type: 'Identifier',
        },
        names: [],
        identifiers: [],
        type: 'FunctionCall',
      },
    })
  })

  it('should support top-level user defined value types', function () {
    const ast = parseNode('type Price is uint128;')

    assert.deepEqual(ast, {
      type: 'TypeDefinition',
      name: 'Price',
      definition: {
        type: 'ElementaryTypeName',
        name: 'uint128',
        stateMutability: null,
      },
    })
  })

  it('should support contract-level user defined value types', function () {
    const ast = parseContract('contract Foo { type Price is uint128; }')

    assert.deepEqual(ast.subNodes[0], {
      type: 'TypeDefinition',
      name: 'Price',
      definition: {
        type: 'ElementaryTypeName',
        name: 'uint128',
        stateMutability: null,
      },
    })
  })

  it('should support address as a property', function () {
    const ast: any = parseStatement('foo.address;')
    assert.deepEqual(ast, {
      expression: {
        expression: {
          name: 'foo',
          type: 'Identifier',
        },
        memberName: 'address',
        type: 'MemberAccess',
      },
      type: 'ExpressionStatement',
    })
  })

  it('sould accept boolean literals in assembly', function () {
    let ast: any = parseAssembly('a := true')

    assert.deepEqual(ast, {
      expression: {
        type: 'BooleanLiteral',
        value: true,
      },
      names: [
        {
          name: 'a',
          type: 'Identifier',
        },
      ],
      type: 'AssemblyAssignment',
    })

    ast = parseAssembly('a := false')

    assert.deepEqual(ast, {
      expression: {
        type: 'BooleanLiteral',
        value: false,
      },
      names: [
        {
          name: 'a',
          type: 'Identifier',
        },
      ],
      type: 'AssemblyAssignment',
    })
  })
})
