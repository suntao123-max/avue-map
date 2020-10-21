import Vue from 'vue'
import Router from 'vue-router'
import Avue from '@/components/Avue'
import AvuePie from '@/components/AvuePie'
import AvueMap from '@/components/AvueMap'
import AvueCircle from '@/components/AvueCircle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Avue',
      component: Avue
    },
    {
      path: '/pie',
      name: 'AvuePie',
      component: AvuePie
    },
    {
      path: '/map',
      name: 'AvueMap',
      component: AvueMap
    },
    {
      path: '/circle',
      name: 'AvueCircle',
      component: AvueCircle
    },
  ]
})
