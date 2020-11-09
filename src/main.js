// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import mock from './mock'

import './lib/js/rem'
import './assets/css/reset.css'
import './lib/css/common.css'
import './lib/css/variabel.css'

mock && mock.init()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
