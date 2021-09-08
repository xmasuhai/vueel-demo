<template>
  <div>
    <VueButton>fuck</VueButton>
  </div>
</template>

<script lang="ts">
import 'vuepress-types';
import {Component, Vue} from 'vue-property-decorator';
import VueButton from '../../../src/components/button/VueButton.vue';
import VueButtonGroup from '../../../src/components/button/VueButtonGroup.vue';
import VueIcon from '../../../src/components/icon/VueIcon.vue';

@Component({
  components: {
    VueButton,
    VueButtonGroup,
    VueIcon
  }
})
export default class ButtonDemos extends Vue {
  name = 'button-demos';
}
</script>

<style lang="scss" scoped>

</style>
