// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import './element-variables.scss'
import i18n from './i18n/lang'
import store from './vuex'
import './assets/icon/iconfont.js'

/* eslint-disable no-new */
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
