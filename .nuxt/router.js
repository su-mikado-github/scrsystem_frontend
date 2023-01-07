import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _68881e90 = () => interopDefault(import('../pages/abort.vue' /* webpackChunkName: "pages/abort" */))
const _1cb819e6 = () => interopDefault(import('../pages/checkin.vue' /* webpackChunkName: "pages/checkin" */))
const _35d88e44 = () => interopDefault(import('../pages/dish_menu.vue' /* webpackChunkName: "pages/dish_menu" */))
const _3f618f8b = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _41aa501c = () => interopDefault(import('../pages/reserve.vue' /* webpackChunkName: "pages/reserve" */))
const _6530ac3a = () => interopDefault(import('../pages/reserve_change.vue' /* webpackChunkName: "pages/reserve_change" */))
const _e542f99c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/abort",
    component: _68881e90,
    name: "abort"
  }, {
    path: "/checkin",
    component: _1cb819e6,
    name: "checkin"
  }, {
    path: "/dish_menu",
    component: _35d88e44,
    name: "dish_menu"
  }, {
    path: "/mypage",
    component: _3f618f8b,
    name: "mypage"
  }, {
    path: "/reserve",
    component: _41aa501c,
    name: "reserve"
  }, {
    path: "/reserve_change",
    component: _6530ac3a,
    name: "reserve_change"
  }, {
    path: "/",
    component: _e542f99c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
