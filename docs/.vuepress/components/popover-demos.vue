<template>
  <div class="popover">
     <g-popover position="top">
      <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>hover我</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>hover我</g-button>
    </g-popover>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button.vue'
  import Popover from '../../../src/popover'

  export default {
    components: {
      'g-button': Button,
      'g-popover': Popover
    },
    data () {
      return {
        content: `
    <g-popover position="top">
      <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>hover我</g-button>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <g-button>hover我</g-button>
    </g-popover>
    `
      }
    }
  }
</script>
<style scoped>
.popover{
margin-top: 40px;
}
.popover pre {
  margin-top: 80px;
}

</style>