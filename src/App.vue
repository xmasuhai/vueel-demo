<template>
  <div id="app">
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
import VueButton from './components/vuebutton/VueButton.vue';
import VueButtonGroup from './components/ButtonGroup/ButtonGroup.vue';

// 全局注册组件
Vue.component('v-button', VueButton);
Vue.component('v-button-group', VueButtonGroup);

@Component({
  components: {
    VueButton,
    VueButtonGroup
  }
})
export default class App extends Vue {
  name = 'App';
  isLoading1 = false;
  isLoading2 = true;
  isLoading3 = false;
}

// 单元测试
import chai from 'chai';
import spies from 'chai-spies';

chai.use(spies);
const expect = chai.expect;
try {
// 测试按钮含有 icon
  {
    const Constructor = Vue.extend(VueButton);
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      },
    });
    // button.$mount('#test')
    vm.$mount();
    const useElement = vm.$el.querySelector('use');
    // console.log(userElement)
    /*
    // Uncaught AssertionError
    // expect(useElement.getAttribute('xlink:href')).to.equal('settings')
    */
    // 可以通过的测试用例
    if (useElement) {
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
      const href = useElement.getAttribute('xlink:href');
      expect(href).to.eq('#i-settings');
    }
    vm.$el.remove();
    vm.$destroy();
  }

// 测试 isLoading属性 是否显示#i-loading的图标
  {
    const Constructor = Vue.extend(VueButton);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        isLoading: true,
      },
    });
    vm.$mount();
    const useElement = vm.$el.querySelector('use');
    const href = useElement?.getAttribute('xlink:href');
    // Uncaught AssertionError
    // expect(href).to.eq('#i-settings')
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
  }

// 测试 iconPosition order 默认为 1 左边 ；2 右边
  {
    const Constructor = Vue.extend(VueButton);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    });
    // button 必须被加载 渲染到页面中，CSS加载，才能识别 order
    // 否则 expect(order).to.eq('')为空
    const div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    const svg = vm.$el.querySelector('svg');
    const {order} = window.getComputedStyle(svg as SVGSVGElement);
    // 错误断言
    // expect(order).to.eq(1)
    // 正确断言
    //CSS 所有属性值都是字符串
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
  }

// 测试 iconPosition order 为 2 右边
  {
    const Constructor = Vue.extend(VueButton);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right',
      },
    });
    const div = document.createElement('div');
    document.body.appendChild(div);
    vm.$mount(div);
    const svg = vm.$el.querySelector('svg');
    const {order} = window.getComputedStyle(svg as SVGSVGElement);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
  }

// 测试 按钮触发 click // mock 使用 chai.spies 监听函数
  {
    const Constructor = Vue.extend(VueButton);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    });
    vm.$mount();

    // console.log(chai.spy)
    const spy = chai.spy(() => {
      console.log('spy OK');
    });

    vm.$on('click', spy);
    const button = vm.$el;
    (button as HTMLButtonElement).click();
    // 期望 函数被执行
    // 正确断言
    expect(spy).to.have.been.called();
    vm.$el.remove();
    vm.$destroy();
  }

} catch (error) {
  // window.errors = [error];
  console.log('error: ', error);
} finally {
  // window.errors 存在 打印所有错误信息
  /*
  window.errors && window.errors.forEach((error: Error) => {
    console.error(error.message);
  });
  */
}

</script>

<style lang="scss" scoped>
::v-deep {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

</style>
