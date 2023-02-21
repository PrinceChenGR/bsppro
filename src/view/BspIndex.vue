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
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2" v-model="LoginType"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>  {{LoginType}}</el-menu-item>
  <el-menu-item index="3">前台</el-menu-item>
  <el-submenu index="4">
    <template slot="title">维修</template>
    <el-submenu index="4-1">
        <template slot="title">维修救援</template>
        <el-menu-item index="4-1-1">维修接车</el-menu-item>
        <el-menu-item index="4-1-2">竣工检验</el-menu-item>
        <el-menu-item index="4-1-3">出场放行</el-menu-item>
        <el-menu-item index="4-1-4">施工登记</el-menu-item>
    </el-submenu>
    <el-menu-item index="4-2">三包索赔</el-menu-item>
    <el-menu-item index="4-3">业务分析</el-menu-item>
  </el-submenu>
  <el-menu-item index="5">客户</el-menu-item>
  <el-menu-item index="6">数据</el-menu-item>
  <el-menu-item index="7">人事</el-menu-item>
  <el-menu-item index="8">操作</el-menu-item>
  <!-- <el-submenu index="2">
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
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
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
    activeIndex2: '1',
    LoginType:localStorage.getItem("LoginType")
};
},
//计算属性
computed: {},
//方法集合
methods: {
    handleSelect(key, keyPath) {
    console.log("key:"+key);
    console.log("keypath:"+keyPath);
    if(key=="1"){this.$router.push('/Index');}
    if(key=="4-1-1"){this.$router.push('/Index/ServiceAdviser');}
    //this.$router.push('/Index/Sy');
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