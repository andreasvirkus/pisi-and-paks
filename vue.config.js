module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  configureWebpack: {
    devtool: 'none'
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
