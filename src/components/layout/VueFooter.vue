<template>
  <footer class="vue-footer"
          :class="flexCToR"
          :style="footerStyle">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueFooter extends mixins(AsideColToRow) {
  name = 'VueFooter';
  @Prop({type: Number, default: 40}) height!: number;

  get footerStyle() {
    return Object.assign({}, {height: `${this.height}px`});
  }
}
</script>
