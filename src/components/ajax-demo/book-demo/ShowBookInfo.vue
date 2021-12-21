<template>
  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">书名</th>
      <th scope="col">作者</th>
      <th scope="col">出版社</th>
      <th scope="col">操作</th>
    </tr>
    </thead>
    <tbody id="tb" @click="deleteProxy">
    <tr v-for="{id, bookname, author, publisher} in rows" :key="id">
      <th scope="row">{{ id }}</th>
      <td>{{ bookname }}</td>
      <td>{{ author }}</td>
      <td>{{ publisher }}</td>
      <td>
        <a href="javascript:null;"
           class="del"
           :data-id="id">删除</a>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts">
import {defineComponent, inject} from '@vue/composition-api';
import {delBook} from '@/components/ajax-demo/http-request/bookInfoOperations';
import {getBookInfo} from '@/components/ajax-demo/util/getBookInfo';

export default defineComponent({
  name: 'ShowBookInfo',
  props: {},
  setup() {
    const rows = getBookInfo();
    const eventbus = inject<Vue>('eventbus');
    const toast = inject<Function>('toast');

    // 通过代理的方式为动态添加的元素绑定点击事件 删除图书
    const deleteProxy = (e: MouseEvent) => {
      if (Object.keys((e?.target as HTMLElement).dataset).includes('id')) {
        const bookId = (e?.target as HTMLElement).dataset.id;
        (bookId && (+bookId) <= 3)
          ? toast && toast('请勿删除原始数据')
          : bookId && delBook(
          {id: bookId}
        )
          .then(res => {
            if (res.status === 200) {
              // const {data} = res.data;
              getBookInfo();
              return toast && toast('删除图书成功！');
            }
          })
          .catch(err => {
            return toast && toast(`删除图书失败！${err.message}`);
          });
      }
    };

    // 监听 兄弟组件传来的更新列表事件
    eventbus?.$on('renderBookList', () => {
      getBookInfo();
    });

    return {
      rows,
      getBookInfo,
      deleteProxy
    };
  }
});
</script>

<style lang="scss" scoped>
@import './table.scss';

table {
  text-align: center;
  border: 1px solid grey;
}
</style>
