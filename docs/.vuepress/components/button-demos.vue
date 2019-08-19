<template>
  <div class="buttons">
    <g-button :number="9">按钮</g-button>
    <g-button :number="6" icon="setting"></g-button>
    <g-button disabled>按钮</g-button>
    <g-button icon="setting">按钮</g-button>
    <g-button icon="setting" icon-position="right">按钮</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";

export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      content: `
      <g-button :number="9">
        按钮
      </g-button>
      <g-button :number="6" icon="setting">
      </g-button>
      <g-button disabled>
        按钮
      </g-button>
      <g-button icon="setting">
        按钮
      </g-button>
      <g-button icon="setting" icon-position="right">
        按钮
      </g-button>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
      `       
    };
  }
};
</script>
<style scoped>
*,*::before,*::after{box-sizing: border-box;}
.buttons{
  margin: 40px 0;
}
.buttons>button{
  margin-right: 20px;
}
.buttons > pre{
  margin: 40px 0;
}
</style>