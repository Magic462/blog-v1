<script>
// import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
//element plus组件可以没有组件的导入，直接使用
// import AsidePart from '@/components/AsidePart.vue'
// import MainPages from '@/components/MainPages.vue'
// import HeaderPart from '@/components/HeaderPart.vue'
import { ElContainer,ElAside,ElHeader,ElMain,ElFooter } from 'element-plus'

export default defineComponent({
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter,
    // AsidePart,
    // MainPages,
    // HeaderPart
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
        <el-container>
            <el-aside><AsidePart></AsidePart></el-aside>
        <el-container>
          <el-header><HeaderPart></HeaderPart></el-header>
          <el-main><MainPages></MainPages></el-main>
        </el-container>
        </el-container>
        <el-footer><FooterPart></FooterPart></el-footer>
      </el-container>
    </div>
    <router-view></router-view>
  </template>


<style scoped>

.common-layout{
  width: 100vw;
  height: 100%;
}
::v-deep(.el-aside) {
  /* width: 32%; */
  height: 100%;
  /*设置宽度为auto可以使侧边栏自由缩放*/
  /*取消collapse按钮，监听scroll滚轮按钮，一旦页面发生滚动，侧边导航栏就收缩 */
  width: auto;
}
::v-deep .el-main {
  /*改变组件库自带的内边距样式*/
  padding:0;
}
::v-deep .el-header {
  height: 400px;
  /*改变组件库自带的内边距样式*/
  padding:0;
}
::v-deep .el-footer {
    background-color: #555;
    /* position: absolute; */
}
</style>
