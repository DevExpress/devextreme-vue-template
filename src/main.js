import Vue from 'vue'

import 'devextreme/dist/css/dx.common.css'
import './themes/generated/theme.base.css'
import './themes/generated/theme.additional.css'

import App from './App'
import router from './router'
import appInfo from './app-info'

Vue.config.productionTip = false
Vue.prototype.$appInfo = appInfo

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
