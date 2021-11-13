<template>
  <div class="wrapper">
    <MainMenu class="menu"></MainMenu>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu'

export default {
  name: 'app',
  components: {
    MainMenu
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
  width: 878px;
  display: flex;
  margin: auto;
}

.menu {
  display: block;
  width: 128px;
}

.view {
  height: 100%;
  width: 750px;
  margin: 0 auto;
}
</style>