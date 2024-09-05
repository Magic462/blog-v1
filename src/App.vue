<script>
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import AsidePart from '@/components/AsidePart.vue'
import MainPages from '@/components/MainPages.vue'
import HeaderPart from '@/components/HeaderPart.vue'
import { ElContainer,ElAside,ElHeader,ElMain,ElFooter } from 'element-plus'

export default defineComponent({
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter,
    AsidePart,
    MainPages,
    HeaderPart
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
  <el-container class="common-layout">  
    <el-header><HeaderPart></HeaderPart></el-header>  
    <el-container>  
      <el-aside>  
        <!-- 侧边栏内容，这里可以是 AsidePart 组件或其他内容 -->  
        <AsidePart></AsidePart>  
      </el-aside>  
      <el-main>  
        <!-- 主内容区 -->  
       <MainPages></MainPages> 
      </el-main>  
    </el-container>  
    <el-footer>Footer</el-footer>  
  </el-container>  
</template> 
  
<style scoped>
.common-layout{
  width: 100vw;
  height: 100%;
}
::v-deep(.el-aside) {
  width: 32%;
  height: 100%;
}
::v-deep .el-main {
  padding:0 8x 8px 8px;
}
::v-deep .el-header {
  height: 220px;
  padding:0;
}
</style>
