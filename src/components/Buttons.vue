<template>
  <div>
    <VueButton>
      按钮
    </VueButton>
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
    <vue-button-group>
      <VueButton icon="left">上一页</VueButton>
      <VueButton icon="">更多</VueButton>
      <VueButton icon="right"
                 icon-position="right">下一页
      </VueButton>
    </vue-button-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from './button/VueButton.vue';
import VueButtonGroup from './button-group/VueButtonGroup.vue';
import VueIcon from './icon/VueIcon.vue';

@Component({
  components: {
    VueButton,
    VueButtonGroup,
    VueIcon
  }
})
export default class Buttons extends Vue {
  name = 'Buttons';
  isLoading1 = false;
  isLoading2 = true;
  isLoading3 = false;
}
</script>

<style lang="scss" scoped>
::v-deep {
  margin-right: 10px;
}
</style>
