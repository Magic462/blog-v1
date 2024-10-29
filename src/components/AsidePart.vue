<script setup>
import { ref,watch } from "vue";
import { useRoute } from 'vue-router';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// 实现侧边栏的伸缩效果
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

// 滚轮一旦滑动，侧边栏收缩
addEventListener("scroll", () => {
  isCollapse.value = true;
});

// 获取当前路由
const route=useRoute()
// console.log(111);

// 创建一个响应式变量来存储当前高亮的路径  
// const highlightedPath = ref(route.path); 
// 侦听路由变化  
watch(  
  () => route.path,  
  (newPath) => {  
    console.log(route.path);
    // 根据新的路由路径更新侧边栏菜单项的高亮状态  
    // updateMenuHighlight(toPath);  
    console.log(newPath);
  },  
  { immediate: true } // 立即执行一次回调，以处理初始路由  
);
</script>

<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 4px">
    <el-radio-button :value="handleChange()">Change</el-radio-button>
    <!-- <el-radio-button :value="true">collapse</el-radio-button> -->
  </el-radio-group>
  <!-- router选项开启后可以利用index跳转到相关路径default-active跳转时的高亮样式 -->
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#FC9D99"
    active-text-color="#D24D57"
    :default-active="$route.path"
    :key="$route.path"
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
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <template #title>Friends</template>
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
  <router-view></router-view>
</template>


<style scoped>
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