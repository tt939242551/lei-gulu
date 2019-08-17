import Input from './input'
import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Popover from './popover'
import Paginator from './paginator'
import Address from './address/address'

Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-icon', Icon)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-paginator', Paginator)
Vue.component('g-address', Address)
new Vue({
  el:"#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    page: 1,
    address: null,
  },
  methods:{
    xxx(page){
      this.page = page
    },
    yyy(data){
      this.address = data
    }
  }
})
