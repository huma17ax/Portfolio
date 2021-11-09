<template>
  <div class='wrapper'>
    <MyHeader class='header'></MyHeader>
    <div class='view'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header.vue'

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

<style lang='scss' scoped>
.wrapper {
  height: 100%;
  width: 100%;
}

.header {
  height: 70px;
  margin: 0 auto;
}

.view {
  height: calc(100% - 70px);
  max-width: 750px;
  margin: 0 auto;
}
</style>