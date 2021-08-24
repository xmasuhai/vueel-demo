import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
const expect = chai.expect;
import {createTestVM, destroyVM} from '../testUtil';
import VueRow from '../../src/components/grid/VueRow.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  let vm: Vue;

  it('存在.', () => {
    expect(VueRow).to.exist;
  });

  it('classList row', () => {
    vm = createTestVM(VueRow, undefined, true);
    const rowElm = vm.$el;
    expect(rowElm.classList.contains('row')).to.be.true;
  });

  describe('测试属性 props', () => {

    afterEach(() => {
      destroyVM(vm);
    });

    it('接收 align 属性', () => {
      vm = createTestVM(VueRow, {
        propsData: {
          align: 'center',
        }
      }, true);
      /*
      const Constructor = Vue.extend(VueRow);
      vm = new Constructor({
        propsData: {
          align: 'center',
        }
      }).$mount(div);
      */
      const element = vm.$el;
      expect(getComputedStyle(element).justifyContent).to.eq('center');

    });

    it('接收  gutter 属性', (done) => {
      vm = createTestVM(VueRow, {
        propsData: {
          gutter: 20,
        },
      }, true);

      setTimeout(() => {
        expect((vm.$el as HTMLElement).style.marginLeft).to.be.equal('-10px');
        expect((vm.$el as HTMLElement).style.marginRight).to.be.equal('-10px');
        done();
      }, 300);

    });

    it('传递 gutter 属性给 VueCol', (done) => {
      vm = createTestVM(VueRow, {
        propsData: {
          gutter: 20,
          colData: [
            {
              span: 12,
            },
            {
              span: 12,
            }
          ]
        },
      }, true);
      setTimeout(() => {
        expect(getComputedStyle(vm.$el).marginLeft).to.eq('-10px');
        expect(getComputedStyle(vm.$el).marginRight).to.eq('-10px');
        const cols = vm.$el.querySelectorAll('.col');
        expect(getComputedStyle(cols[0]).marginRight).to.eq('10px');
        expect(getComputedStyle(cols[1]).marginLeft).to.eq('10px');
        done();
      }, 0);

    });

  });

  /*
    describe('测试事件', () => {
      afterEach(() => {
      destroyVM(vm);
      });

      it('触发  事件', () => {
        vm = new Constructor({
          propsData: {
          }
        }).$mount();
        const callback = sinon.fake();
        vm.$on('resize', callback);
        (vm.$el as HTMLElement).resize();
        expect(callback).to.have.been.called;
        console.log('点击 button 触发  事件');
      });

    });
    */

});
