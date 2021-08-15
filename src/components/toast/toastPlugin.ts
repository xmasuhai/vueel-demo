import Toast from './VueToast.vue';
import {VueToastOptions} from '@/types/VueToast';

export default {
  install(Vue: any, options: {} = {}) {
    Vue.prototype.$toast = (message: string | HTMLElement, toastOptions: VueToastOptions | undefined) => {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData: toastOptions?.propsData
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
