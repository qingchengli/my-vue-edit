import Vue from 'vue'
import Router from 'vue-router'
import menuNav from '@/components/Common/menuNav'
import commonHeader from '@/components/Common/commonHeader'
import home from '@/components/page/home'
import love from '@/components/page/love'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: home
      }
    },
    {
      path: '/love',
      name: 'love',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: love
      }
    }
  ]
})
