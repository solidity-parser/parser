solidity-parser-antlr
=====================

[![Build Status](https://travis-ci.org/federicobond/solidity-parser-antlr.svg?branch=master)](https://travis-ci.org/federicobond/solidity-parser-antlr)

A Solidity parser built on top of a robust ANTLR4 grammar.

### Usage

```javascript
import parser from 'solidity-parser-antlr';

var input = `
    contract test {
        uint256 a;
        function f() {}
    }
`

parser.parse(input)
```

### Author

Federico Bond ([@federicobond](https://github.com/federicobond))

### License

GPL 3.0
