<template>
  <div>
    <g-input></g-input>
    <g-input  error="密码太短"></g-input>
    <g-input :state="true"></g-input>
    <g-input error-position="bottom" :state="false" error="密码太短"></g-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'

  export default {
    components: {
      'g-input': Input
    },
    data () {
      return {
        content: `
  
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>