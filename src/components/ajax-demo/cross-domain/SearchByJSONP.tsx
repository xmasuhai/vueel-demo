import {defineComponent, Ref, ref,} from '@vue/composition-api';
import style from '@/components/ajax-demo/cross-domain/SearchByJSONP.module.scss';
import logo from '@/components/ajax-demo/cross-domain/taobao_logo.png';

export default defineComponent({
  name: 'SearchByJSONP',
  props: {},
  components: {},
  setup(/*props, ctx*/) {
    // 定义延时器的Id
    const timer: Ref<ReturnType<typeof setTimeout> | undefined> = ref();
    // 定义缓存对象
    const cacheObj = ref({});

    // 发送请求 搜索关键字
    const getSuggestList = (keyword: string) => {
      keyword = '';
      return keyword;
    };

    // 定义防抖的函数
    const debounceSearch = (kw: string) => {
      timer.value = setTimeout(function () {
        getSuggestList(kw);
      }, 500);
    };

    // 为输入框绑定 keyup 事件

    // 渲染UI结构

    const suggestList = '';

    return {
      suggestList,
      debounceSearch,
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
          <div id={this.suggestList}>搜索建议列表</div>
        </div>
      </div>
    );
  }

});
