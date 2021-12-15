<template>
  <div class="add-book card">
    <div class="card-header">
      <h3 class="card-title">添加新图书</h3>
    </div>
    <div class="card-body form-inline">
      <VueInput labelName="书名"
                class="form-control"
                ref="iptBookname"
                placeholder="请输入书名"
                v-model="msgBook"/>
      <VueInput labelName="作者"
                class="form-control"
                ref="iptAuthor"
                placeholder="请输入作者"
                v-model="msgAuthor"/>
      <VueInput labelName="出版社"
                class="form-control"
                ref="iptPublisher"
                placeholder="请输入出版社"
                v-model="msgPublisher"/>
      <VueButton @click="addBookInfo"
                 ref="btnAdd">添加
      </VueButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';
import axios from 'axios';
import VueButton from '../../button/VueButton.vue';
import VueInput from '../../input/VueInput.vue';

export default defineComponent({
  name: 'AddBookInfo',
  props: {},
  components: {
    VueButton,
    VueInput
  },
  setup(props, ctx) {
    const msgBook = ref('');
    const msgAuthor = ref('');
    const msgPublisher = ref('');
    const addBookInfo = () => {
      msgBook.value = (ctx.refs.iptBookname as any).value.trim();
      msgAuthor.value = (ctx.refs.iptAuthor as any).value.trim();
      msgPublisher.value = (ctx.refs.iptPublisher as any).value.trim();
      if (msgBook.value.length * msgAuthor.value.length * msgPublisher.value.length === 0) {return alert('请填写完整的图书信息！');}

      // 发送添加书本信息请求
      axios.post('/api/addbook',
          {
            bookname: msgBook.value,
            author: msgAuthor.value,
            publisher: msgPublisher.value
          },
          {
            baseURL: 'http://www.liulongbin.top:3006/',
            timeout: 0
          }
      )
          .then(res => {
            const {data} = res;
            if (data.status === 502) {return alert(data.msg);}
            alert(data.msg);
            // 通知兄弟组件 ShowBookInfo.vue 更新渲染图书列表

          });

    };

    return {
      msgBook,
      msgAuthor,
      msgPublisher,
      addBookInfo
    };
  }
});
</script>

<style lang="scss" scoped>
@import './card.scss';

.add-book {
  display: inline-flex;
  text-align: center;

  .card-heading {
    display: flex;

    .card-title {
      margin: auto;
    }
  }

  .form-inline {

  }
}
</style>
