<template>
  <VueButton colorType="attention">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'attention',
  components: {
    VueButton
  }
}
</script>
