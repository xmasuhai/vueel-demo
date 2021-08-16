import Toast from './VueToast.vue';
import {VNode} from 'vue';
import {VueToast, VueToastOptions} from '@/types/VueToast';

let currentToast: VueToast | null;

function createToast(Vue: Record<string, any>,
                     message: string | VNode,
                     propsData: VueToastOptions['propsData'] | undefined,
                     onClose: () => void): VueToast {
  const Constructor = Vue.extend(Toast);
  const toast = new Constructor({
    propsData
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$once('beforeClose', onClose);
  document.body.appendChild(toast.$el);
  return toast;
}

export default {
  install(Vue: Record<string, any>, /* options: {} = {} */) {
    Vue.prototype.$toast = (message: string | VNode, toastOptions: VueToastOptions | undefined) => {
      if (currentToast) {
        currentToast.close();
      }
      if (toastOptions) {
        const {propsData} = toastOptions;
        currentToast = createToast(Vue, message, propsData, () => {currentToast = null;});
        return;
      }
      currentToast = createToast(Vue, message, undefined, () => {currentToast = null;});
      return;
    };
  }
};
