import { ApiCaller } from "../../utils/api"
import { URLS } from "../../utils/url"
import {Message} from "element-ui";

const state = {
  newService: {
    id: '',
    name: '',
    price: ''
  },
  visibleService: false,
  editService: {},
  services: [],
  servicesFront: [],
  serviceIsEdit: false,
  serviceRules: {
    name: [
      { required: true, message: 'Bạn phải nhập tên dịch vụ', trigger: 'blur' },
    ],
    price: [
      { required: true, message: 'Bạn phải nhập giá dịch vụ', trigger: 'blur' },
    ],
  },
}
const mutations = {
 SET_SERVICES(state, payload){
   state.services = payload
 },
  SET_SERVICES_FRONT(state, payload){
    state.servicesFront = payload
  },
 SET_EDIT_SERVICE(state, payload){
   state.editService = payload
 },
 SET_VISIBLE_SERVICE(state, payload){
   state.visibleService = payload
 },
  SET_SERVICE_IS_EDIT(state, payload) {
   state.serviceIsEdit = payload
  }
}
const actions = {
  async createService({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').post(URLS.SERVICES(), {service: payload})
    if (res) {
      Message.success({
        message: res.data.message,
        type: 'success'
      })
      commit('SET_VISIBLE_SERVICE', false)
      dispatch('fetchServices')
    }
  },
  async fetchServices({state, commit}, payload) {
    const res = await ApiCaller(null, 'superAdmin').get(URLS.SERVICES())
    if (res) {
      commit('SET_SERVICES', res.data.services)
    }
  },
  async fetchAdminServices({state, commit}, payload) {
    const res = await ApiCaller(null, 'admin').get(URLS.ADMIN_SERVICES())
    if (res) {
      commit('SET_SERVICES', res.data.services)
    }
  },
  async fetchServicesFront({state, commit}, payload) {
    const res = await ApiCaller().get(URLS.FRONT_SERVICES())
    if (res.data) {
      commit('SET_SERVICES_FRONT', res.data.services)
    }
  },
  async updateService({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').put(URLS.SERVICE(payload.id), {
      service: Object.assign({}, payload)
    })
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        commit('SET_VISIBLE_SERVICE', false)
        dispatch('fetchServices')
      } else {
        Message.error({
          message: res.data.message
        })
      }
    }
  },
  async updateAdminService({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'admin').post(URLS.ADMIN_UPDATE_PRICE_SERVICE(payload.id), {
      service: Object.assign({}, payload)
    })
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        commit('SET_VISIBLE_SERVICE', false)
        dispatch('fetchAdminServices')
      } else {
        Message.error({
          message: res.data.message
        })
      }
    }
  },
  async removeService({ commit, dispatch }, payload) {
    const res = await ApiCaller(null, 'superAdmin').delete(URLS.SERVICE(payload))
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        dispatch('fetchServices')
      } else {
        Message.error({
          message: res.data.message
        })
      }
    }
  },
}

export default {
  namespaced: true,
  state, mutations, actions
}
