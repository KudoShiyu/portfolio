module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/global.scss";'
      }
    }
  }
}
