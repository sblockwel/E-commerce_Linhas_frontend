const routes = [
    {
      path: '/',
      name: 'HomeAdmin',
      component: () => import('../views/admin/Home.vue'),
    },
    {
      path: 'product',
      name: 'ProductCreate',
      component: () => import('../views/admin/ProductForm.vue'),
    },
    {
      path: 'product/:id',
      name: 'ProductEdit',
      component: () => import('../views/admin/ProductForm.vue'),
    },
    {
      path: 'products',
      name: 'ProductList',
      component: () => import('../views/admin/ProductList.vue'),
    },
    {
      path: 'category',
      name: 'CategoryCreate',
      component: () => import('../views/admin/CategoryForm.vue'),
    },
    {
      path: 'category/:id',
      name: 'CategoryEdit',
      component: () => import('../views/admin/ProductForm.vue'),
    },
    {
      path: 'categories',
      name: 'CategoryList',
      component: () => import('../views/admin/CategoryList.vue'),
    },
    {
      path: 'adminRegister',
      name: 'AdminRegister',
      component: () => import('../views/admin/AdminRegister.vue'),
    },
    {
      path: 'orderPending',
      name: 'OrderPending',
      component: () => import('../views/admin/OrderList.vue'),
    },

  ]

export default routes