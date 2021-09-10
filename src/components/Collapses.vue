<template>
  <div>
    <VueCodePresentation legendName="Collapse 折叠面板">

      <VueDetail summaryString="基本样式">
        <VueCollapse :selectedArray.sync="selectedTitleList">
          <VueCollapseItem title="标题1">内容1</VueCollapseItem>
          <VueCollapseItem title="标题2">内容2</VueCollapseItem>
          <VueCollapseItem title="标题3">内容3</VueCollapseItem>
        </VueCollapse>
      </VueDetail>

      <VueDetail summaryString="可禁用">
        <VueCollapse :selectedArray="['标题3']">
          <VueCollapseItem title="标题1">内容1</VueCollapseItem>
          <VueCollapseItem title="标题2" :isDisabled="true">内容2</VueCollapseItem>
          <VueCollapseItem title="标题3">内容3</VueCollapseItem>
          <VueCollapseItem title="标题4" :isDisabled="true">内容4</VueCollapseItem>
          <VueCollapseItem title="标题5">内容5</VueCollapseItem>
        </VueCollapse>
      </VueDetail>

      <VueDetail summaryString="设置只展开单独一个面板">
        <VueCollapse :onlyShowSingle="true"
                     :selectedArray="['标题2']">
          <VueCollapseItem title="标题1">内容1</VueCollapseItem>
          <VueCollapseItem title="标题2">内容2</VueCollapseItem>
          <VueCollapseItem title="标题3">内容3</VueCollapseItem>
          <VueCollapseItem title="标题4">内容4</VueCollapseItem>
          <VueCollapseItem title="标题5">内容5</VueCollapseItem>
        </VueCollapse>
      </VueDetail>

    </VueCodePresentation>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueCollapse from './collapse/VueCollapse.vue';
import VueCollapseItem from './collapse/VueCollapseItem.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueCollapseItem,
    VueCollapse,
    VueDetail,
    VueCodePresentation
  }
})
export default class Collapses extends Vue {
  name = 'Collapses';
  selectedTitleList = ['标题1', '标题3'];
}
</script>

<style lang="scss" scoped>

</style>
