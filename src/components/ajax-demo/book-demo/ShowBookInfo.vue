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
    <tbody id="tb" @click="handleClick">
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
import {defineComponent, ref, inject} from '@vue/composition-api';
import {getBookList} from '@/components/ajax-demo/http-request/getBookList';
import {delBook} from '@/components/ajax-demo/http-request/delBook';

export default defineComponent({
  name: 'ShowBookInfo',
  props: {},
  setup() {
    const eventbus = inject<Vue>('eventbus');

    const rows = ref<string[]>(['']);
    const getBookInfo = () => {
      getBookList()
        .then(res => {
          if (res.status === 200) {
            const {data} = res.data;
            rows.value = data;
          }
        })
        .catch(err => {
          return `获取数据失败！${err.message}`;
        });
    };
    getBookInfo();

    // 通过代理的方式为动态添加的元素绑定点击事件 删除图书
    const handleClick = (e: MouseEvent) => {
      if (Object.keys((e?.target as HTMLElement).dataset).includes('id')) {
        const bookId = (e?.target as HTMLElement).dataset.id;
        (bookId && (+bookId) <= 3)
          ? alert('请勿删除原始数据')
          : bookId && delBook(
          {id: bookId}
        )
          .then(res => {
            if (res.status === 200) {
              // const {data} = res.data;
              getBookInfo();
              return '删除图书成功！';
            }
          })
          .catch(err => {
            return `删除图书失败！${err.message}`;
          });
      }
    };

    eventbus?.$on('renderBookList', () => {
      getBookInfo();
    });

    return {
      rows,
      getBookInfo,
      handleClick
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
