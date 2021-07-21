<template>
  <div>
    <details open>
      <summary>Primary</summary>
      <div>
        <VueInput placeholder="Enable"
                  id="testInput"
                  @change="inputChange">
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
    <br>
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
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueInput from './input/VueInput.vue';

@Component({
  components: {
    VueInput
  }
})
export default class Inputs extends Vue {
  name = 'Inputs';

  mounted() {
    setTimeout(() => {
      const event = new Event('change');
      const inputElement = this.$el.querySelector('#testInput');
      console.log('inputElement: ', inputElement);
      console.log('event: ', event);
      (inputElement as HTMLInputElement).dispatchEvent(event);
      console.log('自己触发input事件');
    }, 0);
  }

  inputChange(e: Event) {
    console.log(e);
  }

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
