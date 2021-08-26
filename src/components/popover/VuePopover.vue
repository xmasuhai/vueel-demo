<template>
  <div class="popover" @click="togglePop">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible">
      <slot name="content"></slot>
    </div>
    <span class="triggerWrapper" ref="triggerWrapper">
      <slot>botton</slot>
    </span>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VuePopover extends Vue {
  name = 'VuePopover';
  visible = false;

  togglePop(event: Event) {

    if ((this.$refs.triggerWrapper as HTMLElement)
      .contains(event.target as Node)) {
      this.visible = !this.visible;
      if (this.visible) {

        console.log('---------------');
        this.$nextTick(() => {
          // 获取弹出消息框节点的引用
          document.body.appendChild(this.$refs.contentWrapper as Node);
          const {top, left}
            = (this.$refs.triggerWrapper as Element)
            .getBoundingClientRect();
          (this.$refs.contentWrapper as any).style.left = `${left + window.scrollX}px`;
          (this.$refs.contentWrapper as any).style.top = `${top + window.scrollY}px`;

          const eventHandler = () => {
            this.visible = false;
            console.log('触发事件回调', this.visible);
            document.removeEventListener('click', eventHandler);
          };

          console.log('添加监听事件');
          document.addEventListener('click', eventHandler);

        });

      }

    } else {
      console.log('x上面');
    }

    /*

        if (this.visible) {

          console.log('---------------');
          this.$nextTick(() => {
            // 获取弹出消息框节点的引用
            document.body.appendChild(this.$refs.contentWrapper as Node);
            const {top, left}
              = (this.$refs.trigger as Element).getBoundingClientRect();
            (this.$refs.contentWrapper as any).style.left = `${left + window.scrollX}px`;
            (this.$refs.contentWrapper as any).style.top = `${top + window.scrollY}px`;

            const eventHandler = () => {
              console.log('触发事件回调');
              this.visible = false;
              document.removeEventListener('click', eventHandler);
            };

            console.log('添加监听事件');
            document.addEventListener('click', eventHandler);

          });

        } else {
          console.log('关闭');
        }
    */


  }

}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  padding: 2px;
  transform: translateY(-100%);
}
</style>
