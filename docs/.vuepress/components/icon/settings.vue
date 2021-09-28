<template>
  <span class="center">
    设置：
    <VueIcon iconName="settings"></VueIcon>
  </span>
</template>

<script lang="ts">
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'settings',
  components: {VueIcon}
};
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
