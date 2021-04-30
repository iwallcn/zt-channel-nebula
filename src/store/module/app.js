// 应用模块
const app = {
  namespaced: true,
  state: {
    currentNavId: localStorage.getItem('currentNavId') || 1, // 记录头部菜单当前处于哪个系统下
    navTheme: localStorage.getItem('navTheme') || 'light' // 风格设置
  },
  getters: {
    currentNavId: state => state.currentNavId * 1,
    navTheme: state => state.navTheme
  },
  mutations: {
    ['SET_CURRENT_NavId'](state, payload) {
      state.currentNavId = payload
      localStorage.setItem('currentNavId', payload)
    },
    ['SET_NavTheme'](state, payload) {
      state.navTheme = payload
      localStorage.setItem('navTheme', payload)
    }
  },
  actions: {}
}
export default app
