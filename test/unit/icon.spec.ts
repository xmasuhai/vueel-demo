import Vue from 'vue';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import VueIcon from '../../src/components/icon/VueIcon.vue';
import {createTestVM, destroyVM} from '../testUtil';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueIcon', () => {
  // const Constructor = Vue.extend(VueIcon);
  let vm: Vue;

  it('存在.', () => {
    // expect(Button).to.be.ok
    expect(VueIcon).to.exist;
  });

  describe('测试props', () => {
    afterEach(() => {
      destroyVM(vm);
    });

    [
      'settings',
      'loading',
      'right',
      'left',
      'download',
      'arrow-down',
      'thumbs-up',
      'info-empty',
      'info-solid',
      'error-solid',
      'error-empty',
      'warning',
    ]
      .forEach((iconName) => {
        it('可以设置icon.', () => {
          vm = createTestVM(VueIcon, {
            propsData: {
              iconName: iconName
            }
          }, false);
          const useElement = vm.$el.querySelector('use');
          expect((useElement as SVGUseElement)
            .getAttribute('xlink:href'))
            .to.equal(`#i-${iconName}`);
        });
      });

  });

});
