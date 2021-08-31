<template>
  <transition :name="fadeAnimationName" @after-leave="handleAfterLeave">
    <div class="wrapper"
         :class="toastPosition"
         v-show="visible">
      <div class="toast"
           :style="positionOffsetStyle"
           ref="toast"
           @mouseenter="clearTimer"
           @mouseleave="startTimer">
        <div class="message">
          <slot v-if="!enableUnsafeHTML">{{ message }}</slot>
          <div v-else v-html="ifSlots/*$slots.default[0]*/"></div>
        </div>
        <template v-if="closeButton">
          <div ref="line" class="line"></div>
          <span class="closeButton" @click="onClickCloseButton">
            {{ closeButton.text }}
        </span>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Emit, Prop, Ref, Vue, Watch} from 'vue-property-decorator';
import {closeButton} from '@/types/VueToast';
import {VNode} from 'vue/types/vnode';
// import {bus} from '../../main';

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
  @Prop({
    type: [Number, Boolean], default: 1800, validator(value: false | number): boolean {
      return (value === false) || (value > 0);
    }
  }) autoCloseDelay!: false | number;
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

  // 根据提示框出现的位置 应用不同类样式进入动画
  get fadeAnimationName() {
    const map = {
      'position-top': 'eat-toast-from-top',
      'position-middle': 'eat-toast-fade',
      'position-bottom': 'eat-toast-from-bottom',
    };
    type mapKey = 'position-top' | 'position-middle' | 'position-bottom';
    return map[Object.keys(this.toastPosition)[0] as mapKey];
  }

  // 提供偏移量
  get positionOffsetStyle() {
    return {
      [`${this.position}`]: `${this.verticalOffset}px`
    };
  }

  //

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
  @Emit('beforeClose')
  close() {
    this.isClosed = true;
  }

  clearTimer() {
    clearTimeout(this.timer || undefined);
  }

  startTimer() {
    if (this.autoCloseDelay) {
      this.timer = setTimeout(() => {
        if (!this.isClosed) {
          this.close();
        }
      }, this.autoCloseDelay);
    }
  }

  // 异步 得到渲染后的父元素高度
  @Ref() readonly line!: HTMLElement;
  @Ref() readonly toast!: HTMLElement;

  getRenderedHeight() {
    this.$nextTick(() => {
      if (this.line) {
        this.toast.style.height =
          `${this.toast.getBoundingClientRect().height}px`;
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

  get ifSlots() {
    return (this.$slots.default ? this.$slots.default[0] : this.message);
  }

  haveSlots() {
    if (!this.$slots.default) {
      this.$slots.default = [`<slot></slot>` as unknown as VNode];
    }
  }

  mounted() {
    this.haveSlots();
    // bus.$on('pushSlot', (value: VNode) => {this.haveSlots(value);});
    this.popUpToast();
    document.addEventListener('keydown', this.keydown);
    this.getRenderedHeight(); // 注意顺序 必须放在 this.popUpToast() 之后
    this.startTimer();
    this.$once('hook:beforeDestroy', () => {
      // bus.$off('pushSlot');
      document.removeEventListener('keydown', this.keydown);
      this.clearVM();
    });
  }

}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0%);
  }
}

.eat-toast-fade-enter-active,
.eat-toast-fade-leave-active {
  opacity: 0;
}

.eat-toast-from-top-enter-active {
  animation: slide-down .5s;
}

.eat-toast-from-top-leave-active {
  animation: slide-down .5s reverse;
}

.eat-toast-from-bottom-enter-active {
  animation: slide-up .5s;
}

.eat-toast-from-bottom-leave-active {
  animation: slide-up .5s reverse;
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, transform .4s ease, top 0.4s ease;

  &.position-top {
    top: 0;

    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    transform: translate(-50%, -50%);
    top: 50%;
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  max-width: 288px;
  background-color: rgba(0, 0, 0, .74);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: ghostwhite;
  padding: 0 16px;
  display: flex;
  align-items: center;

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

</style>
