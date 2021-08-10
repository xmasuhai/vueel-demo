<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueMain extends Vue {
  name = 'VueMain';
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
