import VueCol from '@/components/grid/VueCol.vue';
import VueRow from '@/components/grid/VueRow.vue';
import VuePopoverOrig from '@/components/popover/VuePopover.vue';
import {User} from '@/components/tsx-render/userInterface';
import {computed, defineComponent} from '@vue/composition-api';
import * as tsx from 'vue-tsx-support';
import 'vue-tsx-support/enable-check';
import {sliceToAverage} from '@/components/tsx-render/sliceToAverage';

type VuePopoverProps = {
  trigger: string;
  position: string;
}

export const VuePopover = tsx.ofType<VuePopoverProps>().convert(VuePopoverOrig);

export default defineComponent({
  name: 'ShowAvatar',
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
  setup(props) {
    const rowUserList = computed(() => {
      // unFlat array
      return sliceToAverage(props.users, 6);
    });

    return {
      rowUserList
    };
  },
  // render function
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div> {
        this.rowUserList.map((userList, idx) => (
          <VueRow key={idx}>{
            userList.map((user, index) => (
              <VuePopover trigger="click"
                          position="bottom"
                          key={index}>
                <template slot="content">
                  <div>昵称: {user.login}</div>
                </template>
                <VueCol>
                  <img width="100px"
                       height="100px"
                       src={user.avatar_url}
                       alt={user.login}/>
                </VueCol>
              </VuePopover>
            ))
          }</VueRow>
        ))
      }</div>
    );
  }
});
