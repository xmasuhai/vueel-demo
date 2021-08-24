import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueTab from '../../src/components/tabs/VueTab.vue';
// import VueTabNav from '../../src/components/tabs/VueTabNav.vue';
// import VueTabContent from '../../src/components/tabs/VueTabContent.vue';
// import VueTabItem from '../../src/components/tabs/VueTabItem.vue';
// import VueTabPane from '../../src/components/tabs/VueTabPane.vue';
import {/*createTestVM,*/ destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueTab', () => {
  let vm: Vue;

  it('VueTab存在.', () => {
    expect(VueTab).to.exist;
  });

  describe('props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    /*
    it('VueTab可以接受selected', (done) => {
      vm = createTestVM(VueTab, {
        propsData: {
          selected: 'tab2',
          propsToNav: [
            {tabName: 'tab1'}
          ],
          propsToContent: [
            {paneName: 'pane1'}
          ]
        },
      }, true);

      setTimeout(() => {
        // console.log('vm.$el: ', vm.$el);
        done();
      }, 300);

    });
*/

  });


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
