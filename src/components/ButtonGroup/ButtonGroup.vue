<template>
  <div class="vue-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  mounted() {
    // console.log('here')
    // console.log(this.$children)
    // console.log(this.$el)
    // console.log(this.$el.children)
    for (const node of this.$el.children) {
      // console.log(node)
      const name = node.nodeName.toLowerCase()
      if (name != 'button') {
        console.warn(`vue-button-group 的子元素应该全是 VueButton，但你写的是${name}`)
      }
    }
  },
}
</script>

<style lang="scss">
.vue-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .vue-button {
    margin-right: 0;
    border-radius: 0;

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
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
}
</style>
