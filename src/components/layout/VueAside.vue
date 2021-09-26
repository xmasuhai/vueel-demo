<template>
  <aside class="vue-aside"
         :class="flexCToR"
         :style="asideStyle">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '@/mixins/AsideColToRow';

@Component
export default class VueAside extends mixins(AsideColToRow) {
  name = 'VueAside';
  @Prop({type: Number, default: 100}) width!: number;

  get asideStyle() {
    return Object.assign(this.colToRowStyle, {width: `${this.width}px`});
  }
}
</script>
