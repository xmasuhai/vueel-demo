<template>
  <div>
    <details open>
      <summary>三栏布局</summary>
      <vue-main style="height: 20vh;">
        <vue-header class="demo">Header</vue-header>
        <vue-container class="demo">Content</vue-container>
        <vue-footer class="demo">Footer</vue-footer>
      </vue-main>
    </details>
    <br>
    <details open>
      <summary>三栏布局 中栏 左侧菜单栏</summary>
      <vue-main style="height: 20vh;">
        <vue-header class="demo">Header</vue-header>
        <vue-container class="demo">
          <vue-aside>Aside</vue-aside>
          <vue-container>Content</vue-container>
        </vue-container>
        <vue-footer class="demo">Footer</vue-footer>
      </vue-main>
    </details>
    <br>
    <details open>
      <summary>三栏布局 中栏 有侧菜单栏</summary>
      <vue-main style="height: 20vh;">
        <vue-header class="demo">Header</vue-header>
        <vue-container class="demo">
          <vue-container>Content</vue-container>
          <vue-aside>Aside</vue-aside>
        </vue-container>
        <vue-footer class="demo">Footer</vue-footer>
      </vue-main>
    </details>
    <br>
    <details open>
      <summary>左右两栏布局 左侧菜单栏</summary>
      <vue-main style="height: 20vh;">
        <vue-aside>Aside</vue-aside>
        <vue-container class="demo">
          <vue-header class="demo">Header</vue-header>
          <vue-container>Content</vue-container>
          <vue-footer class="demo">Footer</vue-footer>
        </vue-container>
      </vue-main>
    </details>
    <br>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueMain from './layout/VueMain.vue';
import VueContainer from './layout/VueContainer.vue';
import VueAside from './layout/VueAside.vue';
import VueHeader from './layout/VueHeader.vue';
import VueFooter from './layout/VueFooter.vue';

@Component({
  components: {
    VueMain,
    VueContainer,
    VueAside,
    VueHeader,
    VueFooter
  }
})
export default class extends Vue {
  name = 'LayoutGroups';
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.demo {
  border: 1px solid orange;
  min-height: 40px;
}
</style>
