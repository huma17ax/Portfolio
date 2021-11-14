<template>
  <div class="wrapper">
    <div :class="['identity', {'clear': clearPage}]">
      <div>
        <div class="name">関谷 悠冬</div>
        <div class="belong">千葉大学大学院 融合理工学府 数学情報科学専攻</div>
      </div>
    </div>
    <div class="content" :style="clearStyle(idx)" v-for="(item, idx) in items" :key="idx">
      <h2>{{item.title}}</h2>
      <table>
        <tr v-for="data in item.history" v-bind:key="data.id">
          <th>{{ data.period }}</th>
          <td class="event">
            {{data.content}}
            <img class="link-icon" src="@/assets/icon/open-in-new.svg" @click="open(data.link)" v-if="data.link">
          </td>
        </tr>
        <tr v-if="idx==0">
          <th>{{ nowDateStr }}</th>
          <td>現在</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import careerData from "@/assets/json/history.json"
import qualifications from "@/assets/json/qualifications.json"
import research from "@/assets/json/research.json"

import pageTransition from '@/mixins/PageTransition'

export default {
  name: "About",
  mixins: [
    pageTransition
  ],
  data () {
    return {
      items: [
        {title: '経歴', history: careerData},
        {title: '資格・検定', history: qualifications},
        {title: '発表・論文', history: research}
      ],
    }
  },
  computed: {
    nowDateStr () {
      const date = new Date()
      return date.getFullYear() + '年' + date.getMonth() + '月'
    }
  },
  methods: {
    clearStyle (idx) {
      if (this.clearPage) {
        return {
          transform: 'translateX(-' + (100 + 50*idx) + 'px)',
          opacity: '0',
          'transition-delay': 0.2-(idx/this.items.length*0.2) + 's'
        }
      }
      else {
        return {
          'transition-delay': (idx/this.items.length*0.2) + 's'
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
  overflow-y: auto;
  padding-right: 16px;
}

.identity {
  display: flex;
  height: 75px;
  position: relative;
  margin: 8px 0px 16px 0px;
  transition: all 0.3s;
  .icon {
    width: 75px;
    border-radius: 20px;
  }
  .name {
    position: relative;
    font-size: 2em;
    top: 10px;
    left: 10px;
  }
  .belong {
    position: relative;
    font-size: 1em;
    top: 2px;
    left: 10px;
  }
}

.clear {
  opacity: 0;
  transition-delay: 0.2s;
}

.content {
  margin-bottom: 20px;
  transition: all 0.3s;

  .event {
    white-space: pre-wrap;
    word-wrap: break-word;

    .link-icon {
      width: 16px;
      height: 16px;
      color: $main-color;
      cursor: pointer;
    }
  }
}

h2 {
  z-index: 2;
  position: sticky;
  top: 0px;
  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
  margin: 0;
}

table {
  width: 100%;
  border: 0px;
  border-collapse: collapse;
  border-spacing: 0;
}

tr {
  height: 40px;
  border-bottom: solid 2px #ffffff;
}

th {
  padding-left: 20px;
  text-align: left;
  background-color: $sub-color;
  width: 150px;
  position: relative;
  color: black;
}

th::after {
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top: calc(50% - 10px);
  right: -10px;
  border-left: 10px solid $sub-color;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

td {
  background-color: #d8d8d8;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
}
</style>
