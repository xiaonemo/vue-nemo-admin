<template>
  <div class="header_box">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link"><el-avatar :size="22" :src="circleUrl"></el-avatar>欢迎您！小丑鱼</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>账号管理</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
          <el-dropdown-item divided>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="logout"><i class="el-icon-switch-button"></i> 退出登录</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

<style>
  .header_box {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
  .info {
    margin-right: 30px;
  }
  .el-avatar {
    vertical-align: middle;
    margin-right: 12px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
