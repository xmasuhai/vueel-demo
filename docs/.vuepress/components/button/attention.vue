<template>
  <VueButton colorType="attention">
    <slot></slot>
  </VueButton>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'attention',
  components: {
    VueButton
  }
};
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
