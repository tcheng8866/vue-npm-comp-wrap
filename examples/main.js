import Vue from 'vue'
import App from './App.vue'

import compWrap from './../packages/index'
Vue.use(compWrap)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
