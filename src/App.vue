<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from './components/button/VueButton.vue';
import VueButtonGroup from './components/button-group/ButtonGroup.vue';
import VueIcon from './components/icon/VueIcon.vue';
import VueInput from './components/input/VueInput.vue';

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);
Vue.component('v-icon', VueIcon);
Vue.component('v-input', VueInput);

@Component
export default class App extends Vue {
  name = 'App';
}

</script>

<style lang="scss" scoped>
::v-deep {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

</style>
