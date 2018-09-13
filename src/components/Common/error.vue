<template>
  <div class="errorBg">
    <table></table>
    <div class="errorTitle">
      <p>404</p>
      <p style="font-size: 16px; word-break: keep-all;">Hello, i am Baymax, your personal health care companion.The Page you found is missing,Please Checkout THe URL</p>
      <el-button type="primary" round plain @click="toTap">Back to Home</el-button>
    </div>
  </div>
</template>

<script>
export default({
  name: 'error',
  mounted () {
    this.testFun()
  },
  methods: {
    testFun () {
      console.log(this.$route.path)
    },
    toTap () {
      this.$router.push({path: '/'})
    }
  }
})
</script>

<style lang="scss" scoped>
.errorBg{
  width: 100%;
  height: 100%;
  background-image: url('../../../static/imgs/404bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .errorTitle{
    width: 600px;
    text-align: center;
    font-family: '华文琥珀',sans-serif;
    font-size: 100px;
    margin: 0 auto;
    color: white;
    margin-top: 50px;
  }
}
</style>
