import Vue from 'vue'
import App from './App'
import router from './router'
import xstui from './components/index'
import './assets/less/common.css'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(xstui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
