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

<script>
import VueTab from '../../../../src/components/tabs/VueTab.vue'
import VueTabNav from '../../../../src/components/tabs/VueTabNav.vue'
import VueTabItem from '../../../../src/components/tabs/VueTabItem.vue'
import VueTabContent from '../../../../src/components/tabs/VueTabContent.vue'
import VueTabPane from '../../../../src/components/tabs/VueTabPane.vue'
import VueIcon from '../../../../src/components/icon/VueIcon.vue'

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
    }
  }
}
</script>
