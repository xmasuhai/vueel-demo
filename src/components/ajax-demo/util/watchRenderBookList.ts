import {Ref} from '@vue/composition-api';
import Vue from 'vue';
import {getBookInfo} from '@/components/ajax-demo/util/getBookInfo';

export const watchRenderBookList = (rows: Ref, eventbus: Vue | undefined) => {
  // 监听 兄弟组件传来的更新列表事件
  eventbus?.$on('renderBookList', () => {
    rows.value = getBookInfo();
  });
};