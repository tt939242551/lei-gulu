<template>
  <div>
   
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Layout from '../../../src/layout/layout'
  import Header from '../../../src/layout/header'
  import Sider from '../../../src/layout/sider'
  import Content from '../../../src/layout/content'
  import Footer from '../../../src/layout/footer'

  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-sider': Sider
    },
    data () {
      return {
        content: `
  
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>