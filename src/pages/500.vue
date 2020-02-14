<template>
  <div class="page">
    <h1>500</h1>
    <h2>抱歉~~~~~服务器出错了！</h2>
    <div class="btn">
      <el-button type="primary" v-on:click="goHome">返回首页</el-button>
      <el-button type="primary" v-on:click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goHome: function(){
        this.$router.push({path:'/'})
      },
      goBack: function(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .page {
    text-align: center;
  }
  h1{
    font-size: 150px;
    color: #2d8cf0;
    margin: 100px 0 20px;
  }
  h2 {
    font-size: 30px;
    color: #666;
    font-weight: normal;
  }
  .btn {
    margin-bottom: 200px;
    margin-top: 100px;
  }
</style>
