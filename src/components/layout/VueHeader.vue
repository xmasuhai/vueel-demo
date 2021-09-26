<template>
  <header class="vue-header"
          :class="flexCToR"
          :style="headerStyle">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueHeader extends mixins(AsideColToRow) {
  name = 'VueHeader';
  componentName = 'VueHeader';
  @Prop({type: Number, default: 40}) height!: number;

  get headerStyle() {
    return Object.assign(this.colToRowStyle, {height: `${this.height}px`});
  }
}
</script>
