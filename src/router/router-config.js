import tisRouter from './router-tis'
import srmRouter from './router-srm'
import cmsRouter from './router-cms'

export const routes = [
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "404" */ '@layout/UserLayout'),
    children: [
      {
        path: '/user',
        redirect: '/user/login'
      },
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
    path: '/',
    component: () =>
      import(/* webpackChunkName: "BaseLayout" */ '@layout/BaseLayout'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@layout/BaseLayout/Home'),
        meta: {
          title: '首页'
        }
      },
      { ...tisRouter },
      { ...srmRouter },
      { ...cmsRouter }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@comp/Exception/404'),
    meta: {
      title: '404 NotFound'
    }
  }
]
