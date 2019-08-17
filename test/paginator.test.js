const expect = chai.expect;
import Vue from 'vue'
import Paginator from '../src/paginator'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Paginator', () => {

  it('存在.', () => {
    expect(Paginator).to.exist
  })
  const Constructor = Vue.extend(Paginator)
  it('接受 pagebtns 属性', (done) => {
    const vm = new Constructor({
      propsData: {
        pagebtns: 8,
      }
    }).$mount()
    vm.$nextTick(()=>{
      expect(vm.pagebtnlist.length).to.eq(8) 
      done() 
    })
    vm.$el.remove()
    vm.$destroy()
  })
  it('接受 pages 属性', (done) => {
    const vm = new Constructor({
      propsData: {
        pages: 50,
      }
    }).$mount()
    let childrenList = vm.$el.children
    childrenList[childrenList.length-1].click()
    vm.$nextTick(()=>{
      expect(vm.currentPage).to.eq(50)
      done() 
    })
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 "首页,末页" 触发 click 事件', (done) => {
      const vm = new Constructor({
        propsData: {
          pages: 50,
        }
      }).$mount()
      vm.$nextTick(()=>{
        let childrenList = vm.$el.children
        childrenList[childrenList.length-1].click()
        expect(vm.pagebtnlist.pop()).to.eq(50)
        vm.$el.children[0].click()
        expect(vm.currentPage).to.eq(1)
        done() 
      })
      vm.$el.remove()
      vm.$destroy()
  })
  it('点击 "上一页,下一页" 触发 click 事件', (done) => {
    const vm = new Constructor({
    }).$mount()
    vm.$nextTick(()=>{
      vm.$el.children[vm.$el.children.length-2].click()
      expect(vm.currentPage).to.eq(2)
      vm.$el.children[1].click()
      expect(vm.currentPage).to.eq(1)
      done() 
    })
    vm.$el.remove()
    vm.$destroy()
  })
})