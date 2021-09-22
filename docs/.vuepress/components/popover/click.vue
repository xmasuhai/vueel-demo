<template>
  <VuePopover trigger="click">
    <template #content>
      <div>popover内容</div>
    </template>
    <VueButton>鼠标点击触发popover</VueButton>
  </VuePopover>
</template>

<script>
import VuePopover from '@/components/popover/VuePopover.vue'
import VueButton from '@/components/button/VueButton.vue'

export default {
  name: 'click',
  components: {
    VuePopover,
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
