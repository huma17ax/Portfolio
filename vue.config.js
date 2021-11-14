module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/global.scss";` //グローバルで読みたいファイル名
      }
    }
  },
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './'
};