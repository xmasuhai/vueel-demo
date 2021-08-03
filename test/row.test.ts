// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Vue from 'vue2';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
// chai.use(sinonChai);
const expect = chai.expect;

import VueRow from '../src/components/grid-system/VueRow.vue';
import VueCol from '../src/components/grid-system/VueCol.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  it('存在.', () => {
    expect(VueRow).to.exist;
    expect(VueCol).to.exist;
  });

  it('接收 gutter 属性', (done) => {
    Vue.component('g-row', VueRow);
    Vue.component('g-col', VueCol);
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.innerHTML = `
          <g-row :gutter="20">
            <g-col :span="8"></g-col>
            <g-col :span="8"></g-col>
          </g-row>
    `;

    const vm = new Vue({
      el: div,
    });

    setTimeout(() => {
      const row = vm.$el.querySelector('.row');
      expect(getComputedStyle(row).marginLeft).to.eq('-10px');
      expect(getComputedStyle(row).marginRight).to.eq('-10px');
      const cols = vm.$el.querySelectorAll('.col');
      console.log(vm.$el.outerHTML);
      expect(getComputedStyle(cols[0]).marginRight).to.eq('10px');
      expect(getComputedStyle(cols[1]).marginLeft).to.eq('10px');
      done();

      vm?.$el.remove();
      vm?.$destroy();
    });
  });

  /*
    describe('测试事件', () => {
      afterEach(() => {
        vm.$el.remove();
        vm.$destroy();
      });

      it('点击 button 触发 click 事件', () => {
        vm = new Constructor({
          propsData: {
            icon: 'settings',
          }
        }).$mount();
        const callback = sinon.fake();
        vm.$on('click', callback);
        (vm.$el as HTMLElement).click();
        expect(callback).to.have.been.called;
        console.log('点击 button 触发 click 事件');
      });
    });
    */

});
