<template>
  <VueButton colorType="info">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '@/components/button/VueButton.vue'

export default {
  name: 'info',
  components: {
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
