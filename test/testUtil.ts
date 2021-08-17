import Vue from 'vue';
// import {ComponentOptions} from 'vue/types/options';

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
  if (vm) {
    vm?.$destroy();
    // vm.$el.remove();
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el);
  }
};

/**
 * createVueVM
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Template   组件配置，可直接传 template
 * @param  {Boolean=false} isMounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createVueVM = (Template: string | { 'template': string },
                            isMounted = false): Vue => {
  // template ES6 string
  if (Object.prototype.toString.call(Template) === '[object String]') {
    Template = {'template': (Template as string)};
  }
  const elm = createElm();
  return (new Vue(Template as { 'template': string })
    .$mount(isMounted === true ? elm : undefined));
};

/**
 * createTestVM
 * 创建一个测试组件实例
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} isMounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */

export const createTestVM = (Compo: Vue.Component,
                             propsData = {},
                             isMounted: boolean | {} = false) => {
  // 参数顺序误传
  if (propsData === true || propsData === false) {
    isMounted = propsData;
    propsData = {};
  }
  const elm = createElm();
  const Constructor = Vue.extend(Compo as Vue);
  return (new Constructor({propsData})
    .$mount(isMounted === true ? elm : undefined));
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
export const triggerEvent = (elm: Element, name: string, ...opts: any[]): Element => {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm?.dispatchEvent(evt);

  return elm;
};

/**
 * 触发 “mouseup” 和 “mousedown” 事件
 * @param {Element} elm
 * @param {*} opts
 */
export const triggerClick = function (elm: Element, ...opts: any[]) {
  triggerEvent(elm, 'mousedown', ...opts);
  triggerEvent(elm, 'mouseup', ...opts);

  return elm;
};
