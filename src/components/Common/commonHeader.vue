<template>
  <div class="header">
    <img src="../../../static/imgs/logo.png" alt=""/>
    <h2 class="system">大白智能管理系统</h2>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      test: 123
    }
  }
}
</script>

<style lang='scss' scoped>
$color: white;
$baclground-color: #c12529;
.header {
  height: 60px;
  line-height: 60px;
  background: $baclground-color;
  color: $color;
  padding: 0 30px;
  font-family: 'Microsoft YaHei';
  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
  img{
    width: 60px;
    height: 60px;
    vertical-align: middle;
    margin-bottom: 8px;
    margin-right: 20px;
  }
  h2{
    font-size: 24px;
    letter-spacing: 2px;
    display: inline-block;
  }
}
</style>
