export const routes = [
  {
    path: '/user',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "login" */ '@layout/UserLayout/Login'),
        meta: {
          title: '登录'
        }
      },
      {
        path: '/user/register',
        name: 'register',
        component: () =>
          import(
            /* webpackChunkName: "register" */ '@layout/UserLayout/Register'
          ),
        meta: {
          title: '注册'
        }
      }
    ]
  },
  {
    path: '',
    component: () =>
      import(/* webpackChunkName: "BaseLayout" */ '@layout/BaseLayout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@layout/BaseLayout/Home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/tis',
        name: 'tis',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@views/TIS/'),
        meta: {
          title: '轨迹管理'
        }
      }
    ]
  }
]
