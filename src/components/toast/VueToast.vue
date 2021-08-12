<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueToast extends Vue {
  name = 'VueToast';
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
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, .74);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  color: ghostwhite;
  padding: 0 16px;
}
</style>
