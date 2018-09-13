<template>
    <div class="mainContent">
      <div class="M-title">
        <h2>我的大学语文</h2>
      </div>
      <div class="M-content">
        <el-form :model="form" label-width="100px">
          <el-form-item label="内容标题">
            <el-input v-model="form.title" style="width: 280px;"></el-input>
          </el-form-item>
          <el-form-item label="选择所在模块">
            <el-select v-model="form.module" placeholder="请选择模块" style="width: 280px;">
              <el-option label="学生风采" value="student"></el-option>
              <el-option label="学院新闻" value="school"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章内容">
            <!-- <quill-edit editorContent="testText" @changeContent="changeContent"></quill-edit> -->
            <editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存配置</el-button>
            <el-button type="primary" @click="onSubmit">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
// import quillEdit from '../common/quilledit.vue'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  name: 'love',
  components: {
    Editor
  },
  data () {
    return {
      testText: '你好',
      form: {
        title: '',
        module: ''
      },
      tinymceHtml: '',
      editorInit: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu'
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    onSubmit (content) {
      console.log(content)
    },
    changeContent (msg) {
      console.log(msg)
    }
  }
}
</script>

<style lang='scss' scoped>
.carousel-Box {
  width: 70%;
  margin: 0 auto;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
