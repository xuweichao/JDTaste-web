<template>
  <div>
    <div class="tl">
      <el-row>
        <el-col :span="12"><h3>商品规格模板列表</h3></el-col>
        <el-col :span="12" class="tar">
          <el-button type="success" icon="el-icon-plus" @click="addSpecificTmp">新增</el-button>
        </el-col>
      </el-row>

    </div>
    <div class="tl">
      <el-collapse v-model="activeNames" @change="handleChange">


        <el-collapse-item v-for="item,key in specificTmpList" :key="key" :title="item.classifyName" :name="key">

          <el-tag @close="handleClose(tag)" class="m5" v-for="obj,oIndex in item.specifics" :key="oIndex">
            {{obj.tag}}
          </el-tag>
          <div>
            <el-button type="success" size="mini" icon="el-icon-edit" class="ml5" @click="handleEditTmp(key)">编辑
            </el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" class="ml5" @click="handleDeleteTmp(key)">删除
            </el-button>
          </div>
        </el-collapse-item>

      </el-collapse>
    </div>

    <el-dialog
      title="模板规格选择"
      :visible.sync="dialogVisible"
      width="42%"
      :before-close="handleClose">

      <div class="tl pd10">
        分类名称：
        <el-select v-model="classifyIndex" clearable placeholder="选择主分类" class="mb10" v-show="selectorShow">
          <el-option
            v-for="item,index in classifyList"
            :key="item.id"
            :label="item.name"
            :value="index">
          </el-option>
        </el-select>
        <span class="f14 fb" v-show="!selectorShow" >{{specificTmpName}}</span>
      </div>

      <div class="tl">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedSpecifics" @change="handleCheckedSpecificChange">
          <el-checkbox v-for="item,index in specifics" :label="item.id" :key="index">{{item.tag}}</el-checkbox>
        </el-checkbox-group>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectedSpecifics">确 定</el-button>
     </span>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        specifics: null,
        activeNames: ['1'],
        dialogVisible: false,
        classifyList: null,
        classifyIndex: null,
        checkAll: false,
        checkedSpecifics: [],
        isIndeterminate: false,
        selectorShow: true,
        selectSpecifics: [],
        specificTemp: {
          id: 0,
          classifyId: 0,
          classifyName: '',
          specifics: ''
        },
        specificTmpList: null,
        specificTmpName:''
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      handleClose(done) {//弹出框关闭
        this.checkedSpecifics = [];
        done();
      },
      saveSelectedSpecifics() {
        this.dialogVisible = false;
        let _this = this;
        _this.specifics.forEach(function (obj, index) {
          _this.checkedSpecifics.forEach(function (o, i) {
            if (obj.id == o) {
              _this.selectSpecifics.push(obj);
            }
          });
        });
        _this.specificTemp.classifyId = _this.classifyList[_this.classifyIndex].id;
        _this.specificTemp.classifyName = _this.classifyList[_this.classifyIndex].name;
        _this.specificTemp.specifics = JSON.stringify(_this.selectSpecifics);

        console.log(_this.specificTemp);
        //保存
        _this.$http.post(
          '/mgr/specific/addTmp',
          _this.specificTemp
        ).then((res) => {
          _this.specificTmpList = res.data.result;

          _this.specificTmpList.forEach(function (obj, index) {
            obj.specifics = JSON.parse(obj.specifics);
          });
          _this.checkedSpecifics = [];
          _this.selectSpecifics = [];
          _this.checkAll = false;
          _this.classifyIndex = null;
        }).catch((err) => {
          console.log(err);
        });

      },
      addSpecificTmp() {//新增按钮点击
        this.dialogVisible = true;
        this.selectorShow = true;
      },
      handleEditTmp(key) {//编辑按钮点击
        this.dialogVisible = true;
        this.selectorShow = false;
        let _this = this;
        _this.specificTmpList[key].specifics.forEach(function (o, i) {
          _this.checkedSpecifics.push(o.id);
        });
        _this.specificTmpName=_this.specificTmpList[key].classifyName;
        _this.specificTemp.id=_this.specificTmpList[key].id;
        _this.specificTemp.classifyId=_this.specificTmpList[key].classifyId;
        _this.classifyIndex=key;
      },
      handleDeleteTmp(key) {
        console.log("-----------------" + key);
        let _this = this;
        this.$confirm('删除该分类模板, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$http.get(
            '/mgr/specific/delTmp/' + _this.specificTmpList[key].id
          ).then((res) => {

            _this.specificTmpList = res.data.result;
            _this.specificTmpList.forEach(function (obj, index) {
              obj.specifics = JSON.parse(obj.specifics);
            });

            this.$message({
              type: 'success',
              message: '删除成功!'
            });

          }).catch((err) => {
            console.log(err);
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      getAllClassify() {
        let _this = this;
        _this.$http.get('/mgr/classify/all',
        ).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            _this.classifyList = res.data.result;
          }
        }).catch((err) => {
          console.log(err);
        });
      },
      getAllspecificTmp() {
        let _this = this;
        _this.$http.get('/mgr/specific/allTmp',
        ).then((res) => {
          if (res.data.code == 200) {
            _this.specificTmpList = res.data.result;
            _this.specificTmpList.forEach(function (obj, index) {
              obj.specifics = JSON.parse(obj.specifics);
            });

          }
        }).catch((err) => {
          console.log(err);
        });
      },
      handleCheckAllChange(val) {
        if (val) {
          for (var i = 0; i < this.specifics.length; i++) {
            this.checkedSpecifics.push(this.specifics[i].id);
          }
        } else {
          this.checkedSpecifics = [];
          this.isIndeterminate = false;
        }
      },
      handleCheckedSpecificChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.specifics.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.specifics.length;
      }
    },
    created() {
      let _this = this;
      _this.$http.get('/mgr/specific/all',
      ).then((res) => {
        if (res.data.code == 200) {
          _this.specifics = res.data.result;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    mounted() {

      this.getAllClassify();
      this.getAllspecificTmp();
    }
  }
</script>

<style>
  .el-button--mini, .el-button--mini.is-round {
    padding: 5px 15px;
  }

  .el-dialog__body {
    padding: 10px 20px;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0;
    padding: 10px;
  }
</style>
