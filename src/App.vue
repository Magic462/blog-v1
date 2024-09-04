<script>
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import IndexMain from '@/components/IndexMain.vue'
import { ElContainer,ElAside,ElHeader,ElMain,ElFooter } from 'element-plus'

export default defineComponent({
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter,
  },
  // setup() {
  //   return {
  //     zIndex: 3000,
  //     size: 'small',
  //   }
  // },
})
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="500px">
          <IndexMain></IndexMain>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

  
<style scoped>
.common-layout{
  width: 100vw;
  height: 100vh;
}
::v-deep(.el-aside) {
  width: 400px;
  height: 1000px;
}
/* .IndexMain {
  width: 100%;
} */
</style>
