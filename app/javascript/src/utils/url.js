export const getBaseUrl = () => {
  return "/api/v1";
};
export const URLS = {
  // app
  UPDATE_BOOKING_STATUS: (id) => `${getBaseUrl()}/front/bookings/${id}/update_status`,
  // super admin
  BARBERS: () => `${getBaseUrl()}/super_admins/barbers`,
  BARBER: (id) => `${getBaseUrl()}/super_admins/barbers/${id}`,
  LOGIN_SUPER_ADMIN: () => `${getBaseUrl()}/super_admins/login`,

  DASHBOARD_BOOKINGS: () => `${getBaseUrl()}/super_admins/dashboards/total_bookings`,
  DASHBOARD_REVENUES: () => `${getBaseUrl()}/super_admins/dashboards/total_revenues`,

  SERVICES: () => `${getBaseUrl()}/super_admins/services`,
  SERVICE: (id) => `${getBaseUrl()}/super_admins/services/${id}`,
  SUPERADMIN_BOOKINGS: () => `${getBaseUrl()}/super_admins/bookings`,
  SUPERADMIN_BOOKING: (id) => `${getBaseUrl()}/super_admins/bookings/${id}`,

  SERVICE_CHARGES: () => `${getBaseUrl()}/super_admins/service_charges`,
  SERVICE_CHARGE: (id) => `${getBaseUrl()}/super_admins/service_charges/${id}`,

  // front
  PREFECTURES: () =>`${getBaseUrl()}/front/prefectures`,
  PREFECTURE: (id) =>`${getBaseUrl()}/front/prefectures/${id}`,
  CITY: (id) =>`${getBaseUrl()}/front/cities/${id}`,
  FRONT_BARBERS: () =>`${getBaseUrl()}/front/barbers`,
  FRONT_BARBER: (id) =>`${getBaseUrl()}/front/barbers/${id}`,
  FRONT_SERVICES: () =>`${getBaseUrl()}/front/services`,
  BOOKING_FRONT: () =>`${getBaseUrl()}/front/bookings`,
  PREFECTURE_BARBERS: (id) =>`${getBaseUrl()}/front/prefectures/${id}/barbers`,
  CITY_BARBERS: (id) =>`${getBaseUrl()}/front/cities/${id}/barbers`,
  FRONT_SERVICE_CHARGES: () => `${getBaseUrl()}/front/service_charges/`,
  //admin
  CREATE_ADMIN: () => `${getBaseUrl()}/admins/signup`,
  LOGIN_ADMIN: () => `${getBaseUrl()}/admins/login`,
  ADMIN_BOOKINGS: () => `${getBaseUrl()}/admins/bookings`,
  ADMIN_DASHBOARD_BOOKINGS: () => `${getBaseUrl()}/admins/dashboards/total_bookings`,
  ADMIN_DASHBOARD_REVENUES: () => `${getBaseUrl()}/admins/dashboards/total_revenues`,
  ADMIN_SERVICES: () => `${getBaseUrl()}/admins/services`,
  ADMIN_UPDATE_PRICE_SERVICE: (id) => `${getBaseUrl()}/admins/services/${id}/update_price`,

  //user
  CREATE_USER: () => `${getBaseUrl()}/users/signup`,
  LOGIN_USER: () => `${getBaseUrl()}/users/login`,
};
