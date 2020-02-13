<template>
  <div>
    <el-row>
      <el-col>
        <div class="card_box">
          <div class="card_item">
            <div class="card_content">
              <div class="title">用户总访问量</div>
              <h1 class="">198321位</h1>
              <div class="zhou_b">周同比 12% <span class="up"></span></div>
              <div class="day_b">日同比 13% <span class="dn"></span></div>
              <div class="day">日用户访问量： <strong>2653位</strong> </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_content">
              <div class="title">用户总访问量</div>
              <h1 class="">198321位</h1>
              <div class="zhou_b">周同比 12% <span class="up"></span></div>
              <div class="day_b">日同比 13% <span class="dn"></span></div>
              <div class="day">日用户访问量： <strong>2653位</strong> </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_content">
              <div class="title">用户总访问量</div>
              <h1 class="">198321位</h1>
              <div class="zhou_b">周同比 12% <span class="up"></span></div>
              <div class="day_b">日同比 13% <span class="dn"></span></div>
              <div class="day">日用户访问量： <strong>2653位</strong> </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_content">
              <div class="title">用户总访问量</div>
              <h1 class="">198321位</h1>
              <div class="zhou_b">周同比 12% <span class="up"></span></div>
              <div class="day_b">日同比 13% <span class="dn"></span></div>
              <div class="day">日用户访问量： <strong>2653位</strong> </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 12px;">
      <el-col>
        <div class="dash_box">
          <div class="title">用户访问次数统计</div>
          <div class="content">
          <ve-line :data="chartData"></ve-line>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12" style="margin-bottom: 12px;">
      <el-col :span="18">
        <div class="dash_box">
          <div class="title">用户访问次数统计</div>
          <div class="content">
          <ve-histogram :data="chartData"></ve-histogram>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="dash_box">
          <div class="title">用户访问次数统计</div>
          <div class="content">
          <ve-pie :data="chartData"></ve-pie>
          </div>
        </div>
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
  .card_box {
    display: flex;
    margin: 0 -6px;
  }
  .card_item {
    background: #fff;
    flex: 1;
    margin: 6px 6px 12px 6px;
  }
  .card_content {
    padding: 20px;
  }
  .card_content .title {
    color: #888;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    
  }
  .card_content h1 {
    font-size: 28px;
    margin-top: 8px;
    margin-bottom: 6px;
    font-weight: normal;
  }
  .card_content .zhou_b, .card_content .day_b {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
  .card_content .up:before {
    content: '↑';
    color: #f5222d;
  }
  .card_content .dn:before {
    content: '↓';
    color: #52c41a;
  }
  .card_content .day {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 12px;
    color: #666;
  }
  .dash_box {
    background: #fff;
    padding: 20px 0;
  }
  .dash_box>.title{
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 40px;
  }
  .dash_box .content {
    padding: 20px 40px;
  }
</style>
