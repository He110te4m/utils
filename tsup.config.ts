import { defineConfig } from 'tsup'
import glob from 'glob'
import { getExtensionByFormat } from './src/file/ext'

export default defineConfig(() => {
  return {
    entry: glob.sync('src/*/index.ts').concat(glob.sync('src/index.ts')),
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
        js: getExtensionByFormat(format),
      }
    },
  }
})
