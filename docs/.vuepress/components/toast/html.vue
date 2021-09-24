<template>

</template>


<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import VueToast from '@/components/toast/VueToast.vue';
import '@/types/VueToast.d';

Vue.use(toastPlugin);

export default {
  name: 'html'
}
</script>

<style scoped>

</style>
