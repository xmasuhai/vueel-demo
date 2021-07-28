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
    default: () => ({span: 12, offset: 0}),
    validator
  }) mobile!: mediaQuery;

  @Prop({
    type: Object,
    default: () => ({span: 8, offset: 0}),
    validator
  }) pad!: mediaQuery;

  @Prop({
    type: Object,
    default: () => ({span: 6, offset: 0}),
    validator
  }) laptop!: mediaQuery;

  @Prop({
    type: Object,
    default: () => ({span: 4, offset: 0}),
    validator
  }) pc!: mediaQuery;

  @Prop({
    type: Object,
    default: () => ({span: 2, offset: 0}),
    validator
  }) pcw!: mediaQuery;

  @Prop({
    type: Object,
    default: () => ({span: 1, offset: 0}),
    validator
  }) pcx!: mediaQuery;

  get colClass() {
    const {span, offset, mobile, pad, laptop, pc, pcw, pcx} = this;
    return [
      ...(pcx && [`col-pcx-${pcx.span}`, `offset-pcx-${(pcx.offset)}`]),
      ...(pcw && [`col-pcw-${pcw.span}`, `offset-pcw-${(pcw.offset)}`]),
      ...(pc && [`col-pc-${pc.span}`, `offset-pc-${(pc.offset)}`]),
      ...(laptop && [`col-laptop-${laptop.span}`, `offset-laptop-${(laptop.offset)}`]),
      ...(pad && [`col-pad-${pad.span}`, `offset-pad-${(pad.offset)}`]),
      ...(mobile && [`col-mobile-${mobile.span}`, `offset-mobile-${(mobile.offset)}`]),
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
      width: ($n / 24) * 100%;
    }
  }

  // .col.offset-2 ~ .col.offset-24
  $class-prefix: offset-;
  @for $i from 0 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }

  // mobile
  @media (max-width: 576px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-mobile-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-mobile-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  // pad
  @media (min-width: 577px) and (max-width: 768px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-pad-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  // laptop
  @media (min-width: 769px) and (max-width: 992px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-laptop-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-laptop-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  // pc
  @media (min-width: 993px) and (max-width: 1200px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  // pcw
  @media (min-width: 1201px) and (max-width: 1600px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-pcw-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-pcw-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

  // pcx
  @media (min-width: 1601px) {
    // .col.col-1 ~ .col.col-24
    $class-prefix: col-pcx-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    // .col.offset-2 ~ .col.offset-24
    $class-prefix: offset-pcx-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }

}
</style>
