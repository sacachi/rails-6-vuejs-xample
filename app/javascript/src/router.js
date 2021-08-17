
import Vue from 'vue'
import VueRouter from 'vue-router'
import SuperAdminRouters from './router/super-admin'
import AdminRouters from './router/admin'
import UserRouters from './router/user'
import FrontRouters from './router/front'

let all_routes = []
all_routes = SuperAdminRouters.concat(AdminRouters, UserRouters, FrontRouters)

const routes = all_routes
import {
  JWT_ADMIN_KEY,
  JWT_SUPER_ADMIN_KEY,
} from "./utils/constant"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.admin))
  if (to.matched.some(record => record.meta.admin)) {
    if (localStorage.getItem(JWT_ADMIN_KEY) == null) {
      router.push({name: 'AdminLogin'})
    }
  }
  if (to.matched.some(record => record.meta.superAdmin)){
    if (localStorage.getItem(JWT_SUPER_ADMIN_KEY) == null) {
      router.push({name: 'SuperAdminLogin'})
    }
  }
  next()
})

export default router
