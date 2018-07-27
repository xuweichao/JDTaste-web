<template>
  <!--分类/banner-->
  <div>
    <MainSearch />
    <div id="main-banner" class="mt50 m0_50">
      <el-row>
        <el-col :span="4">

          <ul id="left-nav">
            <li @mouseover="mouseOver" @mouseout="mouseOut">
              <span>特色水果</span>
              <i class="el-icon-arrow-right"/>
              <div class="left-nav-pro bgf bbc" @mouseover="productsOver"
                   @mouseout="productsOut" v-on:click="productDetail">

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

              </div>
            </li>
            <li @mouseover="mouseOver" @mouseout="mouseOut">
              <span>特色土特产</span>
              <i class="el-icon-arrow-right"/>
              <div class="left-nav-pro bgf bbc" @mouseover="productsOver"
                   @mouseout="productsOut" v-on:click="productDetail">

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>


                  </ul>
                </div>

              </div>
            </li> <li @mouseover="mouseOver" @mouseout="mouseOut">
              <span>特色海鲜</span>
              <i class="el-icon-arrow-right"/>
              <div class="left-nav-pro bgf bbc" @mouseover="productsOver"
                   @mouseout="productsOut" v-on:click="productDetail">

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                  </ul>
                </div>

                <div class="fl">
                  <ul>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>
                    <li class="pt20 pb20 pl20 pr50">
                      <img src="../assets/logo.png" style="width: 40px;height: 40px;">
                      <span class="ml15">商品名称商品</span>
                    </li>


                  </ul>
                </div>

              </div>
            </li>
          </ul>

        </el-col>
        <el-col :span="20">

          <div class="grid-content">
            <el-carousel trigger="click" height="500px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>

    <div id="main-product" class="m0_50">
      <el-row>
        <el-col :span="6"><img src="../assets/logo.png" style="width: 100%;height: 100px;"></el-col>
        <el-col :span="6"><img src="../assets/logo.png" style="width: 100%;height: 100px;"></el-col>
        <el-col :span="6"><img src="../assets/logo.png" style="width: 100%;height: 100px;"></el-col>
        <el-col :span="6"><img src="../assets/logo.png" style="width: 100%;height: 100px;"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import MainSearch from './MainSearch'

  export default {
    name: "main-top",
    data() {
      return {
        activeCls: 'orange',
        proType: ''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      mouseOver(e) {
        // console.log("----mouseOver-----")
        // console.log(e.currentTarget.children[0].innerText);
        // e.currentTarget.children[2].innerText = e.currentTarget.children[0].innerText;
        // console.log("open " + e.currentTarget.children[2].innerText);
        e.currentTarget.children[2].style.display = 'block';
        e.currentTarget.className = 'actived';

      },
      mouseOut(e) {
        // console.log("----mouseOut-----")
        e.currentTarget.className = '';
        e.currentTarget.children[2].style.display = 'none';
        // console.log("close " + e.currentTarget.children[2].innerText);
        // console.log("close " + e.currentTarget.tagName);
      },
      productsOver(e) {
        // console.log("open " + e.currentTarget.tagName);
        // console.log(e.currentTarget.innerText);
      },
      productsOut(e) {
        e.currentTarget.children[2].style.display = 'none';
      },
      productDetail(e) {
        // e.currentTarget.style.display='none';
        console.log("1111")
        this.$router.push({path: '/proDetail', query: {name: e.currentTarget.innerText}});
      }
    },
    components: {
      MainSearch
    }
  }
</script>

<style scoped>
  .actived {
    background-color: #fd9807;
  }

  .mt50 {
    margin-top: 50px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 200px;
    margin-left: auto;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  #logo {
    margin-left: 80px;
  }

  #left-nav {
    height: 500px;
    background-color: #545c64;
    margin-top: 0px;
    padding-left: 0px;
  }

  #left-nav > li {
    list-style: none;
    padding: 10px 5px 10px 15px;
    font-size: 18px;

  }

  #left-nav > li > span {
    color: white;
  }

  #left-nav > li > i {
    float: right;
    color: #bfcbd9;
  }

  /*#fd9807*/
  .left-nav-pro {
    height: 500px;
    /*width: 100px;*/
    float: left;
    z-index: 10;
    left: 184px;
    top: 0px;
    position: absolute;
    display: none;
    margin-left: 25px;
    box-shadow: 0px 0px 8px #ccc;
  }

  #main-product .el-col {
    padding: 5px;
  }
</style>
