<template>
  <nav class="tab-content">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueTabContent extends Vue {
  name = 'VueTabContent.vue';
}
</script>

<style lang="scss" scoped>
.tab-content {
}
</style>
