import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import NotFound from './page/NotFound.vue';
import routes from './router';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(VueRouter);


var v = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      console.log(routes[this.currentRoute])
      return routes[this.currentRoute] || NotFound
    }
  },
  created: function (){
    console.log(this.ViewComponent);
  },
  render (h) {
    return h(this.ViewComponent) 
  }
  // render: h => h(this.ViewComponent)
});
