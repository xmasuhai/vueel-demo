<template>
  <div>
    <vue-collapse :selectedArray="['第一项']">
      <vue-collapse-item title="第一项">内容一</vue-collapse-item>
      <vue-collapse-item title="第二项">内容二</vue-collapse-item>
      <vue-collapse-item title="第三项">内容三</vue-collapse-item>
    </vue-collapse>
  </div>
</template>

<script>
import VueCollapse from '../../../../src/components/collapse/VueCollapse.vue'
import VueCollapseItem from '../../../../src/components/collapse/VueCollapseItem.vue'

export default {
  name: 'normal',
  components: {
    VueCollapse,
    VueCollapseItem
  }
}
</script>
