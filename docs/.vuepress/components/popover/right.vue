<template>
  <VuePopover position="right">
    <template #content>
      <div>popover右</div>
    </template>
    <VueButton>右浮</VueButton>
  </VuePopover>
</template>

<script lang="ts">
import VuePopover from '@/components/popover/VuePopover.vue';
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'right',
  components: {
    VuePopover,
    VueButton
  }
};
</script>

<style lang="scss" scoped>
@import './pop.scss';
</style>
