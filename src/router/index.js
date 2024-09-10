import { createRouter, createWebHistory } from 'vue-router'
import PagesPart from '../components/PagesPart.vue'
import LayoutPage from '@/views/LayoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: LayoutPage
    },
    {
      path: '/PagesPart',
      name: 'PagesPart',
      component: PagesPart
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
