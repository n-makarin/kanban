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
    },
    CHANE_CARD_INFO (store, card) {
      const localCardList = Object.assign({}, store.cardList)
      const boardOfCard = localCardList[card.board_id]
      for (let i = 0; i < boardOfCard.length; i++) {
        if (boardOfCard[i].id !== card.id) { continue }
        boardOfCard[i] = card
      }
      localCardList[card.board_id] = boardOfCard
      store.cardList = localCardList
    },
    ADD_CARD (store, card) {
      const localCardList = Object.assign({}, store.cardList)
      const boardOfCard = localCardList[card.board_id]
      boardOfCard.push(card)
      localCardList[card.board_id] = boardOfCard
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
      const result = await myJsonServer.makeRequest({
        method: 'GET',
        path: 'cards',
        query: `?board_id=${boardId}`
      })
      if (!result) { return }
      commit('SET', { cardList: result, boardId })
    },
    changeCardInfo ({ commit }, card) {
      commit('CHANE_CARD_INFO', card)
    },
    addCard ({ commit }, card) {
      commit('ADD_CARD', card)
    }
  },
  getters: {
    cardList: (state) => state.cardList
  },
  modules: {
  }
}
