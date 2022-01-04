import VueCol from '@/components/grid/VueCol.vue';
import VueRow from '@/components/grid/VueRow.vue';
import VuePopoverOrig from '@/components/popover/VuePopover.vue';
import {User} from '@/components/txs/userInterface';
import {defineComponent} from '@vue/composition-api';
import * as tsx from 'vue-tsx-support';
import 'vue-tsx-support/enable-check';

type VuePopoverProps = {
  trigger: string;
  position: string;
}

export const VuePopover = tsx.ofType<VuePopoverProps>().convert(VuePopoverOrig);

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
    VueRow,
    VuePopover
  },
  // render function
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div>
        <VueRow>
          <VuePopover trigger="hover"
                      position="bottom">
            <template slot="content">
              <div>{this.users[0]?.login}</div>
            </template>
            <VueCol>
              <img width="100px"
                   height="100px"
                   src={this.users[0]?.avatar_url}
                   alt={this.users[0]?.login}/>
            </VueCol>
          </VuePopover>
        </VueRow>
      </div>);
  }
});
