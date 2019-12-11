module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/styles/settings/_variables.scss";'
      }
    }
  }
}
