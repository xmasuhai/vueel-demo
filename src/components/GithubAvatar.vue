<template>
  <div>
    <GetGithubAvatar></GetGithubAvatar>
  </div>
</template>

<script lang="ts">
import GetGithubAvatar from '@/components/tsx-render/GetGithubAvatar';
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'GithubAvatar',
  props: {},
  components: {
    GetGithubAvatar
  }
});
</script>

<style lang="scss" scoped>

</style>
