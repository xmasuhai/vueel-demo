<template>
  <VuePopover trigger="hover">
    <template #content="{closeEvent}">
      <div>popover使用 slotScope 传参给slot</div>
      <VueButton @click="closeEvent">关闭</VueButton>
    </template>
    <VueButton>提供slot事件回调closeEvent</VueButton>
  </VuePopover>
</template>

<script lang="ts">
import VuePopover from '@/components/popover/VuePopover.vue';
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'close',
  components: {
    VuePopover,
    VueButton
  }
};
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
