<template>
  <div>
    <VueInput type="file" ref="file1"/>
    <VueButton ref="btnUpload"
               @click="uploadFile">上传图片
    </VueButton>
    <div style="">
      <label for="file">文件上传进度:
        <progress id="file"
                  ref="progress"
                  max="100"
                  :value="`${percentComplete}`"
                  :class="{success: isProgressComplete}"
                  style="vertical-align: text-bottom;width: 30%;margin: 0 10px;">
          {{ percentComplete }}%
        </progress>
        <span>{{ progressTips }}</span>
      </label>
    </div>
    <br/>
    <img src="" alt="" ref="img" width="800">
  </div>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';
import VueInput from '@/components/input/VueInput.vue';
import {computed, defineComponent, inject, ref} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: 'Upload',
  components: {VueInput, VueButton},
  props: {},
  setup: function (props, ctx) {
    // 动态进度条数值
    const percentComplete = ref<number>(0);
    // 进度条提示文字
    const progressTips = computed(() => {
      return percentComplete.value === 100
        ? '上传完成'
        : `${percentComplete.value}%`;
    });
    const isProgressComplete = ref(false);
    const toast = inject<Function>('toast');
    const uploadFile = () => {
      // 复原进度条颜色
      isProgressComplete.value = false;

      // 获取用户选择的文件列表
      const fileList = (ctx.refs.file1 as Vue).$el.querySelector('input')?.files;
      if (fileList && fileList.length <= 0) {return toast && toast('请选择要上传的文件！');}
      const fd = new FormData();
      // 将用户选择的文件添加到 FormData 中
      fileList && fd.append('avatar', fileList[0]);

      // 创建 xhr 对象
      const xhr = new XMLHttpRequest();

      // 监听文件上传的进度
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          // 计算出上传的进度 动态设置进度条
          percentComplete.value = Math.ceil((e.loaded / e.total) * 100);
        }
      };

      // 上传成功时
      xhr.upload.onload = () => {
        isProgressComplete.value = true;
      };

      // 调用 open 函数，指定请求类型与 URL 地址，上传文件的请求类型必须为 POST
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar');

      // 监听 `onreadystatechange` 事件
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          data.status === 200
            ? (ctx.refs.img as HTMLImageElement).src = `http://www.liulongbin.top:3006${data.url}`
            : toast && toast(data.message);
        }
      };

      // 发起请求
      xhr.send(fd);
    };

    return {
      uploadFile,
      percentComplete,
      progressTips,
      isProgressComplete
    };
  }
});
</script>

<style lang="scss" scoped>
// shadow DOM
progress {
  background-color: transparent;

  &::-webkit-progress-inner-element {
    height: 50%;
    border-radius: 5px;
    background-color: #efefef;
    transform: translateY(40%);
  }

  &::-webkit-progress-value {
    background: #0075ff;
    border-radius: 4px;
  }

  &::-webkit-progress-bar {
    background-color: #efefef;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
  }
}

progress.success {
  &::-webkit-progress-value {
    background: #198754;
  }
}
</style>
