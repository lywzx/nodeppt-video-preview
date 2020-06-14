import typescript from 'rollup-plugin-typescript2';
const process = require('process');
import commonjs from 'rollup-plugin-commonjs';
const pkg = require('./package.json');
import styles from "rollup-plugin-styles";
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'
import { terser } from "rollup-plugin-terser";


const isPrd = process.argv.includes('production');

const plugins =  [
  resolve({browser: true}),
  typescript({
    tsconfig: "tsconfig.json",
    exclude: "node_modules/**",
    typescript: require('typescript'),
  }),
  styles(),
  commonjs(),
  /*eslint({
    throwOnError: false,
    throwOnWarning: true,
    include: ['src/!**'],
    exclude: ['node_modules/!**']
  })*/
];

if (!isPrd) {
  plugins.push(serve({
    host: 'localhost',
    port: 10001,
    open: true,
    // Multiple folders to serve from
    contentBase: ['dist', 'public'],
  }));
} else {
  plugins.push(
    terser()
  )
}

const banner = `/*!
 * node ppt plugin v${pkg.version}
 * (c) ${new Date().getFullYear()} YangLiu
 * @license MIT
 */`

// rollup.config.js
export default {
  input: ['src/index.ts'],
  plugins,
  output: {
    dir: 'dist',
    banner,
    format: 'iife',
  }
};
