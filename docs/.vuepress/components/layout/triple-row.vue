<template>
  <vue-main style="height: 20vh;">
    <vue-header class="demo">Header</vue-header>
    <vue-container class="demo">Content</vue-container>
    <vue-footer class="demo">Footer</vue-footer>
  </vue-main>
</template>

<script>
import VueMain from '@/components/layout/VueMain.vue'
import VueContainer from '@/components/layout/VueContainer.vue'
import VueHeader from '@/components/layout/VueHeader.vue'
import VueFooter from '@/components/layout/VueFooter.vue'

export default {
  name: 'triple-row',
  components: {
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
