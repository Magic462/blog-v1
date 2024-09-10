import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '@/views/LayoutPage.vue'
//vite中的环境变量import.meta.env.BASE_URL，就是vite.config.js中的base变量
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: LayoutPage
    },
    {
      path: '/AboutMyself',
      //路由导航的懒加载
      component: ()=>import('@/views/AboutMyself.vue')
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
