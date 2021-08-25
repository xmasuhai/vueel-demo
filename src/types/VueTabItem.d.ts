import Vue from 'vue';

export declare class VueTabItem extends Vue {
  name: string;
  tabName: string;
  active: boolean;
  disabled: boolean;
  eventBus: Vue;
}
