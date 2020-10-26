<template>
  <div class="vue-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>

<style lang="scss">
.vue-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .vue-button {
    margin-right: 0px;
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      position: relative;
      z-index: 1;
      }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
      }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      }
    /* // 错误地显示 border 三边显示 一边被遮盖
    &:not(:first-child) {
      border-left: none;
      }
    */
    }
  }
</style>
