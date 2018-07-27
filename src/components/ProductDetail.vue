<template>
  <!--商品详情-->
  <div class="bg w100p">
    <MainSearch class="mb20"/>
    <div class="w100p pl50 pd20_0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="p0_50 pt30 pb30 bgf">
      <el-row>
        <el-col :span="3">
          <ul class="pl20">
            <li><img src="../assets/logo.png" class="w100 mb5" border="1px"/></li>
            <li><img src="../assets/logo.png" class="w100 mb5" border="1px"/></li>
            <li><img src="../assets/logo.png" class="w100 mb5" border="1px"/></li>
            <li><img src="../assets/logo.png" class="w100 mb5" border="1px"/></li>
          </ul>
        </el-col>
        <el-col :span="13"><span><img src="../assets/logo.png" class="w80p pd10" border="1px"/></span></el-col>
        <el-col :span="8">
          <h1>商品标题宣传单大V发</h1>
          <div><span>商品副标题商品副标题商品副标题商品副事故发生分公司是现场查询查询是否带给你供货价格分内的事的冯绍峰标题</span></div>
          <div><h2>15555元</h2></div>
          <div class="m10_0">
            <span> 数量 ：</span>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div><h1>总计：20000元</h1></div>
          <div>
            <el-button type="warning" plain>加入购物车</el-button>
            <el-button type="warning">立即购买</el-button>
            <el-button type="primary" plain>收藏</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="bbc"/>

    <div class="w100p box p10_0 bgf" :class="searchBarFixed == true ? 'isFixed' :''" id="productInfoNav">
      <ul>
        <li @click="goAnchor('#detail')">商品详情</li>
        <li @click="goAnchor('#params')" class="blc">&nbsp;&nbsp;&nbsp;&nbsp;商品参数</li>
        <li @click="goAnchor('#appraise')" class="blc">&nbsp;&nbsp;&nbsp;&nbsp;商品评价</li>
      </ul>
    </div>
    <!--<div class="bbc"/>-->

    <div class="m0_50 h300 bgf mt100" id="detail">
      <div class="bg p30_0">
        <el-row>
          <el-col :span="8">
            <div class="bbc w100p mt15"/>
          </el-col>
          <el-col :span="8"><span class="fl tc w100p f16 mt5">商品详情</span></el-col>
          <el-col :span="8">
            <div class="bbc fl w100p mt15"/>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="m0_50 h300 bgf mt100" id="params">
      <div class="bg p30_0">
        <el-row>
          <el-col :span="8">
            <div class="bbc w100p mt15"/>
          </el-col>
          <el-col :span="8"><span class="fl tc w100p f16 mt5">商品参数</span></el-col>
          <el-col :span="8">
            <div class="bbc fl w100p mt15"/>
          </el-col>
        </el-row>
      </div>
    </div>


    <div class="m0_50 h300 bgf mt100" id="appraise">
      <div class="bg p30_0">
        <el-row>
          <el-col :span="8">
            <div class="bbc w100p mt15"/>
          </el-col>
          <el-col :span="8"><span class="fl tc w100p f16 mt5">商品评价</span></el-col>
          <el-col :span="8">
            <div class="bbc fl w100p mt15"/>
          </el-col>
        </el-row>
      </div>
    </div>
    <ProductGuess/>
    <MainFooter/>
  </div>
</template>

<script>
  import MainSearch from './MainSearch'
  import ProductGuess from './ProductGuess'
  import MainFooter from './MainFooter'

  export default {
    name: "product-detail",
    data() {
      return {
        num: 1,
        activeName: 'first',
        searchBarFixed: false,
        offsetTopCon: 0,
        isFirst: true
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      goAnchor(selector) {//锚 跳转到指定位置

        var anchor = this.$el.querySelector(selector);
        // if (selector == "#detail") {
        //   document.body.scrollTop = anchor.offsetTop; // chrome
        //   document.documentElement.scrollTop = anchor.offsetTop; // firefox
        // } else {
        if (this.isFirst) {
          console.log("----"+this.isFirst)
          document.body.scrollTop = anchor.offsetTop - 120; // chrome
          document.documentElement.scrollTop = anchor.offsetTop - 120; // firefox
          this.isFirst = false;
        } else {
          console.log("----"+this.isFirst)
          document.body.scrollTop = anchor.offsetTop -60; // chrome
          document.documentElement.scrollTop = anchor.offsetTop-60 ; // firefox

        }


        // document.body.scrollTop = anchor.offsetTop - 60 - 100; // chrome
        // document.documentElement.scrollTop = anchor.offsetTop - 60 - 100; // firefox
        // }
      },
      handleScroll() {//吸顶效果
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#productInfoNav').offsetTop;

        if (offsetTop > 0) {
          this.offsetTopCon = offsetTop;
        }
        if (scrollTop > this.offsetTopCon) {
          this.searchBarFixed = true;
        } else {
          this.isFirst=true;
          this.searchBarFixed = false;
        }
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    components: {
      MainSearch, ProductGuess,MainFooter
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #f5f5f5;
  }

  .box {
    width: 100%;
    margin: auto;
  }

  .box ul {
    display: table;
    margin: 10px auto;
  }

  .box ul li {
    text-align: center;
    font-size: 18px;
    float: left;
    *float: none;
    *display: inline;
    *zoom: 1;
    margin-right: 10px;
  }

  .isFixed {
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 999;
    box-shadow: 0 0 10px #000;
  }
</style>
