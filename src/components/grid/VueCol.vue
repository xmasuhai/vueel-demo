<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, /*Inject,*/ Vue} from 'vue-property-decorator';
import objKeyValidator from '../../utils/objKeyValidator';
import _ from 'lodash';

// const validator = (value: mediaQuery) => objKeyValidator(value, ['span', 'offset']);
const validator = (value: mediaQuery) => { return objKeyValidator(value, ['span', 'offset']); };

@Component
export default class VueCol extends Vue {
  name = 'VueCol';
  screenWidth = document.body.clientWidth;

  // Inject 注入 属性 代替 data 数据 gutter = 0;
  // @Inject({from: 'gutterToSon'}) gutter!: number;
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

  // 拼装class名的 中缀 后缀; 返回 类样式的数组
  createMediaClasses(mediaObj: { span: number; offset: number }, infix = '') {
    if (!mediaObj) {return [];}
    const array = [];
    if (mediaObj.span) {
      array.push(`col-${infix}${mediaObj.span}`);
    }
    if (mediaObj.offset) {
      array.push(`offset-${infix}${mediaObj.offset}`);
    }
    return array;
  }

  get colClass() {
    const {span, offset, mobile, pad, laptop, pc, pcw, pcx} = this;
    const createMediaClasses = this.createMediaClasses;
    return [
      ...createMediaClasses({span, offset}),
      ...createMediaClasses(mobile, 'mobile-'),
      ...createMediaClasses(pad, 'pad-'),
      ...createMediaClasses(laptop, 'laptop-'),
      ...createMediaClasses(pc, 'pc-'),
      ...createMediaClasses(pcw, 'pcw-'),
      ...createMediaClasses(pcx, 'pcx-'),
    ];
  }

  get colStyle() {
    const {gutter} = this;
    if (!gutter) {
      return {};
    }
    const colGutter = `${gutter / 2}px`;
    // console.log('gutter in VueCol', colGutter);
    return {
      marginLeft: colGutter,
      marginRight: colGutter
    };
  }

  @Emit('update:ClientWidth')
  listenResize() {
    _.debounce(() => {
      this.screenWidth = document.body.clientWidth;
    }, 500)();
    return this.screenWidth;
  }

  mounted() {
    window.addEventListener('resize', this.listenResize, true);
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.listenResize, true);
    });
  }

}
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:list";

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
  // $media-types: ($type, $size)
  $media-types: (
    'mobile': 372px,
    'pad': 577px,
    'laptop': 769px,
    'pc': 993px,
    'pcw': 1201px,
    'pcx': 1601px,
  );
  @each $type, $size in $media-types {
    @media (min-width: $size) {
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
