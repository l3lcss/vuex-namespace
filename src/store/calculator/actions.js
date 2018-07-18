import * as mutations from './mutations_types'

export default {
  increment ({commit}, params) {
    console.log('params in calculator/action => increment()')
    console.log(params)
    commit(mutations.setNumberResult, params)
  }
}
