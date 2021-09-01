<template>
  <div ref="popover"
       class="popover"
       v-on="{[popUp]: [openEvent, clearTimer], [popDown]: startTimer}"
       @click="togglePop">
    <div ref="contentWrapper"
         class="content-wrapper"
         v-if="isVisible"
         v-on="multiEvent"
         :class="{[`position-${position}`]: true}">
      <slot name="content" :closeEvent="closeEvent"></slot>
    </div>
    <span class="triggerWrapper"
          ref="triggerWrapper"
          v-on="multiEvent">
      <slot>button</slot>
    </span>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component
export default class VuePopover extends Vue {
  name = 'VuePopover';
  isVisible = false;
  timer: number | null = null;

  // prop: [autoCloseDelay, position, trigger]
  @Prop({
    type: [Number, Boolean], default: 580, validator(value: false | number): boolean {
      return (value === false) || (value > 0);
    }
  }) autoCloseDelay!: false | number;
  @Prop({
    type: String,
    default: 'top',
    validator(value: string): boolean {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    }
  }) position!: 'top' | 'bottom' | 'left' | 'right';
  @Prop({
    type: String,
    default: 'hover',
    validator(value: string): boolean {
      return ['hover', 'click'].includes(value);
    }
  }) trigger!: 'hover' | 'click';

  clearTimer() {
    clearTimeout(this.timer || undefined);
  }

  startTimer() {
    if (this.autoCloseDelay) {
      this.timer = setTimeout(() => {
        this.closeEvent();
      }, this.autoCloseDelay);
    }
  }

  get multiEvent() {
    return {mouseover: this.clearTimer, mouseout: this.startTimer};
  }

  get popUp() {
    return this.trigger === 'hover'
      ? 'mouseenter'
      : '';
  }

  get popDown() {
    return this.trigger === 'hover'
      ? 'mouseleave'
      : '';
  }

  // 定位 popover 显示位置
  positionPop() {
    // 获取 弹出消息框节点 的引用，放到 body 子节点的最后
    document.body.appendChild(this.$refs.contentWrapper as Node);

    // 获取 popover元素 按钮元素
    const {contentWrapper, triggerWrapper} = this.$refs;
    // 获取 按钮元素 左上顶点的位置坐标 width, height, top, left
    const {
      width: buttonWidth,
      height: buttonHeight,
      top: buttonTop,
      left: buttonLeft
    } = (triggerWrapper as HTMLElement)
      .getBoundingClientRect();
    // 获取 popover元素 height
    const {height: popHeight} = (contentWrapper as HTMLElement)
      .getBoundingClientRect();

    // 表驱动编程
    const positionList = {
      'position-top': {
        top: buttonTop + window.scrollY,
        left: buttonLeft + window.scrollX
      },
      'position-bottom': {
        top: buttonTop + buttonHeight + window.scrollY,
        left: buttonLeft + window.scrollX
      },
      'position-left': {
        // popover高度居中 对齐于 按钮高度，按钮于popover高度差值的1/2
        top: buttonTop + Math.abs(buttonHeight - popHeight) / 2 + window.scrollY,
        left: buttonLeft + window.scrollX
      },
      'position-right': {
        top: buttonTop + Math.abs(buttonHeight - popHeight) / 2 + window.scrollY,
        left: buttonLeft + buttonWidth + window.scrollX
      },
    };

    (contentWrapper as HTMLElement).style.top =
      positionList[`position-${this.position}` as positionListString].top + `px`;
    (contentWrapper as HTMLElement).style.left =
      positionList[`position-${this.position}` as positionListString].left + `px`;

  }

  // 定义一个点击关闭事件的回调函数
  closeHandler(e: Event) {
    // 点击的目标对象 是否存在于 popover 包裹div中
    const hasPopover = ((this.$refs.contentWrapper as Element)
      ?.contains(e.target as Node));
    // 如果 点击的目标对象 不存在于 包裹弹出框的div中 即 点击了document
    if (!hasPopover) {
      this.closeEvent();
    } else {return;}
  }

  listenToDocument() {
    document.addEventListener('click', this.closeHandler);
  }

  rmListenerToDocument() {
    document.removeEventListener('click', this.closeHandler);
  }

  // 关闭 弹出框 销毁事件监听
  closeEvent() {
    this.isVisible = false;
    this.rmListenerToDocument();
  }

  openEvent() {
    this.isVisible = true;
    this.onShowPopover();
  }

  // 点击按钮 执行的方法：切换显示/隐藏 popover
  togglePop(event: Event) {
    // 点击按钮部分 执行的逻辑
    if ((this.$refs.triggerWrapper as HTMLElement)
      ?.contains(event.target as Node)) {
      // 切换显示/隐藏 popover
      this.isVisible = !this.isVisible;
    } else {
      // 点击popover部分 执行的逻辑
    }

  }

  onShowPopover() {
    this.$nextTick(() => {
      // 显示 弹出框，将弹出框节点放到 body 子节点的最后
      // 改变弹出框样式，使其出现在相对按钮合适的位置
      this.positionPop();

      // 使 添加监听在 点击事件冒泡 之后 异步执行
      setTimeout(() => {
        // 给 document 添加 click 事件监听
        this.listenToDocument();
      });
    });
  }

  // 监听 this.isVisible 状态变化 执行对应的逻辑
  @Watch('isVisible')
  onVisibleChange(newValue: boolean) {
    if (newValue) {
      // 当 popover 显示时 执行的逻辑
      this.onShowPopover();
    } else {
      // 当 popover 隐藏时 执行的逻辑
      return;
    }
  }

}
</script>

<style lang="scss" scoped>
@import './VuePopover.scss';

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .triggerWrapper {
    display: inline-block;
  }

}

.content-wrapper {
  display: block;
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  background-color: white;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;

  // 方向指向尖角基础样式
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: .65em solid transparent;
  }

  // 方向指向尖角样式
  $position-list: 'top', 'bottom', 'left', 'right';
  @each $name in $position-list {
    &.position-#{$name} {
      //noinspection SassScssUnresolvedPlaceholderSelector
      @extend %position-#{$name}-default;

      &::before, &::after {
        //noinspection SassScssUnresolvedPlaceholderSelector
        @extend %position-#{$name}-common;
      }

      &::before {
        //noinspection SassScssUnresolvedPlaceholderSelector
        @extend %position-#{$name}-before;
      }

      &::after {
        //noinspection SassScssUnresolvedPlaceholderSelector
        @extend %position-#{$name}-after;
      }

    }

  }


}

</style>
