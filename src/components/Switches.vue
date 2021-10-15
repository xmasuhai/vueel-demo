<template>
  <div>
    <VueSwitch :value.sync="bool"></VueSwitch>
    <VueSwitch :value.sync="bool" activeText="开" inactiveText="关">
    </VueSwitch>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';
import VueSwitch from './switch/VueSwitch.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

export default defineComponent({
  name: 'Switches',
  components: {VueSwitch, VueDetail, VueCodePresentation},
  props: {},
  setup(/*props, context*/) {
    const bool = ref(false);
    return {bool};
  }

});
</script>
