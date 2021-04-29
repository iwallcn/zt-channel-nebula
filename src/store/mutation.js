import * as types from './mutation-types'

export default {
  [types.SET_CURRENT_NavId](state, payload) {
    state.currentNavId = payload
    localStorage.setItem('currentNavId', payload)
  }
}
