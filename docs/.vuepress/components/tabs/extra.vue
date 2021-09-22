<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <template v-slot:vue-actions>
        <VueButton>额外的按钮</VueButton>
      </template>
      <VueTabItem tabName="tab1">Tab1</VueTabItem>
      <VueTabItem tabName="tab2">Tab2</VueTabItem>
      <VueTabItem tabName="tab3">Tab3</VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane paneName="tab1">Pane1</VueTabPane>
      <VueTabPane paneName="tab2">Pane2</VueTabPane>
      <VueTabPane paneName="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script>
import VueTab from '../../../../src/components/tabs/VueTab.vue';
import VueTabNav from '../../../../src/components/tabs/VueTabNav.vue';
import VueTabItem from '../../../../src/components/tabs/VueTabItem.vue';
import VueTabContent from '../../../../src/components/tabs/VueTabContent.vue';
import VueTabPane from '../../../../src/components/tabs/VueTabPane.vue';
import VueButton from '../../../../src/components/button/VueButton.vue';

export default {
  name: 'extra',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane,
    VueButton
  },
  data() {
    return {
      selectedTab: 'tab1'
    }
  }
}
</script>
