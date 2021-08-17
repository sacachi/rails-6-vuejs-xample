import {ApiCaller} from "../../utils/api";
import {URLS} from "../../utils/url";
import { Message } from 'element-ui'
import router from '../../router'
import {JWT_USER_KEY} from '../../utils/constant'

const state = {
  editUser:{}
}
const mutations = {
 SET_EDIT_USER(state, payload){
   state.editUser = payload
 }
}
const actions = {
  async createUser({state, commit}, payload){
    const res = await ApiCaller().post(URLS.CREATE_USER(), {user: payload})
    if(res.data.status == 'ok'){
      localStorage.setItem(JWT_USER_KEY, res.data.token);
      router.push({ name: "UserDashboard" })
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
  async loginUser({state, commit}, payload){
    const res = await ApiCaller().post(URLS.LOGIN_USER(), {user: payload})
    if (res.data.status == 'ok') {
      localStorage.setItem(JWT_USER_KEY, res.data.token);
      router.push({ name: "UserDashboard" })
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