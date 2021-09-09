<template>
  <VueButton>
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
