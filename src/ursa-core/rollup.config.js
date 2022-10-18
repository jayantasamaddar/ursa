import { readFileSync } from 'fs';
import path from 'path';
import { move } from 'fs-extra';
import { fileURLToPath } from 'url';

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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function relocate(files, { once, overwrite }) {
  const targets = Array.isArray(files) ? files : [files];
  let called = false;

  return {
    name: 'relocate',
    writeBundle: {
      async handler() {
        if (called && once) return;
        called = true;
        for (const target of targets) {
          await move(target.src, target.dest, {
            overwrite: target.overwrite ?? overwrite
          });
        }
      }
    }
  };
}

export default [
  {
    input,
    output: [
      {
        format: 'cjs',
        dir: path.dirname(pkg.main),
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, 'src'),
        entryFileNames: '[name][assetExtname].js',
        exports: 'named'
      },
      {
        format: 'esm',
        dir: path.dirname(pkg.module),
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, 'src'),
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
