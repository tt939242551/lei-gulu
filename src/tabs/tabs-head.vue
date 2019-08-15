<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted () {
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, height, top, left} = vm.$el.getBoundingClientRect()
        let widths = width - 32
        let lefts = left - 4
        this.$refs.line.style.width = `${widths}px`
        this.$refs.line.style.left = `${lefts}px`
      })
    }
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 300ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
      > button{font-size: 12px,
      }
    }
  }
</style>