<template>
  <div class="popover" @click="togglePop">
    <slot name="content" v-if="visible"></slot>
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
}
</style>
