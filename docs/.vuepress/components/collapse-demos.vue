<template>
  <div class="collapse">
    <section>
      <g-collapse>
        <g-collapse-item title="标题1" :name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" :name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" :name="3">内容3</g-collapse-item>
      </g-collapse>
    </section>
    <section>
      <g-collapse :selected="2" single>
        <g-collapse-item title="标题1" :name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" :name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" :name="3">内容3</g-collapse-item>
      </g-collapse>  
    </section>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src/collapse/collapse-item'

  export default {
    components: {
     'g-collapse': Collapse,
     'g-collapse-item': CollapseItem
    },
    data () {
      return {
        content: `
      <g-collapse>
        <g-collapse-item title="标题1" :name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" :name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" :name="3">内容3</g-collapse-item>
      </g-collapse>
      <g-collapse :selected="2" single>
        <g-collapse-item title="标题1" :name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" :name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" :name="3">内容3</g-collapse-item>
      </g-collapse>
      `
      }
    }
  }
</script>
<style scoped>
.collapse>section{
margin-top: 50px;
}
.collapse pre {
  margin-top: 50px;
}

</style>