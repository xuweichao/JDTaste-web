<template>
  <div class="h100p">

    <el-container class="h100p">
      <el-container>
        <el-aside width="200px">
          <!--<h2>美味胶东</h2>-->
          <el-menu
            default-active="1"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="changeHeader"
          >
            <el-menu-item index="1">
              <router-link to="/admin/" class="cd"><i class="fa fa-thumbs-o-up pd10"/>实时概览</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/admin/user" class="cd"><i class="fa fa-user pd10"/>用户管理</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/admin/product" class="cd"><i class="fa fa-shopping-bag pd10"/>商品管理</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/admin/order" class="cd"><i class="fa fa-file-text-o pd10"/>订单管理</router-link>
            </el-menu-item>
            <!--<el-menu-item index="5">-->
              <!--&lt;!&ndash;<router-link to="/admin/classify" class="cd"><i class="fa fa-tasks pd10"/>分类管理</router-link>&ndash;&gt;-->
              <!--<template slot="title" >-->
                <!--<i class="fa fa-tasks pd10"></i>-->
                <!--<span>分类管理</span>-->
              <!--</template>-->
            <!--</el-menu-item>-->
            <el-submenu index="5" >
              <template slot="title" >
                <i class="fa fa-tasks pd10"></i>
                <span>分类/规格管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1"><router-link to="/admin/classify" class="cd">分类管理</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link to="/admin/specific" class="cd">规格管理</router-link></el-menu-item>
                <el-menu-item index="5-3"><router-link to="/admin/specificTmp" class="cd">规格模板管理</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>

          <el-header style="z-index: 200;">
            <a href="#" class="mr30">王小虎</a>
            <a href="#" class="mr30">注销</a>
          </el-header>

          <el-main class="bg2b">
            <div class="bgf pd10 main-header">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{headerIndex}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="rad8 bgf m15 pd20" style="margin-top: 50px;">
              <router-view/>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: "admin-index",
    data() {
      return {
        headerIndex: '实时概览'
      }
    },
    methods: {
      changeHeader(index, indexPath) {
        console.log(index);
        console.log(indexPath);
        if ("1" == index) {
          this.headerIndex = "实时概览";
        } else if ("2" == index) {
          this.headerIndex = "用户管理";
        } else if ("3" == index) {
          this.headerIndex = "商品管理";
        } else if ("4" == index) {
          this.headerIndex = "订单管理";
        } else if ("5-1" == index) {
          this.headerIndex = "分类管理";
        } else if ("5-2" == index) {
          this.headerIndex = "规格管理";
        } else if ("5-3" == index) {
          this.headerIndex = "规格模板管理";
        }
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #689aff;
    color: #333;
    text-align: right;
    padding: 18px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #f5f5f5;
    color: #333;
    text-align: center;

    padding: 0px;
  }

  .main-header {
    box-shadow: 0 0 5px #545c64;
    text-align: left;
    position: absolute;
    width: 1150px;
    z-index: 100;
  }

  .el-menu {
    border-right: solid 0px #e6e6e6;
  }
  .el-submenu__title{
    padding-left: 0px!important;
  }
  .router-link-active a {
    color: #ddd;
  }

  .el-menu-item.is-active a {
    color: rgb(255, 208, 75);
  }

  .el-menu-item > a {
    padding: 20px 50px 20px 40px;
  }

  li.el-menu-item {
    padding-left: 0px !important;
  }

  a:active, h2 {
    color: rgb(255, 208, 75);
  }

  a:hover {
    color: #fff;
  }

</style>
