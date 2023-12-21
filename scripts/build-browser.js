const path = require('path')
const { build } = require('esbuild')

build({
  logLevel: 'info',
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  bundle: true,
  sourcemap: true,
  format: 'iife',
  globalName: 'SolidityParser',
  outfile: path.resolve(__dirname, '../dist/index.iife.js'),
}).catch(() => process.exit(1))
