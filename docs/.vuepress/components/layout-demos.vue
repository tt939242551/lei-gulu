<template>
  <div class="layout">
    <section>
      <g-layout>
        <g-header>header</g-header>
        <g-layout>
          <g-sider>sider</g-sider>
          <g-content>content</g-content>
        </g-layout>
        <g-footer>footer</g-footer>
      </g-layout>
    </section>    
    <section>
      <g-layout>
        <g-sider>sider</g-sider>     
        <g-layout>
          <g-header>header</g-header>
          <g-content>content</g-content>
          <g-footer>footer</g-footer>
        </g-layout>
      </g-layout>
    </section>
    
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
      <g-layout>
        <g-header>header</g-header>
        <g-layout>
          <g-sider>sider</g-sider>
          <g-content>content</g-content>
        </g-layout>
        <g-footer>footer</g-footer>
      </g-layout>
      <g-layout>
        <g-sider>sider</g-sider>     
        <g-layout>
          <g-header>header</g-header>
          <g-content>content</g-content>
          <g-footer>footer</g-footer>
        </g-layout>
      </g-layout>
      `
      }
    }
  }
</script>
<style>
.layout div{
  border: 1px solid red;
}
.layout>section{
margin-top: 50px;
}
.layout pre {
  margin-top: 50px;
}
</style>