<template>
  <span class="center">
    点赞：
    <VueIcon iconName="thumbs-up"></VueIcon>
  </span>
</template>

<script lang="ts">
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'thumbs-up',
  components: {VueIcon}
};
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
