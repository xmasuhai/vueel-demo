import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/normalize.scss';
import './style/reset.scss';
import './style/global.scss';

// 组件
import VueButton from './components/button/VueButton.vue';
import VueButtonGroup from './components/button/VueButtonGroup.vue';
import VueIcon from './components/icon/VueIcon.vue';
import VueInput from './components/input/VueInput.vue';
import VueRow from './components/grid/VueRow.vue';
import VueCol from './components/grid/VueCol.vue';

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);
Vue.component('v-icon', VueIcon);
Vue.component('v-input', VueInput);
Vue.component('v-row', VueRow);
Vue.component('v-col', VueCol);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
