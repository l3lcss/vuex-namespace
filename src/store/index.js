import Vue from 'vue'
import Vuex from 'vuex'
import calculatorModule from './calculator'

Vue.use(Vuex)

const modules = {
  calculator:calculatorModule
}

export default new Vuex.Store({
  modules
})
