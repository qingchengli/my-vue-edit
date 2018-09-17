<template>
    <div class="menuNav" :class="{showSidebar: !isCollapse}" style="height: 100%;">
      <el-menu :default-active="CurPath" class="el-menu-vertical" router @open="handleOpen" @close="handleClose" :collapse="isCollapse" style="height: 100%;">
        <el-menu-item index="" @click="collapseMenu" style="text-align: center;">
          <i class="el-icon-d-arrow-left" v-show="!isCollapse" style="color: #c12529;"></i>
          <i class="el-icon-d-arrow-right" v-show="isCollapse" style="color: #c12529;"></i>
        </el-menu-item>
        <el-menu-item index="/"  @click.native="addTag('message.hello', '/')">
          <i class="el-icon-menu"></i>
          <template slot="title">
            <span slot="title">{{ $t("message.hello") }}</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ $t("message.ContentMan") }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/love" @click.native="addTag('message.newsEdit', '/love')">{{ $t("message.newsEdit") }}</el-menu-item>
            <el-menu-item index="/life" @click.native="addTag('message.Carousel', '/life')">{{ $t("message.Carousel") }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">{{ $t("message.army") }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tank" @click.native="addTag('message.tank', '/tank')">{{ $t("message.tank") }}</el-menu-item>
            <el-menu-item index="/plane" @click.native="addTag('message.plane', '/plane')">{{ $t("message.plane") }}</el-menu-item>
          </el-menu-item-group>
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
  computed: {
    CurPath () {
      return this.$route.path
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    collapseMenu () {
      this.isCollapse = !this.isCollapse
    },
    addTag (name, path) {
      let obj = {
        name: name,
        path: path
      }
      this.$store.commit('addTag', obj)
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
