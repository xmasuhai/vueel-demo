<template>
  <VuePopover style="margin-top: 0;">
    <template #content>
      <div>popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容</div>
    </template>
    <VueButton>显示多行文字提示</VueButton>
  </VuePopover>
</template>

<script>
import VuePopover from '@/components/popover/VuePopover.vue'
import VueButton from '@/components/button/VueButton.vue'
export default {
  name: 'multi',
  components: {
    VuePopover,
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
