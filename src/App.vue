<template>
  <div id="app">
    <VueButton>
      按钮
    </VueButton>
    <VueButton :isLoading="isLoading1" @click="isLoading1 = !isLoading1" icon="settings">
      按钮
    </VueButton>
    <VueButton :is-loading="isLoading2" @click="isLoading2 = !isLoading2" icon="settings" icon-position="right">
      按钮
    </VueButton>
    <VueButton :is-loading="isLoading3" @click="isLoading3 = !isLoading3" icon="download" icon-position="right">
      下载
    </VueButton>
    <vue-button-group>
      <!-- <div>非 VueButton 标签 </div> -->
      <VueButton icon="left">上一页</VueButton>
      <VueButton icon="">更多</VueButton>
      <VueButton icon="right" icon-position="right">下一页</VueButton>
    </vue-button-group>
  </div>
</template>

<script>
import Vue from 'vue'
import VueButton from './components/vuebutton/VueButton.vue'
import VueButtonGroup from './components/ButtonGroup/ButtonGroup.vue'

import VueButton2 from './components/vuebutton/VueButton'
import VueIcon from './components/icon/Icon'
// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('v-button', VueButton2)
Vue.component('v-icon', VueIcon)
Vue.component('v-button-group', VueButtonGroup)

chai.use(spies)
const expect = chai.expect

// 测试 icon
{
  const Constructor = Vue.extend(VueButton2)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    },
  })
  // button.$mount('#test')
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  // console.log(userElement)
  /*
  // Uncaught AssertionError
  // expect(useElement.getAttribute('xlink:href')).to.equal('settings')
  */
  // 可以通过的测试用例
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
}

// 测试 isLoading
{
  const Constructor = Vue.extend(VueButton2)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      isLoading: true,
    },
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  // Uncaught AssertionError
  // expect(href).to.eq('#i-settings')
  expect(href).to.eq('#i-loading')
}

// 测试 iconPosition order 默认为 1 左边 ；2 右边
{
  const Constructor = Vue.extend(VueButton2)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    },
  })
  // button 必须被加载 渲染到页面中，CSS加载，才能识别 order，否则 expect(order).to.eq(‘’)为空
  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  // const order = window.getComputedStyle(svg).order
  // ES6+ 解构赋值
  const {order} = window.getComputedStyle(svg)
  // 错误断言
  // expect(order).to.eq(1)
  // 正确断言
  //CSS 所有属性值都是字符串
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

// 测试 iconPosition order 为 2 右边
{
  const Constructor = Vue.extend(VueButton2)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right',
    },
  })
  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const {order} = window.getComputedStyle(svg)
  // 错误断言
  // expect(order).to.eq("1")
  // 正确断言
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

// 测试 按钮触发 click // mock 使用 chai.spies 监听函数
{
  const Constructor = Vue.extend(VueButton2)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    },
  })
  vm.$mount()
  // console.log(chai.spy)
  const spy = chai.spy(() => {
    console.log('spy OK')
  })
  vm.$on('click', spy)
  const button = vm.$el
  button.click()
  // 期望 函数被执行
  // 错误断言
  // 正确断言
  expect(spy).to.have.been.called()
}

export default {
  name: 'App',
  data() {
    return {
      isLoading1: false,
      isLoading2: true,
      isLoading3: false,
    }
  },
  components: {
    VueButton,
    VueButtonGroup
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  }
</style>
