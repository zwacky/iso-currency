import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pluginUglify from 'rollup-plugin-uglify';

export default {
  input: './tmp/src/index.js',
  output: {
    format: 'iife',
    // globals: ['angular'],
    file: './lib/iso-currency-ng1.min.js',
  },
  external: ['angular'],

  plugins: [
    resolve(),
    commonjs(),
    pluginUglify.uglify({}, require('uglify-js').minify),
  ]
};
