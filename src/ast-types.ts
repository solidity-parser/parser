// Base on the original type definitions for solidity-parser-antlr 0.2
// by Leonid Logvinov <https://github.com/LogvinovLeon>
//    Alex Browne <https://github.com/albrow>
//    Xiao Liang <https://github.com/yxliang01>

interface Location {
  start: {
    line: number
    column: number
  }
  end: {
    line: number
    column: number
  }
}

export interface BaseASTNode {
  type: ASTNodeTypeString
  range?: [number, number]
  loc?: Location
}

export interface SourceUnit extends BaseASTNode {
  type: 'SourceUnit'
  children: ASTNode[]
}

export interface ContractDefinition extends BaseASTNode {
  type: 'ContractDefinition'
  name: string
  baseContracts: InheritanceSpecifier[]
  kind: string
  subNodes: BaseASTNode[]
}

export interface InheritanceSpecifier extends BaseASTNode {
  type: 'InheritanceSpecifier'
  baseName: UserDefinedTypeName
  arguments: Expression[]
}

export interface UserDefinedTypeName extends BaseASTNode {
  type: 'UserDefinedTypeName'
  namePath: string
}

export const astNodeTypes = [
  'SourceUnit',
  'PragmaDirective',
  'ImportDirective',
  'ContractDefinition',
  'InheritanceSpecifier',
  'StateVariableDeclaration',
  'UsingForDeclaration',
  'StructDefinition',
  'ModifierDefinition',
  'ModifierInvocation',
  'FunctionDefinition',
  'EventDefinition',
  'EnumValue',
  'EnumDefinition',
  'VariableDeclaration',
  'UserDefinedTypeName',
  'Mapping',
  'ArrayTypeName',
  'FunctionTypeName',
  'Block',
  'ExpressionStatement',
  'IfStatement',
  'WhileStatement',
  'ForStatement',
  'InlineAssemblyStatement',
  'DoWhileStatement',
  'ContinueStatement',
  'Break',
  'Continue',
  'BreakStatement',
  'ReturnStatement',
  'EmitStatement',
  'ThrowStatement',
  'VariableDeclarationStatement',
  'ElementaryTypeName',
  'FunctionCall',
  'AssemblyBlock',
  'AssemblyCall',
  'AssemblyLocalDefinition',
  'AssemblyAssignment',
  'AssemblyStackAssignment',
  'LabelDefinition',
  'AssemblySwitch',
  'AssemblyCase',
  'AssemblyFunctionDefinition',
  'AssemblyFunctionReturns',
  'AssemblyFor',
  'AssemblyIf',
  'SubAssembly',
  'TupleExpression',
  'TypeNameExpression',
  'NameValueExpression',
  'BooleanLiteral',
  'NumberLiteral',
  'Identifier',
  'BinaryOperation',
  'UnaryOperation',
  'NewExpression',
  'Conditional',
  'StringLiteral',
  'HexLiteral',
  'HexNumber',
  'DecimalNumber',
  'MemberAccess',
  'IndexAccess',
  'IndexRangeAccess',
  'NameValueList',
  'UncheckedStatement',
  'TryStatement',
  'CatchClause',
  'FileLevelConstant',
  'AssemblyMemberAccess',
] as const

export type ASTNodeTypeString = typeof astNodeTypes[number]

export interface PragmaDirective extends BaseASTNode {
  type: 'PragmaDirective'
  name: string
  value: string
}
export interface ImportDirective extends BaseASTNode {
  type: 'ImportDirective'
  path: string
  unitAlias: string | null
  symbolAliases: Array<[string, string | null]> | null
}
export interface StateVariableDeclaration extends BaseASTNode {
  type: 'StateVariableDeclaration'
  variables: StateVariableDeclarationVariable[]
  initialValue: Expression | null
}
export interface FileLevelConstant extends BaseASTNode {
  type: 'FileLevelConstant'
  typeName: TypeName
  name: string
  initialValue: Expression
}
export interface UsingForDeclaration extends BaseASTNode {
  type: 'UsingForDeclaration'
  typeName: TypeName | null
  libraryName: string
}
export interface StructDefinition extends BaseASTNode {
  type: 'StructDefinition'
  name: string
  members: VariableDeclaration[]
}
export interface ModifierDefinition extends BaseASTNode {
  type: 'ModifierDefinition'
  name: string
  parameters: null | VariableDeclaration[]
  isVirtual: boolean
  override: null | UserDefinedTypeName[]
  body: Block
}
export interface ModifierInvocation extends BaseASTNode {
  type: 'ModifierInvocation'
  name: string
  arguments: Expression[] | null
}
export interface FunctionDefinition extends BaseASTNode {
  type: 'FunctionDefinition'
  name: string | null
  parameters: VariableDeclaration[]
  modifiers: ModifierInvocation[]
  stateMutability: 'pure' | 'constant' | 'payable' | 'view' | null
  visibility: 'default' | 'external' | 'internal' | 'public' | 'private'
  returnParameters: VariableDeclaration[] | null
  body: Block | null
  override: UserDefinedTypeName[] | null
  isConstructor: boolean
  isReceiveEther: boolean
  isFallback: boolean
  isVirtual: boolean
}
export interface EventDefinition extends BaseASTNode {
  type: 'EventDefinition'
  name: string
  parameters: VariableDeclaration[]
  isAnonymous: boolean
}
export interface EnumValue extends BaseASTNode {
  type: 'EnumValue'
  name: string
}
export interface EnumDefinition extends BaseASTNode {
  type: 'EnumDefinition'
  name: string
  members: EnumValue[]
}
export interface VariableDeclaration extends BaseASTNode {
  type: 'VariableDeclaration'
  isIndexed: boolean
  isStateVar: boolean
  typeName: TypeName | null
  name: string | null
  isDeclaredConst?: boolean
  storageLocation: string | null
  expression: Expression | null
  visibility?: 'public' | 'private' | 'internal' | 'default'
}
export interface StateVariableDeclarationVariable extends VariableDeclaration {
  override: null | UserDefinedTypeName[]
  isImmutable: boolean
}
export interface ArrayTypeName extends BaseASTNode {
  type: 'ArrayTypeName'
  baseTypeName: TypeName
  length: Expression | null
}
export interface Mapping extends BaseASTNode {
  type: 'Mapping'
  keyType: ElementaryTypeName | UserDefinedTypeName
  valueType: TypeName
}
export interface FunctionTypeName extends BaseASTNode {
  type: 'FunctionTypeName'
  parameterTypes: VariableDeclaration[]
  returnTypes: VariableDeclaration[]
  visibility: string
  stateMutability: string | null
}

export interface Block extends BaseASTNode {
  type: 'Block'
  statements: BaseASTNode[]
}
export interface ExpressionStatement extends BaseASTNode {
  type: 'ExpressionStatement'
  expression: Expression | null
}
export interface IfStatement extends BaseASTNode {
  type: 'IfStatement'
  condition: Expression
  trueBody: Statement
  falseBody: Statement | null
}
export interface UncheckedStatement extends BaseASTNode {
  type: 'UncheckedStatement'
  block: Block
}
export interface TryStatement extends BaseASTNode {
  type: 'TryStatement'
  expression: Expression
  returnParameters: VariableDeclaration[] | null
  body: Block
  catchClauses: CatchClause[]
}
export interface CatchClause extends BaseASTNode {
  type: 'CatchClause'
  isReasonStringType: boolean
  kind: string | null
  parameters: VariableDeclaration[] | null
  body: Block
}
export interface WhileStatement extends BaseASTNode {
  type: 'WhileStatement'
  condition: Expression
  body: Statement
}
export interface ForStatement extends BaseASTNode {
  type: 'ForStatement'
  initExpression: SimpleStatement | null
  conditionExpression?: Expression
  loopExpression: ExpressionStatement
  body: Statement
}
export interface InlineAssemblyStatement extends BaseASTNode {
  type: 'InlineAssemblyStatement'
  language: string | null
  body: AssemblyBlock
}
export interface DoWhileStatement extends BaseASTNode {
  type: 'DoWhileStatement'
  condition: Expression
  body: Statement
}
export interface ContinueStatement extends BaseASTNode {
  type: 'ContinueStatement'
}
export interface Break extends BaseASTNode {
  type: 'Break'
}
export interface Continue extends BaseASTNode {
  type: 'Continue'
}
export interface BreakStatement extends BaseASTNode {
  type: 'BreakStatement'
}
export interface ReturnStatement extends BaseASTNode {
  type: 'ReturnStatement'
  expression: Expression | null
}
export interface EmitStatement extends BaseASTNode {
  type: 'EmitStatement'
  eventCall: FunctionCall
}
export interface ThrowStatement extends BaseASTNode {
  type: 'ThrowStatement'
}
export interface VariableDeclarationStatement extends BaseASTNode {
  type: 'VariableDeclarationStatement'
  variables: Array<BaseASTNode | null>
  initialValue: Expression | null
}
export interface ElementaryTypeName extends BaseASTNode {
  type: 'ElementaryTypeName'
  name: string
  stateMutability: string | null
}
export interface FunctionCall extends BaseASTNode {
  type: 'FunctionCall'
  expression: Expression
  arguments: Expression[]
  names: string[]
}
export interface AssemblyBlock extends BaseASTNode {
  type: 'AssemblyBlock'
  operations: AssemblyItem[]
}
export interface AssemblyCall extends BaseASTNode {
  type: 'AssemblyCall'
  functionName: string
  arguments: AssemblyExpression[]
}
export interface AssemblyLocalDefinition extends BaseASTNode {
  type: 'AssemblyLocalDefinition'
  names: Identifier[] | AssemblyMemberAccess[]
  expression: AssemblyExpression | null
}
export interface AssemblyAssignment extends BaseASTNode {
  type: 'AssemblyAssignment'
  names: Identifier[] | AssemblyMemberAccess[]
  expression: AssemblyExpression
}
export interface AssemblyStackAssignment extends BaseASTNode {
  type: 'AssemblyStackAssignment'
  name: string
}
export interface LabelDefinition extends BaseASTNode {
  type: 'LabelDefinition'
  name: string
}
export interface AssemblySwitch extends BaseASTNode {
  type: 'AssemblySwitch'
  expression: AssemblyExpression
  cases: AssemblyCase[]
}
export interface AssemblyCase extends BaseASTNode {
  type: 'AssemblyCase'
  value: AssemblyLiteral | null
  block: AssemblyBlock
  default: boolean
}
export interface AssemblyFunctionDefinition extends BaseASTNode {
  type: 'AssemblyFunctionDefinition'
  name: string
  arguments: Identifier[]
  returnArguments: Identifier[]
  body: AssemblyBlock
}
export interface AssemblyFunctionReturns extends BaseASTNode {
  type: 'AssemblyFunctionReturns'
}
export interface AssemblyFor extends BaseASTNode {
  type: 'AssemblyFor'
  pre: AssemblyBlock | AssemblyExpression
  condition: AssemblyExpression
  post: AssemblyBlock | AssemblyExpression
  body: AssemblyBlock
}
export interface AssemblyIf extends BaseASTNode {
  type: 'AssemblyIf'
  condition: AssemblyExpression
  body: AssemblyBlock
}
export type AssemblyLiteral =
  | StringLiteral
  | DecimalNumber
  | HexNumber
  | HexLiteral
export interface SubAssembly extends BaseASTNode {
  type: 'SubAssembly'
}
export interface AssemblyMemberAccess extends BaseASTNode {
  type: 'AssemblyMemberAccess'
  expression: Identifier
  memberName: Identifier
}
export interface NewExpression extends BaseASTNode {
  type: 'NewExpression'
  typeName: TypeName
}
export interface TupleExpression extends BaseASTNode {
  type: 'TupleExpression'
  components: Array<BaseASTNode | null>
  isArray: boolean
}
export interface TypeNameExpression extends BaseASTNode {
  type: 'TypeNameExpression'
  typeName: ElementaryTypeName | UserDefinedTypeName | ArrayTypeName
}
export interface NameValueExpression extends BaseASTNode {
  type: 'NameValueExpression'
  expression: Expression
  arguments: NameValueList
}
export interface NumberLiteral extends BaseASTNode {
  type: 'NumberLiteral'
  number: string
  subdenomination:
    | null
    | 'wei'
    | 'szabo'
    | 'finney'
    | 'ether'
    | 'seconds'
    | 'minutes'
    | 'hours'
    | 'days'
    | 'weeks'
    | 'years'
}
export interface BooleanLiteral extends BaseASTNode {
  type: 'BooleanLiteral'
  value: boolean
}
export interface HexLiteral extends BaseASTNode {
  type: 'HexLiteral'
  value: string
  parts: string[]
}
export interface StringLiteral extends BaseASTNode {
  type: 'StringLiteral'
  value: string
  parts: string[]
  isUnicode: boolean[]
}
export interface Identifier extends BaseASTNode {
  type: 'Identifier'
  name: string
}

export const binaryOpValues = [
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
  ',,',
  '&',
  ',',
  '^',
  '<',
  '>',
  '<=',
  '>=',
  '==',
  '!=',
  '=',
  ',=',
  '^=',
  '&=',
  '<<=',
  '>>=',
  '+=',
  '-=',
  '*=',
  '/=',
  '%=',
  '|',
  '|='
] as const
export type BinOp = typeof binaryOpValues[number]

export const unaryOpValues = [
  '-',
  '+',
  '++',
  '~',
  'after',
  'delete',
  '!',
] as const
export type UnaryOp = typeof unaryOpValues[number]

export interface BinaryOperation extends BaseASTNode {
  type: 'BinaryOperation'
  left: Expression
  right: Expression
  operator: BinOp
}
export interface UnaryOperation extends BaseASTNode {
  type: 'UnaryOperation'
  operator: UnaryOp
  subExpression: Expression
  isPrefix: boolean
}
export interface Conditional extends BaseASTNode {
  type: 'Conditional'
  condition: Expression
  trueExpression: Expression
  falseExpression: Expression
}
export interface IndexAccess extends BaseASTNode {
  type: 'IndexAccess'
  base: Expression
  index: Expression
}
export interface IndexRangeAccess extends BaseASTNode {
  type: 'IndexRangeAccess'
  base: Expression
  indexStart?: Expression
  indexEnd?: Expression
}
export interface MemberAccess extends BaseASTNode {
  type: 'MemberAccess'
  expression: Expression
  memberName: string
}
export interface HexNumber extends BaseASTNode {
  type: 'HexNumber'
  value: string
}
export interface DecimalNumber extends BaseASTNode {
  type: 'DecimalNumber'
  value: string
}
export interface NameValueList extends BaseASTNode {
  type: 'NameValueList'
  names: string[]
  arguments: Expression[]
}
export type ASTNode =
  | SourceUnit
  | PragmaDirective
  | ImportDirective
  | ContractDefinition
  | InheritanceSpecifier
  | StateVariableDeclaration
  | UsingForDeclaration
  | StructDefinition
  | ModifierDefinition
  | ModifierInvocation
  | FunctionDefinition
  | EventDefinition
  | EnumValue
  | EnumDefinition
  | VariableDeclaration
  | TypeName
  | UserDefinedTypeName
  | Mapping
  | FunctionTypeName
  | Block
  | Statement
  | ElementaryTypeName
  | AssemblyBlock
  | AssemblyCall
  | AssemblyLocalDefinition
  | AssemblyAssignment
  | AssemblyStackAssignment
  | LabelDefinition
  | AssemblySwitch
  | AssemblyCase
  | AssemblyFunctionDefinition
  | AssemblyFunctionReturns
  | AssemblyFor
  | AssemblyIf
  | AssemblyLiteral
  | SubAssembly
  | TupleExpression
  | TypeNameExpression
  | BinaryOperation
  | Conditional
  | IndexAccess
  | IndexRangeAccess
  | AssemblyItem
  | Expression
  | NameValueList
  | AssemblyMemberAccess
  | CatchClause
  | FileLevelConstant

export type AssemblyItem =
  | Identifier
  | AssemblyBlock
  | AssemblyExpression
  | AssemblyLocalDefinition
  | AssemblyAssignment
  | AssemblyStackAssignment
  | LabelDefinition
  | AssemblySwitch
  | AssemblyFunctionDefinition
  | AssemblyFor
  | AssemblyIf
  | Break
  | Continue
  | SubAssembly
  | NumberLiteral
  | StringLiteral
  | HexNumber
  | HexLiteral
  | DecimalNumber
export type AssemblyExpression = AssemblyCall | AssemblyLiteral
export type Expression =
  | IndexAccess
  | IndexRangeAccess
  | TupleExpression
  | BinaryOperation
  | Conditional
  | MemberAccess
  | FunctionCall
  | UnaryOperation
  | NewExpression
  | PrimaryExpression
  | NameValueExpression
export type PrimaryExpression =
  | BooleanLiteral
  | HexLiteral
  | StringLiteral
  | NumberLiteral
  | Identifier
  | TupleExpression
  | TypeNameExpression
export type SimpleStatement = VariableDeclarationStatement | ExpressionStatement
export type TypeName =
  | ElementaryTypeName
  | UserDefinedTypeName
  | Mapping
  | ArrayTypeName
  | FunctionTypeName
export type Statement =
  | IfStatement
  | WhileStatement
  | ForStatement
  | Block
  | InlineAssemblyStatement
  | DoWhileStatement
  | ContinueStatement
  | BreakStatement
  | ReturnStatement
  | EmitStatement
  | ThrowStatement
  | SimpleStatement
  | VariableDeclarationStatement
  | UncheckedStatement
  | TryStatement

interface ASTVisitorEnter {
  SourceUnit?: (node: SourceUnit) => any
  PragmaDirective?: (node: PragmaDirective) => any
  ImportDirective?: (node: ImportDirective) => any
  ContractDefinition?: (node: ContractDefinition) => any
  InheritanceSpecifier?: (node: InheritanceSpecifier) => any
  StateVariableDeclaration?: (node: StateVariableDeclaration) => any
  UsingForDeclaration?: (node: UsingForDeclaration) => any
  StructDefinition?: (node: StructDefinition) => any
  ModifierDefinition?: (node: ModifierDefinition) => any
  ModifierInvocation?: (node: ModifierInvocation) => any
  FunctionDefinition?: (node: FunctionDefinition) => any
  EventDefinition?: (node: EventDefinition) => any
  EnumValue?: (node: EnumValue) => any
  EnumDefinition?: (node: EnumDefinition) => any
  VariableDeclaration?: (node: VariableDeclaration) => any
  UserDefinedTypeName?: (node: UserDefinedTypeName) => any
  Mapping?: (node: Mapping) => any
  ArrayTypeName?: (node: ArrayTypeName) => any
  FunctionTypeName?: (node: FunctionTypeName) => any
  Block?: (node: Block) => any
  ExpressionStatement?: (node: ExpressionStatement) => any
  IfStatement?: (node: IfStatement) => any
  WhileStatement?: (node: WhileStatement) => any
  ForStatement?: (node: ForStatement) => any
  InlineAssemblyStatement?: (node: InlineAssemblyStatement) => any
  DoWhileStatement?: (node: DoWhileStatement) => any
  ContinueStatement?: (node: ContinueStatement) => any
  Break?: (node: Break) => any
  Continue?: (node: Continue) => any
  BreakStatement?: (node: BreakStatement) => any
  ReturnStatement?: (node: ReturnStatement) => any
  EmitStatement?: (node: EmitStatement) => any
  ThrowStatement?: (node: ThrowStatement) => any
  VariableDeclarationStatement?: (node: VariableDeclarationStatement) => any
  ElementaryTypeName?: (node: ElementaryTypeName) => any
  FunctionCall?: (node: FunctionCall) => any
  AssemblyBlock?: (node: AssemblyBlock) => any
  AssemblyCall?: (node: AssemblyCall) => any
  AssemblyLocalDefinition?: (node: AssemblyLocalDefinition) => any
  AssemblyAssignment?: (node: AssemblyAssignment) => any
  AssemblyStackAssignment?: (node: AssemblyStackAssignment) => any
  LabelDefinition?: (node: LabelDefinition) => any
  AssemblySwitch?: (node: AssemblySwitch) => any
  AssemblyCase?: (node: AssemblyCase) => any
  AssemblyFunctionDefinition?: (node: AssemblyFunctionDefinition) => any
  AssemblyFunctionReturns?: (node: AssemblyFunctionReturns) => any
  AssemblyFor?: (node: AssemblyFor) => any
  AssemblyIf?: (node: AssemblyIf) => any
  SubAssembly?: (node: SubAssembly) => any
  TupleExpression?: (node: TupleExpression) => any
  TypeNameExpression?: (node: TypeNameExpression) => any
  NameValueExpression?: (node: NameValueExpression) => any
  BooleanLiteral?: (node: BooleanLiteral) => any
  NumberLiteral?: (node: NumberLiteral) => any
  Identifier?: (node: Identifier) => any
  BinaryOperation?: (node: BinaryOperation) => any
  UnaryOperation?: (node: UnaryOperation) => any
  NewExpression?: (node: NewExpression) => any
  Conditional?: (node: Conditional) => any
  StringLiteral?: (node: StringLiteral) => any
  HexLiteral?: (node: HexLiteral) => any
  HexNumber?: (node: HexNumber) => any
  DecimalNumber?: (node: DecimalNumber) => any
  MemberAccess?: (node: MemberAccess) => any
  IndexAccess?: (node: IndexAccess) => any
  IndexRangeAccess?: (node: IndexRangeAccess) => any
  NameValueList?: (node: NameValueList) => any
  UncheckedStatement?: (node: UncheckedStatement) => any
  TryStatement?: (node: TryStatement) => any
  CatchClause?: (node: CatchClause) => any
  FileLevelConstant?: (node: FileLevelConstant) => any
  AssemblyMemberAccess?: (node: AssemblyMemberAccess) => any
}

interface ASTVisitorExit {
  'SourceUnit:exit'?: (node: SourceUnit) => any
  'PragmaDirective:exit'?: (node: PragmaDirective) => any
  'ImportDirective:exit'?: (node: ImportDirective) => any
  'ContractDefinition:exit'?: (node: ContractDefinition) => any
  'InheritanceSpecifier:exit'?: (node: InheritanceSpecifier) => any
  'StateVariableDeclaration:exit'?: (node: StateVariableDeclaration) => any
  'UsingForDeclaration:exit'?: (node: UsingForDeclaration) => any
  'StructDefinition:exit'?: (node: StructDefinition) => any
  'ModifierDefinition:exit'?: (node: ModifierDefinition) => any
  'ModifierInvocation:exit'?: (node: ModifierInvocation) => any
  'FunctionDefinition:exit'?: (node: FunctionDefinition) => any
  'EventDefinition:exit'?: (node: EventDefinition) => any
  'EnumValue:exit'?: (node: EnumValue) => any
  'EnumDefinition:exit'?: (node: EnumDefinition) => any
  'VariableDeclaration:exit'?: (node: VariableDeclaration) => any
  'UserDefinedTypeName:exit'?: (node: UserDefinedTypeName) => any
  'Mapping:exit'?: (node: Mapping) => any
  'ArrayTypeName:exit'?: (node: ArrayTypeName) => any
  'FunctionTypeName:exit'?: (node: FunctionTypeName) => any
  'Block:exit'?: (node: Block) => any
  'ExpressionStatement:exit'?: (node: ExpressionStatement) => any
  'IfStatement:exit'?: (node: IfStatement) => any
  'WhileStatement:exit'?: (node: WhileStatement) => any
  'ForStatement:exit'?: (node: ForStatement) => any
  'InlineAssemblyStatement:exit'?: (node: InlineAssemblyStatement) => any
  'DoWhileStatement:exit'?: (node: DoWhileStatement) => any
  'ContinueStatement:exit'?: (node: ContinueStatement) => any
  'Break:exit'?: (node: Break) => any
  'Continue:exit'?: (node: Continue) => any
  'BreakStatement:exit'?: (node: BreakStatement) => any
  'ReturnStatement:exit'?: (node: ReturnStatement) => any
  'EmitStatement:exit'?: (node: EmitStatement) => any
  'ThrowStatement:exit'?: (node: ThrowStatement) => any
  'VariableDeclarationStatement:exit'?: (
    node: VariableDeclarationStatement
  ) => any
  'ElementaryTypeName:exit'?: (node: ElementaryTypeName) => any
  'FunctionCall:exit'?: (node: FunctionCall) => any
  'AssemblyBlock:exit'?: (node: AssemblyBlock) => any
  'AssemblyCall:exit'?: (node: AssemblyCall) => any
  'AssemblyLocalDefinition:exit'?: (node: AssemblyLocalDefinition) => any
  'AssemblyAssignment:exit'?: (node: AssemblyAssignment) => any
  'AssemblyStackAssignment:exit'?: (node: AssemblyStackAssignment) => any
  'LabelDefinition:exit'?: (node: LabelDefinition) => any
  'AssemblySwitch:exit'?: (node: AssemblySwitch) => any
  'AssemblyCase:exit'?: (node: AssemblyCase) => any
  'AssemblyFunctionDefinition:exit'?: (node: AssemblyFunctionDefinition) => any
  'AssemblyFunctionReturns:exit'?: (node: AssemblyFunctionReturns) => any
  'AssemblyFor:exit'?: (node: AssemblyFor) => any
  'AssemblyIf:exit'?: (node: AssemblyIf) => any
  'SubAssembly:exit'?: (node: SubAssembly) => any
  'TupleExpression:exit'?: (node: TupleExpression) => any
  'TypeNameExpression:exit'?: (node: TypeNameExpression) => any
  'NameValueExpression:exit'?: (node: NameValueExpression) => any
  'BooleanLiteral:exit'?: (node: BooleanLiteral) => any
  'NumberLiteral:exit'?: (node: NumberLiteral) => any
  'Identifier:exit'?: (node: Identifier) => any
  'BinaryOperation:exit'?: (node: BinaryOperation) => any
  'UnaryOperation:exit'?: (node: UnaryOperation) => any
  'NewExpression:exit'?: (node: NewExpression) => any
  'Conditional:exit'?: (node: Conditional) => any
  'StringLiteral:exit'?: (node: StringLiteral) => any
  'HexLiteral:exit'?: (node: HexLiteral) => any
  'HexNumber:exit'?: (node: HexNumber) => any
  'DecimalNumber:exit'?: (node: DecimalNumber) => any
  'MemberAccess:exit'?: (node: MemberAccess) => any
  'IndexAccess:exit'?: (node: IndexAccess) => any
  'IndexRangeAccess:exit'?: (node: IndexRangeAccess) => any
  'NameValueList:exit'?: (node: NameValueList) => any
  'UncheckedStatement:exit'?: (node: UncheckedStatement) => any
  'TryStatement:exit'?: (node: TryStatement) => any
  'CatchClause:exit'?: (node: CatchClause) => any
  'FileLevelConstant:exit'?: (node: FileLevelConstant) => any
  'AssemblyMemberAccess:exit'?: (node: AssemblyMemberAccess) => any
}

export type ASTVisitor = ASTVisitorEnter & ASTVisitorExit

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * This monstrosity is here to check that there are no ASTNodeTypeString without
 * a corresponding ASTNode, no ASTNode without a corresponding ASTNodeTypeString,
 * no ASTVisitorEnter callback without a corresponding ASTNode,
 * no ASTVisitorExit callback without a corresponding ASTVisitorEnter callback,
 * and so on, and so on.
 *
 * There are probably some ways to simplify this by deriving some types
 * from others.
 */
function checkTypes() {
  const astNodeType: ASTNode['type'] = '' as any
  const astNodeTypeString: ASTNodeTypeString = '' as any
  const astVisitorEnterKey: keyof ASTVisitorEnter = '' as any

  let assignAstNodeType: ASTNode['type'] = astNodeTypeString
  assignAstNodeType = astVisitorEnterKey

  let assignAstNodeTyeString: ASTNodeTypeString = astNodeType
  assignAstNodeTyeString = astVisitorEnterKey

  let assignAstVisitorEnterKey: keyof ASTVisitorEnter = astNodeType
  assignAstVisitorEnterKey = astNodeTypeString

  const astNodeTypeExit: `${ASTNode['type']}:exit` = '' as any
  const astNodeTypeStringExit: `${ASTNodeTypeString}:exit` = '' as any
  const astVisitorEnterKeyExit: `${keyof ASTVisitorEnter}:exit` = '' as any
  const astVisitorExitKey: keyof ASTVisitorExit = '' as any

  let letAstNodeTypeExit: `${ASTNode['type']}:exit` = astNodeTypeStringExit
  letAstNodeTypeExit = astVisitorEnterKeyExit
  letAstNodeTypeExit = astVisitorExitKey

  let assignAstNodeTypeStringExit: `${ASTNodeTypeString}:exit` = astNodeTypeExit
  assignAstNodeTypeStringExit = astVisitorEnterKeyExit
  assignAstNodeTypeStringExit = astVisitorExitKey

  let assignAstVisitorEnterKeyExit: `${keyof ASTVisitorEnter}:exit` = astNodeTypeExit
  assignAstVisitorEnterKeyExit = astNodeTypeStringExit
  assignAstVisitorEnterKeyExit = astVisitorExitKey

  let assignAstVisitorExitKey: keyof ASTVisitorExit = astNodeTypeExit
  assignAstVisitorExitKey = astNodeTypeStringExit
  assignAstVisitorExitKey = astVisitorEnterKeyExit
}
/* eslint-enable @typescript-eslint/no-unused-vars */
