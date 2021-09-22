<template>
  <div class="grid">
    <VueRow :gutter="20">
      <VueCol :span="9">
        <VueRow align="left">
          <VueCol>1</VueCol>
          <VueCol>2</VueCol>
          <VueCol>3</VueCol>
          <VueCol>4</VueCol>
        </VueRow>
      </VueCol>
      <VueCol :span="15">
        <VueRow align="right">
          <VueCol>1</VueCol>
          <VueCol>2</VueCol>
          <VueCol>3</VueCol>
          <VueCol>4</VueCol>
          <VueCol>5</VueCol>
          <VueCol>6</VueCol>
          <VueCol>7</VueCol>
        </VueRow>
      </VueCol>
    </VueRow>
    <VueRow>
      <VueCol :span="4">
        <VueRow align="center">
          <VueCol>LOGO</VueCol>
        </VueRow>
      </VueCol>
      <VueCol :span="14">Main</VueCol>
      <VueCol :span="6">Aside</VueCol>
    </VueRow>
  </div>
</template>

<script>
import VueRow from '@/components/grid/VueRow.vue'
import VueCol from '@/components/grid/VueCol.vue'

export default {
  name: 'align',
  components: {
    VueRow,
    VueCol
  }
}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
