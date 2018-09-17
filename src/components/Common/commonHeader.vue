<template>
  <div class="header">
    <img src="../../../static/imgs/logo.png" alt=""/>
    <h2 class="system">{{ $t("message.webTitle") }}</h2>
    <div class="changeBox">
      <el-dropdown @command="toggleLang">
        <span class="el-dropdown-link">
          {{ $t("message.lang") }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item command="tw">繁體中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      test: 123
    }
  },
  mounted () {},
  methods: {
    toggleLang (lang) {
      localStorage.setItem('lang', lang)
      this.$i18n.locale = localStorage.getItem('lang')
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
  position: relative;
  font-family: "Microsoft YaHei";
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  .changeBox {
    width: 120px;
    position: absolute;
    right: 30px;
    top: 0px;
    .el-dropdown-link {
      cursor: pointer;
      color: white;
    }
  }
  img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
    margin-bottom: 8px;
    margin-right: 20px;
  }
  h2 {
    font-size: 24px;
    letter-spacing: 2px;
    display: inline-block;
  }
}
</style>
