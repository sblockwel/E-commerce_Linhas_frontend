import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
import ClientRoutes from './clientRoutes'
import AdminRoutes from './adminRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Store',
    component: () => import('../layout/BaseLayout.vue'),
    redirect: '/home',
    meta: {requiresAuth: false},
    children: ClientRoutes
     
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../layout/AdminLayout.vue'),
    redirect: '/homeAdmin',
    meta: {requiresAuth: true},
    children: AdminRoutes
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router
