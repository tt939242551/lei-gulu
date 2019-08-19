<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>      
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'GuluSider',
    data () {
      return {
        visible: true,
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: -10px;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -150px;
  }
</style>