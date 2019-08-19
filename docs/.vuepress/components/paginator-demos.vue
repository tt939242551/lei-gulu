<template>
  <div class="paginator">
    <section><g-paginator></g-paginator></section>
    <g-paginator pagebtns="6" pages="50"></g-paginator>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Paginator from '../../../src/paginator'

  export default {
    components: {
      'g-paginator': Paginator
    },
    data () {
      return {
        content: `
       <g-paginator></g-paginator>
       <g-paginator pagebtns="6" pages="50"></g-paginator>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>
<style  scoped>
.paginator > section{
margin: 70px 0 40px;
}
.paginator pre {
  margin-top: 70px;
}

</style>
