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

    it('接受 autoCloseDelay', (done) => {
      const vm = createTestVM(VueToast, {
        autoCloseDelay: 1000
      }, true);
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(true);
        done();
      });
    });

    /*
        it('接受 autoCloseDelay', () => {
        });

        it('接受 position', () => {
        });

        it('接受 closeButton', () => {
        });

        it('接受 enableUnsafeHTML', () => {
        });

        it('接受 enableEscapeKey', () => {
        });
    */

  });
});
