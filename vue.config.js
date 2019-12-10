module.exports = {
  publicPath: 'vueather-forecast',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/styles/settings/_variables.scss";'
      }
    }
  }
}
