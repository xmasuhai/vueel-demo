import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueTab from '../../src/components/tabs/VueTab.vue';
// import VueTabNav from '../../src/components/tabs/VueTabNav.vue';
// import VueTabContent from '../../src/components/tabs/VueTabContent.vue';
// import VueTabItem from '../../src/components/tabs/VueTabItem.vue';
// import VueTabPane from '../../src/components/tabs/VueTabPane.vue';
// import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueTab', () => {
  // let vm: Vue;

  it('VueTab存在.', () => {
    expect(VueTab).to.exist;
  });


  /*
  describe('props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    it('VueTab可以接受selected', (done) => {
      Vue.component('v-tab', VueTab);
      Vue.component('v-tab-nav', VueTabNav);
      Vue.component('v-tab-item', VueTabItem);
      Vue.component('v-tab-content', VueTabContent);
      Vue.component('v-tab-pane', VueTabPane);

      const div = document.createElement('div');
      div.innerHTML = `
        <v-tab selected="2">
          <v-tab-nav>
            <v-tab-item tab-name="1">1</v-tab-item>
            <v-tab-item tab-name="2">2</v-tab-item>
            <v-tab-item tab-name="3">3</v-tab-item>
          </v-tab-nav>
          <v-tab-content>
            <v-tab-pane pane-name="1">1</v-tab-pane>
            <v-tab-pane pane-name="2">2</v-tab-pane>
            <v-tab-pane pane-name="3">3</v-tab-pane>
          </v-tab-content>
        </v-tab>
      `;
      vm = new Vue({
        el: div
      });
      vm.$nextTick(() => {
        console.log(vm.$el.outerHTML);
        done()
      });

    });

  });
*/


  /*

    describe('事件', () => {
      afterEach(() => {
        destroyVM(vm);
      });

      it('VueInput 支持 change/input/focus/blur 事件', () => {
        const Constructor = Vue.extend(VueTab);
        ['change', 'input', 'focus', 'blur']
          .forEach((eventName) => {
            vm = new Constructor({}).$mount();
            const callback = sinon.fake();
            // 监听
            vm.$on(eventName, callback);
            // 创建事件 给事件对象添加属性
            const triggerEvent = new Event(eventName);
            Object.defineProperty(
              triggerEvent,
              'target',
              {value: {value: 'hi'}}
            );
            const inputElement = vm.$el.querySelector('input');
            // 手动触发 input 的事件
            (inputElement as HTMLInputElement).dispatchEvent(triggerEvent);
            // 断言
            expect(callback).to.have.been.calledWith('hi');
          });
      });

    });
  */


});
