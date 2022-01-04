import {defineComponent/*, watch*/} from '@vue/composition-api';
import ChildOrig from './Child';
import useUsers from '@/components/txs/useUsers';
import * as tsx from 'vue-tsx-support';
import {User} from '@/components/txs/userInterface';

type ChildProps = {
  users: User[];
}

export const Child = tsx.ofType<ChildProps>().convert(ChildOrig);

export default defineComponent({
  name: 'Txs',
  props: {},
  components: {
    Child
  },
  setup(/*props, ctx*/) {
    const {users} = useUsers();
    const rowData: Record<string, string>[] = [];

    const filterData = (Data: Record<string, string>[]): Record<string, string>[] => {

      Data.splice(0, 6).forEach((item) => {
        rowData.push(item);
      });

      return (
        Data.length <= 6
          ? rowData
          : filterData(rowData));
    };

    /*
      // users为异步函数的返回值
      watch(users, () => {
        console.log('-> users', users.value);
        console.log('-> users', users.value[0]);
      });
    */

    return {
      users,
      filterData
    };
  },
  render() {
    return (
      <div>
        <Child users={this.users}/>
      </div>
    );
  }
});
