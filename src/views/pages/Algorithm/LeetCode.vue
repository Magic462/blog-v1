<script lang="ts" setup>
import { ref,onMounted, onUnmounted} from 'vue'

const value1 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
// 使用 ref 创建一个响应式引用  
const isFixed = ref(true); 
const handleScroll=()=>{
  // 获取滚动条位置  
  const scrollTop = document.documentElement.scrollTop
  console.log(scrollTop);
  isFixed.value=scrollTop<=400;
}
onMounted(()=>{
  window.addEventListener('scroll',handleScroll);
})
// 组件卸载时移除事件监听器  
onUnmounted(() => {  
  window.removeEventListener('scroll', handleScroll);  
});  
</script>

<template>
  <div class="selete">
    <el-select
      v-model="value1"
      multiple
      placeholder="Select"
      style="width: 180px;"
      v-show="isFixed"
    >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
</el-select>
  </div>
<!-- <div class="aq">aq</div> -->
 <div class="pages">
  <MainPages></MainPages>
  <MainPages></MainPages>
  <MainPages></MainPages>
  <MainPages></MainPages>
  <MainPages></MainPages>
 </div>
</template>
  
<style scoped>
.selete {
    width: 100%;
    /* height: 700px; */
    position: fixed;
    top:0;
    z-index:10;
    margin-left:10px;
    margin-top:4px;
}
.pages {
  margin-top:35px;
}
/* .aq {
  width: 200px;
  height: 20px;
  background-color: #fff;
  margin-top:30px;
} */
</style>