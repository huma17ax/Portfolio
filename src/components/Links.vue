<template>
  <div class="wrapper">
    <div class="horizon">Links</div>
    <button class="item" @click="open('https://github.com/huma17ax')">GitHub</button>
    <button class="item" @click="open('https://qiita.com/huma17ax')">Qiita</button>
    <button class="item" @click="open('https://atcoder.jp/users/huma17')">AtCoder</button>
    <button class="item" @click="open('https://lapras.com/public/XWQGE21')">LAPRAS</button>
  </div>
</template>

<script>

export default {
  name: "Links",
  data () {
    return {
    }
  },
  methods: {
    open (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
  height: 100%;
  margin: auto;
  overflow-y: auto;

  
  .horizon {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    font-weight: bolder;
    margin: 16px 0px;
    &::after {
      content: '';
      height: 2px;
      margin-left: 8px;
      background-color: #333;
      flex-grow: 1;
    }
  }

  .item {
    position: relative;
    display: inline-block;
    width: 15%;
    margin: 32px 5% 0px 5%;
    padding: 8px 0px;
    text-align: center;
    font-size: 1.2em;
    cursor: pointer;
    background-color: white;
    border: none;
    // border-radius: 8px;
    transition: all 0.2s;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      background: $main-color;
      width: 100%;
      height: 2px;
    }
    &:hover {
      background-color: $sub-color;
    }
    &:hover::after {
      height: 0px;
    }
  }
}
</style>
