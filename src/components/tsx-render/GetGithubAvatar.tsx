import {User} from '@/components/tsx-render/userInterface';
import useUsers from '@/components/tsx-render/useGetUsersAvatar';
import {computed, defineComponent} from '@vue/composition-api';
import * as tsx from 'vue-tsx-support';
import ShowAvatarOrig from './ShowAvatar';

type ChildProps = {
  users: User[];
}

export const ShowAvatar = tsx.ofType<ChildProps>().convert(ShowAvatarOrig);

export default defineComponent({
  name: 'GetGithubAvatar',
  props: {},
  components: {
    ShowAvatar
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
        <ShowAvatar users={this.usersResult}/>
      </div>
    );
  }
});
