<template>
  <vue-main style="height: 20vh;">
    <vue-header class="demo">Header</vue-header>
    <vue-container class="demo">Content</vue-container>
    <vue-footer class="demo">Footer</vue-footer>
  </vue-main>
</template>

<script>
import VueMain from '../../../../src/components/layout/VueMain.vue'
import VueContainer from '../../../../src/components/layout/VueContainer.vue'
import VueHeader from '../../../../src/components/layout/VueHeader.vue'
import VueFooter from '../../../../src/components/layout/VueFooter.vue'
import VueAside from '../../../../src/components/layout/VueAside.vue'

export default {
  name: 'triple-row',
  components: {
    VueAside,
    VueMain,
    VueContainer,
    VueHeader,
    VueFooter
  }
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>
