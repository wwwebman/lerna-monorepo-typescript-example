const tsConfigPaths = require('tsconfig-paths')

const { compilerOptions } = require('../../tsconfig.json')

tsConfigPaths.register({
  baseUrl: 'dist/app',
  paths: compilerOptions.paths,
})
