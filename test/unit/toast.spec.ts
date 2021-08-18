import Vue, {VNode} from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueToast from '../../src/components/toast/VueToast.vue';
import {createTestVM, destroyVM} from '../testUtil';

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
        autoCloseDelay: 300
      }, true);
      expect(document.body.contains(vm.$el)).to.eq(true);
      vm.$on('beforeClose', () => {
        setTimeout(() => {
          expect(document.body.contains(vm.$el)).to.eq(false);
          done();
        }, 500);
      });
    });

    it('接受 closeButton', () => {
      const callback = sinon.fake();
      const vm = createTestVM(VueToast, {
        closeButton: {
          text: '测试关闭',
          callback,
        }
      }, true);
      const closeButton = vm.$el.querySelector('.closeButton');
      expect((closeButton as HTMLElement).textContent?.trim()).to.eq('测试关闭');
      (closeButton as HTMLElement).click();
      expect(callback).to.have.been.called;
    });

    it('接受 position', () => {
      const vm = createTestVM(VueToast, {
        position: 'bottom'
      }, false);
      // console.log(vm.$el.outerHTML);
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
    });

    it('接受 enableUnsafeHTML', () => {
      const div = document.createElement('div');
      const vm = createTestVM(VueToast, {
        enableUnsafeHTML: true,
        autoCloseDelay: false
      }, false);
      /*
      console.log('vm.$el', vm.$el);
      const bodyNode = vm.$createElement('div',
        {domProps: {innerHTML: "<strong>Some Body Data</strong>"}});
      const vnode = h('strong', {
        attrs: {
          id: 'test'
        },
      });
      */
      vm.$slots.default = [`<strong id="test">Hi</strong>` as unknown as VNode];
      // vm.$slots.default = [bodyNode];
      vm.$mount();
      document.body.appendChild(div.appendChild(vm.$el));
      const strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });

  });

  describe('测试事件', () => {
    let vm: Vue;
    afterEach(() => {
      destroyVM(vm);
    });

    it('接受 enableEscapeKey 触发beforeClose事件', (done) => {
      const vm = createTestVM(VueToast, {
        autoCloseDelay: 300
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

  })

});
