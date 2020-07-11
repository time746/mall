import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//插件
import VueLazyload from "vue-lazyload"
import Toast from "components/common/toast"
Vue.use(Toast)
Vue.use(VueLazyload, {
  loading: require("assets/img/common/placeholder.png"),
  error: require("assets/img/common/placeholder.png")
})


//
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
