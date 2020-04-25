import Vue from 'vue'
import App from './App.vue'

/* // 导入组件库
import compWrap from './../packages/index'
// 注册组件库
Vue.use(compWrap) */

import wInput from './../packages/index'
Vue.use(wInput)
import wButton from './../packages/index'
Vue.use(wButton)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
