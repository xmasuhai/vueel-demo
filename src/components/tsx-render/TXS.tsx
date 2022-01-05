import {User} from '@/components/tsx-render/userInterface';
import useUsers from '@/components/tsx-render/useUsers';
import {computed, defineComponent} from '@vue/composition-api';
import * as tsx from 'vue-tsx-support';
import ChildOrig from './Child';

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
    const {users} = useUsers(); // users: Ref<User[]>
    // wait for async change users.value
    const usersResult = computed(() => {
      return users.value;
    });

    return {
      users,
      usersResult
    };
  },
  render() {
    // noinspection JSXNamespaceValidation
    return (
      <div>
        <Child users={this.usersResult}/>
      </div>
    );
  }
});
