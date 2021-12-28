<template>
  <div class="books-info-demo">
    <!-- 添加图书的Panel面板 -->
    <AddBookInfo></AddBookInfo>
    <!--一键清除 还原图书列表初始数据-->
    <ResetBookList></ResetBookList>
    <!-- 展示图书的表格 -->
    <ShowBookInfo></ShowBookInfo>
    <hr/>
    <!--FormData-->
    <FormData></FormData>
    <!-- 上传文件 -->
    <Upload></Upload>
  </div>
</template>

<script lang="ts">
import AddBookInfo from '@/components/ajax-demo/book-demo/AddBookInfo.vue';
// import ShowBookInfo from '@/components/ajax-demo/book-demo/ShowBookInfo.vue';
import ResetBookList from '@/components/ajax-demo/book-demo/ResetBookList.vue';
import FormData from '@/components/ajax-demo/formdata/FormData.vue';
import Upload from '@/components/ajax-demo/formdata/Upload.vue';
import {defineAsyncComponent, defineComponent, provide, reactive} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: 'BooksInfo',
  components: {
    Upload,
    FormData,
    AddBookInfo,
    ShowBookInfo: defineAsyncComponent(() => import('./ajax-demo/book-demo/ShowBookInfo.vue')),
    ResetBookList
  },
  props: {},
  setup() {
    const eventbus = reactive(new Vue());
    const toast = eventbus.$toast;

    provide<Vue>('eventbus', eventbus);
    provide<Function>('toast', toast);

    return {
      eventbus
    };
  }
});
</script>

<style lang="scss" scoped>
.books-info-demo {
}
</style>
