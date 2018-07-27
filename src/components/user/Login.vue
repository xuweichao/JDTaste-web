<template>
  <div>
    <div class="pt30 pb30 pl100  bbc bgf">
      <img src="../../assets/logo.png" id="logo" style="width: 50px;height: 50px;"/>
    </div>

    <div class="w100p" id="main-pic">
      <div class="login">
        <div class="w100p pd20"><span class="tc w100p f30">账号登录</span></div>
        <el-form :model="login" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input v-model="login.account" placeholder="手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="login.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm()" class="w100p">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="w100p "><a href="/" class="fr  ml10 c6">忘记密码？</a><a href="/register" class="fr c6">立即注册</a></div>
      </div>
    </div>

    <!-- <div>
     footer
     </div>-->
  </div>
</template>

<script>
  import crypto from 'crypto' //md5

  export default {
    name: "login",
    data() {
      return {
        login: {
          account: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log(this.login);
        this.login.password = this.getMd5(this.login.password);
        let _this = this;

        _this.$http.post(
          '/sso/user/login',
          this.login
        ).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            _this.$message.success("登录成功");
            // _this.$router.push({path: "/", query: {loginUser:res.data.result}});
            _this.$router.push("/");
            sessionStorage.setItem("loginUser", JSON.stringify(res.data.result))
            localStorage.setItem("account", res.data.result.account)
          } else {
            _this.$message.error(res.data.message)
          }
        }).catch((err) => {
          console.log(err);
        });

        // _this.$http.post('/api/user/login',
        //   this.login,
        //   {
        //     headers: {
        //       Authorization: JSON.parse(sessionStorage.getItem("loginUser")).accessToken,
        //     }
        //   }).then((res) => {
        //   console.log(res);
        // });


      },
      getMd5(str) {
        var md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest('hex');
      }
    }, mounted() {
      this.login.account = localStorage.getItem("account")
    }
  }
</script>

<style>
  .el-form-item__content {
    margin-left: 0px !important;
  }

  .el-input--small .el-input__inner {
    height: 50px;
  }

  .el-button--small, .el-button--small.is-round {
    padding: 20px 15px;
  }

  #main-pic {
    height: 600px;
    background-image: url("../../assets/login_bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;

  }

  .login {
    height: 370px;
    width: 400px;
    padding: 30px;
    margin-top: 100px;
    margin-right: 100px;
    z-index: 500;
    float: right;
    background-color: white;
    box-shadow: 0 0 20px #666666;
  }

  a:hover {
    color: #5daf34;
  }

  .el-input__inner {
    border-radius: 0px;
  }
</style>
