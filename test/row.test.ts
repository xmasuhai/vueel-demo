// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Vue from '../node_modules/vue/dist/vue.js';
import chai from 'chai';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import VueRow from '../src/components/grid-system/VueRow.vue';
import VueCol from '../src/components/grid-system/VueCol.vue';

chai.use(sinonChai);
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('VueRow', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const RowConstructor = Vue.extend(VueRow);
  const ColConstructor = Vue.extend(VueCol);
  let vmRow: Vue;
  let vmCol: Vue;

  it('VueRow存在.', () => {
    expect(VueRow).to.exist;
    expect(VueCol).to.exist;
  });

  describe('测试props', () => {
    afterEach(() => {
      vmRow.$el.remove();
      vmRow.$destroy();
      vmCol.$el.remove();
      vmCol.$destroy();
    });

    it('VueRow 接受 gutter 属性', (done) => {
      Vue.component('v-row', VueRow);
      Vue.component('v-col', VueCol);

      div.innerHTML = `
        <vmRow :gutter="20">
          <vmCol :span="12">1</vmCol>
          <vmCol :span="12">2</vmCol>
        </vmRow>
      `;

      const row = vmRow.$el.querySelector('.row');
      const cols = vmRow.$el.querySelectorAll('.col');

      setTimeout(() => {
        expect(getComputedStyle(row).marginLeft).to.eq('-10px');
        expect(getComputedStyle(row).marginRight).to.eq('-10px');
        expect(getComputedStyle(cols[1]).marginRight).to.eq('10px');
        expect(getComputedStyle(cols[1]).marginLeft).to.eq('10px');
        done();
      }, 0);
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
