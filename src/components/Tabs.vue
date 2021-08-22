<template>
  <div>
    <form>
      <fieldset>
        <legend>Tabs 的基本结构</legend>
        <details open>
          <summary>Primary</summary>
          <VueTab :selected.sync="selectedTab">
            <VueTabNav>
              <VueTabItem name="tab1">
                <VueIcon name="settings"></VueIcon>
                Tab1
              </VueTabItem>
              <VueTabItem name="tab2" disabled>Tab2</VueTabItem>
              <VueTabItem name="tab3">Tab3</VueTabItem>
            </VueTabNav>
            <VueTabContent>
              <VueTabPane name="tab1">Tab1 Content</VueTabPane>
              <VueTabPane name="tab2">Tab2 Content</VueTabPane>
              <VueTabPane name="tab3">Tab3 Content</VueTabPane>
            </VueTabContent>
          </VueTab>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Tabs 提供 可选的 右侧附带按钮</legend>
        <details open>
          <summary>Primary</summary>
          <VueTab :selected.sync="selectedTab">
            <VueTabNav>
              <template slot="actions">
                <VueButton>额外的按钮</VueButton>
              </template>
              <VueTabItem name="tab1">
                <VueIcon name="settings"></VueIcon>
                Tab1
              </VueTabItem>
              <VueTabItem name="tab2" disabled>Tab2</VueTabItem>
              <VueTabItem name="tab3">Tab3</VueTabItem>
            </VueTabNav>
            <VueTabContent>
              <VueTabPane name="tab1">Tab1 Content</VueTabPane>
              <VueTabPane name="tab2">Tab2 Content</VueTabPane>
              <VueTabPane name="tab3">Tab3 Content</VueTabPane>
            </VueTabContent>
          </VueTab>
        </details>
      </fieldset>
    </form>
    <br>
    <!-- 可被禁用、被隐藏-->
    <!-- 可添加icon-->
    <!-- 可配置方向-->
    <!-- 可实现卡片式页签，即样式与Tab内容视觉一体化-->
    <!-- 可添加、删除Tab页-->
    <!-- 可被禁用、被隐藏-->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueTab from './tabs/VueTab.vue';
import VueTabNav from './tabs/VueTabNav.vue';
import VueTabItem from './tabs/VueTabItem.vue';
import VueTabContent from './tabs/VueTabContent.vue';
import VueTabPane from './tabs/VueTabPane.vue';
import VueIcon from './icon/VueIcon.vue';
import VueButton from '@/components/button/VueButton.vue';

@Component({
  components: {VueButton, VueIcon, VueTab, VueTabNav, VueTabPane, VueTabContent, VueTabItem}
})
export default class Tabs extends Vue {
  name = 'Tabs';
  selectedTab = 'tab1';
}
</script>

<style lang="scss" scoped>

</style>
