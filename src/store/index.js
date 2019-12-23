import Vue from 'vue'
import Vuex from 'vuex'

import board from '@/store/board'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    board
  }
})
