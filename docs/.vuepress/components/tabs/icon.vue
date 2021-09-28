<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <VueTabItem tabName="tab1"
                  :useIcon="true"
                  iconName="settings">
        Tab1
      </VueTabItem>
      <VueTabItem tabName="tab2"
                  :useIcon="true"
                  iconName="download">
        Tab2
      </VueTabItem>
      <VueTabItem tabName="tab3"
                  :useIcon="true"
                  iconName="thumbs-up">
        Tab3
      </VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane paneName="tab1">Pane1</VueTabPane>
      <VueTabPane paneName="tab2">Pane2</VueTabPane>
      <VueTabPane paneName="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'normal',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane,
    VueIcon
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>
