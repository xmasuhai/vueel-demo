<template>
  <div>
    <div class="reset-book card">
      <VueButton @click="resetBookList">一键还原初始数据</VueButton>
    </div>
  </div>
</template>

<script lang="ts">
import {delBook} from '@/components/ajax-demo/http-request/bookInfoOperations';
import {getBookInfo} from '@/components/ajax-demo/util/getBookInfo';
import {watchRenderBookList} from '@/components/ajax-demo/util/watchRenderBookList';
import VueButton from '@/components/button/VueButton.vue';
import {defineComponent, inject, Ref} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: 'ResetBookList',
  components: {
    VueButton
  },
  setup(/*props, ctx*/) {
    const eventbus = inject<Vue>('eventbus');
    const toast = inject<Function>('toast');
    let rows: Ref<{ [p: string]: string }[]>;

    const resetBookList = (): void => {
      // 获取图书列表 rows
      rows = getBookInfo();
      /* 按条件 重置列表 */
      // 递归终止条件 不清除默认数据
      if (rows.value.length === 3) {
        return toast && toast('保留初始数据！');
      }

      // 从第4项开始 遍历每一项 执行清除 delbook()
      rows.value.forEach((item) => {
        const id = item.id;
        // 根据图书id 依次删除
        (Number(id) > 3) && delBook({id: `${id}`})
          .then(res => {
            if (res.status === 200) {
              const {data} = res.data;
              rows = data;
            }
          })
          .catch(err => {
            return toast && toast(`删除图书失败！${err.message}`);
          });

      });

      // 监听getBookInfo()依赖，更新渲染图书列表
      watchRenderBookList(getBookInfo(), eventbus);
      return toast && toast('重置初始数据！') && resetBookList(); // 递归判断

    };

    return {
      resetBookList
    };
  }
});
</script>

<style lang="scss" scoped>
@import './card.scss';

.reset-book {
  margin: 10px auto;
}
</style>
