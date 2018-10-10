import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import vueRouter from 'vue-router'
import 'vuetify/dist/vuetify.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Routes123 from './routes'

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(vueRouter)

const router1 = new vueRouter({
  routes : Routes123,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router1
})


