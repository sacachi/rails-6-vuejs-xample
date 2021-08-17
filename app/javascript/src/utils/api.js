import Cookies from 'js-cookie'
import axios from 'axios'
import store from '../store'
import { JWT_ADMIN_KEY, JWT_USER_KEY, JWT_SUPER_ADMIN_KEY } from "./constant";
import {Message} from "element-ui";

//customHeader is user for upload image
export const ApiCaller = (customHeader = null, requestType = false) => {
  let token = ''
  if (requestType === 'superAdmin') {
     token = localStorage.getItem(JWT_SUPER_ADMIN_KEY)
  } else if(requestType === 'admin') {
    token = localStorage.getItem(JWT_ADMIN_KEY)
  } else {
    token = localStorage.getItem(JWT_USER_KEY)
  }
  const header = {
    'Authorization': `Bearer ${ token }`,
  }
  const instance = axios.create({
    headers: Object.assign(customHeader || {}, header),
    timeout: 10000
  })
  instance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    let errorMessage = error.toString()
    if (error.response) {
      if (error.response.data.message) {
        errorMessage = error.response.data.message
      }
      if (error.response.status === 401) {
        localStorage.clear()
        setTimeout(() => {
          window.location.href = '/admins/login'
        }, 2000)
      }
    }
    return Promise.reject(error)
  })
  return instance
}
