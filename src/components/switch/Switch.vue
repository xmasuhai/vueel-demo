<template>
  <div>
    Switch
  </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance} from '@vue/composition-api';

export default defineComponent({
  name: 'Switch',
  setup(props, ctx) {
    console.log(props);
    console.log(getCurrentInstance());
    console.log(ctx);
  }
});
</script>

<style lang="scss" scoped>

</style>
