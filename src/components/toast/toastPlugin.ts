import Toast from './VueToast.vue';
import {VNode} from 'vue';
import {VueToast, VueToastOptions} from '@/types/VueToast';

let currentToast: VueToast | null;
let opt: {};

function createToast(Vue: Record<string, any>,
                     message: string | VNode,
                     onCloseCallBack: () => void,
                     VueToastOptions?: VueToastOptions | {}
): VueToast {
  const Constructor = Vue.extend(Toast);

  VueToastOptions = VueToastOptions || {};

  // toast.message = message
  if (typeof message === 'string') {
    opt = {
      'message': message
    };
  }

  const ob = Object.assign(VueToastOptions, {data: () => opt});
  const toast = new Constructor(ob);
  toast.$slots.default = [toast.message];
  toast.$mount();
  // 挂到 body
  document.body.appendChild(toast.$el);
  // 监听'beforeClose'事件，执行自定义的onCloseCallBack回调
  toast.$once('beforeClose', onCloseCallBack || null);
  return toast;

}

// 暴露一个 install 方法
export default {
  install(Vue: Record<string, any>, /* options: {} = {} */): void {
    // 添加实例方法
    Vue.prototype.$toast = (message: string | VNode = '',
                            toastOptions?: VueToastOptions) => {
      // 关闭上一个实例
      if (currentToast) {
        currentToast.close();
      }

      // 判断是否存在 传入的 toastOptions 参数
      toastOptions
        ? currentToast = createToast(Vue, message, () => {currentToast = null;}, toastOptions)
        : currentToast = createToast(Vue, message, () => {currentToast = null;});
    };

  }

};
