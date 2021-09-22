<template>
  <VueButton color-type="warning">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '@/components/button/VueButton.vue'

export default {
  name: 'warning',
  components: {
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
