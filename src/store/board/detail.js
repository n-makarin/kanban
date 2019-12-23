import myJsonServer from '@/api/my-json-server'

export default {
  namespaced: true,
  state: {
    cardList: []
  },
  mutations: {
    SET (store, { cardList, boardId }) {
      const localCardList = store.cardList
      localCardList[boardId] = cardList
      store.cardList = localCardList
    }
  },
  actions: {
    /**
     * Get card list by boardId and add to store
     * @param boardId {number}
     * @returns Promise<void>
     */
    async getCardList ({ commit }, boardId) {
      const result = await myJsonServer.get('cards', `?board_id=${boardId}`)
      if (!result) { return }
      commit('SET', { cardList: result, boardId })
    }
  },
  getters: {
    cardList: (state) => state.cardList
  },
  modules: {
  }
}
