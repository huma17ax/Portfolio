<template>
    <div
    class="button-item"
    :style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'mybutton',
  data: function () {
    return {
      baseColor: '#9999FF',
      base2Color: '#7070FF',
      gradColor: '#4040FF'
    }
  },
  methods: {
  },
  computed: {
    styles () {
      return {
        '--base-color': this.baseColor,
        '--base2-color': this.base2Color,
        '--grad-color': this.gradColor
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.button-item {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    line-height: 50px;
    text-align: center;

    --base-color: white;
    --base2-color: white;
    --grad-color: white;

    background-color: var(--base-color);
}

.button-item:hover {
    transform: scale(1.02);
    background: linear-gradient(to right,var(--base2-color),var(--base2-color) 30%, var(--grad-color) 50%, var(--base2-color) 70%, var(--base2-color));
    background-size: 500% 100%;
    animation-name: animation-hover;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

@keyframes animation-hover {
    0% {background-position: 100% 0%}
    100% {background-position: 0% 0%}
}

</style>
