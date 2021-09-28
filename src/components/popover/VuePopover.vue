<template>
  <div ref="popover"
       class="vue-popover"
       v-on="{
            [keepPopUp]: [clearTimer],
            [ifHover]: [openEvent],
            mouseleave: startTimer
            }"
       @[switcher]="togglePop">
    <div ref="contentWrapper"
         class="vue-content-wrapper"
         v-if="isVisible"
         v-on="multiEventOnContent"
         :class="{[`position-${position}`]: true}">
      <slot name="content" :closeEvent="closeEvent"></slot>
    </div>
    <span class="vue-trigger-wrapper"
          ref="triggerWrapper"
          v-on="multiEventOnTrigger">
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

  clientWidth = document.body.clientWidth;

  /*
  // 点击穿透
  get wrapperClass() {
    if (this.clientWidth <= 500) {
      return {
        'touchStopWrapper': true
      };
    }
    return {}
  }

  get triggerClass() {
    if (this.clientWidth <= 500) {
      return {
        'touchStopTrigger': true
      };
    }
    return {}
  }
*/

  // prop: [autoCloseDelay, position, trigger, zIndex]
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
  @Prop({
    type: Number,
    default: 999,
    required: false
  }) zIndex!: number;

  clearTimer() {
    clearTimeout(this.timer || undefined);
  }

  startTimer() {
    if (this.autoCloseDelay) {
      this.timer = window.setTimeout(() => {
        this.closeEvent();
      }, this.autoCloseDelay);
    }
  }

  // 触发器按钮绑定事件
  get multiEventOnTrigger() {
    return (this.trigger === 'click'
      ? {
        mouseover: this.clearTimer,
        mouseenter: this.clearTimer,
        touchstart: this.clearTimer,
      }
      : {
        // hover
        // mouseover: this.clearTimer,
      });
  }

  // 弹出框绑定事件
  get multiEventOnContent() {
    return {
      mouseover: this.clearTimer,
      mouseenter: this.clearTimer,
      mouseleave: this.startTimer,
    };
  }

  get ifHover() {
    return this.trigger === 'hover'
      ? 'mouseenter'
      : /* click */ null;
  }

  get keepPopUp() {
    return this.trigger === 'hover'
      ? 'mouseenter'
      : /* click */ 'touchstart';
  }

  // 定位 popover 显示位置
  // 计算触发按钮元素位置
  // 添加弹出框绝对定位的位置样式 top left
  positionPop() {
    // 获取 弹出消息框节点 的引用，放到 body 子节点的最后
    document.body.appendChild(this.$refs.contentWrapper as Node);

    // 获取 popover 弹出框元素, 按钮元素
    const {contentWrapper, triggerWrapper} = this.$refs;
    // 获取 按钮元素 左上顶点的位置坐标 width, height, top, left
    const {
      width: buttonWidth,
      height: buttonHeight,
      top: buttonTop,
      left: buttonLeft
    } = (triggerWrapper as HTMLElement)
      .getBoundingClientRect();
    // 获取 弹出框元素 height: popHeight 别名防止命名冲突覆盖
    const {height: popHeight} = (contentWrapper as HTMLElement)
      .getBoundingClientRect();
    (contentWrapper as HTMLElement).style.zIndex = `${this.zIndex}`;

    // 表驱动编程 四方向绝对定位位置对应表
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

    // 给弹出框元素添加绝对定位的位置样式 top left
    (contentWrapper as HTMLElement).style.top =
      positionList[`position-${this.position}` as positionListString].top + `px`;
    (contentWrapper as HTMLElement).style.left =
      positionList[`position-${this.position}` as positionListString].left + `px`;

  }

  // 定义一个点击关闭事件的回调函数
  closeHandler(e: Event) {
    // 点击的目标对象 即触发按钮 是否存在于 popover组件 包裹的div中
    const hasPopover = ((this.$refs.contentWrapper as Element)
      ?.contains(e.target as Node));
    // 如果 点击的目标对象 不存在于 包裹弹出框的div中 即 点击了document
    if (!hasPopover) {
      this.closeEvent();
    } else {return;}
  }

  get switcher() {
    return this.clientWidth >= 500 ? 'click' : 'touchstart';
  }

  listenToDocument() {
    const trigger = this.clientWidth >= 500 ? 'click' : 'touchstart';
    document.addEventListener(trigger, this.closeHandler);
  }

  rmListenerToDocument() {
    const trigger = this.clientWidth >= 500 ? 'click' : 'touchstart';
    document.removeEventListener(trigger, this.closeHandler);
  }

  // 关闭 弹出框 销毁事件监听
  closeEvent() {
    this.isVisible = false;
    this.rmListenerToDocument();
  }

  // 显示弹出框
  openEvent() {
    this.isVisible = true;
    this.onShowPopover();
  }

  // 点击按钮 执行的方法：切换显示/隐藏 popover
  togglePop(event: Event) {
    // 点击按钮部分 执行的逻辑
    // 判断 事件的目标节点在 中触发器节点 中
    if ((this.$refs.triggerWrapper as HTMLElement)
      ?.contains(event.target as Node)) {
      // 切换显示/隐藏 popover
      this.isVisible = !this.isVisible;
    } else {
      // 点击popover部分 执行的逻辑
      // 不执行任何逻辑
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
        // 移动端 300ms 点击延迟
        this.listenToDocument();
      }, 350);
    });
  }

  // 监听 this.isVisible 状态变化 执行相应的逻辑
  // 当 popover 显示时 执行onShowPopover
  // 当 popover 隐藏时 执行的逻辑
  @Watch('isVisible', /*{immediate: true}*/)
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
