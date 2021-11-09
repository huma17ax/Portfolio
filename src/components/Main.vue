<template>
    <div>
        <h1 class="title">Welcome to MyPage</h1>
        <div class="button-container">
            <myButton
            class="button-item"
            v-on:click.native="goPage('/AboutMe')">About me</myButton>
            <myButton
            class="button-item"
            v-on:click.native="goPage('/Activity')">Activity</myButton>
            <myButton
            class="button-item"
            v-on:click.native="goPage('/Product')">Product</myButton>
            <myButton
            class="button-item"
            v-on:click.native="goPage('/Contact')">Contact</myButton>
        </div>
    </div>
</template>

<script>
import myButton from '@/components/Button'

export default {
  name: 'toppage',
  components: {
    myButton
  },
  methods: {
    goPage: function (path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style lang='scss' scoped>
h1 {
    padding-top: calc(50vh - 300px);
    font-size: 60px;
}

.title {
    text-align: center;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    margin: auto;
}

.button-item {
    margin: 20px;
}
</style>
