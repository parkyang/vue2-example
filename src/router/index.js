/* Vue-Router
 * @Descripttion: Vue-Router
 * @version: 0.0.0.1
 * @Author: yangming
 * @Date: 2021-04-28 11:20:16
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 11:46:15
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'Empty',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  // 登录状态判断
  // if (!router.app.$options.store.state.user && to.name !== 'Login') {
  //   next('/login')
  // }
  next()
})

export default router
