import Vue from 'vue'

import { apiGetUserInfo } from '~/api/api-demo'

// Learn more on https://nuxtjs.org/guide/vuex-store

// =================================================
// State
// =================================================
export const state = () => ({
  token: '',
  userInfo: {}
})

// =================================================
// Mutations
// =================================================
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  },
}
// =================================================
// Actions
// =================================================
export const actions = {
  FETCH_USER_INFO({ state, commit }, {}) {
    apiGetUserInfo(this.$axios, { token: state.token }).then(res => {
      commit('SET_USER_INFO', res.data)
    })
  }
}
