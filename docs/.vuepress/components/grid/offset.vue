<template>
  <div class="grid">
    <VueRow>
      <VueCol :span="2">1/12</VueCol>
      <VueCol :span="20" :offset="2">5/6 offset_2</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="4">1/6</VueCol>
      <VueCol :span="18" :offset="2">5/6 offset_2</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="4">1/6</VueCol>
      <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
      <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="4">1/6</VueCol>
      <VueCol :span="4" :offset="6">1/6 offset_6</VueCol>
      <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
    </VueRow>
  </div>
</template>

<script>
import VueRow from '../../../../src/components/grid/VueRow.vue'
import VueCol from '../../../../src/components/grid/VueCol.vue'

export default {
  name: 'offset',
  components: {
    VueRow,
    VueCol
  }
}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
