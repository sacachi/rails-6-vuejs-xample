import UserLogin from '../pages/users/Login'
import UserSignUp from '../pages/users/SignUp'
import UserDashboard from '../pages/users/Dashboard'
import Home from '../pages/home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/users/login',
    name: 'UserLogin',
    component: UserLogin,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/users/sign_up',
    name: 'UserSignUp',
    component: UserSignUp,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/users/dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    meta: {
      layout: 'user',
      UserLogin: true
    }
  }
]

export default routes
