<template>
  <div class="collapse-item">
    <header
      class="title"
      :class="{ 'title-show': isOpen && !isDisabled,
                'disabled': isDisabled}"
      @click="toggle">
      {{ title }}
    </header>
    <article
      class="content"
      v-show="isOpen && !isDisabled">
      <slot>
        VueCollapseItem
      </slot>
    </article>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';

@Component
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
  @Prop({
    type: Boolean,
    default: true
  }) keepSingle!: boolean;

  @Inject() readonly eventBus!: Vue;
  @Inject() readonly isAllShowSingle!: boolean;

  toggle() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
      this.eventBus.$emit('update:selected', this.title);
    }
  }

  show() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  addBusListener() {
    this.isAllShowSingle
    && this.keepSingle
    && this.eventBus.$on('update:selected', (title: string) => {
      if (title === this.title) {
        this.show();
      } else {
        (this.isAllShowSingle && this.keepSingle)
          ? this.close()
          : null;
      }
    });

  }

  initShow() {
    this.eventBus.$once('update:selected', (title: string) => {
      if (title === this.title) {
        this.show();
      }
    });
  }

  mounted() {
    this.initShow();
    this.addBusListener();
  }
}
</script>

<style lang="scss" scoped>
$grey: #999;
$border-radius: 4px;

@mixin border-bottom-radius($radius: 0px) {
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

.collapse-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid $grey;

  > .title {
    width: 100%;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;

    &.disabled {
      color: lighten(#000, 80%);
      background-color: lighten($grey, 80%);
      cursor: not-allowed;
    }
  }

  // v-show = true
  > .title.title-show {
    box-shadow: 0 .9px 0 0 $grey;
  }

  > .content {
    width: 100%;
    padding: 18px;
  }

  // .collapse-item
  &:first-child {

    > .title {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
  }

  // .collapse-item
  //&:not(:first-child):not(:last-child) { }

  // .collapse-item
  &:last-child {
    border-bottom: none; //  覆盖 border-bottom: 1px solid $grey;

    // v-show = false
    > .title:nth-last-child(2) {
      @include border-bottom-radius(3px);
    }

    // v-show = true
    > .title.title-show {
      @include border-bottom-radius;
    }

    > .content {
      @include border-bottom-radius($border-radius);
    }
  }

}
</style>
