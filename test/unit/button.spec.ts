import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueButton from '../../src/components/button/VueButton.vue';
import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueButton', () => {
  let vm: Vue;

  it('VueButton存在.', () => {
    // expect(Button).to.be.ok
    expect(VueButton).to.exist;
  });

  describe('测试props', () => {
    afterEach(() => {
      /*
      vm.$el.remove();
      vm.$destroy();
      */
      destroyVM(vm);
    });

    it('可以设置icon.', () => {
      vm = createTestVM(VueButton, {
        icon: 'settings'
      }, false);
      const useElement = vm.$el.querySelector('use');
      expect((useElement as SVGUseElement)
        .getAttribute('xlink:href'))
        .to.equal('#i-settings');
    });

    it('可以设置loading.', () => {
      vm = createTestVM(VueButton, {
        icon: 'loading',
        loading: true
      }, false);
      const useElements = vm.$el.querySelectorAll('use');
      expect(useElements.length).to.equal(1);
      expect(useElements[0].getAttribute('xlink:href'))
        .to.equal('#i-loading');
    });

    it('icon 默认的 order 是 1', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = createTestVM(VueButton, {
        icon: 'settings',
      }, true);
      const icon = vm.$el.querySelector('svg');
      expect(getComputedStyle(icon as SVGSVGElement).order).to.eq('1');
    });

    it('设置 iconPosition 可以改变 order', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = createTestVM(VueButton, {
        icon: 'settings',
        iconPosition: 'right'
      }, true);
      const icon = vm.$el.querySelector('svg');
      expect(getComputedStyle(icon as SVGSVGElement).order).to.eq('2');
    });

    [
      {'': 'rgb(248, 248, 255)'},
      {'primary': 'rgb(13, 110, 253)'},
      {'danger': 'rgb(255, 65, 54)'},
      {'warning': 'rgb(255, 193, 7)'},
      {'success': 'rgb(25, 135, 84)'},
      {'info': 'rgb(13, 202, 240)'},
      {'attention': 'rgb(253, 126, 20)'}
    ]
      .forEach((typeObj) => {
        const colorType = Object.keys(typeObj)[0];
        const colorString = Object.values(typeObj)[0];
        it(`设置 color 可以改变${colorType}按钮种类`, () => {
          const div = document.createElement('div');
          document.body.appendChild(div);
          vm = createTestVM(VueButton, {
            colorType
          }, true);
          const buttonElement = vm.$el;
          expect(getComputedStyle(buttonElement as HTMLButtonElement).backgroundColor)
            .to.eq(colorString);
        });

      });

  });

  describe('测试事件', () => {
    const Constructor = Vue.extend(VueButton);
    afterEach(() => {
      destroyVM(vm);
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
    });
  });

});
