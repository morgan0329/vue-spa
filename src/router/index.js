import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/store'

import ProductFixedList from '@/pages/ProductFixedList'
import UserInputPhoneNumber from '@/pages/UserInputPhoneNumber'
import UserLogin from '@/pages/UserLogin'
import UserRegister from '@/pages/UserRegister'
import AssetsMine from '@/pages/AssetsMine'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: UserInputPhoneNumber, meta: {requireAuth: false}},
  {path: '/user/inputPhoneNumber', component: UserInputPhoneNumber, meta: {requireAuth: false}},
  {path: '/user/login', component: UserLogin, meta: {requireAuth: false}},
  {path: '/user/register', component: UserRegister, meta: {requireAuth: false}},
  {path: '/assets/mine', component: AssetsMine, meta: {requireAuth: true}},
  {path: '/product/fixedList', component: ProductFixedList, meta: {requireAuth: false}}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('path=' + to.path)
  console.log('params=' + JSON.stringify(to.params))

  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/user/inputPhoneNumber',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
