<template>
  <div>
    <div class="wrapper">
      <img class="icon" src="@/assets/image/icon.jpg">
      <button :class="['button', {'selected': isSelected(page.path)}]" v-for="(page, idx) in pages" :key="idx" v-on:click="goPage(page.path)">
        {{page.title}}
      </button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'


export default {
  name: 'app',
  components: {
  },
  data: function () {
    return {
      pages: [
        {path:'/', title:'About'},
        {path:'/Skills', title:'Skills'},
        {path:'/Works', title:'Works'},
        {path:'/Links', title:'Links'}
      ]
    }
  },
  computed: {
    ...mapState('global', ['isPageTransition'])
  },
  methods: {
    goPage (path) {
      if (this.$route.path !== path && !this.isPageTransition) this.$router.push(path)
    },
    isSelected (path) {
      return (this.$route.path == path)
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  width: calc(100% - 24px);
  margin-top: 16px;
}


.icon {
  width: calc(100% - 8px);
  border-radius: 8px;
  margin: 0px 4px;
}

.button {
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  background-color: white;
  border: solid 2px $main-color;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bolder;
  cursor: pointer;
  color: #2c3e50;
  transition: all 0.2s ease;

  &:hover {
    background-color: $sub-color;
    border: solid 2px $sub-color;
    color: black;
  }
}

.selected {
  background-color: $main-color;
  border: solid 2px $main-color;
  cursor: default;
  color: white;
  transition: all 0.2s ease;
  &:hover {
    background-color: $main-color;
    border: solid 2px $main-color;
    color: white;
  }
}
</style>