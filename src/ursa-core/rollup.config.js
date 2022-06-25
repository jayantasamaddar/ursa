import { readFileSync } from 'fs';
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import externals from 'rollup-plugin-node-externals';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';

const input = 'src/index.ts';
// Read package.json
const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url).pathname)
);
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input,
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        preserveModules: true,
        entryFileNames: '[name][assetExtname].js',
        exports: 'named'
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        preserveModules: true,
        entryFileNames: '[name][assetExtname].js'
      }
    ],
    external: [
      /@babel\/runtime/,
      'react',
      /@emotion\/styled/,
      /@emotion\/react/,
      /@zenius-one\/ursa-icons/
    ],
    plugins: [
      externals(),
      typescript(),
      nodeResolve({ extensions }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions,
        envName: 'production',
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime']
      }),
      summary({ showMinifiedSize: true, showGzippedSize: true })
    ]
  }
];
