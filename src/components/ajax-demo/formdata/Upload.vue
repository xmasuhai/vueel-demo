<template>
  <div>
    <VueInput type="file" ref="file1"/>
    <VueButton ref="btnUpload"
               @click="uploadFile">上传图片
    </VueButton>
    <br/>
    <img src="" alt="" ref="img" width="800">
  </div>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';
import VueInput from '@/components/input/VueInput.vue';
import {defineComponent, inject} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: 'Upload',
  components: {VueInput, VueButton},
  props: {},
  setup: function (props, ctx) {
    const toast = inject<Function>('toast');
    const uploadFile = () => {
      // 获取用户选择的文件列表
      const fileList = (ctx.refs.file1 as Vue).$el.querySelector('input')?.files;
      if (fileList && fileList.length <= 0) {return toast && toast('请选择要上传的文件！');}
      const fd = new FormData();
      // 将用户选择的文件添加到 FormData 中
      fileList && fd.append('avatar', fileList[0]);

      // 1. 创建 xhr 对象
      const xhr = new XMLHttpRequest();
      // 2. 调用 open 函数，指定请求类型与 URL 地址，上传文件的请求类型必须为 POST
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');
      // 3. 监听 `onreadystatechange` 事件
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          data.status === 200
            ? (ctx.refs.img as HTMLImageElement).src = `http://www.liulongbin.top:3006${data.url}`
            : toast && toast(data.message);
        }
      };
      // 4. 发起请求
      xhr.send(fd);
    };

    return {
      uploadFile
    };
  }
});
</script>
