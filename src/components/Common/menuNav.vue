<template>
    <div class="menuNav" :class="{showSidebar: !isCollapse}" style="height: 100%;">
      <el-menu :default-active="$router.path" class="el-menu-vertical" router @open="handleOpen" @close="handleClose" :collapse="isCollapse" style="height: 100%;">
        <el-menu-item index="" @click="collapseMenu" style="text-align: center;">
          <i class="el-icon-d-arrow-left" v-show="!isCollapse" style="color: #c12529;"></i>
          <i class="el-icon-d-arrow-right" v-show="isCollapse" style="color: #c12529;"></i>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <template slot="title">
            <span slot="title">首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">内容管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/love">新闻编辑</el-menu-item>
            <el-menu-item index="/life">轮播模板</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">军事</span>
          </template>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'menu-nav',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    collapseMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
