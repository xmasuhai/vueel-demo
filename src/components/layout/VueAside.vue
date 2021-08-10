<template>
  <aside class="aside">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueAside extends Vue {
  name = 'VueAside';
}
</script>

<style lang="scss" scoped>
.aside {}
</style>
