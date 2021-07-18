<template>
  <div>
    <VueInput value="张三"></VueInput>
    <VueInput value="李四" :isFakeFocus="true"></VueInput>
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
}
</script>

<style lang="scss" scoped>

</style>
