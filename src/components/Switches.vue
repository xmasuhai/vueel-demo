<template>
  <div>
    <VueSwitch :toggleValue.sync="bool1">
    </VueSwitch>
    <VueSwitch :toggleValue.sync="bool2"
               activeText="on"
               inactiveText="off">
    </VueSwitch>
    <VueSwitch :toggleValue.sync="bool3"
               activeText="开"
               inactiveText="关">
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
  setup() {
    const bool1 = ref(false);
    const bool2 = ref(false);
    const bool3 = ref(false);
    return {bool1, bool2, bool3};
  }

});
</script>
