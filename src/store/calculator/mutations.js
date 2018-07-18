import * as mutations from './mutations_types'

export default {
  [mutations.setNumberResult] (state, params) {
    console.log('params in calculator/mutations => [mutations.setNumberResult]')
    console.log(params)
    state.numberResult += params
  }
}
