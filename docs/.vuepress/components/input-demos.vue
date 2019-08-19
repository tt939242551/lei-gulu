<template>
  <div class="input">
    <div><g-input></g-input></div>
    <div><g-input  error="密码太短"></g-input></div>
    <div><g-input :state="true"></g-input></div>
    <div><g-input error-position="bottom" error="密码太短"></g-input></div> 
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
        <g-input></g-input>
        <g-input  error="密码太短"></g-input>
        <g-input :state="true"></g-input>
        <g-input error-position="bottom" error="密码太短"></g-input>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>
<style scoped>
.input{
  margin-top: 60px;
}
.input>div{
  margin: 30px 0;
}
pre{
  margin-top: 80px;
}

</style>