import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/util/veevalidate-i18n' // 有bug
import '@/utils/veevalidate'

import Alert from './components/modules/alert'

Vue.use(Alert)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
