export default {
  path: '/srm',
  name: 'srm',
  meta: {
    icon: 'form',
    title: 'SRM系统'
  },
  component: () => import('@/App'),
  children: [
    {
      path: '/srm/supplierManage',
      name: 'supplierManage',
      meta: {
        title: '供应商管理'
      },
      component: () => import('@/App'),
      children: [
        {
          path: '/srm/supplierManage/signManage',
          name: 'signManage',
          component: () =>
            import(
              /* webpackChunkName: "signManage" */ '@views/SRM/SupplierManage/SignManage'
            ),
          meta: {
            title: '签约服务商管理'
          }
        },
        {
          path: '/srm/supplierManage/endManage',
          name: 'endManage',
          component: () =>
            import(
              /* webpackChunkName: "endManage" */ '@views/SRM/SupplierManage/EndManage'
            ),
          meta: {
            title: '末端服务商管理'
          }
        }
      ]
    }
  ]
}
