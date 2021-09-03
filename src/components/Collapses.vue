<template>
  <div>
    <form>
      <fieldset>
        <legend>Collapse 折叠面板</legend>
        <details open>
          <summary>基本样式</summary>
          <VueCollapse>
            <VueCollapseItem title="标题1">内容1</VueCollapseItem>
            <VueCollapseItem title="标题2">内容2</VueCollapseItem>
            <VueCollapseItem title="标题3">内容3</VueCollapseItem>
          </VueCollapse>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Collapse 折叠面板</legend>
        <details open>
          <summary>可禁用</summary>
          <VueCollapse>
            <VueCollapseItem title="标题1">内容1</VueCollapseItem>
            <VueCollapseItem title="标题2">内容2</VueCollapseItem>
            <VueCollapseItem title="标题3">内容3</VueCollapseItem>
            <VueCollapseItem title="标题4">内容4</VueCollapseItem>
            <VueCollapseItem title="标题5">内容5</VueCollapseItem>
          </VueCollapse>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Collapse 折叠面板</legend>
        <details open>
          <summary>允许单独展开面板</summary>
          <VueCollapse>
            <VueCollapseItem title="标题1">内容1</VueCollapseItem>
            <VueCollapseItem title="标题2">内容2</VueCollapseItem>
            <VueCollapseItem title="标题3">内容3</VueCollapseItem>
          </VueCollapse>
        </details>
      </fieldset>
    </form>
    <br>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueCollapse from './collapse/VueCollapse.vue';
import VueCollapseItem from './collapse/VueCollapseItem.vue';

@Component({
  components: {VueCollapseItem, VueCollapse}
})
export default class Collapses extends Vue {
  name = 'Collapses';
}
</script>

<style lang="scss" scoped>

</style>
