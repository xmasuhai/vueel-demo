<template>
  <details class="details"
           :open="isOpen">
    <summary class="summary">
      <span class="summary-string">
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
.details {
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-bottom: 20px;

  &[open] {
    & summary {
      border-bottom: 1px solid #aaa;
      margin-bottom: 1em;
    }
  }

  .summary {
  }

}
</style>
