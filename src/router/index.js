import { createRouter, createWebHistory } from 'vue-router'
// import LayoutPage from '@/views/LayoutPage.vue'
//vite中的环境变量import.meta.env.BASE_URL，就是vite.config.js中的base变量
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: ()=>import('@/views/LayoutPage.vue'),
      redirect:'/MainPart',
      children:[
        {
          path:'/AboutMyself',
          component: ()=>import('@/views/AboutMyself.vue')
        },
        {
          path:'/SettingPart',
          component: ()=>import('@/views/SettingPart.vue')
        },
        {
          path:'/pages/notes/StudyNotes',
          component: ()=>import('@/views/pages/notes/StudyNotes.vue')
        },
        {
          path:'/pages/Algorithm/LeetCode',
          component: ()=>import('@/views//pages/Algorithm/LeetCode.vue')
        },
        {
          path:'/MainPart',
          component: ()=>import('@/views/MainPart.vue')
        },
      ]
    },
    // {
    //   path: '/AboutMyself',
    //   //路由导航的懒加载
    //   component: ()=>import('@/views/AboutMyself.vue')
    // },
  ]
})

export default router
