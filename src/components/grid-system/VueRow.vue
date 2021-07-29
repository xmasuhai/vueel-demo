<template>
  <div class="row"
       :style="rowStyle"
       :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueRow extends Vue {
  name = 'VueRow';

  @Prop({
    type: Number,
    default: 0
  }) gutter!: number;

  @Prop({
    type: String,
    default: 'center',
    validator(value: string): boolean {
      return ['', 'left', 'right', 'center'].includes(value);
    }
  }) align!: string;

  get rowStyle() {
    return {
      marginLeft: (-this.gutter / 2) + 'px',
      marginRight: (-this.gutter / 2) + 'px'
    };
  }

  get rowClass() {
    const {align} = this;
    return [
      align && `align-${align}`
    ];
  }

  mounted() {
    this.$children.forEach((vm) => {
      const source = {'gutter': this.gutter};
      Object.assign(vm, source);
    });
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex: auto;

  // Align
  $align-types: (
    'left': flex-start,
    'right': flex-end,
    'center': center,
  );
  @each $name, $type in $align-types {
    &.align-#{$name} {
      justify-content: $type;
    }
  }

  // mobile
  @media (max-width: 576px) {
    .row {
      flex-wrap: wrap;
    }
  }

}
</style>
