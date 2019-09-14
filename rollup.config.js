import typescript from 'rollup-plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'umd/fancy-case.js',
      format: 'umd',
      name: 'fancyCase',
      esModule: false
    },
    plugins: [
      typescript(),
      terser()
    ]
  },
  {
    input: 'src/main.ts',
    output: {
      file: 'esm/fancy-case.js',
      format: 'esm',
      esModule: false
    },
    plugins: [
      typescript(),
      terser()
    ]
  }
];
