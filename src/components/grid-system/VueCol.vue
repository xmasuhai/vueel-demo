<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueCol extends Vue {
  name = 'VueCol';

  @Prop({
    type: [String, Number],
    default: '12'
  }) span!: string;

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

}
</style>
