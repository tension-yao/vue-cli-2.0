import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {},
  mutations: {},
  strict: debug,
  plugins: debug ? [ createLogger() ] : []
})

export default store
