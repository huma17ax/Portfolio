<template>
  <div class="wrapper">
    <div :class="['horizon', {'clear': clearPage}]">Links</div>
    <span :style="clearStyle(0)"><Button class="item" @click="open('https://github.com/huma17ax')">GitHub</Button></span>
    <span :style="clearStyle(1)"><Button class="item" @click="open('https://qiita.com/huma17ax')">Qiita</Button></span>
    <span :style="clearStyle(2)"><Button class="item" @click="open('https://atcoder.jp/users/huma17')">AtCoder</Button></span>
    <span :style="clearStyle(3)"><Button class="item" @click="open('https://lapras.com/public/XWQGE21')">LAPRAS</Button></span>
  </div>
</template>

<script>
import Button from '@/components/parts/Button'

import pageTransition from '@/mixins/PageTransition'

export default {
  name: "Links",
  components: {
    Button
  },
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
    display: inline-block;
    width: 15%;
    margin: 32px 5% 0px 5%;
    padding: 8px 0px;
    font-size: 1.2em;
  }
}
</style>
