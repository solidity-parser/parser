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
	public static readonly T__96 = 97;
	public static readonly Int = 98;
	public static readonly Uint = 99;
	public static readonly Byte = 100;
	public static readonly Fixed = 101;
	public static readonly Ufixed = 102;
	public static readonly BooleanLiteral = 103;
	public static readonly DecimalNumber = 104;
	public static readonly HexNumber = 105;
	public static readonly NumberUnit = 106;
	public static readonly HexLiteralFragment = 107;
	public static readonly ReservedKeyword = 108;
	public static readonly AnonymousKeyword = 109;
	public static readonly BreakKeyword = 110;
	public static readonly ConstantKeyword = 111;
	public static readonly TransientKeyword = 112;
	public static readonly ImmutableKeyword = 113;
	public static readonly ContinueKeyword = 114;
	public static readonly LeaveKeyword = 115;
	public static readonly ExternalKeyword = 116;
	public static readonly IndexedKeyword = 117;
	public static readonly InternalKeyword = 118;
	public static readonly PayableKeyword = 119;
	public static readonly PrivateKeyword = 120;
	public static readonly PublicKeyword = 121;
	public static readonly VirtualKeyword = 122;
	public static readonly PureKeyword = 123;
	public static readonly TypeKeyword = 124;
	public static readonly ViewKeyword = 125;
	public static readonly GlobalKeyword = 126;
	public static readonly ConstructorKeyword = 127;
	public static readonly FallbackKeyword = 128;
	public static readonly ReceiveKeyword = 129;
	public static readonly Identifier = 130;
	public static readonly StringLiteralFragment = 131;
	public static readonly VersionLiteral = 132;
	public static readonly WS = 133;
	public static readonly COMMENT = 134;
	public static readonly LINE_COMMENT = 135;
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
	public static readonly RULE_customStorageLayout = 12;
	public static readonly RULE_contractPart = 13;
	public static readonly RULE_stateVariableDeclaration = 14;
	public static readonly RULE_fileLevelConstant = 15;
	public static readonly RULE_customErrorDefinition = 16;
	public static readonly RULE_typeDefinition = 17;
	public static readonly RULE_usingForDeclaration = 18;
	public static readonly RULE_usingForObject = 19;
	public static readonly RULE_usingForObjectDirective = 20;
	public static readonly RULE_userDefinableOperators = 21;
	public static readonly RULE_structDefinition = 22;
	public static readonly RULE_modifierDefinition = 23;
	public static readonly RULE_modifierInvocation = 24;
	public static readonly RULE_functionDefinition = 25;
	public static readonly RULE_functionDescriptor = 26;
	public static readonly RULE_returnParameters = 27;
	public static readonly RULE_modifierList = 28;
	public static readonly RULE_eventDefinition = 29;
	public static readonly RULE_enumValue = 30;
	public static readonly RULE_enumDefinition = 31;
	public static readonly RULE_parameterList = 32;
	public static readonly RULE_parameter = 33;
	public static readonly RULE_eventParameterList = 34;
	public static readonly RULE_eventParameter = 35;
	public static readonly RULE_functionTypeParameterList = 36;
	public static readonly RULE_functionTypeParameter = 37;
	public static readonly RULE_variableDeclaration = 38;
	public static readonly RULE_typeName = 39;
	public static readonly RULE_userDefinedTypeName = 40;
	public static readonly RULE_mappingKey = 41;
	public static readonly RULE_mapping = 42;
	public static readonly RULE_mappingKeyName = 43;
	public static readonly RULE_mappingValueName = 44;
	public static readonly RULE_functionTypeName = 45;
	public static readonly RULE_storageLocation = 46;
	public static readonly RULE_stateMutability = 47;
	public static readonly RULE_block = 48;
	public static readonly RULE_statement = 49;
	public static readonly RULE_expressionStatement = 50;
	public static readonly RULE_ifStatement = 51;
	public static readonly RULE_tryStatement = 52;
	public static readonly RULE_catchClause = 53;
	public static readonly RULE_whileStatement = 54;
	public static readonly RULE_simpleStatement = 55;
	public static readonly RULE_uncheckedStatement = 56;
	public static readonly RULE_forStatement = 57;
	public static readonly RULE_inlineAssemblyStatement = 58;
	public static readonly RULE_inlineAssemblyStatementFlag = 59;
	public static readonly RULE_doWhileStatement = 60;
	public static readonly RULE_continueStatement = 61;
	public static readonly RULE_breakStatement = 62;
	public static readonly RULE_returnStatement = 63;
	public static readonly RULE_throwStatement = 64;
	public static readonly RULE_emitStatement = 65;
	public static readonly RULE_revertStatement = 66;
	public static readonly RULE_variableDeclarationStatement = 67;
	public static readonly RULE_variableDeclarationList = 68;
	public static readonly RULE_identifierList = 69;
	public static readonly RULE_elementaryTypeName = 70;
	public static readonly RULE_expression = 71;
	public static readonly RULE_primaryExpression = 72;
	public static readonly RULE_expressionList = 73;
	public static readonly RULE_nameValueList = 74;
	public static readonly RULE_nameValue = 75;
	public static readonly RULE_functionCallArguments = 76;
	public static readonly RULE_functionCall = 77;
	public static readonly RULE_assemblyBlock = 78;
	public static readonly RULE_assemblyItem = 79;
	public static readonly RULE_assemblyExpression = 80;
	public static readonly RULE_assemblyMember = 81;
	public static readonly RULE_assemblyCall = 82;
	public static readonly RULE_assemblyLocalDefinition = 83;
	public static readonly RULE_assemblyAssignment = 84;
	public static readonly RULE_assemblyIdentifierOrList = 85;
	public static readonly RULE_assemblyIdentifierList = 86;
	public static readonly RULE_assemblyStackAssignment = 87;
	public static readonly RULE_labelDefinition = 88;
	public static readonly RULE_assemblySwitch = 89;
	public static readonly RULE_assemblyCase = 90;
	public static readonly RULE_assemblyFunctionDefinition = 91;
	public static readonly RULE_assemblyFunctionReturns = 92;
	public static readonly RULE_assemblyFor = 93;
	public static readonly RULE_assemblyIf = 94;
	public static readonly RULE_assemblyLiteral = 95;
	public static readonly RULE_tupleExpression = 96;
	public static readonly RULE_numberLiteral = 97;
	public static readonly RULE_identifier = 98;
	public static readonly RULE_hexLiteral = 99;
	public static readonly RULE_overrideSpecifier = 100;
	public static readonly RULE_stringLiteral = 101;
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
                                                            "')'", "'layout at'", 
                                                            "'error'", "'using'", 
                                                            "'for'", "'|'", 
                                                            "'&'", "'+'", 
                                                            "'-'", "'/'", 
                                                            "'%'", "'=='", 
                                                            "'!='", "'struct'", 
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
                                                             null, null, 
                                                             "Int", "Uint", 
                                                             "Byte", "Fixed", 
                                                             "Ufixed", "BooleanLiteral", 
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
		"importPath", "contractDefinition", "inheritanceSpecifier", "customStorageLayout", 
		"contractPart", "stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
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
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 205283330) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2080392501) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3498573949) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 7) !== 0)) {
				{
				this.state = 215;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 204;
					this.pragmaDirective();
					}
					break;
				case 2:
					{
					this.state = 205;
					this.importDirective();
					}
					break;
				case 3:
					{
					this.state = 206;
					this.contractDefinition();
					}
					break;
				case 4:
					{
					this.state = 207;
					this.enumDefinition();
					}
					break;
				case 5:
					{
					this.state = 208;
					this.eventDefinition();
					}
					break;
				case 6:
					{
					this.state = 209;
					this.structDefinition();
					}
					break;
				case 7:
					{
					this.state = 210;
					this.functionDefinition();
					}
					break;
				case 8:
					{
					this.state = 211;
					this.fileLevelConstant();
					}
					break;
				case 9:
					{
					this.state = 212;
					this.customErrorDefinition();
					}
					break;
				case 10:
					{
					this.state = 213;
					this.typeDefinition();
					}
					break;
				case 11:
					{
					this.state = 214;
					this.usingForDeclaration();
					}
					break;
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
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
			this.state = 222;
			this.match(SolidityParser.T__0);
			this.state = 223;
			this.pragmaName();
			this.state = 224;
			this.pragmaValue();
			this.state = 225;
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
			this.state = 227;
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
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 229;
				this.match(SolidityParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 230;
				this.version();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 231;
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
			this.state = 234;
			this.versionConstraint();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4080) !== 0) || _la===104 || _la===132) {
				{
				{
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4) {
					{
					this.state = 235;
					this.match(SolidityParser.T__3);
					}
				}

				this.state = 238;
				this.versionConstraint();
				}
				}
				this.state = 243;
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
			this.state = 244;
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
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0)) {
					{
					this.state = 246;
					this.versionOperator();
					}
				}

				this.state = 249;
				this.match(SolidityParser.VersionLiteral);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4064) !== 0)) {
					{
					this.state = 250;
					this.versionOperator();
					}
				}

				this.state = 253;
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
			this.state = 256;
			this.identifier();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 257;
				this.match(SolidityParser.T__11);
				this.state = 258;
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
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 261;
				this.match(SolidityParser.T__12);
				this.state = 262;
				this.importPath();
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 263;
					this.match(SolidityParser.T__11);
					this.state = 264;
					this.identifier();
					}
				}

				this.state = 267;
				this.match(SolidityParser.T__1);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 269;
				this.match(SolidityParser.T__12);
				this.state = 272;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 270;
					this.match(SolidityParser.T__2);
					}
					break;
				case 14:
				case 26:
				case 45:
				case 51:
				case 63:
				case 96:
				case 115:
				case 119:
				case 126:
				case 127:
				case 129:
				case 130:
					{
					this.state = 271;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 274;
					this.match(SolidityParser.T__11);
					this.state = 275;
					this.identifier();
					}
				}

				this.state = 278;
				this.match(SolidityParser.T__13);
				this.state = 279;
				this.importPath();
				this.state = 280;
				this.match(SolidityParser.T__1);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 282;
				this.match(SolidityParser.T__12);
				this.state = 283;
				this.match(SolidityParser.T__14);
				this.state = 284;
				this.importDeclaration();
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 285;
					this.match(SolidityParser.T__15);
					this.state = 286;
					this.importDeclaration();
					}
					}
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 292;
				this.match(SolidityParser.T__16);
				this.state = 293;
				this.match(SolidityParser.T__13);
				this.state = 294;
				this.importPath();
				this.state = 295;
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
			this.state = 299;
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
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 301;
				this.match(SolidityParser.T__17);
				}
			}

			this.state = 304;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3670016) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 305;
			this.identifier();
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 306;
				this.customStorageLayout();
				}
				break;
			}
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 309;
				this.match(SolidityParser.T__21);
				this.state = 310;
				this.inheritanceSpecifier();
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 311;
					this.match(SolidityParser.T__15);
					this.state = 312;
					this.inheritanceSpecifier();
					}
					}
					this.state = 317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 320;
				this.customStorageLayout();
				}
			}

			this.state = 323;
			this.match(SolidityParser.T__14);
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201342976) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2080392503) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3498573949) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 7) !== 0)) {
				{
				{
				this.state = 324;
				this.contractPart();
				}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 330;
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
			this.state = 332;
			this.userDefinedTypeName();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 333;
				this.match(SolidityParser.T__22);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
					{
					this.state = 334;
					this.expressionList();
					}
				}

				this.state = 337;
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
	public customStorageLayout(): CustomStorageLayoutContext {
		let localctx: CustomStorageLayoutContext = new CustomStorageLayoutContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SolidityParser.RULE_customStorageLayout);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 340;
			this.match(SolidityParser.T__24);
			this.state = 341;
			this.expression(0);
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
		this.enterRule(localctx, 26, SolidityParser.RULE_contractPart);
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 343;
				this.stateVariableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 344;
				this.usingForDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 345;
				this.structDefinition();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 346;
				this.modifierDefinition();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 347;
				this.functionDefinition();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 348;
				this.eventDefinition();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 349;
				this.enumDefinition();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 350;
				this.customErrorDefinition();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 351;
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
		this.enterRule(localctx, 28, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.typeName(0);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & 27377665) !== 0)) {
				{
				this.state = 362;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 121:
					{
					this.state = 355;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case 118:
					{
					this.state = 356;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case 120:
					{
					this.state = 357;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case 111:
					{
					this.state = 358;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case 112:
					{
					this.state = 359;
					this.match(SolidityParser.TransientKeyword);
					}
					break;
				case 113:
					{
					this.state = 360;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case 97:
					{
					this.state = 361;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 367;
			this.identifier();
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 368;
				this.match(SolidityParser.T__10);
				this.state = 369;
				this.expression(0);
				}
			}

			this.state = 372;
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
		this.enterRule(localctx, 30, SolidityParser.RULE_fileLevelConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.typeName(0);
			this.state = 375;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 376;
			this.identifier();
			this.state = 377;
			this.match(SolidityParser.T__10);
			this.state = 378;
			this.expression(0);
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
	public customErrorDefinition(): CustomErrorDefinitionContext {
		let localctx: CustomErrorDefinitionContext = new CustomErrorDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SolidityParser.RULE_customErrorDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 381;
			this.match(SolidityParser.T__25);
			this.state = 382;
			this.identifier();
			this.state = 383;
			this.parameterList();
			this.state = 384;
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
		this.enterRule(localctx, 34, SolidityParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.match(SolidityParser.TypeKeyword);
			this.state = 387;
			this.identifier();
			this.state = 388;
			this.match(SolidityParser.T__21);
			this.state = 389;
			this.elementaryTypeName();
			this.state = 390;
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
		this.enterRule(localctx, 36, SolidityParser.RULE_usingForDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this.match(SolidityParser.T__26);
			this.state = 393;
			this.usingForObject();
			this.state = 394;
			this.match(SolidityParser.T__27);
			this.state = 397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 395;
				this.match(SolidityParser.T__2);
				}
				break;
			case 14:
			case 26:
			case 39:
			case 45:
			case 47:
			case 51:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 96:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 115:
			case 119:
			case 126:
			case 127:
			case 129:
			case 130:
				{
				this.state = 396;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===126) {
				{
				this.state = 399;
				this.match(SolidityParser.GlobalKeyword);
				}
			}

			this.state = 402;
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
		this.enterRule(localctx, 38, SolidityParser.RULE_usingForObject);
		let _la: number;
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
			case 26:
			case 45:
			case 51:
			case 63:
			case 96:
			case 115:
			case 119:
			case 126:
			case 127:
			case 129:
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 404;
				this.userDefinedTypeName();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 405;
				this.match(SolidityParser.T__14);
				this.state = 406;
				this.usingForObjectDirective();
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 407;
					this.match(SolidityParser.T__15);
					this.state = 408;
					this.usingForObjectDirective();
					}
					}
					this.state = 413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 414;
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
		this.enterRule(localctx, 40, SolidityParser.RULE_usingForObjectDirective);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			this.userDefinedTypeName();
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 419;
				this.match(SolidityParser.T__11);
				this.state = 420;
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
		this.enterRule(localctx, 42, SolidityParser.RULE_userDefinableOperators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758098408) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 31) !== 0))) {
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
		this.enterRule(localctx, 44, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(SolidityParser.T__36);
			this.state = 426;
			this.identifier();
			this.state = 427;
			this.match(SolidityParser.T__14);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
				{
				this.state = 428;
				this.variableDeclaration();
				this.state = 429;
				this.match(SolidityParser.T__1);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
					{
					{
					this.state = 430;
					this.variableDeclaration();
					this.state = 431;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 440;
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
		this.enterRule(localctx, 46, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 442;
			this.match(SolidityParser.T__37);
			this.state = 443;
			this.identifier();
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 444;
				this.parameterList();
				}
			}

			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===97 || _la===122) {
				{
				this.state = 449;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 122:
					{
					this.state = 447;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case 97:
					{
					this.state = 448;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 454;
				this.match(SolidityParser.T__1);
				}
				break;
			case 15:
				{
				this.state = 455;
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
		this.enterRule(localctx, 48, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this.identifier();
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 459;
				this.match(SolidityParser.T__22);
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
					{
					this.state = 460;
					this.expressionList();
					}
				}

				this.state = 463;
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
		this.enterRule(localctx, 50, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 466;
			this.functionDescriptor();
			this.state = 467;
			this.parameterList();
			this.state = 468;
			this.modifierList();
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 469;
				this.returnParameters();
				}
			}

			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 472;
				this.match(SolidityParser.T__1);
				}
				break;
			case 15:
				{
				this.state = 473;
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
		this.enterRule(localctx, 52, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 476;
				this.match(SolidityParser.T__38);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
					{
					this.state = 477;
					this.identifier();
					}
				}

				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 480;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case 128:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 481;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case 129:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 482;
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
		this.enterRule(localctx, 54, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 485;
			this.match(SolidityParser.T__39);
			this.state = 486;
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
		this.enterRule(localctx, 56, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4023943171) !== 0) || _la===129 || _la===130) {
				{
				this.state = 496;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 488;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;
				case 2:
					{
					this.state = 489;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case 3:
					{
					this.state = 490;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case 4:
					{
					this.state = 491;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case 5:
					{
					this.state = 492;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case 6:
					{
					this.state = 493;
					this.stateMutability();
					}
					break;
				case 7:
					{
					this.state = 494;
					this.modifierInvocation();
					}
					break;
				case 8:
					{
					this.state = 495;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 500;
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
		this.enterRule(localctx, 58, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 501;
			this.match(SolidityParser.T__40);
			this.state = 502;
			this.identifier();
			this.state = 503;
			this.eventParameterList();
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 504;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 507;
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
		this.enterRule(localctx, 60, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
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
		this.enterRule(localctx, 62, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 511;
			this.match(SolidityParser.T__41);
			this.state = 512;
			this.identifier();
			this.state = 513;
			this.match(SolidityParser.T__14);
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 514;
				this.enumValue();
				}
			}

			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 517;
				this.match(SolidityParser.T__15);
				this.state = 518;
				this.enumValue();
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 524;
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
		this.enterRule(localctx, 64, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 526;
			this.match(SolidityParser.T__22);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
				{
				this.state = 527;
				this.parameter();
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 528;
					this.match(SolidityParser.T__15);
					this.state = 529;
					this.parameter();
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 537;
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
		this.enterRule(localctx, 66, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 539;
			this.typeName(0);
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 540;
				this.storageLocation();
				}
				break;
			}
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 543;
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
		this.enterRule(localctx, 68, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 546;
			this.match(SolidityParser.T__22);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
				{
				this.state = 547;
				this.eventParameter();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 548;
					this.match(SolidityParser.T__15);
					this.state = 549;
					this.eventParameter();
					}
					}
					this.state = 554;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 557;
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
		this.enterRule(localctx, 70, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
			this.typeName(0);
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===117) {
				{
				this.state = 560;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 563;
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
		this.enterRule(localctx, 72, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 566;
			this.match(SolidityParser.T__22);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
				{
				this.state = 567;
				this.functionTypeParameter();
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 568;
					this.match(SolidityParser.T__15);
					this.state = 569;
					this.functionTypeParameter();
					}
					}
					this.state = 574;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 577;
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
		this.enterRule(localctx, 74, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 579;
			this.typeName(0);
			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0)) {
				{
				this.state = 580;
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
		this.enterRule(localctx, 76, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 583;
			this.typeName(0);
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 584;
				this.storageLocation();
				}
				break;
			}
			this.state = 587;
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
		let _startState: number = 78;
		this.enterRecursionRule(localctx, 78, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 590;
				this.elementaryTypeName();
				}
				break;
			case 2:
				{
				this.state = 591;
				this.userDefinedTypeName();
				}
				break;
			case 3:
				{
				this.state = 592;
				this.mapping();
				}
				break;
			case 4:
				{
				this.state = 593;
				this.functionTypeName();
				}
				break;
			case 5:
				{
				this.state = 594;
				this.match(SolidityParser.T__44);
				this.state = 595;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
					this.state = 598;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 599;
					this.match(SolidityParser.T__42);
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
						{
						this.state = 600;
						this.expression(0);
						}
					}

					this.state = 603;
					this.match(SolidityParser.T__43);
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
		this.enterRule(localctx, 80, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this.identifier();
			this.state = 614;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 610;
					this.match(SolidityParser.T__45);
					this.state = 611;
					this.identifier();
					}
					}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
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
		this.enterRule(localctx, 82, SolidityParser.RULE_mappingKey);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 617;
				this.elementaryTypeName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 618;
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
		this.enterRule(localctx, 84, SolidityParser.RULE_mapping);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 621;
			this.match(SolidityParser.T__46);
			this.state = 622;
			this.match(SolidityParser.T__22);
			this.state = 623;
			this.mappingKey();
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 624;
				this.mappingKeyName();
				}
			}

			this.state = 627;
			this.match(SolidityParser.T__47);
			this.state = 628;
			this.typeName(0);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 629;
				this.mappingValueName();
				}
			}

			this.state = 632;
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
		this.enterRule(localctx, 86, SolidityParser.RULE_mappingKeyName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
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
		this.enterRule(localctx, 88, SolidityParser.RULE_mappingValueName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 636;
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
		this.enterRule(localctx, 90, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 638;
			this.match(SolidityParser.T__38);
			this.state = 639;
			this.functionTypeParameterList();
			this.state = 645;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 643;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 118:
						{
						this.state = 640;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case 116:
						{
						this.state = 641;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case 111:
					case 119:
					case 123:
					case 125:
						{
						this.state = 642;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			}
			this.state = 650;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.match(SolidityParser.T__39);
				this.state = 649;
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
		this.enterRule(localctx, 92, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			_la = this._input.LA(1);
			if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
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
		this.enterRule(localctx, 94, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 654;
			_la = this._input.LA(1);
			if(!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 20737) !== 0))) {
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
		this.enterRule(localctx, 96, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 656;
			this.match(SolidityParser.T__14);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 106038017) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4294881617) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248548427) !== 0)) {
				{
				{
				this.state = 657;
				this.statement();
				}
				}
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 663;
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
		this.enterRule(localctx, 98, SolidityParser.RULE_statement);
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 665;
				this.ifStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 666;
				this.tryStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 667;
				this.whileStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 668;
				this.forStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 669;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 670;
				this.inlineAssemblyStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 671;
				this.doWhileStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 672;
				this.continueStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 673;
				this.breakStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 674;
				this.returnStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 675;
				this.throwStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 676;
				this.emitStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 677;
				this.simpleStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 678;
				this.uncheckedStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 679;
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
		this.enterRule(localctx, 100, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 682;
			this.expression(0);
			this.state = 683;
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
		this.enterRule(localctx, 102, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 685;
			this.match(SolidityParser.T__51);
			this.state = 686;
			this.match(SolidityParser.T__22);
			this.state = 687;
			this.expression(0);
			this.state = 688;
			this.match(SolidityParser.T__23);
			this.state = 689;
			this.statement();
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 690;
				this.match(SolidityParser.T__52);
				this.state = 691;
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
		this.enterRule(localctx, 104, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this.match(SolidityParser.T__53);
			this.state = 695;
			this.expression(0);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 696;
				this.returnParameters();
				}
			}

			this.state = 699;
			this.block();
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 700;
				this.catchClause();
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===55);
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
		this.enterRule(localctx, 106, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 705;
			this.match(SolidityParser.T__54);
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 75513856) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
					{
					this.state = 706;
					this.identifier();
					}
				}

				this.state = 709;
				this.parameterList();
				}
			}

			this.state = 712;
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
		this.enterRule(localctx, 108, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this.match(SolidityParser.T__55);
			this.state = 715;
			this.match(SolidityParser.T__22);
			this.state = 716;
			this.expression(0);
			this.state = 717;
			this.match(SolidityParser.T__23);
			this.state = 718;
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
		this.enterRule(localctx, 110, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 720;
				this.variableDeclarationStatement();
				}
				break;
			case 2:
				{
				this.state = 721;
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
		this.enterRule(localctx, 112, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 724;
			this.match(SolidityParser.T__56);
			this.state = 725;
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
		this.enterRule(localctx, 114, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 727;
			this.match(SolidityParser.T__27);
			this.state = 728;
			this.match(SolidityParser.T__22);
			this.state = 731;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 14:
			case 23:
			case 26:
			case 31:
			case 32:
			case 39:
			case 43:
			case 45:
			case 47:
			case 51:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 72:
			case 73:
			case 96:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 107:
			case 115:
			case 119:
			case 124:
			case 126:
			case 127:
			case 129:
			case 130:
			case 131:
				{
				this.state = 729;
				this.simpleStatement();
				}
				break;
			case 2:
				{
				this.state = 730;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 14:
			case 23:
			case 26:
			case 31:
			case 32:
			case 39:
			case 43:
			case 45:
			case 47:
			case 51:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 72:
			case 73:
			case 96:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 107:
			case 115:
			case 119:
			case 124:
			case 126:
			case 127:
			case 129:
			case 130:
			case 131:
				{
				this.state = 733;
				this.expressionStatement();
				}
				break;
			case 2:
				{
				this.state = 734;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
				{
				this.state = 737;
				this.expression(0);
				}
			}

			this.state = 740;
			this.match(SolidityParser.T__23);
			this.state = 741;
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
		this.enterRule(localctx, 116, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 743;
			this.match(SolidityParser.T__57);
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===131) {
				{
				this.state = 744;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 747;
				this.match(SolidityParser.T__22);
				this.state = 748;
				this.inlineAssemblyStatementFlag();
				this.state = 749;
				this.match(SolidityParser.T__23);
				}
			}

			this.state = 753;
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
		this.enterRule(localctx, 118, SolidityParser.RULE_inlineAssemblyStatementFlag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 755;
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
		this.enterRule(localctx, 120, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 757;
			this.match(SolidityParser.T__58);
			this.state = 758;
			this.statement();
			this.state = 759;
			this.match(SolidityParser.T__55);
			this.state = 760;
			this.match(SolidityParser.T__22);
			this.state = 761;
			this.expression(0);
			this.state = 762;
			this.match(SolidityParser.T__23);
			this.state = 763;
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
		this.enterRule(localctx, 122, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 765;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 766;
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
		this.enterRule(localctx, 124, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 768;
			this.match(SolidityParser.BreakKeyword);
			this.state = 769;
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
		this.enterRule(localctx, 126, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 771;
			this.match(SolidityParser.T__59);
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
				{
				this.state = 772;
				this.expression(0);
				}
			}

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
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 777;
			this.match(SolidityParser.T__60);
			this.state = 778;
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
		this.enterRule(localctx, 130, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			this.match(SolidityParser.T__61);
			this.state = 781;
			this.functionCall();
			this.state = 782;
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
		this.enterRule(localctx, 132, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this.match(SolidityParser.T__62);
			this.state = 785;
			this.functionCall();
			this.state = 786;
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
		this.enterRule(localctx, 134, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 795;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 788;
				this.match(SolidityParser.T__63);
				this.state = 789;
				this.identifierList();
				}
				break;
			case 2:
				{
				this.state = 790;
				this.variableDeclaration();
				}
				break;
			case 3:
				{
				this.state = 791;
				this.match(SolidityParser.T__22);
				this.state = 792;
				this.variableDeclarationList();
				this.state = 793;
				this.match(SolidityParser.T__23);
				}
				break;
			}
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 797;
				this.match(SolidityParser.T__10);
				this.state = 798;
				this.expression(0);
				}
			}

			this.state = 801;
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
		this.enterRule(localctx, 136, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
				{
				this.state = 803;
				this.variableDeclaration();
				}
			}

			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 806;
				this.match(SolidityParser.T__15);
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===26 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 520098113) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138493) !== 0) || _la===129 || _la===130) {
					{
					this.state = 807;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 814;
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
		this.enterRule(localctx, 138, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 815;
			this.match(SolidityParser.T__22);
			this.state = 822;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 817;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
						{
						this.state = 816;
						this.identifier();
						}
					}

					this.state = 819;
					this.match(SolidityParser.T__15);
					}
					}
				}
				this.state = 824;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 825;
				this.identifier();
				}
			}

			this.state = 828;
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
		this.enterRule(localctx, 140, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 830;
			_la = this._input.LA(1);
			if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 7864321) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 31) !== 0))) {
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
		let _startState: number = 142;
		this.enterRecursionRule(localctx, 142, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 833;
				this.match(SolidityParser.T__69);
				this.state = 834;
				this.typeName(0);
				}
				break;
			case 2:
				{
				this.state = 835;
				this.match(SolidityParser.T__22);
				this.state = 836;
				this.expression(0);
				this.state = 837;
				this.match(SolidityParser.T__23);
				}
				break;
			case 3:
				{
				this.state = 839;
				_la = this._input.LA(1);
				if(!(_la===68 || _la===69)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 840;
				this.expression(19);
				}
				break;
			case 4:
				{
				this.state = 841;
				_la = this._input.LA(1);
				if(!(_la===31 || _la===32)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 842;
				this.expression(18);
				}
				break;
			case 5:
				{
				this.state = 843;
				this.match(SolidityParser.T__71);
				this.state = 844;
				this.expression(17);
				}
				break;
			case 6:
				{
				this.state = 845;
				this.match(SolidityParser.T__72);
				this.state = 846;
				this.expression(16);
				}
				break;
			case 7:
				{
				this.state = 847;
				this.match(SolidityParser.T__5);
				this.state = 848;
				this.expression(15);
				}
				break;
			case 8:
				{
				this.state = 849;
				this.primaryExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 926;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 924;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 852;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 853;
						this.match(SolidityParser.T__73);
						this.state = 854;
						this.expression(14);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 855;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 856;
						_la = this._input.LA(1);
						if(!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & 3221225473) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 857;
						this.expression(14);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 858;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 859;
						_la = this._input.LA(1);
						if(!(_la===31 || _la===32)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 860;
						this.expression(13);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 861;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 862;
						_la = this._input.LA(1);
						if(!(_la===75 || _la===76)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 863;
						this.expression(12);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 864;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 865;
						this.match(SolidityParser.T__29);
						this.state = 866;
						this.expression(11);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 867;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 868;
						this.match(SolidityParser.T__4);
						this.state = 869;
						this.expression(10);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 870;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 871;
						this.match(SolidityParser.T__28);
						this.state = 872;
						this.expression(9);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 873;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 874;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 875;
						this.expression(8);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 876;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 877;
						_la = this._input.LA(1);
						if(!(_la===35 || _la===36)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 878;
						this.expression(7);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 879;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 880;
						this.match(SolidityParser.T__76);
						this.state = 881;
						this.expression(6);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 882;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 883;
						this.match(SolidityParser.T__3);
						this.state = 884;
						this.expression(5);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 886;
						this.match(SolidityParser.T__77);
						this.state = 887;
						this.expression(0);
						this.state = 888;
						this.match(SolidityParser.T__70);
						this.state = 889;
						this.expression(3);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 891;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 892;
						_la = this._input.LA(1);
						if(!(_la===11 || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 1023) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 893;
						this.expression(3);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 894;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 895;
						_la = this._input.LA(1);
						if(!(_la===68 || _la===69)) {
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
						this.state = 896;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 897;
						this.match(SolidityParser.T__42);
						this.state = 898;
						this.expression(0);
						this.state = 899;
						this.match(SolidityParser.T__43);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 901;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 902;
						this.match(SolidityParser.T__42);
						this.state = 904;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
							{
							this.state = 903;
							this.expression(0);
							}
						}

						this.state = 906;
						this.match(SolidityParser.T__70);
						this.state = 908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
							{
							this.state = 907;
							this.expression(0);
							}
						}

						this.state = 910;
						this.match(SolidityParser.T__43);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 911;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 912;
						this.match(SolidityParser.T__45);
						this.state = 913;
						this.identifier();
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 914;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 915;
						this.match(SolidityParser.T__14);
						this.state = 916;
						this.nameValueList();
						this.state = 917;
						this.match(SolidityParser.T__16);
						}
						break;
					case 19:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SolidityParser.RULE_expression);
						this.state = 919;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 920;
						this.match(SolidityParser.T__22);
						this.state = 921;
						this.functionCallArguments();
						this.state = 922;
						this.match(SolidityParser.T__23);
						}
						break;
					}
					}
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
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
		this.enterRule(localctx, 144, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 929;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 930;
				this.numberLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 931;
				this.hexLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 932;
				this.stringLiteral();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 933;
				this.identifier();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 934;
				this.match(SolidityParser.TypeKeyword);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 935;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 936;
				this.tupleExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 937;
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
		this.enterRule(localctx, 146, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 940;
			this.expression(0);
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 941;
				this.match(SolidityParser.T__15);
				this.state = 942;
				this.expression(0);
				}
				}
				this.state = 947;
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
		this.enterRule(localctx, 148, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 948;
			this.nameValue();
			this.state = 953;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 949;
					this.match(SolidityParser.T__15);
					this.state = 950;
					this.nameValue();
					}
					}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 956;
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
		this.enterRule(localctx, 150, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 959;
			this.identifier();
			this.state = 960;
			this.match(SolidityParser.T__70);
			this.state = 961;
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
		this.enterRule(localctx, 152, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 963;
				this.match(SolidityParser.T__14);
				this.state = 965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
					{
					this.state = 964;
					this.nameValueList();
					}
				}

				this.state = 967;
				this.match(SolidityParser.T__16);
				}
				break;
			case 6:
			case 14:
			case 23:
			case 24:
			case 26:
			case 31:
			case 32:
			case 39:
			case 43:
			case 45:
			case 47:
			case 51:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 72:
			case 73:
			case 96:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 107:
			case 115:
			case 119:
			case 124:
			case 126:
			case 127:
			case 129:
			case 130:
			case 131:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
					{
					this.state = 968;
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
		this.enterRule(localctx, 154, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.expression(0);
			this.state = 974;
			this.match(SolidityParser.T__22);
			this.state = 975;
			this.functionCallArguments();
			this.state = 976;
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
		this.enterRule(localctx, 156, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this.match(SolidityParser.T__14);
			this.state = 982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 343982080) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 287322177) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 1176879241) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 59) !== 0)) {
				{
				{
				this.state = 979;
				this.assemblyItem();
				}
				}
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 985;
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
		this.enterRule(localctx, 158, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 1004;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 987;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 988;
				this.assemblyBlock();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 989;
				this.assemblyExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 990;
				this.assemblyLocalDefinition();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 991;
				this.assemblyAssignment();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 992;
				this.assemblyStackAssignment();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 993;
				this.labelDefinition();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 994;
				this.assemblySwitch();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 995;
				this.assemblyFunctionDefinition();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 996;
				this.assemblyFor();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 997;
				this.assemblyIf();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 998;
				this.match(SolidityParser.BreakKeyword);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 999;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1000;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1001;
				this.numberLiteral();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1002;
				this.stringLiteral();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1003;
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
		this.enterRule(localctx, 160, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1006;
				this.assemblyCall();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1007;
				this.assemblyLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1008;
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
		this.enterRule(localctx, 162, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1011;
			this.identifier();
			this.state = 1012;
			this.match(SolidityParser.T__45);
			this.state = 1013;
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
		this.enterRule(localctx, 164, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 1015;
				this.match(SolidityParser.T__59);
				}
				break;
			case 2:
				{
				this.state = 1016;
				this.match(SolidityParser.T__44);
				}
				break;
			case 3:
				{
				this.state = 1017;
				this.match(SolidityParser.T__66);
				}
				break;
			case 4:
				{
				this.state = 1018;
				this.identifier();
				}
				break;
			}
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1021;
				this.match(SolidityParser.T__22);
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 4489281) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230141313) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 7) !== 0)) {
					{
					this.state = 1022;
					this.assemblyExpression();
					}
				}

				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1025;
					this.match(SolidityParser.T__15);
					this.state = 1026;
					this.assemblyExpression();
					}
					}
					this.state = 1031;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1032;
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
		this.enterRule(localctx, 166, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1035;
			this.match(SolidityParser.T__88);
			this.state = 1036;
			this.assemblyIdentifierOrList();
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1037;
				this.match(SolidityParser.T__89);
				this.state = 1038;
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
		this.enterRule(localctx, 168, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1041;
			this.assemblyIdentifierOrList();
			this.state = 1042;
			this.match(SolidityParser.T__89);
			this.state = 1043;
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
		this.enterRule(localctx, 170, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1052;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1045;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1046;
				this.assemblyMember();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1047;
				this.assemblyIdentifierList();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1048;
				this.match(SolidityParser.T__22);
				this.state = 1049;
				this.assemblyIdentifierList();
				this.state = 1050;
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
		this.enterRule(localctx, 172, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1054;
			this.identifier();
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 1055;
				this.match(SolidityParser.T__15);
				this.state = 1056;
				this.identifier();
				}
				}
				this.state = 1061;
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
		this.enterRule(localctx, 174, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1062;
			this.assemblyExpression();
			this.state = 1063;
			this.match(SolidityParser.T__90);
			this.state = 1064;
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
		this.enterRule(localctx, 176, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1066;
			this.identifier();
			this.state = 1067;
			this.match(SolidityParser.T__70);
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
		this.enterRule(localctx, 178, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1069;
			this.match(SolidityParser.T__91);
			this.state = 1070;
			this.assemblyExpression();
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===93 || _la===94) {
				{
				{
				this.state = 1071;
				this.assemblyCase();
				}
				}
				this.state = 1076;
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
		this.enterRule(localctx, 180, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1083;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1077;
				this.match(SolidityParser.T__92);
				this.state = 1078;
				this.assemblyLiteral();
				this.state = 1079;
				this.assemblyBlock();
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1081;
				this.match(SolidityParser.T__93);
				this.state = 1082;
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
		this.enterRule(localctx, 182, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1085;
			this.match(SolidityParser.T__38);
			this.state = 1086;
			this.identifier();
			this.state = 1087;
			this.match(SolidityParser.T__22);
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130) {
				{
				this.state = 1088;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1091;
			this.match(SolidityParser.T__23);
			this.state = 1093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===95) {
				{
				this.state = 1092;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1095;
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
		this.enterRule(localctx, 184, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1097;
			this.match(SolidityParser.T__94);
			this.state = 1098;
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
		this.enterRule(localctx, 186, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1100;
			this.match(SolidityParser.T__27);
			this.state = 1103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 1101;
				this.assemblyBlock();
				}
				break;
			case 14:
			case 26:
			case 45:
			case 51:
			case 60:
			case 63:
			case 67:
			case 96:
			case 103:
			case 104:
			case 105:
			case 107:
			case 115:
			case 119:
			case 126:
			case 127:
			case 129:
			case 130:
			case 131:
				{
				this.state = 1102;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1105;
			this.assemblyExpression();
			this.state = 1108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 1106;
				this.assemblyBlock();
				}
				break;
			case 14:
			case 26:
			case 45:
			case 51:
			case 60:
			case 63:
			case 67:
			case 96:
			case 103:
			case 104:
			case 105:
			case 107:
			case 115:
			case 119:
			case 126:
			case 127:
			case 129:
			case 130:
			case 131:
				{
				this.state = 1107;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1110;
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
		this.enterRule(localctx, 188, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1112;
			this.match(SolidityParser.T__51);
			this.state = 1113;
			this.assemblyExpression();
			this.state = 1114;
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
		this.enterRule(localctx, 190, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1116;
				this.stringLiteral();
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1117;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1118;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case 107:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1119;
				this.hexLiteral();
				}
				break;
			case 103:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1120;
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
		this.enterRule(localctx, 192, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1123;
				this.match(SolidityParser.T__22);
				{
				this.state = 1125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
					{
					this.state = 1124;
					this.expression(0);
					}
				}

				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1127;
					this.match(SolidityParser.T__15);
					this.state = 1129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
						{
						this.state = 1128;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1136;
				this.match(SolidityParser.T__23);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1137;
				this.match(SolidityParser.T__42);
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 101843201) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 4278194513) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 4244635651) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 248547339) !== 0)) {
					{
					this.state = 1138;
					this.expression(0);
					this.state = 1143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===16) {
						{
						{
						this.state = 1139;
						this.match(SolidityParser.T__15);
						this.state = 1140;
						this.expression(0);
						}
						}
						this.state = 1145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1148;
				this.match(SolidityParser.T__43);
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
		this.enterRule(localctx, 194, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1151;
			_la = this._input.LA(1);
			if(!(_la===104 || _la===105)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1153;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1152;
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
		this.enterRule(localctx, 196, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===26 || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 262209) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 3230138369) !== 0) || _la===129 || _la===130)) {
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
		this.enterRule(localctx, 198, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1158;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1157;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1160;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 128, this._ctx);
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
		this.enterRule(localctx, 200, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1162;
			this.match(SolidityParser.T__96);
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 1163;
				this.match(SolidityParser.T__22);
				this.state = 1164;
				this.userDefinedTypeName();
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 1165;
					this.match(SolidityParser.T__15);
					this.state = 1166;
					this.userDefinedTypeName();
					}
					}
					this.state = 1171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1172;
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
		this.enterRule(localctx, 202, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1177;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1176;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1179;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 131, this._ctx);
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
		case 39:
			return this.typeName_sempred(localctx as TypeNameContext, predIndex);
		case 71:
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

	public static readonly _serializedATN: number[] = [4,1,135,1182,2,0,7,0,
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
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,1,0,1,0,1,0,1,0,1,
	0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,216,8,0,10,0,12,0,219,9,0,1,0,1,0,1,1,1,1,
	1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,3,3,233,8,3,1,4,1,4,3,4,237,8,4,1,4,5,4,
	240,8,4,10,4,12,4,243,9,4,1,5,1,5,1,6,3,6,248,8,6,1,6,1,6,3,6,252,8,6,1,
	6,3,6,255,8,6,1,7,1,7,1,7,3,7,260,8,7,1,8,1,8,1,8,1,8,3,8,266,8,8,1,8,1,
	8,1,8,1,8,1,8,3,8,273,8,8,1,8,1,8,3,8,277,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,1,8,1,8,5,8,288,8,8,10,8,12,8,291,9,8,1,8,1,8,1,8,1,8,1,8,3,8,298,8,8,
	1,9,1,9,1,10,3,10,303,8,10,1,10,1,10,1,10,3,10,308,8,10,1,10,1,10,1,10,
	1,10,5,10,314,8,10,10,10,12,10,317,9,10,3,10,319,8,10,1,10,3,10,322,8,10,
	1,10,1,10,5,10,326,8,10,10,10,12,10,329,9,10,1,10,1,10,1,11,1,11,1,11,3,
	11,336,8,11,1,11,3,11,339,8,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,3,13,353,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,5,14,363,8,14,10,14,12,14,366,9,14,1,14,1,14,1,14,3,14,371,8,14,1,14,
	1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,
	17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,3,18,398,8,18,1,18,3,18,
	401,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,5,19,410,8,19,10,19,12,19,413,
	9,19,1,19,1,19,3,19,417,8,19,1,20,1,20,1,20,3,20,422,8,20,1,21,1,21,1,22,
	1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,434,8,22,10,22,12,22,437,9,22,3,
	22,439,8,22,1,22,1,22,1,23,1,23,1,23,3,23,446,8,23,1,23,1,23,5,23,450,8,
	23,10,23,12,23,453,9,23,1,23,1,23,3,23,457,8,23,1,24,1,24,1,24,3,24,462,
	8,24,1,24,3,24,465,8,24,1,25,1,25,1,25,1,25,3,25,471,8,25,1,25,1,25,3,25,
	475,8,25,1,26,1,26,3,26,479,8,26,1,26,1,26,1,26,3,26,484,8,26,1,27,1,27,
	1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,5,28,497,8,28,10,28,12,28,
	500,9,28,1,29,1,29,1,29,1,29,3,29,506,8,29,1,29,1,29,1,30,1,30,1,31,1,31,
	1,31,1,31,3,31,516,8,31,1,31,1,31,5,31,520,8,31,10,31,12,31,523,9,31,1,
	31,1,31,1,32,1,32,1,32,1,32,5,32,531,8,32,10,32,12,32,534,9,32,3,32,536,
	8,32,1,32,1,32,1,33,1,33,3,33,542,8,33,1,33,3,33,545,8,33,1,34,1,34,1,34,
	1,34,5,34,551,8,34,10,34,12,34,554,9,34,3,34,556,8,34,1,34,1,34,1,35,1,
	35,3,35,562,8,35,1,35,3,35,565,8,35,1,36,1,36,1,36,1,36,5,36,571,8,36,10,
	36,12,36,574,9,36,3,36,576,8,36,1,36,1,36,1,37,1,37,3,37,582,8,37,1,38,
	1,38,3,38,586,8,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,597,
	8,39,1,39,1,39,1,39,3,39,602,8,39,1,39,5,39,605,8,39,10,39,12,39,608,9,
	39,1,40,1,40,1,40,5,40,613,8,40,10,40,12,40,616,9,40,1,41,1,41,3,41,620,
	8,41,1,42,1,42,1,42,1,42,3,42,626,8,42,1,42,1,42,1,42,3,42,631,8,42,1,42,
	1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,45,1,45,1,45,5,45,644,8,45,10,45,12,
	45,647,9,45,1,45,1,45,3,45,651,8,45,1,46,1,46,1,47,1,47,1,48,1,48,5,48,
	659,8,48,10,48,12,48,662,9,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,681,8,49,1,50,1,50,1,50,
	1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,693,8,51,1,52,1,52,1,52,3,52,698,
	8,52,1,52,1,52,4,52,702,8,52,11,52,12,52,703,1,53,1,53,3,53,708,8,53,1,
	53,3,53,711,8,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,3,55,
	723,8,55,1,56,1,56,1,56,1,57,1,57,1,57,1,57,3,57,732,8,57,1,57,1,57,3,57,
	736,8,57,1,57,3,57,739,8,57,1,57,1,57,1,57,1,58,1,58,3,58,746,8,58,1,58,
	1,58,1,58,1,58,3,58,752,8,58,1,58,1,58,1,59,1,59,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,61,1,61,1,61,1,62,1,62,1,62,1,63,1,63,3,63,774,8,63,
	1,63,1,63,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,67,1,
	67,1,67,1,67,1,67,1,67,1,67,3,67,796,8,67,1,67,1,67,3,67,800,8,67,1,67,
	1,67,1,68,3,68,805,8,68,1,68,1,68,3,68,809,8,68,5,68,811,8,68,10,68,12,
	68,814,9,68,1,69,1,69,3,69,818,8,69,1,69,5,69,821,8,69,10,69,12,69,824,
	9,69,1,69,3,69,827,8,69,1,69,1,69,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,851,
	8,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
	1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,905,8,71,1,71,1,71,
	3,71,909,8,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,5,71,925,8,71,10,71,12,71,928,9,71,1,72,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,3,72,939,8,72,1,73,1,73,1,73,5,73,944,8,73,10,73,12,
	73,947,9,73,1,74,1,74,1,74,5,74,952,8,74,10,74,12,74,955,9,74,1,74,3,74,
	958,8,74,1,75,1,75,1,75,1,75,1,76,1,76,3,76,966,8,76,1,76,1,76,3,76,970,
	8,76,3,76,972,8,76,1,77,1,77,1,77,1,77,1,77,1,78,1,78,5,78,981,8,78,10,
	78,12,78,984,9,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,
	1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,1005,8,79,1,80,1,80,1,80,3,
	80,1010,8,80,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,3,82,1020,8,82,1,82,
	1,82,3,82,1024,8,82,1,82,1,82,5,82,1028,8,82,10,82,12,82,1031,9,82,1,82,
	3,82,1034,8,82,1,83,1,83,1,83,1,83,3,83,1040,8,83,1,84,1,84,1,84,1,84,1,
	85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1053,8,85,1,86,1,86,1,86,5,86,1058,
	8,86,10,86,12,86,1061,9,86,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,89,1,89,
	1,89,5,89,1073,8,89,10,89,12,89,1076,9,89,1,90,1,90,1,90,1,90,1,90,1,90,
	3,90,1084,8,90,1,91,1,91,1,91,1,91,3,91,1090,8,91,1,91,1,91,3,91,1094,8,
	91,1,91,1,91,1,92,1,92,1,92,1,93,1,93,1,93,3,93,1104,8,93,1,93,1,93,1,93,
	3,93,1109,8,93,1,93,1,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,3,
	95,1122,8,95,1,96,1,96,3,96,1126,8,96,1,96,1,96,3,96,1130,8,96,5,96,1132,
	8,96,10,96,12,96,1135,9,96,1,96,1,96,1,96,1,96,1,96,5,96,1142,8,96,10,96,
	12,96,1145,9,96,3,96,1147,8,96,1,96,3,96,1150,8,96,1,97,1,97,3,97,1154,
	8,97,1,98,1,98,1,99,4,99,1159,8,99,11,99,12,99,1160,1,100,1,100,1,100,1,
	100,1,100,5,100,1168,8,100,10,100,12,100,1171,9,100,1,100,1,100,3,100,1175,
	8,100,1,101,4,101,1178,8,101,11,101,12,101,1179,1,101,0,2,78,142,102,0,
	2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
	52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
	100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,
	136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
	172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,0,15,1,
	0,5,11,1,0,19,21,3,0,3,3,5,10,29,36,1,0,49,51,4,0,111,111,119,119,123,123,
	125,125,3,0,45,45,64,67,98,102,1,0,68,69,1,0,31,32,2,0,3,3,33,34,1,0,75,
	76,1,0,7,10,1,0,35,36,2,0,11,11,79,88,1,0,104,105,10,0,14,14,26,26,45,45,
	51,51,63,63,96,96,115,115,119,119,126,127,129,130,1313,0,217,1,0,0,0,2,
	222,1,0,0,0,4,227,1,0,0,0,6,232,1,0,0,0,8,234,1,0,0,0,10,244,1,0,0,0,12,
	254,1,0,0,0,14,256,1,0,0,0,16,297,1,0,0,0,18,299,1,0,0,0,20,302,1,0,0,0,
	22,332,1,0,0,0,24,340,1,0,0,0,26,352,1,0,0,0,28,354,1,0,0,0,30,374,1,0,
	0,0,32,381,1,0,0,0,34,386,1,0,0,0,36,392,1,0,0,0,38,416,1,0,0,0,40,418,
	1,0,0,0,42,423,1,0,0,0,44,425,1,0,0,0,46,442,1,0,0,0,48,458,1,0,0,0,50,
	466,1,0,0,0,52,483,1,0,0,0,54,485,1,0,0,0,56,498,1,0,0,0,58,501,1,0,0,0,
	60,509,1,0,0,0,62,511,1,0,0,0,64,526,1,0,0,0,66,539,1,0,0,0,68,546,1,0,
	0,0,70,559,1,0,0,0,72,566,1,0,0,0,74,579,1,0,0,0,76,583,1,0,0,0,78,596,
	1,0,0,0,80,609,1,0,0,0,82,619,1,0,0,0,84,621,1,0,0,0,86,634,1,0,0,0,88,
	636,1,0,0,0,90,638,1,0,0,0,92,652,1,0,0,0,94,654,1,0,0,0,96,656,1,0,0,0,
	98,680,1,0,0,0,100,682,1,0,0,0,102,685,1,0,0,0,104,694,1,0,0,0,106,705,
	1,0,0,0,108,714,1,0,0,0,110,722,1,0,0,0,112,724,1,0,0,0,114,727,1,0,0,0,
	116,743,1,0,0,0,118,755,1,0,0,0,120,757,1,0,0,0,122,765,1,0,0,0,124,768,
	1,0,0,0,126,771,1,0,0,0,128,777,1,0,0,0,130,780,1,0,0,0,132,784,1,0,0,0,
	134,795,1,0,0,0,136,804,1,0,0,0,138,815,1,0,0,0,140,830,1,0,0,0,142,850,
	1,0,0,0,144,938,1,0,0,0,146,940,1,0,0,0,148,948,1,0,0,0,150,959,1,0,0,0,
	152,971,1,0,0,0,154,973,1,0,0,0,156,978,1,0,0,0,158,1004,1,0,0,0,160,1009,
	1,0,0,0,162,1011,1,0,0,0,164,1019,1,0,0,0,166,1035,1,0,0,0,168,1041,1,0,
	0,0,170,1052,1,0,0,0,172,1054,1,0,0,0,174,1062,1,0,0,0,176,1066,1,0,0,0,
	178,1069,1,0,0,0,180,1083,1,0,0,0,182,1085,1,0,0,0,184,1097,1,0,0,0,186,
	1100,1,0,0,0,188,1112,1,0,0,0,190,1121,1,0,0,0,192,1149,1,0,0,0,194,1151,
	1,0,0,0,196,1155,1,0,0,0,198,1158,1,0,0,0,200,1162,1,0,0,0,202,1177,1,0,
	0,0,204,216,3,2,1,0,205,216,3,16,8,0,206,216,3,20,10,0,207,216,3,62,31,
	0,208,216,3,58,29,0,209,216,3,44,22,0,210,216,3,50,25,0,211,216,3,30,15,
	0,212,216,3,32,16,0,213,216,3,34,17,0,214,216,3,36,18,0,215,204,1,0,0,0,
	215,205,1,0,0,0,215,206,1,0,0,0,215,207,1,0,0,0,215,208,1,0,0,0,215,209,
	1,0,0,0,215,210,1,0,0,0,215,211,1,0,0,0,215,212,1,0,0,0,215,213,1,0,0,0,
	215,214,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,220,
	1,0,0,0,219,217,1,0,0,0,220,221,5,0,0,1,221,1,1,0,0,0,222,223,5,1,0,0,223,
	224,3,4,2,0,224,225,3,6,3,0,225,226,5,2,0,0,226,3,1,0,0,0,227,228,3,196,
	98,0,228,5,1,0,0,0,229,233,5,3,0,0,230,233,3,8,4,0,231,233,3,142,71,0,232,
	229,1,0,0,0,232,230,1,0,0,0,232,231,1,0,0,0,233,7,1,0,0,0,234,241,3,12,
	6,0,235,237,5,4,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,
	240,3,12,6,0,239,236,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,242,1,
	0,0,0,242,9,1,0,0,0,243,241,1,0,0,0,244,245,7,0,0,0,245,11,1,0,0,0,246,
	248,3,10,5,0,247,246,1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,255,5,
	132,0,0,250,252,3,10,5,0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,
	0,253,255,5,104,0,0,254,247,1,0,0,0,254,251,1,0,0,0,255,13,1,0,0,0,256,
	259,3,196,98,0,257,258,5,12,0,0,258,260,3,196,98,0,259,257,1,0,0,0,259,
	260,1,0,0,0,260,15,1,0,0,0,261,262,5,13,0,0,262,265,3,18,9,0,263,264,5,
	12,0,0,264,266,3,196,98,0,265,263,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,
	0,267,268,5,2,0,0,268,298,1,0,0,0,269,272,5,13,0,0,270,273,5,3,0,0,271,
	273,3,196,98,0,272,270,1,0,0,0,272,271,1,0,0,0,273,276,1,0,0,0,274,275,
	5,12,0,0,275,277,3,196,98,0,276,274,1,0,0,0,276,277,1,0,0,0,277,278,1,0,
	0,0,278,279,5,14,0,0,279,280,3,18,9,0,280,281,5,2,0,0,281,298,1,0,0,0,282,
	283,5,13,0,0,283,284,5,15,0,0,284,289,3,14,7,0,285,286,5,16,0,0,286,288,
	3,14,7,0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,
	0,290,292,1,0,0,0,291,289,1,0,0,0,292,293,5,17,0,0,293,294,5,14,0,0,294,
	295,3,18,9,0,295,296,5,2,0,0,296,298,1,0,0,0,297,261,1,0,0,0,297,269,1,
	0,0,0,297,282,1,0,0,0,298,17,1,0,0,0,299,300,5,131,0,0,300,19,1,0,0,0,301,
	303,5,18,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,305,7,
	1,0,0,305,307,3,196,98,0,306,308,3,24,12,0,307,306,1,0,0,0,307,308,1,0,
	0,0,308,318,1,0,0,0,309,310,5,22,0,0,310,315,3,22,11,0,311,312,5,16,0,0,
	312,314,3,22,11,0,313,311,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,
	1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,318,309,1,0,0,0,318,319,1,0,0,0,
	319,321,1,0,0,0,320,322,3,24,12,0,321,320,1,0,0,0,321,322,1,0,0,0,322,323,
	1,0,0,0,323,327,5,15,0,0,324,326,3,26,13,0,325,324,1,0,0,0,326,329,1,0,
	0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,330,1,0,0,0,329,327,1,0,0,0,330,
	331,5,17,0,0,331,21,1,0,0,0,332,338,3,80,40,0,333,335,5,23,0,0,334,336,
	3,146,73,0,335,334,1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,339,5,24,
	0,0,338,333,1,0,0,0,338,339,1,0,0,0,339,23,1,0,0,0,340,341,5,25,0,0,341,
	342,3,142,71,0,342,25,1,0,0,0,343,353,3,28,14,0,344,353,3,36,18,0,345,353,
	3,44,22,0,346,353,3,46,23,0,347,353,3,50,25,0,348,353,3,58,29,0,349,353,
	3,62,31,0,350,353,3,32,16,0,351,353,3,34,17,0,352,343,1,0,0,0,352,344,1,
	0,0,0,352,345,1,0,0,0,352,346,1,0,0,0,352,347,1,0,0,0,352,348,1,0,0,0,352,
	349,1,0,0,0,352,350,1,0,0,0,352,351,1,0,0,0,353,27,1,0,0,0,354,364,3,78,
	39,0,355,363,5,121,0,0,356,363,5,118,0,0,357,363,5,120,0,0,358,363,5,111,
	0,0,359,363,5,112,0,0,360,363,5,113,0,0,361,363,3,200,100,0,362,355,1,0,
	0,0,362,356,1,0,0,0,362,357,1,0,0,0,362,358,1,0,0,0,362,359,1,0,0,0,362,
	360,1,0,0,0,362,361,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,0,
	0,0,365,367,1,0,0,0,366,364,1,0,0,0,367,370,3,196,98,0,368,369,5,11,0,0,
	369,371,3,142,71,0,370,368,1,0,0,0,370,371,1,0,0,0,371,372,1,0,0,0,372,
	373,5,2,0,0,373,29,1,0,0,0,374,375,3,78,39,0,375,376,5,111,0,0,376,377,
	3,196,98,0,377,378,5,11,0,0,378,379,3,142,71,0,379,380,5,2,0,0,380,31,1,
	0,0,0,381,382,5,26,0,0,382,383,3,196,98,0,383,384,3,64,32,0,384,385,5,2,
	0,0,385,33,1,0,0,0,386,387,5,124,0,0,387,388,3,196,98,0,388,389,5,22,0,
	0,389,390,3,140,70,0,390,391,5,2,0,0,391,35,1,0,0,0,392,393,5,27,0,0,393,
	394,3,38,19,0,394,397,5,28,0,0,395,398,5,3,0,0,396,398,3,78,39,0,397,395,
	1,0,0,0,397,396,1,0,0,0,398,400,1,0,0,0,399,401,5,126,0,0,400,399,1,0,0,
	0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,5,2,0,0,403,37,1,0,0,0,404,417,
	3,80,40,0,405,406,5,15,0,0,406,411,3,40,20,0,407,408,5,16,0,0,408,410,3,
	40,20,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,
	412,414,1,0,0,0,413,411,1,0,0,0,414,415,5,17,0,0,415,417,1,0,0,0,416,404,
	1,0,0,0,416,405,1,0,0,0,417,39,1,0,0,0,418,421,3,80,40,0,419,420,5,12,0,
	0,420,422,3,42,21,0,421,419,1,0,0,0,421,422,1,0,0,0,422,41,1,0,0,0,423,
	424,7,2,0,0,424,43,1,0,0,0,425,426,5,37,0,0,426,427,3,196,98,0,427,438,
	5,15,0,0,428,429,3,76,38,0,429,435,5,2,0,0,430,431,3,76,38,0,431,432,5,
	2,0,0,432,434,1,0,0,0,433,430,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,
	436,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,438,428,1,0,0,0,438,439,1,0,
	0,0,439,440,1,0,0,0,440,441,5,17,0,0,441,45,1,0,0,0,442,443,5,38,0,0,443,
	445,3,196,98,0,444,446,3,64,32,0,445,444,1,0,0,0,445,446,1,0,0,0,446,451,
	1,0,0,0,447,450,5,122,0,0,448,450,3,200,100,0,449,447,1,0,0,0,449,448,1,
	0,0,0,450,453,1,0,0,0,451,449,1,0,0,0,451,452,1,0,0,0,452,456,1,0,0,0,453,
	451,1,0,0,0,454,457,5,2,0,0,455,457,3,96,48,0,456,454,1,0,0,0,456,455,1,
	0,0,0,457,47,1,0,0,0,458,464,3,196,98,0,459,461,5,23,0,0,460,462,3,146,
	73,0,461,460,1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,465,5,24,0,0,464,
	459,1,0,0,0,464,465,1,0,0,0,465,49,1,0,0,0,466,467,3,52,26,0,467,468,3,
	64,32,0,468,470,3,56,28,0,469,471,3,54,27,0,470,469,1,0,0,0,470,471,1,0,
	0,0,471,474,1,0,0,0,472,475,5,2,0,0,473,475,3,96,48,0,474,472,1,0,0,0,474,
	473,1,0,0,0,475,51,1,0,0,0,476,478,5,39,0,0,477,479,3,196,98,0,478,477,
	1,0,0,0,478,479,1,0,0,0,479,484,1,0,0,0,480,484,5,127,0,0,481,484,5,128,
	0,0,482,484,5,129,0,0,483,476,1,0,0,0,483,480,1,0,0,0,483,481,1,0,0,0,483,
	482,1,0,0,0,484,53,1,0,0,0,485,486,5,40,0,0,486,487,3,64,32,0,487,55,1,
	0,0,0,488,497,5,116,0,0,489,497,5,121,0,0,490,497,5,118,0,0,491,497,5,120,
	0,0,492,497,5,122,0,0,493,497,3,94,47,0,494,497,3,48,24,0,495,497,3,200,
	100,0,496,488,1,0,0,0,496,489,1,0,0,0,496,490,1,0,0,0,496,491,1,0,0,0,496,
	492,1,0,0,0,496,493,1,0,0,0,496,494,1,0,0,0,496,495,1,0,0,0,497,500,1,0,
	0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,57,1,0,0,0,500,498,1,0,0,0,501,
	502,5,41,0,0,502,503,3,196,98,0,503,505,3,68,34,0,504,506,5,109,0,0,505,
	504,1,0,0,0,505,506,1,0,0,0,506,507,1,0,0,0,507,508,5,2,0,0,508,59,1,0,
	0,0,509,510,3,196,98,0,510,61,1,0,0,0,511,512,5,42,0,0,512,513,3,196,98,
	0,513,515,5,15,0,0,514,516,3,60,30,0,515,514,1,0,0,0,515,516,1,0,0,0,516,
	521,1,0,0,0,517,518,5,16,0,0,518,520,3,60,30,0,519,517,1,0,0,0,520,523,
	1,0,0,0,521,519,1,0,0,0,521,522,1,0,0,0,522,524,1,0,0,0,523,521,1,0,0,0,
	524,525,5,17,0,0,525,63,1,0,0,0,526,535,5,23,0,0,527,532,3,66,33,0,528,
	529,5,16,0,0,529,531,3,66,33,0,530,528,1,0,0,0,531,534,1,0,0,0,532,530,
	1,0,0,0,532,533,1,0,0,0,533,536,1,0,0,0,534,532,1,0,0,0,535,527,1,0,0,0,
	535,536,1,0,0,0,536,537,1,0,0,0,537,538,5,24,0,0,538,65,1,0,0,0,539,541,
	3,78,39,0,540,542,3,92,46,0,541,540,1,0,0,0,541,542,1,0,0,0,542,544,1,0,
	0,0,543,545,3,196,98,0,544,543,1,0,0,0,544,545,1,0,0,0,545,67,1,0,0,0,546,
	555,5,23,0,0,547,552,3,70,35,0,548,549,5,16,0,0,549,551,3,70,35,0,550,548,
	1,0,0,0,551,554,1,0,0,0,552,550,1,0,0,0,552,553,1,0,0,0,553,556,1,0,0,0,
	554,552,1,0,0,0,555,547,1,0,0,0,555,556,1,0,0,0,556,557,1,0,0,0,557,558,
	5,24,0,0,558,69,1,0,0,0,559,561,3,78,39,0,560,562,5,117,0,0,561,560,1,0,
	0,0,561,562,1,0,0,0,562,564,1,0,0,0,563,565,3,196,98,0,564,563,1,0,0,0,
	564,565,1,0,0,0,565,71,1,0,0,0,566,575,5,23,0,0,567,572,3,74,37,0,568,569,
	5,16,0,0,569,571,3,74,37,0,570,568,1,0,0,0,571,574,1,0,0,0,572,570,1,0,
	0,0,572,573,1,0,0,0,573,576,1,0,0,0,574,572,1,0,0,0,575,567,1,0,0,0,575,
	576,1,0,0,0,576,577,1,0,0,0,577,578,5,24,0,0,578,73,1,0,0,0,579,581,3,78,
	39,0,580,582,3,92,46,0,581,580,1,0,0,0,581,582,1,0,0,0,582,75,1,0,0,0,583,
	585,3,78,39,0,584,586,3,92,46,0,585,584,1,0,0,0,585,586,1,0,0,0,586,587,
	1,0,0,0,587,588,3,196,98,0,588,77,1,0,0,0,589,590,6,39,-1,0,590,597,3,140,
	70,0,591,597,3,80,40,0,592,597,3,84,42,0,593,597,3,90,45,0,594,595,5,45,
	0,0,595,597,5,119,0,0,596,589,1,0,0,0,596,591,1,0,0,0,596,592,1,0,0,0,596,
	593,1,0,0,0,596,594,1,0,0,0,597,606,1,0,0,0,598,599,10,3,0,0,599,601,5,
	43,0,0,600,602,3,142,71,0,601,600,1,0,0,0,601,602,1,0,0,0,602,603,1,0,0,
	0,603,605,5,44,0,0,604,598,1,0,0,0,605,608,1,0,0,0,606,604,1,0,0,0,606,
	607,1,0,0,0,607,79,1,0,0,0,608,606,1,0,0,0,609,614,3,196,98,0,610,611,5,
	46,0,0,611,613,3,196,98,0,612,610,1,0,0,0,613,616,1,0,0,0,614,612,1,0,0,
	0,614,615,1,0,0,0,615,81,1,0,0,0,616,614,1,0,0,0,617,620,3,140,70,0,618,
	620,3,80,40,0,619,617,1,0,0,0,619,618,1,0,0,0,620,83,1,0,0,0,621,622,5,
	47,0,0,622,623,5,23,0,0,623,625,3,82,41,0,624,626,3,86,43,0,625,624,1,0,
	0,0,625,626,1,0,0,0,626,627,1,0,0,0,627,628,5,48,0,0,628,630,3,78,39,0,
	629,631,3,88,44,0,630,629,1,0,0,0,630,631,1,0,0,0,631,632,1,0,0,0,632,633,
	5,24,0,0,633,85,1,0,0,0,634,635,3,196,98,0,635,87,1,0,0,0,636,637,3,196,
	98,0,637,89,1,0,0,0,638,639,5,39,0,0,639,645,3,72,36,0,640,644,5,118,0,
	0,641,644,5,116,0,0,642,644,3,94,47,0,643,640,1,0,0,0,643,641,1,0,0,0,643,
	642,1,0,0,0,644,647,1,0,0,0,645,643,1,0,0,0,645,646,1,0,0,0,646,650,1,0,
	0,0,647,645,1,0,0,0,648,649,5,40,0,0,649,651,3,72,36,0,650,648,1,0,0,0,
	650,651,1,0,0,0,651,91,1,0,0,0,652,653,7,3,0,0,653,93,1,0,0,0,654,655,7,
	4,0,0,655,95,1,0,0,0,656,660,5,15,0,0,657,659,3,98,49,0,658,657,1,0,0,0,
	659,662,1,0,0,0,660,658,1,0,0,0,660,661,1,0,0,0,661,663,1,0,0,0,662,660,
	1,0,0,0,663,664,5,17,0,0,664,97,1,0,0,0,665,681,3,102,51,0,666,681,3,104,
	52,0,667,681,3,108,54,0,668,681,3,114,57,0,669,681,3,96,48,0,670,681,3,
	116,58,0,671,681,3,120,60,0,672,681,3,122,61,0,673,681,3,124,62,0,674,681,
	3,126,63,0,675,681,3,128,64,0,676,681,3,130,65,0,677,681,3,110,55,0,678,
	681,3,112,56,0,679,681,3,132,66,0,680,665,1,0,0,0,680,666,1,0,0,0,680,667,
	1,0,0,0,680,668,1,0,0,0,680,669,1,0,0,0,680,670,1,0,0,0,680,671,1,0,0,0,
	680,672,1,0,0,0,680,673,1,0,0,0,680,674,1,0,0,0,680,675,1,0,0,0,680,676,
	1,0,0,0,680,677,1,0,0,0,680,678,1,0,0,0,680,679,1,0,0,0,681,99,1,0,0,0,
	682,683,3,142,71,0,683,684,5,2,0,0,684,101,1,0,0,0,685,686,5,52,0,0,686,
	687,5,23,0,0,687,688,3,142,71,0,688,689,5,24,0,0,689,692,3,98,49,0,690,
	691,5,53,0,0,691,693,3,98,49,0,692,690,1,0,0,0,692,693,1,0,0,0,693,103,
	1,0,0,0,694,695,5,54,0,0,695,697,3,142,71,0,696,698,3,54,27,0,697,696,1,
	0,0,0,697,698,1,0,0,0,698,699,1,0,0,0,699,701,3,96,48,0,700,702,3,106,53,
	0,701,700,1,0,0,0,702,703,1,0,0,0,703,701,1,0,0,0,703,704,1,0,0,0,704,105,
	1,0,0,0,705,710,5,55,0,0,706,708,3,196,98,0,707,706,1,0,0,0,707,708,1,0,
	0,0,708,709,1,0,0,0,709,711,3,64,32,0,710,707,1,0,0,0,710,711,1,0,0,0,711,
	712,1,0,0,0,712,713,3,96,48,0,713,107,1,0,0,0,714,715,5,56,0,0,715,716,
	5,23,0,0,716,717,3,142,71,0,717,718,5,24,0,0,718,719,3,98,49,0,719,109,
	1,0,0,0,720,723,3,134,67,0,721,723,3,100,50,0,722,720,1,0,0,0,722,721,1,
	0,0,0,723,111,1,0,0,0,724,725,5,57,0,0,725,726,3,96,48,0,726,113,1,0,0,
	0,727,728,5,28,0,0,728,731,5,23,0,0,729,732,3,110,55,0,730,732,5,2,0,0,
	731,729,1,0,0,0,731,730,1,0,0,0,732,735,1,0,0,0,733,736,3,100,50,0,734,
	736,5,2,0,0,735,733,1,0,0,0,735,734,1,0,0,0,736,738,1,0,0,0,737,739,3,142,
	71,0,738,737,1,0,0,0,738,739,1,0,0,0,739,740,1,0,0,0,740,741,5,24,0,0,741,
	742,3,98,49,0,742,115,1,0,0,0,743,745,5,58,0,0,744,746,5,131,0,0,745,744,
	1,0,0,0,745,746,1,0,0,0,746,751,1,0,0,0,747,748,5,23,0,0,748,749,3,118,
	59,0,749,750,5,24,0,0,750,752,1,0,0,0,751,747,1,0,0,0,751,752,1,0,0,0,752,
	753,1,0,0,0,753,754,3,156,78,0,754,117,1,0,0,0,755,756,3,202,101,0,756,
	119,1,0,0,0,757,758,5,59,0,0,758,759,3,98,49,0,759,760,5,56,0,0,760,761,
	5,23,0,0,761,762,3,142,71,0,762,763,5,24,0,0,763,764,5,2,0,0,764,121,1,
	0,0,0,765,766,5,114,0,0,766,767,5,2,0,0,767,123,1,0,0,0,768,769,5,110,0,
	0,769,770,5,2,0,0,770,125,1,0,0,0,771,773,5,60,0,0,772,774,3,142,71,0,773,
	772,1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,776,5,2,0,0,776,127,1,0,
	0,0,777,778,5,61,0,0,778,779,5,2,0,0,779,129,1,0,0,0,780,781,5,62,0,0,781,
	782,3,154,77,0,782,783,5,2,0,0,783,131,1,0,0,0,784,785,5,63,0,0,785,786,
	3,154,77,0,786,787,5,2,0,0,787,133,1,0,0,0,788,789,5,64,0,0,789,796,3,138,
	69,0,790,796,3,76,38,0,791,792,5,23,0,0,792,793,3,136,68,0,793,794,5,24,
	0,0,794,796,1,0,0,0,795,788,1,0,0,0,795,790,1,0,0,0,795,791,1,0,0,0,796,
	799,1,0,0,0,797,798,5,11,0,0,798,800,3,142,71,0,799,797,1,0,0,0,799,800,
	1,0,0,0,800,801,1,0,0,0,801,802,5,2,0,0,802,135,1,0,0,0,803,805,3,76,38,
	0,804,803,1,0,0,0,804,805,1,0,0,0,805,812,1,0,0,0,806,808,5,16,0,0,807,
	809,3,76,38,0,808,807,1,0,0,0,808,809,1,0,0,0,809,811,1,0,0,0,810,806,1,
	0,0,0,811,814,1,0,0,0,812,810,1,0,0,0,812,813,1,0,0,0,813,137,1,0,0,0,814,
	812,1,0,0,0,815,822,5,23,0,0,816,818,3,196,98,0,817,816,1,0,0,0,817,818,
	1,0,0,0,818,819,1,0,0,0,819,821,5,16,0,0,820,817,1,0,0,0,821,824,1,0,0,
	0,822,820,1,0,0,0,822,823,1,0,0,0,823,826,1,0,0,0,824,822,1,0,0,0,825,827,
	3,196,98,0,826,825,1,0,0,0,826,827,1,0,0,0,827,828,1,0,0,0,828,829,5,24,
	0,0,829,139,1,0,0,0,830,831,7,5,0,0,831,141,1,0,0,0,832,833,6,71,-1,0,833,
	834,5,70,0,0,834,851,3,78,39,0,835,836,5,23,0,0,836,837,3,142,71,0,837,
	838,5,24,0,0,838,851,1,0,0,0,839,840,7,6,0,0,840,851,3,142,71,19,841,842,
	7,7,0,0,842,851,3,142,71,18,843,844,5,72,0,0,844,851,3,142,71,17,845,846,
	5,73,0,0,846,851,3,142,71,16,847,848,5,6,0,0,848,851,3,142,71,15,849,851,
	3,144,72,0,850,832,1,0,0,0,850,835,1,0,0,0,850,839,1,0,0,0,850,841,1,0,
	0,0,850,843,1,0,0,0,850,845,1,0,0,0,850,847,1,0,0,0,850,849,1,0,0,0,851,
	926,1,0,0,0,852,853,10,14,0,0,853,854,5,74,0,0,854,925,3,142,71,14,855,
	856,10,13,0,0,856,857,7,8,0,0,857,925,3,142,71,14,858,859,10,12,0,0,859,
	860,7,7,0,0,860,925,3,142,71,13,861,862,10,11,0,0,862,863,7,9,0,0,863,925,
	3,142,71,12,864,865,10,10,0,0,865,866,5,30,0,0,866,925,3,142,71,11,867,
	868,10,9,0,0,868,869,5,5,0,0,869,925,3,142,71,10,870,871,10,8,0,0,871,872,
	5,29,0,0,872,925,3,142,71,9,873,874,10,7,0,0,874,875,7,10,0,0,875,925,3,
	142,71,8,876,877,10,6,0,0,877,878,7,11,0,0,878,925,3,142,71,7,879,880,10,
	5,0,0,880,881,5,77,0,0,881,925,3,142,71,6,882,883,10,4,0,0,883,884,5,4,
	0,0,884,925,3,142,71,5,885,886,10,3,0,0,886,887,5,78,0,0,887,888,3,142,
	71,0,888,889,5,71,0,0,889,890,3,142,71,3,890,925,1,0,0,0,891,892,10,2,0,
	0,892,893,7,12,0,0,893,925,3,142,71,3,894,895,10,27,0,0,895,925,7,6,0,0,
	896,897,10,25,0,0,897,898,5,43,0,0,898,899,3,142,71,0,899,900,5,44,0,0,
	900,925,1,0,0,0,901,902,10,24,0,0,902,904,5,43,0,0,903,905,3,142,71,0,904,
	903,1,0,0,0,904,905,1,0,0,0,905,906,1,0,0,0,906,908,5,71,0,0,907,909,3,
	142,71,0,908,907,1,0,0,0,908,909,1,0,0,0,909,910,1,0,0,0,910,925,5,44,0,
	0,911,912,10,23,0,0,912,913,5,46,0,0,913,925,3,196,98,0,914,915,10,22,0,
	0,915,916,5,15,0,0,916,917,3,148,74,0,917,918,5,17,0,0,918,925,1,0,0,0,
	919,920,10,21,0,0,920,921,5,23,0,0,921,922,3,152,76,0,922,923,5,24,0,0,
	923,925,1,0,0,0,924,852,1,0,0,0,924,855,1,0,0,0,924,858,1,0,0,0,924,861,
	1,0,0,0,924,864,1,0,0,0,924,867,1,0,0,0,924,870,1,0,0,0,924,873,1,0,0,0,
	924,876,1,0,0,0,924,879,1,0,0,0,924,882,1,0,0,0,924,885,1,0,0,0,924,891,
	1,0,0,0,924,894,1,0,0,0,924,896,1,0,0,0,924,901,1,0,0,0,924,911,1,0,0,0,
	924,914,1,0,0,0,924,919,1,0,0,0,925,928,1,0,0,0,926,924,1,0,0,0,926,927,
	1,0,0,0,927,143,1,0,0,0,928,926,1,0,0,0,929,939,5,103,0,0,930,939,3,194,
	97,0,931,939,3,198,99,0,932,939,3,202,101,0,933,939,3,196,98,0,934,939,
	5,124,0,0,935,939,5,119,0,0,936,939,3,192,96,0,937,939,3,78,39,0,938,929,
	1,0,0,0,938,930,1,0,0,0,938,931,1,0,0,0,938,932,1,0,0,0,938,933,1,0,0,0,
	938,934,1,0,0,0,938,935,1,0,0,0,938,936,1,0,0,0,938,937,1,0,0,0,939,145,
	1,0,0,0,940,945,3,142,71,0,941,942,5,16,0,0,942,944,3,142,71,0,943,941,
	1,0,0,0,944,947,1,0,0,0,945,943,1,0,0,0,945,946,1,0,0,0,946,147,1,0,0,0,
	947,945,1,0,0,0,948,953,3,150,75,0,949,950,5,16,0,0,950,952,3,150,75,0,
	951,949,1,0,0,0,952,955,1,0,0,0,953,951,1,0,0,0,953,954,1,0,0,0,954,957,
	1,0,0,0,955,953,1,0,0,0,956,958,5,16,0,0,957,956,1,0,0,0,957,958,1,0,0,
	0,958,149,1,0,0,0,959,960,3,196,98,0,960,961,5,71,0,0,961,962,3,142,71,
	0,962,151,1,0,0,0,963,965,5,15,0,0,964,966,3,148,74,0,965,964,1,0,0,0,965,
	966,1,0,0,0,966,967,1,0,0,0,967,972,5,17,0,0,968,970,3,146,73,0,969,968,
	1,0,0,0,969,970,1,0,0,0,970,972,1,0,0,0,971,963,1,0,0,0,971,969,1,0,0,0,
	972,153,1,0,0,0,973,974,3,142,71,0,974,975,5,23,0,0,975,976,3,152,76,0,
	976,977,5,24,0,0,977,155,1,0,0,0,978,982,5,15,0,0,979,981,3,158,79,0,980,
	979,1,0,0,0,981,984,1,0,0,0,982,980,1,0,0,0,982,983,1,0,0,0,983,985,1,0,
	0,0,984,982,1,0,0,0,985,986,5,17,0,0,986,157,1,0,0,0,987,1005,3,196,98,
	0,988,1005,3,156,78,0,989,1005,3,160,80,0,990,1005,3,166,83,0,991,1005,
	3,168,84,0,992,1005,3,174,87,0,993,1005,3,176,88,0,994,1005,3,178,89,0,
	995,1005,3,182,91,0,996,1005,3,186,93,0,997,1005,3,188,94,0,998,1005,5,
	110,0,0,999,1005,5,114,0,0,1000,1005,5,115,0,0,1001,1005,3,194,97,0,1002,
	1005,3,202,101,0,1003,1005,3,198,99,0,1004,987,1,0,0,0,1004,988,1,0,0,0,
	1004,989,1,0,0,0,1004,990,1,0,0,0,1004,991,1,0,0,0,1004,992,1,0,0,0,1004,
	993,1,0,0,0,1004,994,1,0,0,0,1004,995,1,0,0,0,1004,996,1,0,0,0,1004,997,
	1,0,0,0,1004,998,1,0,0,0,1004,999,1,0,0,0,1004,1000,1,0,0,0,1004,1001,1,
	0,0,0,1004,1002,1,0,0,0,1004,1003,1,0,0,0,1005,159,1,0,0,0,1006,1010,3,
	164,82,0,1007,1010,3,190,95,0,1008,1010,3,162,81,0,1009,1006,1,0,0,0,1009,
	1007,1,0,0,0,1009,1008,1,0,0,0,1010,161,1,0,0,0,1011,1012,3,196,98,0,1012,
	1013,5,46,0,0,1013,1014,3,196,98,0,1014,163,1,0,0,0,1015,1020,5,60,0,0,
	1016,1020,5,45,0,0,1017,1020,5,67,0,0,1018,1020,3,196,98,0,1019,1015,1,
	0,0,0,1019,1016,1,0,0,0,1019,1017,1,0,0,0,1019,1018,1,0,0,0,1020,1033,1,
	0,0,0,1021,1023,5,23,0,0,1022,1024,3,160,80,0,1023,1022,1,0,0,0,1023,1024,
	1,0,0,0,1024,1029,1,0,0,0,1025,1026,5,16,0,0,1026,1028,3,160,80,0,1027,
	1025,1,0,0,0,1028,1031,1,0,0,0,1029,1027,1,0,0,0,1029,1030,1,0,0,0,1030,
	1032,1,0,0,0,1031,1029,1,0,0,0,1032,1034,5,24,0,0,1033,1021,1,0,0,0,1033,
	1034,1,0,0,0,1034,165,1,0,0,0,1035,1036,5,89,0,0,1036,1039,3,170,85,0,1037,
	1038,5,90,0,0,1038,1040,3,160,80,0,1039,1037,1,0,0,0,1039,1040,1,0,0,0,
	1040,167,1,0,0,0,1041,1042,3,170,85,0,1042,1043,5,90,0,0,1043,1044,3,160,
	80,0,1044,169,1,0,0,0,1045,1053,3,196,98,0,1046,1053,3,162,81,0,1047,1053,
	3,172,86,0,1048,1049,5,23,0,0,1049,1050,3,172,86,0,1050,1051,5,24,0,0,1051,
	1053,1,0,0,0,1052,1045,1,0,0,0,1052,1046,1,0,0,0,1052,1047,1,0,0,0,1052,
	1048,1,0,0,0,1053,171,1,0,0,0,1054,1059,3,196,98,0,1055,1056,5,16,0,0,1056,
	1058,3,196,98,0,1057,1055,1,0,0,0,1058,1061,1,0,0,0,1059,1057,1,0,0,0,1059,
	1060,1,0,0,0,1060,173,1,0,0,0,1061,1059,1,0,0,0,1062,1063,3,160,80,0,1063,
	1064,5,91,0,0,1064,1065,3,196,98,0,1065,175,1,0,0,0,1066,1067,3,196,98,
	0,1067,1068,5,71,0,0,1068,177,1,0,0,0,1069,1070,5,92,0,0,1070,1074,3,160,
	80,0,1071,1073,3,180,90,0,1072,1071,1,0,0,0,1073,1076,1,0,0,0,1074,1072,
	1,0,0,0,1074,1075,1,0,0,0,1075,179,1,0,0,0,1076,1074,1,0,0,0,1077,1078,
	5,93,0,0,1078,1079,3,190,95,0,1079,1080,3,156,78,0,1080,1084,1,0,0,0,1081,
	1082,5,94,0,0,1082,1084,3,156,78,0,1083,1077,1,0,0,0,1083,1081,1,0,0,0,
	1084,181,1,0,0,0,1085,1086,5,39,0,0,1086,1087,3,196,98,0,1087,1089,5,23,
	0,0,1088,1090,3,172,86,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1091,
	1,0,0,0,1091,1093,5,24,0,0,1092,1094,3,184,92,0,1093,1092,1,0,0,0,1093,
	1094,1,0,0,0,1094,1095,1,0,0,0,1095,1096,3,156,78,0,1096,183,1,0,0,0,1097,
	1098,5,95,0,0,1098,1099,3,172,86,0,1099,185,1,0,0,0,1100,1103,5,28,0,0,
	1101,1104,3,156,78,0,1102,1104,3,160,80,0,1103,1101,1,0,0,0,1103,1102,1,
	0,0,0,1104,1105,1,0,0,0,1105,1108,3,160,80,0,1106,1109,3,156,78,0,1107,
	1109,3,160,80,0,1108,1106,1,0,0,0,1108,1107,1,0,0,0,1109,1110,1,0,0,0,1110,
	1111,3,156,78,0,1111,187,1,0,0,0,1112,1113,5,52,0,0,1113,1114,3,160,80,
	0,1114,1115,3,156,78,0,1115,189,1,0,0,0,1116,1122,3,202,101,0,1117,1122,
	5,104,0,0,1118,1122,5,105,0,0,1119,1122,3,198,99,0,1120,1122,5,103,0,0,
	1121,1116,1,0,0,0,1121,1117,1,0,0,0,1121,1118,1,0,0,0,1121,1119,1,0,0,0,
	1121,1120,1,0,0,0,1122,191,1,0,0,0,1123,1125,5,23,0,0,1124,1126,3,142,71,
	0,1125,1124,1,0,0,0,1125,1126,1,0,0,0,1126,1133,1,0,0,0,1127,1129,5,16,
	0,0,1128,1130,3,142,71,0,1129,1128,1,0,0,0,1129,1130,1,0,0,0,1130,1132,
	1,0,0,0,1131,1127,1,0,0,0,1132,1135,1,0,0,0,1133,1131,1,0,0,0,1133,1134,
	1,0,0,0,1134,1136,1,0,0,0,1135,1133,1,0,0,0,1136,1150,5,24,0,0,1137,1146,
	5,43,0,0,1138,1143,3,142,71,0,1139,1140,5,16,0,0,1140,1142,3,142,71,0,1141,
	1139,1,0,0,0,1142,1145,1,0,0,0,1143,1141,1,0,0,0,1143,1144,1,0,0,0,1144,
	1147,1,0,0,0,1145,1143,1,0,0,0,1146,1138,1,0,0,0,1146,1147,1,0,0,0,1147,
	1148,1,0,0,0,1148,1150,5,44,0,0,1149,1123,1,0,0,0,1149,1137,1,0,0,0,1150,
	193,1,0,0,0,1151,1153,7,13,0,0,1152,1154,5,106,0,0,1153,1152,1,0,0,0,1153,
	1154,1,0,0,0,1154,195,1,0,0,0,1155,1156,7,14,0,0,1156,197,1,0,0,0,1157,
	1159,5,107,0,0,1158,1157,1,0,0,0,1159,1160,1,0,0,0,1160,1158,1,0,0,0,1160,
	1161,1,0,0,0,1161,199,1,0,0,0,1162,1174,5,97,0,0,1163,1164,5,23,0,0,1164,
	1169,3,80,40,0,1165,1166,5,16,0,0,1166,1168,3,80,40,0,1167,1165,1,0,0,0,
	1168,1171,1,0,0,0,1169,1167,1,0,0,0,1169,1170,1,0,0,0,1170,1172,1,0,0,0,
	1171,1169,1,0,0,0,1172,1173,5,24,0,0,1173,1175,1,0,0,0,1174,1163,1,0,0,
	0,1174,1175,1,0,0,0,1175,201,1,0,0,0,1176,1178,5,131,0,0,1177,1176,1,0,
	0,0,1178,1179,1,0,0,0,1179,1177,1,0,0,0,1179,1180,1,0,0,0,1180,203,1,0,
	0,0,132,215,217,232,236,241,247,251,254,259,265,272,276,289,297,302,307,
	315,318,321,327,335,338,352,362,364,370,397,400,411,416,421,435,438,445,
	449,451,456,461,464,470,474,478,483,496,498,505,515,521,532,535,541,544,
	552,555,561,564,572,575,581,585,596,601,606,614,619,625,630,643,645,650,
	660,680,692,697,703,707,710,722,731,735,738,745,751,773,795,799,804,808,
	812,817,822,826,850,904,908,924,926,938,945,953,957,965,969,971,982,1004,
	1009,1019,1023,1029,1033,1039,1052,1059,1074,1083,1089,1093,1103,1108,1121,
	1125,1129,1133,1143,1146,1149,1153,1160,1169,1174,1179];

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
	public customStorageLayout_list(): CustomStorageLayoutContext[] {
		return this.getTypedRuleContexts(CustomStorageLayoutContext) as CustomStorageLayoutContext[];
	}
	public customStorageLayout(i: number): CustomStorageLayoutContext {
		return this.getTypedRuleContext(CustomStorageLayoutContext, i) as CustomStorageLayoutContext;
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


export class CustomStorageLayoutContext extends ParserRuleContext {
	constructor(parser?: SolidityParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SolidityParser.RULE_customStorageLayout;
	}
	public enterRule(listener: SolidityListener): void {
	    if(listener.enterCustomStorageLayout) {
	 		listener.enterCustomStorageLayout(this);
		}
	}
	public exitRule(listener: SolidityListener): void {
	    if(listener.exitCustomStorageLayout) {
	 		listener.exitCustomStorageLayout(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCustomStorageLayout) {
			return visitor.visitCustomStorageLayout(this);
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
