import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueInput from '../../src/components/input/VueInput.vue';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueInput', () => {
  const Constructor = Vue.extend(VueInput);
  let vm: Vue;

  it('VueInput存在.', () => {
    expect(VueInput).to.exist;
  });

  describe('props', () => {
    afterEach(() => {
      vm.$destroy();
    });

    it('VueInput可以接受value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).value)
        .to.equal('1234');
    });

    it('VueInput可以接受disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).disabled)
        .to.equal(true);
    });

    it('VueInput可以接受readOnly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).readOnly)
        .to.equal(true);
    });

    it('VueInput可以接受error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount();
      //svg
      const useElement = vm.$el.querySelector('use');
      expect((useElement as SVGUseElement).getAttribute('xlink:href'))
        .to.equal('#i-error-solid');
      const errorMessage = vm.$el.querySelector('.errorMessage');
      expect((errorMessage as HTMLElement).innerText).to.equal('你错了');
    });
  });

  describe('事件', () => {
    afterEach(() => {
      vm.$destroy();
    });

    it('VueInput 支持 change/input/focus/blur 事件', () => {
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

});
