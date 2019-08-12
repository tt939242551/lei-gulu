<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >  
    <icon v-if="state===false&&state!==''" name="error" class="icon"></icon>
    <icon v-if="state===true" name="pass" class="icon"></icon>
    <div v-if="error" class="errorMessage" :class="{'under':errorPosition==='bottom'}">{{error}}</div>
    
  </div>
</template>
<script>
  import Icon from './icon'
  export default {
    components: {Icon},
    name: 'GuluInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      state: {
        type: Boolean,
      },
      error: {
        type: String
      },
      errorPosition: {
        type: String,
        default: 'right'
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper { font-size: $font-size; display: inline-flex;
    align-items: center;position: relative;
    > :not(:last-child) {margin-right: .5em; }
    > input { height: 32px; border: 1px solid $border-color;
     border-radius: 4px; padding: 0 8px; font-size: inherit;
      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color;
       outline: none; }
      &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
    }
    > .icon {font-size: 1.3em}
    &.error {
      > input { border-color: $red; }
    }
    .icon-error { fill: $red; }
    .errorMessage { color: $red; }
    > .under {position: absolute;top: $height+2px;}
  }
</style>