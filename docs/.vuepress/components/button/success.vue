<template>
  <VueButton colorType="success">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'success',
  components: {
    VueButton
  }
}
</script>
