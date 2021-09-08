<template>
  <details class="details"
           :isOpen="isOpen? open : undefined">
    <summary>
      <span class="summary">
        {{ summaryString }}
      </span>
    </summary>
    <slot></slot>
  </details>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueDetail extends Vue {
  name = 'VueDetail';
  @Prop({type: String}) summaryString!: string;
  @Prop({
    type: Boolean,
    default: true
  }) isOpen!: boolean;

}
</script>

<style lang="scss" scoped>

</style>
