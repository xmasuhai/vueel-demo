<template>
  <div>
    <form>
      <fieldset>
        <legend>Input</legend>
        <details open>
          <summary>Primary</summary>
          <div>
            <VueInput placeholder="Enable">
            </VueInput>
            <VueInput placeholder="Hover"
                      :isFakeHover="true">
            </VueInput>
            <VueInput placeholder="Focus"
                      :isFakeFocus="true">
            </VueInput>
            <VueInput placeholder="Readonly"
                      value="Error Readonly"
                      :readonly="true">
            </VueInput>
            <VueInput placeholder="Disabled"
                      :disabled="true">
            </VueInput>
          </div>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Input Types</legend>
        <details open>
          <summary class="error">Error</summary>
          <div>
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
          </div>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>v-model binding value: {{ message }}</legend>
        <VueInput placeholder="Enable"
                  v-model="message">
        </VueInput>
        <VueButton @click="message += 1">+1</VueButton>
      </fieldset>
    </form>
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
@import '../style/global.scss';

details {
  cursor: pointer;

  .error {
    color: $danger;
  }
}
</style>
