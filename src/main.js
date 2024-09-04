import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()//创建Pinia
const app = createApp(App)//创建根实例
app.use(pinia).mount('#app')//插件安装和视图挂载
app.use(router)

