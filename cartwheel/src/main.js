// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import less from 'less'
Vue.use(less)

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$axios=axios.create({
  baseURL:'https://baojia.chelun.com'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  less,
  components: { App },
  template: '<App/>'
})
