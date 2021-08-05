// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Vue from 'vue2';
import chai from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
const expect = chai.expect;

import VueRow from '../src/components/grid-system/VueRow.vue';
import VueCol from '../src/components/grid-system/VueCol.vue';
import {mount} from '@vue/test-utils';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  it('存在.', () => {
    expect(VueRow).to.exist;
    expect(VueCol).to.exist;
  });

  describe('测试属性 props', () => {

    let vm: Vue;
    const div = document.createElement('div');
    document.body.appendChild(div);

    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    it('接收 align 属性', () => {
      const Constructor = Vue.extend(VueRow);
      vm = new Constructor({
        propsData: {
          align: 'center',
          gutter: 20
        }
      }).$mount(div);
      const element = vm.$el;
      expect(getComputedStyle(element).justifyContent).to.eq('center');

    });

    it('接收 gutter 属性', (done) => {
      Vue.component('v-row', VueRow);
      Vue.component('v-col', VueCol);
      document.body.appendChild(div);

      div.innerHTML = `
          <v-row :gutter="20">
            <v-col :span="12"></g-col>
            <v-col :span="12"></g-col>
          </v-row>
    `;

      vm = new Vue({
        el: div,
      });

      setTimeout(() => {
        const row = vm.$el.querySelector('.row');
        expect(getComputedStyle(row).marginLeft).to.eq('-10px');
        expect(getComputedStyle(row).marginRight).to.eq('-10px');
        // const cols = vm.$el.querySelectorAll('.col');
        // expect(getComputedStyle(cols[0]).marginRight).to.eq('10px');
        // expect(getComputedStyle(cols[0]).marginLeft).to.eq('10px');
        done();

      });

    });

  });

  describe('VueRow.vue', () => {
    let wrapper: Vue;

    beforeEach(() => {
      wrapper = mount(VueRow, {
        propsData: {
          gutter: 20
        }
      });
    });

    it('should contain gutter', function () {
      expect(wrapper.find('.row').isVisible()).to.eq(true);
    });
  });

  /*
    describe('测试事件', () => {
      afterEach(() => {
        vm.$el.remove();
        vm.$destroy();
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
