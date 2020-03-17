export default {
  namespaced: true,
  state: {
    userName: localStorage.getItem('user_name') || '',
    password: localStorage.getItem('user_password') || '',
    companyCode: localStorage.getItem('company_code') || ''
  },
  mutations: {
    SET_USER_NAME (state, userName) {
      state.userName = userName
      localStorage.setItem('user_name', userName)
    },
    SET_PASSWORD (state, password) {
      state.password = password
      localStorage.setItem('user_password', password)
    },
    SET_TOKEN (state, token) {
      localStorage.setItem('X-Auth-Token', token)
    },
    SET_OAC_EMAIL (state, oacEmail) {
      localStorage.setItem('oac_email', oacEmail)
    },
    SET_COMPANY_CODE (state, code) {
      state.companyCode = code
      localStorage.setItem('company_code', code)
    }
  },
  getters: {
    userName: state => state.userName
  },
  actions: {
    login ({ commit }, data) {
      commit('SET_USER_NAME', data.user_name)
      commit('SET_PASSWORD', data.password)
      commit('SET_OAC_EMAIL', data.oac_email)
      commit('SET_TOKEN', data.user_token)
      commit('SET_COMPANY_CODE', data.company_code)
    },
    logout () {
      localStorage.clear()
    }
  }
}
