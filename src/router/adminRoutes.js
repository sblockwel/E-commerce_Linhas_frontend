const routes = [
    {
      path: '/',
      name: 'HomeAdmin',
      component: () => import('../views/admin/Home.vue'),
    },
  ]

export default routes