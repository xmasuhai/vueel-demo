<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueHeader extends Vue {
  name = 'VueHeader';
}
</script>

<style lang="scss" scoped>
.header {}
</style>
