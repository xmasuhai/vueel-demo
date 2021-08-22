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
  @Inject('eventBus') readonly eventBus!: Vue;

  created() {
    this.$emit('update:selected', '这是 VueTabNav 抛出的数据');
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
