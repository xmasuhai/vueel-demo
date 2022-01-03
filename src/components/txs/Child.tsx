import {defineComponent, ref} from '@vue/composition-api';

export default defineComponent({
  name: 'txs-demo',
  props: {},
  setup(/*props, ctx*/) {
    const countRef = ref(1);
    const render = () => {
      // noinspection JSXNamespaceValidation
      return <div> Hello TXS </div>;
    };

    return {
      countRef,
      render
    };
  },
  render() {
    return (<div>Child</div>);
  }
});
