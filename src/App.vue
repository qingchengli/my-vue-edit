<template>
  <div id="app">
    <el-container v-if="this.$route.path != '/404' && this.$route.path != '/login'">
      <el-header style="padding: 0" height='60px'>
        <router-view name="Header"></router-view>
      </el-header>
    </el-container>
    <el-container style="height: 100%">
      <el-aside height="100%" width="auto;" class="show-shadow">
        <router-view name="menuNav"></router-view>
      </el-aside>
      <el-main style="padding: 0">
        <el-row style="padding: 0 40px; margin: 20px 0 0px;" v-if="this.$route.path != '/404' && this.$route.path != '/login'">
          <el-tag v-for="(item, index) in $store.state.tags" :key="item.id" closable style="cursor: pointer;" :class="{ activeTag: $route.path == item.path }" @click.native="changeTag(index, item.path)" @close="closeTag(item)">
            {{ $t(item.name) }}
          </el-tag>
        </el-row>
        <transition name = "routerTransition" mode="out-in">
          <router-view name="main"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ActiveNum: 0
    }
  },
  methods: {
    changeTag (index, path) {
      this.ActiveNum = index
      this.$router.push({path: path})
    },
    closeTag (tag) {
      if (tag.path === this.$route.path) {
        history.back(-1)
      }
      this.$store.commit('deleteTag', tag)
    }
  }
}
</script>

<style lang='scss'>
@import "./static/css/app.scss";
.routerTransition-enter-active,
.routerTransition-leave-active {
  transition: opacity 0.5s;
}
.routerTransition-enter,
.routerTransition-leave-to {
  opacity: 0;
}
.activeTag{
  background-color: #c12529;
  color: white;
}
.el-tag:not(:first-child){
  margin-left: 10px;
}
.activeTag.el-tag .el-icon-close::before{
  color: white;
}
.activeTag.el-tag .el-icon-close:hover{
  background: #faaeb0;
}
</style>
