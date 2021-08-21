<template>
  <section class="tab-item">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueTabItem extends Vue {
  name = 'VueTabItem';
}
</script>

<style lang="scss" scoped>
.tab-item {
}
</style>
