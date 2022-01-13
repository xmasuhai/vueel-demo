// 基础依赖
import VueCompositionAPI from '@vue/composition-api';
import Vue from 'vue';
import 'vue-tsx-support/enable-check';
// 入口文件
import App from './App';
// 组件
import VueButton from './components/button/VueButton.vue';
import VueButtonGroup from './components/button/VueButtonGroup.vue';
import VueCodePresentation from './components/code-presentation/VueCodePresentation.vue';
import VueDetail from './components/code-presentation/VueDetail.vue';
import VueCollapse from './components/collapse/VueCollapse.vue';
import VueCol from './components/grid/VueCol.vue';
import VueRow from './components/grid/VueRow.vue';
import VueIcon from './components/icon/VueIcon.vue';
import VueInput from './components/input/VueInput.vue';
import VueAside from './components/layout/VueAside.vue';
import VueContainer from './components/layout/VueContainer.vue';
import VueFooter from './components/layout/VueFooter.vue';
import VueHeader from './components/layout/VueHeader.vue';
import VueMain from './components/layout/VueMain.vue';
import VuePopover from './components/popover/VuePopover.vue';
import VueSwitch from './components/switch/VueSwitch.vue';
import VueTab from './components/tabs/VueTab.vue';
import VueTabContent from './components/tabs/VueTabContent.vue';
import VueTabItem from './components/tabs/VueTabItem.vue';
import VueTabNav from './components/tabs/VueTabNav.vue';
import VueTabPane from './components/tabs/VueTabPane.vue';
import toastPlugin from './components/toast/toastPlugin';
import VueToast from './components/toast/VueToast.vue';
import router from './router';
import store from './store';
import './styles/index.scss';
import './styles/normalize.scss';

Vue.use(VueCompositionAPI);

// 全局注册组件
const componentList = [
  {id: 'v-button', compo: VueButton},
  {id: 'v-button-group', compo: VueButtonGroup},
  {id: 'v-icon', compo: VueIcon},
  {id: 'v-input', compo: VueInput},
  {id: 'v-row', compo: VueRow},
  {id: 'v-col', compo: VueCol},
  {id: 'v-main', compo: VueMain},
  {id: 'v-header', compo: VueHeader},
  {id: 'v-footer', compo: VueFooter},
  {id: 'v-aside', compo: VueAside},
  {id: 'v-container', compo: VueContainer},
  {id: 'v-toast', compo: VueToast},
  {id: 'v-tab', compo: VueTab},
  {id: 'v-tab-nav', compo: VueTabNav},
  {id: 'v-tab-item', compo: VueTabItem},
  {id: 'v-tab-content', compo: VueTabContent},
  {id: 'v-tab-pane', compo: VueTabPane},
  {id: 'v-popover', compo: VuePopover},
  {id: 'v-collapse', compo: VueCollapse},
  {id: 'v-switch', compo: VueSwitch},
  {id: 'v-detail', compo: VueDetail},
  {id: 'v-code-presentation', compo: VueCodePresentation},
];

componentList.forEach((componentMap) => {
  Vue.component(componentMap.id, componentMap.compo);
});

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
  VuePopover,
  VueCollapse,
  VueCodePresentation,
  VueDetail,
  VueSwitch
];

const install = (Vue: Vue, /*opts = {}*/) => {
  components.forEach(component => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  install(window.Vue);
}

Vue.config.productionTip = false;

const mainAppVm = new Vue({
  router,
  store,
  render: h => h(App)
});

mainAppVm.$mount('#app');

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
  toastPlugin,
  VueTab,
  VueTabNav,
  VueTabItem,
  VueTabContent,
  VueTabPane,
  VuePopover,
  VueCollapse,
  VueCodePresentation,
  VueDetail,
  VueSwitch
};
