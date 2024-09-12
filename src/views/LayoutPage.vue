<script setup>
import {ref } from 'vue'
//element plus组件可以没有组件的导入，直接使用

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const isCollapse = ref(true);
// const handleChange = (key, keyPath) => {
//   console.log(key, keyPath);
//   console.log(this.isCollapse.value);
//   this.isCollapse.value = !this.isCollapse.value
// };
const handleChange = () => {
  // console.log(key, keyPath);
  return !isCollapse.value;
};
addEventListener("scroll", () => {
  isCollapse.value = true;
});
</script>

<template>
  <el-container class="common-layout">
        <el-container>
            <el-aside>  
              <el-radio-group v-model="isCollapse" style="margin-bottom: 4px">
                 <el-radio-button :value="handleChange()">Change</el-radio-button>
                 <!-- <el-radio-button :value="true">collapse</el-radio-button> -->
              </el-radio-group>
              <!-- router选项开启后可以利用index跳转到相关路径default-active跳转时的高亮样式 -->
              <el-menu
                default-active="/MainPart"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                background-color="#FC9D99"
                active-text-color="#D24D57"
                router
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>Pages</span>
                  </template>
                  <el-menu-item-group>
                    <template #title><span>算法</span></template>
                    <el-menu-item index="1-1">LeetCode题解</el-menu-item>
                    <el-menu-item index="1-2">做题心得</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Notes">
                    <el-menu-item index="1-3">about项目</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title><span>web学习路线</span></template>
                    <el-menu-item index="1-4-1">js</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                  <el-menu-item index="/MainPart">
                    <el-icon><icon-menu /></el-icon>
                    <template #title>MainPart</template>
                  </el-menu-item>
                  <el-menu-item index="/SettingPart">
                    <el-icon><setting /></el-icon>
                    <template #title>Setting</template>
                  </el-menu-item>
                  <el-menu-item index="/AboutMyself">
                    <el-icon><location /></el-icon>
                    <!-- <router-link to="/AboutMyself"
                      ><el-icon><location /></el-icon
                    ></router-link> -->
                    <template #title>AboutMyself</template>
                  </el-menu-item>
              </el-menu>
            </el-aside>
        <el-container>
          <!-- <el-header></el-header> -->
          <el-main><router-view></router-view></el-main>
        </el-container>
        </el-container>
        <el-footer><FooterPart></FooterPart></el-footer>
      </el-container>
  </template>
<!-- <template>
  <el-container class="common-layout">
        <el-container>
            <el-aside><AsidePart></AsidePart></el-aside>
        <el-container>
          <el-header><HeaderPart></HeaderPart></el-header>
          <el-main><MainPages></MainPages></el-main>
        </el-container>
        </el-container>
        <el-footer><FooterPart></FooterPart></el-footer>
      </el-container>
    <router-view></router-view>
  </template> -->


<style scoped>

.common-layout{
  width: 100vw;
  height: 100%;
}
:deep(.el-contain) {
    width: 100%;
}
:deep(.el-aside){
  /* width: 32%; */
  height: auto;
  /*设置宽度为auto可以使侧边栏自由缩放*/
  /*取消collapse按钮，监听scroll滚轮按钮，一旦页面发生滚动，侧边导航栏就收缩 */
  width: auto;
}
:deep(.el-main) {
  /*改变组件库自带的内边距样式*/
  padding:0;
}
:deep(.el-header) {
  height: 400px;
  /*改变组件库自带的内边距样式*/
  padding:0;
}
:deep(.el-footer) {
    background-color: #D0D0D0;
    /* position: absolute; */
}
/*改变icon图标*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* 取消路由链接的高亮 */
a {
  color: inherit;
  text-decoration: none;
}
</style>
