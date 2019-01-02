const rewireEslint = require('react-app-rewire-eslint')
const { getBabelLoader } = require('react-app-rewired')

module.exports = function override(config, env) {
  // enable to use .babelrc
  // @see https://github.com/timarney/react-app-rewired/issues/203#issuecomment-415058742
  const babelLoader = getBabelLoader(config.module.rules)
  babelLoader.options.babelrc = true

  // eslint
  config = rewireEslint(config, env)

  return config
}
