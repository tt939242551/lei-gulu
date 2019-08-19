<template>
  <div class="grid">
      <g-row gutter="20" >
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        >1</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        >2</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        >3</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        >4</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        >5</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        >6</g-col>
      </g-row>   
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Row from '../../../src/row'
  import Col from '../../../src/col'

  export default {
    components: {
     'g-row': Row,
     'g-col': Col
    },
    data () {
      return {
        content: `
      <g-row gutter="20" >
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        >1</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        >2</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        >3</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        >4</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        >5</g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        >6</g-col>
      </g-row>
      `
      }
    }
  }
</script>
<style>
.grid div{
  border: 1px solid red;
}
.grid{
  margin: 70px 0;

}
.grid pre {
  margin-top: 80px;
}
</style>