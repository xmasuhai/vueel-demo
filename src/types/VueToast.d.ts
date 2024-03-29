import Vue from 'vue';

/** Message Component */
export declare class VueToast extends Vue {
  /** Close the Loading instance */
  close(): void;

  $toast: ToastCallBack;
  // popUpToast(): void;
}

type closeButton = {
  text: string;
  callback: (vm: Vue) => void | undefined;
}

interface ToastPosType {
  top: string;
  middle: string;
  bottom: string;
}

export interface CloseEventHandler {
  /**
   * Triggers when a message is being closed
   *
   * @param instance The message component that is being closed
   */
  (instance: VueToast): void;
}

/** Options used in Message */
export interface VueToastOptions {
  /** Callback function when closed with the message instance as the parameter */
  onClose?: CloseEventHandler;
  data?: {} | (() => ({}));
  propsData: {
    autoCloseDelay?: false | number;
    enableEscapeKey?: boolean;
    enableUnsafeHTML?: boolean;
    position?: keyof ToastPosType;
    closeButton?: {
      text: string;
      callback?: ((toast: VueToast) => void) | undefined;

    };
  };
}

export interface ToastCallBack {
  (text: string, options?: Record<VueToastOptions>): void;

}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * Used to show feedback after an activity.
     * The difference with Notification
     * is that the latter is often
     * used to show a system level passive notification.
     * */
    $toast: (text: string, options?: Record<VueToastOptions>) => void;
  }
}
