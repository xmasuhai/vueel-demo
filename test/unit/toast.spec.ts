import Vue from 'vue';
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
        autoCloseDelay: 1000
      }, true);
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(true);
        done();
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

    it('接受 enableUnsafeHTML', () => {
      const vm = createTestVM(VueToast, {
        enableUnsafeHTML: true
      }, false);

      vm.$slots.default = ['<strong id="test">HI</strong>'];
      // console.log(vm.$el);
      vm.$mount();
      const strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });

    it('接受 position', () => {
      const vm = createTestVM(VueToast, {
        position: 'bottom'
      }, false);
      // console.log(vm.$el.outerHTML);
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
    });

    /*
        it('接受 enableEscapeKey', () => {
        });
    */

  });
});
