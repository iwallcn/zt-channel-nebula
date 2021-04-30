// 应用模块
const app = {
  namespaced: true,
  state: {
    currentNavId: localStorage.getItem('currentNavId') || 1 // 记录头部菜单当前处于哪个系统下
  },
  getters: {
    currentNavId: state => state.currentNavId * 1
  },
  mutations: {
    ['SET_CURRENT_NavId'](state, payload) {
      state.currentNavId = payload
      localStorage.setItem('currentNavId', payload)
    }
  },
  actions: {}
}
export default app
