<template>
  <section class="tab-item">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueTabItem extends Vue {
  name = 'VueTabItem';
  @Prop({type: Boolean, default: false}) disabled!: boolean;
}
</script>

<style lang="scss" scoped>
.tab-item {
}
</style>
