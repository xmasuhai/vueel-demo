<template>
  <div>
    <div class="reset-book card">
      <VueButton @click="resetBookList">一键还原初始数据</VueButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject/*, ref*/} from '@vue/composition-api';
// import {getBookList, delBook} from '@/components/ajax-demo/http-request/bookInfoOperations';
import VueButton from '@/components/button/VueButton.vue';
import {getBookInfo} from '@/components/ajax-demo/util/getBookInfo';
import {delBook} from '@/components/ajax-demo/http-request/bookInfoOperations';
import {watchRenderBookList} from '@/components/ajax-demo/util/watchRenderBookList';
import Vue from 'vue';

export default defineComponent({
  name: 'ResetBookList',
  components: {
    VueButton
  },
  setup(/*props, ctx*/) {
    const eventbus = inject<Vue>('eventbus');
    const toast = inject<Function>('toast');
    const resetBookList = () => {
      // 获取图书列表 rows
      let rows = getBookInfo();

      rows.value.forEach((item) => {
        const id = item.id;

        // 根据图书id 依次删除
        delBook({id: `${id}`})
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

      watchRenderBookList(getBookInfo(), eventbus);
      return toast && toast('还原初始数据成功！');

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