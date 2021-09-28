<template>
  <vue-main style="height: 20vh;">
    <vue-header class="demo">Header</vue-header>
    <vue-container class="demo">
      <vue-container>Content</vue-container>
      <vue-aside class="demo" :width="50">Aside</vue-aside>
    </vue-container>
    <vue-footer class="demo">Footer</vue-footer>
  </vue-main>
</template>

<script lang="ts">
import VueMain from '@/components/layout/VueMain.vue';
import VueContainer from '@/components/layout/VueContainer.vue';
import VueHeader from '@/components/layout/VueHeader.vue';
import VueFooter from '@/components/layout/VueFooter.vue';
import VueAside from '@/components/layout/VueAside.vue';

export default {
  name: 'triple-row-side-right',
  components: {
    VueAside,
    VueMain,
    VueContainer,
    VueHeader,
    VueFooter
  }
};
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>
