<template>
  <div>
    <div class="mt5">
      <div class="main-item  mt5" v-show="mainItemAdd">
        <!--添加分类-->
        <el-row class="pd10 bgd rad5">
          <el-col :span="6" class="h30">
            <el-select v-model="newClassify.parentId" clearable placeholder="选择主分类">
              <el-option
                v-for="item in classifyList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="h30">
            <el-input v-model="newClassify.name" placeholder="分类名称"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="newClassify.code" placeholder="分类编号"></el-input>
          </el-col>
          <el-col :span="6" class="tar">
            <el-button type="success" icon="el-icon-check" circle @click="handleSave(0,$event)"></el-button>
            <el-button type="danger" icon="el-icon-minus" circle @click="handleItemDelete(-1,$event)"></el-button>
          </el-col>
        </el-row>
      </div>
      <!--标题行-->
      <div class="mt5">
        <el-row class="pd10 bgd rad5 ">
          <el-col :span="1" class="tac">
            <el-button icon="el-icon-refresh" circle></el-button>
          </el-col>
          <el-col :span="5" class="tac">
            <span class="f14">分类名称</span>
          </el-col>
          <el-col :span="5">
            <span class="f14">分类编号</span>
          </el-col>
          <el-col :span="13" class="tar">
            <el-button icon="el-icon-plus" type="success" circle @click="handleMainItemAdd(0,$event)"></el-button>
          </el-col>
        </el-row>
      </div>


      <div class="main-item mt5" v-for="item,index in classifyList" v-model="classifyList[index]" :key="index">
        <el-row class="pd10 bgd rad5 ">
          <el-col :span="1">
            <el-button icon="el-icon-arrow-down" class="childrenItemShow" circle
                       @click="displayChildren($event)"></el-button>
          </el-col>
          <el-col :span="5" class="h30">
            <span class="f16 fb displayName ">{{item.name}}</span>
            <el-input class="editName hidden" v-model="item.name"></el-input>
          </el-col>
          <el-col :span="5">
            <span class="f16 fb displayName ">{{item.code}}</span>
            <el-input class="editName hidden" v-model="item.code"></el-input>
          </el-col>
          <el-col :span="13" class="tar">
            <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit($event)"></el-button>
            <el-button class="hidden" type="success" icon="el-icon-check" circle
                       @click="handleUpdate(-1,index,$event)"></el-button>
            <el-button type="danger" icon="el-icon-minus" circle @click="handleItemDelete(item.id,$event)"></el-button>
          </el-col>
        </el-row>

        <div class="mt5 hidden">
          <!--子分类列表-->
          <el-row class="pd10 bgffd rad5 mt5" v-for="child,cIndex in item.children" :key="child.id">
            <el-col :span="6" class="h30">
              <span class="f16 fb displayName">{{child.name}}</span>
              <el-input class="editName hidden" v-model="child.name"></el-input>
            </el-col>
            <el-col :span="5">
              <span class="f16 fb displayName">{{child.code}}</span>
              <el-input class="editName hidden" v-model="child.code"></el-input>
            </el-col>
            <el-col :span="13" class="tar">
              <el-button type="primary" icon="el-icon-edit" circle
                         @click="handleEdit($event)"></el-button>
              <el-button class="hidden" type="success" icon="el-icon-check" circle
                         @click="handleUpdate(cIndex,index,$event)"></el-button>
              <el-button type="danger" icon="el-icon-minus" circle
                         @click="handleItemDelete(child.id,$event)"></el-button>
            </el-col>
          </el-row>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: "admin-classify",
    data() {
      return {
        newClassify: {//新添加主类
          id: 0,
          name: '',
          code: '',
          parentId: null
        },
        editClassify: {//编辑分类
          id: 0,
          name: '',
          code: '',
          parentId: 0
        },
        classifyList: null,
        mainItemAdd: false,
      }
    },
    methods: {
      handleEdit(event) {

        console.log(event.currentTarget)
        var itemDiv = event.currentTarget.parentNode.parentNode;
        console.log(itemDiv)
        event.currentTarget.nextSibling.nextSibling.style.display = 'inline';
        event.currentTarget.style.display = 'none';
        itemDiv.querySelectorAll("span.displayName").forEach(function (value, index, array) {
          value.style.display = "none";
        });
        itemDiv.querySelectorAll("div.editName").forEach(function (value, index, array) {
          value.style.display = "block";
        });
      },
      handleUpdate(cIndex, index, event) {

        console.log(cIndex)
        console.log(index)
        if (cIndex == -1) {//主分类
          this.editClassify.id = this.classifyList[index].id;
          this.editClassify.name = this.classifyList[index].name;
          this.editClassify.code = this.classifyList[index].code;
          this.editClassify.parentId = this.classifyList[index].parentId;
        } else {//子分类
          this.editClassify.id = this.classifyList[index].children[cIndex].id;
          this.editClassify.name = this.classifyList[index].children[cIndex].name;
          this.editClassify.code = this.classifyList[index].children[cIndex].code;
          this.editClassify.parentId = this.classifyList[index].id;
        }

        var currentTarget = event.currentTarget;
        var itemDiv = currentTarget.parentNode.parentNode;

        currentTarget.previousSibling.previousSibling.style.display = 'inline';
        currentTarget.style.display = 'none';

        console.log(this.editClassify);
        let _this = this;
        _this.$http.post(
          '/mgr/classify/add',
          _this.editClassify
        ).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            _this.classifyList = res.data.result;
            _this.editClassify.name = '';
            _this.editClassify.code = '';
            _this.editClassify.parentId = 0;

            itemDiv.querySelectorAll("span.displayName").forEach(function (value, index, array) {
              value.style.display = "block";
            });
            itemDiv.querySelectorAll("div.editName").forEach(function (value, index, array) {
              value.style.display = "none";
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      },
      handleSave() {
        let _this = this;
        if (this.newClassify.code == '' || _this.newClassify.name == '') {
          _this.$message.error("分类名称与编码不能为空！");
        } else {

          _this.$http.post(
            '/mgr/classify/add',
            _this.newClassify
          ).then((res) => {
            if (res.data.code == 200) {
              this.mainItemAdd = false;
              _this.classifyList = res.data.result;
              _this.newClassify.name = '';
              _this.newClassify.code = '';
              _this.newClassify.parentId = null;
            }
          }).catch((err) => {
            console.log(err);
          });
        }
      },
      handleMainItemAdd(id, event) {//主分类添加
        console.log(id);
        this.mainItemAdd = true;
      },
      handleItemDelete(id, event) {
        console.log(id);
        console.log(event.currentTarget);
        if (id == -1) {
          this.mainItemAdd = false;
        } else if (id == 0) {
          event.currentTarget.parentNode.parentNode.parentNode.style.display = "none";
        } else {
          let _this = this;
          this.$confirm('删除该分类, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {

            _this.$http.get(
              '/mgr/classify/del/' + id
            ).then((res) => {
              console.log(res.data.result);
              _this.classifyList = res.data.result;
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
        }
      },
      displayChildren(event) {
        var childDiv = event.currentTarget.parentNode.parentNode.nextSibling.nextSibling;
        if (childDiv.style.display == 'block') {//隐藏
          childDiv.style.display = 'none';
          event.currentTarget.querySelector("i").setAttribute("class", "el-icon-arrow-down")
        } else {//显示
          childDiv.style.display = 'block';
          event.currentTarget.querySelector("i").setAttribute("class", "el-icon-arrow-up")
        }
      },
      getAllClassify() {
        let _this = this;
        _this.$http.get(
          '/mgr/classify/all'
        ).then((res) => {
          _this.classifyList = res.data.result;
        }).catch((err) => {
          console.log(err);
        });
      }

    },
    mounted: function () {

      this.getAllClassify();
    }
  }
</script>

<style>
  .el-input {
    width: 80%;
  }

  .el-button.is-circle {
    padding: 8px;
  }
</style>
