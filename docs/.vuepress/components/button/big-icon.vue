<template>
  <VueButton size="big" icon="thumbs-up">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'big-icon',
  components: {
    VueButton
  }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
