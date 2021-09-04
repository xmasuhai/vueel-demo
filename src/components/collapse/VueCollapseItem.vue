<template>
  <div class="collapse-item"
       :class="{ 'title-show': isOpen && !isDisabled}">
    <header
      class="title"
      :class="{ 'title-show': isOpen && !isDisabled,
                'disabled': isDisabled}"
      @click="isOpen=!isOpen">
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
import {Component, Prop, Vue} from 'vue-property-decorator';

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
}
</script>

<style lang="scss" scoped>
$grey: #999;
$border-radius: 4px;

@mixin border-bottom-radius($radius: 0px) {
  border-bottom-right-radius: $radius;
  border-bottom-left-radius: $radius;
}

.collapse-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid $grey;

  // collapse-item
  &.title-show {
  }

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

    &.title-show {
    }

    > .title {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }

    > .title.title-show {
    }
  }

  // .collapse-item
  &:not(:first-child):not(:last-child) {

    &.title-show {
    }

    > .title {
    }

  }

  // .collapse-item
  &:last-child {
    border-bottom: none; //  覆盖 border-bottom: 1px solid $grey;

    &.title-show {
    }

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
