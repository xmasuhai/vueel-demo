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
  </div>
</template>

<script>
import VueButton from './components/vuebutton/VueButton.vue'

export default {
  name: 'App',
  data() {
    return {
      isLoading1: false,
      isLoading2: false,
      isLoading3: false,
    }
  },
  components: {
    VueButton,
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
