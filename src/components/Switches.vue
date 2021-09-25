<template>
  <div>
    <VueSwitch></VueSwitch>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/composition-api';
import VueSwitch from './switch/VueSwitch.vue';

export default defineComponent({
  name: 'Switches',
  components: {VueSwitch},
  props: {},
  /*
  setup(props, ctx) {
  }
  */
});
</script>

<style lang="scss" scoped>

</style>
