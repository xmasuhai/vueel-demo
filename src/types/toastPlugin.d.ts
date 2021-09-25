import {ToastCallBack} from './VueToast.d.ts';

declare module 'vue/types/vue' {
  interface Vue {
    $toast: ToastCallBack;
  }
}
