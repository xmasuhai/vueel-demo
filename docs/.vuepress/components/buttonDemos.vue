<template>
  <div>
    <vue-button>fuck</vue-button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from '@/components/button/VueButton.vue';
import VueButtonGroup from '@/components/button/VueButtonGroup.vue';
import VueIcon from '@/components/icon/VueIcon.vue';

@Component({
  components: {
    VueButton,
    VueButtonGroup,
    VueIcon
  }
})
export default class buttonDemos extends Vue {
  name = 'button-demos';
}
</script>

<style lang="scss" scoped>

</style>
