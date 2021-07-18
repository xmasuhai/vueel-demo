<template>
  <div id="app">
    <VueButton>
      按钮
    </VueButton>
    <VueButton :isLoading="isLoading1"
               @click="isLoading1 = !isLoading1"
               icon="settings">设置
    </VueButton>
    <VueButton :is-loading="isLoading2"
               @click="isLoading2 = !isLoading2"
               icon="settings" icon-position="right">设置
    </VueButton>
    <VueButton :is-loading="isLoading3"
               @click="isLoading3 = !isLoading3"
               icon="download" icon-position="right">下载
    </VueButton>
    <vue-button-group>
      <VueButton icon="left">上一页</VueButton>
      <VueButton icon="">更多</VueButton>
      <VueButton icon="right"
                 icon-position="right">下一页
      </VueButton>
    </vue-button-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from './components/button/VueButton.vue';
import VueButtonGroup from './components/button-group/ButtonGroup.vue';

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);

@Component({
  components: {
    VueButton,
    VueButtonGroup
  }
})
export default class App extends Vue {
  name = 'App';
  isLoading1 = false;
  isLoading2 = true;
  isLoading3 = false;
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
