<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueRow extends Vue {
  name = 'VueRow';
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;

  &:not(last-child) {
    margin-bottom: 16px;
  }

}
</style>
