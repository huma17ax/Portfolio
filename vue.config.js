module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/global.scss";` //グローバルで読みたいファイル名
      }
    }
  }
};