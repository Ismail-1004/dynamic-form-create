import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { layout: 'empty' },
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/create',
      name: 'create',
      meta: { layout: 'main' },
      component: () => import('../views/FormCreate.vue')
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      meta: { layout: 'main' },
      component: () => import('../views/FormEdit.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
