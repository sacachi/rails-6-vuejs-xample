/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../src/app.vue'
import { BootstrapVue } from 'bootstrap-vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueApexCharts from "vue-apexcharts"
import locale from 'element-ui/lib/locale/lang/vi'
import 'element-ui/lib/theme-chalk/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './css/app.scss'
import '@fortawesome/fontawesome-free/js/all.js'
import router from '../src/router'
import store from '../src/store'
import SuperAdmin from '../src/layout/SuperAdmin'
import AdminLayout from '../src/layout/Admin'
import UserLayout from '../src/layout/User'
import BlankLayout from '../src/layout/Blank'
import Pagination from '../src/components/Pagination'
import ToggleButton from 'vue-js-toggle-button'
import Message from "../src/components/Message"

Vue.use(ToggleButton)
Vue.use(VueApexCharts)

Vue.use(ElementUI, { locale })

Vue.component('super-admin-layout', SuperAdmin)
Vue.component('admin-layout', AdminLayout)
Vue.component('user-layout', UserLayout)
Vue.component('blank-layout', BlankLayout)
Vue.component('pagination', Pagination)
Vue.component('Message', Message)
Vue.component('apexchart', VueApexCharts)

Vue.use(VueRouter);
Vue.use(BootstrapVue);

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    }).$mount()
})
