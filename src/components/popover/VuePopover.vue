<template>
  <div ref="popover"
       class="popover"
       @click="togglePop">
    <div ref="contentWrapper"
         class="content-wrapper"
         v-if="isVisible"
         :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
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

  @Prop({
    type: String,
    default: 'top',
    validator(value: string): boolean {
      return ['top', 'bottom', 'left', 'right'].includes(value);
    }
  }) position!: string;

  // 定位 popover 显示位置
  // 'top', 'bottom', 'left', 'right'
  positionPop() {
    // 获取 弹出消息框节点 的引用，放到 body 子节点的最后
    document.body.appendChild(this.$refs.contentWrapper as Node);

    const {contentWrapper, triggerWrapper} = this.$refs;
    // 获取 按钮元素 左上顶点的位置坐标 top, left
    const {width, height, top, left}
      = (triggerWrapper as HTMLElement)
      .getBoundingClientRect();
    const {height: popHeight} = (contentWrapper as HTMLElement)
      .getBoundingClientRect();

    if (this.position === 'top') {
      // 设置 弹出消息框节点 的行内样式，使其定位到 按钮元素 上方
      (contentWrapper as HTMLElement).style.top = `${top + window.scrollY}px`;
      (contentWrapper as HTMLElement).style.left = `${left + window.scrollX}px`;
    } else if (this.position === 'bottom') {
      // 设置 弹出消息框节点 的行内样式，使其定位到 按钮元素 下方
      (contentWrapper as HTMLElement).style.top = `${top + height + window.scrollY}px`;
      (contentWrapper as HTMLElement).style.left = `${left + window.scrollX}px`;
    } else if (this.position === 'left') {
      // 设置 弹出消息框节点 的行内样式，使其定位到 按钮元素 左侧
      (contentWrapper as HTMLElement).style.left = `${left + window.scrollX}px`;
      // popover高度居中 对齐于 按钮高度，按钮于popover高度差值的1/2
      (contentWrapper as HTMLElement).style.top =
        `${top + Math.abs(height - popHeight) / 2 + window.scrollY}px`;
    } else if (this.position === 'right') {
      // 设置 弹出消息框节点 的行内样式，使其定位到 按钮元素 右侧
      (contentWrapper as HTMLElement).style.left = `${left + width + window.scrollX}px`;
      (contentWrapper as HTMLElement).style.top =
        `${top + Math.abs(height - popHeight) / 2 + window.scrollY}px`;
    }

  }

  // 定义一个点击事件的回调函数
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
$border-color: #333;
$border-radius: 4px;
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

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      top: 100%;
      border-top-color: #333;
    }

    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      bottom: 100%;
      border-bottom-color: #333;
    }

    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: 100%;
      border-left-color: #333;
    }

    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }

  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      right: 100%;
      border-right-color: #333;
    }

    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }

}
</style>
