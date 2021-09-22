<template>
  <VuePopover trigger="hover">
    <template #content>
      <div>popover内容</div>
    </template>
    <VueButton>鼠标悬停触发popover</VueButton>
  </VuePopover>
</template>

<script>
import VuePopover from '@/components/popover/VuePopover.vue';
import VueButton from '@/components/button/VueButton.vue'
export default {
  name: 'hover',
  components: {
    VuePopover,
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
