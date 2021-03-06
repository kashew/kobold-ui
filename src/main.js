// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import App from './App'
import router from './router'
import GSignInButton from 'vue-google-signin-button'
import store from './store/index'
import Auth from './plugins/auth'
import MockData from './mockData'

Vue.use(GSignInButton)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Auth)

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') {
  Vue.use(VueResourceMock, MockData)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
