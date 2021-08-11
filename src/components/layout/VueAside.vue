<template>
  <aside class="v-aside" :class="flexCToR" :style="asideStyle">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueAside extends mixins(AsideColToRow) {
  name = 'VueAside';
  @Prop({type: String, default: '100px'}) width!: string;

  get asideStyle() {
    return Object.assign(this.colToRowStyle, {width: this.width});
  }
}
</script>

<style lang="scss" scoped>
.v-aside {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}
</style>
