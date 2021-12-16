module.exports = {
    chainWebpack: config => {
      config.module.rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('a-')
        }
        return options
      }).end()
      .rule('gltf').test(/\.gltf$/).use('file-loader').loader("file-loader").end()
    }
  }
        