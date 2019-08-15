const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
})