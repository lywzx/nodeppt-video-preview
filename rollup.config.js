const rollupTypescript = require('rollup-plugin-typescript');
import commonjs from 'rollup-plugin-commonjs';
const pkg = require('./package.json');
import styles from "rollup-plugin-styles";
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'

const banner = `/*!
 * node ppt plugin v${pkg.version}
 * (c) ${new Date().getFullYear()} YangLiu
 * @license MIT
 */`

// rollup.config.js
export default {
  input: ['src/index.ts'],
  plugins: [
    resolve({browser: true}),
    rollupTypescript(),
    serve({
      host: 'localhost',
      port: 10001,
      open: true,
      // Multiple folders to serve from
      contentBase: ['dist', 'public'],
    }),
    styles(),
    commonjs(),
  ],
  output: {
    dir: 'dist',
    banner,
    format: 'iife',
  }
};
