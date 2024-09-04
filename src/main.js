import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import store from "./store/index"

const pinia = createPinia()//创建Pinia
const app = createApp(App)//创建根实例
app.use(router).use(store).use(pinia).mount('#app')//插件安装和视图挂载


