import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'

// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   routes: routers
// })

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

// let router = new VueRouter()
// routeConfig(router);
// router.start(App, '#app');
