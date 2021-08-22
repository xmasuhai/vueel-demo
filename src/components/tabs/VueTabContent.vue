<template>
  <nav class="tab-content">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';

@Component
export default class VueTabContent extends Vue {
  name = 'VueTabContent.vue';
  @Inject('eventBus') readonly eventBus!: Vue;
}
</script>

<style lang="scss" scoped>
.tab-content {
}
</style>
