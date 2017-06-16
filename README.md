solidity-parser-antlr
=====================

A Solidity parser built on top of a robust ANTLR4 grammar.

### Usage

```javascript
import SolidityParser from 'solidity-parser-antlr';

SolidityParser.parse(`
    contract test {
        uint256 a;
        function f() {}
    }
`)
```

### Author

Federico Bond ([@federicobond](https://github.com/federicobond))

### License

GPL 3.0
