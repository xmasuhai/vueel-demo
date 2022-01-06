import {defineComponent,} from '@vue/composition-api';
import SearchByJSONP from '@/components/ajax-demo/cross-domain/SearchByJSONP';

export default defineComponent({
  name: 'JsonP',
  props: {},
  components: {SearchByJSONP},
  setup(/*props, ctx*/) {

    return {};
  },
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div>
        <SearchByJSONP/>
      </div>
    );
  }

});
