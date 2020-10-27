import Vue from 'vue'
import App from './App.vue'

/*
import VueButton from './components/vuebutton/VueButton'
import VueIcon from './components/icon/Icon'
import ButtonGroup from './components/ButtonGroup/ButtonGroup.vue'

Vue.component('v-button', VueButton)
Vue.component('v-icon', VueIcon)
Vue.component('v-button-group', ButtonGroup)
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'