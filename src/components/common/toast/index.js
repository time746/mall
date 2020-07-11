import Toast from "./Toast.vue"


export default {
  install: function(Vue) {
    let toastConstructor = Vue.extend(Toast)
    let toast = new toastConstructor
    toast.$mount(document.createElement("div"))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast

  }
}