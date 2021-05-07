// 轨迹管理菜单列表
export const tisMenus = [
  {
    id: 14056,
    name: '跟线工作台',
    url: '',
    children: [
      {
        id: 140332,
        name: 'TIS跟线工作台',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 14033,
        name: 'TIS跟线工作台IT',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 14044,
        name: '工作台数据下载中心',
        url: '/abnormalMessage/listPage'
      }
    ]
  },
  {
    id: 14057,
    name: '轨迹查询',
    url: '',
    children: [
      {
        id: 140555,
        name: '未匹配轨迹节点查询',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 1405822,
        name: '轨迹修复结果查询',
        url: '/abnormalMessage/listPage'
      }
    ]
  },
  {
    id: 14058,
    name: '轨迹配置管理',
    url: ''
  },
  {
    id: 14059,
    name: '轨迹分析报表',
    url: ''
  },
  {
    id: 14060,
    name: '轨迹调整',
    url: ''
  },
  {
    id: 14061,
    name: '节点',
    url: ''
  }
]

//SRM系统菜单
export const srmMenus = [
  {
    id: 14057,
    name: '供应商管理',
    url: '',
    children: [
      {
        id: 1,
        name: '签约服务商管理',
        url: '/SRM/signMange'
      },
      {
        id: 2,
        name: '末端服务商管理',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 3,
        name: '服务渠道管理',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 4,
        name: '服务商类型维护',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 5,
        name: '渠道类型维护',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 6,
        name: '同步系统配置',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 7,
        name: '同步记录查询',
        url: '/abnormalMessage/listPage'
      },
      {
        id: 8,
        name: '服务类型管理',
        url: '/abnormalMessage/listPage'
      }
    ]
  }
]

// CMS系统菜单
export const cmsMenus = [
  {
    id: 1,
    name: '海外换单管理',
    url: '',
    children: []
  },
  {
    id: 2,
    name: '测试管理',
    url: '',
    children: []
  },
  {
    id: 3,
    name: '系统配置',
    url: '',
    children: []
  }
]

export const wosMenus = [
  {
    id: 1,
    name: '海外换单管理',
    url: '',
    children: []
  },
  {
    id: 2,
    name: '测试管理',
    url: '',
    children: []
  },
  {
    id: 3,
    name: '系统配置',
    url: '',
    children: []
  }
]

export const fmsMenus = [
  {
    id: 1,
    name: '海外换单管理',
    url: '',
    children: []
  },
  {
    id: 2,
    name: '测试管理',
    url: '',
    children: []
  },
  {
    id: 3,
    name: '系统配置',
    url: '',
    children: []
  }
]

// 系统名称
export const systemList = [
  {
    id: 1,
    name: '工作台',
    url: '/home',
    menu: []
  },
  {
    id: 2,
    name: '轨迹管理',
    url: '/tis',
    menu: tisMenus
  },
  {
    id: 3,
    name: 'SRM系统',
    url: '/srm',
    menu: srmMenus
  },
  {
    id: 4,
    name: 'CMS系统',
    url: '/cms',
    menu: cmsMenus
  },
  {
    id: 5,
    name: 'WOS系统',
    url: '/wos',
    menu: []
  },
  {
    id: 6,
    name: 'FMS系统',
    url: '/fms',
    menu: []
  }
]
