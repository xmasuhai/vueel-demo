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

.collapse-item {
  position: relative;
  width: 100%;
  margin-left: -1px;

  > .title {
    margin-right: -2px;
    border: 1px solid $grey;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  > .content {
    margin-right: -2px;
    border: 1px solid $grey;
    padding: 2px 8px 1px;
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    > .content {
      margin-top: -1px;
    }
  }

  &:not(:first-child):not(:last-child) {
    > .title {
      margin-top: -1px;
      margin-bottom: -1px;
    }

    > .content {
      margin-top: -1px;
      margin-bottom: -1px;
    }
  }

  &:last-child {
    // v-show
    > .title:nth-last-child(2) {
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    > .title.title-show {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    > .content {
      border-top: none;
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      margin-top: -1px;
    }
  }

}
</style>
