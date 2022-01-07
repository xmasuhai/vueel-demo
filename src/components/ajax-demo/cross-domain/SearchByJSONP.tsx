import {defineComponent, Ref, ref} from '@vue/composition-api';
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
    let timer: number;
    // 定义缓存对象
    const cacheObj: Record<string, Array<Array<string>>> = {};
    // 获取用户输入的字符 并去掉两边的空格
    const inputValue = ref('');

    const responseData: Ref<Array<Array<string>>> = ref([]);

    // 发送请求JSONP 搜索关键字
    const getSuggestList = (keyword: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      axios({
        url: `https://suggest.taobao.com/sug?q=${keyword}`,
        adapter: jsonpAdapter,
        // callbackParamName: 'callback' // optional, 'callback' by default
      })
        .then((res) => {
          const {data} = res;
          const {result} = data;
          result.length === 0
            ? responseData.value = [['无搜索宝贝']]
            : responseData.value = result;
          // 将获取到用户输入的内容，当做键
          // 将需要将数据作为值，进行缓存
          inputValue.value && (cacheObj[inputValue.value] = result);
        });
    };

    // 定义防抖的函数
    const debounceSearch = (kw: string) => {
      timer = window.setTimeout(function () {
        getSuggestList(kw);
      }, 800);
    };

    // 为输入框绑定 keyup 事件回调函数
    const sendQuery = () => {
      // 清空原数据
      responseData.value = []

      // 清空 timer
      clearTimeout(timer);

      // 无输入字符时，无需发起请求
      if (inputValue.value.length === 0) {return;}

      // 判断缓存中对应的关键字如果有数据，更新数据 responseData
      if (cacheObj[inputValue.value]) {
        return responseData.value = cacheObj[inputValue.value];
      }

      // 获取搜索建议列表 加防抖
      // getSuggestList(keywords)
      return inputValue.value.trim() && debounceSearch(inputValue.value);
    };

    return {
      inputValue,
      responseData,
      debounceSearch,
      sendQuery,
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
            <div class={style['tab-active']}>宝贝</div>
            <div>店铺</div>
          </div>

          {/* 搜索区域（搜索框和搜索按钮） */}
          <div class={style['search-box']}>
            <input id="ipt"
                   type="text"
                   class={style.ipt}
                   v-model={this.inputValue}
                   onKeyup={this.sendQuery}
                   placeholder="请输入要搜索的内容"/>
            <button class={style.btnSearch}>搜索</button>
          </div>

          {/* 搜索建议列表 */}
          {/* 条件渲染 */}
          {this.inputValue.length === 0
            ? null
            : (
              <div class={style['suggest-list']}>
                {/* 循环渲染 */}
                {this.responseData.map((item, index) => (
                  <div class={style['suggest-item']}
                       key={index}>
                    {item[0]}
                  </div>
                ))}
              </div>
            )

          }

        </div>

      </div>
    );
  }

});
