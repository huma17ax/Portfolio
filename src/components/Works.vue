<template>
  <div ref="wrapper" class="wrapper">
    <div :class="['detail', {'hidden': isHiddenDetail, 'transparent': (isTransparentDetail || clearPage)}]">
      <div class="info" v-if="selectedWork">
        <button class="close" @click="close"><img src="@/assets/icon/close.svg" style="width:100%;height:100%;"></button>
        <div class="text-info">
          <div class="title">{{selectedWork.title}}</div>
          <!-- 開発/リリース時期： -->
          <div class="period">
            {{selectedWork.period}}
            <span class="develop" :style="developScale(selectedWork.is_team).color">{{developScale(selectedWork.is_team).text}}</span>
          </div>
          <!-- 使用技術： -->
          <div class="tech">{{selectedWork.tech}}</div>
          <div>
            <Button class="link" v-for="(url, idx) in selectedWork.link" :key="idx" @click.native="open(url)">
              {{linkStr(url)}}
            </Button>
          </div>
        </div>
        <img class="image" :src="require('@/assets/image/'+selectedWork.image)">
      </div>
      <div class="description" v-if="selectedWork">{{selectedWork.desc}}</div>
    </div>
    <Horizon :class="{'clear': clearPage}">Works</Horizon>
    <div :class="['order', {'clear': clearPage}]">
      <button :class="['option', {'right': idx==0, 'selected': sortOrder==opt.order}]"
        v-for="(opt, idx) in orderOptions" :key="idx" @click="setOrder(opt.order)">
        {{opt.name}}
      </button>
    </div>
    <transition-group name="works-list" class="container" tag="div">
      <div class="content" v-for="(work, idx) in workList" :key="work.id" @click="select(idx)">
        <div class="trans-frame" :style="clearStyle(idx)">
          <div class="frame">
            <img class="image" :src="require('@/assets/image/'+work.image)">
            <div class="title">{{work.title}}</div>
            <div class="period">{{work.period}}</div>
            <div class="tag">{{work.tag}}</div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import worksData from '@/assets/json/works.json'

import Button from '@/components/parts/Button'
import Horizon from '@/components/parts/Horizon'

import pageTransition from '@/mixins/PageTransition'

export default {
  name: "Works",
  components: {
    Button,
    Horizon
  },
  mixins: [
    pageTransition
  ],
  data () {
    return {
      works: [],
      selectedWork: undefined,
      isHiddenDetail: true,
      isTransparentDetail: false,
      sortOrder: 'time',
      orderOptions: [
        {order: 'time', name: '時系列順'},
        {order: 'tag', name: 'タグ別'}
      ],
    }
  },
  mounted () {
    this.works = worksData.map((item, idx) => {item.id=idx; return item})
  },
  computed: {
    workList () {
      if (this.sortOrder == 'time') return this.works
      else if (this.sortOrder == 'tag') {
        return this.works.slice().sort((a,b) => {
          return (a.tag == b.tag ? 0 : (a.tag < b.tag ? 1 : -1))
        })
      }
      else return this.works
    }
  },
  methods: {
    clearStyle (idx) {
      if (this.clearPage) {
        return {
          opacity: '0',
          'transition-delay': 0.2-(idx/this.works.length*0.2) + 's'
        }
      }
      else {
        return {
          'transition-delay': (idx/this.works.length*0.2) + 's'
        }
      }
    },
    developScale (isTeam) {
      if (isTeam) return {
        'text': 'チーム開発',
        'color': 'background-color: #d1ffd1;'
      }
      else return {
        'text': '個人開発',
        'color': 'background-color: #ffead6;'
      }
    },
    linkStr (url) {
      if (url.indexOf('github.com') != -1) return 'GitHub'
      else return 'Link'
    },
    setOrder (order) {
      this.sortOrder = order
    },
    open (url) {
      window.open(url)
    },
    select (idx) {
      this.$refs.wrapper.scrollTo({top: 0, behavior: 'smooth'})
      let delay = 0;
      if (this.selectedWork) delay = 500;
      this.isHiddenDetail = false
      this.isTransparentDetail = true
      setTimeout(() => {
        this.selectedWork = this.works[idx]
        this.isTransparentDetail = false
      }, delay);
    },
    close () {
      this.isHiddenDetail = true
      this.isTransparentDetail = true
      setTimeout(() => {
        this.selectedWork = undefined
      }, 1000);
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
  overflow-y: scroll;
  padding-right: 8px;

  .detail {
    transition: all 1s ease, opacity 0.5s ease-in;
    height: 100%;

    .info {
      display: flex;
      overflow-y: hidden;
      height: 300px;
      .close {
        background-color: white;
        border: none;
        margin-top: 8px;
        height: 32px;
        width: 32px;
        border-radius: 16px;
        cursor: pointer;
        &:hover {
          background: #EEEEEE;
        }
      }
      .text-info {
        width: calc(50% - 48px);
        height: calc(100% - 32px);
        padding-left: 16px;
        padding-top: 48px;

        .title {
          padding-bottom: 8px;
          font-size: 2.8em;
        }
        .period {
          margin-left: 16px;
          margin-bottom: 8px;
          font-size: 1.1em;
          .develop {
            margin-left: 32px;
            padding: 0px 8px;
          }
        }
        .tech {
          margin-left: 16px;
          margin-bottom: 16px;
          font-size: 1.1em;
        }
        .link {
          margin: 12px;
          padding-top: 4px;
          padding-bottom: 4px;
          font-size: 1.1em;
        }
      }

      .image {
        width: calc(50% - 16px);
        height: calc(100% - 16px);
        object-fit: cover;
        border-radius: 5%;
        padding: 8px;
      }
    }
    .description {
      height: calc(100% - 300px);
      padding-top: 16px;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-y: hidden;
    }
  }
  .hidden {
    opacity: 0;
    height: 0px;
    overflow-y: hidden;
  }
  .transparent {
    opacity: 0;
  }

  .order {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: -22px;
    margin-bottom: 8px;
    transition: opacity 0.3s;
    .option {
      display: block;
      margin-right: 8px;
      border: solid 2px $main-color;
      border-radius: 5px;
      background-color: white;
      font-weight: bolder;
      font-size: 1.05em;
      cursor: pointer;
      transition: all 0.2s;
    }
    .right {
      margin-left: auto;
    }
    .selected {
      background-color: $main-color;
      color: white;
    }
  }
  
  .clear {
    opacity: 0;
    transition-delay: 0.2s;
  }

  .container {
    position: relative;
    
    .content {
      position: relative;
      width: 25%;
      display: inline-block;
      &::before {
        display: block;
        content: "";
        padding-top: 100%;
      }
      .trans-frame {
        transition: all 1s, opacity 0.3s;
        .frame {
          position: absolute;
          top: 2.5%;
          left: 2.5%;
          width: 95%;
          height: 95%;
          transition: top 0.2s, left 0.2s, width 0.2s, height 0.2s;
          cursor: pointer;
          background: white;
          &:hover {
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
            .image {
              opacity: 0.2;
            }
            .title {
              display: inherit;
            }
            .period {
              display: inherit;
            }
          }
          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.2s;
          }
          .title {
            display: none;
            position: absolute;
            top: 30%;
            width: 100%;
            font-size: 1.5em;
            text-align: center;
            font-weight: bolder;
          }
          .period {
            display: none;
            position: absolute;
            top: 50%;
            width: 100%;
            text-align: center;
            font-weight: bolder;
          }
          .tag {
            position: absolute;
            top: 0;
            left: 0;
            padding-left: 16px;
            padding-right: 4px;
            height: 24px;
            color: black;
            background: $sub-color;
            font-weight: bolder;
            &::before {
              position: absolute;
              top: -2px;
              right: -8px;
              width: 0;
              height: 0;
              content: '';
              border-width: 14px 0px 14px 8px;
              border-style: solid;
              border-color: transparent transparent transparent $sub-color;
              border-radius: 4px;
            }
            &::after {
              position: absolute;
              top: 10px;
              left: 5px;
              width: 6px;
              height: 6px;
              background-color: white;
              content: '';
              border-radius: 10px;
            }
          }
        }
      }
    }
  }

}

.works-list-move {
  transition: transform 1s;
}

</style>
