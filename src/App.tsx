import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <main id="app">
        <router-view/>
      </main>
    );
  },
});
