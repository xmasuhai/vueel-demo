<template>
  <nav>
    <button v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTabText === tab }]"
            @click="currentTabText = tab; showTab(tab)">
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
  currentTabText = 'Buttons';
  tabs = ['Buttons', 'Inputs', 'GridSystems'];

  showTab(tab: string) {
    this.$emit('update:tabName', tab);
  }
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';
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
