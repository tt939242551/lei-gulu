const expect = chai.expect;
import Vue from 'vue'
import Address from '../src/address/address'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Address', () => {

  it('存在.', () => {
    expect(Address).to.exist
  })
  const Constructor = Vue.extend(Address)
  xit('接受 defaultAddress 属性', (done) => {
    const vm = new Constructor({
      propsData: {
        types: "edit",
        defaultAddress: {
          provinceValue: 110000,
          cityValue: 110100,
          districtValue: 110101,
        }
      }
    }).$mount()
    setTimeout(() => {
      console.log(vm.$data)
      expect(vm.provinceName).to.eq("北京市")
      expect(vm.cityName).to.eq("市辖区")
      expect(vm.districtName).to.eq("东城区")
      done()
    },200)
    vm.$el.remove()
    vm.$destroy()
  })
  xit('选择省自动刷新市列表', (done) => {
    const vm = new Constructor({
    }).$mount()
    vm.provinceValue = 420000
    setTimeout(() => {
      console.log(vm.cityList)
      expect(vm.cityList[0].label).to.equal("武汉市")
      done()
    },200)
    vm.$el.remove()
    vm.$destroy()
  })
  xit('选择市自动刷新区列表', (done) => {
    const vm = new Constructor({
    }).$mount()
    vm.cityValue = 420100
    vm.$nextTick(() => {
      expect(vm.districtList[1].label).to.equal("江岸区")
      done()
    })
    vm.$el.remove()
    vm.$destroy()
  })
})