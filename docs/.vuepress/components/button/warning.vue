<template>
  <VueButton color-type="warning">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'warning',
  components: {
    VueButton
  }
}
</script>
