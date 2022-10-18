import { Plugin } from 'rollup';
import { move } from 'fs-extra';

export interface Files {
  /** Source file or directory */
  src: string;
  /** Destination file or directory */
  dest: string;
  /** Whether to overwrite destination if it exists */
  overwrite?: boolean;
}

export interface PluginOptions {
  /** Whether to relocate once even if there are multiple outputs */
  once?: boolean;
  /** Whether to overwrite destination if it exists */
  overwrite?: boolean;
}

function relocate(files: Files, { once, overwrite }: PluginOptions): Plugin {
  const targets = Array.isArray(files) ? files : [files];
  let called = false;

  return {
    name: 'relocate',
    writeBundle: {
      async handler() {
        if (called && once) return;
        called = true;
        for (const target of targets) {
          console.log({ target });
          await move(target.src, target.dest, {
            overwrite: target.overwrite ?? overwrite
          });
        }
      }
    }
  };
}

export default relocate;

/**
 * Usage:
 */

// relocate(
//   [
//     {
//       src: `dist/cjs/src/ursa-core/src`,
//       dest: `dist/commonjs`,
//       overwrite: true
//     },
//     {
//       src: `dist/esm/src/ursa-core/src`,
//       dest: `dist/esmodules`,
//       overwrite: true
//     }
//   ],
//   { overwrite: false, once: true }
// ),
