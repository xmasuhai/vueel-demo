<template>
  <!--
      <div class="vue-demo-button">
        <button class="vue-button" v-if="icon-position === 'right'">
          <slot></slot>
          <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
          </svg>
        </button>
        <button class="vue-button" v-else>
          <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
          </svg>
          <slot></slot>
        </button>
      </div>
      -->
  <!--  <div class="vue-demo-button"> -->
  <button class="vue-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <!-- 组件化 <Icon>
      <svg v-if="icon" class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      -->
    <VueIcon v-if="!!icon && !isLoading" :name="icon" class="icon" @click="kClick"/>
    <VueIcon v-if="isLoading" name="loading" class="loading icon"/>
    <div class="content">
      <slot/>
    </div>
  </button>
  <!--  </div> -->
</template>

<script>
import VueIcon from '../icon/Icon.vue'

export default {
  // props: ['icon', 'iconPosition'], // 'iconPosition': 'left' || 'right'
  props: {
    icon: {
      type: String, // ['settings'. 'loading'. 'right'. 'left'. 'download'. 'arrow-down'. 'thumbs-up']
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(userValue) {
        console.log(userValue)
        /*
        if (userValue !== 'left' && userValue !== 'right') {
          return false
        }else {
          return true
        }
        */
        // simplify if-else
        // return value !== 'left' && value !== 'right' ? false : true;
        // return !(userValue !== 'left' && userValue !== 'right');
        return (userValue === 'left' || userValue === 'right')
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    kClick() {
      this.$emit('click')
    },
  },
  components: {
    VueIcon
  },
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
    }
  }
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: red;
  //--border-color-hover: #666;
  }
/*
.vue-demo-button {
  display: inline-flex;
  vertical-align: middle;
  }
*/
.vue-button {
  margin-right: 10px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .73em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
    }
  &:active {
    background-color: var(--button-active-bg);
    }
  &:focus {
    outline: none;
    }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .3em;
      margin-right: 0;
      margin-top: .1em;
      }
    > .content {
      order: 1;
      }
    }
  /* ali iconfont common css */
  > .icon {
    width: 1em;
    height: 1em;
    margin-right: .3em;
    margin-left: 0;
    margin-top: .1em;
    fill: currentColor;
    overflow: hidden;
    order: 1;
    //fill: red;
    }
  > .content {
    order: 2;
    }
  .loading {
    animation: spin 1s infinite linear;
    }
  }
</style>
