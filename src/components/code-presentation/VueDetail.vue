<template>
  <details class="vue-details"
           :open="isOpen">
    <summary class="vue-summary">
      <span class="vue-summary-string">
        {{ summaryString }}
      </span>
    </summary>
    <div class="vue-details-content">
      <slot></slot>
    </div>
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
