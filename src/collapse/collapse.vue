<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "GuluCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type:[Number, String]
      }
    },
    data () {
      return {
        eventBus: new Vue(),
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      this.eventBus.$on('update', (name) => {
        if (this.single) {
           this.eventBus.$emit('updates', name)
        }    
      })
      this.$children.forEach((vm) => {
        if(vm.name===this.selected){
          vm.open = true
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>