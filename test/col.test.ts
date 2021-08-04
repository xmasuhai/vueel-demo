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
    const div = document.createElement('div');
    document.body.appendChild(div);

    afterEach(() => {
      vm.$el.remove();
      vm.$destroy();
    });

    it('接收 span 属性', () => {
      const Constructor = Vue.extend(VueCol);
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div);
      const element = vm.$el;
      expect(element.classList.contains('col-1')).to.eq(true);
    });

    it('接收 offset 属性', () => {
      const Constructor = Vue.extend(VueCol);
      vm = new Constructor({
        propsData: {
          offset: 2
        }
      }).$mount(div);
      const element = vm.$el;
      expect(element.classList.contains('offset-2')).to.eq(true);
    });

    it('接收 pc 属性', () => {
      const Constructor = Vue.extend(VueCol);
      vm = new Constructor({
        propsData: {
          pc: {span: 1, offset:2}
        }
      }).$mount(div);
      const element = vm.$el;
      expect(element.classList.contains('col-pc-1')).to.eq(true);
      expect(element.classList.contains('offset-pc-2')).to.eq(true);
    });
    it('接收 pad 属性', () => {
      const Constructor = Vue.extend(VueCol);
      vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div);
      const element = vm.$el;
      expect(element.classList.contains('col-1')).to.eq(true);
    });

  });


});
