<template>
  <VuePopover position="bottom">
    <template #content>
      <div>popover下</div>
    </template>
    <VueButton>下浮</VueButton>
  </VuePopover>
</template>

<script>
import VuePopover from '../../../../src/components/popover/VuePopover.vue'
import VueButton from '../../../../src/components/button/VueButton.vue'
export default {
  name: 'down',
  components: {
    VuePopover,
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
