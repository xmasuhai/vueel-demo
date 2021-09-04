<template>
  <div class="vue-tab">
    <slot>
      <VueTabNav
        :itemsData.sync="itemsData"
        :propsToNav="propsToNav">
      </VueTabNav>
      <VueTabContent
        :panesData.sync="panesData"
        :propsToContent="propsToContent">
      </VueTabContent>
    </slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Vue} from 'vue-property-decorator';
import VueTabNav from './VueTabNav.vue';
import VueTabContent from './VueTabContent.vue';
import {VueTabItem} from '@/types/VueTabItem';

@Component({
  components: {VueTabContent, VueTabNav}
})
export default class VueTab extends Vue {
  name = 'VueTab';
  itemsData = [];
  panesData = [];

  @Prop({type: String, required: true}) selected!: string;
  @Prop({type: Array, default() {return [];}}) propsToNav!: [];
  @Prop({type: Array, default() {return [];}}) propsToContent!: [];
  @Prop({
    type: String,
    default: 'horizontal',
    validator(value: string): boolean {
      return ['horizontal', 'vertical'].includes(value);
    }
  }) direction!: string;

  // 提供 存储 选中tab属性 的数据总线
  @Provide() eventBus = new Vue;

  // 检查是否存在子组件
  checkSon() {
    // $children 只能获取到子组件 而非子元素
    if (this.$children.length === 0) {
      throw new Error('VueTab无子组件，子组件必须是 VueTabNav 和 VueTabContent');
    }
  }

  // 发布 选中的实例 到 事件总线 以供其他组件监听
  emitSelectedVMtoEventBus() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'VueTabNav') {
        (vm.$children as VueTabItem[]).forEach((childVM: VueTabItem) => {
          // VueTabItem 中判断出 选中的 tab 实例，发布这个实例
          if (childVM.$options.name === 'VueTabItem'
            && childVM.tabName === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVM);
          }
        });
      }
    });
  }

  mounted() {
    this.checkSon();
    this.emitSelectedVMtoEventBus();
  }

}
</script>

<style lang="scss" scoped>
.vue-tab {
}
</style>
