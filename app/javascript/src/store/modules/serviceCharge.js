import {ApiCaller} from "../../utils/api";
import {URLS} from "../../utils/url";
import {Message} from "element-ui";

const state = {
  frontServiceCharges: [],
  visibleServiceCharge: false,
  editServiceCharge: {},
  serviceCharges: [],
  serviceChargeIsEdit: false,
  serviceChargeRules: {
    name: [
      { required: true, message: 'Tên không được để trống', trigger: 'blur' },
    ],
    price: [
      { required: true, message: 'Giá không được để trống', trigger: 'blur' },
    ],
  },
}
const mutations = {
  GET_FRONT_SERVICE_CHARGES(state, payload) {
    state.frontServiceCharges = payload
  },
  SET_SERVICE_CHARGES(state, payload){
    state.serviceCharges = payload
  },
  SET_EDIT_SERVICE_CHARGE(state, payload){
    state.editServiceCharge = payload
  },
  SET_VISIBLE_SERVICE_CHARGE(state, payload){
    state.visibleServiceCharge = payload
  },
  SET_SERVICE_CHARGE_IS_EDIT(state, payload) {
    state.serviceChargeIsEdit = payload
  }
}
const actions = {
  async fetchFrontServiceCharges({state, commit}, payload) {
    const res = await ApiCaller().get(URLS.FRONT_SERVICE_CHARGES())
    if (res) {
      commit('GET_FRONT_SERVICE_CHARGES', res.data)
    }
  },
  async fetchServiceCharges({state, commit}, payload) {
    const res = await ApiCaller(null, 'superAdmin').get(URLS.SERVICE_CHARGES())
    if (res) {
      commit('SET_SERVICE_CHARGES', res.data.service_charges)
    }
  },
  async createServiceCharge({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').post(URLS.SERVICE_CHARGES(), {service_charge: payload})
    if (res) {
      Message.success({
        message: res.data.message,
        type: 'success'
      })
      commit('SET_VISIBLE_SERVICE_CHARGE', false)
      dispatch('fetchServiceCharges')
    }
  },
  async updateServiceCharge({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').put(URLS.SERVICE_CHARGE(payload.id), {
      service_charge: Object.assign({}, payload)
    })
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        commit('SET_VISIBLE_SERVICE_CHARGE', false)
        dispatch('fetchServiceCharges')
      } else {
        Message.error({
          message: res.data.message
        })
      }
    }
  },
  async removeServiceCharge({ commit, dispatch }, payload) {
    const res = await ApiCaller(null, 'superAdmin').delete(URLS.SERVICE_CHARGE(payload))
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        dispatch('fetchServiceCharges')
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
