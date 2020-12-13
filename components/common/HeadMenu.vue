<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
  <!--  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">魅力校园</template>
      <el-menu-item index="/list?pageType=school">学校概况</el-menu-item>
      <el-menu-item index="/list?pageType=leaders">领导之窗</el-menu-item>
    </el-submenu>
      <el-submenu index="2-4">
        <template slot="title">教师风采</template>
        <el-menu-item index="/list?pageType=teachers">名师殿堂</el-menu-item>
        <el-menu-item index="/list?pageType=subjects">学科团队</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">招生招聘</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'HeadMenu',
  data() {
    return {
      activeIndex: '/home'
    }
  }
}
</script>

<style scoped>

</style>
