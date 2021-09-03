<template>
  <div class="collapse-item">
    <header
      class="title"
      :class="{'title-show': isOpen}"
      @click="isOpen=!isOpen">
      {{ title }}
    </header>
    <article
      class="content"
      v-show="isOpen">
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
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

%margin-top-bottom {
  margin-top: -1px;
  margin-bottom: -1px;
}

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

  > .title {
    width: 100%;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  > .content {
    width: 100%;
    padding: 2px 8px 1px;
  }

  // .collapse-item
  &:first-child {
    > .title {
      box-shadow: 0 0 0 1px $grey;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
  }

  // .collapse-item
  &:not(:first-child):not(:last-child) {
    > .title {
      box-shadow: 0 0 0 1px $grey;
    }
  }

  // .collapse-item
  &:last-child {
    border-bottom: none;

    // v-show = false
    > .title:nth-last-child(2) {
      box-shadow: 0 0 0 1px $grey;
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
