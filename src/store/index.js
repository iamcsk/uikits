import Vue from 'vue'
import Vuex from 'vuex'
import components from './components'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    components
  },
  strict: debug,
  plugins: debug ? [] : []
})
