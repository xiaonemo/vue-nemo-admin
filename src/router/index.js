import Vue from "vue";
import VueRouter from "vue-router";
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

Vue.use(VueRouter);

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
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
    { path: '/500', component: Page500 }
  ]
})

export default router