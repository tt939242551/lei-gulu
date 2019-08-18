<template>
  <div>
    <g-paginator></g-paginator>
    <g-paginator pagebtns="7" pages="50"></g-paginator>
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
       <g-paginator pagebtns="7" pages="50"></g-paginator>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>