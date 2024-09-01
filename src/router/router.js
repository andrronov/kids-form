import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      name: 'formPage',
      component: () => import('../pages/formPage.vue')
   },
   {
      path: '/data',
      name: 'dataPage',
      component: () => import('../pages/dataPage.vue')
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

router.beforeEach((to, from) => {
   if(!localStorage.getItem('parentData') && to.path !== '/') return {path: '/'}
   if(localStorage.getItem('parentData') && to.path !== '/data') return {path: '/data'}
})

export default router;