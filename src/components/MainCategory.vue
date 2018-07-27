<template>
  <!--主要分类商品展示-->
  <div id="main-product" class="m0_50">
    <div>
      <el-row>
        <el-col :span="12"><h3>分类</h3></el-col>
        <el-col :span="12"><span style="margin: 25px 50px;float: right;">更多<i class="el-icon-arrow-right"></i></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <img src="../assets/hamburger.png" style="height: 387px; width: 100%">
        </el-col>
        <el-col :span="4" class="ml10">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" class="ml10">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" class="ml10">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" class="ml10">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="12"><h3>分类</h3></el-col>
        <el-col :span="12"><span style="margin: 25px 50px;float: right;">更多<i class="el-icon-arrow-right"></i></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1: 0">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="12"><h3>分类</h3></el-col>
        <el-col :span="12"><span style="margin: 25px 50px;float: right;">更多<i class="el-icon-arrow-right"></i></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1: 0">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/hamburger.png" class="image">
            <div style="padding: 20px 10px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-category",
    data() {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .ml10 {
    margin-left: 20px;
  }
  #main-product{
    margin-top: 30px;
  }
</style>
