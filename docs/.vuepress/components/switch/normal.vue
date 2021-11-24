<template>
  <VueSwitch :disabled="false" :toggleValue.sync="bool"></VueSwitch>
</template>

<script lang="ts">
import VueSwitch from "@/components/switch/VueSwitch.vue";

export default {
  name: "normal",
  components: {VueSwitch},
  data() {
    return {
      bool: true
    }
  }
}
</script>
