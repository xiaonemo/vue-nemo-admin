import Vue from "vue";
import VueRouter from "vue-router";
import VMain from '../layouts/Main.vue';
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import Table from "../pages/Table.vue";
import Form from "../pages/Form.vue";
import Tabs from "../pages/Tabs.vue";
import Upload from "../pages/Upload.vue";
import VCharts from "../pages/VCharts.vue";
import DragList from "../pages/DragList.vue";
import Dialog from "../pages/Dialog.vue";
import Editor from "../pages/Editor.vue";
import Page404 from "../pages/404.vue";
import Page500 from "../pages/500.vue";
import Icon from "../pages/Icon.vue";

Vue.use(VueRouter);

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/login', component: Login
    },
    {
      path: '*', component: Page404
    },
    { path: '/', component: VMain, redirect: '/dashboard',
        children: [
        { path: '/dashboard', component: Dashboard },
        { path: '/table', component: Table },
        { path: '/form', component: Form },
        { path: '/tabs', component: Tabs },
        { path: '/upload', component: Upload },
        { path: '/charts', component: VCharts },
        { path: '/drag', component: DragList },
        { path: '/dialog', component: Dialog },
        { path: '/editor', component: Editor },
        { path: '/404', component: Page404 },
        { path: '/500', component: Page500 },
        { path: '/icon', component: Icon }
      ]
    }
  ]
})

export default router