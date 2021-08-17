import { ApiCaller } from "../../utils/api"
import { URLS } from "../../utils/url"

const state = {
  prefectures: [],
  cities: [],
  communes: []
}
const mutations = {
  SET_PREFECTURES(state, payload) {
    state.prefectures = payload
  },
  SET_CITIES(state, payload) {
    state.cities = payload
  },
  SET_COMMUNES(state, payload) {
    state.communes = payload
  }
}
const actions = {
  async fetchPrefectures({state, commit}, payload) {
    const res = await ApiCaller().get(URLS.PREFECTURES())
    if (res) {
      commit('SET_PREFECTURES', res.data)
    }
  },
  async fetchCities({state, commit}, payload) {
    const res = await ApiCaller().get(URLS.PREFECTURE(payload))
    if (res) {
      commit('SET_CITIES', res.data)
    }
  },
  async fetchCommunes({state, commit}, payload) {
    const res = await ApiCaller().get(URLS.CITY(payload))
    if (res) {
      commit('SET_COMMUNES', res.data)
    }
  }
}
export default {
  namespaced: true,
  state, mutations, actions
}
