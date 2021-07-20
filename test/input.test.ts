import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
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

  describe('props',  ()=> {

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
  })

  /*

  it('VueInput可以设置loading.', () => {
    const Constructor = Vue.extend(VueInput);
    const vm = new Constructor({
      propsData: {
        icon: 'loading',
        loading: true
      }
    }).$mount();
    const useElements = vm.$el.querySelectorAll('use');
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading');
    console.log('VueInput可以设置loading');
    vm.$destroy();
  });

  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(VueInput);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount();

    const callback = sinon.fake();
    vm.$on('click', callback);
    (vm.$el as HTMLElement).click();
    expect(callback).to.have.been.called;
    console.log('点击 button 触发 click 事件');
    vm.$destroy();
  });

  */
});
