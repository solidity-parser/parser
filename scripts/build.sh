#!/usr/bin/env sh

set -o errexit

antlr4 -Dlanguage=JavaScript solidity-antlr4/Solidity.g4 -o lib

mv lib/solidity-antlr4/* lib/

rmdir lib/solidity-antlr4

sed -i.bak -e 's/antlr4\/index/\.\.\/antlr4\/index/g' lib/*.js
 
find lib -name '*.js.bak' -delete
