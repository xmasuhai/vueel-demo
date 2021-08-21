<template>
  <div>
    <form>
      <fieldset>
        <legend>Tabs 的基本结构</legend>
        <details open>
          <summary>Primary</summary>
          <VueTab :slelected="selectedTab" @update:selected="selectedTab=$event">
            <VueTabNav>
              <VueTabItem name="tab1">Tab1</VueTabItem>
              <VueTabItem name="tab2">Tab2</VueTabItem>
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
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueTab from './tabs/VueTab.vue';
import VueTabNav from './tabs/VueTabNav.vue';
import VueTabItem from './tabs/VueTabItem.vue';
import VueTabContent from './tabs/VueTabContent.vue';
import VueTabPane from './tabs/VueTabPane.vue';

@Component({
  components: {VueTab, VueTabNav, VueTabPane, VueTabContent, VueTabItem}
})
export default class Tabs extends Vue {
  name = 'Tabs';
  selectedTab = 'tab1';
}
</script>

<style lang="scss" scoped>

</style>
