<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo layout-menu"
      router
      @open="handleOpen"
      @close="handleClose">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" :key="subItem.index">{{subItem.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
  import Axios from 'axios'
  
  export default {
    data: function (){
      return {
        items: []
      }
    },
    created: function () {
      Axios.post('/api/test').then((res) => {
        // console.log(res.data.items)
        // this.items = res.data.items
        this.$set(this, 'items', res.data.items)
      }).catch((err) => {
        console.log(err)
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(this.items)
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style>
  .layout-menu {
    min-height:calc(100vh - 60px);
    /* overflow-y: scroll; */
  }
  
</style>
