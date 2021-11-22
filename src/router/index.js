import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/guest/Home.vue'
import store from "../store";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: false}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/guest/About.vue')
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
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
