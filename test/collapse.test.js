const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.exist
  })

  it('接受 selected 属性', (done) => {

    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-collapse :selected="2">
          <g-collapse-item title="标题1" :name="1"><span id="content-1">1</span></g-collapse-item>
          <g-collapse-item title="标题2" :name="2"><span id="content-2">2</span></g-collapse-item>
          <g-collapse-item title="标题3" :name="3"><span id="content-3">3</span></g-collapse-item>
        </g-collapse>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.not.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接受 single 属性', (done) => {

    Vue.component('g-collapse', Collapse)
    Vue.component('g-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-collapse :selected="1" single>
          <g-collapse-item title="标题1" :name="1"><span id="content-1">1</span></g-collapse-item>
          <g-collapse-item title="标题2" :name="2"><span id="content-2">2</span></g-collapse-item>
          <g-collapse-item title="标题3" :name="3"><span id="content-3">3</span></g-collapse-item>
        </g-collapse>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      },500)
    })
  })
})