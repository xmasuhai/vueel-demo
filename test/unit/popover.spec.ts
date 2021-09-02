import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
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

    });

    it('可以设置trigger', (done) => {
      vm = createTestVM(VuePopover, {
        propsData: {
          trigger: 'hover'
        }
      }, true);
      const hoverEvent = new Event('mouseenter');
      vm.$el.dispatchEvent(hoverEvent);

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(popover).to.exist;
        done();
      });

    });

  });

  // event: [click, hover, mouseenter, mouseleave]
  describe('测试事件', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    // click
    it('点击 button 触发 click 事件', (done) => {
      vm = createTestVM(VuePopover, {
        propsData: {
          trigger: 'click'
        }
      }, false);

      const button = vm.$refs.triggerWrapper;
      const callback = sinon.fake();
      (button as HTMLElement).addEventListener('click', callback);
      (button as HTMLElement).click();
      expect(callback).to.have.been.called;
      vm.$on('hooks:destroy', () => {
        (button as HTMLElement).removeEventListener('click', callback);
      })

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(popover).to.exist;
        done();
      });

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(popover).to.not.exist;
        done();
      }, 1000);

    });

    // hover, mouseenter, mouseleave
    /*
    it('点击 button 触发 click 事件', (done) => {
      vm = createTestVM(VuePopover, {
        propsData: {
          trigger: 'click'
        }
      }, false);

      const button = vm.$refs.triggerWrapper;
      const callback = sinon.fake();
      (button as HTMLElement).addEventListener('click', callback);
      (button as HTMLElement).click();
      expect(callback).to.have.been.called;
      vm.$on('hooks:destroy', () => {
        (button as HTMLElement).removeEventListener('click', callback);
      })

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(popover).to.exist;
        done();
      });

      setTimeout(() => {
        const popover = vm.$refs.contentWrapper;
        expect(popover).to.not.exist;
        done();
      }, 1000);

    });
    */

  });


});
