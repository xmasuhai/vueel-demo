<template>
  <div>
    <form ref="form1">
      <input type="text" name="uname" autocomplete="off"/>
      <input type="password" name="upwd" autocomplete="off"/>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'FormData',
  props: {},
  setup(props, ctx) {
    // console.log("-> ctx", ctx);
    /*
    const form = ctx.slots('#form1');
    // 监听表单元素的 submit 事件
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // 使用 Ajax 的形式提交表单避险阻止默认提交行为
      // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中，无需手动 调用 .append 方法
      const fd = new FormData(form);
      // 无需设置 `xhr.setHeader` 的数据类型
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');
      xhr.onreadystatechange = () => {};
      xhr.send(fd);

    });
    */

  }
});
</script>

<style lang="scss" scoped>

</style>
