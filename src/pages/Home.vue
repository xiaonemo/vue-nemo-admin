<template>
  <v-main><p>home page</p></v-main>
  
</template>

<script>
  import VMain from '../layouts/Main.vue';
  export default {
    name: 'Home',
    components:{
      VMain
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
</style>
