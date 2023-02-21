<template>
<div class='app'>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
<router-view></router-view>
</div>
</template>

<script>
export default {
data() {
//这里存放数据
return {
    activeIndex: '1',
    activeIndex2: '1'

};
},
//计算属性
computed: {},
//方法集合
methods: {
    handleSelect(key, keyPath) {
    console.log(key, keyPath);
    this.$router.push('/Index/Sy');
      }

},
//挂载完成（可以访问DOM元素）
mounted() {
    alert(localStorage.getItem("LoginType"))

},
//监控data中的数据变化
watch: {

},
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>