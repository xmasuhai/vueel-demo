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
    <tbody id="tb">
    <tr v-for="{id, bookname, author, publisher} in rows" :key="id">
      <th scope="row">{{ id }}</th>
      <td>{{ bookname }}</td>
      <td>{{ author }}</td>
      <td>{{ publisher }}</td>
      <td>
        <a href="javascript;"
           class="del"
           :data-id="id">删除</a>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts">
import {defineComponent, ref} from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
  name: "ShowBookInfo",
  props: {},
  setup(/*props, ctx*/) {
    const rows = ref<string[]>([""]);
    const getBookList = () => {
      axios.get("/api/getbooks",
        {
          baseURL: "http://www.liulongbin.top:3006"
        })
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

    getBookList();

    return {
      rows,
      getBookList
    };
  }
});
</script>

<style lang="scss" scoped>
@import './copystrap.scss';

table {
  text-align: center;
  margin: 8px;
  border: 1px solid grey;
}
</style>