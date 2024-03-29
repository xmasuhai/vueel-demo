<template>
  <div>
    <VueCodePresentation legendName="Tabs 的基本结构">
      <VueDetail summaryString="Primary">
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
      </VueDetail>
      <VueDetail summaryString="Tabs 可被禁用、被隐藏">
        <VueTab :selected.sync="selectedTab">
          <VueTabNav>
            <VueTabItem tabName="tab1">Tab1</VueTabItem>
            <VueTabItem tabName="tab2" disabled>Tab2</VueTabItem>
            <VueTabItem tabName="tab3">Tab3</VueTabItem>
          </VueTabNav>
          <VueTabContent>
            <VueTabPane paneName="tab1">Pane1</VueTabPane>
            <VueTabPane paneName="tab2">Pane2</VueTabPane>
            <VueTabPane paneName="tab3">Pane3</VueTabPane>
          </VueTabContent>
        </VueTab>
      </VueDetail>
      <VueDetail summaryString="Tabs 提供 可选的 右侧附带按钮">
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
      </VueDetail>
      <VueDetail summaryString="Tabs 可添加icon">
        <VueTab :selected.sync="selectedTab">
          <VueTabNav>
            <VueTabItem
              tabName="tab1"
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
      </VueDetail>
      <VueDetail summaryString="Tabs 可配置方向">
        <VueTab :selected.sync="selectedTab">
          <VueTabNav>
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
      </VueDetail>
      <VueDetail summaryString="Tabs 可实现卡片式页签，即样式与Tab内容视觉一体化">
        <VueTab :selected.sync="selectedTab">
          <VueTabNav>
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
      </VueDetail>
      <VueDetail summaryString="Tabs 可添加、删除Tab页">
        <VueTab :selected.sync="selectedTab">
          <VueTabNav>
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
      </VueDetail>
      <VueDetail summaryString="Tabs 构造数据">
        <VueTab :selected.sync="selectedTab"
                :propsToNav="propsToNav"
                :propsToContent="propsToContent">
        </VueTab>
      </VueDetail>
    </VueCodePresentation>

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
import VueButton from './button/VueButton.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueButton,
    VueIcon,
    VueTab,
    VueTabNav,
    VueTabPane,
    VueTabContent,
    VueTabItem,
    VueDetail,
    VueCodePresentation
  }
})
export default class Tabs extends Vue {
  name = 'Tabs';
  selectedTab = 'tab1';

  // data for unit test
  propsToNav = [{tabName: 'tab1'}];
  propsToContent = [{paneName: 'pane1'}];
}
</script>
