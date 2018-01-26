import Vue from 'vue'
import Router from 'vue-router'
import DevelopmentPage from '@/components/DevelopmentPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DevelopmentPage',
      component: DevelopmentPage
    }
  ]
})
