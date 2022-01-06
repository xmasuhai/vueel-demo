import VueButtonOrig from '@/components/button/VueButton.vue';
import {defineComponent, inject} from '@vue/composition-api';
import axios from 'axios';
import * as tsx from 'vue-tsx-support';

type VueButtonProps = {
  onClick: Function;
}

export const VueButton = tsx.ofType<VueButtonProps>().convert(VueButtonOrig);

export default defineComponent({
  name: 'AjaxCrossDomain',
  props: {},
  components: {VueButton},
  setup(/*props, ctx*/) {
    const toast = inject<Function>('toast');

    const runAjax = () => {
      axios.get('/api/jsonp',
        {
          params: {
            name: 'sz',
            age: 20
          },
          baseURL: 'http://www.liulongbin.top:3006',
          timeout: 1000
        }
      )
        .then( (res) => { return res;
          },
          () => {
            return toast && toast('跨域失败');
          });
    };
    return {
      runAjax
    };
  },
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div>
        <VueButton onClick={this.runAjax}> 发起跨域请求</VueButton>
      </div>
    );
  }

});
