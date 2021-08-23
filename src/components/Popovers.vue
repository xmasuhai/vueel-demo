<template>
  <div>
    <form>
      <fieldset>
        <legend>Popover</legend>
        <details open>
          <summary>组件包裹按钮</summary>
          <VuePopover>
            <template slot="content">
              <div>popover内容</div>
            </template>
            <VueButton>点击</VueButton>
          </VuePopover>
          <VuePopover>
            <template slot="content">
              <div>popover内容</div>
            </template>
            <VueButton>点击</VueButton>
          </VuePopover>
        </details>
      </fieldset>
    </form>
    <br>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VuePopover from './popover/VuePopover.vue';
import VueButton from './button/VueButton.vue';

@Component({
  components: {VuePopover, VueButton}
})
export default class Popovers extends Vue {
  name = 'Popovers';
}
</script>

<style lang="scss" scoped>

</style>
