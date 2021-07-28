<template>
  <div class="col"
       :style="colStyle"
       :class="colClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

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
    validator(value: mediaQuery): boolean {
      const keys = Object.keys(value);
      let valid = true;
      keys.forEach((key) => {
        if (!['span', 'offset'].includes(key)) {
          valid = false;
        }
      });
      return valid;
    }
  }) mobile!: mediaQuery;

  get colClass() {
    const {span, offset, mobile} = this;
    let mobileClass: string[] = [''];
    if (mobile) {
      mobileClass = [
        `col-mobile-${mobile.span}`,
        `offset-mobile-${(mobile.offset)}`,
      ];
    }
    return [
      span && `col-${span}`,
      offset && `offset-${offset}`,
      ...(mobileClass)
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
}
</style>
