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
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: "BooksInfo",
  components: {
    AddBookInfo,
    ShowBookInfo
  },
  props: {},
/*  setup() {
  }*/
});
</script>

<style lang="scss" scoped>

.books-info-demo {
}
</style>
