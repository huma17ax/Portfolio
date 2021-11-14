<template>
  <div class="wrapper">
    <div :class="['horizon', {'clear': clearPage}]">Skills</div>
    <div class="content" :style="clearStyle(idx)" v-for="(skill, idx) in skills" :key="idx">
      <div class="title">{{skill.title}}</div>
      <div class="tech">
        <span>{{techStr(skill.tech)}}</span>
        <span style="color: #939393;">{{subTechStr(skill.sub_tech)}}</span>
      </div>
      <div class="desc">{{skill.desc}}</div>
    </div>
  </div>
</template>

<script>
import skillData from '@/assets/json/skills.json'

import pageTransition from '@/mixins/PageTransition'

export default {
  name: "Skills",
  mixins: [
    pageTransition
  ],
  data () {
    return {
      skills: skillData
    }
  },
  methods: {
    techStr (tech) {
      return tech.join(', ')
    },
    subTechStr (subTech) {
      if (subTech.length == 0) return ''
      return ', ' + subTech.join(', ')
    },
    clearStyle (idx) {
      if (this.clearPage) {
        return {
          transform: 'translateX(-' + (100 + 50*idx) + 'px)',
          opacity: '0',
          'transition-delay': 0.2-(idx/this.skills.length*0.2) + 's'
        }
      }
      else {
        return {
          'transition-delay': (idx/this.skills.length*0.2) + 's'
        }
      }
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
  padding-right: 8px;

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

  .content {
    margin-bottom: 24px;
    transition: all 0.3s;
    .title {
      font-size: 1.5em;
      font-weight: bolder;
    }
    .tech {
      margin-left: 16px;
      font-weight: bolder;
    }
    .desc {
      white-space: pre-wrap;
      word-wrap: break-word;

      margin-top: 8px;
      margin-left: 16px;
    }
  }
}

</style>
