<template>
  <footer class="footer" :class="flexCToR" :style="footerStyle">
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
  @Prop({type: String, default: '40px'}) height!: string;

  get footerStyle() {
    return Object.assign(this.colToRowStyle, {height: this.height});
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}
</style>
