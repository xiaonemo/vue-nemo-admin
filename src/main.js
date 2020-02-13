import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import Mock from '@/mock'
import VCharts from 'v-charts'
import draggable from 'vuedraggable'
import './assets/icon.css';
import './assets/base.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.use(draggable)

var v = new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App) 
  }
  // render: h => h(this.ViewComponent)
});
