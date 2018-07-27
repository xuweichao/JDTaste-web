<template>
  <!--购物车-->
  <div class="bgf5">
    <div class="p30 bbc bgf">
      <el-row>
        <el-col :span="20">
          <img src="../assets/logo.png" id="logo" style="width: 50px;height: 50px;">
          <span class="ml30 f20 fb c6">我的购物车</span>
        </el-col>
        <el-col :span="4">
          <el-dropdown class="mt15">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="ml30">我的订单</span>
        </el-col>
      </el-row>
    </div>

    <div class="mt50 bgf mg0_50">
      <el-row class="pd20">
        <el-col :span="3">
          <el-checkbox v-model="checked">全选</el-checkbox>
        </el-col>
        <el-col :span="9" class="tc">商品名称</el-col>
        <el-col :span="3" class="tc">单价</el-col>
        <el-col :span="3" class="tc">数量</el-col>
        <el-col :span="3" class="tc">小计</el-col>
        <el-col :span="3" class="tc">操作</el-col>
      </el-row>
      <div class="w100p bbc"></div>
      <el-row class="pd20">
        <el-col :span="3">
          <el-checkbox v-model="checked"></el-checkbox>
        </el-col>
        <el-col :span="9"><img src="../assets/logo.png" style="width: 50px;height: 50px;">
          <span class="ml30 f20 fb c6">商品名称</span></el-col>
        <el-col :span="3" class="tc">1000元</el-col>
        <el-col :span="3" class="tc">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
        <el-col :span="3" class="tc">2666元</el-col>
        <el-col :span="3" class="tc"><i class="el-icon-delete f18"></i></el-col>
      </el-row>
      <div class="w100p bbc"></div>
      <el-row class="pd20">
        <el-col :span="3">
          <el-checkbox v-model="checked"></el-checkbox>
        </el-col>
        <el-col :span="9"><img src="../assets/logo.png" style="width: 50px;height: 50px;">
          <span class="ml30 f20 fb c6">商品名称</span></el-col>
        <el-col :span="3" class="tc">1000元</el-col>
        <el-col :span="3" class="tc">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
        <el-col :span="3" class="tc">2666元</el-col>
        <el-col :span="3" class="tc"><i class="el-icon-delete f18"></i></el-col>
      </el-row>
      <div class="w100p bbc"></div>
      <el-row class="pd20">
        <el-col :span="3">
          <el-checkbox v-model="checked"></el-checkbox>
        </el-col>
        <el-col :span="9"><img src="../assets/logo.png" style="width: 50px;height: 50px;">
          <span class="ml30 f20 fb c6">商品名称</span></el-col>
        <el-col :span="3" class="tc">1000元</el-col>
        <el-col :span="3" class="tc">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
        <el-col :span="3" class="tc">2666元</el-col>
        <el-col :span="3" class="tc"><i class="el-icon-delete f18"></i></el-col>
      </el-row>

    </div>
    <div class="bgf mt50 ml50 mr50">
      <el-row class="pd20">
        <el-col :span="18">共选择<span>3</span>种商品，共计<span>5</span>件</el-col>
        <el-col :span="6"><span>合计：</span><span>222222</span>元<el-button type="warning" class="ml50">去结算</el-button></el-col>
      </el-row>
    </div>
    <ProductGuess/>
    <MainFooter/>
  </div>
</template>

<script>
  import ProductGuess from './ProductGuess'
  import MainFooter from './MainFooter'

  export default {
    name: "product-cart",
    data() {
      return {
        num: 1
      }

    },
    components: {
      ProductGuess,MainFooter
    }
  }
</script>

<style scoped>

</style>
