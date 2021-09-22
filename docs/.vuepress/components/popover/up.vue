<template>
  <VuePopover>
    <template #content>
      <div>popover上</div>
    </template>
    <VueButton>上浮</VueButton>
  </VuePopover>
</template>

<script>
import VuePopover from '@/components/popover/VuePopover.vue'
import VueButton from '@/components/button/VueButton.vue'
export default {
  name: 'up',
  components: {
    VuePopover,
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
