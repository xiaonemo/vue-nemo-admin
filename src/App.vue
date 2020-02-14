<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import VMain from './layouts/Main.vue';
  export default {
    name: 'App',
    components: {
      VMain
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
