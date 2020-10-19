<template>
  <div id="app">
    <VueButton>
      按钮
    </VueButton>
    <VueButton icon="settings">
      按钮
    </VueButton>
    <VueButton icon="settings" icon-position="right">
      按钮
    </VueButton>
  </div>
</template>

<script>
import VueButton from './components/vuebutton/VueButton.vue'

export default {
  name: 'App',
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
