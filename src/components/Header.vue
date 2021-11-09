<template>
  <div class='header'>
    <span class='title range' v-on:click="backTitle">Logo</span>
    <span class='Am range' v-on:click="goPage('/AboutMe')">
        About me
        <span class='exp'>自己紹介や経歴など</span>
    </span>
    <span class='Ac range' v-on:click="goPage('/Activity')">
        Activity
        <span class='exp'>活動を紹介</span>
    </span>
    <span class='Pd range' v-on:click="goPage('/Product')">
        Product
        <span class='exp'>過去の制作物</span>
    </span>
    <span class='Ct range' v-on:click="goPage('/Contact')">
        Contact
        <span class='exp'>ご連絡はこちら</span>
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
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
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

.range:hover > .exp{
    opacity: 1.0;
    transition: 0.3s;
}

.Am {
  margin-left: auto;
}

.exp {
    opacity: 0;
    position: absolute;
    top: 55px;
    left : 50%;
    transform : translate(-50%, 0);
    width: 170px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    /*white-space: nowrap;*/
    transition: 0.3s;
    background-color: $sub-color;
    box-shadow: 0 0 3px 3px rgba(0,0,255,0.3);
}
</style>
