<template>
  <div>
    <VueCodePresentation legendName="弹出提示组件">
      <VueDetail summaryString="无关闭按钮 自动关闭">
        <VueButton @click="showToast0">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 默认只出现一个提示框">
        <VueButton @click="showToast11">点击出现提示框</VueButton>
      </VueDetail>
    </VueCodePresentation>
    <VueCodePresentation legendName="弹出提示组件 提供关闭按钮 手动关闭">
      <VueDetail summaryString="ToastsTips 点击关闭，无回调">
        <VueButton @click="showToast2">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 点击关闭，并执行回调">
        <VueButton @click="popUpToasts" ref="button">点击出现提示框</VueButton>
      </VueDetail>
    </VueCodePresentation>
    <VueCodePresentation legendName="弹出提示组件 提供自定义HTML节点">
      <VueDetail summaryString="ToastsTips 传递自定义HTML节点">
        <VueButton @click="popUpToasts2">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 传递自定义HTML节点 设置样式">
        <VueButton @click="popUpToasts3">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 包含过长字符">
        <VueButton @click="showToast1">点击出现提示框</VueButton>
      </VueDetail>
    </VueCodePresentation>
    <VueCodePresentation legendName="ToastsTips 出现的位置">
      <VueDetail summaryString="ToastsTips 出现在顶部">
        <VueButton @click="popUpToasts4('top')">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 出现在中部">
        <VueButton @click="popUpToasts4('middle')">点击出现提示框</VueButton>
      </VueDetail>
      <VueDetail summaryString="ToastsTips 出现在底部">
        <VueButton @click="popUpToasts4('bottom')">点击出现提示框</VueButton>
      </VueDetail>
    </VueCodePresentation>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueToast from './toast/VueToast.vue';
import VueButton from './button/VueButton.vue';
import toastPlugin from './toast/toastPlugin';
import {ToastPosType, VueToast as VueToastType} from '@/types/VueToast';
import VueDetail from '@/components/code-presentation/VueDetail.vue';
import VueCodePresentation from '@/components/code-presentation/VueCodePresentation.vue';

Vue.use(toastPlugin);

@Component({
  components: {
    VueToast,
    VueButton,
    VueDetail,
    VueCodePresentation
  }
})
export default class ToastsTips extends Vue {
  name = 'ToastsTips';

  showToast0() {
    this.$toast('我是一个VueToast组件');
  }

  showToast11() {
    this.$toast(`你的智商目前为 ${Math.round(Math.random() * 100)}， 需要充值`);
  }

  showToast1() {
    this.$toast('我是一个VueToast组件我是一个VueToast组件', {
      propsData: {
        autoCloseDelay: false,
        closeButton: {
          text: '手动关闭'
        }
      }
    });
  }

  showToast2() {
    this.$toast('我是一个VueToast组件', {
      propsData: {
        autoCloseDelay: false,
        closeButton: {
          text: '手动关闭'
        }
      }
    });
  }

  popUpToasts() {
    this.$toast('我是一个VueToast组件，关闭我就执行一个回调', {
      propsData: {
        autoCloseDelay: false,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToastType) {
            toast.close();
            toast.$toast('关闭后，执行了一个回调', {
              propsData: {
                position: 'middle',
                autoCloseDelay: 2000
              }
            });
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
        autoCloseDelay: false,
        enableUnsafeHTML: true,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToastType) {
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
        autoCloseDelay: false,
        enableUnsafeHTML: true,
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToastType) {
            toast.close();
          }
        }
      }
    });
  }

  popUpToasts4(position: keyof ToastPosType) {
    const positionMap = {
      'top': '顶部',
      'middle': '中部',
      'bottom': '底部',
    };
    this.$toast(`智商需要充值 出现在${positionMap[position]}`, {
      propsData: {
        position,
        autoCloseDelay: 1200,
        enableUnsafeHTML: true,
        closeButton: {
          text: '已充值',
          callback(toast: VueToastType) {
            toast.close();
          }
        }
      }
    });
  }

}
</script>
