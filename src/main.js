// import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
// collapse
// import { ElCollapseTransition } from 'element-plus'
// fade/zoom
// import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue'
import router from './router'

import store from "./stores/counter"

const pinia = createPinia()//创建Pinia
const app = createApp(App)//创建根实例
app.use(router).use(store).use(pinia).mount('#app')//插件安装和视图挂载
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.component(ElCollapseTransition.name, ElCollapseTransition)

