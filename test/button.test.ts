import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueButton from '../src/components/button/VueButton.vue';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueButton', () => {
  const Constructor = Vue.extend(VueButton);
  let vm: Vue;

  it('存在.', () => {
    // expect(Button).to.be.ok
    expect(VueButton).to.exist;
    console.log('VueButton');
  });

  describe('测试props', () => {
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    it('可以设置icon.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect((useElement as SVGUseElement)
        .getAttribute('xlink:href'))
        .to.equal('#i-settings');
      console.log('Button可以设置icon');
    });

    it('可以设置loading.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'loading',
          loading: true
        }
      }).$mount();
      const useElements = vm.$el.querySelectorAll('use');
      expect(useElements.length).to.equal(1);
      expect(useElements[0].getAttribute('xlink:href'))
        .to.equal('#i-loading');
      console.log('Button可以设置loading');
    });

    it('icon 默认的 order 是 1', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      }).$mount(div);
      const icon = vm.$el.querySelector('svg');
      expect(getComputedStyle(icon as SVGSVGElement).order).to.eq('1');
      console.log('Button icon 默认的 order 是 1');
    });

    it('设置 iconPosition 可以改变 order', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          iconPosition: 'right'
        }
      }).$mount(div);
      const icon = vm.$el.querySelector('svg');
      expect(getComputedStyle(icon as SVGSVGElement).order).to.eq('2');
      console.log('Button 设置 iconPosition 可以改变 order');
    });

  });

  describe('测试事件', () => {
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    it('点击 button 触发 click 事件', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      }).$mount();
      const callback = sinon.fake();
      vm.$on('click', callback);
      (vm.$el as HTMLElement).click();
      expect(callback).to.have.been.called;
      console.log('点击 button 触发 click 事件');
    });

  });

});
