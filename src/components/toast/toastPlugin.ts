import Toast from './VueToast.vue';
import Vue from 'vue';
import {VueToastOptions} from '@/types/VueToast';

export default {
  install(/*Vue: Vue, options: {} = {}*/) {
    Vue.prototype.$toast = (message: string, toastOptions: VueToastOptions | undefined) => {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData: toastOptions?.propsData
      });
      toast.$slots.default = [message as any];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
