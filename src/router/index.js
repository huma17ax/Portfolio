import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'

import Main from '@/components/Main'
import About from '@/components/About'
import Works from '@/components/Works'
import Links from '@/components/Links'
import Skills from '@/components/Skills'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Links',
      name: 'Links',
      component: Links
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!from.name) next()
  else if (to.name !== from.name && !store.state.global.isPageTransition) {
    store.commit('global/setPageTransition', true)
    setTimeout(() => {
      next()
    }, 500)
  }
})

router.afterEach(() => {
  store.commit('global/setPageTransition', false)
})

export default router