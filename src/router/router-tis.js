export default {
  path: '/tis',
  name: 'tis',
  meta: {
    icon: 'folder-open',
    title: '轨迹管理'
  },
  component: { render: h => h('router-view') },
  children: [
    {
      path: '/tis/lineWorkbench',
      name: 'lineWorkbench',
      meta: { icon: 'folder-open', title: '跟线工作台' },
      component: { render: h => h('router-view') },
      children: [
        {
          path: '/tis/lineWorkbench/tisWorkbench',
          name: 'tisWorkbench',
          component: () =>
            import(
              /* webpackChunkName: "tisWorkbench" */ '@views/TIS/LineWorkbench/TisWorkbench'
            ),
          meta: {
            title: 'IT跟线工作台'
          }
        },
        {
          path: '/tis/lineWorkbench/tisWorkbenchIT',
          name: 'tisWorkbenchIT',
          component: () =>
            import(
              /* webpackChunkName: "tisWorkbenchIT" */ '@views/TIS/LineWorkbench/TisWorkbenchIT'
            ),
          meta: {
            title: 'TIS跟线工作台IT'
          }
        }
      ]
    },
    {
      path: '/tis/trackQuery',
      name: 'trackQuery',
      meta: { icon: 'folder-open', title: '轨迹查询' },
      component: { render: h => h('router-view') },
      children: [
        {
          path: '/tis/trackQuery/nodeQuery',
          name: 'nodeQuery',
          component: () =>
            import(
              /* webpackChunkName: "nodeQuery" */ '@views/TIS/TrackQuery/NodeQuery'
            ),
          meta: {
            title: '未匹配轨迹节点查询'
          }
        }
      ]
    }
  ]
}
