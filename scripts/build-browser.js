const path = require('path')
const { build } = require('esbuild')
const browserslist = require('browserslist')
const { resolveToEsbuildTarget } = require('esbuild-plugin-browserslist')

const target = resolveToEsbuildTarget(
  browserslist(['>0.5%', 'not dead', 'not op_mini all']),
  { printUnknownTargets: false }
)

build({
  logLevel: 'info',
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  bundle: true,
  sourcemap: true,
  format: 'iife',
  target,
  globalName: 'SolidityParser',
  outfile: path.resolve(__dirname, '../dist/index.iife.js'),
}).catch(() => process.exit(1))
