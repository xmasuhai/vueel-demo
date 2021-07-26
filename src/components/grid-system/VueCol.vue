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
  }) offset!: number;

  get colClass() {
    const {span, offset} = this;
    return [
      span && `col-${span}`,
      offset && `offset-${offset}`
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
  max-width: 100%;
  flex-grow: 1;
  display: inline-flex;
  justify-content: center;
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
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
