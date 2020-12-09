import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const extensions = [
  '.js', '.ts',
];

export default {
  input: './src/index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  }, {
    file: pkg.browser,
    format: 'iife',
    name: 'SolidityParser',
    sourcemap: true,
  }],
  plugins: [
    nodePolyfills(),
    resolve({ extensions }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions,
      include: 'src/**/*'
    }),
  ]
}
