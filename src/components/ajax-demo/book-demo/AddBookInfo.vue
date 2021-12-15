<template>
  <div class="add-book">
    <div class="card-heading">
      <h3 class="card-title">添加新图书</h3>
    </div>
    <div class="card-body form-inline">
      <VueInput labelName="书名"
                class="form-control"
                id="iptBookname"
                placeholder="请输入书名"/>
      <VueInput labelName="作者"
                class="form-control"
                id="iptAuthor"
                placeholder="请输入作者"/>
      <VueInput labelName="出版社"
                class="form-control"
                id="iptPublisher"
                placeholder="请输入出版社"/>
      <VueButton id="btnAdd">添加</VueButton>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import VueButton from "../../button/VueButton.vue";
import VueInput from "../../input/VueInput.vue";

export default defineComponent({
  name: "AddBookInfo",
  props: {},
  components: {
    VueButton,
    VueInput
  },
  setup(/*props, ctx*/) {

    return {};
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
