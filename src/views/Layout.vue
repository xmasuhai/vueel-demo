<template>
  <section class="layout-wrapper"
           :class="classPrefix && `${classPrefix}-wrapper`">
    <Nav @update:tabName="changeTabComponent"/>
    <section class="content"
             :class="classPrefix && `${classPrefix}-content`">
      <keep-alive>
        <component :is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </section>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';
import Inputs from '../components/Inputs.vue';
import Nav from '../components/Nav.vue';

@Component({
  components: {
    Buttons,
    Inputs,
    Nav
  }
})
export default class Layout extends Vue {
  name = 'Layout';
  currentTabText = 'buttons';

  // 由动态外部参数 获取 类样式
  @Prop(String) ['classPrefix']: string;

  changeTabComponent(tabName: string) {
    this.currentTabText = tabName;
  }

  get currentTabComponent() {
    return this.currentTabText;
  }

}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  overflow-scrolling: touch;
  flex-direction: column;
  height: 100vh;

  .tab {
    border: 1px solid #ccc;
    padding: 20px;
  }

  .content {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
