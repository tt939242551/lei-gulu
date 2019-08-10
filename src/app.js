import Chai from 'chai'
import sinon from 'sinon'
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

const expect = Chai.expect
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)


new Vue({
  el:"#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
})

{
const Constructor = Vue.extend(Button)
const vm = new Constructor({
  propsData:{
    icon:"setting"
  }
}).$mount() 
const useElement = vm.$el.querySelector("use")
expect(useElement.getAttribute("xlink:href")).to.equal("#i-setting")
vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:"setting",
      loading: true
    }
  }).$mount() 
  const useElement = vm.$el.querySelectorAll("use")
  expect(useElement.length).to.equal(1)
  expect(useElement[0].getAttribute("xlink:href")).to.equal("#i-loading")
  vm.$destroy()
}
{ 
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:"setting",
    }
  }).$mount(div) 
  const icon = vm.$el.querySelector("svg")
  expect(getComputedStyle(icon).order).to.equal("1")
  vm.$el.remove()
  vm.$destroy()
}
{ 
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:"setting",
      iconPosition: "right"
    }
  }).$mount(div) 
  const icon = vm.$el.querySelector("svg")
  expect(getComputedStyle(icon).order).to.equal("2")
  vm.$el.remove()
  vm.$destroy()
}
{ 
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:"setting",
    }
  }).$mount() 
  const callback = sinon.fake()
  vm.$on('click',callback)
  vm.$el.click()
  Chai.assert(callback.called)
}