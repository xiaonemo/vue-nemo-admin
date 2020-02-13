import Vue from "vue";
import Router from "vue-router";
import About from './page/About.vue';
import Home from './page/Home.vue';
console.log(About)
Vue.use(Router);

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
