var antlr4 = require('../antlr4/index')

var transformAST = {

  SourceUnit: function (ctx) {
    // last element is EOF terminal node
    return {
      children: this.visit(ctx.children.slice(0, -1))
    }
  },

  EnumDefinition: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      members: this.visit(ctx.enumValue())
    }
  },

  EnumValue: function (ctx) {
    return {
      name: ctx.Identifier().getText()
    }
  },

  UsingForDeclaration: function (ctx) {
    var typeName = null
    if (ctx.getChild(3).getText() !== '*') {
      typeName = this.visit(ctx.getChild(3))
    }

    return {
      typeName: typeName,
      libraryName: ctx.Identifier().getText()
    }
  },

  PragmaDirective: function (ctx) {
    return {
      name: ctx.pragmaName().getText(),
      value: ctx.pragmaValue().getText()
    }
  },

  ContractDefinition: function (ctx) {
    var name = ctx.Identifier().getText()
    this._currentContract = name

    return {
      name: name,
      baseContracts: this.visit(ctx.inheritanceSpecifier()),
      subNodes: this.visit(ctx.contractPart()),
      kind: ctx.getChild(0).getText()
    }
  },

  InheritanceSpecifier: function (ctx) {
    return {
      baseName: this.visit(ctx.userDefinedTypeName()),
      arguments: this.visit(ctx.expression())
    }
  },

  ContractPart: function (ctx) {
    return this.visit(ctx.children[0])
  },

  FunctionDefinition: function (ctx) {
    var name = ctx.Identifier(0)

    var parameters = this.visit(ctx.parameterList())

    var block = null
    if (ctx.block()) { block = this.visit(ctx.block()) }

    var modifiers = ctx.modifierList().children || []
    var txtModifiers = modifiers.map(v => v.getText())

    // parse function visibility
    var choices = ['external', 'internal', 'public', 'private']
    var visibility = txtModifiers
      .find(v => choices.includes(v)) || 'default'

    var isDeclaredConst = txtModifiers.includes('constant')
    var isPayable = txtModifiers.includes('payable')

    modifiers = modifiers
      .filter(mod => mod.constructor.name.startsWith('ModifierInvocation'))
      .map(mod => this.visit(mod))

    return {
      name: name ? name.getText() : '',
      parameters: parameters,
      body: block,
      visibility: visibility,
      modifiers: modifiers,
      isConstructor: name === this._currentContract,
      isDeclaredConst: isDeclaredConst,
      isPayable: isPayable
    }
  },

  ModifierInvocation: function (ctx) {
    var exprList = ctx.expressionList()

    var args
    if (exprList != null) { args = this.visit(exprList.children) } else { args = [] }

    return {
      name: ctx.Identifier().getText(),
      arguments: args
    }
  },

  ElementaryTypeNameExpression: function (ctx) {
    return {
      type: this.visit(ctx.typeName())
    }
  },

  TypeName: function (ctx) {
    if (ctx.children.length === 4 &&
        ctx.getChild(1).getText() === '[' &&
        ctx.getChild(3).getText() === ']'
    ) {
      this.visit(ctx.children[0])

      return {
        type: 'ArrayTypeName',
        baseTypeName: this.visit(ctx.getChild(0)),
        length: this.visit(ctx.getChild(2))
      }
    }
    return this.visit(ctx.getChild(0))
  },

  ReturnStatement: function (ctx) {
    var expression = null
    if (ctx.expression()) { expression = this.visit(ctx.expression()) }

    return { expression: expression }
  },

  StructDefinition: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      members: this.visit(ctx.variableDeclaration())
    }
  },

  VariableDeclaration: function (ctx) {
    var storageLocation = null
    if (ctx.storageLocation()) {
      storageLocation = ctx.storageLocation().getText()
    }

    return {
      typeName: this.visit(ctx.typeName()),
      name: ctx.Identifier().getText(),
      storageLocation: storageLocation,
      isStateVar: false,
      isIndexed: false
    }
  },

  WhileStatement: function (ctx) {
    return {
      condition: this.visit(ctx.expression()),
      body: this.visit(ctx.statement()),
      isDoWhile: ctx.getChild(0).getText() === 'do'
    }
  },

  IfStatement: function (ctx) {
    var trueBody = this.visit(ctx.statement(0))
    var falseBody = null
    if (ctx.statement().length > 1) { falseBody = this.visit(ctx.statement(1)) }

    return {
      condition: this.visit(ctx.expression()),
      trueBody: trueBody,
      falseBody: falseBody
    }
  },

  UserDefinedTypeName: function (ctx) {
    return {
      namePath: ctx.getText()
    }
  },

  ElementaryTypeName: function (ctx) {
    return {
      name: ctx.getText()
    }
  },

  Block: function (ctx) {
    return {
      statements: this.visit(ctx.statement())
    }
  },

  ExpressionStatement: function (ctx) {
    return {
      expression: this.visit(ctx.expression())
    }
  },

  NumberLiteral: function (ctx) {
    var number = ctx.getChild(0).getText()
    var subdenomination = null

    if (ctx.children.length === 2) {
      subdenomination = ctx.getChild(1).getText()
    }

    return {
      number: number,
      subdenomination: subdenomination
    }
  },

  Mapping: function (ctx) {
    return {
      keyType: this.visit(ctx.elementaryTypeName()),
      valueType: this.visit(ctx.typeName())
    }
  },

  ModifierDefinition: function (ctx) {
    var parameters = []
    if (ctx.parameterList()) { parameters = this.visit(ctx.parameterList()) }

    return {
      name: ctx.Identifier().getText(),
      parameters: parameters,
      body: this.visit(ctx.block())
    }
  },

  Statement: function (ctx) {
    return this.visit(ctx.getChild(0))
  },

  SimpleStatement: function (ctx) {
    return this.visit(ctx.getChild(0))
  },

  Expression: function (ctx) {
    switch (ctx.children.length) {
      case 1:
        // primary expression
        return this.visit(ctx.getChild(0))

      case 2:
        // new expression
        if (ctx.getChild(0).getText() === 'new') {
          return {
            type: 'NewExpression',
            typeName: this.visit(ctx.typeName())
          }
        }

        // prefix operators
        if (['+', '-', '++', '--', '!', '~', 'after', 'delete'].includes(ctx.getChild(0).getText())) {
          return {
            type: 'UnaryOperation',
            subExpression: this.visit(ctx.getChild(1)),
            isPrefix: true
          }
        }
        // postfix operators
        if (['++', '--'].includes(ctx.getChild(1).getText())) {
          return {
            type: 'UnaryOperation',
            subExpression: this.visit(ctx.getChild(0)),
            isPrefix: false
          }
        }
        break

      case 3:
        // treat parenthesis as no-op
        if (ctx.getChild(0).getText() === '(' &&
            ctx.getChild(2).getText() === ')') {
          return {
            type: 'TupleExpression',
            components: [this.visit(ctx.getChild(1))],
            isArray: false
          }
        }

        var op = ctx.getChild(1).getText()

        // tuple separator
        if (op === ',') {
          return {
            type: 'TupleExpression',
            components: [this.visit(ctx.getChild(0)), this.visit(ctx.getChild(2))],
            isArray: false
          }
        }

        // member access
        if (op === '.') {
          var expression = this.visit(ctx.getChild(0))
          var memberName = ctx.getChild(2).getText()
          return {
            type: 'MemberAccess',
            expression: expression,
            memberName: memberName
          }
        }

        // binary operation
        var binOps = [
          '+', '-', '*', '/', '**', '%',
          '&&', '||', '&', '|', '^',
          '<', '>', '<=', '>=', '==', '!=',
          '=', '|=', '^=', '&=', '<<=', '>>=',
          '+=', '-=', '*=', '/=', '%='
        ]

        if (binOps.includes(op)) {
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
        if (ctx.getChild(1).getText() === '(' && ctx.getChild(3).getText() === ')') {
          var args = []
          var names = []

          var ctxArgs = ctx.functionCallArguments()
          if (ctxArgs.expressionList()) { args = this.visit(ctxArgs.expressionList().children) } else if (ctxArgs.nameValueList()) {
            for (var nameValue of ctxArgs.nameValueList().nameValue()) {
              args.push(this.visit(nameValue.expression()))
              names.push(nameValue.Identifier().getText())
            }
          }

          return {
            type: 'FunctionCall',
            expression: this.visit(ctx.getChild(0)),
            arguments: args,
            names: names
          }
        }

        // index access
        if (ctx.getChild(1).getText() === '[' && ctx.getChild(3).getText() === ']') {
          return {
            type: 'IndexAccess',
            base: this.visit(ctx.getChild(0)),
            index: this.visit(ctx.getChild(2))
          }
        }
        break

      case 5:
                // ternary operator
        if (ctx.getChild(1).getText() === '?' && ctx.getChild(3).getText() === ':') {
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

  StateVariableDeclaration: function (ctx) {
    var type = this.visit(ctx.typeName())
    var name = ctx.Identifier().getText()

    var expression = null
    if (ctx.expression()) { expression = this.visit(ctx.expression()) }

    var decl = {
      type: 'VariableDeclaration',
      typeName: type,
      name: name,
      expression: expression,
      isStateVar: true,
      isIndexed: false
    }

    return {
      variables: [decl],
      initialValue: expression
    }
  },

  ForStatement: function (ctx) {
    return {
      initExpression: this.visit(ctx.simpleStatement()),
      conditionExpression: this.visit(ctx.expression(0)),
      loopExpression: {
        type: 'ExpressionStatement',
        expression: this.visit(ctx.expression(1))
      },
      body: this.visit(ctx.statement())
    }
  },

  PrimaryExpression: function (ctx) {
    if (ctx.BooleanLiteral()) {
      return {
        type: 'BooleanLiteral',
        value: ctx.BooleanLiteral().getText() === 'true'
      }
    }

    if (ctx.HexLiteral()) {
      return {
        type: 'NumberLiteral',
        value: ctx.HexLiteral().getText()
      }
    }

    if (ctx.Identifier()) {
      return {
        type: 'Identifier',
        value: ctx.Identifier().getText()
      }
    }

    if (ctx.StringLiteral()) {
      var text = ctx.getText()
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      }
    }

    if (ctx.numberLiteral()) { return this.visit(ctx.numberLiteral()) }
  },

  VariableDeclarationStatement: function (ctx) {
    var variables
    if (ctx.variableDeclaration()) { variables = [this.visit(ctx.variableDeclaration())] } else {
      variables = ctx.identifierList().Identifier()
        .map(iden => iden.getText())
        .map(iden => ({
          type: 'VariableDeclaration',
          name: iden,
          isStateVar: false,
          isIndexed: false
        }))
    }
    // @TODO: complete declaration

    var initialValue = null
    if (ctx.expression()) { initialValue = this.visit(ctx.expression()) }

    return {
      variables: variables,
      initialValue: initialValue
    }
  },

  ImportDirective: function (ctx) {
    var pathString = ctx.StringLiteral().getText()
    var unitAlias = null
    var symbolAliases = null

    if (ctx.importDeclaration().length > 0) {
      symbolAliases = ctx.importDeclaration().map(decl => {
        var symbol = decl.Identifier(0).getText()
        var alias = null
        if (decl.Identifier(1)) {
          alias = decl.Identifier(1).getText()
        }
        return [symbol, alias]
      })
    } else if (ctx.children.length === 7) {
      unitAlias = [
        ctx.getChild(1).getText(),
        ctx.getChild(3).getText()
      ]
    } else if (ctx.children.length === 5) {
      unitAlias = [
        null,
        ctx.getChild(3).getText()
      ]
    }

    return {
      path: pathString.substring(1, pathString.length - 1),
      unitAlias: unitAlias,
      symbolAliases: symbolAliases
    }
  },

  EventDefinition: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      parameters: this.visit(ctx.indexedParameterList()),
      isAnonymous: false // @TODO: implement this
    }
  },

  IndexedParameterList: function (ctx) {
    var len = ctx.typeName().length

    var parameters = []
    for (var i = 0; i < len; i++) {
      var type = this.visit(ctx.typeName(i))
      var name = ctx.Identifier(i).getText()

      parameters.push({
        type: 'VariableDeclaration',
        typeName: type,
        name: name,
        isStateVar: false,
        isIndexed: false // @TODO: fix
      })
    }

    return {
      type: 'ParameterList',
      parameters: parameters
    }
  },

  ParameterList: function (ctx) {
    var len = ctx.typeName().length

    var parameters = []
    for (var i = 0; i < len; i++) {
      var type = this.visit(ctx.typeName(i))
      var name = ctx.Identifier(i).getText()
      parameters.push({
        type: 'VariableDeclaration',
        typeName: type,
        name: name,
        isStateVar: false,
        isIndexed: false
      })
    }

    return {
      type: 'ParameterList',
      parameters: parameters
    }
  },

  InlineAssemblyStatement: function (ctx) {
    var language = null
    if (ctx.StringLiteral()) {
      language = ctx.StringLiteral()
      language = language.substring(1, language.length - 1)
    }

    return {
      language: language,
      body: this.visit(ctx.inlineAssemblyBlock())
    }
  },

  InlineAssemblyBlock: function (ctx) {
    var operations = ctx.assemblyItem()
      .map(it => this.visit(it))

    return { operations: operations }
  },

  AssemblyItem: function (ctx) {
    if (ctx.HexLiteral()) {
      return {
        type: 'NumberLiteral',
        value: ctx.HexLiteral().getText()
      }
    }

    if (ctx.Identifier()) {
      return {
        type: 'Identifier',
        value: ctx.Identifier().getText()
      }
    }

    if (ctx.StringLiteral()) {
      var text = ctx.getText()
      return {
        type: 'StringLiteral',
        value: text.substring(1, text.length - 1)
      }
    }
    return this.visit(ctx.getChild(0))
  },

  AssemblyLocalBinding: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      expression: this.visit(ctx.functionalAssemblyExpression())
    }
  },

  FunctionalAssemblyExpression: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      arguments: this.visit(ctx.assemblyItem())
    }
  },

  AssemblyAssignment: function (ctx) {
    return {
      name: ctx.Identifier().getText(),
      expression: this.visit(ctx.functionalAssemblyExpression())
    }
  },

  AssemblyLabel: function (ctx) {
    return {
      name: ctx.Identifier().getText()
    }
  }
}

function ASTBuilder (options) {
  antlr4.tree.ParseTreeVisitor.call(this)
  this.options = options
}

ASTBuilder.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype)
ASTBuilder.prototype.constructor = ASTBuilder

ASTBuilder.prototype._loc = function (ctx) {
  var sourceLocation = {
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

ASTBuilder.prototype._range = function (ctx) {
  return { range: [ctx.start.start, ctx.stop.stop] }
}

ASTBuilder.prototype.meta = function (ctx) {
  var ret = {}
  if (this.options.loc) { ret = Object.assign(ret, this._loc(ctx)) }
  if (this.options.range) { ret = Object.assign(ret, this._range(ctx)) }
  return ret
}

ASTBuilder.prototype.visit = function (ctx) {
  if (ctx == null) {
    return null
  }

  if (Array.isArray(ctx)) {
    return ctx.map(function (child) {
      return this.visit(child)
    }, this)
  }

  var name = ctx.constructor.name
  if (name.endsWith('Context')) {
    name = name.substring(0, name.length - 'Context'.length)
  }

  var node = { type: name }

  if (name in transformAST) {
    Object.assign(node,
      transformAST[name].call(this, ctx)
    )
  }

  Object.assign(node, this.meta(ctx))

  return node
}

module.exports = ASTBuilder
