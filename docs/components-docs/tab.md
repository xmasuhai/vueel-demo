---

title: Tab

---

# 选项卡组件

---

[[toc]]

---

## 使用方法

### Tabs 的基本结构

---

<ClientOnly>

<tabs-normal></tabs-normal>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <VueTabItem tab-name="tab1">Item1</VueTabItem>
      <VueTabItem tab-name="tab2">Item2Item2</VueTabItem>
      <VueTabItem tab-name="tab3">Item3Item3Item3</VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane pane-name="tab1">Pane1</VueTabPane>
      <VueTabPane pane-name="tab2">Pane2</VueTabPane>
      <VueTabPane pane-name="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';

export default {
  name: 'normal',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>

```
:::

---

### Tabs 可被禁用、被隐藏

---

<ClientOnly>

<tabs-disable></tabs-disable>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <VueTabItem tabName="tab1">Tab1</VueTabItem>
      <VueTabItem tabName="tab2" disabled>Tab2</VueTabItem>
      <VueTabItem tabName="tab3">Tab3</VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane paneName="tab1">Pane1</VueTabPane>
      <VueTabPane paneName="tab2">Pane2</VueTabPane>
      <VueTabPane paneName="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';

export default {
  name: 'disable',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>

```
:::

---

### Tabs 提供 可选的 右侧附带按钮

---

<ClientOnly>

<tabs-extra></tabs-extra>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <template v-slot:vue-actions>
        <VueButton>额外的按钮</VueButton>
      </template>
      <VueTabItem tabName="tab1">Tab1</VueTabItem>
      <VueTabItem tabName="tab2">Tab2</VueTabItem>
      <VueTabItem tabName="tab3">Tab3</VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane paneName="tab1">Pane1</VueTabPane>
      <VueTabPane paneName="tab2">Pane2</VueTabPane>
      <VueTabPane paneName="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';
import VueButton from '@/components/button/VueButton.vue';

export default {
  name: 'extra',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane,
    VueButton
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>

```
:::

---

### Tabs 可添加icon

---

<ClientOnly>

<tabs-icon></tabs-icon>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueTab :selected.sync="selectedTab">
    <VueTabNav>
      <VueTabItem tabName="tab1"
                  :useIcon="true"
                  iconName="settings">
        Tab1
      </VueTabItem>
      <VueTabItem tabName="tab2"
                  :useIcon="true"
                  iconName="download">
        Tab2
      </VueTabItem>
      <VueTabItem tabName="tab3"
                  :useIcon="true"
                  iconName="thumbs-up">
        Tab3
      </VueTabItem>
    </VueTabNav>
    <VueTabContent>
      <VueTabPane paneName="tab1">Pane1</VueTabPane>
      <VueTabPane paneName="tab2">Pane2</VueTabPane>
      <VueTabPane paneName="tab3">Pane3</VueTabPane>
    </VueTabContent>
  </VueTab>
</template>

<script lang="ts">
import VueTab from '@/components/tabs/VueTab.vue';
import VueTabNav from '@/components/tabs/VueTabNav.vue';
import VueTabItem from '@/components/tabs/VueTabItem.vue';
import VueTabContent from '@/components/tabs/VueTabContent.vue';
import VueTabPane from '@/components/tabs/VueTabPane.vue';
import VueIcon from '@/components/icon/VueIcon.vue';

export default {
  name: 'normal',
  components: {
    VueTab,
    VueTabNav,
    VueTabItem,
    VueTabContent,
    VueTabPane,
    VueIcon
  },
  data() {
    return {
      selectedTab: 'tab1'
    };
  }
};
</script>

```
:::

---

## 属性列表



> `VueTab.vue`

| 参数     |           说明            |  类型  | 可选值 | 默认值 |
| -------- | :-----------------------: | :----: | :----: | :----- |
| selected | 当前选中的标签名 tab-name | string |   -    | -      |


> `VueTabNav.vue`

| 参数      |     说明     |         类型          |   可选值   | 默认值 |
| --------- | :----------: | :-------------------: | :--------: | :----- |
| itemsData | 标签导航数据 | `Record<string, any>` | true/false | false  |


> `VueTabItem.vue`

| 参数         |     说明     |  类型   |                            可选值                            | 默认值 |
| ------------ | :----------: | :-----: | :----------------------------------------------------------: | :----- |
| tabName      |    标签名    | string  |                              -                               | -      |
| useIcon      | 是否使用图标 | boolean |                          true/false                          | false  |
| iconName     | 图标类型名称 | string  | settings/loading/right/left/download/arrow-down/thumbs-up | -      |
| iconPosition |   图标位置   | string  |                              -                               | -      |
| disabled     |   是否禁用   | boolean |                          true/false                          | false  |


> `VueTabContent.vue`

| 参数      |     说明     |         类型          | 可选值 | 默认值 |
| --------- | :----------: | :-------------------: | :----: | :----- |
| panesData | 标签内容数据 | `Record<string, any>` |   -    | -      |


> `VueTabPane.vue`


| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|:-----|
| paneName | 标签内容名 | string |  - | - |

---

## 示例应用 Demo Combo

---
