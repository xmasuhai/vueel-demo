<template>
  <VueButtonGroup>
    <VueButton icon="left">上一页</VueButton>
    <VueButton icon="settings">更多</VueButton>
    <VueButton icon="right"
               icon-position="right">下一页
    </VueButton>
  </VueButtonGroup>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';
import VueButtonGroup from '@/components/button/VueButtonGroup';

export default {
  name: 'group',
  components: {
    VueButton,
    VueButtonGroup
  }
};
</script>
