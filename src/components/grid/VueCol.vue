<template>
  <div class="vue-col"
       :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, /*Inject,*/ Vue} from 'vue-property-decorator';
import objKeyValidator from '../../utils/objKeyValidator';
import _ from 'lodash';
import VueRow from './VueRow.vue';

// const validator = (value: mediaQuery) => objKeyValidator(value, ['span', 'offset']);
const validator = (value: mediaQuery) => { return objKeyValidator(value, ['span', 'offset']); };

@Component({
  components: {
    VueRow
  }
})
export default class VueCol extends Vue {
  name = 'VueCol';
  screenWidth = document.body.clientWidth;

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

  // 拼装各个媒体查询额class名的 中缀 后缀; 返回 类样式的数组
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

  // Inject 注入 属性 代替 data 数据 gutter = 0;
  // @Inject({from: 'gutterToSon'}) gutter!: number;
  gutter = 0;

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

  // 防抖处理
  @Emit('update:ClientWidth')
  listenResize() {
    _.debounce(() => {
      this.screenWidth = document.body.clientWidth;
    }, 500)();
    return this.screenWidth;
  }

  // 监听 resize 事件 相关 回调
  callResizeHandler() {
    window.addEventListener('resize', this.listenResize, true);
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.listenResize, true);
    });
  }

  mounted() {
    this.callResizeHandler();
  }

}
</script>
