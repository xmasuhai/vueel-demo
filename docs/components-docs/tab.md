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
<VueTab :selected.sync="selectedTab">
  <VueTabNav class="custom-class">
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
```
:::

---

## 属性列表

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| isLoading      |  加载中状态 | boolean  |  true/false | false |

## 示例应用 Demo Combo
