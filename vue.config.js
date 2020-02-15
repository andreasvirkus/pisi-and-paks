module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  configureWebpack: {
    devtool: 'none',
    node: {
      global: false
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line
          require('autoprefixer')(),
        ]
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.plugins.delete('split-manifest').delete('inline-manifest')

    // Placeholder for `global` in case it's used in any node_modules
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        global: 'window'
      })
      return definitions
    })
  }
}
