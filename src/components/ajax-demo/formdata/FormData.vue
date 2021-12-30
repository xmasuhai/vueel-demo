<template>
  <div>
    <form ref="form1">
      <VueInput type="text"
                labelName="uname"
                titleName="注册名:"
                autocomplete="off"/>
      <VueInput type="password"
                labelName="upwd"
                titleName="密码:"
                autocomplete="off"/>
      <VueButton @click="onSubmit">提交</VueButton>
      {{ data }}
    </form>
  </div>
</template>

<script lang="ts">
import VueButton from '@/components/button/VueButton.vue';
import VueInput from '@/components/input/VueInput.vue';
import {defineComponent, onMounted, reactive, ref} from '@vue/composition-api';

export default defineComponent({
  name: 'FormData',
  components: {VueButton, VueInput},
  props: {},
  setup(props, ctx) {
    const resData = ref<Record<string, unknown>>({});
    const data = ref<Record<string, unknown>>({});
    let form: HTMLFormElement = ctx.refs.form1 as HTMLFormElement;
    // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中
    // 无需手动 调用 .append 方法
    let formData: FormData = reactive(new FormData(form));

    const onSubmit = (/*, e: Event*/) => {
      // e.preventDefault(); // 使用 Ajax 的形式提交表单 避险阻止默认提交行为
      formData = new FormData(form);

      // 无需设置 `xhr.setHeader` 的数据类型
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata');

      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resData.value = JSON.parse(xhr.responseText);
          (data.value as unknown) = resData.value.data;
        }
      };

      xhr.send(formData);

    };

    onMounted(() => {
      form = ctx.refs.form1 as HTMLFormElement;
      // 根据 form 表单创建 FormData 对象，会自动将表单数据填充到 FormData 对象中
      // 无需手动 调用 .append 方法
      formData = new FormData(form);
    });

    return {
      resData,
      onSubmit,
      formData,
      form,
      data
    };
  }
});
</script>
