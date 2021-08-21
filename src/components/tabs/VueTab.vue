<template>
  <div class="vue-tab">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueTab extends Vue {
  name = 'VueTab';
}
</script>

<style lang="scss" scoped>
.vue-tab {
}
</style>
