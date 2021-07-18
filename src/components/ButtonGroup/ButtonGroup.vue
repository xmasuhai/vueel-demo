<template>
  <div class="vue-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueIcon extends Vue {
  mounted() {
    for (const node of Array.from(this.$el.children)) {
      const name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`vue-button-group 的子元素应该全是 VueButton，
        但你写的是${name}`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .vue-button {
    margin-right: 0;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    /*
    * 错误地显示 border 三边显示 一边被遮盖
    &:not(:first-child) {
      border-left: none;
      }
    */
    &:not(:first-child) {
      margin-left: -2px;
    }

    // 解决border被后面的遮挡掉一边
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
