<template>
  <div>
    <div class="pd10">
      <el-row>
        <el-col :span="12" class="tl"><h3>规格列表</h3></el-col>
        <el-col :span="12" class="tar">
          <el-button type="success" icon="el-icon-plus" @click="dialogFormVisible  = true">新增</el-button>
        </el-col>
      </el-row>
      <el-dialog title="新增规格" :visible.sync="dialogFormVisible">
        <el-form :model="productSpecific">
          <el-form-item label="规格名称" :label-width="formLabelWidth">
            <el-input v-model="productSpecific.tag"></el-input>
            <input v-model="productSpecific.id" type="hidden"/>
          </el-form-item>
          <el-form-item label="规格代码" :label-width="formLabelWidth">
            <el-input v-model="productSpecific.code" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveSpecific(false) ">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="规格名称">
        </el-table-column>
        <el-table-column
          prop="code"
          label="规格代码">
        </el-table-column>

        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete">删除</el-button>
            <el-button size="small" type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "admin-specific",
    methods: {
      handleDelete(row) {
        let _this = this;
        this.$confirm('删除该规格数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$http.get('/mgr/specific/del/'+row.id,
          ).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              _this.tableData = res.data.result;
            }
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
      handleEdit(row) {
        this.dialogFormVisible=true;
        this.productSpecific.code = row.code;
        this.productSpecific.id = row.id;
        this.productSpecific.tag = row.tag;
      },
      saveSpecific(v) {
        let _this = this;
        _this.$http.post('/mgr/specific/add',
          _this.productSpecific
        ).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            _this.dialogFormVisible = v;
            _this.tableData = res.data.result;
            _this.productSpecific.code = '';
            _this.productSpecific.id = 0;
            _this.productSpecific.tag = '';
          }
        }).catch((err) => {
          console.log(err);
        });

      }

    },
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        formLabelWidth: '75px',
        productSpecific: {
          id: 0,
          tag: '',
          code: ''
        }

      }
    },
    mounted() {
      let _this = this;
      _this.$http.get('/mgr/specific/all',
      ).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          _this.tableData = res.data.result;
        }
      }).catch((err) => {
        console.log(err);
      });
    }

  }
</script>

<style>
  .cell {
    text-align: left;
  }

  .el-dialog {
    width: 30%;
  }

  .el-dialog__body {
    padding: 30px 40px;
  }

  .el-button--small {
    padding: 5px;
  }
</style>
