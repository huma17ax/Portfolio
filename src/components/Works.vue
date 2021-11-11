<template>
  <div ref="wrapper" class="wrapper">
    <div :class="['detail', {'hidden': isHiddenDetail, 'transparent': isTransparentDetail}]">
      <div class="info" v-if="selectedWork">
        <button class="close" @click="close"><img src="@/assets/icon/close.svg" style="width:100%;height:100%;"></button>
        <div class="text-info">
          <div class="title">{{selectedWork.title}}</div>
          時期・期間：
          <div class="period">{{selectedWork.period}}</div>
          使用技術：
          <div class="tech">{{selectedWork.tech}}</div>
        </div>
        <img class="image" :src="require('@/assets/image/'+selectedWork.image)">
      </div>
      <div class="description" v-if="selectedWork">{{selectedWork.desc}}</div>
    </div>
    <div class="horizon">Works</div>
    <!-- <transition-group name="list-complete" class="container" tag="div"> -->
    <div class="container">
      <div class="content" v-for="(work, idx) in works" :key="work.id" @click="select(idx)">
        <div class="frame">
          <img class="image" :src="require('@/assets/image/'+work.image)">
          <div class="title">{{work.title}}</div>
          <div class="period">{{work.period}}</div>
          <div class="tag">{{work.tag}}</div>
        </div>
      </div>
    </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import worksData from '@/assets/json/works.json'

export default {
  name: "Works",
  data () {
    return {
      works: [],
      selectedWork: undefined,
      isHiddenDetail: true,
      isTransparentDetail: false
    }
  },
  mounted () {
    this.works = worksData.map((item, idx) => {item.id=idx; return item})
  },
  watch: {
    works () {
      console.log(this.works)
    }
  },
  computed: {
    // workList () {
    //   return this.works.filter((item) => item != this.selectedWork)
    // }
  },
  methods: {
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
  height: 100%;
  margin: auto;
  overflow-y: scroll;

  .detail {
    transition: all 1s, opacity 0.5s ease-in;
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
        padding-top: 32px;

        .title {
          padding-bottom: 16px;
          font-size: 3em;
        }
        .period {
          margin-left: 16px;
          margin-bottom: 8px;
          font-size: 1.1em;
        }
        .tech {
          margin-left: 16px;
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

  .horizon {
    display: flex;
    align-items: center;
    font-size: 1.3em;
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

  .container {
    position: relative;
    
    .content {
      position: relative;
      width: 25%;
      display: inline-block;
      transition: all 1s;
      &::before {
        display: block;
        content: "";
        padding-top: 100%;
      }
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
          color: #222222;
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

// .list-enter, .list-leave-to {
//   opacity: 0;
// }
// .list-leave-active {
//   position: absolute !important;
// }

</style>
