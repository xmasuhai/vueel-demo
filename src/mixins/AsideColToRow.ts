import {Component, Vue} from 'vue-property-decorator';

@Component
export default class AsideColToRow extends Vue {
  flexCToR = {
    hasAsider: false
  };

  get colToRowStyle() {
    if (this.flexCToR.hasAsider) {
      return {
        'flex-direction': 'row'
      };
    }
    return {};
  }

  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$el.classList.contains('vue-aside')) {
        this.flexCToR.hasAsider = true;
      }
    });
  }
}
