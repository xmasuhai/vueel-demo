<template>
  <div class="basic">
    <form>
      <fieldset>
        <legend>经典布局</legend>
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
              <vue-aside class="demo" :width="50">Aside</vue-aside>
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
              <vue-aside class="demo" :width="50">Aside</vue-aside>
            </vue-container>
            <vue-footer class="demo">Footer</vue-footer>
          </vue-main>
        </details>
        <br>
        <details open>
          <summary>左右两栏布局 左侧菜单栏</summary>
          <vue-main style="height: 20vh;">
            <vue-aside class="demo" :width="200">Aside</vue-aside>
            <vue-container class="demo">
              <vue-header class="demo">Header</vue-header>
              <vue-container class="demo">Content</vue-container>
              <vue-footer class="demo">Footer</vue-footer>
            </vue-container>
          </vue-main>
        </details>
        <br>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueMain from './layout/VueMain.vue';
import VueContainer from './layout/VueContainer.vue';
import VueAside from './layout/VueAside.vue';
import VueHeader from './layout/VueHeader.vue';
import VueFooter from './layout/VueFooter.vue';
import VueDetail from '@/components/code-presentation/VueDetail.vue';
import VueCodePresentation from '@/components/code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueMain,
    VueContainer,
    VueAside,
    VueHeader,
    VueFooter,
    VueDetail,
    VueCodePresentation
  }
})
export default class extends Vue {
  name = 'LayoutGroups';
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.basic {
  & details {
    .demo {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      flex-grow: 1;
      color: #fff;
      width: 100%;

      &:nth-child(odd) {
        background-color: #3D8FEE;
      }

      &:nth-child(even) {
        background-color: #7CB8FF;
      }

      &.v-aside {
        background-color: #3ba0e9;
      }

      &.container {
        flex-grow: 2;
        background-color: #108ee9;
      }

      &.v-header, &.footer {
        background-color: #7dbcea;
      }

    }
  }
}
</style>
