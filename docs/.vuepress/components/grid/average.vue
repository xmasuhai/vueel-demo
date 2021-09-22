<template>
  <div class="grid">
    <VueRow>
      <VueCol>100%</VueCol>
    </VueRow>
    <VueRow>
      <VueCol>50%</VueCol>
      <VueCol>50%</VueCol>
    </VueRow>
    <VueRow>
      <VueCol>33.3%</VueCol>
      <VueCol>33.3%</VueCol>
      <VueCol>33.3%</VueCol>
    </VueRow>
    <VueRow>
      <VueCol>25%</VueCol>
      <VueCol>25%</VueCol>
      <VueCol>25%</VueCol>
      <VueCol>25%</VueCol>
    </VueRow>
  </div>
</template>

<script>
import VueRow from '@/components/grid/VueRow.vue'
import VueCol from '@/components/grid/VueCol.vue'

export default {
  name: 'average',
  components: {
    VueRow,
    VueCol
  }
}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
