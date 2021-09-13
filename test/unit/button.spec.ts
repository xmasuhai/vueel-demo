import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import '../../src/styles/index.scss';
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
      destroyVM(vm);
    });

    it('可以设置icon.', () => {
      vm = createTestVM(VueButton, {
        propsData: {
          icon: 'settings'
        }
      }, false);
      const useElement = vm.$el.querySelector('use');
      expect((useElement as SVGUseElement)
        .getAttribute('xlink:href'))
        .to.equal('#i-settings');
    });

    it('可以设置loading.', () => {
      vm = createTestVM(VueButton, {
        propsData: {
          icon: 'loading',
          loading: true
        }
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
        propsData: {
          icon: 'settings',
        }
      }, true);
      const buttonElement = vm.$el.querySelector('.vue-button');
      expect(buttonElement!.classList.contains('icon-left')).to.eq(true);

    });

    it('设置 iconPosition 可以改变 order', () => {
      vm = createTestVM(VueButton, {
        propsData: {
          icon: 'settings',
          iconPosition: 'right'
        }
      }, true);
      const buttonElement = vm.$el.querySelector('.vue-button');
      expect((buttonElement as HTMLButtonElement)
        .classList.contains('icon-right')).to.eq(true);

    });

    // (O)^ n * n 测试颜色
    [
      'normal',
      'primary',
      'danger',
      'warning',
      'success',
      'info',
      'attention'
    ].forEach((typeString) => {
      // const colorString = Object.values(typeObj)[0];
      it(`设置 color 可以改变${typeString}按钮种类`, () => {
        vm = createTestVM(VueButton, {
          propsData: {
            colorType: typeString
          }
        }, true);
        const buttonElement = vm.$el.querySelector('.vue-button');
        expect((buttonElement as HTMLButtonElement)
          .classList.contains(`vue-button-${typeString}`)).to.eq(true);

      });

    });

    // (O)^ n * n 尺寸
    ['small', 'normal', 'big'].forEach((sizeString) => {
      it(`设置 color 可以改变${sizeString}按钮种类`, () => {
        vm = createTestVM(VueButton, {
          propsData: {
            size: sizeString
          }
        }, true);
        const buttonElement = vm.$el.querySelector('.vue-button');
        expect((buttonElement as HTMLButtonElement)
          .classList.contains(`vue-button-size-${sizeString}`))
          .to.eq(true);
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
      const buttonElement = vm.$el.children[0];
      // buttonVM.$on('click', callback);
      buttonElement.addEventListener('click', callback);
      (buttonElement as HTMLElement).click();
      expect(callback).to.have.been.called;
      buttonElement.removeEventListener('click', callback);
    });
  });

});
