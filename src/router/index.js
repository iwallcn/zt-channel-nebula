import Vue from 'vue'
import VueRouter from 'vue-router'
import tisRouter from './router-tis'
import srmRouter from './router-srm'
import cmsRouter from './router-cms'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    hideInMenu: true,
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
        hideInMenu: true,
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@layout/BaseLayout/Home')
      },
      { ...tisRouter },
      { ...srmRouter },
      { ...cmsRouter }
    ]
  },
  {
    path: '*',
    hideInMenu: true,
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@comp/Exception/404'),
    meta: {
      title: '404 NotFound'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 })
})

// 处理路由器推送的导航复制（全局）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  // 页面路由切换过度
  NProgress.start()
  // 动态修改title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
