<template>
  <div class="popover" @click="togglePop">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>

    <slot></slot>
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
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    padding: 2px;
  }
}
</style>
