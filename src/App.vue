<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  name = 'App';
}

</script>
