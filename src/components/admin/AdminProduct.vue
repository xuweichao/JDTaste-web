<template>
  <div>
    <div class="tal">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="选择分类">
          <el-cascader
            :options="options"
            :show-all-levels="false"
            v-model="form.classifyCode"
            expand-trigger="hover"
            @change="handleChange"
            change-on-select
          ></el-cascader>
        </el-form-item>
        <el-form-item label="商品编号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="库存数量">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="简单描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="商品规格">
          <el-input  v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="商品图片">


        </el-form-item>

      </el-form>
    </div>


    <!--商品 图片-->
    <div class=" bdc rad8 pd20 tl m0_30">
      <el-upload
        action="/mgr/common/imgUpload"
        list-type="picture-card"
        accept="image/*"
        :limit="imgLimit"
        :file-list="productImgs"
        :multiple="isMultiple"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :on-exceed="handleExceed"
        :on-error="imgUploadError">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <!--商品详情-->
    <div class="m0_30">

      <!-- 图片上传组件辅助-->
      <el-upload
        class="avatar-uploader"
        :action="serverUrl"
        :headers="header"
        :show-file-list="false"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :before-upload="beforeUpload">
      </el-upload>
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>
    <el-form class="mt20">

      <el-form-item >
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <!--<el-button>取消</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{'header': 1}, {'header': 2}],               // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
    [{'direction': 'rtl'}],                         // text direction
    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image'],
    ['clean']

  ]
  export default {
    data() {
      return {
        quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
        content: null,
        editorOption: {
          placeholder: '',
          theme: 'snow',  // or 'bubble'
          modules: {
            toolbar: {
              container: toolbarOptions,
              handlers: {
                'image': function (value) {
                  if (value) {
                    // 触发input框选择图片文件
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        },
        serverUrl: '/mgr/common/imgUpload',  // 这里写你要上传的图片服务器地址
        header: {
          // token: sessionStorage.token
        }, // 有的图片服务器要求请求头需要有token
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          classifyCode: []
        },
        options: []
        ,
        dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
        imgLimit: 6
      }
    },
    methods: {
      onEditorChange({editor, html, text}) {//内容改变事件
        console.log("---内容改变事件---")
        this.content = html
        console.log(html)
      },
      // 富文本图片上传前
      beforeUpload() {
        // 显示loading动画
        this.quillUpdateImg = true
      },
      uploadSuccess(res, file) {
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        console.log(res);
        let quill = this.$refs.myQuillEditor.quill
        // 如果上传成功
        if (res.code == 200) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.result为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.result)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          this.$message.error('图片插入失败')
        }
        // loading动画消失
        this.quillUpdateImg = false
      },
      // 富文本图片上传失败
      uploadError() {
        console.log("222");
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
      },
      onSubmit() {
        console.log('submit!');
        console.log(this.productImgs);
      },
      handleRemove(file, fileList) {//移除图片
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {//预览图片时调用
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

      beforeAvatarUpload(file) {//文件上传之前调用
        console.log(file);
        const isJPG = true;
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {//图片上传成功
        console.log(res);
        console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleExceed(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过6张!');
        console.log(file, fileList);
      },
      imgUploadError(err, file, fileList) {
        console.log(err)
        this.$message.error('上传图片失败!');
      },
      handleChange(val) {
        console.log("--" + val)
      }

    },
    mounted() {
      let _this = this;
      _this.$http.get(
        '/mgr/classify/select',
      ).then((res) => {
        console.log(res.data.result);
        this.options = res.data.result;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
</script>

<style>
  .ql-editor.ql-blank, .ql-editor {
    height: 350px;
  }
</style>
