import Vue from 'vue';
import VueCompositionAPI, {/*reactive, */ref} from '@vue/composition-api';
import {getBookList} from '@/components/ajax-demo/http-request/bookInfoOperations';

Vue.use(VueCompositionAPI);
const toast = (new Vue()).$toast;
// 不能使用 reactive
const rows = ref<Record<string, string>[]>([{}]);

export const getBookInfo = () => {
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