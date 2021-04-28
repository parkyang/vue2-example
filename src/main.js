/* App Enter
 * @Descripttion: App Enter
 * @version: 0.0.0.1
 * @Author: yangming
 * @Date: 2021-04-28 11:20:16
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 12:19:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultLayout from '@/layout/Default.vue'
import EmptyLayout from '@/layout/Empty.vue'

import '@/style/common.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.component('DefaultLayout', DefaultLayout)
Vue.component('EmptyLayout', EmptyLayout)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
