<script>

</script>

<template>  
<div class="main">
    <h3 class="title">title</h3>
    <div class="content">内容</div>
    <span class="tab"># 标签</span>
    <span class="data">时间</span>
</div>
<div class="main">
    <h3 class="title">title</h3>
    <div class="content">内容</div>
    <span class="tab"># 标签</span>
    <span class="data">时间</span>
</div>
<div class="main">
    <h3 class="title">title</h3>
    <div class="content">内容</div>
    <span class="tab"># 标签</span>
    <span class="data">时间</span>
</div>
</template> 
  
<style scoped>
.main {
    width: 100%;
    height: 120px;
    background-color: red;
    position: relative;
    margin-bottom:10px;
}
.title {
    margin: 2px 0;
}
.content {
    height: 70px;
}
.tab {
    position: absolute;
    bottom:0;
}
.data {
    position: absolute;
    right:2px;
    bottom:0;
}
</style>
