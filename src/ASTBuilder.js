const antlr4 = require('./antlr4/index')

function toText(ctx) {
  if (ctx !== null) {
    return ctx.getText()
  }
  return null
}

function mapCommasToNulls(children) {
  if (children.length === 0) {
    return []
  }

  const values = []
  let comma = true

  for (const el of children) {
    if (comma) {
      if (toText(el) === ',') {
        values.push(null)
      } else {
        values.push(el)
        comma = false
      }
    } else {
      if (toText(el) !== ',') {
        throw new Error('expected comma')
      }
      comma = true
    }
  }

  if (comma) {
    values.push(null)
  }

  return values
}

function isBinOp(op) {
  const binOps = [
    '+',
    '-',
    '*',
    '/',
    '**',
    '%',
    '<<',
    '>>',
    '&&',
    '||',
    '&',
    '|',
    '^',
    '<',
    '>',
    '<=',
    '>=',
    '==',
    '!=',
    '=',
    '|=',
    '^=',
    '&=',
    '<<=',
    '>>=',
    '+=',
    '-=',
    '*=',
    '/=',
    '%='
  ]
  return binOps.includes(op)
}

const transformAST = {
  SourceUnit(ctx) {
    // last element is EOF terminal node
    return {
      children: this.visit(ctx.children.slice(0, -1))
    }
  },

  EnumDefinition(ctx) {
    return {
      name: toText(ctx.identifier()),
      members: this.visit(ctx.enumValue())
    }
  },

  EnumValue(ctx) {
    return {
      name: toText(ctx.identifier())
    }
  },

  UsingForDeclaration(ctx) {
    let typeName = null
    if (toText(ctx.getChild(3)) !== '*') {
      typeName = this.visit(ctx.getChild(3))
    }

    return {
      typeName,
      libraryName: toText(ctx.identifier())
    }
  },

  PragmaDirective(ctx) {
    return {
      name: toText(ctx.pragmaName()),
      value: toText(ctx.pragmaValue())
    }
  },

  ContractDefinition(ctx) {
    const name = toText(ctx.identifier())
    this._currentContract = name

    return {
      name,
      baseContracts: this.visit(ctx.inheritanceSpecifier()),
      subNodes: this.visit(ctx.contractPart()),
      kind: toText(ctx.getChild(0))
    }
  },

  InheritanceSpecifier(ctx) {
    return {
      baseName: this.visit(ctx.userDefinedTypeName()),
      arguments: this.visit(ctx.expression())
    }
  },

  ContractPart(ctx) {
    return this.visit(ctx.children[0])
  },

  ConstructorDefinition(ctx) {
    const parameters = this.visit(ctx.parameterList())
    const block = this.visit(ctx.block())

    const modifiers = ctx
      .modifierList()
      .modifierInvocation()
      .map(mod => this.visit(mod))

    // parse function visibility
    let visibility = 'default'
    if (ctx.modifierList().ExternalKeyword(0)) {
      visibility = 'external'
    } else if (ctx.modifierList().InternalKeyword(0)) {
      visibility = 'internal'
    } else if (ctx.modifierList().PublicKeyword(0)) {
      visibility = 'public'
    } else if (ctx.modifierList().PrivateKeyword(0)) {
      visibility = 'private'
    }

    let stateMutability = null
    if (ctx.modifierList().stateMutability(0)) {
      stateMutability = toText(ctx.modifierList().stateMutability(0))
    }

    return {
      type: 'FunctionDefinition',
      name: null,
      parameters,
      body: block,
      visibility,
      modifiers,
      isConstructor: true,
      stateMutability
    }
  },

  FunctionDefinition(ctx) {
    let name = ''
    if (ctx.identifier(0)) {
      name = toText(ctx.identifier(0))
    }
    const parameters = this.visit(ctx.parameterList())

    const returnParameters = this.visit(ctx.returnParameters())

    let block = null
    if (ctx.block()) {
      block = this.visit(ctx.block())
    }

    const modifiers = ctx
      .modifierList()
      .modifierInvocation()
      .map(mod => this.visit(mod))

    // parse function visibility
    let visibility = 'default'
    if (ctx.modifierList().ExternalKeyword(0)) {
      visibility = 'external'
    } else if (ctx.modifierList().InternalKeyword(0)) {
      visibility = 'internal'
    } else if (ctx.modifierList().PublicKeyword(0)) {
      visibility = 'public'
    } else if (ctx.modifierList().PrivateKeyword(0)) {
      visibility = 'private'
    }

    let stateMutability = null
    if (ctx.modifierList().stateMutability(0)) {
      stateMutability = toText(ctx.modifierList().stateMutability(0))
    }

    return {
      name,
      parameters,
      returnParameters,
      body: block,
      visibility,
      modifiers,
      isConstructor: name === this._currentContract,
      stateMutability
    }
  },

  ModifierInvocation(ctx) {
    const exprList = ctx.expressionList()

    let args
    if (exprList != null) {
      args = this.visit(exprList.expression())
    } else if (ctx.children.length > 1) {
      args = []
    } else {
      args = null
    }

    return {
      name: toText(ctx.identifier()),
      arguments: args
    }
  },

  ElementaryTypeNameExpression(ctx) {
    return {
      typeName: this.visit(ctx.elementaryTypeName())
    }
  },

  TypeName(ctx) {
    if (ctx.children.length > 2) {
      let length = null
      if (ctx.children.length === 4) {
        length = this.visit(ctx.getChild(2))
      }

      return {
        type: 'ArrayTypeName',
        baseTypeName: this.visit(ctx.getChild(0)),
        length
      }
    }
    if (ctx.children.length === 2) {
      return {
        type: 'ElementaryTypeName',
        name: toText(ctx.getChild(0)),
        stateMutability: toText(ctx.getChild(1))
      }
    }
    return this.visit(ctx.getChild(0))
  },

  FunctionTypeName(ctx) {
    const parameterTypes = ctx
      .functionTypeParameterList(0)
      .functionTypeParameter()
      .map(typeCtx => this.visit(typeCtx))

    let returnTypes = []
    if (ctx.functionTypeParameterList(1)) {
      returnTypes = ctx
        .functionTypeParameterList(1)
        .functionTypeParameter()
        .map(typeCtx => this.visit(typeCtx))
    }

    let visibility = 'default'
    if (ctx.InternalKeyword(0)) {
      visibility = 'internal'
    } else if (ctx.ExternalKeyword(0)) {
      visibility = 'external'
    }

    let stateMutability = null
    if (ctx.stateMutability(0)) {
      stateMutability = toText(ctx.stateMutability(0))
    }

    return {
      parameterTypes,
      returnTypes,
      visibility,
      stateMutability
    }
  },

  ReturnStatement(ctx) {
    let expression = null
    if (ctx.expression()) {
      expression = this.visit(ctx.expression())
    }

    return { expression }
  },

  EmitStatement(ctx) {
    return {
      eventCall: this.visit(ctx.functionCall())
    }
  },

  FunctionCall(ctx) {
    let args = []
    const names = []

    const ctxArgs = ctx.functionCallArguments()
    if (ctxArgs.expressionList()) {
      args = ctxArgs
        .expressionList()
        .expression()
        .map(exprCtx => this.visit(exprCtx))
    } else if (ctxArgs.nameValueList()) {
      for (const nameValue of ctxArgs.nameValueList().nameValue()) {
        args.push(this.visit(nameValue.expression()))
        names.push(toText(nameValue.identifier()))
      }
    }

    return {
      expression: this.visit(ctx.expression()),
      arguments: args,
      names
    }
  },

  StructDefinition(ctx) {
    return {
      name: toText(ctx.identifier()),
      members: this.visit(ctx.variableDeclaration())
    }
  },

  VariableDeclaration(ctx) {
    let storageLocation = null
    if (ctx.storageLocation()) {
      storageLocation = toText(ctx.storageLocation())
    }

    return {
      typeName: this.visit(ctx.typeName()),
      name: toText(ctx.identifier()),
      storageLocation,
      isStateVar: false,
      isIndexed: false
    }
  },

  EventParameter(ctx) {
    let storageLocation = null
    if (ctx.storageLocation(0)) {
      storageLocation = toText(ctx.storageLocation(0))
    }

    return {
      type: 'VariableDeclaration',
      typeName: this.visit(ctx.typeName()),
      name: toText(ctx.identifier()),
      storageLocation,
      isStateVar: false,
      isIndexed: !!ctx.IndexedKeyword(0)
    }
  },

  FunctionTypeParameter(ctx) {
    let storageLocation = null
    if (ctx.storageLocation()) {
      storageLocation = toText(ctx.storageLocation())
    }

    return {
      type: 'VariableDeclaration',
      typeName: this.visit(ctx.typeName()),
      name: null,
      storageLocation,
      isStateVar: false,
      isIndexed: false
    }
  },

  WhileStatement(ctx) {
    return {
      condition: this.visit(ctx.expression()),
      body: this.visit(ctx.statement())
    }
  },

  DoWhileStatement(ctx) {
    return {
      condition: this.visit(ctx.expression()),
      body: this.visit(ctx.statement())
    }
  },

  IfStatement(ctx) {
    const trueBody = this.visit(ctx.statement(0))

    let falseBody = null
    if (ctx.statement().length > 1) {
      falseBody = this.visit(ctx.statement(1))
    }

    return {
      condition: this.visit(ctx.expression()),
      trueBody,
      falseBody
    }
  },

  UserDefinedTypeName(ctx) {
    return {
      namePath: toText(ctx)
    }
  },

  ElementaryTypeName(ctx) {
    return {
      name: toText(ctx)
    }
  },

  Block(ctx) {
    return {
      statements: this.visit(ctx.statement())
    }
  },

  ExpressionStatement(ctx) {
    return {
      expression: this.visit(ctx.expression())
    }
  },

  NumberLiteral(ctx) {
    const number = toText(ctx.getChild(0))
    let subdenomination = null

    if (ctx.children.length === 2) {
      subdenomination = toText(ctx.getChild(1))
    }

    return {
      number,
      subdenomination
    }
  },

  Mapping(ctx) {
    return {
      keyType: this.visit(ctx.elementaryTypeName()),
      valueType: this.visit(ctx.typeName())
    }
  },

  ModifierDefinition(ctx) {
    let parameters = []
    if (ctx.parameterList()) {
      parameters = this.visit(ctx.parameterList())
    }

    return {
      name: toText(ctx.identifier()),
      parameters,
      body: this.visit(ctx.block())
    }
  },

  Statement(ctx) {
    return this.visit(ctx.getChild(0))
  },

  SimpleStatement(ctx) {
    return this.visit(ctx.getChild(0))
  },

  Expression(ctx) {
    let op

    switch (ctx.children.length) {
      case 1:
        // primary expression
        return this.visit(ctx.getChild(0))

      case 2:
        op = toText(ctx.getChild(0))

        // new expression
        if (op === 'new') {
          return {
            type: 'NewExpression',
            typeName: this.visit(ctx.typeName())
          }
        }

        // prefix operators
        if (['+', '-', '++', '--', '!', '~', 'after', 'delete'].includes(op)) {
          return {
            type: 'UnaryOperation',
            operator: op,
            subExpression: this.visit(ctx.getChild(1)),
            isPrefix: true
          }
        }

        op = toText(ctx.getChild(1))

        // postfix operators
        if (['++', '--'].includes(op)) {
          return {
            type: 'UnaryOperation',
            operator: op,
            subExpression: this.visit(ctx.getChild(0)),
            isPrefix: false
          }
        }
        break

      case 3:
        // treat parenthesis as no-op
        if (
          toText(ctx.getChild(0)) === '(' &&
          toText(ctx.getChild(2)) === ')'
        ) {
          return {
            type: 'TupleExpression',
            components: [this.visit(ctx.getChild(1))],
            isArray: false
          }
        }

        op = toText(ctx.getChild(1))

        // tuple separator
        if (op === ',') {
          return {
            type: 'TupleExpression',
            components: [
              this.visit(ctx.getChild(0)),
              this.visit(ctx.getChild(2))
            ],
            isArray: false
          }
        }

        // member access
        if (op === '.') {
          return {
            type: 'MemberAccess',
            expression: this.visit(ctx.getChild(0)),
            memberName: toText(ctx.getChild(2))
          }
        }

        if (isBinOp(op)) {
          return {
            type: 'BinaryOperation',
            operator: op,
            left: this.visit(ctx.getChild(0)),
            right: this.visit(ctx.getChild(2))
          }
        }
        break

      case 4:
        // function call
        if (
          toText(ctx.getChild(1)) === '(' &&
          toText(ctx.getChild(3)) === ')'
        ) {
          let args = []
          const names = []

          const ctxArgs = ctx.functionCallArguments()
          if (ctxArgs.expressionList()) {
            args = ctxArgs
              .expressionList()
              .expression()
              .map(exprCtx => this.visit(exprCtx))
          } else if (ctxArgs.nameValueList()) {
            for (const nameValue of ctxArgs.nameValueList().nameValue()) {
              args.push(this.visit(nameValue.expression()))
              names.push(toText(nameValue.identifier()))
            }
          }

          return {
            type: 'FunctionCall',
            expression: this.visit(ctx.getChild(0)),
            arguments: args,
            names
          }
        }

        // index access
        if (
          toText(ctx.getChild(1)) === '[' &&
          toText(ctx.getChild(3)) === ']'
        ) {
          return {
            type: 'IndexAccess',
            base: this.visit(ctx.getChild(0)),
            index: this.visit(ctx.getChild(2))
          }
        }
        break

      case 5:
        // ternary operator
        if (
          toText(ctx.getChild(1)) === '?' &&
          toText(ctx.getChild(3)) === ':'
        ) {
          return {
            type: 'Conditional',
            condition: this.visit(ctx.getChild(0)),
            trueExpression: this.visit(ctx.getChild(2)),
            falseExpression: this.visit(ctx.getChild(4))
          }
        }
        break
    }

    throw new Error('unrecognized expression')
  },

  StateVariableDeclaration(ctx) {
    const type = this.visit(ctx.typeName())
    const iden = ctx.identifier()
    const name = toText(iden)

    let expression = null
    if (ctx.expression()) {
      expression = this.visit(ctx.expression())
    }

    let visibility = 'default'
    if (ctx.InternalKeyword(0)) {
      visibility = 'internal'
    } else if (ctx.PublicKeyword(0)) {
      visibility = 'public'
    } else if (ctx.PrivateKeyword(0)) {
      visibility = 'private'
    }

    let isDeclaredConst = false
    if (ctx.ConstantKeyword(0)) {
      isDeclaredConst = true
    }

    const decl = this.createNode(
      {
        type: 'VariableDeclaration',
        typeName: type,
        name,
        expression,
        visibility,
        isStateVar: true,
        isDeclaredConst,
        isIndexed: false
      },
      iden
    )

    return {
      variables: [decl],
      initialValue: expression
    }
  },

  ForStatement(ctx) {
    let conditionExpression = this.visit(ctx.expressionStatement())
    if (conditionExpression) {
      conditionExpression = conditionExpression.expression
    }
    return {
      initExpression: this.visit(ctx.simpleStatement()),
      conditionExpression,
      loopExpression: {
        type: 'ExpressionStatement',
        expression: this.visit(ctx.expression())
      },
      body: this.visit(ctx.statement())
    }
  },

  PrimaryExpression(ctx) {
    if (ctx.BooleanLiteral()) {
      return {
        type: 'BooleanLiteral',
        value: toText(ctx.BooleanLiteral()) === 'true'
      }
    }

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: toText(ctx.HexLiteral())
      }
    }

    if (ctx.StringLiteral()) {
      const text = toText(ctx)
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      }
    }

    if (
      ctx.children.length == 3 &&
      toText(ctx.getChild(1)) === '[' &&
      toText(ctx.getChild(2)) === ']'
    ) {
      let node = this.visit(ctx.getChild(0))
      if (node.type === 'Identifier') {
        node = {
          type: 'UserDefinedTypeName',
          namePath: node.name
        }
      } else {
        node = {
          type: 'ElementaryTypeName',
          name: toText(ctx.getChild(0))
        }
      }
      return {
        type: 'ArrayTypeName',
        baseTypeName: node,
        length: null
      }
    }

    return this.visit(ctx.getChild(0))
  },

  Identifier(ctx) {
    return {
      name: toText(ctx)
    }
  },

  TupleExpression(ctx) {
    // remove parentheses
    const children = ctx.children.slice(1, -1)
    const components = mapCommasToNulls(children).map(expr => {
      // add a null for each empty value
      if (expr === null) {
        return null
      }
      return this.visit(expr)
    })

    return {
      components,
      isArray: toText(ctx.getChild(0)) === '['
    }
  },

  IdentifierList(ctx) {
    // remove parentheses
    const children = ctx.children.slice(1, -1)
    return mapCommasToNulls(children).map(iden => {
      // add a null for each empty value
      if (iden === null) {
        return null
      }

      return this.createNode(
        {
          type: 'VariableDeclaration',
          name: toText(iden),
          storageLocation: null,
          typeName: null,
          isStateVar: false,
          isIndexed: false
        },
        iden
      )
    })
  },

  VariableDeclarationList(ctx) {
    // remove parentheses
    return mapCommasToNulls(ctx.children).map(decl => {
      // add a null for each empty value
      if (decl === null) {
        return null
      }

      let storageLocation = null
      if (decl.storageLocation()) {
        storageLocation = toText(decl.storageLocation())
      }

      return this.createNode(
        {
          type: 'VariableDeclaration',
          name: toText(decl.identifier()),
          typeName: this.visit(decl.typeName()),
          storageLocation,
          isStateVar: false,
          isIndexed: false
        },
        decl
      )
    })
  },

  VariableDeclarationStatement(ctx) {
    let variables
    if (ctx.variableDeclaration()) {
      variables = [this.visit(ctx.variableDeclaration())]
    } else if (ctx.identifierList()) {
      variables = this.visit(ctx.identifierList())
    } else if (ctx.variableDeclarationList()) {
      variables = this.visit(ctx.variableDeclarationList())
    }

    let initialValue = null
    if (ctx.expression()) {
      initialValue = this.visit(ctx.expression())
    }

    return {
      variables,
      initialValue
    }
  },

  ImportDirective(ctx) {
    const pathString = toText(ctx.StringLiteral())
    let unitAlias = null
    let symbolAliases = null

    if (ctx.importDeclaration().length > 0) {
      symbolAliases = ctx.importDeclaration().map(decl => {
        const symbol = toText(decl.identifier(0))
        let alias = null
        if (decl.identifier(1)) {
          alias = toText(decl.identifier(1))
        }
        return [symbol, alias]
      })
    } else if (ctx.children.length === 7) {
      unitAlias = toText(ctx.getChild(3))
    } else if (ctx.children.length === 5) {
      unitAlias = toText(ctx.getChild(3))
    }

    return {
      path: pathString.substring(1, pathString.length - 1),
      unitAlias,
      symbolAliases
    }
  },

  EventDefinition(ctx) {
    return {
      name: toText(ctx.identifier()),
      parameters: this.visit(ctx.eventParameterList()),
      isAnonymous: !!ctx.AnonymousKeyword()
    }
  },

  EventParameterList(ctx) {
    const parameters = ctx.eventParameter().map(function(paramCtx) {
      const type = this.visit(paramCtx.typeName())
      let name = null
      if (paramCtx.identifier()) {
        name = toText(paramCtx.identifier())
      }

      return this.createNode(
        {
          type: 'VariableDeclaration',
          typeName: type,
          name,
          isStateVar: false,
          isIndexed: !!paramCtx.IndexedKeyword(0)
        },
        paramCtx
      )
    }, this)

    return {
      type: 'ParameterList',
      parameters
    }
  },

  ReturnParameters(ctx) {
    return this.visit(ctx.parameterList())
  },

  ParameterList(ctx) {
    const parameters = ctx.parameter().map(paramCtx => this.visit(paramCtx))
    return { parameters }
  },

  Parameter(ctx) {
    let storageLocation = null
    if (ctx.storageLocation()) {
      storageLocation = toText(ctx.storageLocation())
    }

    let name = null
    if (ctx.identifier()) {
      name = toText(ctx.identifier())
    }

    return {
      typeName: this.visit(ctx.typeName()),
      name,
      storageLocation,
      isStateVar: false,
      isIndexed: false
    }
  },

  InlineAssemblyStatement(ctx) {
    let language = null
    if (ctx.StringLiteral()) {
      language = toText(ctx.StringLiteral())
      language = language.substring(1, language.length - 1)
    }

    return {
      language,
      body: this.visit(ctx.assemblyBlock())
    }
  },

  AssemblyBlock(ctx) {
    const operations = ctx.assemblyItem().map(it => this.visit(it))

    return { operations }
  },

  AssemblyItem(ctx) {
    let text

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: toText(ctx.HexLiteral())
      }
    }

    if (ctx.StringLiteral()) {
      text = toText(ctx.StringLiteral())
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      }
    }

    if (ctx.BreakKeyword()) {
      return {
        type: 'Break'
      }
    }

    if (ctx.ContinueKeyword()) {
      return {
        type: 'Continue'
      }
    }

    return this.visit(ctx.getChild(0))
  },

  AssemblyExpression(ctx) {
    return this.visit(ctx.getChild(0))
  },

  AssemblyCall(ctx) {
    const functionName = toText(ctx.getChild(0))
    const args = ctx.assemblyExpression().map(arg => this.visit(arg))

    return {
      functionName,
      arguments: args
    }
  },

  AssemblyLiteral(ctx) {
    let text

    if (ctx.StringLiteral()) {
      text = toText(ctx)
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      }
    }

    if (ctx.DecimalNumber()) {
      return {
        type: 'DecimalNumber',
        value: toText(ctx)
      }
    }

    if (ctx.HexNumber()) {
      return {
        type: 'HexNumber',
        value: toText(ctx)
      }
    }

    if (ctx.HexLiteral()) {
      return {
        type: 'HexLiteral',
        value: toText(ctx)
      }
    }
  },

  AssemblySwitch(ctx) {
    return {
      expression: this.visit(ctx.assemblyExpression()),
      cases: ctx.assemblyCase().map(c => this.visit(c))
    }
  },

  AssemblyCase(ctx) {
    let value = null
    if (toText(ctx.getChild(0)) === 'case') {
      value = this.visit(ctx.assemblyLiteral())
    }

    const node = { block: this.visit(ctx.assemblyBlock()) }
    if (value !== null) {
      node.value = value
    } else {
      node.default = true
    }

    return node
  },

  AssemblyLocalDefinition(ctx) {
    let names = ctx.assemblyIdentifierOrList()
    if (names.identifier()) {
      names = [this.visit(names.identifier())]
    } else {
      names = this.visit(names.assemblyIdentifierList().identifier())
    }

    return {
      names,
      expression: this.visit(ctx.assemblyExpression())
    }
  },

  AssemblyFunctionDefinition(ctx) {
    let args = ctx.assemblyIdentifierList()
    args = args ? this.visit(args.identifier()) : []

    let returnArgs = ctx.assemblyFunctionReturns()
    returnArgs = returnArgs
      ? this.visit(returnArgs.assemblyIdentifierList().identifier())
      : []

    return {
      name: toText(ctx.identifier()),
      arguments: args,
      returnArguments: returnArgs,
      body: this.visit(ctx.assemblyBlock())
    }
  },

  AssemblyAssignment(ctx) {
    let names = ctx.assemblyIdentifierOrList()
    if (names.identifier()) {
      names = [this.visit(names.identifier())]
    } else {
      names = this.visit(names.assemblyIdentifierList().identifier())
    }

    return {
      names,
      expression: this.visit(ctx.assemblyExpression())
    }
  },

  LabelDefinition(ctx) {
    return {
      name: toText(ctx.identifier())
    }
  },

  AssemblyStackAssignment(ctx) {
    return {
      name: toText(ctx.identifier())
    }
  },

  AssemblyFor(ctx) {
    return {
      pre: this.visit(ctx.getChild(1)),
      condition: this.visit(ctx.getChild(2)),
      post: this.visit(ctx.getChild(3)),
      body: this.visit(ctx.getChild(4))
    }
  },

  AssemblyIf(ctx) {
    return {
      condition: this.visit(ctx.assemblyExpression()),
      body: this.visit(ctx.assemblyBlock())
    }
  }
}

function ASTBuilder(options) {
  antlr4.tree.ParseTreeVisitor.call(this)
  this.options = options
}

ASTBuilder.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype)
ASTBuilder.prototype.constructor = ASTBuilder

ASTBuilder.prototype._loc = function(ctx) {
  const sourceLocation = {
    start: {
      line: ctx.start.line,
      column: ctx.start.column
    },
    end: {
      line: ctx.stop.line,
      column: ctx.stop.column
    }
  }
  return { loc: sourceLocation }
}

ASTBuilder.prototype._range = function(ctx) {
  return { range: [ctx.start.start, ctx.stop.stop] }
}

ASTBuilder.prototype.meta = function(ctx) {
  const ret = {}
  if (this.options.loc) {
    Object.assign(ret, this._loc(ctx))
  }
  if (this.options.range) {
    Object.assign(ret, this._range(ctx))
  }
  return ret
}

ASTBuilder.prototype.createNode = function(obj, ctx) {
  return Object.assign(obj, this.meta(ctx))
}

ASTBuilder.prototype.visit = function(ctx) {
  if (ctx == null) {
    return null
  }

  if (Array.isArray(ctx)) {
    return ctx.map(function(child) {
      return this.visit(child)
    }, this)
  }

  let name = ctx.constructor.name
  if (name.endsWith('Context')) {
    name = name.substring(0, name.length - 'Context'.length)
  }

  const node = { type: name }

  if (name in transformAST) {
    const visited = transformAST[name].call(this, ctx)
    if (Array.isArray(visited)) {
      return visited
    }
    Object.assign(node, visited)
  }

  return this.createNode(node, ctx)
}

module.exports = ASTBuilder
