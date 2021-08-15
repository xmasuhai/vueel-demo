<template>
  <transition name="eat-toast-fade" @after-leave="handleAfterLeave">
    <div :class="['toast',
                  'customClass',
                 ]"
         :style="positionStyle"
         v-show="visible"
         @mouseenter="clearTimer"
         @mouseleave="startTimer"
    >
      <slot></slot>
      <template v-if="closeButton">
        <div class="line"></div>
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
  verticalOffset = 8;
  isClosed = false;
  onClose = null;

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

  get positionStyle() {
    return {
      'top': `${this.verticalOffset}px`
    };
  }

  // 监听 closed 的状态
  @Watch('isClosed')
  onClosedChange(newVal: boolean) {
    if (newVal) {
      this.visible = false;
    }
  }

  // 元素离开后执行钩子
  handleAfterLeave() {
    this.$el.remove();
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }

  popUpToast() {
    this.visible = true;
  }

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

  mounted() {
    this.popUpToast();
    this.startTimer();
  }

}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
.toast {
  font-size: $font-size;
  height: $toast-height;
  position: fixed;
  top: 3px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, .74);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: ghostwhite;
  padding: 0 16px;
  transition: opacity 0.3s, transform .4s, top 0.4s;
  overflow: hidden;
  display: flex;
  align-items: center;

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
