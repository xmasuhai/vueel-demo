import Toast from './VueToast.vue';
import {VNode} from 'vue';
import {VueToast, VueToastOptions} from '../../types/VueToast.d';

let currentToast: VueToast | null;
let opt: {};

function createToast(Vue: Record<string, any>,
                     message: string | VNode,
                     onClose: () => void,
                     VueToastOptions?: VueToastOptions | {}
): VueToast {
  const Constructor = Vue.extend(Toast);

  VueToastOptions = VueToastOptions || {};
  if (typeof message === 'string') {
    opt = {
      'message': message
    };
  }
  const ob = Object.assign(VueToastOptions, {data: opt});
  const toast = new Constructor(ob);
  toast.$slots.default = [toast.message];
  toast.$mount();
  document.body.appendChild(toast.$el);
  toast.$once('beforeClose', onClose);
  return toast;
}

export default {
  install(Vue: Record<string, any>, /* options: {} = {} */) {
    Vue.prototype.$toast = (message: string | VNode = '',
                            toastOptions?: VueToastOptions) => {
      if (currentToast) {
        currentToast.close();
      }
      toastOptions
        ? currentToast = createToast(Vue, message, () => {currentToast = null;}, toastOptions)
        : currentToast = createToast(Vue, message, () => {currentToast = null;});
    };
  }
};
