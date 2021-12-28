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
import {defineComponent} from '@vue/composition-api';
import Vue from 'vue';

export default defineComponent({
  name: 'Upload',
  components: {VueInput, VueButton},
  props: {},
  setup(props, ctx) {
    const uploadFile = () => {
      const files = (ctx.refs.file1 as Vue).$el.querySelector('input')?.files;
      if (files && files.length <= 0) {return alert('请选择要上传的文件');}
    };

    return {
      uploadFile
    };
  }
});
</script>
