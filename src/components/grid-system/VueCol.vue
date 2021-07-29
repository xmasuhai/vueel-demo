<template>
  <div class="col"
       :style="colStyle"
       :class="colClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import objKeyValidator from '../../libs/objKeyValidator';

const validator = (value: mediaQuery) => objKeyValidator(value, ['span', 'offset']);

@Component
export default class VueCol extends Vue {
  name = 'VueCol';
  gutter = 0;

  @Prop({
    type: Number,
    default: 12
  }) span!: number;

  @Prop({
    type: Number,
    default: 0
  }) offset!: number;

  @Prop({
    type: Object,
    validator
  }) mobile!: mediaQuery;

  @Prop({
    type: Object,
    validator
  }) pad!: mediaQuery;

  @Prop({
    type: Object,
    validator
  }) laptop!: mediaQuery;

  @Prop({
    type: Object,
    validator
  }) pc!: mediaQuery;

  @Prop({
    type: Object,
    validator
  }) pcw!: mediaQuery;

  @Prop({
    type: Object,
    validator
  }) pcx!: mediaQuery;

  get colClass() {
    const {span, offset, mobile, pad, laptop, pc, pcw, pcx} = this;
    return [
      ...(pcx ? [`col-pcx-${pcx.span}`, `offset-pcx-${(pcx.offset)}`] : []),
      ...(pcw ? [`col-pcw-${pcw.span}`, `offset-pcw-${(pcw.offset)}`] : []),
      ...(pc ? [`col-pc-${pc.span}`, `offset-pc-${(pc.offset)}`] : []),
      ...(laptop ? [`col-laptop-${laptop.span}`, `offset-laptop-${(laptop.offset)}`] : []),
      ...(pad ? [`col-pad-${pad.span}`, `offset-pad-${(pad.offset)}`] : []),
      ...(mobile ? [`col-mobile-${mobile.span}`, `offset-mobile-${(mobile.offset)}`] : []),
      span && `col-${span}`,
      offset && `offset-${offset}`,
    ];
  }

  get colStyle() {
    if (!this.gutter) {
      return {};
    }
    return {
      marginLeft: this.gutter / 2 + 'px',
      marginRight: this.gutter / 2 + 'px'
    };
  }

}
</script>

<style lang="scss" scoped>
@use "sass:list";
@use "sass:math";

.col {
  min-height: 45px;
  flex: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 45px;
  color: #fff;

  &:nth-child(odd) {
    background-color: #3D8FEE;
  }

  &:nth-child(even) {
    background-color: #7CB8FF;
  }

  // .col.col-1 ~ .col.col-24
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: (math.div($n, 24)) * 100%;
    }
  }

  // .col.offset-2 ~ .col.offset-24
  $class-prefix: offset-;
  @for $i from 0 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: (math.div($i, 24)) * 100%;
    }
  }

  // media loops
  // $media-types: ($type, $sizeList)
  $media-types: (
    'mobile': (0 576px),
    'pad': (577px 768px),
    'laptop': (769px 992px),
    'pc': (993px 1200px),
    'pcw': (1201px 1600px),
    'pcx': (1601px 10000px),
  );
  @each $type, $sizeList in $media-types {
    @media (min-width: (list.nth($sizeList, 1))) and (max-width: (list.nth($sizeList, 2))) {
      // .col.col-1 ~ .col.col-24
      $class-prefix: col-#{$type}-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: (math.div($n, 24)) * 100%;
        }
      }

      // .col.offset-2 ~ .col.offset-24
      $class-prefix: offset-#{$type}-;
      @for $i from 0 through 24 {
        &.#{$class-prefix}#{$i} {
          margin-left: (math.div($i, 24)) * 100%;
        }
      }
    }
  }

}
</style>
