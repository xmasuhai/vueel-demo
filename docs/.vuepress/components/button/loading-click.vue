<template>
  <VueButton :isLoading="isLoading" icon="download" @click="isLoading = !isLoading">
    <slot></slot>
  </VueButton>
</template>

<script>
import VueButton from '@/components/button/VueButton.vue'

export default {
  name: 'loading-click',
  components: {
    VueButton
  },
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
