import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css';
import 'mavon-editor/dist/css/index.css'
import "./axios"
import "./permit"
Vue.use(ElementUI)
// 编辑器的引入
Vue.use(mavonEditor)

Vue.config.productionTip = false
// 引入axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
