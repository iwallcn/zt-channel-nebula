// 应用模块
const app = {
  namespaced: true,
  state: {
    currentNavId: localStorage.getItem('currentNavId') || 1, // 记录头部菜单当前处于哪个系统下
    theme: localStorage.getItem('theme') || 'light' // 风格设置
  },
  getters: {
    currentNavId: state => state.currentNavId * 1,
    theme: state => state.theme
  },
  mutations: {
    ['SET_CURRENT_NavId'](state, payload) {
      state.currentNavId = payload
      localStorage.setItem('currentNavId', payload)
    },
    ['SET_THEME'](state, payload) {
      state.theme = payload
      localStorage.setItem('theme', payload)
    }
  },
  actions: {}
}
export default app
