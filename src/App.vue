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
import ButtonGroup from './components/ButtonGroup/ButtonGroup.vue'

Vue.component('v-button', VueButton2)
Vue.component('v-icon', VueIcon)
Vue.component('v-button-group', ButtonGroup)


// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect

{
  const Constructor = Vue.extend(VueButton2)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    },
  })
  // button.$mount('#test')
  button.$mount()
  const useElement = button.$el.querySelector('use')
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
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      isLoading: true,
    },
  })
  button.$mount()
  const useElement = button.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  // Uncaught AssertionError
  // expect(href).to.eq('#i-settings')
  expect(href).to.eq('#i-loading')
}

// 测试 iconPosition order
{
  const Constructor = Vue.extend(VueButton2)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
    },
  })
  // button 必须被加载并且渲染到页面中，才能识别 order
  button.$mount()
  const svg = button.$el.querySelector('svg')
  // const order = window.getComputedStyle(svg).order
  // ES6+
  const {order} = window.getComputedStyle(svg)
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
