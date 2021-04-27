export const routes = [
  {
    path: '/user',
    component: { render: (h) => h('router-view') },
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "login" */ '@layout/UserLayout/Login'),
        meta: {
          title: '登录',
        },
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(
            /* webpackChunkName: "register" */ '@layout/UserLayout/Register'
          ),
        meta: {
          title: '注册',
        },
      },
    ],
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@layout/BaseLayout'),
  },
]
