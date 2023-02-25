export type ModuleFormat = 'esm' | 'cjs' | 'iife'

export function getExtensionByFormat(format: ModuleFormat) {
  let ext = '.js'

  return getEsmExtName(format)
    ?? getCjsExtName(format)
    ?? getIifeExtName(format)
    ?? ext
}

function getEsmExtName(format: ModuleFormat) {
  return format === 'esm' ? '.mjs' : undefined
}

function getCjsExtName(format: ModuleFormat) {
  return format === 'cjs' ? '.cjs' : undefined
}

function getIifeExtName(format: ModuleFormat) {
  return format === 'iife' ? '.global.js' : undefined
}
