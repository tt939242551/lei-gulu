<template>
  <div>
      <g-row gutter="20" >
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="4"
        ></g-col>
      </g-row>
      <div class="box">
        <g-row  gutter="20">
        <g-col class="item" span="6"  
        :ipad="{span:5}"
        :narrow-pc="{span:4}" 
        :pc="{span:3}"
        :wide-pc="{span:2}"
        ></g-col>
        <g-col class="item" span="17" 
        :ipad="{span:18}"
        :narrow-pc="{span:19}" 
        :pc="{span:20}"
        :wide-pc="{span:21}" offset="1"></g-col>
       </g-row>
      </div>    
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
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="1"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="2"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="3"
        ></g-col>
        <g-col class="item" span="24"
        :ipad="{span:12}" 
        :pc="{span:8}"
        offset="4"
        ></g-col>
      </g-row>
      <g-row  gutter="20">
        <g-col class="item" span="6"  
        :ipad="{span:5}"
        :narrow-pc="{span:4}" 
        :pc="{span:3}"
        :wide-pc="{span:2}"
        ></g-col>
        <g-col class="item" span="17" 
        :ipad="{span:18}"
        :narrow-pc="{span:19}" 
        :pc="{span:20}"
        :wide-pc="{span:21}" offset="1"></g-col>
      </g-row>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>
<style scoped>
.box{
  margin-top: 100px;
}
</style>