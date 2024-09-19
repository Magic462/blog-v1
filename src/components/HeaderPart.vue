<script>
export default {
  data() {
    return {
      // 假设我们只是想显示1到4的数字
      PictureList: [
        {
          url: "https://plus.unsplash.com/premium_photo-1720794774013-12946b37fc3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1721475188278-9f1ff9201f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1720794774002-53c5bb1b18ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        },
      ],
    };
  },
};
</script>

<template>
  <el-carousel height="400px" motion-blur :autoplay="true">
    <el-carousel-item v-for="item in PictureList" :key="item">
      <h3 text="2xl" justify="center">
        <img :src="item.url" alt="" />
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>
  
<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item img {
  position: absolute;
  inset: 0;
  /* margin: 0; */
  /* text-align: center; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

