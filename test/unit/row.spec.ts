// import Vue from 'vue2';
import Vue from 'vue';
import chai from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
const expect = chai.expect;
import {createTestVM, /*createVueVM,*/ destroyVM} from '../testUtil';
import VueRow from '../../src/components/grid/VueRow.vue';
// import VueCol from '../../src/components/grid/VueCol.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  let vm: Vue;
  /*

    it('存在.', () => {
      expect(VueRow).to.exist;
      expect(VueCol).to.exist;
    });

    it('classList row', () => {
      vm = createTestVM(VueRow, undefined, true);
      const rowElm = vm.$el;
      expect(rowElm.classList.contains('row')).to.be.true;
    });
  */

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
          colData: [
            {
              span: 12
            }
          ]
        },
      }, true);

      setTimeout(() => {
        expect((vm.$el as HTMLElement).style.marginLeft).to.be.equal('-10px');
        expect((vm.$el as HTMLElement).style.marginRight).to.be.equal('-10px');
        done();
      }, 300);

    });

/*
    it('传递 gutter 属性给 VueCol', (done) => {
      vm = createTestVM(VueRow, {
        propsData: {
          gutter: 20,
          colData: [
            {
              span: 24,
            }
          ]
        },
      }, true);

      console.log('vm.$el: ', (vm.$el));
      const row = vm.$el.querySelector('.row');
      console.log('row: ', row);
      expect(getComputedStyle(row).marginLeft).to.eq('-10px');
      expect(getComputedStyle(row).marginRight).to.eq('-10px');

      setTimeout(() => {
        // const colElm1 = vm.$refs.col1.$el;
        // const colElm2 = vm.$refs.col2.$el;
        // console.log('colElm1: ', colElm1);
        // console.log('colElm2: ', colElm2);
        // expect(getComputedStyle(colElm1).marginRight).to.eq('10px');
        // expect(getComputedStyle(colElm2).marginLeft).to.eq('10px');

        // const cols = vm.$el.querySelectorAll('.col');
        // console.log('cols: ', cols);
        // expect(getComputedStyle(cols[0]).marginRight).to.eq('10px');
        // expect(getComputedStyle(cols[1]).marginLeft).to.eq('10px');
        done();
      }, 500);

    });
    */

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
