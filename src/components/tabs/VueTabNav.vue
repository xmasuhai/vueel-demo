<template>
  <nav class="tab-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </nav>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';

@Component
export default class VueTabNav extends Vue {
  name = 'VueTabNav.vue';
  defaultTab = '';
  @Inject('eventBus') readonly eventBus!: Vue;

  mounted() {
    this.$nextTick(() => {
      this.eventBus.$emit('update:selected', (this.$children[0] as any).tabName);
    });
  }
}
</script>

<style lang="scss" scoped>
$tab-nav-height: 40px;
.tab-nav {
  display: flex;
  height: $tab-nav-height;
  justify-content: flex-start;
  align-items: center;

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
