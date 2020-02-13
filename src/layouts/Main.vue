<template>
  <el-container>
    <el-aside width="200px">
      <div class="layout-logo">LOGO</div>
      <v-menu />
    </el-aside>
    <el-container>
      <el-header>
        <v-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Copyright  2020 小丑鱼 出品</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import VLink from '../components/Link.vue';
  import VMenu from '../components/Menu.vue';
  import VHeader from '../components/VHeader.vue';
  
  export default {
    name: 'Main',
    components:{
      VLink,
      VMenu,
      VHeader
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .el-container {
    min-height: 100vh;
    background: #f0f2f5;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    background-color: #409EFF;
  }
  
  .el-aside {
    color: #333;
    /* text-align: center; */
  }
  .layout-logo {
    height: 60px;
    background: #409EFF;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
    border-right: solid 1px #e6e6e6;
    padding-left: 20px;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    padding:12px 12px 0;
  }
  
</style>