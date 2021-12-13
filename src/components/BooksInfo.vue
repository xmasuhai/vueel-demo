<template>
  <div>
    BooksInfo.vue
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'BooksInfo',
  props: {},
  setup(props, ctx) {
    const a = [props, ctx];
    a.push(1);
  }
});
</script>

<style lang="scss" scoped>
@import './book-demo/copystrap.scss';
</style>
