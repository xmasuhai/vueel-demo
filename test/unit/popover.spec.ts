import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VuePopover from '../../src/components/popover/VuePopover.vue';
import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VuePopover', () => {
  let vm: Vue;

  it('VuePopover存在.', () => {
    // expect(Button).to.be.ok
    expect(VuePopover).to.exist;
  });

  describe('测试props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    // prop: [autoCloseDelay, position, trigger]
    it('可以设置autoCloseDelay', (done) => {
      vm = createTestVM(VuePopover, {
        propsData: {
          autoCloseDelay: 300
        }
      }, true);
      const button = vm.$refs.triggerWrapper;
      (button as HTMLElement).click();
      vm.$nextTick(() => {
        const popover = vm.$refs.contentWrapper;
        expect(document.body.contains(popover as HTMLElement))
          .to.eq(true);
        done();
      });
      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(document.body.contains(popover as HTMLElement))
          .to.eq(false);
        done();
      }, 1800);

    });

    it('可以设置position', (done) => {
      vm = createTestVM(VuePopover, {
        propsData: {
          position: 'bottom'
        }
      }, true);
      const button = vm.$refs.triggerWrapper;
      (button as HTMLElement).click();

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect((popover as HTMLElement).classList.contains('position-bottom'))
          .to.eq(true);
        done();
      });

      /*      const useElements = vm.$el.querySelectorAll('use');
            expect(useElements.length).to.equal(1);
            expect(useElements[0].getAttribute('xlink:href'))
              .to.equal('#i-loading');*/


    });

    /*
    it('可以设置trigger', () => {
    });
    */

  });

  // event: [click, mouseenter, mouseleave]
  describe('测试事件', () => {

    /*
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
        */

  });

});
