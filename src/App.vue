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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>