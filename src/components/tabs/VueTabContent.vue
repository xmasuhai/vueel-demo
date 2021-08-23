<template>
  <nav class="tab-content">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';

@Component
export default class VueTabContent extends Vue {
  name = 'VueTabContent';
  @Inject('eventBus') readonly eventBus!: Vue;

  checkSon() {
    if (this.$children.length === 0) {
      throw new Error('VueTab无子组件，子组件必须是 VueTabNav 和 VueTabContent');
    }
  }

  mounted() {
    this.checkSon();
  }

}
</script>

<style lang="scss" scoped>
.tab-content {
}
</style>
