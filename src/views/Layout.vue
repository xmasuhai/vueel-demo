<template>
  <section class="layout-wrapper"
           :class="getLayoutClass('wrapper')">
    <Nav @update:tabName="changeTabComponent"
         :class="{
           'isHide': isHide
         }"
         class="home-fixed"/>
    <section class="content"
             :class="getLayoutClass('content')"
             ref="content"
             @scroll="scrolling">
      <keep-alive>
        <component :is="currentTabComponentText"
                   :key="currentTabComponentText"
                   class="vue-tab">
        </component>
      </keep-alive>
    </section>
  </section>
</template>

<script lang="ts">
import TxsDemo from '@/components/TXSDemo.vue';
import BooksInfo from '@/components/BooksInfo.vue';
import {Component, Prop, Vue} from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';
import Collapses from '../components/Collapses.vue';
import GridSystems from '../components/GridSystems.vue';
import Inputs from '../components/Inputs.vue';
import LayoutGroups from '../components/LayoutGroups.vue';
import Nav from '../components/Nav.vue';
import Popovers from '../components/Popovers.vue';
import Switches from '../components/Switches.vue';
import Tabs from '../components/Tabs.vue';
import ToastsTips from '../components/ToastsTips.vue';

@Component({
  components: {
    Buttons,
    Inputs,
    GridSystems,
    LayoutGroups,
    ToastsTips,
    Nav,
    Tabs,
    Popovers,
    Collapses,
    Switches,
    BooksInfo,
    TxsDemo
  }
})
export default class Layout extends Vue {
  name = 'Layout';
  currentTabText = 'TxsDemo';
  layoutType = '';

  // 由动态外部参数 获取 类样式
  @Prop({
    default: '',
    type: String
  }) classPrefix!: string;

  changeTabComponent(tabName: string) {
    this.currentTabText = tabName;
  }

  get currentTabComponentText() {
    return this.currentTabText;
  }

  getLayoutClass(value: string) {
    this.layoutType = value;
    return (this.classPrefix && `${this.classPrefix}-${this.layoutType}`);
  }

  oldScrollTop = 0;
  isHide = false;

  // 获取 内容区
  get contentEle() {
    return this.$refs.content;
  }

  // 头部导航做鼠标滚动优化
  scrolling() {
    // 滚动条距文档顶部的距离（做兼容处理）===》不懂的可以结合画图理清逻辑
    const scrollTop = (this.contentEle as HTMLElement).scrollTop;
    // 滚动条滚动的距离
    const scrollStep = scrollTop - this.oldScrollTop;
    // 更新——滚动前，滚动条距文档顶部的距离
    this.oldScrollTop = scrollTop;
    // 关键 scrollStep 为正 向下 隐藏导航栏；为负 向上 显示导航栏
    scrollStep < 0
      ? this.isHide = false
      : this.isHide = true;

  }

  /*
  // 监听页面滚动事件
  mounted() {
    (this.$refs.content as HTMLElement).addEventListener('scroll', this.scrolling);
  }
  */

}
</script>

<style lang="scss" scoped>
section.layout-wrapper {
  display: flex;
  overflow-scrolling: touch;
  flex-direction: column;
  height: 100vh;

  .home-fixed {
    width: 100%;
    background: #fff;
    position: fixed;

    left: 0;
    top: 0;
    z-index: 999;
    box-shadow: 0 3px 7px 0 rgba(70, 70, 70, 0.35);
    transition: all 0.3s; // 添加过渡，优化体验，具体可以根据需求扩展
  }

  .home-fixed.isHide { // 这个类名用来动态改变显示藏（关键）
    transform: translateY(-100%);
  }

  section.content {
    padding-top: 30px;
    box-shadow: inset 0 1px 2px 2px #ccc;

    .vue-tab {
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
            padding: 8px 2px;

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
