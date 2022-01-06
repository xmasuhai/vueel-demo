import {defineComponent,} from '@vue/composition-api';
import style from '@/components/ajax-demo/cross-domain/SearchByJSONP.module.scss';

export default defineComponent({
  name: 'SearchByJSONP',
  props: {},
  components: {},
  setup(/*props, ctx*/) {
    const suggestList = '';
    return {
      suggestList
    };
  },
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div class={style.test}>
        {/* Logo */}
        <img src="./images/taobao_logo.png"
             alt=""
             class={style.logo}/>

        <div class={style.box}>
          {/* tab ? */}
          <div class={style.tabs}>
            <div class={style['tab-active']}>??</div>
            <div>??</div>
          </div>

          {/* ?????????????? */}
          <div class={style['search-box']}>
            <input id="ipt"
                   type="text"
                   class={style.ipt}
                   placeholder="?????????"/>
            <button class={style.btnSearch}>
              ??
            </button>
          </div>

          {/* ?????? */}
          <div id={this.suggestList}></div>
        </div>
      </div>
    );
  }

});
