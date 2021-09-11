<template>
  <VueButton colorType="danger">
    <slot></slot>
  </VueButton>
</template>

<script lang="ts">
import VueButton from '../../../../src/components/button/VueButton.vue';

export default {
  name: 'danger',
  components: {
    VueButton
  }
};
</script>
