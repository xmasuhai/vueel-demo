import {defineComponent} from '@vue/composition-api';
import Child from './Child';

export default defineComponent({
  name: 'Txs',
  props: {},
  components: {
    Child
  },
  // render function
  render() {
    return (<Child/>);
  }
});
