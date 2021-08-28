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
          <div style="overflow: hidden;border: 1px solid green; padding-left: 5px">
            <VuePopover>
              <template slot="content">
                <div>popover内容</div>
              </template>
              <VueButton>点击</VueButton>
            </VuePopover>
          </div>
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
.popover {
  margin-top: 50px;
  margin-right: 20px;
}

</style>
