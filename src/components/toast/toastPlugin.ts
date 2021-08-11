import Toast from './VueToast.vue';

export default {
  install(Vue: any, options: {}) {
    Vue.prototype.$toast = (message: string) => {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor();
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
