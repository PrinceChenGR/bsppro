import Vuex from 'vuex'
import Vue from 'vue'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

//plugins:[persistedState({storage: window.sessionStorage})]

const state = {
    LoginType:""

}
const mutations = {
    saveLoginType(state,newVal){
        state.LoginType = newVal
        sessionStorage.getItem('LoginType',newVal)
    }
    
};
const actions = {
    
};
const getters = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})