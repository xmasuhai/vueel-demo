<template>
  <div class="books-info-demo">

    <VueCodePresentation legendName="图书接口实践">
      <VueDetail summaryString="添加图书的Panel面板">
        <AddBookInfo></AddBookInfo>
      </VueDetail>
      <VueDetail summaryString="一键清除 还原图书列表初始数据">
        <ResetBookList></ResetBookList>
      </VueDetail>
      <VueDetail summaryString="展示图书的表格">
        <ShowBookInfo></ShowBookInfo>
      </VueDetail>
    </VueCodePresentation>

    <VueCodePresentation legendName="表单接口实践">
      <VueDetail summaryString="提交数据">
        <FormData></FormData>
      </VueDetail>
      <VueDetail summaryString="上传文件">
        <Upload></Upload>
      </VueDetail>
    </VueCodePresentation>

    <VueCodePresentation legendName="跨域接口实践">
      <VueDetail summaryString="JSONP">
        <AjaxCrossDomain></AjaxCrossDomain>
      </VueDetail>
    </VueCodePresentation>

  </div>
</template>

<script lang="ts">
// 动态导入测试 // import ShowBookInfo from '@/components/ajax-demo/book-demo/ShowBookInfo.vue';
import AddBookInfo from '@/components/ajax-demo/book-demo/AddBookInfo.vue';
import ResetBookList from '@/components/ajax-demo/book-demo/ResetBookList.vue';
import AjaxCrossDomain from '@/components/ajax-demo/cross-domain/AjaxCrossDomain';
import FormData from '@/components/ajax-demo/formdata/FormData.vue';
import Upload from '@/components/ajax-demo/formdata/Upload.vue';
import {defineAsyncComponent, defineComponent, provide, reactive} from '@vue/composition-api';
import Vue from 'vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';
import VueDetail from './code-presentation/VueDetail.vue';

export default defineComponent({
  name: 'BooksInfo',
  components: {
    Upload,
    FormData,
    AddBookInfo,
    ShowBookInfo: defineAsyncComponent(() => import('./ajax-demo/book-demo/ShowBookInfo.vue')),
    ResetBookList,
    AjaxCrossDomain,
    VueDetail,
    VueCodePresentation
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
