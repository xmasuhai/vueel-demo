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
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class VueToast extends Vue {
  name = 'VueToast';

  visible = false;
  message = '';
  duration = 1800;
  timer: number | null = null;
  verticalOffset = 20;
  closed = false;
  onClose = null;

  get positionStyle() {
    return {
      'top': `${this.verticalOffset}px`
    };
  }

  @Watch('closed')
  onClosedChange(newVal: boolean) {
    if (newVal) {
      this.visible = false;
    }
  }

  handleAfterLeave() {
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }

  close() {
    this.closed = true;
  }

  clearTimer() {
    clearTimeout(this.timer || undefined);
  }

  startTimer() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  }

  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 0);
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
}

.eat-toast-fade-enter,
.eat-toast-fade-leave-to,
.eat-toast-fade-enter-active,
.eat-toast-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
