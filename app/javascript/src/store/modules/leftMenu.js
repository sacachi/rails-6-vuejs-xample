const state ={
  userMenu: [
    {
      index: '2',
      class: 'fa fa-tachometer-alt icon-left-menu-1',
      name: 'DashBoard',
      sub: false,
      componentName: 'UserDashboard'
    },
    {
      index: '3',
      class: 'fa fa-user icon-left-menu-2',
      name: 'Quản lý  tài khoản',
      sub: true,
      sub_menu:[
        {
          name: 'Khách hàng',
          componentName: 'CustomerManager'
        },
        {
          name: 'Lịch trình',
          componentName: 'Schedule'
        }
      ]
    }
  ],
  adminMenu: [
    {
      index: '2',
      class: 'fa fa-tachometer-alt icon-left-menu-1',
      name: 'DashBoard',
      sub: false,
      componentName: 'AdminDashboard'
    },
    {
      index: '3',
      class: 'fa fa-th-list icon-left-menu-2',
      name: 'Quản lý  booking',
      sub: false,
      componentName: 'AdminBookings'
    },
    {
      index: '2',
      class: 'fa fa-database icon-left-menu-1',
      name: 'Dịch vụ',
      sub: false,
      componentName: 'AdminServices'
    },
    {
      index: '5',
      class: 'fa fa-brush icon-left-menu-1',
      name: 'Phí dịch vụ',
      sub: false,
      componentName: 'AdminServiceCharges'
    }
  ],
  superAdminMenu: [
    {
      index: '1',
      class: 'fa fa-tachometer-alt icon-left-menu-1',
      name: 'DashBoard',
      sub: false,
      componentName: 'SuperAdminDashboard'
    },
    {
      index: '2',
      class: 'fa fa-th-list icon-left-menu-1',
      name: 'Danh sách booking',
      sub: false,
      componentName: 'SuperAdminBookings'
    },
    {
      index: '3',
      class: 'fa fa-database icon-left-menu-1',
      name: 'Dịch vụ',
      sub: false,
      componentName: 'SuperAdminServices'
    },
    {
      index: '4',
      class: 'fa fa-users icon-left-menu-1',
      name: 'Thợ hớt tóc',
      sub: false,
      componentName: 'SuperAdminBarbers'
    },
    {
      index: '5',
      class: 'fa fa-brush icon-left-menu-1',
      name: 'Phí dịch vụ',
      sub: false,
      componentName: 'SuperAdminServiceCharges'
    }
  ]
}
const mutations ={

}
const actions ={

}
export default {
  namespaced: true,
  state, mutations, actions
}
