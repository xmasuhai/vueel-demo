<template>
  <div class="vue-tab">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Vue} from 'vue-property-decorator';
import {VueTabItem} from '@/types/VueTabItem';
import {VueTabNav} from '@/types/VueTabNav';
import {VueTabContent} from '@/types/VueTabContent';

@Component
export default class VueTab extends Vue {
  name = 'VueTab';
  @Prop({type: String, required: true}) selected!: string;
  @Prop({
    type: String,
    default: 'horizontal',
    validator(value: string): boolean {
      return ['horizontal', 'vertical'].includes(value);
    }
  }) direction!: string;

  eventBus = new Vue;
  @Provide('eventBus') eBus = this.eventBus;

  // 发布 选中的实例 到 事件总线
  emitSelectedVMtoEventBus() {
    this.$children.forEach((vm: VueTabNav | VueTabContent) => {
      if (vm.$options.name === 'VueTabNav') {
        (vm.$children as VueTabItem[]).forEach((childVM: VueTabItem) => {
          if (childVM.$options.name === 'VueTabItem' && childVM.tabName === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVM);
          }
        });
      }
    });
  }

  checkSon() {
    if (this.$children.length === 0) {
      throw new Error('VueTab无子组件，子组件必须是 VueTabNav 和 VueTabContent');
    }
  }

  mounted() {
    this.checkSon();
    this.emitSelectedVMtoEventBus();
    // console.log('this: ', this);
  }

}
</script>

<style lang="scss" scoped>
.vue-tab {
}
</style>
