<template>
  <main class="v-main" :class="flexCToR" :style="colToRowStyle">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueMain extends mixins(AsideColToRow) {
  name = 'VueMain';
  componentName = 'VueMain';
}
</script>

<style lang="scss" scoped>
.v-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
