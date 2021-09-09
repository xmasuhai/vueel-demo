<template>
  <VueButton colorType="danger">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'danger',
  components: {
    VueButton
  }
}
</script>
