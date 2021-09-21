<template>
  <nav>
    <button v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTabText === tab }]"
            @click="showTab(tab)">
      <span>
        {{ tab }}
      </span>
    </button>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  name = 'Nav';
  currentTabText = 'Switches';
  tabs = [
    'Buttons',
    'Inputs',
    'GridSystems',
    'LayoutGroups',
    'ToastsTips',
    'Tabs',
    'Popovers',
    'Collapses',
    'Switches'
  ];

  showTab(tab: string) {
    // 切换对应样式
    this.currentTabText = tab;
    // 发布 切换对应组件 的自定义事件
    this.$emit('update:tabName', tab);
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/global.scss';

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;

    &:hover {
      background: #e0e0e0;
    }

    &.active {
      background: #e0e0e0;
    }
  }
}

</style>
