<template>
  <div id='app'>
    <Wrapper></Wrapper>
  </div>
</template>

<script>
import Wrapper from './components/ViewWrapper.vue'

export default {
  name: 'app',
  components: {
    Wrapper
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
#app {
  font-family: "Hiragino Sans", "Yu Gothic", Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>

<style lang="scss">
body{
  margin: 0;
}
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-track {
    border-radius: 4px;
    box-shadow: inset 0 0 6px $sub-color;
}
::-webkit-scrollbar-thumb {
    background-color: $main-color;
    border-radius: 4px;
}
</style>