<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <transition name="content">
     <div class="content" v-if="open">
       <slot></slot>
     </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "GuluCollapseItem",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: [Number, String],
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted () {
      this.eventBus.$on('updates', (name) => {
        if ( name !==this.name ) {
          this.open = false
        } 
      })
    },
    methods: {
      toggle () {
           this.open = !this.open
           this.eventBus.$emit('update', this.name)
      },
    },
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  $content-height:38px;
  .collapseItem {
    > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px; display: flex; align-items: center; padding: 0 8px;
      background: lighten($grey, 8%);z-index: 2;position: relative;
    }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { display: flex; align-items: center; padding: 0 8px;height:  $content-height; 
    }
  }
   .content-leave-active ,.content-enter-active{
      transition: all .3s;
    }
   .content-leave-to ,.content-enter{
    margin-top: -$content-height;
  }
  
</style>