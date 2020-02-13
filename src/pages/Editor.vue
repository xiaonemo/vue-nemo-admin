<template>
  <div class="page">
    <h3>富文本编辑器</h3>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    <div class="mt12">
      <el-button type="primary">提交</el-button>
    </div>
    
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';
  import { quillEditor } from 'vue-quill-editor';
  export default {
    data: function(){
        return {
            content: '',
            editorOption: {
                placeholder: 'Hello World'
            }
        }
    },
    components: {
        quillEditor
    },
    methods: {
        onEditorChange({ editor, html, text }) {
            this.content = html;
        },
        submit(){
            console.log(this.content);
            this.$message.success('提交成功！');
        }
    }
  }
</script>

<style>
  .page {
    background: #fff;
    padding: 12px;
  }
  .ql-container {
    min-height: 400px;
  }
  .mt12 {
    margin-top: 12px;
  }
</style>
