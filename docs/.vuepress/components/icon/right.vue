<template>
  <span class="center">
    右箭头：
    <VueIcon iconName="right"></VueIcon>
  </span>
</template>

<script lang="ts">
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'right',
  components: {VueIcon}
};
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
