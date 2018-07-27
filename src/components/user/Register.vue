<template>
  <div class="w100p">

    <div class="tc bgf ml300 mr300 pb20 h100p">
      <img src="../../assets/logo.png" id="logo" style="width: 50px;height: 50px;" class="mt50"/>
      <h1 class="mt50">欢迎注册美味账号</h1>


      <div class="mt50" v-show="verifyCodeDivShow">
        <el-form :inline="true" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="ruleForm.phone" style="width: 320px"/>
          </el-form-item>
        </el-form>

        <el-form :inline="true" id="verifyForm">
          <el-form-item label="验证码">
            <el-input v-model="ruleForm.verifyCode" style="width: 225px"/>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" id="verifyCode">获取验证码</el-button>
        </el-form>
        <el-button type="success" @click="verifyRegister" style="width: 275px;margin-top: 50px;">立即注册</el-button>
        <div class="pd20">
          <el-checkbox v-model="checked"/>
          <span>注册帐号即表示您同意并愿意遵守 用户协议和 隐私政策</span>
        </div>
      </div>

      <div class="mt50" v-show="passwordDivShow">
        <el-form :inline="true" :model="passRule" status-icon :rules="rules2" ref="passRule">

          <el-form-item label="密码" prop="pass" style="padding-left: 28px;">
            <el-input type="password" v-model="passRule.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="passRule.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item class="mt50">
            <el-button type="success" style="padding: 13px 145px;" @click="submitPass('passRule')">确定</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>

  </div>
</template>

<script>
  import crypto from 'crypto' //md5

  export default {
    name: "register",
    data() {

      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6) {
            callback(new Error('密码长度不小于6位'));
          } else {
            if (this.passRule.checkPass !== '') {
              this.$refs.passRule.validateField('checkPass');
            }
            callback();
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.passRule.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        checked: true,
        verifyCodeDivShow: true,
        passwordDivShow: false,
        ruleForm: {
          phone: '',
          verifyCode: '',
          value: ''

        }, passRule: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        verifyCode: ''

      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.sendCode();
          } else {
            return false;
          }

        });
      }, submitPass(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var userBase = {
              phone: this.ruleForm.phone,
              password: this.getMd5(this.passRule.pass)
            }
            let _this = this;
            _this.$http.post('/api/user/register', userBase).then((res) => {
              if (res.data.code == 200) {
                this.$message({
                  message: "注册成功,跳转到登录页...",
                  type: 'success'
                });
                setTimeout(function () {
                  _this.$router.replace("/login");
                }, 2000);
              } else {
                this.popMessage('error', res.data.message);
              }
            }).catch((err) => {
              console.log(err);
            });
          } else {
            return false;
          }
        });
      },
      verifyRegister() {

        if (this.ruleForm.verifyCode == this.verifyCode && this.verifyCode) {
          this.verifyCodeDivShow = !this.verifyCodeDivShow;
          this.passwordDivShow = !this.passwordDivShow;
        } else {

          this.popMessage('error', '验证码错误');
        }
      },
      sendCode() {

        let _this = this;
        _this.$http.post('/sso/common/getVerifyCode', {
          phone: _this.ruleForm.phone
        }).then((res) => {

          this.verifyCode = res.data.result;
          console.log(this.verifyCode);
          var verifyCodeDom = document.getElementById("verifyCode");
          verifyCodeDom.setAttribute("disabled", "");
          var sec = 60
          var verifyCode = setInterval(function () {
            sec--;
            verifyCodeDom.innerHTML = "<span>剩余时间" + sec + "s</span>";
            if (sec == 0) {
              verifyCodeDom.innerHTML = "<span>重新发送</span>";
              clearInterval(verifyCode);
              verifyCodeDom.removeAttribute("disabled");
              //设置验证码失效
              this.verifyCode = ''
            }
          }, 1000);

        }).catch((err) => {
          this.popMessage('error', '系统内部错误');
          return;
        });


      },
      popMessage(type, msg) {
        this.$message({
          message: msg,
          type: type,
          center: true
        });
      },
      getMd5(str) {
        var md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest('hex');
      }

    }
  }
</script>

<style>
  .el-input--small .el-input__inner {
    height: 40px;
    line-height: 40px;

  }

  .el-button--small, .el-button--small.is-round {
    padding: 13px 15px;
    border-radius: 0px;
  }

  .el-input__inner {
    border-radius: 0px;
  }

  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 380px;
  }

</style>
