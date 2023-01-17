/// <reference types="vitest" />

import { basename, join, relative, resolve } from 'path'
import { readdirSync, statSync } from 'fs'
import { defineConfig } from 'vite'

const tsSuffix = '.ts'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      formats: ['cjs', 'es'],
      entry: getEntries(),
    },
  },
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['json', 'html'],
      reportsDirectory: 'coverages',
      include: [
        'src/**/*.ts',
      ],
    },
  },
})

/**
 * get library entries
 */
function getEntries() {
  // get entries
  const initEntries: Record<string, string> = {}
  const sourceDirectory = getSourceDirectory()
  const modules = getModules(sourceDirectory)
  const entries = modules.reduce((obj, entryName) => {
    const relPath = relative(__dirname, sourceDirectory)
    obj[entryName] = join(relPath, entryName + tsSuffix)
    return obj
  }, initEntries)

  return entries
}

function getSourceDirectory() {
  return resolve(__dirname, 'src')
}

function getModules(directory: string) {
  return readdirSync(directory)
    .filter((filename) => {
      const fullPath = resolve(directory, filename)
      const stat = statSync(fullPath)
      return stat.isFile()
    })
    .map(filename => basename(filename, tsSuffix))
}
