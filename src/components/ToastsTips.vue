<template>
  <div>
    <form>
      <fieldset>
        <legend>无关闭按钮 自动关闭</legend>
        <details open>
          <summary>ToastsTips</summary>
          <div>
            <VueButton @click="showToast0">点击出现提示框</VueButton>
          </div>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>有关闭按钮 手动关闭</legend>
        <details open>
          <summary>ToastsTips 包含过长字符</summary>
          <div>
            <VueButton @click="showToast1">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 点击关闭，无回调</summary>
          <div>
            <VueButton @click="showToast2">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 点击关闭，并执行回调</summary>
          <div>
            <VueButton @click="popUpToasts">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 传递自定义HTML节点</summary>
          <div>
            <VueButton @click="popUpToasts2">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 传递自定义HTML节点</summary>
          <div>
            <VueButton @click="popUpToasts3">点击出现提示框</VueButton>
          </div>
        </details>
      </fieldset>
    </form>
    <br>
    <form>
      <fieldset>
        <legend>ToastsTips 出现的位置</legend>
        <details open>
          <summary>ToastsTips 出现在顶部</summary>
          <div>
            <VueButton @click="popUpToasts4('top')">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 出现在中部</summary>
          <div>
            <VueButton @click="popUpToasts4('middle')">点击出现提示框</VueButton>
          </div>
        </details>
        <br>
        <details open>
          <summary>ToastsTips 出现在底部</summary>
          <div>
            <VueButton @click="popUpToasts4('bottom')">点击出现提示框</VueButton>
          </div>
        </details>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueToast from './toast/VueToast.vue';
import VueButton from './button/VueButton.vue';
import toastPlugin from './toast/toastPlugin';

Vue.use(toastPlugin);
@Component({
  components: {
    VueToast,
    VueButton
  }
})
export default class ToastsTips extends Vue {
  name = 'ToastsTips';

  showToast0() {
    this.$toast('我是一个VueToast组件');
  }

  showToast1() {
    this.$toast('我是一个VueToast组件我是一个VueToast组件我是一个VueToast组件我是一个VueToast组件我是一个VueToast组件', {
      propsData: {
        autoClose: false,
        closeButton: {
          text: '手动关闭'
        }
      }
    });
  }

  showToast2() {
    this.$toast('我是一个VueToast组件', {
      propsData: {
        autoClose: false,
        closeButton: {
          text: '手动关闭'
        }
      }
    });
  }

  popUpToasts() {
    this.$toast('我是一个VueToast组件', {
      propsData: {
        autoClose: false,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToast) {
            toast.close();
          }
        }
      }
    });
  }

  popUpToasts2() {
    this.$toast(`
        <p>
          我是由一个<i>标签</i>包裹<strong>文字</strong>的VueToast组件
        </p>`, {
      propsData: {
        autoClose: false,
        enableUnsafeHTML: true,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToast) {
            toast.close();
          }
        }
      }
    });
  }

  popUpToasts3() {
    this.$toast(`
        <p>
          <a style="color: seagreen;" href="https://cn.vuejs.org">Vue官网链接</a>
        </p>`, {
      propsData: {
        autoClose: false,
        enableUnsafeHTML: true,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToast) {
            toast.close();
          }
        }
      }
    });
  }

  popUpToasts4(position = 'top') {
    this.$toast(`智商需要充值 出现在${position}`, {
      propsData: {
        position,
        autoClose: true,
        enableUnsafeHTML: true,
        closeButton: {
          text: '已充值',
          callback(toast: VueToast) {
            toast.close();
          }
        }
      }
    });
  }
}
</script>
