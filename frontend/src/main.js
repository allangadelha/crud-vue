import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import LoginComponent from './pages/Login/LoginComponent'
import DashboardComponent from './pages/Dashboard/DashboardComponent'
import AddClientComponent from './pages/AddClient/AddClientComponent'
import VueSession from 'vue-session'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueSession)

const routes = [
  { path: '/', name:'login', component: LoginComponent },
  { path: '/dashboard', name:'dashboard', component: DashboardComponent },
  { path: '/addclient', name:'addclient', component: AddClientComponent }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
