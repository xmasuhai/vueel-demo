<template>
  <nav class="tab-nav">
    <slot></slot>
    <slot name="actions"></slot>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueTabNav extends Vue {
  name = 'VueTabNav.vue';
}
</script>

<style lang="scss" scoped>
.tab-nav {
}
</style>
