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
    path: '/',
    redirect: '/home',
    name: 'home',
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
        path: '/TIS',
        name: 'TIS',
        redirect: '/TIS/tisWorkbench',
        meta: {
          title: '轨迹管理'
        }
      },
      {
        path: '/TIS/tisWorkbench',
        name: 'TIS/tisWorkbench',
        component: () =>
          import(
            /* webpackChunkName: "TisWorkbench" */ '@views/TIS/LineWorkbench/TisWorkbench'
          ),
        meta: {
          title: 'IT跟线工作台'
        }
      },
      {
        path: '/SRM',
        name: 'SRM',
        redirect: '/SRM/signMange',
        meta: {
          title: '供应商管理'
        }
      },
      {
        path: '/SRM/signMange',
        name: 'SRM/signMange',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@views/SRM/SignManage'),
        meta: {
          title: '签约服务商管理'
        }
      },
      {
        path: '/CMS',
        name: 'CMS',
        redirect: '/CMS/AbroadChangeManage/ChangeBatch',
        meta: {
          title: 'CMS'
        }
      },
      {
        path: '/CMS/AbroadChangeManage/ChangeBatch',
        name: 'CMS/AbroadChangeManage/ChangeBatch',
        component: () =>
          import(
            /* webpackChunkName: "Home" */ '@views/CMS/AbroadChangeManage/ChangeBatch'
          ),
        meta: {
          title: '海外换单管理'
        }
      }
    ]
  },
  {
    path: '/*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@comp/Exception/404'),
    meta: {
      title: '404 NotFound'
    }
  }
]
