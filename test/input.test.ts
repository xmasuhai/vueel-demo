import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueInput from '../src/components/input/VueInput.vue';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueInput', () => {

  it('VueInput存在.', () => {
    expect(VueInput).to.exist;
    console.log('VueInput存在');
  });

  describe('props', () => {
    it('VueInput可以接受value', () => {
      const Constructor = Vue.extend(VueInput);
      const vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).value)
        .to.equal('1234');
      console.log('VueInput可以接受value');
      vm.$destroy();
    });

    it('VueInput可以接受disabled', () => {
      const Constructor = Vue.extend(VueInput);
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).disabled)
        .to.equal(true);
      console.log('VueInput可以接受disabled');
      vm.$destroy();
    });

    it('VueInput可以接受readOnly', () => {
      const Constructor = Vue.extend(VueInput);
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect((inputElement as HTMLInputElement).readOnly)
        .to.equal(true);
      console.log('VueInput可以接受readOnly');
      vm.$destroy();
    });

    it('VueInput可以接受error', () => {
      const Constructor = Vue.extend(VueInput);
      const vm = new Constructor({
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
      console.log('VueInput可以接受error');
      vm.$destroy();
    });
  });

/*

  it('input 触发 change 事件', () => {
    const Constructor = Vue.extend(VueInput);
    const vm = new Constructor({}).$mount();
    const callback = sinon.fake();
    // 监听
    vm.$on('change', callback);

    // 手动触发 input 的事件
    const changeEvent = new Event('change');
    const inputElement = vm.$el.querySelector('input');
    changeEvent.initEvent('change', false, true);
    (inputElement as HTMLInputElement).value = 'New Value';
    (inputElement as HTMLInputElement).dispatchEvent(changeEvent);

    console.log(inputElement);
    expect(callback).to.have.been.calledWith(changeEvent);

    console.log('改变 input 值 触发 change 事件');
    vm.$destroy();
  });
*/

});
