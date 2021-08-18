// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Vue from 'vue2';
import chai from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
const expect = chai.expect;
import {createTestVM, /*createVueVM,*/ destroyVM} from '../testUtil';
import VueRow from '../../src/components/grid/VueRow.vue';
import VueCol from '../../src/components/grid/VueCol.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  let vm: Vue;
  it('存在.', () => {
    expect(VueRow).to.exist;
    expect(VueCol).to.exist;
  });

  it('classList row', () => {
    vm = createTestVM(VueRow, undefined, true);
    const rowElm = vm.$el;
    expect(rowElm.classList.contains('row')).to.be.true;
  });

  describe('测试属性 props', () => {

    const div = document.createElement('div');
    document.body.appendChild(div);

    afterEach(() => {
      destroyVM(vm);
    });

    it('接收 align 属性', () => {
      vm = createTestVM(VueRow, {
        propsData: {
          gutter: 20
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

    it('接收  gutter 属性', () => {
      vm = createTestVM(VueRow, {
        propsData: {
          gutter: 20
        }
      }, true);
      const rowElm = vm.$el;
      expect(rowElm.style.marginLeft).to.be.equal('-10px');
      expect(rowElm.style.marginRight).to.be.equal('-10px');
    });

    it('传递 gutter 属性给 VueCol', (done) => {
      Vue.component('v-row', VueRow);
      Vue.component('v-col', VueCol);

      div.innerHTML = `
        <v-row :gutter="20">
          <v-col :span="12" ref="col1"></v-col>
          <v-col :span="12" ref="col2"></v-col>
        </v-row>
        `;
      vm = new Vue({
        el: div
      });
      document.body.appendChild(div);
      setTimeout(() => {
        const row = vm.$el.querySelector('.row');
        // console.log('row: ', row);
        expect(getComputedStyle(row).marginLeft).to.eq('-10px');
        expect(getComputedStyle(row).marginRight).to.eq('-10px');

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
