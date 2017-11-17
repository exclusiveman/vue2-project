import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import Dew from '@/components/Dew/dew.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dew',
      name: 'Dew',
      component: Dew
    }

  ]
})
