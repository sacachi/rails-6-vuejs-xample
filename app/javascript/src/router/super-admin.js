import SuperAdminDashboard from "../pages/super-admins/Dashboard";
import SuperAdminServices from "../pages/super-admins/Services/index";
import SuperAdminBarbers from "../pages/super-admins/barbers/index"
import SuperAdminBookings from '../pages/super-admins/Bookings/index'
import SuperAdminServiceCharges from "../pages/super-admins/service-charge/index"
import SuperAdminLogin from "../pages/super-admins/Login"

const routes = [
  {
    path: '/super_admins/dashboard',
    name: 'SuperAdminDashboard',
    component: SuperAdminDashboard,
    meta: {
      superAdmin: true,
      layout: 'super-admin'
    }
  },
  {
    path: '/super_admins/bookings',
    name: 'SuperAdminBookings',
    component: SuperAdminBookings,
    meta: {
      superAdmin: true,
      layout: 'super-admin'
    }
  },
  {
    path: '/super_admins/services',
    name: 'SuperAdminServices',
    component: SuperAdminServices,
    meta: {
      superAdmin: true,
      layout: 'super-admin'
    }
  },
  {
    path: '/super_admins/barbers',
    name: 'SuperAdminBarbers',
    component: SuperAdminBarbers,
    meta: {
      superAdmin: true,
      layout: 'super-admin'
    }
  },
  {
    path: '/super_admins/service_charges',
    name: 'SuperAdminServiceCharges',
    component: SuperAdminServiceCharges,
    meta: {
      superAdmin: true,
      layout: 'super-admin'
    }
  },
  {
    path: '/super_admins/login',
    name: 'SuperAdminLogin',
    component: SuperAdminLogin,
    meta: {
      layout: 'blank'
    }
  }
]

export default routes
