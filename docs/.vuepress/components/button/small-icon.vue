<template>
  <VueButton>
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'

export default {
  name: 'small-icon',
  components: {
    VueButton
  }
}
</script>
