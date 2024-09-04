<script>
// import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'
export default {
 setup() {
  const store = useStore()
  console.log('store', store.state.name)
 },
}
</script>

<template>
  <el-button type="primary">Primary</el-button>
  <RouterView />
</template>

<style scoped>

</style>