<template>
  <div class='horizon'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Horizon',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
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
</style>
