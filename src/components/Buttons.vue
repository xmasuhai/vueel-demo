<template>
  <div>
    <VueCodePresentation legendName="Button Types">
      <VueDetail summaryString="Normal Button 基本样式">
        <VueButton>按钮</VueButton>
        <VueButton :isDisabled="true">按钮</VueButton>
      </VueDetail>
      <VueDetail summaryString="Buttons with icons">
        <VueButton :isLoading="isLoading1"
                   @click="isLoading1 = !isLoading1"
                   icon="settings">设置
        </VueButton>
        <VueButton :is-loading="isLoading2"
                   @click="isLoading2 = !isLoading2"
                   icon="settings" icon-position="right">设置
        </VueButton>
        <VueButton :is-loading="isLoading3"
                   @click="isLoading3 = !isLoading3"
                   icon="download" icon-position="right">下载
        </VueButton>
      </VueDetail>
      <VueDetail summaryString="Buttons with Color"
                 class="rainbow">
        <VueButton v-for="type of colorTypeStringList"
                   :colorType="type"
                   :key="type">
          {{ type }}
        </VueButton>
      </VueDetail>
      <VueDetail summaryString="Size">
        <VueButton size="small" icon="download">
          小尺寸按钮
        </VueButton>
        <VueButton icon="settings">
          正常尺寸按钮
        </VueButton>
        <VueButton size="big" icon="thumbs-up">
          大尺寸按钮
        </VueButton>
      </VueDetail>
      <VueDetail summaryString="Button Group">
        <vue-button-group>
          <VueButton icon="left">上一页</VueButton>
          <VueButton icon="settings">更多</VueButton>
          <VueButton icon="right"
                     icon-position="right">下一页
          </VueButton>
        </vue-button-group>
      </VueDetail>
    </VueCodePresentation>
    <VueCodePresentation legendName="Button Events">
    </VueCodePresentation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from './button/VueButton.vue';
import VueButtonGroup from './button/VueButtonGroup.vue';
import VueIcon from './icon/VueIcon.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueButton,
    VueButtonGroup,
    VueIcon,
    VueDetail,
    VueCodePresentation
  }
})
export default class Buttons extends Vue {
  name = 'Buttons';
  isLoading1 = false;
  isLoading2 = true;
  isLoading3 = false;
  colorTypeStringList = [
    'primary',
    'danger',
    'info',
    'success',
    'warning',
    'attention'
  ];
}
</script>

<style lang="scss" scoped>
::v-deep {
  margin-right: 10px;

}

.rainbow::v-deep {
  > .summary {
    > .summary-string {
      background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
      -webkit-background-clip: text;
      color: transparent;

      &::selection {
        color: #000;
        background-color: #fff;
      }
    }

  }

}

</style>
