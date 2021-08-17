import AdminDashboard from '../pages/admins/Dashboard'
import AdminBookings from '../pages/admins/Bookings/index'
import AdminServices from '../pages/admins/Services/index'
import AdminServiceCharges from '../pages/admins/ServiceCharges/index'
import AdminLogin from '../pages/admins/Login'
import AdminSignUp from '../pages/admins/SignUp'

const routes = [
  {
    path: '/admins/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      layout: 'admin',
      admin: true,
    }
  },
  {
    path: '/admins/bookings',
    name: 'AdminBookings',
    component: AdminBookings,
    meta: {
      layout: 'admin',
      admin: true,
    }
  },
  {
    path: '/admins/services',
    name: 'AdminServices',
    component: AdminServices,
    meta: {
      layout: 'admin',
      admin: true
    }
  },
  {
    path: '/admins/service_charges',
    name: 'AdminServiceCharges',
    component: AdminServiceCharges,
    meta: {
      layout: 'admin',
      admin: true,
    }
  },
  {
    path: '/admins/sign_up',
    name: 'AdminSignUp',
    component: AdminSignUp,
    meta: {
      layout: 'blank'
    }
  },
  {
    path: '/admins/login',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: {
      layout: 'blank'
    }
  }
]

export default routes
