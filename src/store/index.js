import Vue from 'vue'
import Vuex from 'vuex'

import board from '@/store/board'
import card from '@/store/card'

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
    board,
    card
  }
})
