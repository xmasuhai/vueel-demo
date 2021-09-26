<template>
  <VueButton>
    <slot></slot>
  </VueButton>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'icon1',
  components: {
    VueButton
  }
};
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
