<template>
  <div class="bg2b pt15 pb15">
    <el-row>
      <el-col :span="12"><a href="/" class="cd ml50">商城首页</a></el-col>
      <el-col :span="12" class="tr">
        <el-dropdown class="cd mr10">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄是想糕</el-dropdown-item>
            <el-dropdown-item>黄是想糕</el-dropdown-item>
            <el-dropdown-item>黄是想糕</el-dropdown-item>
            <el-dropdown-item>黄是想糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a href="/register" class="cd mr10">注册</a>
        <a href="/login" class="cd mr50">登录</a>
        <a href="/" class="cd mr50">我的订单</a>
        <a href="/productCart" class="cd mr50">购物车</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    name: "main-navigation",
    data() {
      return {
        activeIndex2: '1',
        loginUser: null
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      userResiter() {
        console.log("注册");
      },
      userLogin() {
        console.log("登录");
      }
    }, mounted() {
      this.loginUser = JSON.parse(sessionStorage.getItem("loginUser"));
      console.log(this.loginUser.account);
    }
  }
</script>

<style>
  .el-popper .popper__arrow, .el-popper .popper__arrow::after {
    display: none;
  }

  .el-popper[x-placement^=bottom] {
    margin-top: 15px;
  }
</style>
