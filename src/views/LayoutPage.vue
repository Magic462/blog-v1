<script setup>
import {ref,watch } from 'vue'
import { useRoute } from 'vue-router';
//element plus组件可以没有组件的导入，直接使用
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

// 初始化为当前路由路径
// const activePath = ref(useRoute().path);
// 创建一个响应式引用来存储当前激活的路径  
const activePath = ref('');
// 获取当前的路由对象  
const route = useRoute(); 
// 侦听路由变化  
watch(  
  () => route.path,  
  (toPath) => {  
    activePath.value=toPath;
    // console.log(activePath.value);
  },  
  { immediate: true } // 立即执行一次回调，以处理初始路由  
);


// const dealRoutePath = (activePath) => {
//   if (!activePath) return "";
//   //将一个字符串 path 按照 / 字符进行分割，并将结果存储数组中
//   const activePathArr = activePath.split("/");
//   return activePathArr.slice(-1)[0];
// };

// // 使用 beforeunload 事件监听页面刷新
// window.addEventListener('beforeunload', ()=>{
//   console.log(route.path);
//   activePath.value=route.path;
//   // localStorage.setItem('activePath',route.path);
// })
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
                :default-active="activePath"
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
                    <el-menu-item index="/pages/Algorithm/LeetCode">LeetCode题解</el-menu-item>
                    <el-menu-item index="1-2">做题心得</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <template #title><span>Notes</span></template>
                    <el-menu-item index="/pages/notes/StudyNotes">about项目</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="/pages/notes/StudyNotes">
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
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
    <el-footer><FooterPart></FooterPart></el-footer>
  </el-container>
  </template>

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
