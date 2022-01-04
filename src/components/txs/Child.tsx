import {defineComponent, ref} from '@vue/composition-api';

export default defineComponent({
  name: 'Child',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  // render function
  render() {
    const countRef = ref(1);
    return (<div>Hello TXS Child {countRef.value}</div>);
  }
});
