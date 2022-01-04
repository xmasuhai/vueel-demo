<template>
  <div>
    <Txs></Txs>
  </div>
</template>

<script lang="ts">
import Txs from '@/components/txs/TXS';
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'TXSDemo',
  props: {},
  components: {
    Txs
  }
});
</script>

<style lang="scss" scoped>

</style>
