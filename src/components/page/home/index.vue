<template>
    <div class="mainContent">
      <div class="M-title">
        <h2>我的大学生活</h2>
      </div>
      <div class="M-content">
        <div class="carousel-Box">
          <el-carousel :interval="4000" type="card" height="300px" arrow="hover">
            <el-carousel-item v-for="item in imgs" :key="item.id">
              <img :src="item.url" alt="" style="width: 100%; height: 100%">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
</template>

<script>
export default ({
  name: 'home',
  data () {
    return {
      testText: '你好',
      imgs: [
        {
          id: 1,
          name: '第一张',
          url: './static/imgs/1.jpg'
        },
        {
          id: 2,
          name: '第二张',
          url: './static/imgs/2.jpg'
        },
        {
          id: 3,
          name: '第三张',
          url: './static/imgs/3.jpg'
        },
        {
          id: 4,
          name: '第四张',
          url: './static/imgs/4.jpg'
        }
      ]
    }
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
  .carousel-Box{
    width: 70%;
    margin: 0 auto;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
    }
  }
</style>
