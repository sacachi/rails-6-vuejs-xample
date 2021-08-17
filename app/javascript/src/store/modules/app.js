import Cookies from 'js-cookie'
import {ApiCaller} from "../../utils/api";
import {URLS} from "../../utils/url";

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  messageObject: {
    message: '',
    type: ''
  },
  size: Cookies.get('size') || 'medium',
  isCollapsed: false,
  current_customer: {},
  current_store: {},
  breadCrumbs:'ダッシュボード'
}

const mutations = {
  SET_MESSAGE(state, payload) {
    let object = { message: payload.message, type: payload.type}
    state.messageObject = object
  },
  SET_BREAD_CUMB(state, payload){
    state.breadCrumbs = payload
  },
  SET_IS_COLLAPSED(state, payload){
    state.isCollapsed = payload
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
  SET_CURRENT_CUSTOMER(state, payload) {
    state.current_customer = payload
  },
  SET_CURRENT_STORE(state, payload) {
    state.current_store = payload
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
  async fetchCurrentCustomer({ state, commit }){
    const response = await ApiCaller().get(URLS.CURRENT_CUSTOMER())
    commit('SET_CURRENT_CUSTOMER', response.data)
  },
  async fetchCurrentStore({ state, commit }){
    const response = await ApiCaller(null, true).get(URLS.CURRENT_STORE())
    commit('SET_CURRENT_STORE', response.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
