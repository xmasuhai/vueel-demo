<template>
  <div class="row"
       :style="rowStyle"
       :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, /*Provide,*/ Vue} from 'vue-property-decorator';

@Component
export default class VueRow extends Vue {
  name = 'VueRow';

  @Prop({
    type: [Number, String],
  }) gutter!: number | string;
  @Prop({
    type: String,
    default: 'center',
    validator(value: string): boolean {
      return (['', 'left', 'right', 'center', 'space-between', 'space-around']
        .includes(value));
    }
  }) align!: string;

  get rowStyle() {
    const {gutter} = this;
    // console.log('gutter in VueRow', gutter);
    return {
      marginLeft: `${-gutter / 2}px`,
      marginRight: `${-gutter / 2}px`
    };
  }

  get rowClass() {
    const {align} = this;
    return [
      align && `align-${align}`
    ];
  }

  // Provide 传递 gutter 属性
  // @Provide('gutterToSon') gutterToSon = this.gutter;

  // 传递 gutter 属性
  mounted() {
    const {$children, gutter} = this;
    // console.log('$children in VueRow', $children);
    if ($children && gutter) {
      $children.forEach(vm => {
        (vm as any).gutter = gutter;
        /*
        const source = {'gutter': gutter};
        Object.assign(vm, source);
        */
        // Vue.set(vm,'gutter', gutter);
        // this.$set(vm, 'gutter', gutter);
      });
    }
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
    'space-between': space-between,
    'space-around': space-around
  );
  @each $name, $type in $align-types {
    &.align-#{$name} {
      justify-content: $type;
    }
  }

  // mobile~pcx
  @media (max-width: 993px) {
    .row {
      flex-wrap: wrap;
    }
  }

}
</style>
