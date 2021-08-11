<template>
  <section class="layout-wrapper"
           :class="getLayoutClass('wrapper')">
    <Nav @update:tabName="changeTabComponent"/>
    <section class="content"
             :class="getLayoutClass('content')">
      <keep-alive>
        <component :is="currentTabComponent"
                   class="tab">
        </component>
      </keep-alive>
    </section>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';
import Inputs from '../components/Inputs.vue';
import GridSystems from '../components/GridSystems.vue';
import Nav from '../components/Nav.vue';
import LayoutGroups from '../components/LayoutGroups.vue';
import ToastsTips from '../components/ToastsTips.vue';

@Component({
  components: {
    Buttons,
    Inputs,
    GridSystems,
    LayoutGroups,
    ToastsTips,
    Nav
  }
})
export default class Layout extends Vue {
  name = 'Layout';
  currentTabText = 'ToastsTips';
  layoutType = '';

  // 由动态外部参数 获取 类样式
  @Prop(String) ['classPrefix']: string;

  changeTabComponent(tabName: string) {
    this.currentTabText = tabName;
  }

  get currentTabComponent() {
    return this.currentTabText;
  }

  getLayoutClass(value: string) {
    this.layoutType = value;
    return (this.classPrefix && `${this.classPrefix}-${this.layoutType}`);
  }
}
</script>

<style lang="scss" scoped>
section.layout-wrapper {
  display: flex;
  overflow-scrolling: touch;
  flex-direction: column;
  height: 100vh;

  section.content {
    .tab {
      border: 1px solid #ccc;
      padding: 20px;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;

    ::v-deep {
      form {
        fieldset {
          details {
            padding: 8px 0;

            > summary {
              padding: 2px 0;
              cursor: pointer;
            }

            ::-webkit-scrollbar {
              display: none;
            }

            // BFC isolated margin
            overflow: hidden;

            > div:not(:last-child) {
              padding: 0 0 16px;
            }
          }
        }
      }
    }

  }

}
</style>
