import myJsonServer from '@/api/my-json-server'

export default {
  namespaced: true,
  state: {
    data: null
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
    async get ({ dispatch, commit }, id) {
      const data = await dispatch('getFromStore', id)
      const result = data || await myJsonServer.makeRequest({
        method: 'GET',
        path: 'cards',
        query: `/${id}`
      })
      if (!result) { return }
      commit('SET', result)
    },
    /**
     * Get card by id from vuex store
     * @param {number} id  Card id
     * @returns null | object
     */
    getFromStore ({ rootGetters }, id) {
      const cardList = Object.values(rootGetters['board/detail/cardList'])
      let data = null
      for (let i = 0; i < cardList.length; i++) {
        cardList[i].forEach(element => {
          if (Number(element.id) !== Number(id)) { return }
          data = element
        })
      }
      return data
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
