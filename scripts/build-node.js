const path = require('path')
const { build } = require('esbuild')

build({
  logLevel: 'info',
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  bundle: true,
  sourcemap: true,
  format: 'cjs',
  platform: 'node',
  target: 'node16',
  // esbuild has an issue with import.meta.url and output in cjs so we need to
  // explicitly tell what to do with it.
  define: { 'import.meta.url': '_importMetaUrl' },
  banner: {
    js: 'const _importMetaUrl=require("url").pathToFileURL(__filename)',
  },
  outfile: path.resolve(__dirname, '../dist/index.cjs.js'),
}).catch(() => process.exit(1))
