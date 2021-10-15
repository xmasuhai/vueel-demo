declare module '*.vue' {
  // import Vue from 'vue';
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
