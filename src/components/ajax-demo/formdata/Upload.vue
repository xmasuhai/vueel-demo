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

export default defineComponent({
  name: 'Upload',
  components: {VueInput, VueButton},
  props: {},
  setup(/*props, ctx*/) {
    const uploadFile = () => {
      console.log('1');
    };

    return {
      uploadFile
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
