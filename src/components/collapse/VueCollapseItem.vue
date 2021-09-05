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
      :class="{ 'content-show': isOpen && !isDisabled}"
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

  @Inject() readonly eventBus!: Vue;

  toggle() {
    if (this.isOpen) {
      this.eventBus.$emit('remove:selected', this.title);
    } else {
      this.eventBus.$emit('add:selected', this.title);
    }
  }

  // listen to parent
  addBusListener() {
    this.eventBus?.$on('update:selected', (titleList: Array<string>) => {
      if (titleList.includes(this.title)) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
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

  > .content {
    width: 100%;
    padding: 18px;

    &.content-show {
      border-top: 1px solid $grey;
    }
  }

  // .collapse-item
  &:first-child {

    > .title {

      // v-show = true
      &.title-show {
        border-top: none;
      }
    }
  }

  // .collapse-item
  &:last-child {
    border-bottom: none; //  覆盖 border-bottom: 1px solid $grey;

    > .title {

      // v-show = true
      &.title-show {
        @include border-bottom-radius;
      }
    }

    > .content {
      @include border-bottom-radius($border-radius);
    }
  }

}
</style>
