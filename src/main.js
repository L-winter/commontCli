import Vue from 'vue'
import App from './App.vue'



import Commjs from './assets/js/common.js'
Vue.use(Commjs);


Vue.config.productionTip = false







new Vue({
  render: h => h(App),
}).$mount('#app')
