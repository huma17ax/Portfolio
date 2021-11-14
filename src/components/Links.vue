<template>
  <div class="wrapper">
    <Horizon :class="{'clear': clearPage}">Links</Horizon>
    <span :style="clearStyle(0)"><Button class="item" @click="open('https://github.com/huma17ax')">GitHub</Button></span>
    <span :style="clearStyle(1)"><Button class="item" @click="open('https://qiita.com/huma17ax')">Qiita</Button></span>
    <span :style="clearStyle(2)"><Button class="item" @click="open('https://atcoder.jp/users/huma17')">AtCoder</Button></span>
    <span :style="clearStyle(3)"><Button class="item" @click="open('https://lapras.com/public/XWQGE21')">LAPRAS</Button></span>
  </div>
</template>

<script>
import Button from '@/components/parts/Button'
import Horizon from '@/components/parts/Horizon'

import pageTransition from '@/mixins/PageTransition'

export default {
  name: "Links",
  components: {
    Button,
    Horizon
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
