import { readFileSync } from 'fs';
import path from 'path';

import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';

const input = './src/index.ts';
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
      'react-dom',
      /@emotion\/styled/,
      /@emotion\/react/
    ],
    plugins: [
      peerDepsExternal(),
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

/**
 * dist
 * ├── index.js
 * ├── index.esm.js
 * ├── index.d.ts
 * ├── index.js.map
 * ├── index.esm.js.map
 * ├── index.d.ts.map
 * ├── index.metadata.json
 * ├── cjs
 * │   ├── MinusMajor.js
 * │   ├── Minus.js
 * │   ├── PlusMajor.js
 * │   ├── MinusMinor.js
 * │   ├── PlusMinor.js
 * ├── esm
 * │   ├── MinusMajor.js
 * │   ├── Minus.js
 * │   ├── PlusMajor.js
 * │   ├── MinusMinor.js
 * │   ├── PlusMinor.js
 * ├── README.md
 * └── package.json
 */
