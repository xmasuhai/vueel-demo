import {defineComponent} from '@vue/composition-api';
import VueCol from '@/components/grid/VueCol.vue';
import VueRow from '@/components/grid/VueRow.vue';
// import VuePopover from './popover/VuePopover.vue';
import {User} from '@/components/txs/userInterface';
import "vue-tsx-support/enable-check"

export default defineComponent({
  name: 'Child',
  props: {
    users: {
      type: Array as { (): User[] }, // 提供调用处的类型推到
      // 初始值为复杂类型的数组 必须用工厂函数 生成
      default: () => {
        return [];
      },
    }
  },
  components: {
    VueCol,
    VueRow
  },
  // render function
  render() {
    return (
      <div>
        <VueRow>
          <VueCol>
            <img width="100px"
                 height="100px"
                 src={this.users[0]?.avatar_url}
                 alt={this.users[0]?.login}/>
            <div>{this.users[0]?.login}</div>
          </VueCol>
        </VueRow>
      </div>);
  }
});
