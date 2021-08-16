<template>
  <transition name="eat-toast-fade" @after-leave="handleAfterLeave">
    <div class="toast"
         :class="toastPosition"
         :style="positionOffsetStyle"
         v-show="visible"
         ref="toast"
         @mouseenter="clearTimer"
         @mouseleave="startTimer">
      <div class="message">
        <slot v-if="!enableUnsafeHTML"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <template v-if="closeButton">
        <div ref="line" class="line"></div>
        <span class="closeButton" @click="onClickCloseButton">
          {{ closeButton.text }}
        </span>
      </template>
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {closeButton} from '@/types/VueToast';

@Component
export default class VueToast extends Vue {
  name = 'VueToast';

  visible = false;
  message = '';
  timer: number | null = null;
  verticalOffset = 0;
  isClosed = false;
  onClose = null;

  @Prop({type: Boolean, default: false}) enableUnsafeHTML!: boolean;
  @Prop({type: Boolean, default: true}) enableEscapeKey!: boolean;
  @Prop({
    type: String,
    default: 'top',
    validator(value: string): boolean {
      return ['top', 'middle', 'bottom'].includes(value);
    }
  }) position!: 'top' | 'middle' | 'bottom';
  @Prop({type: Boolean, default: true}) autoClose!: boolean;
  @Prop({type: Number, default: 1800}) autoCloseDelay!: number;
  @Prop({
    type: Object,
    default() {
      return undefined;
    }
  }) closeButton: closeButton | undefined;

  onClickCloseButton() {
    this.isClosed = true;
    if (typeof (this?.closeButton?.callback) === 'function') {
      this.closeButton.callback(this);
    }
  }

  // 决定提示框出现的位置
  get toastPosition(): {} {
    return {
      [`position-${this.position}`]: true
    };
  }

  // 提供偏移量
  get positionOffsetStyle() {
    return {
      [`${this.position}`]: `${this.verticalOffset}px`
    };
  }

  // 监听 closed 的状态 决定visible是否变化
  @Watch('isClosed')
  onClosedChange(newVal: boolean) {
    if (newVal) {
      this.visible = false;
    }
  }

  // 元素离开后执行钩子
  handleAfterLeave() {
    this.clearVM();
  }

  //  清除组件
  clearVM() {
    this.$el.remove();
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }

  // 显示提示框
  popUpToast() {
    this.visible = true;
  }

  // 关闭提示框
  close() {
    this.isClosed = true;
  }

  clearTimer() {
    clearTimeout(this.timer || undefined);
  }

  startTimer() {
    if (this.autoClose && this.autoCloseDelay > 0) {
      this.timer = setTimeout(() => {
        if (!this.isClosed) {
          this.close();
        }
      }, this.autoCloseDelay);
    }
  }

  // 异步 得到渲染后的父元素高度
  getRenderedHeight() {
    this.$nextTick(() => {
      if (this.$refs.line) {
        (this.$refs.line as HTMLElement).style.height =
          `${(this.$refs.toast as HTMLElement).getBoundingClientRect().height}px`;
      }
    });
  }

  // 按Escape键关闭消息
  keydown(e: KeyboardEvent) {
    if (this.enableEscapeKey && e.key === `Escape`) {
      if (!this.isClosed) {
        this.close();
      }
    }
  }

  mounted() {
    this.popUpToast();
    document.addEventListener('keydown', this.keydown);
    this.getRenderedHeight(); // 注意顺序 必须放在 this.popUpToast() 之后
    this.startTimer();
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', this.keydown);
      this.clearVM();
    });
  }

}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  max-width: 288px;
  position: fixed;
  left: 50%;
  background-color: rgba(0, 0, 0, .74);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: ghostwhite;
  padding: 0 16px;
  transition: opacity 0.3s, transform .4s, top 0.4s;
  //overflow: hidden;
  display: flex;
  align-items: center;
  transform: translateX(-50%); //一次有效赋值

  &.position-top {
    top: 0;
  }

  &.position-middle {
    transform: translate(-50%, -50%);
    top: 50%;

  }

  &.position-bottom {
    bottom: 0;
  }

  .message {
    padding: 8px 0;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }

  .closeButton {
    padding-left: 16px;
    min-width: 40px;
    flex-shrink: 0;
  }

}

.eat-toast-fade-enter,
.eat-toast-fade-leave-to,
.eat-toast-fade-enter-active,
.eat-toast-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
