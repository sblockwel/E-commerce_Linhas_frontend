const routes = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('../views/guest/Home.vue'),
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('../views/guest/About.vue')
  },
  {
    path: 'compra',
    name: 'Compra',
    component: () => import('../views/guest/Compra.vue')
  },
  {
    path: "register",
    name: "Register",
    component: () => import('../views/auth/Register.vue'),
    meta: { guest: true },
  },
  {
    path: "login",
    name: "Login",
    component: () => import('../views/auth/Login.vue'),
    meta: { guest: true },
  },
]

export default routes