<template>
  <div class="popover" @click="togglePop">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible">
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
      <slot>button</slot>
    </span>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class VuePopover extends Vue {
  name = 'VuePopover';
  visible = false;

  // 定位 popover 显示位置
  positionPop() {
    // 获取 弹出消息框节点 的引用，放到 body 子节点的最后
    document.body.appendChild(this.$refs.contentWrapper as Node);

    // 获取 按钮元素 左上顶点的位置坐标 top, left
    const {top, left}
      = (this.$refs.triggerWrapper as Element)
      .getBoundingClientRect();
    // 设置 弹出消息框节点 的行内样式，使其定位到 按钮元素 上方
    (this.$refs.contentWrapper as any).style.top = `${top + window.scrollY}px`;
    (this.$refs.contentWrapper as any).style.left = `${left + window.scrollX}px`;

  }

  // 关闭 弹出框 销毁事件监听
  closeEvent() {
    this.visible = false;
    document.removeEventListener('click', this.closeHandler);
  }

  // 定义一个点击事件的回调函数
  closeHandler(e: Event) {
    const hasPopover = ((this.$refs.contentWrapper as Element)
      ?.contains(e.target as Node));
    // 如果 点击的目标对象 不存在于 包裹弹出框的div中
    if (!hasPopover) {
      this.closeEvent();
    }
  }

  listenToDocument() {
    // 在文档上 添加 点击事件 的监听
    document.addEventListener('click', this.closeHandler);
  }

  // 点击按钮 执行的方法：切换显示/隐藏 popover
  togglePop(event: Event) {
    // 点击按钮部分 执行的逻辑
    if ((this.$refs.triggerWrapper as HTMLElement)
      ?.contains(event.target as Node)) {
      // 切换显示/隐藏 popover
      this.visible = !this.visible;
    } else {
      // 点击popover部分 执行的逻辑
    }

  }

  // 监听 this.visible 状态变化 执行逻辑
  @Watch('visible')
  onVisibleChange(newValue: boolean) {
    // 当 popover 显示时 执行的逻辑
    // 显示 弹出框，将弹出框节点放到 body 子节点的最后
    // 改变弹出框样式，使其出现在相对按钮合适的位置
    if (newValue) {
      this.$nextTick(() => {
        // 将 弹出框 放到body 里
        this.positionPop();

        // 使 添加监听在 点击事件冒泡 之后 执行
        setTimeout(() => {
          // 给 document 添加 click 事件监听
          this.listenToDocument();
        });
      });
    } else {
      // 当 popover 隐藏时 执行的逻辑
    }
  }

}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .triggerWrapper {
  }
}

.content-wrapper {
  display: block;
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 2px;
  transform: translateY(-100%);
  background-color: white;
}
</style>
