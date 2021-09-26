<template>
  <div>
    <VueCodePresentation legendName="Popover">
      <VueDetail summaryString="Popover 可click/hover">
        <VuePopover trigger="click">
          <template #content>
            <div>popover内容</div>
          </template>
          <VueButton>鼠标点击触发popover</VueButton>
        </VuePopover>
        <VuePopover trigger="hover">
          <template #content>
            <div>popover内容</div>
          </template>
          <VueButton>鼠标悬停触发popover</VueButton>
        </VuePopover>
      </VueDetail>
      <VueDetail summaryString="Popover方向">
        <VuePopover>
          <template #content>
            <div>popover上</div>
          </template>
          <VueButton>上浮</VueButton>
        </VuePopover>
        <VuePopover position="bottom">
          <template #content>
            <div>popover下</div>
          </template>
          <VueButton>下浮</VueButton>
        </VuePopover>
        <VuePopover position="left">
          <template #content>
            <div>popover左</div>
          </template>
          <VueButton>左浮</VueButton>
        </VuePopover>
        <VuePopover position="right">
          <template #content>
            <div>popover右</div>
          </template>
          <VueButton>右浮</VueButton>
        </VuePopover>
      </VueDetail>
      <VueDetail summaryString="Popover 多行文字内容 不被父元素overflow遮挡">
        <div style="margin-top: 30px;overflow: hidden;border: 1px solid #ccc; padding-left: 5px">
          <VuePopover style="margin-top: 0;">
            <template #content>
              <div>popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容</div>
            </template>
            <VueButton>显示多行文字提示</VueButton>
          </VuePopover>
        </div>
      </VueDetail>
      <VueDetail summaryString="Popover 带关闭按钮">
        <VuePopover trigger="hover">
          <template #content="{closeEvent}">
            <div>popover使用 slotScope 传参给slot</div>
            <VueButton @click="closeEvent">关闭</VueButton>
          </template>
          <VueButton>提供slot事件回调closeEvent</VueButton>
        </VuePopover>
      </VueDetail>
    </VueCodePresentation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VuePopover from './popover/VuePopover.vue';
import VueButton from './button/VueButton.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VuePopover,
    VueButton,
    VueDetail,
    VueCodePresentation
  }
})
export default class Popovers extends Vue {
  name = 'Popovers';
}
</script>

<style lang="scss" scoped>
.vue-popover {
  margin-top: 50px;
  margin-right: 20px;
}

</style>
