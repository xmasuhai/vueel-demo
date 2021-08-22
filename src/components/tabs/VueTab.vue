<template>
  <div class="vue-tab">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Vue} from 'vue-property-decorator';

@Component
export default class VueTab extends Vue {
  name = 'VueTab';
  @Prop({type: String, required: true}) selected!: string;
  @Prop({
    type: String,
    default: 'horizontal',
    validator(value: string): boolean {
      return ['horizontal', 'vertical'].includes(value);
    }
  }) direction!: string;

  eventBus = new Vue;
  @Provide('eventBus') eBus = this.eventBus;

  mounted() {
    this.eventBus.$emit('update:selected', this.selected);
  }

}
</script>

<style lang="scss" scoped>
.vue-tab {
}
</style>
