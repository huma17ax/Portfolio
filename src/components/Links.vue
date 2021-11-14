<template>
  <div class="wrapper">
    <div :class="['horizon', {'clear': clearPage}]">Links</div>
    <span :style="clearStyle(0)"><button class="item" @click="open('https://github.com/huma17ax')">GitHub</button></span>
    <span :style="clearStyle(1)"><button class="item" @click="open('https://qiita.com/huma17ax')">Qiita</button></span>
    <span :style="clearStyle(2)"><button class="item" @click="open('https://atcoder.jp/users/huma17')">AtCoder</button></span>
    <span :style="clearStyle(3)"><button class="item" @click="open('https://lapras.com/public/XWQGE21')">LAPRAS</button></span>
  </div>
</template>

<script>
import pageTransition from '@/mixins/PageTransition'

export default {
  name: "Links",
  mixins: [
    pageTransition
  ],
  data () {
    return {
    }
  },
  methods: {
    clearStyle (idx) {
      if (this.clearPage) {
        return {
          transition: 'opacity 0.3s',
          opacity: '0',
          'transition-delay': 0.2-(idx/4*0.2) + 's'
        }
      }
      else {
        return {
          transition: 'opacity 0.3s',
          'transition-delay': (idx/4*0.2) + 's'
        }
      }
    },
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
  width: 100%;
  margin: auto;
  overflow-y: auto;

  
  .horizon {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    font-weight: bolder;
    margin: 16px 0px;
    transition: all 0.3s;
    &::after {
      content: '';
      height: 2px;
      margin-left: 8px;
      background-color: #333;
      flex-grow: 1;
    }
  }

  .clear {
    opacity: 0;
    transition-delay: 0.2s;
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
