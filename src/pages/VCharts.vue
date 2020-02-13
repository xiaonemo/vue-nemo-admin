<template>
  <div class="page charts">
    <el-row :gutter="40">
      <el-col :span="12">
        <h3>折线图</h3>
        <ve-line :data="chartData"></ve-line>
      </el-col>
      <el-col :span="12">
        <h3>柱形图</h3>
        <ve-histogram :data="chartData"></ve-histogram>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="12">
        <h3>条形图</h3>
        <ve-bar :data="chartData"></ve-bar>
      </el-col>
      <el-col :span="12">
        <h3>饼图</h3>
        <ve-pie :data="chartData"></ve-pie>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="12">
        <h3>环形图</h3>
        <ve-ring :data="chartData"></ve-ring>
      </el-col>
      <el-col :span="12">
        <h3>雷达图</h3>
        <ve-radar :data="chartData"></ve-radar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>

<style>
  .charts {
    margin-bottom: 12px;
  }
</style>
