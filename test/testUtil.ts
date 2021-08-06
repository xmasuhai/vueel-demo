import Vue from 'vue';
import {ComponentOptions} from 'vue/types/options';

let id = 0;

const createElm = (): HTMLDivElement => {
  const elm = document.createElement('div');
  elm.id = `app${++id}`;
  document.body.appendChild(elm);
  return elm;
};

/**
 * destroyVM
 * 回收 vm
 * @param  {Object} vm
 */
export const destroyVM = (vm: Vue): void => {
  vm.$destroy && vm.$destroy();
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
};

type vueExtend = InstanceType<typeof Vue.ComponentOptions>
/**
 * createVueVM
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
/*

export const createVueVM = (Compo: Vue.ComponentOptions | string,
                            mounted = false): Vue => {
  // template ES6 string
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = {template: Compo};
  }

  return (new Vue(Compo)
    .$mount(mounted === false ? undefined : createElm()));
};
*/

/**
 * createTestVM
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createTestVM = (Compo: Vue,
                             propsData = {},
                             mounted: boolean | {} = false) => {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const elm = createElm();
  const Constructor = Vue.extend(Compo);
  return new Constructor({propsData}).$mount(mounted === false ? undefined : elm);
};
