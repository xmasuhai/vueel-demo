import Vue from 'vue'
import App from './App.vue'

/*
import VueButton from './components/vuebutton/VueButton'
import VueIcon from './components/icon/Icon'

Vue.component('v-button', VueButton)
Vue.component('v-icon', VueIcon)
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
