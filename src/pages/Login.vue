<template>
  <div class="login">
    <div class="login_box">
      <div class="login_con">
        <h2>后台管理系统</h2>
        <div class="username">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="password">
          <el-input v-model="password" placeholder="请输入密码"></el-input>
        </div>
        <div class="btn">
          <el-button type="primary" v-on:click="onLogin">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        username:'',
        password:''
      }
    },
    methods:{
      onLogin: function(){
        if(this.username&&this.password){
          this.$router.push({path: "dashboard"})
        }else{
          this.$message.error('请输入用户名，密码');
        }
        
      }
    }
  }
</script>

<style scoped="">
  .login {
    position: relative;
    height: 100vh;
  }
  .login_box {
    position: absolute;
    height: 300px;
    width: 300px;
    margin-left: -150px;
    margin-top: -150px;
    border: 1px solid #ccc;
    left: 50%;
    top: 50%;
    border-radius: 5px;
  }
  .login_con {
    padding: 12px;
  }
  .login_con h2 {
    text-align: center;
    color: #454545;
  }
  .login_con div {
    margin-bottom: 12px;
  }
  .btn .el-button {
    width: 100%;
  }
</style>
