<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav class="custom-class">
      <VueTabItem tab-name="tab1">Item1</VueTabItem>
      <VueTabItem tab-name="tab2">Item2Item2</VueTabItem>
      <VueTabItem tab-name="tab3">Item3Item3Item3</VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane pane-name="tab1">Pane1</VueTabPane>
      <VueTabPane pane-name="tab2">Pane2</VueTabPane>
      <VueTabPane pane-name="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';

export default {
  name: 'normal',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>
