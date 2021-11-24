<template>
  <VueSwitch :disabled="true" :toggleValue.sync="bool"></VueSwitch>
</template>

<script lang="ts">
import VueSwitch from "@/components/switch/VueSwitch.vue";

export default {
  name: "disabled",
  components: {VueSwitch},
  data() {
    return {
      bool: false
    }
  }
}
</script>
