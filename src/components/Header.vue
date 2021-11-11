<template>
  <div class='header'>
    <span class='title range' v-on:click="backTitle">Logo</span>
    <span class='Am range' v-on:click="goPage('/About')">
        About
    </span>
    <span class='Ac range' v-on:click="goPage('/Activity')">
        Activity
    </span>
    <span class='Pd range' v-on:click="goPage('/Works')">
        Works
    </span>
    <span class='Ct range' v-on:click="goPage('/Links')">
        Links
    </span>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data: function () {
    return {}
  },
  methods: {
    backTitle: function () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    goPage: function (path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  background: $main-color;
  display: flex;
  z-index: 100;
}

.range {
  position: relative;
  width: 80px;
  height: 50px;/*上位コンポーネントからデータを渡すべき*/
  line-height: 50px;
  text-align: center;
  background: $sub-color;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: calc(100% / 50);
  margin-left: calc(100% / 50);
  cursor: pointer;
}

.Am {
  margin-left: auto;
}
</style>
