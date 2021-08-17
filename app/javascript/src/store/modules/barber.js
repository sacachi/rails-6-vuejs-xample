import { ApiCaller } from "../../utils/api"
import { URLS } from "../../utils/url"
import {Message} from "element-ui";

const state = {
  newBarber: {
    id: '',
    address: '',
    admin: {
      email: '',
      id: ''
    },
    birth_day: '',
    gender: '',
    name: '',
    phone: '',
    city_id: '',
    commune_id: '',
    prefecture_id: ''
  },
  visibleModalTablePrice: false,
  visibleBarber: false,
  editBarber: {},
  barbers: [],
  barbersFront: [],
  barberIsEdit: false,
  barberRules: {
    admin: {
      email: [
        { required: true, message: 'Email không được để trống', trigger: 'blur' },
      ]
    },
    name: [
      { required: true, message: 'Tên không được để trống', trigger: 'blur' },
    ],
    phone: [
      { required: true, message: 'Số điện thoại không được để trống ', trigger: 'blur' },
    ],
  },
}
const mutations = {
  SET_VISIBLE_MODAL_TABLE_PRICE(state, payload){
    state.visibleModalTablePrice = payload
  },
  SET_BARBERS(state, payload){
    state.barbers = payload
  },
  SET_BARBERS_FRONT(state, payload){
    state.barbersFront = payload
  },
  SET_EDIT_BARBER(state, payload){
    state.editBarber = payload
  },
  SET_VISIBLE_BARBER(state, payload){
    state.visibleBarber = payload
  },
  SET_BARBER_IS_EDIT(state, payload) {
    state.barberIsEdit = payload
  }
}
const actions = {
  async createBarber({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').post(URLS.BARBERS(), {
      barber: Object.assign({}, payload, {
        admin_attributes: Object.assign({}, payload.admin)
      })
    })
    if (res) {
      Message.success({
        message: res.data.message,
        type: 'success'
      })
      commit('SET_VISIBLE_BARBER', false)
      dispatch('fetchBarbers')
    }
  },
  async showBarber({state, commit}, payload){
    const res = await ApiCaller().get(URLS.FRONT_BARBER(payload))
    if (res.data){
      commit('SET_EDIT_BARBER', res.data.barber)
      commit('service/SET_SERVICES_FRONT', res.data.barber.services, {root: true})
      commit('booking/SET_INFO_BOOKING', res.data.barber, {root: true})
    }
  },
  async fetchBarbers({state, commit, rootState}, payload) {
    const res = await ApiCaller(null, 'superAdmin').get(URLS.BARBERS(), { params: {
      page: rootState.page.page, per_page: rootState.page.per_page
    }})
    if (res) {
      commit('SET_BARBERS', res.data.barbers)
    }
  },
  async fetchBarbersFront({state, commit}, payload){
    const res = await ApiCaller().get(URLS.FRONT_BARBERS())
    if (res.data) {
      commit('SET_BARBERS_FRONT', res.data.barbers)
      commit('SET_BARBERS', res.data.barbers)
    }
  },
  async updateBarber({state, commit, dispatch}, payload) {
    const res = await ApiCaller(null, 'superAdmin').put(URLS.BARBER(payload.id), {
      barber: Object.assign({}, payload, {
        admin_attributes: Object.assign({}, payload.admin)
      }),
    })
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        commit('SET_VISIBLE_BARBER', false)
        dispatch('fetchBarbers')
      } else {
        Message.error({
          message: res.data.message
        })
      }
    }
  },
  async removeBarber({ commit, dispatch }, payload) {
    const res = await ApiCaller(null, 'superAdmin').delete(URLS.BARBER(payload))
    if (res) {
      if (res.data.status != 'false') {
        Message.success({
          message: res.data.message
        })
        dispatch('fetchBarbers')
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
