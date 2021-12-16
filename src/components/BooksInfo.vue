<template>
  <div class="books-info-demo">
    <!-- 添加图书的Panel面板 -->
    <AddBookInfo></AddBookInfo>

    <!-- 展示图书的表格 -->
    <ShowBookInfo></ShowBookInfo>
  </div>
</template>

<script lang="ts">
import AddBookInfo from '@/components/ajax-demo/book-demo/AddBookInfo.vue';
import ShowBookInfo from '@/components/ajax-demo/book-demo/ShowBookInfo.vue';
import {defineComponent, provide, reactive} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: "BooksInfo",
  components: {
    AddBookInfo,
    ShowBookInfo
  },
  props: {},
  setup() {
    const eventbus = reactive(new Vue());
    provide<Vue>('eventbus', eventbus);
    return {
      eventbus
    }
  }
});
</script>

<style lang="scss" scoped>

.books-info-demo {
}
</style>
