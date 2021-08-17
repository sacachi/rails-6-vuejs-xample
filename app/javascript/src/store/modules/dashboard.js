import {ApiCaller} from "../../utils/api";
import {URLS} from "../../utils/url";

const state = {
  totalNew: 0,
  totalCompleted: 0,
  totalCancel: 0,
  totalRevenues: 0,
  chartDataBookingsNew: [],
  chartDataBookingsCompleted: [],
  chartDataBookingsCanceld: [],
  chartDataRevenues: [],
  dataChart: [1,2,3]
}
const mutations = {
  SET_DATA_CHART(state, payload){
    state.dataChart = payload
  },
  SET_TOTAL_NEW(state, payload){
    state.totalNew = payload
  },
  SET_TOTAL_COMPLETED(state, payload){
    state.totalCompleted = payload
  },
  SET_TOTAL_CANCELD(state, payload){
    state.totalCancel = payload
  },
  SET_DATA_CHART_BOOKINGS_NEW(state, payload){
    state.chartDataBookingsNew = payload
  },
  SET_DATA_CHART_BOOKINGS_COMPLETED(state, payload){
    state.chartDataBookingsCompleted = payload
  },
  SET_DATA_CHART_BOOKINGS_CANCELD(state, payload){
    state.chartDataBookingsCanceld = payload
  },
  SET_TOTAL_REVENUES(state, payload){
    state.totalRevenues = payload
  },
  SET_DASHBOARD_BOOKINGS(state, payload){
    state.dasboardBookings = payload
  },
  SET_CHART_REVENUES(state, payload){
    state.chartDataRevenues = payload
  }
}
const actions = {
  async fetchAdminBookings({state, commit}){
    const res = await ApiCaller(null, 'admin').get(URLS.ADMIN_DASHBOARD_BOOKINGS())
    let bookings_new = Object.values(res.data.bookings_new)
    let bookings_completed = Object.values(res.data.bookings_completed)
    let bookings_canceled = Object.values(res.data.bookings_canceled)

    if(res.data){
      commit('SET_DASHBOARD_BOOKINGS', res.data)
      commit('SET_DATA_CHART_BOOKINGS_NEW', bookings_new)
      commit('SET_DATA_CHART_BOOKINGS_COMPLETED', bookings_completed)
      commit('SET_DATA_CHART_BOOKINGS_CANCELD', bookings_canceled)
      commit('SET_TOTAL_NEW', bookings_new.reduce((a, b) => a + b, 0))
      commit('SET_TOTAL_COMPLETED', bookings_completed.reduce((a, b) => a + b, 0))
      commit('SET_TOTAL_CANCELD', bookings_canceled.reduce((a, b) => a + b, 0))
    }
  },
  async fetchAdminRevenues({state, commit}){
    const res = await ApiCaller(null, 'admin').get(URLS.ADMIN_DASHBOARD_REVENUES())
    let chart_revenues = Object.values(res.data.revenues)
    if(res.data){
      commit('SET_TOTAL_REVENUES', chart_revenues.reduce((a, b) => a + b, 0))
      commit('SET_CHART_REVENUES', chart_revenues)
      commit('SET_DATA_CHART', chart_revenues)

    }
  },
  async fetchSuperAdminBookings({state, commit}){
    const res = await ApiCaller(null, 'superAdmin').get(URLS.DASHBOARD_BOOKINGS())
    let bookings_new = Object.values(res.data.bookings_new)
    let bookings_completed = Object.values(res.data.bookings_completed)
    let bookings_canceled = Object.values(res.data.bookings_canceled)

    if(res.data){
      commit('SET_DASHBOARD_BOOKINGS', res.data)
      commit('SET_DATA_CHART_BOOKINGS_NEW', bookings_new)
      commit('SET_DATA_CHART_BOOKINGS_COMPLETED', bookings_completed)
      commit('SET_DATA_CHART_BOOKINGS_CANCELD', bookings_canceled)
      commit('SET_TOTAL_NEW', bookings_new.reduce((a, b) => a + b, 0))
      commit('SET_TOTAL_COMPLETED', bookings_completed.reduce((a, b) => a + b, 0))
      commit('SET_TOTAL_CANCELD', bookings_canceled.reduce((a, b) => a + b, 0))
    }
  },
  async fetchSuperAdminRevenues({state, commit}){
    const res = await ApiCaller(null, 'superAdmin').get(URLS.DASHBOARD_REVENUES())
    let chart_revenues = Object.values(res.data.revenues)
    if(res.data){
      commit('SET_TOTAL_REVENUES', chart_revenues.reduce((a, b) => a + b, 0))
      commit('SET_CHART_REVENUES', chart_revenues)
      commit('SET_DATA_CHART', chart_revenues)

    }
  }
}
export default {
  namespaced: true,
  state, mutations, actions
}
