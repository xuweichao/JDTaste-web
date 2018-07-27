<template>
  <!--猜你喜欢-->
  <div>
    <div class="w100p tc f18 mt50">猜你喜欢</div>
    <el-row>
      <el-col :span="24">
        <el-carousel indicator-position="outside" arrow="never" class="mt30 mg0_50">
          <el-carousel-item v-for="item in 2" :key="item">
            <el-col :span="4" v-for="(o, index) in 6" :key="o">
              <el-card shadow="hover" :body-style="{ padding: '0px' }" class="mb30 ml15">
                <img src="../assets/hamburger.png" class="image w100p">
                <div style="padding: 10px 5px" class="tc">
                  <div class="p5_0"><span>商品备注信息</span></div>
                  <span class="fb">商品的标题三生三世十里桃花</span>
                  <div class="p5_0"><span>1333元</span><span>1800元</span></div>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">收藏</el-button>
                    <el-button type="text" class="button">购物车</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <!--<h3 class="w100p tc">{{ item }}</h3>-->
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "product-guess"
    }
</script>

<style scoped>

</style>
