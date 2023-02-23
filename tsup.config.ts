import { defineConfig, type Format } from 'tsup'
import glob from 'glob'

export default defineConfig(() => {
  return {
    entry: glob.sync('src/*.ts'),
    format: ['esm', 'cjs'],
    minify: true,
    splitting: true,
    clean: true,
    treeshake: true,
    sourcemap: false,
    dts: true,
    outDir: 'libs',
    noExternal: [
      /fp\-ts\/.*/,
    ],
    outExtension({ format }) {
      return {
        js: getExt(format),
      }
    },
  }
})

//#region create extension
function getExt(format: Format) {
  let ext = '.js'
  switch (format) {
    case 'cjs':
      ext = '.cjs'
      break;

    case 'esm':
      ext = '.mjs'
      break;

    case 'iife':
      ext = '.global.js'
      break;

    default:
      break;
  }

  return ext
}
//#endregion
