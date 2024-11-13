// Generated from antlr/Solidity.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SolidityListener from "./SolidityListener.js";
import SolidityVisitor from "./SolidityVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SolidityParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly Int = 97;
	public static readonly Uint = 98;
	public static readonly Byte = 99;
	public static readonly Fixed = 100;
	public static readonly Ufixed = 101;
	public static readonly BooleanLiteral = 102;
	public static readonly DecimalNumber = 103;
	public static readonly HexNumber = 104;
	public static readonly NumberUnit = 105;
	public static readonly HexLiteralFragment = 106;
	public static readonly ReservedKeyword = 107;
	public static readonly AnonymousKeyword = 108;
	public static readonly BreakKeyword = 109;
	public static readonly ConstantKeyword = 110;
	public static readonly TransientKeyword = 111;
	public static readonly ImmutableKeyword = 112;
	public static readonly ContinueKeyword = 113;
	public static readonly LeaveKeyword = 114;
	public static readonly ExternalKeyword = 115;
	public static readonly IndexedKeyword = 116;
	public static readonly InternalKeyword = 117;
	public static readonly PayableKeyword = 118;
	public static readonly PrivateKeyword = 119;
	public static readonly PublicKeyword = 120;
	public static readonly VirtualKeyword = 121;
	public static readonly PureKeyword = 122;
	public static readonly TypeKeyword = 123;
	public static readonly ViewKeyword = 124;
	public static readonly GlobalKeyword = 125;
	public static readonly ConstructorKeyword = 126;
	public static readonly FallbackKeyword = 127;
	public static readonly ReceiveKeyword = 128;
	public static readonly Identifier = 129;
	public static readonly StringLiteralFragment = 130;
	public static readonly VersionLiteral = 131;
	public static readonly WS = 132;
	public static readonly COMMENT = 133;
	public static readonly LINE_COMMENT = 134;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_versionConstraint = 6;
	public static readonly RULE_importDeclaration = 7;
	public static readonly RULE_importDirective = 8;
	public static readonly RULE_importPath = 9;
	public static readonly RULE_contractDefinition = 10;
	public static readonly RULE_inheritanceSpecifier = 11;
	public static readonly RULE_contractPart = 12;
	public static readonly RULE_stateVariableDeclaration = 13;
	public static readonly RULE_fileLevelConstant = 14;
	public static readonly RULE_customErrorDefinition = 15;
	public static readonly RULE_typeDefinition = 16;
	public static readonly RULE_usingForDeclaration = 17;
	public static readonly RULE_usingForObject = 18;
	public static readonly RULE_usingForObjectDirective = 19;
	public static readonly RULE_userDefinableOperators = 20;
	public static readonly RULE_structDefinition = 21;
	public static readonly RULE_modifierDefinition = 22;
	public static readonly RULE_modifierInvocation = 23;
	public static readonly RULE_functionDefinition = 24;
	public static readonly RULE_functionDescriptor = 25;
	public static readonly RULE_returnParameters = 26;
	public static readonly RULE_modifierList = 27;
	public static readonly RULE_eventDefinition = 28;
	public static readonly RULE_enumValue = 29;
	public static readonly RULE_enumDefinition = 30;
	public static readonly RULE_parameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_eventParameterList = 33;
	public static readonly RULE_eventParameter = 34;
	public static readonly RULE_functionTypeParameterList = 35;
	public static readonly RULE_functionTypeParameter = 36;
	public static readonly RULE_variableDeclaration = 37;
	public static readonly RULE_typeName = 38;
	public static readonly RULE_userDefinedTypeName = 39;
	public static readonly RULE_mappingKey = 40;
	public static readonly RULE_mapping = 41;
	public static readonly RULE_mappingKeyName = 42;
	public static readonly RULE_mappingValueName = 43;
	public static readonly RULE_functionTypeName = 44;
	public static readonly RULE_storageLocation = 45;
	public static readonly RULE_stateMutability = 46;
	public static readonly RULE_block = 47;
	public static readonly RULE_statement = 48;
	public static readonly RULE_expressionStatement = 49;
	public static readonly RULE_ifStatement = 50;
	public static readonly RULE_tryStatement = 51;
	public static readonly RULE_catchClause = 52;
	public static readonly RULE_whileStatement = 53;
	public static readonly RULE_simpleStatement = 54;
	public static readonly RULE_uncheckedStatement = 55;
	public static readonly RULE_forStatement = 56;
	public static readonly RULE_inlineAssemblyStatement = 57;
	public static readonly RULE_inlineAssemblyStatementFlag = 58;
	public static readonly RULE_doWhileStatement = 59;
	public static readonly RULE_continueStatement = 60;
	public static readonly RULE_breakStatement = 61;
	public static readonly RULE_returnStatement = 62;
	public static readonly RULE_throwStatement = 63;
	public static readonly RULE_emitStatement = 64;
	public static readonly RULE_revertStatement = 65;
	public static readonly RULE_variableDeclarationStatement = 66;
	public static readonly RULE_variableDeclarationList = 67;
	public static readonly RULE_identifierList = 68;
	public static readonly RULE_elementaryTypeName = 69;
	public static readonly RULE_expression = 70;
	public static readonly RULE_primaryExpression = 71;
	public static readonly RULE_expressionList = 72;
	public static readonly RULE_nameValueList = 73;
	public static readonly RULE_nameValue = 74;
	public static readonly RULE_functionCallArguments = 75;
	public static readonly RULE_functionCall = 76;
	public static readonly RULE_assemblyBlock = 77;
	public static readonly RULE_assemblyItem = 78;
	public static readonly RULE_assemblyExpression = 79;
	public static readonly RULE_assemblyMember = 80;
	public static readonly RULE_assemblyCall = 81;
	public static readonly RULE_assemblyLocalDefinition = 82;
	public static readonly RULE_assemblyAssignment = 83;
	public static readonly RULE_assemblyIdentifierOrList = 84;
	public static readonly RULE_assemblyIdentifierList = 85;
	public static readonly RULE_assemblyStackAssignment = 86;
	public static readonly RULE_labelDefinition = 87;
	public static readonly RULE_assemblySwitch = 88;
	public static readonly RULE_assemblyCase = 89;
	public static readonly RULE_assemblyFunctionDefinition = 90;
	public static readonly RULE_assemblyFunctionReturns = 91;
	public static readonly RULE_assemblyFor = 92;
	public static readonly RULE_assemblyIf = 93;
	public static readonly RULE_assemblyLiteral = 94;
	public static readonly RULE_tupleExpression = 95;
	public static readonly RULE_numberLiteral = 96;
	public static readonly RULE_identifier = 97;
	public static readonly RULE_hexLiteral = 98;
	public static readonly RULE_overrideSpecifier = 99;
	public static readonly RULE_stringLiteral = 100;
	public static readonly literalNames: (string | null)[] = [ null, "'pragma'", 
                                                            "';'", "'*'", 
                                                            "'||'", "'^'", 
                                                            "'~'", "'>='", 
                                                            "'>'", "'<'", 
                                                            "'<='", "'='", 
                                                            "'as'", "'import'", 
                                                            "'from'", "'{'", 
                                                            "','", "'}'", 
                                                            "'abstract'", 
                                                            "'contract'", 
                                                            "'interface'", 
                                                            "'library'", 
                                                            "'is'", "'('", 
                                                            "')'", "'error'", 
                                                            "'using'", "'for'", 
                                                            "'|'", "'&'", 
                                                            "'+'", "'-'", 
                                                            "'/'", "'%'", 
                                                            "'=='", "'!='", 
                                                            "'struct'", 
                                                            "'modifier'", 
                                                            "'function'", 
                                                            "'returns'", 
                                                            "'event'", "'enum'", 
                                                            "'['", "']'", 
                                                            "'address'", 
                                                            "'.'", "'mapping'", 
                                                            "'=>'", "'memory'", 
                                                            "'storage'", 
                                                            "'calldata'", 
                                                            "'if'", "'else'", 
                                                            "'try'", "'catch'", 
                                                            "'while'", "'unchecked'", 
                                                            "'assembly'", 
                                                            "'do'", "'return'", 
                                                            "'throw'", "'emit'", 
                                                            "'revert'", 
                                                            "'var'", "'bool'", 
                                                            "'string'", 
                                                            "'byte'", "'++'", 
                                                            "'--'", "'new'", 
                                                            "':'", "'delete'", 
                                                            "'!'", "'**'", 
                                                            "'<<'", "'>>'", 
                                                            "'&&'", "'?'", 
                                                            "'|='", "'^='", 
                                                            "'&='", "'<<='", 
                                                            "'>>='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'let'", "':='", 
                                                            "'=:'", "'switch'", 
                                                            "'case'", "'default'", 
                                                            "'->'", "'callback'", 
                                                            "'override'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'anonymous'", 
                                                            "'break'", "'constant'", 
                                                            "'transient'", 
                                                            "'immutable'", 
                                                            "'continue'", 
                                                            "'leave'", "'external'", 
                                                            "'indexed'", 
                                                            "'internal'", 
                                                            "'payable'", 
                                                            "'private'", 
                                                            "'public'", 
                                                            "'virtual'", 
                                                            "'pure'", "'type'", 
                                                            "'view'", "'global'", 
                                                            "'constructor'", 
                                                            "'fallback'", 
                                                            "'receive'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "Int", 
                                                             "Uint", "Byte", 
                                                             "Fixed", "Ufixed", 
                                                             "BooleanLiteral", 
                                                             "DecimalNumber", 
                                                             "HexNumber", 
                                                             "NumberUnit", 
                                                             "HexLiteralFragment", 
                                                             "ReservedKeyword", 
                                                             "AnonymousKeyword", 
                                                             "BreakKeyword", 
                                                             "ConstantKeyword", 
                                                             "TransientKeyword", 
                                                             "ImmutableKeyword", 
                                                             "ContinueKeyword", 
                                                             "LeaveKeyword", 
                                                             "ExternalKeyword", 
                                                             "IndexedKeyword", 
                                                             "InternalKeyword", 
                                                             "PayableKeyword", 
                                                             "PrivateKeyword", 
                                                             "PublicKeyword", 
                                                             "VirtualKeyword", 
                                                             "PureKeyword", 
                                                             "TypeKeyword", 
                                                             "ViewKeyword", 
                                                             "GlobalKeyword", 
                                                             "ConstructorKeyword", 
                                                             "FallbackKeyword", 
                                                             "ReceiveKeyword", 
                                                             "Identifier", 
                                                             "StringLiteralFragment", 
                                                             "VersionLiteral", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
		"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
		"typeDefinition", "usingForDeclaration", "usingForObject", "usingForObjectDirective", 
		"userDefinableOperators", "structDefinition", "modifierDefinition", "modifierInvocation", 
		"functionDefinition", "functionDescriptor", "returnParameters", "modifierList", 
		"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
		"eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", 
		"variableDeclaration", "typeName", "userDefinedTypeName", "mappingKey", 
		"mapping", "mappingKeyName", "mappingValueName", "functionTypeName", "storageLocation", 
		"stateMutability", "block", "statement", "expressionStatement", "ifStatement", 
		"tryStatement", "catchClause", "whileStatement", "simpleStatement", "uncheckedStatement", 
		"forStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
		"variableDeclarationList", "identifierList", "elementaryTypeName", "expression", 
		"primaryExpression", "expressionList", "nameValueList", "nameValue", "functionCallArguments", 
		"functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", 
		"assemblyMember", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", 
		"assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", 
		"labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", 
		"assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", 
		"tupleExpression", "numberLiteral", "identifier", "hexLiteral", "overrideSpecifier", 
		"stringLiteral",
	];
	public get grammarFileName(): string { return "Solidity.g4"; }
	public get literalNames(): (string | null)[] { return SolidityParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SolidityParser.symbolicNames; }
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }
	public get serializedATN(): number[] { return SolidityParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SolidityParser._ATN, SolidityParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let localctx: SourceUnitContext = new SourceUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 104620034) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2080392501) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3498573949) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 7) !== 0)) {
				{
				this.state = 213;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 202;
					this.pragmaDirective();
					}
					break;
				case 2:
					{
					this.state = 203;
					this.importDirective();
					}
					break;
				case 3:
					{
					this.state = 204;
					this.contractDefinition();
					}
					break;
				case 4:
					{
					this.state = 205;
					this.enumDefinition();
					}
					break;
				case 5:
					{
					this.state = 206;
					this.eventDefinition();
					}
					break;
				case 6:
					{
					this.state = 207;
					this.structDefinition();
					}
					break;
				case 7:
					{
					this.state = 208;
					this.functionDefinition();
					}
					break;
				case 8:
					{
					this.state = 209;
					this.fileLevelConstant();
					}
					break;
				case 9:
					{
					this.state = 210;
					this.customErrorDefinition();
					}
					break;
				case 10:
					{
					this.state = 211;
					this.typeDefinition();
					}
					break;
				case 11:
					{
					this.state = 212;
					this.usingForDeclaration();
					}
					break;
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
			this.match(SolidityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SolidityParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.match(SolidityParser.T__0);
			this.state = 221;
			this.pragmaName();
			this.state = 222;
			this.pragmaValue();
			this.state = 223;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let localctx: PragmaNameContext = new PragmaNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SolidityParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let localctx: PragmaValueContext = new PragmaValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 227;
				this.match(SolidityParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 228;
				this.version();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 229;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let localctx: VersionContext = new VersionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this.versionConstraint();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4080) !== 0) || _la===103 || _la===131) {
				{
				{
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 233;
					this.match(SolidityParser.T__3);
					}
				}

				this.state = 236;
				this.versionConstraint();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let localctx: VersionOperatorContext = new VersionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let localctx: VersionConstraintContext = new VersionConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0)) {
					{
					this.state = 244;
					this.versionOperator();
					}
				}

				this.state = 247;
				this.match(SolidityParser.VersionLiteral);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0)) {
					{
					this.state = 248;
					this.versionOperator();
					}
				}

				this.state = 251;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this.identifier();
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 255;
				this.match(SolidityParser.T__11);
				this.state = 256;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let localctx: ImportDirectiveContext = new ImportDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 259;
				this.match(SolidityParser.T__12);
				this.state = 260;
				this.importPath();
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 261;
					this.match(SolidityParser.T__11);
					this.state = 262;
					this.identifier();
					}
				}

				this.state = 265;
				this.match(SolidityParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 267;
				this.match(SolidityParser.T__12);
				this.state = 270;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 268;
					this.match(SolidityParser.T__2);
					}
					break;
				case 14:
				case 25:
				case 44:
				case 50:
				case 62:
				case 95:
				case 114:
				case 118:
				case 125:
				case 126:
				case 128:
				case 129:
					{
					this.state = 269;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 272;
					this.match(SolidityParser.T__11);
					this.state = 273;
					this.identifier();
					}
				}

				this.state = 276;
				this.match(SolidityParser.T__13);
				this.state = 277;
				this.importPath();
				this.state = 278;
				this.match(SolidityParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 280;
				this.match(SolidityParser.T__12);
				this.state = 281;
				this.match(SolidityParser.T__14);
				this.state = 282;
				this.importDeclaration();
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 283;
					this.match(SolidityParser.T__15);
					this.state = 284;
					this.importDeclaration();
					}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 290;
				this.match(SolidityParser.T__16);
				this.state = 291;
				this.match(SolidityParser.T__13);
				this.state = 292;
				this.importPath();
				this.state = 293;
				this.match(SolidityParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let localctx: ImportPathContext = new ImportPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SolidityParser.RULE_importPath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(SolidityParser.StringLiteralFragment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let localctx: ContractDefinitionContext = new ContractDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 299;
				this.match(SolidityParser.T__17);
				}
			}

			this.state = 302;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3670016) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 303;
			this.identifier();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 304;
				this.match(SolidityParser.T__21);
				this.state = 305;
				this.inheritanceSpecifier();
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 306;
					this.match(SolidityParser.T__15);
					this.state = 307;
					this.inheritanceSpecifier();
					}
					}
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 315;
			this.match(SolidityParser.T__14);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100679680) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2080392503) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3498573949) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 7) !== 0)) {
				{
				{
				this.state = 316;
				this.contractPart();
				}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 322;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.userDefinedTypeName();
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 325;
				this.match(SolidityParser.T__22);
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
					{
					this.state = 326;
					this.expressionList();
					}
				}

				this.state = 329;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contractPart(): ContractPartContext {
		let localctx: ContractPartContext = new ContractPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SolidityParser.RULE_contractPart);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 332;
				this.stateVariableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 333;
				this.usingForDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 334;
				this.structDefinition();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 335;
				this.modifierDefinition();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 336;
				this.functionDefinition();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 337;
				this.eventDefinition();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 338;
				this.enumDefinition();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 339;
				this.customErrorDefinition();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 340;
				this.typeDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			this.typeName(0);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 27377665) !== 0)) {
				{
				this.state = 351;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 120:
					{
					this.state = 344;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case 117:
					{
					this.state = 345;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case 119:
					{
					this.state = 346;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case 110:
					{
					this.state = 347;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case 111:
					{
					this.state = 348;
					this.match(SolidityParser.TransientKeyword);
					}
					break;
				case 112:
					{
					this.state = 349;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case 96:
					{
					this.state = 350;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 356;
			this.identifier();
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 357;
				this.match(SolidityParser.T__10);
				this.state = 358;
				this.expression(0);
				}
			}

			this.state = 361;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fileLevelConstant(): FileLevelConstantContext {
		let localctx: FileLevelConstantContext = new FileLevelConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SolidityParser.RULE_fileLevelConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this.typeName(0);
			this.state = 364;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 365;
			this.identifier();
			this.state = 366;
			this.match(SolidityParser.T__10);
			this.state = 367;
			this.expression(0);
			this.state = 368;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public customErrorDefinition(): CustomErrorDefinitionContext {
		let localctx: CustomErrorDefinitionContext = new CustomErrorDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SolidityParser.RULE_customErrorDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this.match(SolidityParser.T__24);
			this.state = 371;
			this.identifier();
			this.state = 372;
			this.parameterList();
			this.state = 373;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let localctx: TypeDefinitionContext = new TypeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SolidityParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 375;
			this.match(SolidityParser.TypeKeyword);
			this.state = 376;
			this.identifier();
			this.state = 377;
			this.match(SolidityParser.T__21);
			this.state = 378;
			this.elementaryTypeName();
			this.state = 379;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usingForDeclaration(): UsingForDeclarationContext {
		let localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SolidityParser.RULE_usingForDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 381;
			this.match(SolidityParser.T__25);
			this.state = 382;
			this.usingForObject();
			this.state = 383;
			this.match(SolidityParser.T__26);
			this.state = 386;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 384;
				this.match(SolidityParser.T__2);
				}
				break;
			case 14:
			case 25:
			case 38:
			case 44:
			case 46:
			case 50:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 95:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 114:
			case 118:
			case 125:
			case 126:
			case 128:
			case 129:
				{
				this.state = 385;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 388;
				this.match(SolidityParser.GlobalKeyword);
				}
			}

			this.state = 391;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usingForObject(): UsingForObjectContext {
		let localctx: UsingForObjectContext = new UsingForObjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SolidityParser.RULE_usingForObject);
		let _la: number;
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
			case 25:
			case 44:
			case 50:
			case 62:
			case 95:
			case 114:
			case 118:
			case 125:
			case 126:
			case 128:
			case 129:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 393;
				this.userDefinedTypeName();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 394;
				this.match(SolidityParser.T__14);
				this.state = 395;
				this.usingForObjectDirective();
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 396;
					this.match(SolidityParser.T__15);
					this.state = 397;
					this.usingForObjectDirective();
					}
					}
					this.state = 402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 403;
				this.match(SolidityParser.T__16);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usingForObjectDirective(): UsingForObjectDirectiveContext {
		let localctx: UsingForObjectDirectiveContext = new UsingForObjectDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SolidityParser.RULE_usingForObjectDirective);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.userDefinedTypeName();
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 408;
				this.match(SolidityParser.T__11);
				this.state = 409;
				this.userDefinableOperators();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userDefinableOperators(): UserDefinableOperatorsContext {
		let localctx: UserDefinableOperatorsContext = new UserDefinableOperatorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SolidityParser.RULE_userDefinableOperators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 412;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4026533864) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let localctx: StructDefinitionContext = new StructDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 414;
			this.match(SolidityParser.T__35);
			this.state = 415;
			this.identifier();
			this.state = 416;
			this.match(SolidityParser.T__14);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
				{
				this.state = 417;
				this.variableDeclaration();
				this.state = 418;
				this.match(SolidityParser.T__1);
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
					{
					{
					this.state = 419;
					this.variableDeclaration();
					this.state = 420;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 429;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifierDefinition(): ModifierDefinitionContext {
		let localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this.match(SolidityParser.T__36);
			this.state = 432;
			this.identifier();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 433;
				this.parameterList();
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===96 || _la===121) {
				{
				this.state = 438;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 121:
					{
					this.state = 436;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case 96:
					{
					this.state = 437;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 443;
				this.match(SolidityParser.T__1);
				}
				break;
			case 15:
				{
				this.state = 444;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifierInvocation(): ModifierInvocationContext {
		let localctx: ModifierInvocationContext = new ModifierInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 447;
			this.identifier();
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 448;
				this.match(SolidityParser.T__22);
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
					{
					this.state = 449;
					this.expressionList();
					}
				}

				this.state = 452;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 455;
			this.functionDescriptor();
			this.state = 456;
			this.parameterList();
			this.state = 457;
			this.modifierList();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 458;
				this.returnParameters();
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 461;
				this.match(SolidityParser.T__1);
				}
				break;
			case 15:
				{
				this.state = 462;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDescriptor(): FunctionDescriptorContext {
		let localctx: FunctionDescriptorContext = new FunctionDescriptorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 465;
				this.match(SolidityParser.T__37);
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
					{
					this.state = 466;
					this.identifier();
					}
				}

				}
				break;
			case 126:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 469;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 470;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case 128:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 471;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnParameters(): ReturnParametersContext {
		let localctx: ReturnParametersContext = new ReturnParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 474;
			this.match(SolidityParser.T__38);
			this.state = 475;
			this.parameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifierList(): ModifierListContext {
		let localctx: ModifierListContext = new ModifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 4023943171) !== 0) || _la===128 || _la===129) {
				{
				this.state = 485;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 477;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;
				case 2:
					{
					this.state = 478;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case 3:
					{
					this.state = 479;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case 4:
					{
					this.state = 480;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case 5:
					{
					this.state = 481;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case 6:
					{
					this.state = 482;
					this.stateMutability();
					}
					break;
				case 7:
					{
					this.state = 483;
					this.modifierInvocation();
					}
					break;
				case 8:
					{
					this.state = 484;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventDefinition(): EventDefinitionContext {
		let localctx: EventDefinitionContext = new EventDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(SolidityParser.T__39);
			this.state = 491;
			this.identifier();
			this.state = 492;
			this.eventParameterList();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 493;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 496;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let localctx: EnumValueContext = new EnumValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let localctx: EnumDefinitionContext = new EnumDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 500;
			this.match(SolidityParser.T__40);
			this.state = 501;
			this.identifier();
			this.state = 502;
			this.match(SolidityParser.T__14);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 503;
				this.enumValue();
				}
			}

			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 506;
				this.match(SolidityParser.T__15);
				this.state = 507;
				this.enumValue();
				}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 513;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			this.match(SolidityParser.T__22);
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
				{
				this.state = 516;
				this.parameter();
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 517;
					this.match(SolidityParser.T__15);
					this.state = 518;
					this.parameter();
					}
					}
					this.state = 523;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 526;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 528;
			this.typeName(0);
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 529;
				this.storageLocation();
				}
				break;
			}
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 532;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventParameterList(): EventParameterListContext {
		let localctx: EventParameterListContext = new EventParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			this.match(SolidityParser.T__22);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
				{
				this.state = 536;
				this.eventParameter();
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 537;
					this.match(SolidityParser.T__15);
					this.state = 538;
					this.eventParameter();
					}
					}
					this.state = 543;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 546;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventParameter(): EventParameterContext {
		let localctx: EventParameterContext = new EventParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			this.typeName(0);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===116) {
				{
				this.state = 549;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 552;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameterList(): FunctionTypeParameterListContext {
		let localctx: FunctionTypeParameterListContext = new FunctionTypeParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 555;
			this.match(SolidityParser.T__22);
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
				{
				this.state = 556;
				this.functionTypeParameter();
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 557;
					this.match(SolidityParser.T__15);
					this.state = 558;
					this.functionTypeParameter();
					}
					}
					this.state = 563;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 566;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameter(): FunctionTypeParameterContext {
		let localctx: FunctionTypeParameterContext = new FunctionTypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.typeName(0);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 7) !== 0)) {
				{
				this.state = 569;
				this.storageLocation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 572;
			this.typeName(0);
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.storageLocation();
				}
				break;
			}
			this.state = 576;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, _parentState);
		let _prevctx: TypeNameContext = localctx;
		let _startState: number = 76;
		this.enterRecursionRule(localctx, 76, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 579;
				this.elementaryTypeName();
				}
				break;
			case 2:
				{
				this.state = 580;
				this.userDefinedTypeName();
				}
				break;
			case 3:
				{
				this.state = 581;
				this.mapping();
				}
				break;
			case 4:
				{
				this.state = 582;
				this.functionTypeName();
				}
				break;
			case 5:
				{
				this.state = 583;
				this.match(SolidityParser.T__43);
				this.state = 584;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 595;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TypeNameContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 587;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 588;
					this.match(SolidityParser.T__41);
					this.state = 590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
						{
						this.state = 589;
						this.expression(0);
						}
					}

					this.state = 592;
					this.match(SolidityParser.T__42);
					}
					}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
			this.identifier();
			this.state = 603;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.match(SolidityParser.T__44);
					this.state = 600;
					this.identifier();
					}
					}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mappingKey(): MappingKeyContext {
		let localctx: MappingKeyContext = new MappingKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SolidityParser.RULE_mappingKey);
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 606;
				this.elementaryTypeName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 607;
				this.userDefinedTypeName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let localctx: MappingContext = new MappingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SolidityParser.RULE_mapping);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 610;
			this.match(SolidityParser.T__45);
			this.state = 611;
			this.match(SolidityParser.T__22);
			this.state = 612;
			this.mappingKey();
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 613;
				this.mappingKeyName();
				}
			}

			this.state = 616;
			this.match(SolidityParser.T__46);
			this.state = 617;
			this.typeName(0);
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 618;
				this.mappingValueName();
				}
			}

			this.state = 621;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mappingKeyName(): MappingKeyNameContext {
		let localctx: MappingKeyNameContext = new MappingKeyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SolidityParser.RULE_mappingKeyName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 623;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mappingValueName(): MappingValueNameContext {
		let localctx: MappingValueNameContext = new MappingValueNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SolidityParser.RULE_mappingValueName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 625;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionTypeName(): FunctionTypeNameContext {
		let localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 627;
			this.match(SolidityParser.T__37);
			this.state = 628;
			this.functionTypeParameterList();
			this.state = 634;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 632;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 117:
						{
						this.state = 629;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case 115:
						{
						this.state = 630;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case 110:
					case 118:
					case 122:
					case 124:
						{
						this.state = 631;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.match(SolidityParser.T__38);
				this.state = 638;
				this.functionTypeParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public storageLocation(): StorageLocationContext {
		let localctx: StorageLocationContext = new StorageLocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 641;
			_la = this._input.LA(1);
			if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stateMutability(): StateMutabilityContext {
		let localctx: StateMutabilityContext = new StateMutabilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 643;
			_la = this._input.LA(1);
			if(!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 20737) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 645;
			this.match(SolidityParser.T__14);
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3397435456) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4294881617) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248548427) !== 0)) {
				{
				{
				this.state = 646;
				this.statement();
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 652;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SolidityParser.RULE_statement);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 654;
				this.ifStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 655;
				this.tryStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 656;
				this.whileStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 657;
				this.forStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 658;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 659;
				this.inlineAssemblyStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 660;
				this.doWhileStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 661;
				this.continueStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 662;
				this.breakStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 663;
				this.returnStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 664;
				this.throwStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 665;
				this.emitStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 666;
				this.simpleStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 667;
				this.uncheckedStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 668;
				this.revertStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 671;
			this.expression(0);
			this.state = 672;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 674;
			this.match(SolidityParser.T__50);
			this.state = 675;
			this.match(SolidityParser.T__22);
			this.state = 676;
			this.expression(0);
			this.state = 677;
			this.match(SolidityParser.T__23);
			this.state = 678;
			this.statement();
			this.state = 681;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 679;
				this.match(SolidityParser.T__51);
				this.state = 680;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 683;
			this.match(SolidityParser.T__52);
			this.state = 684;
			this.expression(0);
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 685;
				this.returnParameters();
				}
			}

			this.state = 688;
			this.block();
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 689;
				this.catchClause();
				}
				}
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this.match(SolidityParser.T__53);
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 41959424) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
					{
					this.state = 695;
					this.identifier();
					}
				}

				this.state = 698;
				this.parameterList();
				}
			}

			this.state = 701;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 703;
			this.match(SolidityParser.T__54);
			this.state = 704;
			this.match(SolidityParser.T__22);
			this.state = 705;
			this.expression(0);
			this.state = 706;
			this.match(SolidityParser.T__23);
			this.state = 707;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let localctx: SimpleStatementContext = new SimpleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 711;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 709;
				this.variableDeclarationStatement();
				}
				break;
			case 2:
				{
				this.state = 710;
				this.expressionStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uncheckedStatement(): UncheckedStatementContext {
		let localctx: UncheckedStatementContext = new UncheckedStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 713;
			this.match(SolidityParser.T__55);
			this.state = 714;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 716;
			this.match(SolidityParser.T__26);
			this.state = 717;
			this.match(SolidityParser.T__22);
			this.state = 720;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 14:
			case 23:
			case 25:
			case 30:
			case 31:
			case 38:
			case 42:
			case 44:
			case 46:
			case 50:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 95:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 106:
			case 114:
			case 118:
			case 123:
			case 125:
			case 126:
			case 128:
			case 129:
			case 130:
				{
				this.state = 718;
				this.simpleStatement();
				}
				break;
			case 2:
				{
				this.state = 719;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 724;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 14:
			case 23:
			case 25:
			case 30:
			case 31:
			case 38:
			case 42:
			case 44:
			case 46:
			case 50:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 95:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 106:
			case 114:
			case 118:
			case 123:
			case 125:
			case 126:
			case 128:
			case 129:
			case 130:
				{
				this.state = 722;
				this.expressionStatement();
				}
				break;
			case 2:
				{
				this.state = 723;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
				{
				this.state = 726;
				this.expression(0);
				}
			}

			this.state = 729;
			this.match(SolidityParser.T__23);
			this.state = 730;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 732;
			this.match(SolidityParser.T__56);
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===130) {
				{
				this.state = 733;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 736;
				this.match(SolidityParser.T__22);
				this.state = 737;
				this.inlineAssemblyStatementFlag();
				this.state = 738;
				this.match(SolidityParser.T__23);
				}
			}

			this.state = 742;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext {
		let localctx: InlineAssemblyStatementFlagContext = new InlineAssemblyStatementFlagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SolidityParser.RULE_inlineAssemblyStatementFlag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 744;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let localctx: DoWhileStatementContext = new DoWhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 746;
			this.match(SolidityParser.T__57);
			this.state = 747;
			this.statement();
			this.state = 748;
			this.match(SolidityParser.T__54);
			this.state = 749;
			this.match(SolidityParser.T__22);
			this.state = 750;
			this.expression(0);
			this.state = 751;
			this.match(SolidityParser.T__23);
			this.state = 752;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 754;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 755;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 757;
			this.match(SolidityParser.BreakKeyword);
			this.state = 758;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 760;
			this.match(SolidityParser.T__58);
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
				{
				this.state = 761;
				this.expression(0);
				}
			}

			this.state = 764;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 766;
			this.match(SolidityParser.T__59);
			this.state = 767;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let localctx: EmitStatementContext = new EmitStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 769;
			this.match(SolidityParser.T__60);
			this.state = 770;
			this.functionCall();
			this.state = 771;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revertStatement(): RevertStatementContext {
		let localctx: RevertStatementContext = new RevertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 773;
			this.match(SolidityParser.T__61);
			this.state = 774;
			this.functionCall();
			this.state = 775;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 777;
				this.match(SolidityParser.T__62);
				this.state = 778;
				this.identifierList();
				}
				break;
			case 2:
				{
				this.state = 779;
				this.variableDeclaration();
				}
				break;
			case 3:
				{
				this.state = 780;
				this.match(SolidityParser.T__22);
				this.state = 781;
				this.variableDeclarationList();
				this.state = 782;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 786;
				this.match(SolidityParser.T__10);
				this.state = 787;
				this.expression(0);
				}
			}

			this.state = 790;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
				{
				this.state = 792;
				this.variableDeclaration();
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 795;
				this.match(SolidityParser.T__15);
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===25 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 520098113) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138493) !== 0) || _la===128 || _la===129) {
					{
					this.state = 796;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 804;
			this.match(SolidityParser.T__22);
			this.state = 811;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 806;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
						{
						this.state = 805;
						this.identifier();
						}
					}

					this.state = 808;
					this.match(SolidityParser.T__15);
					}
					}
				}
				this.state = 813;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			}
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 814;
				this.identifier();
				}
			}

			this.state = 817;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementaryTypeName(): ElementaryTypeNameContext {
		let localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 7864321) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 140;
		this.enterRecursionRule(localctx, 140, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 839;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 822;
				this.match(SolidityParser.T__68);
				this.state = 823;
				this.typeName(0);
				}
				break;
			case 2:
				{
				this.state = 824;
				this.match(SolidityParser.T__22);
				this.state = 825;
				this.expression(0);
				this.state = 826;
				this.match(SolidityParser.T__23);
				}
				break;
			case 3:
				{
				this.state = 828;
				_la = this._input.LA(1);
				if(!(_la===67 || _la===68)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 829;
				this.expression(19);
				}
				break;
			case 4:
				{
				this.state = 830;
				_la = this._input.LA(1);
				if(!(_la===30 || _la===31)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 831;
				this.expression(18);
				}
				break;
			case 5:
				{
				this.state = 832;
				this.match(SolidityParser.T__70);
				this.state = 833;
				this.expression(17);
				}
				break;
			case 6:
				{
				this.state = 834;
				this.match(SolidityParser.T__71);
				this.state = 835;
				this.expression(16);
				}
				break;
			case 7:
				{
				this.state = 836;
				this.match(SolidityParser.T__5);
				this.state = 837;
				this.expression(15);
				}
				break;
			case 8:
				{
				this.state = 838;
				this.primaryExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 915;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 913;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 841;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 842;
						this.match(SolidityParser.T__72);
						this.state = 843;
						this.expression(14);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 844;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 845;
						_la = this._input.LA(1);
						if(!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 1610612737) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 846;
						this.expression(14);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 847;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 848;
						_la = this._input.LA(1);
						if(!(_la===30 || _la===31)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 849;
						this.expression(13);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 850;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 851;
						_la = this._input.LA(1);
						if(!(_la===74 || _la===75)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 852;
						this.expression(12);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 853;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 854;
						this.match(SolidityParser.T__28);
						this.state = 855;
						this.expression(11);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 857;
						this.match(SolidityParser.T__4);
						this.state = 858;
						this.expression(10);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 860;
						this.match(SolidityParser.T__27);
						this.state = 861;
						this.expression(9);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 862;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 863;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 864;
						this.expression(8);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 865;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 866;
						_la = this._input.LA(1);
						if(!(_la===34 || _la===35)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 867;
						this.expression(7);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 868;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 869;
						this.match(SolidityParser.T__75);
						this.state = 870;
						this.expression(6);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 871;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 872;
						this.match(SolidityParser.T__3);
						this.state = 873;
						this.expression(5);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 874;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 875;
						this.match(SolidityParser.T__76);
						this.state = 876;
						this.expression(0);
						this.state = 877;
						this.match(SolidityParser.T__69);
						this.state = 878;
						this.expression(3);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 881;
						_la = this._input.LA(1);
						if(!(_la===11 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 1023) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 882;
						this.expression(3);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 883;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 884;
						_la = this._input.LA(1);
						if(!(_la===67 || _la===68)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 886;
						this.match(SolidityParser.T__41);
						this.state = 887;
						this.expression(0);
						this.state = 888;
						this.match(SolidityParser.T__42);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 890;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 891;
						this.match(SolidityParser.T__41);
						this.state = 893;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
							{
							this.state = 892;
							this.expression(0);
							}
						}

						this.state = 895;
						this.match(SolidityParser.T__69);
						this.state = 897;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
							{
							this.state = 896;
							this.expression(0);
							}
						}

						this.state = 899;
						this.match(SolidityParser.T__42);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 900;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 901;
						this.match(SolidityParser.T__44);
						this.state = 902;
						this.identifier();
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 903;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 904;
						this.match(SolidityParser.T__14);
						this.state = 905;
						this.nameValueList();
						this.state = 906;
						this.match(SolidityParser.T__16);
						}
						break;
					case 19:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 908;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 909;
						this.match(SolidityParser.T__22);
						this.state = 910;
						this.functionCallArguments();
						this.state = 911;
						this.match(SolidityParser.T__23);
						}
						break;
					}
					}
				}
				this.state = 917;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 918;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 919;
				this.numberLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 920;
				this.hexLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 921;
				this.stringLiteral();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 922;
				this.identifier();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 923;
				this.match(SolidityParser.TypeKeyword);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 924;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 925;
				this.tupleExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 926;
				this.typeName(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 929;
			this.expression(0);
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 930;
				this.match(SolidityParser.T__15);
				this.state = 931;
				this.expression(0);
				}
				}
				this.state = 936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nameValueList(): NameValueListContext {
		let localctx: NameValueListContext = new NameValueListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 937;
			this.nameValue();
			this.state = 942;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 938;
					this.match(SolidityParser.T__15);
					this.state = 939;
					this.nameValue();
					}
					}
				}
				this.state = 944;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 945;
				this.match(SolidityParser.T__15);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nameValue(): NameValueContext {
		let localctx: NameValueContext = new NameValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 948;
			this.identifier();
			this.state = 949;
			this.match(SolidityParser.T__69);
			this.state = 950;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCallArguments(): FunctionCallArgumentsContext {
		let localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 960;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 952;
				this.match(SolidityParser.T__14);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
					{
					this.state = 953;
					this.nameValueList();
					}
				}

				this.state = 956;
				this.match(SolidityParser.T__16);
				}
				break;
			case 6:
			case 14:
			case 23:
			case 24:
			case 25:
			case 30:
			case 31:
			case 38:
			case 42:
			case 44:
			case 46:
			case 50:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 95:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 106:
			case 114:
			case 118:
			case 123:
			case 125:
			case 126:
			case 128:
			case 129:
			case 130:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
					{
					this.state = 957;
					this.expressionList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 962;
			this.expression(0);
			this.state = 963;
			this.match(SolidityParser.T__22);
			this.state = 964;
			this.functionCallArguments();
			this.state = 965;
			this.match(SolidityParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyBlock(): AssemblyBlockContext {
		let localctx: AssemblyBlockContext = new AssemblyBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 967;
			this.match(SolidityParser.T__14);
			this.state = 971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 176209920) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 287322177) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 1176879241) !== 0) || ((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 59) !== 0)) {
				{
				{
				this.state = 968;
				this.assemblyItem();
				}
				}
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 974;
			this.match(SolidityParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyItem(): AssemblyItemContext {
		let localctx: AssemblyItemContext = new AssemblyItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 976;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 977;
				this.assemblyBlock();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 978;
				this.assemblyExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 979;
				this.assemblyLocalDefinition();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 980;
				this.assemblyAssignment();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 981;
				this.assemblyStackAssignment();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 982;
				this.labelDefinition();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 983;
				this.assemblySwitch();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 984;
				this.assemblyFunctionDefinition();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 985;
				this.assemblyFor();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 986;
				this.assemblyIf();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 987;
				this.match(SolidityParser.BreakKeyword);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 988;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 989;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 990;
				this.numberLiteral();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 991;
				this.stringLiteral();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 992;
				this.hexLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyExpression(): AssemblyExpressionContext {
		let localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 998;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 995;
				this.assemblyCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 996;
				this.assemblyLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 997;
				this.assemblyMember();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyMember(): AssemblyMemberContext {
		let localctx: AssemblyMemberContext = new AssemblyMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1000;
			this.identifier();
			this.state = 1001;
			this.match(SolidityParser.T__44);
			this.state = 1002;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyCall(): AssemblyCallContext {
		let localctx: AssemblyCallContext = new AssemblyCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 1004;
				this.match(SolidityParser.T__58);
				}
				break;
			case 2:
				{
				this.state = 1005;
				this.match(SolidityParser.T__43);
				}
				break;
			case 3:
				{
				this.state = 1006;
				this.match(SolidityParser.T__65);
				}
				break;
			case 4:
				{
				this.state = 1007;
				this.identifier();
				}
				break;
			}
			this.state = 1022;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1010;
				this.match(SolidityParser.T__22);
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4489281) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230141313) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 7) !== 0)) {
					{
					this.state = 1011;
					this.assemblyExpression();
					}
				}

				this.state = 1018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1014;
					this.match(SolidityParser.T__15);
					this.state = 1015;
					this.assemblyExpression();
					}
					}
					this.state = 1020;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1021;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1024;
			this.match(SolidityParser.T__87);
			this.state = 1025;
			this.assemblyIdentifierOrList();
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===89) {
				{
				this.state = 1026;
				this.match(SolidityParser.T__88);
				this.state = 1027;
				this.assemblyExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyAssignment(): AssemblyAssignmentContext {
		let localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1030;
			this.assemblyIdentifierOrList();
			this.state = 1031;
			this.match(SolidityParser.T__88);
			this.state = 1032;
			this.assemblyExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		let localctx: AssemblyIdentifierOrListContext = new AssemblyIdentifierOrListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1041;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1034;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1035;
				this.assemblyMember();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1036;
				this.assemblyIdentifierList();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1037;
				this.match(SolidityParser.T__22);
				this.state = 1038;
				this.assemblyIdentifierList();
				this.state = 1039;
				this.match(SolidityParser.T__23);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1043;
			this.identifier();
			this.state = 1048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 1044;
				this.match(SolidityParser.T__15);
				this.state = 1045;
				this.identifier();
				}
				}
				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this.assemblyExpression();
			this.state = 1052;
			this.match(SolidityParser.T__89);
			this.state = 1053;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let localctx: LabelDefinitionContext = new LabelDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1055;
			this.identifier();
			this.state = 1056;
			this.match(SolidityParser.T__69);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblySwitch(): AssemblySwitchContext {
		let localctx: AssemblySwitchContext = new AssemblySwitchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1058;
			this.match(SolidityParser.T__90);
			this.state = 1059;
			this.assemblyExpression();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===92 || _la===93) {
				{
				{
				this.state = 1060;
				this.assemblyCase();
				}
				}
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyCase(): AssemblyCaseContext {
		let localctx: AssemblyCaseContext = new AssemblyCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1066;
				this.match(SolidityParser.T__91);
				this.state = 1067;
				this.assemblyLiteral();
				this.state = 1068;
				this.assemblyBlock();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1070;
				this.match(SolidityParser.T__92);
				this.state = 1071;
				this.assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1074;
			this.match(SolidityParser.T__37);
			this.state = 1075;
			this.identifier();
			this.state = 1076;
			this.match(SolidityParser.T__22);
			this.state = 1078;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129) {
				{
				this.state = 1077;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1080;
			this.match(SolidityParser.T__23);
			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===94) {
				{
				this.state = 1081;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1084;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1086;
			this.match(SolidityParser.T__93);
			this.state = 1087;
			this.assemblyIdentifierList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyFor(): AssemblyForContext {
		let localctx: AssemblyForContext = new AssemblyForContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1089;
			this.match(SolidityParser.T__26);
			this.state = 1092;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 1090;
				this.assemblyBlock();
				}
				break;
			case 14:
			case 25:
			case 44:
			case 50:
			case 59:
			case 62:
			case 66:
			case 95:
			case 102:
			case 103:
			case 104:
			case 106:
			case 114:
			case 118:
			case 125:
			case 126:
			case 128:
			case 129:
			case 130:
				{
				this.state = 1091;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1094;
			this.assemblyExpression();
			this.state = 1097;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 1095;
				this.assemblyBlock();
				}
				break;
			case 14:
			case 25:
			case 44:
			case 50:
			case 59:
			case 62:
			case 66:
			case 95:
			case 102:
			case 103:
			case 104:
			case 106:
			case 114:
			case 118:
			case 125:
			case 126:
			case 128:
			case 129:
			case 130:
				{
				this.state = 1096;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1099;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyIf(): AssemblyIfContext {
		let localctx: AssemblyIfContext = new AssemblyIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1101;
			this.match(SolidityParser.T__50);
			this.state = 1102;
			this.assemblyExpression();
			this.state = 1103;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assemblyLiteral(): AssemblyLiteralContext {
		let localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1105;
				this.stringLiteral();
				}
				break;
			case 103:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1106;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1107;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case 106:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1108;
				this.hexLiteral();
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1109;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let localctx: TupleExpressionContext = new TupleExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1112;
				this.match(SolidityParser.T__22);
				{
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
					{
					this.state = 1113;
					this.expression(0);
					}
				}

				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1116;
					this.match(SolidityParser.T__15);
					this.state = 1118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
						{
						this.state = 1117;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1125;
				this.match(SolidityParser.T__23);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1126;
				this.match(SolidityParser.T__41);
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3263184960) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4278194513) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 4244635651) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 248547339) !== 0)) {
					{
					this.state = 1127;
					this.expression(0);
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===16) {
						{
						{
						this.state = 1128;
						this.match(SolidityParser.T__15);
						this.state = 1129;
						this.expression(0);
						}
						}
						this.state = 1134;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1137;
				this.match(SolidityParser.T__42);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let localctx: NumberLiteralContext = new NumberLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1140;
			_la = this._input.LA(1);
			if(!(_la===103 || _la===104)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1142;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1141;
				this.match(SolidityParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1144;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 262209) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 3230138369) !== 0) || _la===128 || _la===129)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hexLiteral(): HexLiteralContext {
		let localctx: HexLiteralContext = new HexLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1147;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1146;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1149;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public overrideSpecifier(): OverrideSpecifierContext {
		let localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1151;
			this.match(SolidityParser.T__95);
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 1152;
				this.match(SolidityParser.T__22);
				this.state = 1153;
				this.userDefinedTypeName();
				this.state = 1158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1154;
					this.match(SolidityParser.T__15);
					this.state = 1155;
					this.userDefinedTypeName();
					}
					}
					this.state = 1160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1161;
				this.match(SolidityParser.T__23);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1166;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1165;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1168;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 129, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 38:
			return this.typeName_sempred(localctx as TypeNameContext, predIndex);
		case 70:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 11);
		case 5:
			return this.precpred(this._ctx, 10);
		case 6:
			return this.precpred(this._ctx, 9);
		case 7:
			return this.precpred(this._ctx, 8);
		case 8:
			return this.precpred(this._ctx, 7);
		case 9:
			return this.precpred(this._ctx, 6);
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 4);
		case 12:
			return this.precpred(this._ctx, 3);
		case 13:
			return this.precpred(this._ctx, 2);
		case 14:
			return this.precpred(this._ctx, 27);
		case 15:
			return this.precpred(this._ctx, 25);
		case 16:
			return this.precpred(this._ctx, 24);
		case 17:
			return this.precpred(this._ctx, 23);
		case 18:
			return this.precpred(this._ctx, 22);
		case 19:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,134,1171,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,5,0,214,8,0,10,0,12,0,217,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
	1,2,1,2,1,3,1,3,1,3,3,3,231,8,3,1,4,1,4,3,4,235,8,4,1,4,5,4,238,8,4,10,
	4,12,4,241,9,4,1,5,1,5,1,6,3,6,246,8,6,1,6,1,6,3,6,250,8,6,1,6,3,6,253,
	8,6,1,7,1,7,1,7,3,7,258,8,7,1,8,1,8,1,8,1,8,3,8,264,8,8,1,8,1,8,1,8,1,8,
	1,8,3,8,271,8,8,1,8,1,8,3,8,275,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
	5,8,286,8,8,10,8,12,8,289,9,8,1,8,1,8,1,8,1,8,1,8,3,8,296,8,8,1,9,1,9,1,
	10,3,10,301,8,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,309,8,10,10,10,12,10,
	312,9,10,3,10,314,8,10,1,10,1,10,5,10,318,8,10,10,10,12,10,321,9,10,1,10,
	1,10,1,11,1,11,1,11,3,11,328,8,11,1,11,3,11,331,8,11,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,3,12,342,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,5,13,352,8,13,10,13,12,13,355,9,13,1,13,1,13,1,13,3,13,360,8,13,
	1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,
	16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,3,17,387,8,17,1,17,
	3,17,390,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,5,18,399,8,18,10,18,12,
	18,402,9,18,1,18,1,18,3,18,406,8,18,1,19,1,19,1,19,3,19,411,8,19,1,20,1,
	20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,423,8,21,10,21,12,21,426,
	9,21,3,21,428,8,21,1,21,1,21,1,22,1,22,1,22,3,22,435,8,22,1,22,1,22,5,22,
	439,8,22,10,22,12,22,442,9,22,1,22,1,22,3,22,446,8,22,1,23,1,23,1,23,3,
	23,451,8,23,1,23,3,23,454,8,23,1,24,1,24,1,24,1,24,3,24,460,8,24,1,24,1,
	24,3,24,464,8,24,1,25,1,25,3,25,468,8,25,1,25,1,25,1,25,3,25,473,8,25,1,
	26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,27,486,8,27,10,27,
	12,27,489,9,27,1,28,1,28,1,28,1,28,3,28,495,8,28,1,28,1,28,1,29,1,29,1,
	30,1,30,1,30,1,30,3,30,505,8,30,1,30,1,30,5,30,509,8,30,10,30,12,30,512,
	9,30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,520,8,31,10,31,12,31,523,9,31,3,
	31,525,8,31,1,31,1,31,1,32,1,32,3,32,531,8,32,1,32,3,32,534,8,32,1,33,1,
	33,1,33,1,33,5,33,540,8,33,10,33,12,33,543,9,33,3,33,545,8,33,1,33,1,33,
	1,34,1,34,3,34,551,8,34,1,34,3,34,554,8,34,1,35,1,35,1,35,1,35,5,35,560,
	8,35,10,35,12,35,563,9,35,3,35,565,8,35,1,35,1,35,1,36,1,36,3,36,571,8,
	36,1,37,1,37,3,37,575,8,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
	3,38,586,8,38,1,38,1,38,1,38,3,38,591,8,38,1,38,5,38,594,8,38,10,38,12,
	38,597,9,38,1,39,1,39,1,39,5,39,602,8,39,10,39,12,39,605,9,39,1,40,1,40,
	3,40,609,8,40,1,41,1,41,1,41,1,41,3,41,615,8,41,1,41,1,41,1,41,3,41,620,
	8,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,5,44,633,8,
	44,10,44,12,44,636,9,44,1,44,1,44,3,44,640,8,44,1,45,1,45,1,46,1,46,1,47,
	1,47,5,47,648,8,47,10,47,12,47,651,9,47,1,47,1,47,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,670,8,48,1,49,
	1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,682,8,50,1,51,1,51,1,
	51,3,51,687,8,51,1,51,1,51,4,51,691,8,51,11,51,12,51,692,1,52,1,52,3,52,
	697,8,52,1,52,3,52,700,8,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,54,
	1,54,3,54,712,8,54,1,55,1,55,1,55,1,56,1,56,1,56,1,56,3,56,721,8,56,1,56,
	1,56,3,56,725,8,56,1,56,3,56,728,8,56,1,56,1,56,1,56,1,57,1,57,3,57,735,
	8,57,1,57,1,57,1,57,1,57,3,57,741,8,57,1,57,1,57,1,58,1,58,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,62,1,62,3,62,
	763,8,62,1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,
	65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,785,8,66,1,66,1,66,3,66,789,
	8,66,1,66,1,66,1,67,3,67,794,8,67,1,67,1,67,3,67,798,8,67,5,67,800,8,67,
	10,67,12,67,803,9,67,1,68,1,68,3,68,807,8,68,1,68,5,68,810,8,68,10,68,12,
	68,813,9,68,1,68,3,68,816,8,68,1,68,1,68,1,69,1,69,1,70,1,70,1,70,1,70,
	1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,
	70,840,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,
	1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
	70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,
	1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,894,8,70,1,
	70,1,70,3,70,898,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,
	1,70,1,70,1,70,1,70,5,70,914,8,70,10,70,12,70,917,9,70,1,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,3,71,928,8,71,1,72,1,72,1,72,5,72,933,8,72,
	10,72,12,72,936,9,72,1,73,1,73,1,73,5,73,941,8,73,10,73,12,73,944,9,73,
	1,73,3,73,947,8,73,1,74,1,74,1,74,1,74,1,75,1,75,3,75,955,8,75,1,75,1,75,
	3,75,959,8,75,3,75,961,8,75,1,76,1,76,1,76,1,76,1,76,1,77,1,77,5,77,970,
	8,77,10,77,12,77,973,9,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,994,8,78,1,79,1,
	79,1,79,3,79,999,8,79,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,3,81,1009,
	8,81,1,81,1,81,3,81,1013,8,81,1,81,1,81,5,81,1017,8,81,10,81,12,81,1020,
	9,81,1,81,3,81,1023,8,81,1,82,1,82,1,82,1,82,3,82,1029,8,82,1,83,1,83,1,
	83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1042,8,84,1,85,1,85,1,85,
	5,85,1047,8,85,10,85,12,85,1050,9,85,1,86,1,86,1,86,1,86,1,87,1,87,1,87,
	1,88,1,88,1,88,5,88,1062,8,88,10,88,12,88,1065,9,88,1,89,1,89,1,89,1,89,
	1,89,1,89,3,89,1073,8,89,1,90,1,90,1,90,1,90,3,90,1079,8,90,1,90,1,90,3,
	90,1083,8,90,1,90,1,90,1,91,1,91,1,91,1,92,1,92,1,92,3,92,1093,8,92,1,92,
	1,92,1,92,3,92,1098,8,92,1,92,1,92,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,
	94,1,94,3,94,1111,8,94,1,95,1,95,3,95,1115,8,95,1,95,1,95,3,95,1119,8,95,
	5,95,1121,8,95,10,95,12,95,1124,9,95,1,95,1,95,1,95,1,95,1,95,5,95,1131,
	8,95,10,95,12,95,1134,9,95,3,95,1136,8,95,1,95,3,95,1139,8,95,1,96,1,96,
	3,96,1143,8,96,1,97,1,97,1,98,4,98,1148,8,98,11,98,12,98,1149,1,99,1,99,
	1,99,1,99,1,99,5,99,1157,8,99,10,99,12,99,1160,9,99,1,99,1,99,3,99,1164,
	8,99,1,100,4,100,1167,8,100,11,100,12,100,1168,1,100,0,2,76,140,101,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
	54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
	102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
	138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,
	174,176,178,180,182,184,186,188,190,192,194,196,198,200,0,15,1,0,5,11,1,
	0,19,21,3,0,3,3,5,10,28,35,1,0,48,50,4,0,110,110,118,118,122,122,124,124,
	3,0,44,44,63,66,97,101,1,0,67,68,1,0,30,31,2,0,3,3,32,33,1,0,74,75,1,0,
	7,10,1,0,34,35,2,0,11,11,78,87,1,0,103,104,10,0,14,14,25,25,44,44,50,50,
	62,62,95,95,114,114,118,118,125,126,128,129,1301,0,215,1,0,0,0,2,220,1,
	0,0,0,4,225,1,0,0,0,6,230,1,0,0,0,8,232,1,0,0,0,10,242,1,0,0,0,12,252,1,
	0,0,0,14,254,1,0,0,0,16,295,1,0,0,0,18,297,1,0,0,0,20,300,1,0,0,0,22,324,
	1,0,0,0,24,341,1,0,0,0,26,343,1,0,0,0,28,363,1,0,0,0,30,370,1,0,0,0,32,
	375,1,0,0,0,34,381,1,0,0,0,36,405,1,0,0,0,38,407,1,0,0,0,40,412,1,0,0,0,
	42,414,1,0,0,0,44,431,1,0,0,0,46,447,1,0,0,0,48,455,1,0,0,0,50,472,1,0,
	0,0,52,474,1,0,0,0,54,487,1,0,0,0,56,490,1,0,0,0,58,498,1,0,0,0,60,500,
	1,0,0,0,62,515,1,0,0,0,64,528,1,0,0,0,66,535,1,0,0,0,68,548,1,0,0,0,70,
	555,1,0,0,0,72,568,1,0,0,0,74,572,1,0,0,0,76,585,1,0,0,0,78,598,1,0,0,0,
	80,608,1,0,0,0,82,610,1,0,0,0,84,623,1,0,0,0,86,625,1,0,0,0,88,627,1,0,
	0,0,90,641,1,0,0,0,92,643,1,0,0,0,94,645,1,0,0,0,96,669,1,0,0,0,98,671,
	1,0,0,0,100,674,1,0,0,0,102,683,1,0,0,0,104,694,1,0,0,0,106,703,1,0,0,0,
	108,711,1,0,0,0,110,713,1,0,0,0,112,716,1,0,0,0,114,732,1,0,0,0,116,744,
	1,0,0,0,118,746,1,0,0,0,120,754,1,0,0,0,122,757,1,0,0,0,124,760,1,0,0,0,
	126,766,1,0,0,0,128,769,1,0,0,0,130,773,1,0,0,0,132,784,1,0,0,0,134,793,
	1,0,0,0,136,804,1,0,0,0,138,819,1,0,0,0,140,839,1,0,0,0,142,927,1,0,0,0,
	144,929,1,0,0,0,146,937,1,0,0,0,148,948,1,0,0,0,150,960,1,0,0,0,152,962,
	1,0,0,0,154,967,1,0,0,0,156,993,1,0,0,0,158,998,1,0,0,0,160,1000,1,0,0,
	0,162,1008,1,0,0,0,164,1024,1,0,0,0,166,1030,1,0,0,0,168,1041,1,0,0,0,170,
	1043,1,0,0,0,172,1051,1,0,0,0,174,1055,1,0,0,0,176,1058,1,0,0,0,178,1072,
	1,0,0,0,180,1074,1,0,0,0,182,1086,1,0,0,0,184,1089,1,0,0,0,186,1101,1,0,
	0,0,188,1110,1,0,0,0,190,1138,1,0,0,0,192,1140,1,0,0,0,194,1144,1,0,0,0,
	196,1147,1,0,0,0,198,1151,1,0,0,0,200,1166,1,0,0,0,202,214,3,2,1,0,203,
	214,3,16,8,0,204,214,3,20,10,0,205,214,3,60,30,0,206,214,3,56,28,0,207,
	214,3,42,21,0,208,214,3,48,24,0,209,214,3,28,14,0,210,214,3,30,15,0,211,
	214,3,32,16,0,212,214,3,34,17,0,213,202,1,0,0,0,213,203,1,0,0,0,213,204,
	1,0,0,0,213,205,1,0,0,0,213,206,1,0,0,0,213,207,1,0,0,0,213,208,1,0,0,0,
	213,209,1,0,0,0,213,210,1,0,0,0,213,211,1,0,0,0,213,212,1,0,0,0,214,217,
	1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,215,1,0,0,0,
	218,219,5,0,0,1,219,1,1,0,0,0,220,221,5,1,0,0,221,222,3,4,2,0,222,223,3,
	6,3,0,223,224,5,2,0,0,224,3,1,0,0,0,225,226,3,194,97,0,226,5,1,0,0,0,227,
	231,5,3,0,0,228,231,3,8,4,0,229,231,3,140,70,0,230,227,1,0,0,0,230,228,
	1,0,0,0,230,229,1,0,0,0,231,7,1,0,0,0,232,239,3,12,6,0,233,235,5,4,0,0,
	234,233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,238,3,12,6,0,237,234,
	1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,9,1,0,0,0,241,
	239,1,0,0,0,242,243,7,0,0,0,243,11,1,0,0,0,244,246,3,10,5,0,245,244,1,0,
	0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,253,5,131,0,0,248,250,3,10,5,0,
	249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,253,5,103,0,0,252,245,
	1,0,0,0,252,249,1,0,0,0,253,13,1,0,0,0,254,257,3,194,97,0,255,256,5,12,
	0,0,256,258,3,194,97,0,257,255,1,0,0,0,257,258,1,0,0,0,258,15,1,0,0,0,259,
	260,5,13,0,0,260,263,3,18,9,0,261,262,5,12,0,0,262,264,3,194,97,0,263,261,
	1,0,0,0,263,264,1,0,0,0,264,265,1,0,0,0,265,266,5,2,0,0,266,296,1,0,0,0,
	267,270,5,13,0,0,268,271,5,3,0,0,269,271,3,194,97,0,270,268,1,0,0,0,270,
	269,1,0,0,0,271,274,1,0,0,0,272,273,5,12,0,0,273,275,3,194,97,0,274,272,
	1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,5,14,0,0,277,278,3,18,9,
	0,278,279,5,2,0,0,279,296,1,0,0,0,280,281,5,13,0,0,281,282,5,15,0,0,282,
	287,3,14,7,0,283,284,5,16,0,0,284,286,3,14,7,0,285,283,1,0,0,0,286,289,
	1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,290,1,0,0,0,289,287,1,0,0,0,
	290,291,5,17,0,0,291,292,5,14,0,0,292,293,3,18,9,0,293,294,5,2,0,0,294,
	296,1,0,0,0,295,259,1,0,0,0,295,267,1,0,0,0,295,280,1,0,0,0,296,17,1,0,
	0,0,297,298,5,130,0,0,298,19,1,0,0,0,299,301,5,18,0,0,300,299,1,0,0,0,300,
	301,1,0,0,0,301,302,1,0,0,0,302,303,7,1,0,0,303,313,3,194,97,0,304,305,
	5,22,0,0,305,310,3,22,11,0,306,307,5,16,0,0,307,309,3,22,11,0,308,306,1,
	0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,314,1,0,0,0,312,
	310,1,0,0,0,313,304,1,0,0,0,313,314,1,0,0,0,314,315,1,0,0,0,315,319,5,15,
	0,0,316,318,3,24,12,0,317,316,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,
	320,1,0,0,0,320,322,1,0,0,0,321,319,1,0,0,0,322,323,5,17,0,0,323,21,1,0,
	0,0,324,330,3,78,39,0,325,327,5,23,0,0,326,328,3,144,72,0,327,326,1,0,0,
	0,327,328,1,0,0,0,328,329,1,0,0,0,329,331,5,24,0,0,330,325,1,0,0,0,330,
	331,1,0,0,0,331,23,1,0,0,0,332,342,3,26,13,0,333,342,3,34,17,0,334,342,
	3,42,21,0,335,342,3,44,22,0,336,342,3,48,24,0,337,342,3,56,28,0,338,342,
	3,60,30,0,339,342,3,30,15,0,340,342,3,32,16,0,341,332,1,0,0,0,341,333,1,
	0,0,0,341,334,1,0,0,0,341,335,1,0,0,0,341,336,1,0,0,0,341,337,1,0,0,0,341,
	338,1,0,0,0,341,339,1,0,0,0,341,340,1,0,0,0,342,25,1,0,0,0,343,353,3,76,
	38,0,344,352,5,120,0,0,345,352,5,117,0,0,346,352,5,119,0,0,347,352,5,110,
	0,0,348,352,5,111,0,0,349,352,5,112,0,0,350,352,3,198,99,0,351,344,1,0,
	0,0,351,345,1,0,0,0,351,346,1,0,0,0,351,347,1,0,0,0,351,348,1,0,0,0,351,
	349,1,0,0,0,351,350,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,353,354,1,0,
	0,0,354,356,1,0,0,0,355,353,1,0,0,0,356,359,3,194,97,0,357,358,5,11,0,0,
	358,360,3,140,70,0,359,357,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,
	362,5,2,0,0,362,27,1,0,0,0,363,364,3,76,38,0,364,365,5,110,0,0,365,366,
	3,194,97,0,366,367,5,11,0,0,367,368,3,140,70,0,368,369,5,2,0,0,369,29,1,
	0,0,0,370,371,5,25,0,0,371,372,3,194,97,0,372,373,3,62,31,0,373,374,5,2,
	0,0,374,31,1,0,0,0,375,376,5,123,0,0,376,377,3,194,97,0,377,378,5,22,0,
	0,378,379,3,138,69,0,379,380,5,2,0,0,380,33,1,0,0,0,381,382,5,26,0,0,382,
	383,3,36,18,0,383,386,5,27,0,0,384,387,5,3,0,0,385,387,3,76,38,0,386,384,
	1,0,0,0,386,385,1,0,0,0,387,389,1,0,0,0,388,390,5,125,0,0,389,388,1,0,0,
	0,389,390,1,0,0,0,390,391,1,0,0,0,391,392,5,2,0,0,392,35,1,0,0,0,393,406,
	3,78,39,0,394,395,5,15,0,0,395,400,3,38,19,0,396,397,5,16,0,0,397,399,3,
	38,19,0,398,396,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,
	401,403,1,0,0,0,402,400,1,0,0,0,403,404,5,17,0,0,404,406,1,0,0,0,405,393,
	1,0,0,0,405,394,1,0,0,0,406,37,1,0,0,0,407,410,3,78,39,0,408,409,5,12,0,
	0,409,411,3,40,20,0,410,408,1,0,0,0,410,411,1,0,0,0,411,39,1,0,0,0,412,
	413,7,2,0,0,413,41,1,0,0,0,414,415,5,36,0,0,415,416,3,194,97,0,416,427,
	5,15,0,0,417,418,3,74,37,0,418,424,5,2,0,0,419,420,3,74,37,0,420,421,5,
	2,0,0,421,423,1,0,0,0,422,419,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,424,
	425,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,427,417,1,0,0,0,427,428,1,0,
	0,0,428,429,1,0,0,0,429,430,5,17,0,0,430,43,1,0,0,0,431,432,5,37,0,0,432,
	434,3,194,97,0,433,435,3,62,31,0,434,433,1,0,0,0,434,435,1,0,0,0,435,440,
	1,0,0,0,436,439,5,121,0,0,437,439,3,198,99,0,438,436,1,0,0,0,438,437,1,
	0,0,0,439,442,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,445,1,0,0,0,442,
	440,1,0,0,0,443,446,5,2,0,0,444,446,3,94,47,0,445,443,1,0,0,0,445,444,1,
	0,0,0,446,45,1,0,0,0,447,453,3,194,97,0,448,450,5,23,0,0,449,451,3,144,
	72,0,450,449,1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,452,454,5,24,0,0,453,
	448,1,0,0,0,453,454,1,0,0,0,454,47,1,0,0,0,455,456,3,50,25,0,456,457,3,
	62,31,0,457,459,3,54,27,0,458,460,3,52,26,0,459,458,1,0,0,0,459,460,1,0,
	0,0,460,463,1,0,0,0,461,464,5,2,0,0,462,464,3,94,47,0,463,461,1,0,0,0,463,
	462,1,0,0,0,464,49,1,0,0,0,465,467,5,38,0,0,466,468,3,194,97,0,467,466,
	1,0,0,0,467,468,1,0,0,0,468,473,1,0,0,0,469,473,5,126,0,0,470,473,5,127,
	0,0,471,473,5,128,0,0,472,465,1,0,0,0,472,469,1,0,0,0,472,470,1,0,0,0,472,
	471,1,0,0,0,473,51,1,0,0,0,474,475,5,39,0,0,475,476,3,62,31,0,476,53,1,
	0,0,0,477,486,5,115,0,0,478,486,5,120,0,0,479,486,5,117,0,0,480,486,5,119,
	0,0,481,486,5,121,0,0,482,486,3,92,46,0,483,486,3,46,23,0,484,486,3,198,
	99,0,485,477,1,0,0,0,485,478,1,0,0,0,485,479,1,0,0,0,485,480,1,0,0,0,485,
	481,1,0,0,0,485,482,1,0,0,0,485,483,1,0,0,0,485,484,1,0,0,0,486,489,1,0,
	0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,55,1,0,0,0,489,487,1,0,0,0,490,
	491,5,40,0,0,491,492,3,194,97,0,492,494,3,66,33,0,493,495,5,108,0,0,494,
	493,1,0,0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,497,5,2,0,0,497,57,1,0,
	0,0,498,499,3,194,97,0,499,59,1,0,0,0,500,501,5,41,0,0,501,502,3,194,97,
	0,502,504,5,15,0,0,503,505,3,58,29,0,504,503,1,0,0,0,504,505,1,0,0,0,505,
	510,1,0,0,0,506,507,5,16,0,0,507,509,3,58,29,0,508,506,1,0,0,0,509,512,
	1,0,0,0,510,508,1,0,0,0,510,511,1,0,0,0,511,513,1,0,0,0,512,510,1,0,0,0,
	513,514,5,17,0,0,514,61,1,0,0,0,515,524,5,23,0,0,516,521,3,64,32,0,517,
	518,5,16,0,0,518,520,3,64,32,0,519,517,1,0,0,0,520,523,1,0,0,0,521,519,
	1,0,0,0,521,522,1,0,0,0,522,525,1,0,0,0,523,521,1,0,0,0,524,516,1,0,0,0,
	524,525,1,0,0,0,525,526,1,0,0,0,526,527,5,24,0,0,527,63,1,0,0,0,528,530,
	3,76,38,0,529,531,3,90,45,0,530,529,1,0,0,0,530,531,1,0,0,0,531,533,1,0,
	0,0,532,534,3,194,97,0,533,532,1,0,0,0,533,534,1,0,0,0,534,65,1,0,0,0,535,
	544,5,23,0,0,536,541,3,68,34,0,537,538,5,16,0,0,538,540,3,68,34,0,539,537,
	1,0,0,0,540,543,1,0,0,0,541,539,1,0,0,0,541,542,1,0,0,0,542,545,1,0,0,0,
	543,541,1,0,0,0,544,536,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,
	5,24,0,0,547,67,1,0,0,0,548,550,3,76,38,0,549,551,5,116,0,0,550,549,1,0,
	0,0,550,551,1,0,0,0,551,553,1,0,0,0,552,554,3,194,97,0,553,552,1,0,0,0,
	553,554,1,0,0,0,554,69,1,0,0,0,555,564,5,23,0,0,556,561,3,72,36,0,557,558,
	5,16,0,0,558,560,3,72,36,0,559,557,1,0,0,0,560,563,1,0,0,0,561,559,1,0,
	0,0,561,562,1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,564,556,1,0,0,0,564,
	565,1,0,0,0,565,566,1,0,0,0,566,567,5,24,0,0,567,71,1,0,0,0,568,570,3,76,
	38,0,569,571,3,90,45,0,570,569,1,0,0,0,570,571,1,0,0,0,571,73,1,0,0,0,572,
	574,3,76,38,0,573,575,3,90,45,0,574,573,1,0,0,0,574,575,1,0,0,0,575,576,
	1,0,0,0,576,577,3,194,97,0,577,75,1,0,0,0,578,579,6,38,-1,0,579,586,3,138,
	69,0,580,586,3,78,39,0,581,586,3,82,41,0,582,586,3,88,44,0,583,584,5,44,
	0,0,584,586,5,118,0,0,585,578,1,0,0,0,585,580,1,0,0,0,585,581,1,0,0,0,585,
	582,1,0,0,0,585,583,1,0,0,0,586,595,1,0,0,0,587,588,10,3,0,0,588,590,5,
	42,0,0,589,591,3,140,70,0,590,589,1,0,0,0,590,591,1,0,0,0,591,592,1,0,0,
	0,592,594,5,43,0,0,593,587,1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,595,
	596,1,0,0,0,596,77,1,0,0,0,597,595,1,0,0,0,598,603,3,194,97,0,599,600,5,
	45,0,0,600,602,3,194,97,0,601,599,1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,
	0,603,604,1,0,0,0,604,79,1,0,0,0,605,603,1,0,0,0,606,609,3,138,69,0,607,
	609,3,78,39,0,608,606,1,0,0,0,608,607,1,0,0,0,609,81,1,0,0,0,610,611,5,
	46,0,0,611,612,5,23,0,0,612,614,3,80,40,0,613,615,3,84,42,0,614,613,1,0,
	0,0,614,615,1,0,0,0,615,616,1,0,0,0,616,617,5,47,0,0,617,619,3,76,38,0,
	618,620,3,86,43,0,619,618,1,0,0,0,619,620,1,0,0,0,620,621,1,0,0,0,621,622,
	5,24,0,0,622,83,1,0,0,0,623,624,3,194,97,0,624,85,1,0,0,0,625,626,3,194,
	97,0,626,87,1,0,0,0,627,628,5,38,0,0,628,634,3,70,35,0,629,633,5,117,0,
	0,630,633,5,115,0,0,631,633,3,92,46,0,632,629,1,0,0,0,632,630,1,0,0,0,632,
	631,1,0,0,0,633,636,1,0,0,0,634,632,1,0,0,0,634,635,1,0,0,0,635,639,1,0,
	0,0,636,634,1,0,0,0,637,638,5,39,0,0,638,640,3,70,35,0,639,637,1,0,0,0,
	639,640,1,0,0,0,640,89,1,0,0,0,641,642,7,3,0,0,642,91,1,0,0,0,643,644,7,
	4,0,0,644,93,1,0,0,0,645,649,5,15,0,0,646,648,3,96,48,0,647,646,1,0,0,0,
	648,651,1,0,0,0,649,647,1,0,0,0,649,650,1,0,0,0,650,652,1,0,0,0,651,649,
	1,0,0,0,652,653,5,17,0,0,653,95,1,0,0,0,654,670,3,100,50,0,655,670,3,102,
	51,0,656,670,3,106,53,0,657,670,3,112,56,0,658,670,3,94,47,0,659,670,3,
	114,57,0,660,670,3,118,59,0,661,670,3,120,60,0,662,670,3,122,61,0,663,670,
	3,124,62,0,664,670,3,126,63,0,665,670,3,128,64,0,666,670,3,108,54,0,667,
	670,3,110,55,0,668,670,3,130,65,0,669,654,1,0,0,0,669,655,1,0,0,0,669,656,
	1,0,0,0,669,657,1,0,0,0,669,658,1,0,0,0,669,659,1,0,0,0,669,660,1,0,0,0,
	669,661,1,0,0,0,669,662,1,0,0,0,669,663,1,0,0,0,669,664,1,0,0,0,669,665,
	1,0,0,0,669,666,1,0,0,0,669,667,1,0,0,0,669,668,1,0,0,0,670,97,1,0,0,0,
	671,672,3,140,70,0,672,673,5,2,0,0,673,99,1,0,0,0,674,675,5,51,0,0,675,
	676,5,23,0,0,676,677,3,140,70,0,677,678,5,24,0,0,678,681,3,96,48,0,679,
	680,5,52,0,0,680,682,3,96,48,0,681,679,1,0,0,0,681,682,1,0,0,0,682,101,
	1,0,0,0,683,684,5,53,0,0,684,686,3,140,70,0,685,687,3,52,26,0,686,685,1,
	0,0,0,686,687,1,0,0,0,687,688,1,0,0,0,688,690,3,94,47,0,689,691,3,104,52,
	0,690,689,1,0,0,0,691,692,1,0,0,0,692,690,1,0,0,0,692,693,1,0,0,0,693,103,
	1,0,0,0,694,699,5,54,0,0,695,697,3,194,97,0,696,695,1,0,0,0,696,697,1,0,
	0,0,697,698,1,0,0,0,698,700,3,62,31,0,699,696,1,0,0,0,699,700,1,0,0,0,700,
	701,1,0,0,0,701,702,3,94,47,0,702,105,1,0,0,0,703,704,5,55,0,0,704,705,
	5,23,0,0,705,706,3,140,70,0,706,707,5,24,0,0,707,708,3,96,48,0,708,107,
	1,0,0,0,709,712,3,132,66,0,710,712,3,98,49,0,711,709,1,0,0,0,711,710,1,
	0,0,0,712,109,1,0,0,0,713,714,5,56,0,0,714,715,3,94,47,0,715,111,1,0,0,
	0,716,717,5,27,0,0,717,720,5,23,0,0,718,721,3,108,54,0,719,721,5,2,0,0,
	720,718,1,0,0,0,720,719,1,0,0,0,721,724,1,0,0,0,722,725,3,98,49,0,723,725,
	5,2,0,0,724,722,1,0,0,0,724,723,1,0,0,0,725,727,1,0,0,0,726,728,3,140,70,
	0,727,726,1,0,0,0,727,728,1,0,0,0,728,729,1,0,0,0,729,730,5,24,0,0,730,
	731,3,96,48,0,731,113,1,0,0,0,732,734,5,57,0,0,733,735,5,130,0,0,734,733,
	1,0,0,0,734,735,1,0,0,0,735,740,1,0,0,0,736,737,5,23,0,0,737,738,3,116,
	58,0,738,739,5,24,0,0,739,741,1,0,0,0,740,736,1,0,0,0,740,741,1,0,0,0,741,
	742,1,0,0,0,742,743,3,154,77,0,743,115,1,0,0,0,744,745,3,200,100,0,745,
	117,1,0,0,0,746,747,5,58,0,0,747,748,3,96,48,0,748,749,5,55,0,0,749,750,
	5,23,0,0,750,751,3,140,70,0,751,752,5,24,0,0,752,753,5,2,0,0,753,119,1,
	0,0,0,754,755,5,113,0,0,755,756,5,2,0,0,756,121,1,0,0,0,757,758,5,109,0,
	0,758,759,5,2,0,0,759,123,1,0,0,0,760,762,5,59,0,0,761,763,3,140,70,0,762,
	761,1,0,0,0,762,763,1,0,0,0,763,764,1,0,0,0,764,765,5,2,0,0,765,125,1,0,
	0,0,766,767,5,60,0,0,767,768,5,2,0,0,768,127,1,0,0,0,769,770,5,61,0,0,770,
	771,3,152,76,0,771,772,5,2,0,0,772,129,1,0,0,0,773,774,5,62,0,0,774,775,
	3,152,76,0,775,776,5,2,0,0,776,131,1,0,0,0,777,778,5,63,0,0,778,785,3,136,
	68,0,779,785,3,74,37,0,780,781,5,23,0,0,781,782,3,134,67,0,782,783,5,24,
	0,0,783,785,1,0,0,0,784,777,1,0,0,0,784,779,1,0,0,0,784,780,1,0,0,0,785,
	788,1,0,0,0,786,787,5,11,0,0,787,789,3,140,70,0,788,786,1,0,0,0,788,789,
	1,0,0,0,789,790,1,0,0,0,790,791,5,2,0,0,791,133,1,0,0,0,792,794,3,74,37,
	0,793,792,1,0,0,0,793,794,1,0,0,0,794,801,1,0,0,0,795,797,5,16,0,0,796,
	798,3,74,37,0,797,796,1,0,0,0,797,798,1,0,0,0,798,800,1,0,0,0,799,795,1,
	0,0,0,800,803,1,0,0,0,801,799,1,0,0,0,801,802,1,0,0,0,802,135,1,0,0,0,803,
	801,1,0,0,0,804,811,5,23,0,0,805,807,3,194,97,0,806,805,1,0,0,0,806,807,
	1,0,0,0,807,808,1,0,0,0,808,810,5,16,0,0,809,806,1,0,0,0,810,813,1,0,0,
	0,811,809,1,0,0,0,811,812,1,0,0,0,812,815,1,0,0,0,813,811,1,0,0,0,814,816,
	3,194,97,0,815,814,1,0,0,0,815,816,1,0,0,0,816,817,1,0,0,0,817,818,5,24,
	0,0,818,137,1,0,0,0,819,820,7,5,0,0,820,139,1,0,0,0,821,822,6,70,-1,0,822,
	823,5,69,0,0,823,840,3,76,38,0,824,825,5,23,0,0,825,826,3,140,70,0,826,
	827,5,24,0,0,827,840,1,0,0,0,828,829,7,6,0,0,829,840,3,140,70,19,830,831,
	7,7,0,0,831,840,3,140,70,18,832,833,5,71,0,0,833,840,3,140,70,17,834,835,
	5,72,0,0,835,840,3,140,70,16,836,837,5,6,0,0,837,840,3,140,70,15,838,840,
	3,142,71,0,839,821,1,0,0,0,839,824,1,0,0,0,839,828,1,0,0,0,839,830,1,0,
	0,0,839,832,1,0,0,0,839,834,1,0,0,0,839,836,1,0,0,0,839,838,1,0,0,0,840,
	915,1,0,0,0,841,842,10,14,0,0,842,843,5,73,0,0,843,914,3,140,70,14,844,
	845,10,13,0,0,845,846,7,8,0,0,846,914,3,140,70,14,847,848,10,12,0,0,848,
	849,7,7,0,0,849,914,3,140,70,13,850,851,10,11,0,0,851,852,7,9,0,0,852,914,
	3,140,70,12,853,854,10,10,0,0,854,855,5,29,0,0,855,914,3,140,70,11,856,
	857,10,9,0,0,857,858,5,5,0,0,858,914,3,140,70,10,859,860,10,8,0,0,860,861,
	5,28,0,0,861,914,3,140,70,9,862,863,10,7,0,0,863,864,7,10,0,0,864,914,3,
	140,70,8,865,866,10,6,0,0,866,867,7,11,0,0,867,914,3,140,70,7,868,869,10,
	5,0,0,869,870,5,76,0,0,870,914,3,140,70,6,871,872,10,4,0,0,872,873,5,4,
	0,0,873,914,3,140,70,5,874,875,10,3,0,0,875,876,5,77,0,0,876,877,3,140,
	70,0,877,878,5,70,0,0,878,879,3,140,70,3,879,914,1,0,0,0,880,881,10,2,0,
	0,881,882,7,12,0,0,882,914,3,140,70,3,883,884,10,27,0,0,884,914,7,6,0,0,
	885,886,10,25,0,0,886,887,5,42,0,0,887,888,3,140,70,0,888,889,5,43,0,0,
	889,914,1,0,0,0,890,891,10,24,0,0,891,893,5,42,0,0,892,894,3,140,70,0,893,
	892,1,0,0,0,893,894,1,0,0,0,894,895,1,0,0,0,895,897,5,70,0,0,896,898,3,
	140,70,0,897,896,1,0,0,0,897,898,1,0,0,0,898,899,1,0,0,0,899,914,5,43,0,
	0,900,901,10,23,0,0,901,902,5,45,0,0,902,914,3,194,97,0,903,904,10,22,0,
	0,904,905,5,15,0,0,905,906,3,146,73,0,906,907,5,17,0,0,907,914,1,0,0,0,
	908,909,10,21,0,0,909,910,5,23,0,0,910,911,3,150,75,0,911,912,5,24,0,0,
	912,914,1,0,0,0,913,841,1,0,0,0,913,844,1,0,0,0,913,847,1,0,0,0,913,850,
	1,0,0,0,913,853,1,0,0,0,913,856,1,0,0,0,913,859,1,0,0,0,913,862,1,0,0,0,
	913,865,1,0,0,0,913,868,1,0,0,0,913,871,1,0,0,0,913,874,1,0,0,0,913,880,
	1,0,0,0,913,883,1,0,0,0,913,885,1,0,0,0,913,890,1,0,0,0,913,900,1,0,0,0,
	913,903,1,0,0,0,913,908,1,0,0,0,914,917,1,0,0,0,915,913,1,0,0,0,915,916,
	1,0,0,0,916,141,1,0,0,0,917,915,1,0,0,0,918,928,5,102,0,0,919,928,3,192,
	96,0,920,928,3,196,98,0,921,928,3,200,100,0,922,928,3,194,97,0,923,928,
	5,123,0,0,924,928,5,118,0,0,925,928,3,190,95,0,926,928,3,76,38,0,927,918,
	1,0,0,0,927,919,1,0,0,0,927,920,1,0,0,0,927,921,1,0,0,0,927,922,1,0,0,0,
	927,923,1,0,0,0,927,924,1,0,0,0,927,925,1,0,0,0,927,926,1,0,0,0,928,143,
	1,0,0,0,929,934,3,140,70,0,930,931,5,16,0,0,931,933,3,140,70,0,932,930,
	1,0,0,0,933,936,1,0,0,0,934,932,1,0,0,0,934,935,1,0,0,0,935,145,1,0,0,0,
	936,934,1,0,0,0,937,942,3,148,74,0,938,939,5,16,0,0,939,941,3,148,74,0,
	940,938,1,0,0,0,941,944,1,0,0,0,942,940,1,0,0,0,942,943,1,0,0,0,943,946,
	1,0,0,0,944,942,1,0,0,0,945,947,5,16,0,0,946,945,1,0,0,0,946,947,1,0,0,
	0,947,147,1,0,0,0,948,949,3,194,97,0,949,950,5,70,0,0,950,951,3,140,70,
	0,951,149,1,0,0,0,952,954,5,15,0,0,953,955,3,146,73,0,954,953,1,0,0,0,954,
	955,1,0,0,0,955,956,1,0,0,0,956,961,5,17,0,0,957,959,3,144,72,0,958,957,
	1,0,0,0,958,959,1,0,0,0,959,961,1,0,0,0,960,952,1,0,0,0,960,958,1,0,0,0,
	961,151,1,0,0,0,962,963,3,140,70,0,963,964,5,23,0,0,964,965,3,150,75,0,
	965,966,5,24,0,0,966,153,1,0,0,0,967,971,5,15,0,0,968,970,3,156,78,0,969,
	968,1,0,0,0,970,973,1,0,0,0,971,969,1,0,0,0,971,972,1,0,0,0,972,974,1,0,
	0,0,973,971,1,0,0,0,974,975,5,17,0,0,975,155,1,0,0,0,976,994,3,194,97,0,
	977,994,3,154,77,0,978,994,3,158,79,0,979,994,3,164,82,0,980,994,3,166,
	83,0,981,994,3,172,86,0,982,994,3,174,87,0,983,994,3,176,88,0,984,994,3,
	180,90,0,985,994,3,184,92,0,986,994,3,186,93,0,987,994,5,109,0,0,988,994,
	5,113,0,0,989,994,5,114,0,0,990,994,3,192,96,0,991,994,3,200,100,0,992,
	994,3,196,98,0,993,976,1,0,0,0,993,977,1,0,0,0,993,978,1,0,0,0,993,979,
	1,0,0,0,993,980,1,0,0,0,993,981,1,0,0,0,993,982,1,0,0,0,993,983,1,0,0,0,
	993,984,1,0,0,0,993,985,1,0,0,0,993,986,1,0,0,0,993,987,1,0,0,0,993,988,
	1,0,0,0,993,989,1,0,0,0,993,990,1,0,0,0,993,991,1,0,0,0,993,992,1,0,0,0,
	994,157,1,0,0,0,995,999,3,162,81,0,996,999,3,188,94,0,997,999,3,160,80,
	0,998,995,1,0,0,0,998,996,1,0,0,0,998,997,1,0,0,0,999,159,1,0,0,0,1000,
	1001,3,194,97,0,1001,1002,5,45,0,0,1002,1003,3,194,97,0,1003,161,1,0,0,
	0,1004,1009,5,59,0,0,1005,1009,5,44,0,0,1006,1009,5,66,0,0,1007,1009,3,
	194,97,0,1008,1004,1,0,0,0,1008,1005,1,0,0,0,1008,1006,1,0,0,0,1008,1007,
	1,0,0,0,1009,1022,1,0,0,0,1010,1012,5,23,0,0,1011,1013,3,158,79,0,1012,
	1011,1,0,0,0,1012,1013,1,0,0,0,1013,1018,1,0,0,0,1014,1015,5,16,0,0,1015,
	1017,3,158,79,0,1016,1014,1,0,0,0,1017,1020,1,0,0,0,1018,1016,1,0,0,0,1018,
	1019,1,0,0,0,1019,1021,1,0,0,0,1020,1018,1,0,0,0,1021,1023,5,24,0,0,1022,
	1010,1,0,0,0,1022,1023,1,0,0,0,1023,163,1,0,0,0,1024,1025,5,88,0,0,1025,
	1028,3,168,84,0,1026,1027,5,89,0,0,1027,1029,3,158,79,0,1028,1026,1,0,0,
	0,1028,1029,1,0,0,0,1029,165,1,0,0,0,1030,1031,3,168,84,0,1031,1032,5,89,
	0,0,1032,1033,3,158,79,0,1033,167,1,0,0,0,1034,1042,3,194,97,0,1035,1042,
	3,160,80,0,1036,1042,3,170,85,0,1037,1038,5,23,0,0,1038,1039,3,170,85,0,
	1039,1040,5,24,0,0,1040,1042,1,0,0,0,1041,1034,1,0,0,0,1041,1035,1,0,0,
	0,1041,1036,1,0,0,0,1041,1037,1,0,0,0,1042,169,1,0,0,0,1043,1048,3,194,
	97,0,1044,1045,5,16,0,0,1045,1047,3,194,97,0,1046,1044,1,0,0,0,1047,1050,
	1,0,0,0,1048,1046,1,0,0,0,1048,1049,1,0,0,0,1049,171,1,0,0,0,1050,1048,
	1,0,0,0,1051,1052,3,158,79,0,1052,1053,5,90,0,0,1053,1054,3,194,97,0,1054,
	173,1,0,0,0,1055,1056,3,194,97,0,1056,1057,5,70,0,0,1057,175,1,0,0,0,1058,
	1059,5,91,0,0,1059,1063,3,158,79,0,1060,1062,3,178,89,0,1061,1060,1,0,0,
	0,1062,1065,1,0,0,0,1063,1061,1,0,0,0,1063,1064,1,0,0,0,1064,177,1,0,0,
	0,1065,1063,1,0,0,0,1066,1067,5,92,0,0,1067,1068,3,188,94,0,1068,1069,3,
	154,77,0,1069,1073,1,0,0,0,1070,1071,5,93,0,0,1071,1073,3,154,77,0,1072,
	1066,1,0,0,0,1072,1070,1,0,0,0,1073,179,1,0,0,0,1074,1075,5,38,0,0,1075,
	1076,3,194,97,0,1076,1078,5,23,0,0,1077,1079,3,170,85,0,1078,1077,1,0,0,
	0,1078,1079,1,0,0,0,1079,1080,1,0,0,0,1080,1082,5,24,0,0,1081,1083,3,182,
	91,0,1082,1081,1,0,0,0,1082,1083,1,0,0,0,1083,1084,1,0,0,0,1084,1085,3,
	154,77,0,1085,181,1,0,0,0,1086,1087,5,94,0,0,1087,1088,3,170,85,0,1088,
	183,1,0,0,0,1089,1092,5,27,0,0,1090,1093,3,154,77,0,1091,1093,3,158,79,
	0,1092,1090,1,0,0,0,1092,1091,1,0,0,0,1093,1094,1,0,0,0,1094,1097,3,158,
	79,0,1095,1098,3,154,77,0,1096,1098,3,158,79,0,1097,1095,1,0,0,0,1097,1096,
	1,0,0,0,1098,1099,1,0,0,0,1099,1100,3,154,77,0,1100,185,1,0,0,0,1101,1102,
	5,51,0,0,1102,1103,3,158,79,0,1103,1104,3,154,77,0,1104,187,1,0,0,0,1105,
	1111,3,200,100,0,1106,1111,5,103,0,0,1107,1111,5,104,0,0,1108,1111,3,196,
	98,0,1109,1111,5,102,0,0,1110,1105,1,0,0,0,1110,1106,1,0,0,0,1110,1107,
	1,0,0,0,1110,1108,1,0,0,0,1110,1109,1,0,0,0,1111,189,1,0,0,0,1112,1114,
	5,23,0,0,1113,1115,3,140,70,0,1114,1113,1,0,0,0,1114,1115,1,0,0,0,1115,
	1122,1,0,0,0,1116,1118,5,16,0,0,1117,1119,3,140,70,0,1118,1117,1,0,0,0,
	1118,1119,1,0,0,0,1119,1121,1,0,0,0,1120,1116,1,0,0,0,1121,1124,1,0,0,0,
	1122,1120,1,0,0,0,1122,1123,1,0,0,0,1123,1125,1,0,0,0,1124,1122,1,0,0,0,
	1125,1139,5,24,0,0,1126,1135,5,42,0,0,1127,1132,3,140,70,0,1128,1129,5,
	16,0,0,1129,1131,3,140,70,0,1130,1128,1,0,0,0,1131,1134,1,0,0,0,1132,1130,
	1,0,0,0,1132,1133,1,0,0,0,1133,1136,1,0,0,0,1134,1132,1,0,0,0,1135,1127,
	1,0,0,0,1135,1136,1,0,0,0,1136,1137,1,0,0,0,1137,1139,5,43,0,0,1138,1112,
	1,0,0,0,1138,1126,1,0,0,0,1139,191,1,0,0,0,1140,1142,7,13,0,0,1141,1143,
	5,105,0,0,1142,1141,1,0,0,0,1142,1143,1,0,0,0,1143,193,1,0,0,0,1144,1145,
	7,14,0,0,1145,195,1,0,0,0,1146,1148,5,106,0,0,1147,1146,1,0,0,0,1148,1149,
	1,0,0,0,1149,1147,1,0,0,0,1149,1150,1,0,0,0,1150,197,1,0,0,0,1151,1163,
	5,96,0,0,1152,1153,5,23,0,0,1153,1158,3,78,39,0,1154,1155,5,16,0,0,1155,
	1157,3,78,39,0,1156,1154,1,0,0,0,1157,1160,1,0,0,0,1158,1156,1,0,0,0,1158,
	1159,1,0,0,0,1159,1161,1,0,0,0,1160,1158,1,0,0,0,1161,1162,5,24,0,0,1162,
	1164,1,0,0,0,1163,1152,1,0,0,0,1163,1164,1,0,0,0,1164,199,1,0,0,0,1165,
	1167,5,130,0,0,1166,1165,1,0,0,0,1167,1168,1,0,0,0,1168,1166,1,0,0,0,1168,
	1169,1,0,0,0,1169,201,1,0,0,0,130,213,215,230,234,239,245,249,252,257,263,
	270,274,287,295,300,310,313,319,327,330,341,351,353,359,386,389,400,405,
	410,424,427,434,438,440,445,450,453,459,463,467,472,485,487,494,504,510,
	521,524,530,533,541,544,550,553,561,564,570,574,585,590,595,603,608,614,
	619,632,634,639,649,669,681,686,692,696,699,711,720,724,727,734,740,762,
	784,788,793,797,801,806,811,815,839,893,897,913,915,927,934,942,946,954,
	958,960,971,993,998,1008,1012,1018,1022,1028,1041,1048,1063,1072,1078,1082,
	1092,1097,1110,1114,1118,1122,1132,1135,1138,1142,1149,1158,1163,1168];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(SolidityParser._serializedATN);
		}

		return SolidityParser.__ATN;
	}


	static DecisionsToDFA = SolidityParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SourceUnitContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SolidityParser.EOF, 0);
	}
	public pragmaDirective_list(): PragmaDirectiveContext[] {
		return this.getTypedRuleContexts(PragmaDirectiveContext) as PragmaDirectiveContext[];
	}
	public pragmaDirective(i: number): PragmaDirectiveContext {
		return this.getTypedRuleContext(PragmaDirectiveContext, i) as PragmaDirectiveContext;
	}
	public importDirective_list(): ImportDirectiveContext[] {
		return this.getTypedRuleContexts(ImportDirectiveContext) as ImportDirectiveContext[];
	}
	public importDirective(i: number): ImportDirectiveContext {
		return this.getTypedRuleContext(ImportDirectiveContext, i) as ImportDirectiveContext;
	}
	public contractDefinition_list(): ContractDefinitionContext[] {
		return this.getTypedRuleContexts(ContractDefinitionContext) as ContractDefinitionContext[];
	}
	public contractDefinition(i: number): ContractDefinitionContext {
		return this.getTypedRuleContext(ContractDefinitionContext, i) as ContractDefinitionContext;
	}
	public enumDefinition_list(): EnumDefinitionContext[] {
		return this.getTypedRuleContexts(EnumDefinitionContext) as EnumDefinitionContext[];
	}
	public enumDefinition(i: number): EnumDefinitionContext {
		return this.getTypedRuleContext(EnumDefinitionContext, i) as EnumDefinitionContext;
	}
	public eventDefinition_list(): EventDefinitionContext[] {
		return this.getTypedRuleContexts(EventDefinitionContext) as EventDefinitionContext[];
	}
	public eventDefinition(i: number): EventDefinitionContext {
		return this.getTypedRuleContext(EventDefinitionContext, i) as EventDefinitionContext;
	}
	public structDefinition_list(): StructDefinitionContext[] {
		return this.getTypedRuleContexts(StructDefinitionContext) as StructDefinitionContext[];
	}
	public structDefinition(i: number): StructDefinitionContext {
		return this.getTypedRuleContext(StructDefinitionContext, i) as StructDefinitionContext;
	}
	public functionDefinition_list(): FunctionDefinitionContext[] {
		return this.getTypedRuleContexts(FunctionDefinitionContext) as FunctionDefinitionContext[];
	}
	public functionDefinition(i: number): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, i) as FunctionDefinitionContext;
	}
	public fileLevelConstant_list(): FileLevelConstantContext[] {
		return this.getTypedRuleContexts(FileLevelConstantContext) as FileLevelConstantContext[];
	}
	public fileLevelConstant(i: number): FileLevelConstantContext {
		return this.getTypedRuleContext(FileLevelConstantContext, i) as FileLevelConstantContext;
	}
	public customErrorDefinition_list(): CustomErrorDefinitionContext[] {
		return this.getTypedRuleContexts(CustomErrorDefinitionContext) as CustomErrorDefinitionContext[];
	}
	public customErrorDefinition(i: number): CustomErrorDefinitionContext {
		return this.getTypedRuleContext(CustomErrorDefinitionContext, i) as CustomErrorDefinitionContext;
	}
	public typeDefinition_list(): TypeDefinitionContext[] {
		return this.getTypedRuleContexts(TypeDefinitionContext) as TypeDefinitionContext[];
	}
	public typeDefinition(i: number): TypeDefinitionContext {
		return this.getTypedRuleContext(TypeDefinitionContext, i) as TypeDefinitionContext;
	}
	public usingForDeclaration_list(): UsingForDeclarationContext[] {
		return this.getTypedRuleContexts(UsingForDeclarationContext) as UsingForDeclarationContext[];
	}
	public usingForDeclaration(i: number): UsingForDeclarationContext {
		return this.getTypedRuleContext(UsingForDeclarationContext, i) as UsingForDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_sourceUnit;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterSourceUnit) {
	 		listener.enterSourceUnit(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitSourceUnit) {
	 		listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pragmaName(): PragmaNameContext {
		return this.getTypedRuleContext(PragmaNameContext, 0) as PragmaNameContext;
	}
	public pragmaValue(): PragmaValueContext {
		return this.getTypedRuleContext(PragmaValueContext, 0) as PragmaValueContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_pragmaDirective;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterPragmaDirective) {
	 		listener.enterPragmaDirective(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitPragmaDirective) {
	 		listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_pragmaName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterPragmaName) {
	 		listener.enterPragmaName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitPragmaName) {
	 		listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public version(): VersionContext {
		return this.getTypedRuleContext(VersionContext, 0) as VersionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_pragmaValue;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterPragmaValue) {
	 		listener.enterPragmaValue(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitPragmaValue) {
	 		listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public versionConstraint_list(): VersionConstraintContext[] {
		return this.getTypedRuleContexts(VersionConstraintContext) as VersionConstraintContext[];
	}
	public versionConstraint(i: number): VersionConstraintContext {
		return this.getTypedRuleContext(VersionConstraintContext, i) as VersionConstraintContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_version;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVersion) {
	 		listener.enterVersion(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVersion) {
	 		listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_versionOperator;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVersionOperator) {
	 		listener.enterVersionOperator(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVersionOperator) {
	 		listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VersionLiteral(): TerminalNode {
		return this.getToken(SolidityParser.VersionLiteral, 0);
	}
	public versionOperator(): VersionOperatorContext {
		return this.getTypedRuleContext(VersionOperatorContext, 0) as VersionOperatorContext;
	}
	public DecimalNumber(): TerminalNode {
		return this.getToken(SolidityParser.DecimalNumber, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_versionConstraint;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVersionConstraint) {
	 		listener.enterVersionConstraint(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVersionConstraint) {
	 		listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_importDeclaration;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importPath(): ImportPathContext {
		return this.getTypedRuleContext(ImportPathContext, 0) as ImportPathContext;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_importDirective;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterImportDirective) {
	 		listener.enterImportDirective(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitImportDirective) {
	 		listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteralFragment(): TerminalNode {
		return this.getToken(SolidityParser.StringLiteralFragment, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_importPath;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterImportPath) {
	 		listener.enterImportPath(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitImportPath) {
	 		listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public inheritanceSpecifier_list(): InheritanceSpecifierContext[] {
		return this.getTypedRuleContexts(InheritanceSpecifierContext) as InheritanceSpecifierContext[];
	}
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext {
		return this.getTypedRuleContext(InheritanceSpecifierContext, i) as InheritanceSpecifierContext;
	}
	public contractPart_list(): ContractPartContext[] {
		return this.getTypedRuleContexts(ContractPartContext) as ContractPartContext[];
	}
	public contractPart(i: number): ContractPartContext {
		return this.getTypedRuleContext(ContractPartContext, i) as ContractPartContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_contractDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterContractDefinition) {
	 		listener.enterContractDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitContractDefinition) {
	 		listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_inheritanceSpecifier;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterInheritanceSpecifier) {
	 		listener.enterInheritanceSpecifier(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitInheritanceSpecifier) {
	 		listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		return this.getTypedRuleContext(StateVariableDeclarationContext, 0) as StateVariableDeclarationContext;
	}
	public usingForDeclaration(): UsingForDeclarationContext {
		return this.getTypedRuleContext(UsingForDeclarationContext, 0) as UsingForDeclarationContext;
	}
	public structDefinition(): StructDefinitionContext {
		return this.getTypedRuleContext(StructDefinitionContext, 0) as StructDefinitionContext;
	}
	public modifierDefinition(): ModifierDefinitionContext {
		return this.getTypedRuleContext(ModifierDefinitionContext, 0) as ModifierDefinitionContext;
	}
	public functionDefinition(): FunctionDefinitionContext {
		return this.getTypedRuleContext(FunctionDefinitionContext, 0) as FunctionDefinitionContext;
	}
	public eventDefinition(): EventDefinitionContext {
		return this.getTypedRuleContext(EventDefinitionContext, 0) as EventDefinitionContext;
	}
	public enumDefinition(): EnumDefinitionContext {
		return this.getTypedRuleContext(EnumDefinitionContext, 0) as EnumDefinitionContext;
	}
	public customErrorDefinition(): CustomErrorDefinitionContext {
		return this.getTypedRuleContext(CustomErrorDefinitionContext, 0) as CustomErrorDefinitionContext;
	}
	public typeDefinition(): TypeDefinitionContext {
		return this.getTypedRuleContext(TypeDefinitionContext, 0) as TypeDefinitionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_contractPart;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterContractPart) {
	 		listener.enterContractPart(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitContractPart) {
	 		listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public PublicKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.PublicKeyword);
	}
	public PublicKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.PublicKeyword, i);
	}
	public InternalKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.InternalKeyword);
	}
	public InternalKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.InternalKeyword, i);
	}
	public PrivateKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.PrivateKeyword);
	}
	public PrivateKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.PrivateKeyword, i);
	}
	public ConstantKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.ConstantKeyword);
	}
	public ConstantKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.ConstantKeyword, i);
	}
	public TransientKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.TransientKeyword);
	}
	public TransientKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.TransientKeyword, i);
	}
	public ImmutableKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.ImmutableKeyword);
	}
	public ImmutableKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.ImmutableKeyword, i);
	}
	public overrideSpecifier_list(): OverrideSpecifierContext[] {
		return this.getTypedRuleContexts(OverrideSpecifierContext) as OverrideSpecifierContext[];
	}
	public overrideSpecifier(i: number): OverrideSpecifierContext {
		return this.getTypedRuleContext(OverrideSpecifierContext, i) as OverrideSpecifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_stateVariableDeclaration;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStateVariableDeclaration) {
	 		listener.enterStateVariableDeclaration(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStateVariableDeclaration) {
	 		listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileLevelConstantContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public ConstantKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ConstantKeyword, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_fileLevelConstant;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFileLevelConstant) {
	 		listener.enterFileLevelConstant(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFileLevelConstant) {
	 		listener.exitFileLevelConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFileLevelConstant) {
			return visitor.visitFileLevelConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustomErrorDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_customErrorDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterCustomErrorDefinition) {
	 		listener.enterCustomErrorDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitCustomErrorDefinition) {
	 		listener.exitCustomErrorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCustomErrorDefinition) {
			return visitor.visitCustomErrorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TypeKeyword(): TerminalNode {
		return this.getToken(SolidityParser.TypeKeyword, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getTypedRuleContext(ElementaryTypeNameContext, 0) as ElementaryTypeNameContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_typeDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterTypeDefinition) {
	 		listener.enterTypeDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitTypeDefinition) {
	 		listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public usingForObject(): UsingForObjectContext {
		return this.getTypedRuleContext(UsingForObjectContext, 0) as UsingForObjectContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public GlobalKeyword(): TerminalNode {
		return this.getToken(SolidityParser.GlobalKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_usingForDeclaration;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUsingForDeclaration) {
	 		listener.enterUsingForDeclaration(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUsingForDeclaration) {
	 		listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
	public usingForObjectDirective_list(): UsingForObjectDirectiveContext[] {
		return this.getTypedRuleContexts(UsingForObjectDirectiveContext) as UsingForObjectDirectiveContext[];
	}
	public usingForObjectDirective(i: number): UsingForObjectDirectiveContext {
		return this.getTypedRuleContext(UsingForObjectDirectiveContext, i) as UsingForObjectDirectiveContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_usingForObject;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUsingForObject) {
	 		listener.enterUsingForObject(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUsingForObject) {
	 		listener.exitUsingForObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObject) {
			return visitor.visitUsingForObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectDirectiveContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
	public userDefinableOperators(): UserDefinableOperatorsContext {
		return this.getTypedRuleContext(UserDefinableOperatorsContext, 0) as UserDefinableOperatorsContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_usingForObjectDirective;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUsingForObjectDirective) {
	 		listener.enterUsingForObjectDirective(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUsingForObjectDirective) {
	 		listener.exitUsingForObjectDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObjectDirective) {
			return visitor.visitUsingForObjectDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinableOperatorsContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_userDefinableOperators;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUserDefinableOperators) {
	 		listener.enterUserDefinableOperators(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUserDefinableOperators) {
	 		listener.exitUserDefinableOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinableOperators) {
			return visitor.visitUserDefinableOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_structDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStructDefinition) {
	 		listener.enterStructDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStructDefinition) {
	 		listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public VirtualKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.VirtualKeyword);
	}
	public VirtualKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.VirtualKeyword, i);
	}
	public overrideSpecifier_list(): OverrideSpecifierContext[] {
		return this.getTypedRuleContexts(OverrideSpecifierContext) as OverrideSpecifierContext[];
	}
	public overrideSpecifier(i: number): OverrideSpecifierContext {
		return this.getTypedRuleContext(OverrideSpecifierContext, i) as OverrideSpecifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_modifierDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterModifierDefinition) {
	 		listener.enterModifierDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitModifierDefinition) {
	 		listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_modifierInvocation;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterModifierInvocation) {
	 		listener.enterModifierInvocation(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitModifierInvocation) {
	 		listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionDescriptor(): FunctionDescriptorContext {
		return this.getTypedRuleContext(FunctionDescriptorContext, 0) as FunctionDescriptorContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public modifierList(): ModifierListContext {
		return this.getTypedRuleContext(ModifierListContext, 0) as ModifierListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public returnParameters(): ReturnParametersContext {
		return this.getTypedRuleContext(ReturnParametersContext, 0) as ReturnParametersContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionDefinition) {
	 		listener.enterFunctionDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionDefinition) {
	 		listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDescriptorContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ConstructorKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ConstructorKeyword, 0);
	}
	public FallbackKeyword(): TerminalNode {
		return this.getToken(SolidityParser.FallbackKeyword, 0);
	}
	public ReceiveKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ReceiveKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionDescriptor;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionDescriptor) {
	 		listener.enterFunctionDescriptor(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionDescriptor) {
	 		listener.exitFunctionDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDescriptor) {
			return visitor.visitFunctionDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_returnParameters;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterReturnParameters) {
	 		listener.enterReturnParameters(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitReturnParameters) {
	 		listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ExternalKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.ExternalKeyword);
	}
	public ExternalKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.ExternalKeyword, i);
	}
	public PublicKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.PublicKeyword);
	}
	public PublicKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.PublicKeyword, i);
	}
	public InternalKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.InternalKeyword);
	}
	public InternalKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.InternalKeyword, i);
	}
	public PrivateKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.PrivateKeyword);
	}
	public PrivateKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.PrivateKeyword, i);
	}
	public VirtualKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.VirtualKeyword);
	}
	public VirtualKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.VirtualKeyword, i);
	}
	public stateMutability_list(): StateMutabilityContext[] {
		return this.getTypedRuleContexts(StateMutabilityContext) as StateMutabilityContext[];
	}
	public stateMutability(i: number): StateMutabilityContext {
		return this.getTypedRuleContext(StateMutabilityContext, i) as StateMutabilityContext;
	}
	public modifierInvocation_list(): ModifierInvocationContext[] {
		return this.getTypedRuleContexts(ModifierInvocationContext) as ModifierInvocationContext[];
	}
	public modifierInvocation(i: number): ModifierInvocationContext {
		return this.getTypedRuleContext(ModifierInvocationContext, i) as ModifierInvocationContext;
	}
	public overrideSpecifier_list(): OverrideSpecifierContext[] {
		return this.getTypedRuleContexts(OverrideSpecifierContext) as OverrideSpecifierContext[];
	}
	public overrideSpecifier(i: number): OverrideSpecifierContext {
		return this.getTypedRuleContext(OverrideSpecifierContext, i) as OverrideSpecifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_modifierList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterModifierList) {
	 		listener.enterModifierList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitModifierList) {
	 		listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public eventParameterList(): EventParameterListContext {
		return this.getTypedRuleContext(EventParameterListContext, 0) as EventParameterListContext;
	}
	public AnonymousKeyword(): TerminalNode {
		return this.getToken(SolidityParser.AnonymousKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_eventDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEventDefinition) {
	 		listener.enterEventDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEventDefinition) {
	 		listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_enumValue;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEnumValue) {
	 		listener.enterEnumValue(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEnumValue) {
	 		listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enumValue_list(): EnumValueContext[] {
		return this.getTypedRuleContexts(EnumValueContext) as EnumValueContext[];
	}
	public enumValue(i: number): EnumValueContext {
		return this.getTypedRuleContext(EnumValueContext, i) as EnumValueContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_enumDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEnumDefinition) {
	 		listener.enterEnumDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEnumDefinition) {
	 		listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_parameterList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public storageLocation(): StorageLocationContext {
		return this.getTypedRuleContext(StorageLocationContext, 0) as StorageLocationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_parameter;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eventParameter_list(): EventParameterContext[] {
		return this.getTypedRuleContexts(EventParameterContext) as EventParameterContext[];
	}
	public eventParameter(i: number): EventParameterContext {
		return this.getTypedRuleContext(EventParameterContext, i) as EventParameterContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_eventParameterList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEventParameterList) {
	 		listener.enterEventParameterList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEventParameterList) {
	 		listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public IndexedKeyword(): TerminalNode {
		return this.getToken(SolidityParser.IndexedKeyword, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_eventParameter;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEventParameter) {
	 		listener.enterEventParameter(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEventParameter) {
	 		listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionTypeParameter_list(): FunctionTypeParameterContext[] {
		return this.getTypedRuleContexts(FunctionTypeParameterContext) as FunctionTypeParameterContext[];
	}
	public functionTypeParameter(i: number): FunctionTypeParameterContext {
		return this.getTypedRuleContext(FunctionTypeParameterContext, i) as FunctionTypeParameterContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionTypeParameterList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionTypeParameterList) {
	 		listener.enterFunctionTypeParameterList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionTypeParameterList) {
	 		listener.exitFunctionTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameterList) {
			return visitor.visitFunctionTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public storageLocation(): StorageLocationContext {
		return this.getTypedRuleContext(StorageLocationContext, 0) as StorageLocationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionTypeParameter;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionTypeParameter) {
	 		listener.enterFunctionTypeParameter(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionTypeParameter) {
	 		listener.exitFunctionTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameter) {
			return visitor.visitFunctionTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public storageLocation(): StorageLocationContext {
		return this.getTypedRuleContext(StorageLocationContext, 0) as StorageLocationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_variableDeclaration;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getTypedRuleContext(ElementaryTypeNameContext, 0) as ElementaryTypeNameContext;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
	public mapping(): MappingContext {
		return this.getTypedRuleContext(MappingContext, 0) as MappingContext;
	}
	public functionTypeName(): FunctionTypeNameContext {
		return this.getTypedRuleContext(FunctionTypeNameContext, 0) as FunctionTypeNameContext;
	}
	public PayableKeyword(): TerminalNode {
		return this.getToken(SolidityParser.PayableKeyword, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_typeName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_userDefinedTypeName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUserDefinedTypeName) {
	 		listener.enterUserDefinedTypeName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUserDefinedTypeName) {
	 		listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getTypedRuleContext(ElementaryTypeNameContext, 0) as ElementaryTypeNameContext;
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, 0) as UserDefinedTypeNameContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_mappingKey;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterMappingKey) {
	 		listener.enterMappingKey(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitMappingKey) {
	 		listener.exitMappingKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKey) {
			return visitor.visitMappingKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mappingKey(): MappingKeyContext {
		return this.getTypedRuleContext(MappingKeyContext, 0) as MappingKeyContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public mappingKeyName(): MappingKeyNameContext {
		return this.getTypedRuleContext(MappingKeyNameContext, 0) as MappingKeyNameContext;
	}
	public mappingValueName(): MappingValueNameContext {
		return this.getTypedRuleContext(MappingValueNameContext, 0) as MappingValueNameContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_mapping;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterMapping) {
	 		listener.enterMapping(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitMapping) {
	 		listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_mappingKeyName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterMappingKeyName) {
	 		listener.enterMappingKeyName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitMappingKeyName) {
	 		listener.exitMappingKeyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKeyName) {
			return visitor.visitMappingKeyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingValueNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_mappingValueName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterMappingValueName) {
	 		listener.enterMappingValueName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitMappingValueName) {
	 		listener.exitMappingValueName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingValueName) {
			return visitor.visitMappingValueName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionTypeParameterList_list(): FunctionTypeParameterListContext[] {
		return this.getTypedRuleContexts(FunctionTypeParameterListContext) as FunctionTypeParameterListContext[];
	}
	public functionTypeParameterList(i: number): FunctionTypeParameterListContext {
		return this.getTypedRuleContext(FunctionTypeParameterListContext, i) as FunctionTypeParameterListContext;
	}
	public InternalKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.InternalKeyword);
	}
	public InternalKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.InternalKeyword, i);
	}
	public ExternalKeyword_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.ExternalKeyword);
	}
	public ExternalKeyword(i: number): TerminalNode {
		return this.getToken(SolidityParser.ExternalKeyword, i);
	}
	public stateMutability_list(): StateMutabilityContext[] {
		return this.getTypedRuleContexts(StateMutabilityContext) as StateMutabilityContext[];
	}
	public stateMutability(i: number): StateMutabilityContext {
		return this.getTypedRuleContext(StateMutabilityContext, i) as StateMutabilityContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionTypeName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionTypeName) {
	 		listener.enterFunctionTypeName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionTypeName) {
	 		listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_storageLocation;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStorageLocation) {
	 		listener.enterStorageLocation(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStorageLocation) {
	 		listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PureKeyword(): TerminalNode {
		return this.getToken(SolidityParser.PureKeyword, 0);
	}
	public ConstantKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ConstantKeyword, 0);
	}
	public ViewKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ViewKeyword, 0);
	}
	public PayableKeyword(): TerminalNode {
		return this.getToken(SolidityParser.PayableKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_stateMutability;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStateMutability) {
	 		listener.enterStateMutability(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStateMutability) {
	 		listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_block;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		return this.getTypedRuleContext(InlineAssemblyStatementContext, 0) as InlineAssemblyStatementContext;
	}
	public doWhileStatement(): DoWhileStatementContext {
		return this.getTypedRuleContext(DoWhileStatementContext, 0) as DoWhileStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
	public emitStatement(): EmitStatementContext {
		return this.getTypedRuleContext(EmitStatementContext, 0) as EmitStatementContext;
	}
	public simpleStatement(): SimpleStatementContext {
		return this.getTypedRuleContext(SimpleStatementContext, 0) as SimpleStatementContext;
	}
	public uncheckedStatement(): UncheckedStatementContext {
		return this.getTypedRuleContext(UncheckedStatementContext, 0) as UncheckedStatementContext;
	}
	public revertStatement(): RevertStatementContext {
		return this.getTypedRuleContext(RevertStatementContext, 0) as RevertStatementContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_statement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_expressionStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_ifStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public returnParameters(): ReturnParametersContext {
		return this.getTypedRuleContext(ReturnParametersContext, 0) as ReturnParametersContext;
	}
	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}
	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_tryStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_catchClause;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterCatchClause) {
	 		listener.enterCatchClause(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitCatchClause) {
	 		listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_whileStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		return this.getTypedRuleContext(VariableDeclarationStatementContext, 0) as VariableDeclarationStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_simpleStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterSimpleStatement) {
	 		listener.enterSimpleStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitSimpleStatement) {
	 		listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UncheckedStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_uncheckedStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterUncheckedStatement) {
	 		listener.enterUncheckedStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitUncheckedStatement) {
	 		listener.exitUncheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUncheckedStatement) {
			return visitor.visitUncheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public simpleStatement(): SimpleStatementContext {
		return this.getTypedRuleContext(SimpleStatementContext, 0) as SimpleStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_forStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitForStatement) {
	 		listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, 0) as AssemblyBlockContext;
	}
	public StringLiteralFragment(): TerminalNode {
		return this.getToken(SolidityParser.StringLiteralFragment, 0);
	}
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext {
		return this.getTypedRuleContext(InlineAssemblyStatementFlagContext, 0) as InlineAssemblyStatementFlagContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_inlineAssemblyStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterInlineAssemblyStatement) {
	 		listener.enterInlineAssemblyStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitInlineAssemblyStatement) {
	 		listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementFlagContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_inlineAssemblyStatementFlag;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterInlineAssemblyStatementFlag) {
	 		listener.enterInlineAssemblyStatementFlag(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitInlineAssemblyStatementFlag) {
	 		listener.exitInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatementFlag) {
			return visitor.visitInlineAssemblyStatementFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_doWhileStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterDoWhileStatement) {
	 		listener.enterDoWhileStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitDoWhileStatement) {
	 		listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ContinueKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ContinueKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_continueStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterContinueStatement) {
	 		listener.enterContinueStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitContinueStatement) {
	 		listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BreakKeyword(): TerminalNode {
		return this.getToken(SolidityParser.BreakKeyword, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_breakStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_returnStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_throwStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterThrowStatement) {
	 		listener.enterThrowStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitThrowStatement) {
	 		listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_emitStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterEmitStatement) {
	 		listener.enterEmitStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitEmitStatement) {
	 		listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevertStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_revertStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterRevertStatement) {
	 		listener.enterRevertStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitRevertStatement) {
	 		listener.exitRevertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitRevertStatement) {
			return visitor.visitRevertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_variableDeclarationStatement;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVariableDeclarationStatement) {
	 		listener.enterVariableDeclarationStatement(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVariableDeclarationStatement) {
	 		listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_variableDeclarationList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterVariableDeclarationList) {
	 		listener.enterVariableDeclarationList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitVariableDeclarationList) {
	 		listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_identifierList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Int(): TerminalNode {
		return this.getToken(SolidityParser.Int, 0);
	}
	public Uint(): TerminalNode {
		return this.getToken(SolidityParser.Uint, 0);
	}
	public Byte(): TerminalNode {
		return this.getToken(SolidityParser.Byte, 0);
	}
	public Fixed(): TerminalNode {
		return this.getToken(SolidityParser.Fixed, 0);
	}
	public Ufixed(): TerminalNode {
		return this.getToken(SolidityParser.Ufixed, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_elementaryTypeName;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterElementaryTypeName) {
	 		listener.enterElementaryTypeName(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitElementaryTypeName) {
	 		listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public nameValueList(): NameValueListContext {
		return this.getTypedRuleContext(NameValueListContext, 0) as NameValueListContext;
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getTypedRuleContext(FunctionCallArgumentsContext, 0) as FunctionCallArgumentsContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_expression;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(SolidityParser.BooleanLiteral, 0);
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public hexLiteral(): HexLiteralContext {
		return this.getTypedRuleContext(HexLiteralContext, 0) as HexLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public TypeKeyword(): TerminalNode {
		return this.getToken(SolidityParser.TypeKeyword, 0);
	}
	public PayableKeyword(): TerminalNode {
		return this.getToken(SolidityParser.PayableKeyword, 0);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getTypedRuleContext(TupleExpressionContext, 0) as TupleExpressionContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_primaryExpression;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_expressionList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nameValue_list(): NameValueContext[] {
		return this.getTypedRuleContexts(NameValueContext) as NameValueContext[];
	}
	public nameValue(i: number): NameValueContext {
		return this.getTypedRuleContext(NameValueContext, i) as NameValueContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_nameValueList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterNameValueList) {
	 		listener.enterNameValueList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitNameValueList) {
	 		listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_nameValue;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterNameValue) {
	 		listener.enterNameValue(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitNameValue) {
	 		listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nameValueList(): NameValueListContext {
		return this.getTypedRuleContext(NameValueListContext, 0) as NameValueListContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionCallArguments;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionCallArguments) {
	 		listener.enterFunctionCallArguments(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionCallArguments) {
	 		listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getTypedRuleContext(FunctionCallArgumentsContext, 0) as FunctionCallArgumentsContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_functionCall;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyItem_list(): AssemblyItemContext[] {
		return this.getTypedRuleContexts(AssemblyItemContext) as AssemblyItemContext[];
	}
	public assemblyItem(i: number): AssemblyItemContext {
		return this.getTypedRuleContext(AssemblyItemContext, i) as AssemblyItemContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyBlock;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyBlock) {
	 		listener.enterAssemblyBlock(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyBlock) {
	 		listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, 0) as AssemblyBlockContext;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		return this.getTypedRuleContext(AssemblyLocalDefinitionContext, 0) as AssemblyLocalDefinitionContext;
	}
	public assemblyAssignment(): AssemblyAssignmentContext {
		return this.getTypedRuleContext(AssemblyAssignmentContext, 0) as AssemblyAssignmentContext;
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		return this.getTypedRuleContext(AssemblyStackAssignmentContext, 0) as AssemblyStackAssignmentContext;
	}
	public labelDefinition(): LabelDefinitionContext {
		return this.getTypedRuleContext(LabelDefinitionContext, 0) as LabelDefinitionContext;
	}
	public assemblySwitch(): AssemblySwitchContext {
		return this.getTypedRuleContext(AssemblySwitchContext, 0) as AssemblySwitchContext;
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		return this.getTypedRuleContext(AssemblyFunctionDefinitionContext, 0) as AssemblyFunctionDefinitionContext;
	}
	public assemblyFor(): AssemblyForContext {
		return this.getTypedRuleContext(AssemblyForContext, 0) as AssemblyForContext;
	}
	public assemblyIf(): AssemblyIfContext {
		return this.getTypedRuleContext(AssemblyIfContext, 0) as AssemblyIfContext;
	}
	public BreakKeyword(): TerminalNode {
		return this.getToken(SolidityParser.BreakKeyword, 0);
	}
	public ContinueKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ContinueKeyword, 0);
	}
	public LeaveKeyword(): TerminalNode {
		return this.getToken(SolidityParser.LeaveKeyword, 0);
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public hexLiteral(): HexLiteralContext {
		return this.getTypedRuleContext(HexLiteralContext, 0) as HexLiteralContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyItem;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyItem) {
	 		listener.enterAssemblyItem(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyItem) {
	 		listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyCall(): AssemblyCallContext {
		return this.getTypedRuleContext(AssemblyCallContext, 0) as AssemblyCallContext;
	}
	public assemblyLiteral(): AssemblyLiteralContext {
		return this.getTypedRuleContext(AssemblyLiteralContext, 0) as AssemblyLiteralContext;
	}
	public assemblyMember(): AssemblyMemberContext {
		return this.getTypedRuleContext(AssemblyMemberContext, 0) as AssemblyMemberContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyExpression;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyExpression) {
	 		listener.enterAssemblyExpression(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyExpression) {
	 		listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyMemberContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyMember;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyMember) {
	 		listener.enterAssemblyMember(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyMember) {
	 		listener.exitAssemblyMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyMember) {
			return visitor.visitAssemblyMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assemblyExpression_list(): AssemblyExpressionContext[] {
		return this.getTypedRuleContexts(AssemblyExpressionContext) as AssemblyExpressionContext[];
	}
	public assemblyExpression(i: number): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, i) as AssemblyExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyCall;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyCall) {
	 		listener.enterAssemblyCall(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyCall) {
	 		listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getTypedRuleContext(AssemblyIdentifierOrListContext, 0) as AssemblyIdentifierOrListContext;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyLocalDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyLocalDefinition) {
	 		listener.enterAssemblyLocalDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyLocalDefinition) {
	 		listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getTypedRuleContext(AssemblyIdentifierOrListContext, 0) as AssemblyIdentifierOrListContext;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyAssignment;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyAssignment) {
	 		listener.enterAssemblyAssignment(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyAssignment) {
	 		listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierOrListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assemblyMember(): AssemblyMemberContext {
		return this.getTypedRuleContext(AssemblyMemberContext, 0) as AssemblyMemberContext;
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		return this.getTypedRuleContext(AssemblyIdentifierListContext, 0) as AssemblyIdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyIdentifierOrList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyIdentifierOrList) {
	 		listener.enterAssemblyIdentifierOrList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyIdentifierOrList) {
	 		listener.exitAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierOrList) {
			return visitor.visitAssemblyIdentifierOrList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyIdentifierList;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyIdentifierList) {
	 		listener.enterAssemblyIdentifierList(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyIdentifierList) {
	 		listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyStackAssignment;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyStackAssignment) {
	 		listener.enterAssemblyStackAssignment(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyStackAssignment) {
	 		listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_labelDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterLabelDefinition) {
	 		listener.enterLabelDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitLabelDefinition) {
	 		listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
	public assemblyCase_list(): AssemblyCaseContext[] {
		return this.getTypedRuleContexts(AssemblyCaseContext) as AssemblyCaseContext[];
	}
	public assemblyCase(i: number): AssemblyCaseContext {
		return this.getTypedRuleContext(AssemblyCaseContext, i) as AssemblyCaseContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblySwitch;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblySwitch) {
	 		listener.enterAssemblySwitch(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblySwitch) {
	 		listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyLiteral(): AssemblyLiteralContext {
		return this.getTypedRuleContext(AssemblyLiteralContext, 0) as AssemblyLiteralContext;
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, 0) as AssemblyBlockContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyCase;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyCase) {
	 		listener.enterAssemblyCase(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyCase) {
	 		listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, 0) as AssemblyBlockContext;
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		return this.getTypedRuleContext(AssemblyIdentifierListContext, 0) as AssemblyIdentifierListContext;
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		return this.getTypedRuleContext(AssemblyFunctionReturnsContext, 0) as AssemblyFunctionReturnsContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyFunctionDefinition;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyFunctionDefinition) {
	 		listener.enterAssemblyFunctionDefinition(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyFunctionDefinition) {
	 		listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		return this.getTypedRuleContext(AssemblyIdentifierListContext, 0) as AssemblyIdentifierListContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyFunctionReturns;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyFunctionReturns) {
	 		listener.enterAssemblyFunctionReturns(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyFunctionReturns) {
	 		listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyExpression_list(): AssemblyExpressionContext[] {
		return this.getTypedRuleContexts(AssemblyExpressionContext) as AssemblyExpressionContext[];
	}
	public assemblyExpression(i: number): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, i) as AssemblyExpressionContext;
	}
	public assemblyBlock_list(): AssemblyBlockContext[] {
		return this.getTypedRuleContexts(AssemblyBlockContext) as AssemblyBlockContext[];
	}
	public assemblyBlock(i: number): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, i) as AssemblyBlockContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyFor;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyFor) {
	 		listener.enterAssemblyFor(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyFor) {
	 		listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getTypedRuleContext(AssemblyExpressionContext, 0) as AssemblyExpressionContext;
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getTypedRuleContext(AssemblyBlockContext, 0) as AssemblyBlockContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyIf;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyIf) {
	 		listener.enterAssemblyIf(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyIf) {
	 		listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public DecimalNumber(): TerminalNode {
		return this.getToken(SolidityParser.DecimalNumber, 0);
	}
	public HexNumber(): TerminalNode {
		return this.getToken(SolidityParser.HexNumber, 0);
	}
	public hexLiteral(): HexLiteralContext {
		return this.getTypedRuleContext(HexLiteralContext, 0) as HexLiteralContext;
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(SolidityParser.BooleanLiteral, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_assemblyLiteral;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterAssemblyLiteral) {
	 		listener.enterAssemblyLiteral(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitAssemblyLiteral) {
	 		listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_tupleExpression;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterTupleExpression) {
	 		listener.enterTupleExpression(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitTupleExpression) {
	 		listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DecimalNumber(): TerminalNode {
		return this.getToken(SolidityParser.DecimalNumber, 0);
	}
	public HexNumber(): TerminalNode {
		return this.getToken(SolidityParser.HexNumber, 0);
	}
	public NumberUnit(): TerminalNode {
		return this.getToken(SolidityParser.NumberUnit, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_numberLiteral;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterNumberLiteral) {
	 		listener.enterNumberLiteral(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitNumberLiteral) {
	 		listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ReceiveKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ReceiveKeyword, 0);
	}
	public GlobalKeyword(): TerminalNode {
		return this.getToken(SolidityParser.GlobalKeyword, 0);
	}
	public ConstructorKeyword(): TerminalNode {
		return this.getToken(SolidityParser.ConstructorKeyword, 0);
	}
	public PayableKeyword(): TerminalNode {
		return this.getToken(SolidityParser.PayableKeyword, 0);
	}
	public LeaveKeyword(): TerminalNode {
		return this.getToken(SolidityParser.LeaveKeyword, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(SolidityParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_identifier;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexLiteralContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HexLiteralFragment_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.HexLiteralFragment);
	}
	public HexLiteralFragment(i: number): TerminalNode {
		return this.getToken(SolidityParser.HexLiteralFragment, i);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_hexLiteral;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterHexLiteral) {
	 		listener.enterHexLiteral(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitHexLiteral) {
	 		listener.exitHexLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitHexLiteral) {
			return visitor.visitHexLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public userDefinedTypeName_list(): UserDefinedTypeNameContext[] {
		return this.getTypedRuleContexts(UserDefinedTypeNameContext) as UserDefinedTypeNameContext[];
	}
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext {
		return this.getTypedRuleContext(UserDefinedTypeNameContext, i) as UserDefinedTypeNameContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_overrideSpecifier;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterOverrideSpecifier) {
	 		listener.enterOverrideSpecifier(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitOverrideSpecifier) {
	 		listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteralFragment_list(): TerminalNode[] {
	    	return this.getTokens(SolidityParser.StringLiteralFragment);
	}
	public StringLiteralFragment(i: number): TerminalNode {
		return this.getToken(SolidityParser.StringLiteralFragment, i);
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_stringLiteral;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
