import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAxios from 'vue-axios'
import axios from 'axios'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
