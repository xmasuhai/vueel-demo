<template>
  <span class="center">
    下箭头：
    <VueIcon iconName="arrow-down"></VueIcon>
  </span>
</template>

<script lang="ts">
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'arrow-down',
  components: {VueIcon}
};
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
