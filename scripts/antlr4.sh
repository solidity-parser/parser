#!/usr/bin/env sh

set -o errexit

ANTLR_JAR="solidity-antlr4/antlr4.jar"

if [ ! -e "$ANTLR_JAR" ]; then
  curl https://www.antlr.org/download/antlr-4.7.2-complete.jar -o "$ANTLR_JAR"
fi

java -jar $ANTLR_JAR -Dlanguage=JavaScript solidity-antlr4/Solidity.g4 -o lib

mv lib/solidity-antlr4/* src/lib/

rmdir lib/solidity-antlr4

sed -i.bak -e 's/antlr4\/index/\.\.\/antlr4\/index/g' src/lib/*.js

find src/lib -name '*.js.bak' -delete
