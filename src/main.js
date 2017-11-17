// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

/* components */
import Home from './components/Home/home.vue'
import Dew from './components/Dew/dew.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const routes = [
  { path: '/home', component: Home },
  { path: '/dew', component: Dew }
]

const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

