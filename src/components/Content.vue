<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key,index) in object">
        {{index+1}}. {{ key }} : {{ value }}
      </li>
    </ul>
    <h1>
      {{detail()}}
    </h1>
    <div v-text="msg"></div>
    <div v-html="msg"></div>
    <p v-if="seen">条件指令1</p>
    <p v-else="seen">条件指令2</p>
    <input type="button" v-on:click="doSomthing" value="点击我"/>
    <input type="button" @click="doSomthing" value="点击我"/>
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <input type="text" v-model="inputText" placeholder="双向绑定效果"/>
    <input type="text" v-model.lazy="inputText" placeholder="这里是懒加载效果 失去焦点才会改变"/>
    <p>{{inputText}}</p>
    <p id="info"></p>

    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span><br/>

    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>

    <!--<indexComponent :data="message"></indexComponent>-->

    <!--<el-row>-->
      <!--<el-col :span="12">-->
        <!--<el-form ref="form" :model="form" label-width="80px">-->
          <!--<el-form-item label="活动名称">-->
            <!--<el-input v-model="form.name"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="活动区域">-->
            <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
              <!--<el-option label="区域一" value="shanghai"></el-option>-->
              <!--<el-option label="区域二" value="beijing"></el-option>-->
            <!--</el-select>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="活动时间">-->
            <!--<el-col :span="11">-->
              <!--<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
            <!--</el-col>-->
            <!--<el-col class="line" :span="2">-</el-col>-->
            <!--<el-col :span="11">-->
              <!--<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"-->
                              <!--style="width: 100%;"></el-time-picker>-->
            <!--</el-col>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="即时配送">-->
            <!--<el-switch v-model="form.delivery"></el-switch>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="活动性质">-->
            <!--<el-checkbox-group v-model="form.type">-->
              <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
              <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
              <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
              <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
            <!--</el-checkbox-group>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="特殊资源">-->
            <!--<el-radio-group v-model="form.resource">-->
              <!--<el-radio label="线上品牌商赞助"></el-radio>-->
              <!--<el-radio label="线下场地免费"></el-radio>-->
            <!--</el-radio-group>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="活动形式">-->
            <!--<el-input type="textarea" v-model="form.desc"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
            <!--<el-button>取消</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      <!--</el-col>-->
      <!--<el-col :span="12">-->
        <!--<el-button @click="show2 = !show2">Click Me</el-button>-->
        <!--<div style="display: flex; margin-top: 20px; height: 100px;">-->
          <!--<transition name="el-zoom-in-center">-->
            <!--<div v-show="show2" class="transition-box">.el-zoom-in-center</div>-->
          <!--</transition>-->

          <!--<transition name="el-zoom-in-top">-->
            <!--<div v-show="show2" class="transition-box">.el-zoom-in-top</div>-->
          <!--</transition>-->

          <!--<transition name="el-zoom-in-bottom">-->
            <!--<div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>-->
          <!--</transition>-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--<div>-->

      <!--<el-row>-->
        <!--<el-col :span="12">-->
          <!--<input type="button" @click="doSomthing" value="点击我"/>-->

        <!--</el-col>-->
        <!--<el-col :span="12">-->

        <!--</el-col>-->
      <!--</el-row>-->

    <!--</div>-->
  </div>
</template>

<script>
  import indexComponent from './Index';

  export default {
    data() {
      return {
        items: [
          {message: 'Foo'},
          {message: 'Bar'},
          {message: 'java'},
          {message: 'python'}
        ],
        object: {
          name: '菜鸟教程',
          url: 'http://www.runoob.com',
          slogan: '学的不仅是技术，更是梦想！'
        },
        msg: "<span>vue 学习</span>",
        seen: false,
        message: "xuweichao",
        inputText: "",
        checked: false,
        checkedNames: [],
        selected: '',
        show2: true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created() {
      let _this = this;
      _this.$http.post('/api/EdasClient/index', {
        userName: _this.message
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    },
    methods: {
      detail() {
        return "method info back!!";
      },
      doSomthing(event) {
        console.log(event.target.tagName);
        // 命名的路由
        this.$router.push({path: '/user/love',query:{name:this.message}});
      },
      onSubmit() {
        console.log('submit!');
        console.log(this.form);
      }
    },
    computed: {//computed 对象内的方法如果在初始化时绑定到元素上的事件会先执行一次这个方法
      reversedMessage() {
        // return this.message.split("").reverse().join("");
        return Date.now();
      }
    },
    watch: {
      inputText(val, oldVal) {
        console.log(val + "--" + oldVal);
      }
    },
    components: {
      indexComponent
    }


  }
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
