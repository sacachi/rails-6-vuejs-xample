import {ApiCaller} from "../../utils/api";
import {URLS} from "../../utils/url";
import { Message } from 'element-ui'
import router from '../../router'
import {JWT_ADMIN_KEY, JWT_SUPER_ADMIN_KEY} from '../../utils/constant'

const state = {
  editAdmin: {
    email: '',
    barber: {
      name: '',

    }
  }
}
const mutations = {
 SET_EDIT_ADMIN(state, payload){
   state.editAdmin = payload
 }
}
const actions = {
  async createAdmin({state, commit}, payload){
    const res = await ApiCaller().post(URLS.CREATE_ADMIN(), { admin: Object.assign( payload, {barber_attributes: Object.assign({}, payload.barber)})})
    if(res.data.status == 'ok'){
      localStorage.setItem(JWT_ADMIN_KEY, res.data.token);
      router.push({ name: "AdminDashboard" })
      Message.success({
        message: res.data.message,
        type: 'success'
      })
    } else {
      Message.error({
        message: res.data.message,
        type: 'error'
      })
    }
  },
  async loginAdmin({state, commit}, payload){
    const res = await ApiCaller().post(URLS.LOGIN_ADMIN(), {admin: payload})
    if (res.data.status == 'ok') {
      localStorage.setItem(JWT_ADMIN_KEY, res.data.token);
      router.push({ name: "AdminDashboard" })
      Message.success({
        message: res.data.message,
        type: 'success'
      })
    } else {
      Message.error({
        message: res.data.message,
        type: 'error'
      })
    }
  },
  async loginSuperAdmin({state, commit}, payload){
    const res = await ApiCaller().post(URLS.LOGIN_SUPER_ADMIN(), {super_admin: payload})
    if (res.data.status == 'ok') {
      localStorage.setItem(JWT_SUPER_ADMIN_KEY, res.data.token);
      router.push({ name: "SuperAdminDashboard" })
      Message.success({
        message: res.data.message,
        type: 'success'
      })
    } else {
      Message.error({
        message: res.data.message,
        type: 'error'
      })
    }
  }
}
export default {
  namespaced: true,
  state, mutations, actions
}
