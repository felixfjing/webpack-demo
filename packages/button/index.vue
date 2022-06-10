<template>
  <button :class="b()">
    <slot></slot>
  </button>
</template>

<script>
import create from '../utils/create'

export default create({
  name: 'button',

  components: {},

  props: {},

  data() {
    return {}
  },

  mounted() {},

  methods: {}
})
</script>

<style lang="less">
@import './style.less';
</style>
