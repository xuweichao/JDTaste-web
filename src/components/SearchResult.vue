<template>
  <!--搜索结果-->
  <div class="bg">
    <MainSearch class="mb20"/>
    <div id="pro-select" class="p20_0 w100p">
      <ul class="ml100">
        <li>全部</li>
        <li>新品</li>
        <li>价格</li>
        <li>人气</li>
      </ul>
      <el-checkbox v-model="checked" class="fr mr100">显示有货</el-checkbox>
    </div>
    <div class="ml50 mr50">
      <el-row>
        <el-col :span="6" v-for="(o, index) in 4" :key="o">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" class="mt30 mb30 ml15">
            <img src="../assets/hamburger.png" class="image w100p">
            <div style="padding: 20px 10px" class="tc">
              <div class="p5_0"><span>商品备注信息</span></div>
              <span class="f14 fb">商品的标题三生三世十里桃花</span>
              <div class="p5_0"><span>1333元</span><span>1800元</span></div>
              <div class="bottom clearfix">
                <el-button type="text" class="button">收藏</el-button>
                <el-button type="text" class="button">购物车</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="(o, index) in 2" :key="o">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" class="mt30 mb30 ml15">
            <img src="../assets/hamburger.png" class="image w100p">
            <div style="padding: 20px 10px" class="tc">
              <div class="p5_0"><span>商品备注信息</span></div>
              <span class="f14 fb">商品的标题三生三世十里桃花</span>
              <div class="p5_0"><span>1333元</span><span>1800元</span></div>
              <div class="bottom clearfix">
                <el-button type="text" class="button">收藏</el-button>
                <el-button type="text" class="button">购物车</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="w100p tc mg10_0">
      <el-pagination
        background
        layout="prev, pager, next"
        page-size="20"
        :total="100">
      </el-pagination>
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
    name: "search-result",
    components: {
      MainSearch, ProductGuess, MainFooter
    }
  }
</script>

<style scoped>
  .mt50 {
    margin-top: 50px;
  }

  .bg {
    background-color: #f5f5f5;
  }

  #pro-select li {
    list-style: none;
    float: left;
    margin-right: 40px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 310px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
  }

  .el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
  }
</style>
