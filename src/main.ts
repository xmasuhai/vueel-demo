import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/normalize.scss';
import './style/reset.scss';
import './style/global.scss';

// 组件
import VueButton from './components/button/VueButton.vue';
import VueButtonGroup from './components/button-group/VueButtonGroup.vue';
import VueIcon from './components/icon/VueIcon.vue';
import VueInput from './components/input/VueInput.vue';

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);
Vue.component('v-icon', VueIcon);
Vue.component('v-input', VueInput);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
