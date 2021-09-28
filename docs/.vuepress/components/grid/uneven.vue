<template>
  <div class="grid">
    <VueRow>
      <VueCol :span="2">1/12</VueCol>
      <VueCol :span="22">11/12</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="4">1/6</VueCol>
      <VueCol :span="20">5/6</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="6">1/4</VueCol>
      <VueCol :span="18">3/4</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="8">1/3</VueCol>
      <VueCol :span="16">2/3</VueCol>
    </VueRow>
  </div>
</template>

<script lang="ts">
import VueRow from '@/components/grid/VueRow.vue'
import VueCol from '@/components/grid/VueCol.vue'

export default {
  name: 'uneven',
  components: {
    VueRow,
    VueCol
  }
}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
