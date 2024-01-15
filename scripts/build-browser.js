const path = require('path')
const { build } = require('esbuild')

build({
  logLevel: 'info',
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  bundle: true,
  sourcemap: true,
  format: 'iife',
  banner: {
    js: `"use strict";
(function universalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["SolidityParser"] = factory();
  else
    root["SolidityParser"] = factory();
})(
typeof globalThis !== 'undefined' ? globalThis
: typeof global !== 'undefined' ? global
: typeof self !== 'undefined' ? self
: this || {}
, () => {`,
  },
  globalName: 'SolidityParser',
  outfile: path.resolve(__dirname, '../dist/index.umd.js'),
  footer: {
    js: `
  return SolidityParser;
})`,
  },
}).catch(() => process.exit(1))
