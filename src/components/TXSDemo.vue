<template>
  <div>
    <TXS></TXS>
  </div>
</template>

<script lang="ts">
import TXS from '@/components/txs/TXS';
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'txs-demo',
  props: {},
  components: {
    TXS
  },
  setup(/*props, ctx*/) {
    return {};
  }
});
</script>

<style lang="scss" scoped>

</style>
