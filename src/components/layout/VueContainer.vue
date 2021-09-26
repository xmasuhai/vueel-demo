<template>
  <section class="vue-container"
           :class="flexCToR"
           :style="colToRowStyle">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import AsideColToRow from '../../mixins/AsideColToRow';

@Component
export default class VueContainer extends mixins(AsideColToRow) {
  name = 'VueContainer';
}
</script>
