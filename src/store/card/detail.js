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
      const result = await myJsonServer.get('cards', `/${id}`)
      if (!result) { return }
      commit('SET', result)
    }
  },
  getters: {
    data: (state) => state.data
  },
  modules: {
  }
}
