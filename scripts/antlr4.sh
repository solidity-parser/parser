#!/usr/bin/env sh

set -o errexit

antlr -Dlanguage=JavaScript solidity-antlr4/Solidity.g4 -o lib

mv lib/solidity-antlr4/* src/lib/

rmdir lib/solidity-antlr4

sed -i.bak -e 's/antlr4\/index/\.\.\/antlr4\/index/g' src/lib/*.js

find src/lib -name '*.js.bak' -delete
