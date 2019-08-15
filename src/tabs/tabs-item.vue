<template>
  <div class="tabs-item" @click="onClick" :class="{active}" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onClick () {
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: blue;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    >span{margin-left: .3em }
  }
</style>