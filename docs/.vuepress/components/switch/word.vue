<template>
  <VueSwitch :toggleValue.sync="bool"
             :disabled="false"
             activeText="on"
             inactiveText="off">
  </VueSwitch>
</template>

<script lang="ts">
import VueSwitch from "@/components/switch/VueSwitch.vue";

export default {
  name: "word",
  components: {VueSwitch},
  data() {
    return {
      bool: false
    }
  }
}
</script>
