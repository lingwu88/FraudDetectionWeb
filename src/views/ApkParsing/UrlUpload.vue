<script setup>
import {ref} from 'vue'
defineOptions({name:'UrlUpload'})
const textarea=ref('')

const upload=()=>{
  const formData=new FormData()
  formData.append()
}
</script>

<template>
  <el-input
    type="textarea"
    :rows="15"
    placeholder="请输入需要分析的url"
    v-model="textarea"
    resize="none"
    class="textArea"
    >
  </el-input>
  <el-button type="primary" class="button" @click="upload">上传分析</el-button>
</template>

<style scoped>
.textArea{
  font-size: 17px;
}
.button{
  font-size: 15px;
  font-family: '宋体';
  position: relative;
  left: 88%;
  transform: translateY(-150%);
}
</style>
