<template>
  <div class="popover" @click.stop="togglePop">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span class="trigger" ref="trigger">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VuePopover extends Vue {
  name = 'VuePopover';
  visible = false;

  togglePop() {
    this.visible = !this.visible;

    if (this.visible) {
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.contentWrapper as Node);
        const {top, left}
          = (this.$refs.trigger as Element).getBoundingClientRect();
        (this.$refs.contentWrapper as any).style.left = `${left + window.scrollX}px`;
        (this.$refs.contentWrapper as any).style.top = `${top + window.scrollY}px`;
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 2px;
  transform: translateY(-100%);
}
</style>
