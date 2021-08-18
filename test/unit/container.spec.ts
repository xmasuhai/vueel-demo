import Vue from 'vue';
import chai from 'chai';

const expect = chai.expect;
import VueContainer from '../../src/components/layout/VueContainer.vue';
// import VueHeader from '../../src/components/layout/VueHeader.vue';
// import VueMain from '../../src/components/layout/VueMain.vue';
// import VueAside from '../../src/components/layout/VueAside.vue';
// import VueFooter from '../../src/components/layout/VueFooter.vue';
import {createTestVM, /*createVueVM,*/ destroyVM} from '../testUtil';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Container', () => {
  let vm: Vue;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTestVM(VueContainer, undefined, true);
    expect(vm.$el).to.exist;
  });

  /*
    it('vertical', () => {
      vm = createVueVM(`
          <div>
            <VueContainer>
              <VueAside></VueAside>
              <VueHeader></VueHeader>
            </VueContainer>
          </div>
        `, true);
      // expect(vm.$children[0].$el.classList.contains('is-vertical')).to.true;
    });
  */


});
