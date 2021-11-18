<template>
  <div class="vue-collapse-item">
    <header class="vue-title"
            :class="{
              'title-show': isOpen && !isDisabled,
              'disabled': isDisabled
            }"
            @click="toggle">
      {{ title }}
      <VueIcon iconName="right"
               :class="{'down-icon': isOpen && !isDisabled}">
      </VueIcon>
    </header>
    <transition name="push-pull">
      <article class="vue-content"
               :class="{
                    'content-show': isOpen && !isDisabled
                    }"
               v-show="isOpen && !isDisabled">
        <slot></slot>
      </article>
    </transition>
  </div>
</template>

<script lang="ts">
import VueIcon from '../icon/VueIcon.vue';
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';

@Component({
  components: {
    VueIcon
  }
})
export default class VueCollapseItem extends Vue {
  name = 'VueCollapseItem';
  isOpen = false;

  @Prop({
    type: String,
    default: '',
    required: true
  }) title!: string;
  @Prop({
    type: Boolean,
    default: false
  }) isDisabled!: boolean;

  @Inject() readonly eventBus!: Vue;

  toggle() {
    this.isOpen
      ? this.eventBus.$emit('remove:selected', this.title)
      : this.eventBus.$emit('add:selected', this.title);
  }

  // listen to parent
  addBusListener() {
    // this.eventBus?.$on vuepress-plugin-typescript not support ?.
    this.eventBus && this.eventBus.$on('update:selected', (titleList: Array<string>) => {
      this.isOpen = titleList.includes(this.title);
    });
  }

  initShow() {
    this.eventBus.$once('update:selected', (titleList: Array<string>) => {
      if (titleList.includes(this.title)) {
        this.isOpen = true;
      }
    });
  }

  mounted() {
    // listen to parent once
    this.initShow();
    // listen to parent
    this.addBusListener();
  }

}
</script>
