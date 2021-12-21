import Vue from 'vue';
import VueCompositionAPI, {ref} from '@vue/composition-api';
import {getBookList} from '@/components/ajax-demo/http-request/bookInfoOperations';

Vue.use(VueCompositionAPI);
const toast = (new Vue()).$toast;

export const getBookInfo = () => {
  const rows = ref<string[]>(['']);
  getBookList()
    .then(res => {
      if (res.status === 200) {
        const {data} = res.data;
        rows.value = data;
        return rows;
      }
    })
    .catch(err => {
      toast && toast(`获取数据失败！${err.message}`);
      return `获取数据失败！${err.message}`;
    });

  return rows;
};