<template>
  <div class="grid">
    <VueRow :gutter="20">
      <VueCol :span="4">1/12</VueCol>
      <VueCol :span="20">5/6</VueCol>
    </VueRow>
    <VueRow :gutter="20">
      <VueCol>1/2</VueCol>
      <VueCol>1/2</VueCol>
    </VueRow>
    <VueRow :gutter="20">
      <VueCol>1/3</VueCol>
      <VueCol>1/3</VueCol>
      <VueCol>1/3</VueCol>
    </VueRow>
    <VueRow :gutter="20">
      <VueCol>1/4</VueCol>
      <VueCol>1/4</VueCol>
      <VueCol>1/4</VueCol>
      <VueCol>1/4</VueCol>
    </VueRow>
  </div>
</template>

<script>
import VueRow from '../../../../src/components/grid/VueRow.vue'
import VueCol from '../../../../src/components/grid/VueCol.vue'

export default {
  name: 'gutter',
  components: {
    VueRow,
    VueCol
  }
}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
