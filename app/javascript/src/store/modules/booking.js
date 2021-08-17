import {ApiCaller} from "../../utils/api";
import { URLS } from '../../utils/url'
import {Message} from "element-ui";

const state ={
  bookings: [],
  visibleBooking: false,
  editBooking: {customer: {}, service_ids: [], prefecture_id: '', city_id: '', commune_id:'', barber_id:'',
    detail: {
      service_charges: [],
      services: [],
      total: 0
    }
  },
  visibleModalBooking: false,
  bookingIsEdit: false,
  bookingRules: {
    customer: {
      name: [
        { required: true, message: 'Tên không được để trống', trigger: 'blur' },
      ],
      phone: [
        { required: true, message: 'Số điện thoại không được để trống ', trigger: 'blur' },
      ],
      address: [
        { required: true, message: 'Địa chỉ không được để trống ', trigger: 'blur' },
      ]
    }
  },
}
const mutations = {
  SET_INFO_BOOKING(state, payload){
    state.editBooking.prefecture_id = payload.prefecture_id
    state.editBooking.city_id = payload.city_id
    state.editBooking.commune_id = payload.commune_id
    state.editBooking.barber_id = payload.id
  },
 SET_EDIT_BOOKING(state, payload){
   state.editBooking = payload
 },
  SET_VISIBLE_MODAL_BOOKING(state, payload){
   state.visibleModalBooking = payload
  },
  SET_BOOKING_IS_EDIT(state, payload){
   state.bookingIsEdit = payload
  },
  SET_BOOKINGS(state, payload) {
   state.bookings = payload
  },
  SET_EDIT_DETAILS_BOOKING(state, payload){
    state.editBooking.detail = payload
  },
  SET_DETAIL_TOTAL(state, payload) {
    state.editBooking.detail.total = payload
  }
}
const actions = {
  async fetchPrefectureBarbers({commit}, payload){
    const res = await ApiCaller().get(URLS.PREFECTURE_BARBERS(payload))
    if (res){
      commit('barber/SET_BARBERS', res.data.barbers, {root: true})
    }
  },
  async fetchBookings({ commit, rootState }, payload = '') {
    const res = await ApiCaller(null, 'superAdmin').get(URLS.SUPERADMIN_BOOKINGS(), { params: {
      page: rootState.page.page, per_page: rootState.page.per_page, status: payload
    }})
    if(res) {
      commit('SET_BOOKINGS', res.data.bookings)
      commit('page/SET_TOTAL', res.data.total, {root: true})
    }
  },
  async fetchAdminBookings({ commit, rootState }, payload = '') {
    const res = await ApiCaller(null, 'admin').get(URLS.ADMIN_BOOKINGS(), { params: {
      page: rootState.page.page, per_page: rootState.page.per_page, status: payload
    }})
    if(res) {
      commit('SET_BOOKINGS', res.data.bookings)
      commit('page/SET_TOTAL', res.data.total, {root: true})
    }
  },
  async updateBookingStatus({ commit }, payload) {
    const res = await ApiCaller().post(URLS.UPDATE_BOOKING_STATUS(payload.id), {
      status: payload.status
    })
    if (res.data.status == 'oke') {
      Message.success(res.data.message)
    }
  },
  async fetchCityBarbers({commit}, payload){
    const res = await ApiCaller().get(URLS.CITY_BARBERS(payload))
    if (res){
      commit('barber/SET_BARBERS', res.data.barbers, {root: true})
    }
  },
  async createBooking({ state, commit }, payload){
    const res = await ApiCaller().post(URLS.BOOKING_FRONT(), {
      booking: Object.assign({},
        {barber_id: payload.barber_id},
        {customer_attributes: payload.customer},
        {service_ids: payload.service_ids},
        {detail: payload.detail}
        )
    })
    if (res.data.status == 'ok'){
      Message.success({
        message: res.data.message,
        type: 'success'
      })
      commit('SET_VISIBLE_MODAL_BOOKING', false)
    } else{
      Message.error({
        message: res.data.message,
      })
    }
  }
}
export default {
  namespaced: true,
  state, mutations, actions
}
