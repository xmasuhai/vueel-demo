<template>
  <nav class="tab-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </nav>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';
import {VueTabItem} from '@/types/VueTabItem';

@Component
export default class VueTabNav extends Vue {
  name = 'VueTabNav';
  defaultTab = '';
  @Inject('eventBus') readonly eventBus!: Vue;

  created() {
    this.eventBus.$on('update:selected', (item: string, vm: Vue) => {
      // console.log(item);
      // console.log('vm: ', vm);
      // console.log('vm.$el: ', vm.$el.getBoundingClientRect());
    });
  }

  mounted() {
    this.$nextTick(() => {
      this.eventBus.$emit('update:selected',
        (this.$children[0] as VueTabItem).tabName, this.$children[0]);
    });
  }
}
</script>

<style lang="scss" scoped>
$tab-nav-height: 40px;
$waterBlue: #3ba0e9;
.tab-nav {
  display: flex;
  height: $tab-nav-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  > .line {
    position: absolute;
    bottom: 0;
    height: 0;
    border-bottom: 1px solid $waterBlue;
    width: 100px;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
