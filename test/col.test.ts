import Vue from 'vue';
import chai from 'chai';

const expect = chai.expect;
import VueCol from '../src/components/grid-system/VueCol.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueCol', () => {
  it('存在.', () => {
    expect(VueCol).to.exist;
  });

  describe('测试属性 props', () => {
    let vm: Vue;
    let div: HTMLDivElement;

    beforeEach(() => {
      div = document.createElement('div');
      document.body.appendChild(div);
    });
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    for (let n = 1; n < 24; n++) {

      it('接收 span 属性', () => {
        const Constructor = Vue.extend(VueCol);
        vm = new Constructor({
          propsData: {
            span: n
          }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains(`col-${n}`)).to.eq(true);
      });

      it('接收 offset 属性', () => {
        const Constructor = Vue.extend(VueCol);
        vm = new Constructor({
          propsData: {
            offset: n
          }
        }).$mount(div);
        const element = vm.$el;
        expect(element.classList.contains(`offset-${n}`)).to.eq(true);
      });

    }

    // O(n^2) x 6
    ['mobile', 'pad', 'laptop', 'pc', 'pcw', 'pcx'].forEach((mediaType) => {
      for (let n = 1; n < 24; n++) {
        for (let m = 1; m < 24; m++) {

          it(`接收 ${mediaType} 属性`, () => {
            const Constructor = Vue.extend(VueCol);
            vm = new Constructor({
              propsData: {
                [mediaType]: {span: n, offset: m}
              }
            }).$mount(div);
            const element = vm.$el;
            expect(element.classList.contains(`col-${mediaType}-${n}`)).to.eq(true);
            expect(element.classList.contains(`offset-${mediaType}-${m}`)).to.eq(true);
          });

        }
      }

    });

  });


});
