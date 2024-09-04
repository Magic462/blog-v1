import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { createStore } from "vuex"

// 创建新的 store 实例
const store = createStore({
  state: {
   name:'前端人'
  },
  getters: { },
  mutations: { },
  actions: { },
  modules: { }
 })
  
 export default store
 
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
