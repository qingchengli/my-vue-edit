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
        <transition name = "routerTransition" mode="out-in">
          <router-view name="main"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import './static/css/app.scss';
.routerTransition-enter-active, .routerTransition-leave-active {
  transition: opacity .5s;
}
.routerTransition-enter, .routerTransition-leave-to {
  opacity: 0;
}
</style>
