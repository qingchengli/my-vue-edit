import Vue from 'vue'
import Router from 'vue-router'
import menuNav from '@/components/Common/menuNav'
import commonHeader from '@/components/Common/commonHeader'
import home from '@/components/page/home'
import life from '@/components/page/life'
import love from '@/components/page/love'
import error from '@/components/Common/error'
import login from '@/components/Common/login'
import tank from '@/components/page/tank'
import plane from '@/components/page/plane'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: home,
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: home
      },
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        main: login
      },
      meta: {
        title: '欢迎登录'
      }
    },
    {
      path: '/life',
      name: 'life',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: life
      },
      meta: {
        title: '大学生活'
      }
    },
    {
      path: '/love',
      name: 'love',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: love
      },
      meta: {
        title: '新闻编辑'
      }
    },
    {
      path: '/tank',
      name: 'tank',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: tank
      },
      meta: {
        title: '坦克'
      }
    },
    {
      path: '/plane',
      name: 'plane',
      components: {
        Header: commonHeader,
        menuNav: menuNav,
        main: plane
      },
      meta: {
        title: '战机'
      }
    },
    {
      path: '/404',
      name: 'error',
      components: {
        main: error
      },
      mata: {
        title: '404错误'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

route.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/login') {
    next()
  } else {
    if (sessionStorage.userName) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

export default route
