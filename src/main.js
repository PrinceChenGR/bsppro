import Vue from 'vue'
 import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'
import MetaInfo from 'vue-meta-info'
import Login from './view/Login.vue'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

Vue.use(Avue)
Vue.use(ElementUI)
Vue.use(MetaInfo)
Vue.use(Avue,{axios})

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$md5 = md5;

new Vue({
  el:'#app',
  axios,
  router,
  store,

  render: h => h(App),
}).$mount('#app')



axios.defaults.withCredentials = true;

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api'
axios.interceptors.response.use(resp =>{
  return resp;
},error=>{
  alert('服务器异常:'+error.message) 
})
