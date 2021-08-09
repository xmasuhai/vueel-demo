<template>
  <div>
    <form>
      <fieldset>
        <legend>Button Types</legend>
        <details open>
          <summary><span class="rainbow-text">Buttons with Color</span></summary>
          <VueButton v-for="type of colorTypeStringList"
                     :colorType="type"
                     :key="type">
            {{ type }}
          </VueButton>
        </details>
        <details open>
          <summary>Size</summary>
        </details>
        <details open>
          <summary>Event</summary>
        </details>
        <details open>
          <summary>Button Group</summary>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>Button with Icons</legend>
        <details open>
          <summary>Primary</summary>
        </details>
        <details open>
          <summary>Primary</summary>
        </details>
        <details open>
          <summary>Primary</summary>
        </details>
        <details open>
          <summary>Primary</summary>
        </details>
      </fieldset>
    </form>
    <br>
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
      <VueButton icon="settings">更多</VueButton>
      <VueButton icon="right"
                 icon-position="right">下一页
      </VueButton>
    </vue-button-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueButton from './button/VueButton.vue';
import VueButtonGroup from './button/VueButtonGroup.vue';
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

summary {
  .rainbow-text {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    color: transparent;

    &::selection {
      color: #000;
      background-color: #fff;
    }
  }
}
</style>
