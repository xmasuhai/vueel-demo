<template>
  <div class="tab-nav-wrapper">
    <nav class="tab-nav">
      <slot></slot>
      <div class="line" ref="line"></div>
    </nav>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';
import {VueTabItem} from '@/types/VueTabItem';

@Component
export default class VueTabNav extends Vue {
  name = 'VueTabNav';
  @Inject('eventBus') readonly eventBus!: Vue;

  mounted() {

    this.$nextTick(() => {

      this.eventBus.$on('update:selected', (tabName: string, vm: VueTabItem) => {
        const {width, left} = vm.$el.getBoundingClientRect();
        const parentLeft = vm.$parent.$el.getBoundingClientRect().left;
        (this.$refs.line as HTMLElement).style.width = `${width}px`;
        // (this.$refs.line as HTMLElement).style.left = `${left - parentLeft}px`;
        (this.$refs.line as HTMLElement).style.transform = `translateX(${left - parentLeft}px)`;
      });

      this.eventBus.$emit('update:selected',
        (this.$children[0] as VueTabItem).tabName, this.$children[0]);
    });
  }
}
</script>

<style lang="scss" scoped>
$tab-nav-height: 40px;
$waterBlue: #3ba0e9;
.tab-nav-wrapper {
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
      transition: all .3s;
    }

  }

  .actions-wrapper {
    margin-left: auto;
  }
}
</style>
