<template>
  <!--导航、搜索-->
  <div id="main-search">
    <div>
      <MainNavigation class="w100p"/>
    </div>

    <el-row class="mt50 pl100 pb30">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="../assets/logo.png" id="logo" style="width: 50px;height: 50px;">
        </div>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="请输入内容" size="large" class="input-with-select" v-model.trim="keyword">
          <el-button slot="append" icon="el-icon-search" v-on:click="searchProduct"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MainNavigation from './MainNavigation'

  export default {
    name: "main-search",
    data() {
      return {
        keyword: ""
      }
    },
    methods: {
      searchProduct(e) {
        console.log("--------searchProduct-------" + this.keyword);
        this.$router.push('/searchResult')
      }
    },
    components: {
      MainNavigation
    }
  }
</script>

<style scoped>
  #main-search {
    background-color: white;
  }
</style>
