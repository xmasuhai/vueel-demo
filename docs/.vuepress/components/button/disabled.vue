<template>
  <VueButton isDisabled="true">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'disabled',
  components: {
    VueButton
  }
}
</script>
