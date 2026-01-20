import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/extension.ts',
  output: {
    dir: 'out',
    format: 'cjs',
    sourcemap: true,
    exports: 'named'
  },
  external: ['vscode'], // Don't bundle vscode module
  plugins: [
    resolve({
      preferBuiltins: true,
      extensions: ['.ts', '.js', '.json']
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      inlineSources: false
    })
  ]
};
