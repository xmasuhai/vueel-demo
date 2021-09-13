<template>
  <div>
    <VueCodePresentation legendName="输入框组件">
      <VueDetail summaryString="Normal Input 默认输入框">
        <VueInput placeholder="Enable"></VueInput>
        <VueInput placeholder="Hover"
                  :isFakeHover="true"></VueInput>
        <VueInput placeholder="Focus"
                  :isFakeFocus="true"></VueInput>
        <VueInput placeholder="Readonly"
                  value="Error Readonly"
                  :readonly="true"></VueInput>
        <VueInput placeholder="Disabled"
                  :disabled="true"></VueInput>
      </VueDetail>
      <VueDetail class="error-detail" summaryString="Error">
        <VueInput placeholder="Error Enable"
                  error="姓名不能少于2个字">
        </VueInput>
        <VueInput placeholder="Error Hover"
                  :isFakeHover="true"
                  error="姓名不能少于2个字">
        </VueInput>
        <VueInput placeholder="Error Focus"
                  :isFakeFocus="true"
                  error="姓名不能少于2个字">
        </VueInput>
        <VueInput placeholder="Error Readonly"
                  :readonly="true"
                  value="Error Readonly"
                  error="姓名不能少于2个字">
        </VueInput>
        <VueInput placeholder="Error Disabled"
                  :disabled="true"
                  error="姓名不能少于2个字">
        </VueInput>
      </VueDetail>
    </VueCodePresentation>

    <VueCodePresentation legendName="v-model模拟数据双向绑定">
      <VueDetail :summaryString="`v-model binding value: ${message}`">
        <VueInput placeholder="Enable"
                  v-model="message">
        </VueInput>
        <VueButton @click="message += 1">+1</VueButton>
      </VueDetail>
    </VueCodePresentation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueInput from './input/VueInput.vue';
import VueButton from './button/VueButton.vue';
import VueDetail from '@/components/code-presentation/VueDetail.vue';
import VueCodePresentation from '@/components/code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueInput,
    VueButton,
    VueDetail,
    VueCodePresentation
  }
})
export default class Inputs extends Vue {
  name = 'Inputs';
  message = 'hi';

}
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';

details {
  cursor: pointer;

  .error-detail::v-deep {
    .error {
      color: $danger;
    }
  }
}
</style>
