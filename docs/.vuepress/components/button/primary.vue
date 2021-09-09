<template>
  <VueButton color-type="primary">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'primary',
  components: {
    VueButton
  }
}
</script>
