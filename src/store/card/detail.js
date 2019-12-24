import myJsonServer from '@/api/my-json-server'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET (store, data) {
      store.data = data
    }
  },
  actions: {
    /**
     * Get card detail data and add it to store
     * @param id {number} Card id
     * @returns Promise<void>
     */
    async get ({ commit }, id) {
      // TODO: try to get from vuex first
      const result = await myJsonServer.makeRequest({
        method: 'GET',
        path: 'cards',
        query: `/${id}`
      })
      if (!result) { return }
      commit('SET', result)
    },
    /**
     *
     * @param {object} card
     */
    async changeInfo ({ commit, dispatch }, card) {
      const result = await myJsonServer.makeRequest({
        method: 'PATCH',
        path: 'cards',
        query: `/${card.id}`,
        data: card
      })
      dispatch('board/detail/changeCardInfo', result, { root: true })
      if (!result) { return false }
      return true
    }
  },
  getters: {
    data: (state) => state.data
  },
  modules: {
  }
}
