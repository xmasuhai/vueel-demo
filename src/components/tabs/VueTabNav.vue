<template>
  <div class="vue-tab-nav-wrapper">
    <nav class="vue-tab-nav" v-bind="$attrs">
      <slot>
        <VueTabItem v-for="(item, index) in itemsData"
                    :tab-name="item.tabName"
                    :disabled="item.disabled"
                    :key="index">
        </VueTabItem>
      </slot>
      <div class="vue-tab-line" ref="line" v-if="showUnderscore"></div>
      <div class="vue-tab-actions-wrapper">
        <slot name="vue-actions"></slot>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import VueTab from './VueTab.vue';
import VueTabItem from './VueTabItem.vue';

@Component({
  components: {VueTabItem}
})
export default class VueTabNav extends Vue {
  name = 'VueTabNav';
  showUnderscore = false;
  @Prop({type: Array, default() {return [];}}) itemsData!: string[];

  @Inject('eventBus') readonly eventBus!: Vue;


  // 初始选中 第一个 或者有tabName的tab
  initSelectedTabItem() {
    ((this.$parent as VueTab).selected === '')
      ? this.eventBus.$emit('update:selected',
        (this.$children[0] as VueTabItem).tabName, this.$children[0])
      : this.eventBus.$emit('update:selected',
        (this.$parent as VueTab).selected, (this.$children as VueTabItem[])
          .filter((childVM) => {
            return childVM.tabName === (this.$parent as VueTab).selected;
          })[0]);

  }

  // 监听到选择的实例 取得实例元素的尺寸 移动位置
  moveUnderscoreToVueTab() {
    this.eventBus.$on('update:selected', (tabName: string, vm: VueTabItem) => {
      const {width, left} = vm.$el.getBoundingClientRect();
      const parentLeft = vm.$parent.$el.getBoundingClientRect().left;
      (this.$refs.line as HTMLElement).style.width = `${width}px`;
      // (this.$refs.line as HTMLElement).styles.left = `${left - parentLeft}px`;
      (this.$refs.line as HTMLElement).style.transform = `translateX(${left - parentLeft}px)`;
    });
  }

  checkSon() {
    if (this.$children.length === 0) {
      throw new Error('VueTabNav无子组件，子组件必须是 VueTabItem');
    }
  }

  checkItemData() {
    if (this.itemsData.length === 0) {
      this.$emit('update:itemsData', this.$attrs.propsToNav);
    }
  }

  mounted() {
    this.checkItemData();
    this.showUnderscore = true;
    this.$nextTick(() => {
      this.checkSon();
      this.moveUnderscoreToVueTab();
      this.initSelectedTabItem();
    });
  }

}
</script>
