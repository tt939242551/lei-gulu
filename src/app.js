import Input from './input'
import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)

new Vue({
  el:"#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
})
