import {reactive, ref} from '@vue/composition-api';
import {User} from './userInterface';
// module
import toastPlugin from '@/components/toast/toastPlugin';
import Vue from 'vue';

Vue.use(toastPlugin);

export default function () {
  const users = ref<User[]>([]);
  const eventbus = reactive(new Vue());
  const toast = eventbus.$toast;

  fetch('https://api.github.com/users')
    .then(_ => _.json())
    .then(data => {
      if (!Array.isArray(data)) {
        return toast(`??????\n${data}`);
      }
      users.value = data;
    });

  return {
    users,
  };
}