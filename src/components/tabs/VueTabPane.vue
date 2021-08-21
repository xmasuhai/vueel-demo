<template>
  <section class="tab-pane">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueTabPane extends Vue {
  name = 'VueTabPane';
}
</script>

<style lang="scss" scoped>
.tab-pane {
}
</style>
