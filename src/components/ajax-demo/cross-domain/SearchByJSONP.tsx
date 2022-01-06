import {defineComponent, Ref, ref,} from '@vue/composition-api';
import style from '@/components/ajax-demo/cross-domain/SearchByJSONP.module.scss';
import logo from '@/components/ajax-demo/cross-domain/taobao_logo.png';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import jsonpAdapter from 'axios-jsonp';

export default defineComponent({
  name: 'SearchByJSONP',
  props: {},
  components: {},
  setup(/*props, ctx*/) {
    // 定义延时器的Id
    const timer: Ref<ReturnType<typeof setTimeout> | undefined> = ref();
    // 定义缓存对象
    const cacheObj = ref({});

    // 接受数据，渲染UI结构
    const renderSuggestList = (result: Array<string>) => {
      /*
        result.length <= 0
          ?
          : ;
      */
      return result
    };

    // 发送请求 搜索关键字
    const getSuggestList = (keyword: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      axios({
        url: `https://suggest.taobao.com/sug?q=${keyword}`,
        adapter: jsonpAdapter,
        callbackParamName: 'callback' // optional, 'callback' by default
      })
        .then((res) => {
          return res
        });
    };

    // 定义防抖的函数
    const debounceSearch = (kw: string) => {
      timer.value = setTimeout(function () {
        getSuggestList(kw);
      }, 500);
    };

    // 为输入框绑定 keyup 事件


    const suggestList = '';

    return {
      suggestList,
      debounceSearch,
      renderSuggestList,
      cacheObj,
      timer
    };
  },
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div class={style.container}>
        {/* Logo */}
        <img src={logo}
             alt="taobao_logo"
             class={style.logo}/>

        <div class={style.box}>
          {/* tab 栏 */}
          <div class={style.tabs}>
            <div class={style['tabs-active']}>宝贝</div>
            <div>店铺</div>
          </div>

          {/* 搜索区域（搜索框和搜索按钮） */}
          <div class={style['search-box']}>
            <input id="ipt"
                   type="text"
                   class={style.ipt}
                   placeholder="请输入要搜索的内容"/>
            <button class={style.btnSearch}>搜索</button>
          </div>

          {/* 搜索建议列表 */}
          <div id={this.suggestList}>
            {}
            <div class={style['suggest-item']}>123</div>
          </div>
        </div>
      </div>
    );
  }

});
