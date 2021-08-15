import Toast from './VueToast.vue';
import {VueToastOptions} from '@/types/VueToast';

export default {
  install(Vue: any, options: {} | string = {}) {
    Vue.prototype.$toast = (message: string, toastOptions: VueToastOptions | undefined) => {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData: {
          closeButton: toastOptions?.propsData.closeButton
        }
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
