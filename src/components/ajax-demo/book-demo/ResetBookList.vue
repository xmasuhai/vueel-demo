<template>
  <div>
    <div class="reset-book card">
      <VueButton @click="resetBookList">一键还原初始数据</VueButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent/*, ref*/} from '@vue/composition-api';
// import {getBookList, delBook} from '@/components/ajax-demo/http-request/bookInfoOperations';
import VueButton from '@/components/button/VueButton.vue';
import {getBookInfo} from '@/components/ajax-demo/util/getBookInfo';

export default defineComponent({
  name: 'ResetBookList',
  components: {
    VueButton
  },
  setup(/*props, ctx*/) {
    const resetBookList = () => {
      // 获取图书列表 rows

      const rows = getBookInfo()

      // 根据图书列表 依次删除
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