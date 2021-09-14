import Vue from 'vue';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueTab from '../../src/components/tabs/VueTab.vue';
import VueTabItem from '../../src/components/tabs/VueTabItem.vue';
import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueTabItem', () => {
  let vm: Vue;

  it('VueTab存在.', () => {
    expect(VueTabItem).to.exist;
  });

  describe('props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    it('VueTab可以接受tabName', (done) => {
      vm = createTestVM(VueTab, {
        propsData: {
          selected: 'tabX',
          propsToNav: [
            {tabName: 'tabX'},
          ],
          propsToContent: [
            {paneName: 'paneX'}
          ]
        },
      }, true);
      setTimeout(() => {
        const targetTab = vm?.$children[0]?.$el
          ?.querySelector(`.vue-tab-item[data-name="tabX"]`)
          ?.getAttribute('data-name');
        expect(targetTab).to.eq('tabX');
        done();
      }, 300);

    });

    it('VueTab可以接受disabled', (done) => {
      vm = createTestVM(VueTab, {
        propsData: {
          selected: 'tabX',
          propsToNav: [
            {
              tabName: 'tabX',
              disabled: false
            },
          ],
          propsToContent: [
            {paneName: 'paneX'}
          ]
        },
      }, true);
      setTimeout(() => {
        const callback = sinon.fake();
        vm.$once('click', callback);
        (vm.$el as HTMLElement).click();
        expect(callback).to.have.been.not.called;
        done();
      }, 300);

    });
  });

});
