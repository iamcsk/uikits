import * as fieldstypes from './mutations/field-types'
import HTTP from '../adapters/axios'

// initial state
const state = {
  components: undefined,
  buttons: undefined
}

// getters
const getters = {
  components: state => state.components,
  buttons: state => state.buttons
}

// actions
const actions = {
  getComponents ({ commit }, obj) {
    console.log(' getComponents are ', arguments, HTTP, obj.component)
    var component = obj.component.replace('.json', '')
    HTTP.get('uikits/components/' + obj.component).then(response => {
      console.log(' CSK response ', response.data)
      var components = response.data
      commit(fieldstypes.GET_COMPONENTS, { components, component })
    }).catch(e => {
    })
  }
}

// mutations
const mutations = {
  [fieldstypes.GET_COMPONENTS] (state, data, type) {
    console.log(' data on GET_COMPONENTS ', data.components, data.component)
    state.components = data.components
    state[data.component] = data.components
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
