import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueTab from '../../src/components/tabs/VueTab.vue';
// import VueTabNav from '../../src/components/tabs/VueTabNav.vue';
// import VueTabContent from '../../src/components/tabs/VueTabContent.vue';
// import VueTabItem from '../../src/components/tabs/VueTabItem.vue';
// import VueTabPane from '../../src/components/tabs/VueTabPane.vue';
import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueTab', () => {
  let vm: Vue;

  it('VueTab存在.', () => {
    expect(VueTab).to.exist;
  });

  describe('props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    it('VueTab可以接受selected', (done) => {
      vm = createTestVM(VueTab, {
        propsData: {
          selected: 'tab2',
          propsToNav: [
            {tabName: 'tab1'},
            {tabName: 'tab2'}
          ],
          propsToContent: [
            {paneName: 'pane1'},
            {paneName: 'pane2'}
          ]
        },
      }, true);

      setTimeout(() => {
        const selectedTab = vm.$el.querySelector('.active');
        expect(selectedTab).to.exist;
        done();
      }, 300);

    });

  });

});
