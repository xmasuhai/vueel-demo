import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueToast from '../../src/components/toast/VueToast.vue';
import {createTestVM, destroyVM} from '../testUtil';
// import {bus} from '../../src/main';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast Component', () => {
  it('存在 VueToast', () => {
    expect(VueToast).to.exist;
  });

  describe('props', () => {
    let vm: Vue;
    afterEach(() => {
      destroyVM(vm);
    });

    it('接受 autoCloseDelay', (done) => {
      const vm = createTestVM(VueToast, {
        propsData: {
          autoCloseDelay: 300
        }
      }, true);
      expect(document.body.contains(vm.$el)).to.eq(true);

      vm.$on('beforeClose', () => {
        setTimeout(() => {
          expect(document.body.contains(vm.$el)).to.eq(false);
          done();
        }, 500);
      });

    });

    it('接受 closeButton 手动点击关闭', (done) => {
      const callback = sinon.fake();
      const vm = createTestVM(VueToast, {
        propsData: {
          autoCloseDelay: false,
          closeButton: {
            text: '测试关闭',
            callback,
          }
        }
      }, true);

      const closeButton = vm.$el.querySelector('.vue-close-button');
      expect((closeButton as HTMLElement).textContent?.trim()).to.eq('测试关闭');
      setTimeout(() => {
        (closeButton as HTMLElement).click();
        expect(callback).to.have.been.called;
        done();
      }, 300);

    });

    it('接受 position', () => {
      const vm = createTestVM(VueToast, {
        propsData: {
          position: 'bottom'
        }
      }, false);
      // console.log(vm.$el.outerHTML);
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
    });

    it('接受 enableUnsafeHTML', () => {
      const vm = createTestVM(VueToast, {
        propsData: {
          enableUnsafeHTML: true,
          autoCloseDelay: false
        },
        data() {
          return {
            message: '<strong id="test">Hi</strong>'
          };
        }
      }, false);

      /*
      const bodyNode = vm.$createElement('div',
        {domProps: {innerHTML: "<strong>Some Body Data</strong>"}});
      const vnode = h('strong', {
        attrs: {
          id: 'test'
        },
      });
      */
      // console.log('vm.$el1', vm.$el, vm.$slots.default[0]);
      // vm.$slots.default = [`<strong id="test">Hi</strong>`];
      // bus.$emit('pushSlot', '<strong id="test">Hi</strong>');
      // console.log('vm.$el2', vm.$el, vm.$slots.default[0]);
      vm.$mount();
      // console.log('vm.$el3', vm.$el);
      // vm.$slots.default = [bodyNode];
      const strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });

  });

  describe('测试事件', () => {
    let vm: Vue;
    afterEach(() => {
      destroyVM(vm);
    });

    it('键盘事件：接受 enableEscapeKey 触发beforeClose事件', (done) => {
      const vm = createTestVM(VueToast, {
        propsData: {
          autoCloseDelay: 300
        }
      }, true);
      const keyEvt = new KeyboardEvent('keydown', {
        key: 'Escape'
      });
      expect(document.body.contains(vm.$el)).to.eq(true);
      vm.$el.dispatchEvent(keyEvt);
      vm.$on('beforeClose', () => {
        setTimeout(() => {
          expect(document.body.contains(vm.$el)).to.eq(false);
          done();
        }, 500);
      });
    });

  });

});
