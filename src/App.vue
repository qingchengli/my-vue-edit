<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0" height='60px'>
        <router-view name="Header"></router-view>
      </el-header>
    </el-container>
    <el-container style="height: 100%">
      <el-aside height="100%" width="auto;" class="show-shadow">
        <router-view name="menuNav"></router-view>
      </el-aside>
      <el-main style="padding: 0">
        <router-view name="main"></router-view>
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
@import './static/css/app.scss'
</style>
