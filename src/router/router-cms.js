export default {
  path: '/CMS',
  name: 'CMS',
  meta: {
    icon: 'folder-open',
    title: 'CMS'
  },
  children: [
    {
      path: 'CMS',
      redirect: '/CMS/AbroadChangeManage/ChangeBatch'
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
}
