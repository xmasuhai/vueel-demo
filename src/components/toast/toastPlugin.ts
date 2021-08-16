import Toast from './VueToast.vue';
import {VNode} from 'vue';
import {VueToast, VueToastOptions} from '@/types/VueToast';

function createToast(Vue: Record<string, any>,
                     message: string | VNode,
                     propsData: VueToastOptions['propsData'] | undefined): VueToast {
  const Constructor = Vue.extend(Toast);
  const toast = new Constructor({
    propsData
  });
  toast.$slots.default = [message];
  toast.$mount();
  document.body.appendChild(toast.$el);
  return toast;
}

let currentToast: VueToast;
export default {
  install(Vue: Record<string, any>, /* options: {} = {} */) {
    Vue.prototype.$toast = (message: string | VNode, toastOptions: VueToastOptions | undefined) => {
      if (currentToast) {
        currentToast.close();
      }
      if (toastOptions) {
        const {propsData} = toastOptions;
        currentToast = createToast(Vue, message, propsData);
        return;
      }
      currentToast = createToast(Vue, message, undefined);
      return;
    };
  }
};
