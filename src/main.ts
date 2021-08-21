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
import VueMain from './components/layout/VueMain.vue';
import VueContainer from './components/layout/VueContainer.vue';
import VueAside from './components/layout/VueAside.vue';
import VueFooter from './components/layout/VueFooter.vue';
import VueHeader from './components/layout/VueHeader.vue';
import VueToast from './components/toast/VueToast.vue';
import toastPlugin from './components/toast/toastPlugin';
import VueTab from './components/tabs/VueTab.vue';
import VueTabNav from './components/tabs/VueTabNav.vue';
import VueTabItem from './components/tabs/VueTabItem.vue';
import VueTabContent from './components/tabs/VueTabContent.vue';
import VueTabPane from './components/tabs/VueTabPane.vue';

// export const bus = new Vue();

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);
Vue.component('v-icon', VueIcon);
Vue.component('v-input', VueInput);
Vue.component('v-row', VueRow);
Vue.component('v-col', VueCol);
Vue.component('v-main', VueMain);
Vue.component('v-header', VueHeader);
Vue.component('v-footer', VueFooter);
Vue.component('v-aside', VueAside);
Vue.component('v-container', VueContainer);
Vue.component('v-toast', VueToast);
Vue.component('v-tab', VueTab);
Vue.component('v-tab-nav', VueTabNav);
Vue.component('v-tab-item', VueTabItem);
Vue.component('v-tab-content', VueTabContent);
Vue.component('v-tab-pane', VueTabPane);
Vue.use(toastPlugin);

const components = [
  VueButton,
  VueButtonGroup,
  VueIcon,
  VueInput,
  VueRow,
  VueCol,
  VueMain,
  VueContainer,
  VueAside,
  VueFooter,
  VueHeader,
  VueToast,
  VueTab,
  VueTabNav,
  VueTabItem,
  VueTabContent,
  VueTabPane,
];

const install = (Vue: any, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.26.12',
  install,
  VueButton,
  VueButtonGroup,
  VueIcon,
  VueInput,
  VueRow,
  VueCol,
  VueMain,
  VueContainer,
  VueAside,
  VueFooter,
  VueHeader,
  VueToast,
  VueTab,
  VueTabNav,
  VueTabItem,
  VueTabContent,
  VueTabPane
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
