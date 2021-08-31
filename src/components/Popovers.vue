<template>
  <div>
    <form>
      <fieldset>
        <legend>Popover</legend>
        <details open>
          <summary>Popover 可click/hover</summary>
          <VuePopover trigger="click">
            <template #content>
              <div>popover内容</div>
            </template>
            <VueButton>鼠标点击触发popover</VueButton>
          </VuePopover>
          <VuePopover trigger="hover">
            <template slot="content">
              <div>popover内容</div>
            </template>
            <VueButton>鼠标悬停触发popover</VueButton>
          </VuePopover>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Popover</legend>
        <details open>
          <summary>Popover方向</summary>
          <VuePopover>
            <template slot="content">
              <div>popover上</div>
            </template>
            <VueButton>上浮</VueButton>
          </VuePopover>
          <VuePopover position="bottom">
            <template slot="content">
              <div>popover下</div>
            </template>
            <VueButton>下浮</VueButton>
          </VuePopover>
          <VuePopover position="left">
            <template slot="content">
              <div>popover左</div>
            </template>
            <VueButton>左浮</VueButton>
          </VuePopover>
          <VuePopover position="right">
            <template slot="content">
              <div>popover右</div>
            </template>
            <VueButton>右浮</VueButton>
          </VuePopover>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Popover 多行文字内容</legend>
        <details open>
          <summary>Popover 不被overflow遮挡</summary>
          <div style="margin-top: 30px;overflow: hidden;border: 1px solid #ccc; padding-left: 5px">
            <VuePopover style="margin-top: 0;">
              <template slot="content">
                <div>popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容</div>
              </template>
              <VueButton>显示多行文字提示</VueButton>
            </VuePopover>
          </div>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Popover</legend>
        <details open>
          <summary>Popover 带关闭按钮</summary>
          <VuePopover trigger="hover">
            <template #content="{closeEvent}">
              <div>popover使用 slotScope 传参给slot</div>
              <VueButton @click="closeEvent">关闭</VueButton>
            </template>
            <VueButton>提供slot事件回调closeEvent</VueButton>
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
.popover {
  margin-top: 50px;
  margin-right: 20px;
}

</style>
