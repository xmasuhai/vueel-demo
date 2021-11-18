<template>
  <div>
    <vue-collapse :selectedArray="['第一项']">
      <vue-collapse-item title="第一项">内容一</vue-collapse-item>
      <vue-collapse-item title="第二项" :isDisabled="true">内容二</vue-collapse-item>
      <vue-collapse-item title="第三项" :isDisabled="true">内容三</vue-collapse-item>
      <vue-collapse-item title="第四项">内容四</vue-collapse-item>
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import VueCollapse from '@/components/collapse/VueCollapse.vue'
import VueCollapseItem from '@/components/collapse/VueCollapseItem.vue'

export default {
  name: 'normal',
  components: {
    VueCollapse,
    VueCollapseItem
  }
}
</script>
