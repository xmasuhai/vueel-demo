<template>
  <VueButton :isLoading="true" icon="loading">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'loading',
  components: {
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
