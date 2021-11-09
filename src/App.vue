<template>
  <div id='app'>
    <MyHeader class='header'></MyHeader>
    <div class='view'>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    MyHeader
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.header {
  height: 70px;
}

.view {
  height: calc(100% - 70px);
}
</style>