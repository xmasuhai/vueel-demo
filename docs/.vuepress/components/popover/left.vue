<template>
  <VuePopover position="left">
    <template #content>
      <div>popover左</div>
    </template>
    <VueButton>左浮</VueButton>
  </VuePopover>
</template>

<script lang="ts">
import VuePopover from '@/components/popover/VuePopover.vue';
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'left',
  components: {
    VuePopover,
    VueButton
  }
};
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
