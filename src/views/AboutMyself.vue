<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>

<template>  
    <div class="touxiang">
        <div class="avatar">
            <img url="https://plus.unsplash.com/premium_photo-1720794774002-53c5bb1b18ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8">
        </div>
        <el-calendar v-model="value" />
    </div>
    
    
<router-view></router-view>
</template> 
  
<style scoped>
.touxiang {
    width: 80%;
    height: 200px;
    margin:0 auto;
    background-color: antiquewhite;
    position: relative;
}
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
/* .main {
    height: 100%;
    position: relative;
} */
:deep(.el-calendar) {
    width: 300px;
    height: 300px;
    position: absolute;
    top:20px;
    right:20px;
}
:deep(.el-calendar) tr {
    height: 50px;
}
</style>
