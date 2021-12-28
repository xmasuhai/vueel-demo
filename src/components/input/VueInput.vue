<template>
  <div class="vue-input-wrapper">
    <label class="vue-label-item" :for="labelName">
      <template>
        <span class="vue-label-name">{{ titleName }}</span>
        <input :id="labelName"
               :type="type"
               :name="labelName"
               :value="readonly ? placeholder : value"
               :placeholder="placeholder"
               :autocomplete="autocomplete"
               :disabled="disabled"
               :readonly="readonly"
               :error="error"
               :class="{
                        'fake-focus': isFakeFocus,
                        'fake-hover': isFakeHover && !error,
                        'fake-hover-error': isFakeHover && error,
                        error
                        }"
               @change="change"
               @input="input"
               @focus="focus"
               @submit="submit"
               @blur="blur">
        <div class="vue-input-info" v-if="error">
          <VueIcon icon-name="error-solid"
                   class="vue-icon-error"></VueIcon>
          <span class="vue-error-message">{{ error }}</span>
        </div>
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {VueIcon}
})
export default class VueInput extends Vue {
  name = 'VueInput';
  eventName = {}

  @Prop(String) labelName!: string;
  @Prop(String) titleName!: string;
  @Prop(String) type!: string;
  @Prop(String) value!: '';
  @Prop(String) placeholder!: string;
  @Prop(String) autocomplete!: string;
  @Prop(Boolean) isFakeFocus!: false;
  @Prop(Boolean) isFakeHover!: false;
  @Prop(Boolean) readonly!: false;
  @Prop(Boolean) disabled!: false;
  @Prop(String) error!: '';

  @Emit()
  change($event: { target: HTMLInputElement }) {
    return $event.target.value;
  }

  @Emit()
  input($event: { target: HTMLInputElement }) {
    return $event.target.value;
  }

  @Emit()
  focus($event: { target: HTMLInputElement }) {
    return $event.target.value;
  }

  @Emit()
  blur($event: { target: HTMLInputElement }) {
    return $event.target.value;
  }

  @Emit()
  submit($event: { target: HTMLInputElement }) {
    return $event.target.value;
  }

}
</script>
