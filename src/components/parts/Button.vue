<template>
  <button class='button'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.button {
  position: relative;
  text-align: center;
  cursor: pointer;
  background-color: white;
  border: none;
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
</style>
