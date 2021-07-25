<template>
  <div class="row"
       :style="{ marginLeft: -gutter + 'px',
                 marginRight: -gutter + 'px'}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueRow extends Vue {
  name = 'VueRow';

  @Prop({
    type: [String, Number],
    default: '0'
  }) gutter!: string;

  mounted() {
    this.$children.forEach((vm) => {
      (vm as any).gutter = this.gutter;
    });
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(last-child) {
    margin: 16px 0;
  }

}
</style>
