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
     * Get board list and add it to store
     * @param query {string}
     * @returns Promise<void>
     */
    async get ({ commit }, query) {
      const result = await myJsonServer.get('boards', query)
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
