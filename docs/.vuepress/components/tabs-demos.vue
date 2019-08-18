<template>
  <div>
    <g-tabs :selected.sync="tabsName">
        {{tabsName}}
        <g-tabs-head>
          <template slot="actions">
            <g-button>设置</g-button>
          </template>
          <g-tabs-item :name="1">
            <g-icon name="setting"></g-icon><span>美女</span>
          </g-tabs-item>
          <g-tabs-item :name="2">
            <g-icon name="setting"></g-icon><span>财经</span>
          </g-tabs-item>
          <g-tabs-item :name="3">
            <g-icon name="setting"></g-icon><span>体育</span>
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane :name="1">
            美女相关资讯
          </g-tabs-pane>
          <g-tabs-pane :name="2">
            财经相关资讯
          </g-tabs-pane>
          <g-tabs-pane :name="3">
            体育相关资讯
          </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import Tabs from '../../../src/tabs/tabs'
  import TabsHead from '../../../src/tabs/tabs-head'
  import TabsBody from '../../../src/tabs/tabs-body'
  import TabsItem from '../../../src/tabs/tabs-item'
  import TabsPane from '../../../src/tabs/tabs-pane'
  import Icon from '../../../src/icon'

  export default {
    components: {
      'g-button': Button,
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-body': TabsBody,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane,
      'g-icon': Icon
    },
    data () {
      return {
        content: `
     <g-tabs :selected.sync="tabsName">
        {{tabsName}}
        <g-tabs-head>
          <template slot="actions">
            <g-button>设置</g-button>
          </template>
          <g-tabs-item :name="1">
            <g-icon name="setting"></g-icon><span>美女</span>
          </g-tabs-item>
          <g-tabs-item :name="2">
            <g-icon name="setting"></g-icon><span>财经</span>
          </g-tabs-item>
          <g-tabs-item :name="3">
            <g-icon name="setting"></g-icon><span>体育</span>
          </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane :name="1">
            美女相关资讯
          </g-tabs-pane>
          <g-tabs-pane :name="2">
            财经相关资讯
          </g-tabs-pane>
          <g-tabs-pane :name="3">
            体育相关资讯
          </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
      `.replace(/\t+| +/g, '').trim(),
      tabsName: 2,
      }
    }
  }
</script>