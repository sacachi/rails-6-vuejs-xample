const state = {
  page: 1,
  per_page: 20,
  total: 0,
  pageSizes: [20, 50, 100, 300, 500]
}
const mutations = {
  SET_TOTAL(state, payload) {
    state.total = payload
  },
  SET_PAGE(state, payload) {
    state.page = payload
  },
  SET_PER_PAGE(state, payload) {
    state.per_page = payload
  },
  RESET_PAGINATION(state) {
    state = { page: 1, per_page: 30, pageSizes: [30, 50, 100, 300, 500], total: 0 }
  }
}
const actions = {}

export default {
  namespaced: true,
  state, mutations, actions
}
