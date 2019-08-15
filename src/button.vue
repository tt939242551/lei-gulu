<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true,
  'disabled':disabled,'radius-icon':radiusIcon}"
    @click="buttonClick">
    <span v-if="number" class="b-number">{{number}}</span>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'GuluButton',
    data() {
      return {
        radiusIcon:!this.$slots.default
      }
    },
    components: {
      'g-icon': Icon
    },
    methods:{
      buttonClick(){
        if(!this.disabled) {
          this.$emit('click')
        }
      }
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      number: {
        type: Number
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
      $font-size: 14px;
      $button-bg: white;
      $button-active-bg: #eee;
      $button-disabled-bg: #d8d8d8;
      $color: #333;
      $border-color: #999;
      $border-color-hover: #666;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button { font-size: $font-size; height: 2.3em; 
    padding: 0 1em;
    border-radius: .3em; border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle; position: relative;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .b-number {background: #fe5151;border-radius: 50%;height: 1.4em;
    width: 1.4em;line-height: 1.4em;color: #fff;position: absolute;top:-0.7em;right: -0.7em;}
    > .content { order: 2; }
    > .icon { order: 1; margin-right: .3em;}
    &.icon-right {
      > .content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .3em;}
    }
    .loading {
      animation: spin 1.3s infinite linear;
    }
    &.radius-icon {height: 2em; padding: 0 0.2em;border-radius: 50%;
      > .icon {margin: .3em;}
    }
  }
  .disabled { background-color: $button-disabled-bg ;
    &:hover { border-color: $border-color; }
    &:active { background-color: $button-disabled-bg; }
  }
  
</style>