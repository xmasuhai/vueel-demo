<template>
  <header class="v-header" :class="flexCToR" :style="colToRowStyle">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueHeader extends mixins(AsideColToRow) {
  name = 'VueHeader';
}
</script>

<style lang="scss" scoped>
.v-header {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}
</style>
