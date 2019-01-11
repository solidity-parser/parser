const { assert } = require('chai')
const parser = require('../src/index')
const {
  parseContract,
  parseNode,
  parseStatement,
  parseExpression,
  parseAssembly
} = require('./utils')

describe('AST', () => {

  it("SourceUnit", function() {
    var ast = parser.parse("");
    assert.deepEqual(ast, {
      "type": "SourceUnit",
      "children": []
    });
  })

  it("EnumDefinition / EnumValue", function() {
    var ast = parseNode("enum Hello { A, B, C }")
    assert.deepEqual(ast, {
      "type": "EnumDefinition",
      "name": "Hello",
      "members": [
        {
          "type": "EnumValue",
          "name": "A"
        },
        {
          "type": "EnumValue",
          "name": "B"
        },
        {
          "type": "EnumValue",
          "name": "C"
        }
      ]
    })
  })

  it("UsingForDeclaration", function() {
    var ast = parseNode("using Lib for uint;")
    assert.deepEqual(ast, {
      "type": "UsingForDeclaration",
      "typeName": {
          "type": "ElementaryTypeName",
          "name": "uint"
        },
      "libraryName": "Lib"
    })

    ast = parseNode("using Lib for *;")
    assert.deepEqual(ast, {
      "type": "UsingForDeclaration",
      "typeName": null,
      "libraryName": "Lib"
    })

    ast = parseNode("using Lib for S;")
    assert.deepEqual(ast, {
      "type": "UsingForDeclaration",
      "typeName": {
          "type": "UserDefinedTypeName",
          "namePath": "S"
        },
      "libraryName": "Lib"
    })

  })

  it("PragmaDirective", function() {
    var ast = parser.parse("pragma solidity ^0.4.0;")
    var pragma = ast.children[0]
    assert.deepEqual(pragma, {
      "type": "PragmaDirective",
      "name": "solidity",
      "value": "^0.4.0"
    })
  })

  it("ContractDefinition", function() {
    var ast = parseContract("contract test {}")
    assert.deepEqual(ast, {
      "type": "ContractDefinition",
      "name": "test",
      "baseContracts": [],
      "subNodes": [],
      "kind": "contract"
    })

    // inheritance
    ast = parseContract("contract test is foo, bar {}")
    assert.deepEqual(ast, {
      "type": "ContractDefinition",
      "name": "test",
      "baseContracts": [
        {
          "type": "InheritanceSpecifier",
          "baseName": {
            "type": "UserDefinedTypeName",
            "namePath": "foo"
          },
          "arguments": []
        },
        {
          "type": "InheritanceSpecifier",
          "baseName": {
            "type": "UserDefinedTypeName",
            "namePath": "bar"
          },
          "arguments": []
        }
      ],
      "subNodes": [],
      "kind": "contract"
    })

    // library
    ast = parseContract("library test {}")
    assert.deepEqual(ast, {
      "type": "ContractDefinition",
      "name": "test",
      "baseContracts": [],
      "subNodes": [],
      "kind": "library"
    })

    // interface
    ast = parseContract("interface test {}")
    assert.deepEqual(ast, {
      "type": "ContractDefinition",
      "name": "test",
      "baseContracts": [],
      "subNodes": [],
      "kind": "interface"
    })
  })

  it('ConstructorDefinition', () => {
    var ast = parseNode("constructor(uint a) {}")
    assert.deepEqual(ast, {
      "type": "FunctionDefinition",
      "name": null,
      "parameters": {
        "type": "ParameterList",
        "parameters": [
          {
            "type": "Parameter",
            "typeName": {
              "type": "ElementaryTypeName",
              "name": "uint"
            },
            "name": "a",
            "storageLocation": null,
            "isStateVar": false,
            "isIndexed": false
          }
        ]
      },
      "body": {
        "type": "Block",
        "statements": []
      },
      "visibility": "default",
      "modifiers": [],
      "isConstructor": true,
      "stateMutability": null,
    })
  })

  it("FunctionDefinition", function() {
    var ast = parseNode("function foo(uint a) pure {}")
    assert.deepEqual(ast, {
      "type": "FunctionDefinition",
      "name": "foo",
      "parameters": {
        "type": "ParameterList",
        "parameters": [
          {
            "type": "Parameter",
            "typeName": {
              "type": "ElementaryTypeName",
              "name": "uint"
            },
            "name": "a",
            "storageLocation": null,
            "isStateVar": false,
            "isIndexed": false
          }
        ]
      },
      "returnParameters": null,
      "body": {
        "type": "Block",
        "statements": []
      },
      "visibility": "default",
      "modifiers": [],
      "isConstructor": false,
      "stateMutability": "pure",
    })

    // Function Definition with return parameters
    ast = parseNode("function foo(uint a) pure returns (uint256) {}")
    assert.deepEqual(ast, {
      "type": "FunctionDefinition",
      "name": "foo",
      "parameters": {
        "type": "ParameterList",
        "parameters": [
          {
            "type": "Parameter",
            "typeName": {
              "type": "ElementaryTypeName",
              "name": "uint"
            },
            "name": "a",
            "storageLocation": null,
            "isStateVar": false,
            "isIndexed": false
          }
        ]
      },
      "returnParameters": {
        "type": "ParameterList",
        "parameters": [
          {
            "isIndexed": false,
            "isStateVar": false,
            "name": null,
            "storageLocation": null,
            "type": "Parameter",
            "typeName": {
              "name": "uint256",
              "type": "ElementaryTypeName"
            }
          }
        ],
      },
      "body": {
        "type": "Block",
        "statements": []
      },
      "visibility": "default",
      "modifiers": [],
      "isConstructor": false,
      "stateMutability": "pure"
    })
  })

  it("ModifierInvocation", function() {
    var ast = parseNode("function foo(uint a) onlyOwner {}")
    assert.deepEqual(ast.modifiers[0], {
      "type": "ModifierInvocation",
      "name": "onlyOwner",
      "arguments": []
    })

    ast = parseNode("function foo(uint a) bar(true, 1) {}")
    assert.deepEqual(ast.modifiers[0], {
      "type": "ModifierInvocation",
      "name": "bar",
      "arguments": [
        {
          "type": "BooleanLiteral",
          "value": true
        },
        {
          "type": "NumberLiteral",
          "number": "1",
          "subdenomination": null
        },
      ]
    })
  })

  it("ElementaryTypeNameExpression", function() {
    var stmt = parseStatement("uint(a);")
    assert.deepEqual(stmt.expression.expression, {
      "type": "ElementaryTypeNameExpression",
      "typeName": {
        "type": "ElementaryTypeName",
        "name": "uint"
      }
    })
  })

  it("TypeName", function() {
    var ast = parseNode("uint256[2] a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "ArrayTypeName",
      "baseTypeName": {
        "type": "ElementaryTypeName",
        "name": "uint256"
      },
      "length": {
        "type": "NumberLiteral",
        "number": "2",
        "subdenomination": null
      }
    })

    ast = parseNode("uint256[] a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "ArrayTypeName",
      "baseTypeName": {
        "type": "ElementaryTypeName",
        "name": "uint256"
      },
      "length": null
    })
  })

  it("ElementaryTypeName", function() {
    var ast = parseNode("address payable a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "ElementaryTypeName",
      "name": "address",
      "stateMutability": "payable"
    })
  })

  it("FunctionTypeName", function() {
    var ast = parseNode("function (uint, uint) returns(bool) a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "FunctionTypeName",
      "parameterTypes": [
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "uint"
          },
          "name": null,
          "storageLocation": null,
          "isStateVar": false,
          "isIndexed": false
        },
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "uint"
          },
          "name": null,
          "storageLocation": null,
          "isStateVar": false,
          "isIndexed": false
        }
      ],
      "returnTypes": [
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "bool"
          },
          "name": null,
          "storageLocation": null,
          "isStateVar": false,
          "isIndexed": false
        }
      ],
      "visibility": "default",
      "stateMutability": null
    })
  })

  it("ReturnStatement", function() {
    var ast = parseStatement("return;")
    assert.deepEqual(ast, {
      "type": "ReturnStatement",
      "expression": null
    })

    ast = parseStatement("return 2;")
    assert.deepEqual(ast, {
      "type": "ReturnStatement",
      "expression": {
        "type": "NumberLiteral",
        "number": "2",
        "subdenomination": null
      }
    })

    ast = parseStatement("return ();")
    assert.deepEqual(ast, {
      "type": "ReturnStatement",
      "expression": {
        "type": "TupleExpression",
        "isArray": false,
        "components": []
      }
    })
  })

  it("ThrowStatement", function() {
    var ast = parseStatement("throw;")
    assert.deepEqual(ast, {
      "type": "ThrowStatement",
    })
  })

  it("EmitStatement", function() {
    var ast = parseStatement("emit EventCalled(1);")
    assert.deepEqual(ast, {
      "type": "EmitStatement",
      "eventCall": {
        "type": "FunctionCall",
        "expression": {
          "type": "Identifier",
          "name": "EventCalled"
        },
        "arguments": [
          {
            "type": "NumberLiteral",
            "number": "1",
            "subdenomination": null
          }
        ],
        "names": []
      }
    })
  })

  it("StructDefinition", function() {
    var ast = parseNode("struct hello { uint a; }")
    assert.deepEqual(ast, {
      "type": "StructDefinition",
      "name": "hello",
      "members": [
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "uint"
          },
          "name": "a",
          "storageLocation": null,
          "isStateVar": false,
          "isIndexed": false
        }
      ]
    })
  })

  it("VariableDeclaration", function() {
    // state variable
    var ast = parseNode("uint a;")
    assert.deepEqual(ast.variables[0], {
      "type": "VariableDeclaration",
      "typeName": {
        "type": "ElementaryTypeName",
        "name": "uint"
      },
      "name": "a",
      "expression": null,
      "visibility": "default",
      "isStateVar": true,
      "isDeclaredConst": false,
      "isIndexed": false
    })
  })

  it("WhileStatement", function() {
    var stmt = parseStatement("while (true) {}")
    assert.deepEqual(stmt, {
      "type": "WhileStatement",
      "condition": {
        "type": "BooleanLiteral",
        "value": true
      },
      "body": {
        "type": "Block",
        "statements": []
      }
    })

    stmt = parseStatement("do {} while (true);")
    assert.deepEqual(stmt, {
      "type": "DoWhileStatement",
      "condition": {
        "type": "BooleanLiteral",
        "value": true
      },
      "body": {
        "type": "Block",
        "statements": []
      }
    })
  })

  it("IfStatement", function() {
    var stmt = parseStatement("if (true) {}")
    assert.deepEqual(stmt, {
      "type": "IfStatement",
      "condition": {
        "type": "BooleanLiteral",
        "value": true
      },
      "trueBody": {
        "type": "Block",
        "statements": []
      },
      "falseBody": null
    })

    // else
    stmt = parseStatement("if (true) {} else {}")
    assert.deepEqual(stmt, {
      "type": "IfStatement",
      "condition": {
        "type": "BooleanLiteral",
        "value": true
      },
      "trueBody": {
        "type": "Block",
        "statements": []
      },
      "falseBody": {
        "type": "Block",
        "statements": []
      },
    })
  })

  it("UserDefinedTypeName", function() {
    var ast = parseStatement("Foo.Bar a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "UserDefinedTypeName",
      "namePath": "Foo.Bar"
    })
  })

  it("ExpressionStatement", function() {
    var stmt = parseStatement("true;")
    assert.deepEqual(stmt, {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BooleanLiteral",
        "value": true
      }
    })
  })

  it("NumberLiteral", function() {
    var expr = parseExpression("2 ether")
    assert.deepEqual(expr, {
      "type": "NumberLiteral",
      "number": "2",
      "subdenomination": "ether"
    })

    expr = parseExpression("2.3e5")
    assert.deepEqual(expr, {
      "type": "NumberLiteral",
      "number": "2.3e5",
      "subdenomination": null
    })

    expr = parseExpression(".1")
    assert.deepEqual(expr, {
      "type": "NumberLiteral",
      "number": ".1",
      "subdenomination": null
    })
  })

  it("StringLiteral", function() {
    var expr = parseExpression("\"Hello\"")
    assert.deepEqual(expr, {
      "type": "StringLiteral",
      "value": "Hello",
    })
  })

  it("HexLiteral", function() {
    var expr = parseExpression("hex\"fafafa\"")
    assert.deepEqual(expr, {
      type: "HexLiteral",
      value: "hex\"fafafa\""
    })
  })

  it("BooleanLiteral", function() {
    var expr = parseExpression("false")
    assert.deepEqual(expr, {
      "type": "BooleanLiteral",
      "value": false,
    })
  })

  it("Mapping", function() {
    var ast = parseNode("mapping(uint => address) a;")
    assert.deepEqual(ast.variables[0].typeName, {
      "type": "Mapping",
      "keyType": {
        "type": "ElementaryTypeName",
        "name": "uint"
      },
      "valueType": {
        "type": "ElementaryTypeName",
        "name": "address"
      }
    })
  })

  it("ModifierDefinition", function() {
    var ast = parseNode("modifier onlyOwner {}")
    assert.deepEqual(ast, {
      "type": "ModifierDefinition",
      "name": "onlyOwner",
      "parameters": [],
      "body": {
        "type": "Block",
        "statements": []
      }
    })
  })

  it("Expression", function() {
    // new expression
    var expr = parseExpression("new MyContract")
    assert.deepEqual(expr, {
      "type": "NewExpression",
      "typeName": {
        "type": "UserDefinedTypeName",
        "namePath": "MyContract"
      }
    })

    // prefix operation
    var expr = parseExpression("!true")
    assert.deepEqual(expr, {
      "type": "UnaryOperation",
      "operator": "!",
      "subExpression": {
        "type": "BooleanLiteral",
        "value": true
      },
      "isPrefix": true
    })

    // prefix operation
    var expr = parseExpression("i++")
    assert.deepEqual(expr, {
      "type": "UnaryOperation",
      "operator": "++",
      "subExpression": {
        "type": "Identifier",
        "name": "i"
      },
      "isPrefix": false
    })
  })

  it("FunctionCall", function() {
    var expr = parseExpression("f(1, 2)")
		assert.deepEqual(expr, {
			"type": "FunctionCall",
			"expression": {
				"type": "Identifier",
				"name": "f"
			},
			"arguments": [
				{
					"type": "NumberLiteral",
					"number": "1",
					"subdenomination": null
				},
				{
					"type": "NumberLiteral",
					"number": "2",
					"subdenomination": null
				}
			],
			"names": []
		})
  })

  it("StateVariableDeclaration", function() {
    var ast = parseNode("uint a;")
    assert.deepEqual(ast, {
      "type": "StateVariableDeclaration",
      "variables": [
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "uint"
          },
          "name": "a",
          "expression": null,
          "visibility": "default",
          "isStateVar": true,
          "isDeclaredConst": false,
          "isIndexed": false
        }
      ],
      "initialValue": null
    })
  })

  it("ForStatement", function() {
    var stmt = parseStatement("for (i = 0; i < 10; i++) {}")
    assert.deepEqual(stmt, {
      "type": "ForStatement",
      "initExpression": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "BinaryOperation",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "i"
          },
          "right": {
            "type": "NumberLiteral",
            "number": "0",
            "subdenomination": null
          }
        }
      },
      "conditionExpression": {
        "type": "BinaryOperation",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "i"
        },
        "right": {
          "type": "NumberLiteral",
          "number": "10",
          "subdenomination": null
        }
      },
      "loopExpression": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryOperation",
          "operator": "++",
          "subExpression": {
            "type": "Identifier",
            "name": "i"
          },
          "isPrefix": false
        }
      },
      "body": {
        "type": "Block",
        "statements": []
      }
    })

  })

  it("IdentifierList", function() {
    var expr = parseExpression("(a,) = (1,2)")
    assert.deepEqual(expr.left, {
      "components": [
        {
          "name": "a",
          "type": "Identifier",
        },
        null,
      ],
      "isArray": false,
      "type": "TupleExpression",
    })
    expr = parseExpression("(a) = (1,)")
    assert.deepEqual(expr.left, {
      "components": [
        {
          "name": "a",
          "type": "Identifier",
        },
      ],
      "isArray": false,
      "type": "TupleExpression",
    })
    expr = parseExpression("(a,,b,) = (1,2,1)")
    assert.deepEqual(expr.left, {
      "components": [
        {
          "name": "a",
          "type": "Identifier",
        },
        null,
        {
          "name": "b",
          "type": "Identifier",
        },
        null,
      ],
      "isArray": false,
      "type": "TupleExpression",
    })
  })

  it("Identifier", function() {
    var expr = parseExpression("a")
    assert.deepEqual(expr, {
      "type": "Identifier",
      "name": "a",
    })
    expr = parseExpression("calldata")
    assert.deepEqual(expr, {
      "type": "Identifier",
      "name": "calldata",
    })
  })

  it("TupleExpression", function() {
    // tuple
    var ast = parseExpression("(,a,, b,,)")
    assert.deepEqual(ast, {
      "type": "TupleExpression",
      "components": [
        null,
        {
          "type": "Identifier",
          "name": "a"
        },
        null,
        {
          "type": "Identifier",
          "name": "b"
        },
        null,
        null
      ],
      "isArray": false
    })

    // array
    ast = parseExpression("[a, b]")
    assert.deepEqual(ast, {
      "type": "TupleExpression",
      "components": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "isArray": true
    })
  })

  it("VariableDeclarationStatement", function() {
    var stmt = parseStatement("uint a;")
    assert.deepEqual(stmt, {
      "type": "VariableDeclarationStatement",
      "variables": [
        {
          "type": "VariableDeclaration",
          "typeName": {
            "type": "ElementaryTypeName",
            "name": "uint"
          },
          "name": "a",
          "storageLocation": null,
          "isStateVar": false,
          "isIndexed": false
        }
      ],
      "initialValue": null
    })

    stmt = parseStatement("var (a,,b) = 0;")
    assert.deepEqual(stmt, {
      "type": "VariableDeclarationStatement",
      "initialValue": {
        "number": "0",
        "subdenomination": null,
        "type": "NumberLiteral"
      },
      "variables": [
        {
          "isIndexed": false,
          "isStateVar": false,
          "name": "a",
          "type": "VariableDeclaration"
        },
        null,
        {
          "isIndexed": false,
          "isStateVar": false,
          "name": "b",
          "type": "VariableDeclaration"
        }
      ]
    })

    stmt = parseStatement("(uint a,, uint b) = 0;")
    assert.deepEqual(stmt, {
      "type": "VariableDeclarationStatement",
      "initialValue": {
        "number": "0",
        "subdenomination": null,
        "type": "NumberLiteral"
      },
      "variables": [
        {
          "isIndexed": false,
          "isStateVar": false,
          "name": "a",
          "type": "VariableDeclaration",
          "typeName": {
            "name": "uint",
            "type": "ElementaryTypeName"
          }
        },
        null,
        {
          "isIndexed": false,
          "isStateVar": false,
          "name": "b",
          "type": "VariableDeclaration",
          "typeName": {
            "name": "uint",
            "type": "ElementaryTypeName"
          }
        }
      ]
    })
  })

  it("ImportDirective", function() {
    var ast = parser.parse("import \"./abc.sol\";")
    assert.deepEqual(ast.children[0], {
      "type": "ImportDirective",
      "path": "./abc.sol",
      "unitAlias": null,
      "symbolAliases": null
    })

    ast = parser.parse("import \"./abc.sol\" as x;")
    assert.deepEqual(ast.children[0], {
      "type": "ImportDirective",
      "path": "./abc.sol",
      "unitAlias": "x",
      "symbolAliases": null
    })

    ast = parser.parse("import * as x from \"./abc.sol\";")
    assert.deepEqual(ast.children[0], {
      "type": "ImportDirective",
      "path": "./abc.sol",
      "unitAlias": "x",
      "symbolAliases": null
    })

    ast = parser.parse("import { a as b, c as d, f } from \"./abc.sol\";")
    assert.deepEqual(ast.children[0], {
      "type": "ImportDirective",
      "path": "./abc.sol",
      "unitAlias": null,
      "symbolAliases": [
        ["a", "b"],
        ["c", "d"],
        ["f", null],
      ]
    })
  })

  it("EventDefinition", function() {
    var ast = parseNode("event Foo(address indexed a, uint b);")
    assert.deepEqual(ast, {
      "type": "EventDefinition",
      "name": "Foo",
      "parameters": {
        "type": "ParameterList",
        "parameters": [
          {
            "type": "VariableDeclaration",
            "typeName": {
              "type": "ElementaryTypeName",
              "name": "address"
            },
            "name": "a",
            "isStateVar": false,
            "isIndexed": true
          },
          {
            "type": "VariableDeclaration",
            "typeName": {
              "type": "ElementaryTypeName",
              "name": "uint"
            },
            "name": "b",
            "isStateVar": false,
            "isIndexed": false
          }
        ]
      },
      "isAnonymous": false
    })
  })

  it("InlineAssemblyStatement", function() {
    var ast = parseStatement("assembly {}")
    assert.deepEqual(ast, {
      "type": "InlineAssemblyStatement",
      "language": null,
      "body": {
        "type": "AssemblyBlock",
        "operations": []
      }
    })

    ast = parseStatement("assembly \"evmasm\" {}")
    assert.deepEqual(ast, {
      "type": "InlineAssemblyStatement",
      "language": "evmasm",
      "body": {
        "type": "AssemblyBlock",
        "operations": []
      }
    })
  })

  it("AssemblyCall", function() {
    var ast = parseAssembly("mload(0x04)")
    assert.deepEqual(ast, {
      "type": "AssemblyCall",
      "functionName": "mload",
      "arguments": [
        {
          "type": "HexNumber",
          "value": "0x04"
        }
      ]
    })
  })

  it("AssemblyLiteral", function() {
    var ast = parseAssembly("0x04")
    assert.deepEqual(ast, {
      "type": "HexNumber",
      "value": "0x04"
    })

    ast = parseAssembly("\"hello\"")
    assert.deepEqual(ast, {
      "type": "StringLiteral",
      "value": "hello"
    })
  })

  it("AssemblySwitch / AssemblyCase", function() {
    var ast = parseAssembly("switch x case 0 { y := mul(x, 2) } default { y := 0 }")
    assert.deepEqual(ast, {
      "type": "AssemblySwitch",
      "expression": {
        "type": "AssemblyCall",
        "functionName": "x",
        "arguments": []
      },
      "cases": [
        {
          "type": "AssemblyCase",
          "block": {
            "type": "AssemblyBlock",
            "operations": [
              {
                "type": "AssemblyAssignment",
                "names": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "expression": {
                  "type": "AssemblyCall",
                  "functionName": "mul",
                  "arguments": [
                    {
                      "type": "AssemblyCall",
                      "functionName": "x",
                      "arguments": []
                    },
                    {
                      "type": "DecimalNumber",
                      "value": "2"
                    }
                  ]
                }
              }
            ]
          },
          "value": {
            "type": "DecimalNumber",
            "value": "0"
          }
        },
        {
          "type": "AssemblyCase",
          "block": {
            "type": "AssemblyBlock",
            "operations": [
              {
                "type": "AssemblyAssignment",
                "names": [
                  {
                    "type": "Identifier",
                    "name": "y"
                  }
                ],
                "expression": {
                  "type": "DecimalNumber",
                  "value": "0"
                }
              }
            ]
          },
          "default": true
        }
      ]
    })
  })

  it("AssemblyLocalDefinition", function() {
    var ast = parseAssembly("let x := 0x04")
    assert.deepEqual(ast, {
      "type": "AssemblyLocalDefinition",
      "names": [
        {
          "type": "Identifier",
          "name": "x"
        }
      ],
      "expression": {
        "type": "HexNumber",
        "value": "0x04"
      }
    })

  })

  it("AssemblyFunctionDefinition", function() {
    var ast = parseAssembly("function power(base, exponent) -> result {}")
    assert.deepEqual(ast, {
      "type": "AssemblyFunctionDefinition",
      "name": "power",
      "arguments": [
        {
          "type": "Identifier",
          "name": "base"
        },
        {
          "type": "Identifier",
          "name": "exponent"
        }
      ],
      "returnArguments": [
        {
          "type": "Identifier",
          "name": "result"
        }
      ],
      "body": {
        "type": "AssemblyBlock",
        "operations": []
      }
    })


  })

  it("AssemblyAssignment", function() {
    var ast = parseAssembly("a := 10")
    assert.deepEqual(ast, {
      "type": "AssemblyAssignment",
      "names": [
        {
          "type": "Identifier",
          "name": "a"
        }
      ],
      "expression": {
        "type": "DecimalNumber",
        "value": "10"
      }
    })
  })

  it("LabelDefinition", function() {
    var ast = parseAssembly("loop:")
    assert.deepEqual(ast, {
      "type": "LabelDefinition",
      "name": "loop"
    })
  })

  it("AssemblyStackAssignment", function() {
    var ast = parseAssembly("=: a")
    assert.deepEqual(ast, {
      "type": "AssemblyStackAssignment",
      "name": "a"
    })
  })

  it("AssemblyFor", function() {
    var ast = parseAssembly("for { let i := 0  } lt(i, x) { i := add(i, 1)  } { y := mul(2, y) }")
    assert.deepEqual(ast, {
      "type": "AssemblyFor",
      "pre": {
        "type": "AssemblyBlock",
        "operations": [
          {
            "type": "AssemblyLocalDefinition",
            "names": [
              {
                "type": "Identifier",
                "name": "i"
              }
            ],
            "expression": {
              "type": "DecimalNumber",
              "value": "0"
            }
          }
        ]
      },
      "condition": {
        "type": "AssemblyCall",
        "functionName": "lt",
        "arguments": [
          {
            "type": "AssemblyCall",
            "functionName": "i",
            "arguments": []
          },
          {
            "type": "AssemblyCall",
            "functionName": "x",
            "arguments": []
          }
        ]
      },
      "post": {
        "type": "AssemblyBlock",
        "operations": [
          {
            "type": "AssemblyAssignment",
            "names": [
              {
                "type": "Identifier",
                "name": "i"
              }
            ],
            "expression": {
              "type": "AssemblyCall",
              "functionName": "add",
              "arguments": [
                {
                  "type": "AssemblyCall",
                  "functionName": "i",
                  "arguments": []
                },
                {
                  "type": "DecimalNumber",
                  "value": "1"
                }
              ]
            }
          }
        ]
      },
      "body": {
        "type": "AssemblyBlock",
        "operations": [
          {
            "type": "AssemblyAssignment",
            "names": [
              {
                "type": "Identifier",
                "name": "y"
              }
            ],
            "expression": {
              "type": "AssemblyCall",
              "functionName": "mul",
              "arguments": [
                {
                  "type": "DecimalNumber",
                  "value": "2"
                },
                {
                  "type": "AssemblyCall",
                  "functionName": "y",
                  "arguments": []
                }
              ]
            }
          }
        ]
      }
    })
  })

  it("AssemblyIf", function() {
    var ast = parseAssembly("if lt(i, x) { revert(0, 0) }")
    assert.deepEqual(ast, {
      "body": {
        "operations": [
          {
            "arguments": [
              {
                "type": "DecimalNumber",
                "value": "0"
              },
              {
                "type": "DecimalNumber",
                "value": "0"
              }
            ],
            "functionName": "revert",
            "type": "AssemblyCall"
          }
        ],
        "type": "AssemblyBlock"
      },
      "condition": {
        "arguments": [
          {
            "arguments": [],
            "functionName": "i",
            "type": "AssemblyCall"
          },
          {
            "arguments": [],
            "functionName": "x",
            "type": "AssemblyCall"
          }
        ],
        "functionName": "lt",
        "type": "AssemblyCall"
      },
      "type": "AssemblyIf"
    })
  })
})
