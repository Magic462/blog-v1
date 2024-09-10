<script>
export default {
  data() {
    return {
      // 假设我们只是想显示1到4的数字
      PictureList: [
        {
          url: "https://images.unsplash.com/photo-1725815091488-42d1f9045877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1675805015876-7b3da77851ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1674407729043-c21b71fded37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1674457955329-39bd876bb3dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- <div class="block text-center">
      <span class="demonstration">Motion blur the switch (default)</span>
      <el-carousel height="200px" motion-blur>
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  <!-- <p class="text-center demonstration">Vertical effect</p> -->
  <el-carousel height="400px" motion-blur :autoplay="false">
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
  /* color: #475669; */
  /* opacity: 0.75; */
  /* line-height: 200px; */
  inset: 0;
  /* margin: 0; */
  /* text-align: center; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

