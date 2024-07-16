<script setup>
import {ref} from 'vue'
import {uploadFile} from '@/api/api.js'
import axios from 'axios'
defineOptions({name:'Upload'})

const formData = new FormData()
const fileList=ref([])
const uploadFileList=ref([])
const progressPercent=ref()

const fileUpload=(()=>{
  uploadFileList.value.forEach(file=>{
    formData.append('file',file.raw)
  })
  const config = {
    onUploadProgress:(progressEvent) =>{
      //progressEvent.loaded:已上传文件大小
      //progressEvent.total：被上传文件的总大小
      progressPercent.value=Number(((progressEvent.loaded/progressEvent.total)*90).toFixed(2))
    }
  }
  axios.post('http://m1.oboard.eu.org:5000/files/upload',formData).then(res=>{
    progressPercent.value=100
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
})
const beforeUpload=((file)=>{
    console.log(file);
})
const getList=((file,filelist)=>{
    console.log(file);
    const fileList={}
    for(const key in file){
        fileList[key]=file[key]
    }
    uploadFileList.value.push({...fileList})
})
</script>

<template>
    <el-container>
    <el-main>
    <el-upload
        drag
        :auto-upload="false"
        :show-file-list="false"
        :file-list=fileList
        action="https://jsonplaceholder.typicode.com/posts/"
        :before-upload=beforeUpload
        :on-change=getList
        multiple
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传apk文件</div>
    </el-upload>
    <template v-if="uploadFileList.length>0">
        <el-table
                :data=uploadFileList
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="文件"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="分析环境"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="分析时间">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="解密密码">
                </el-table-column>
                <el-table-column
                    width="150px"
                    prop="address"
                    label="状态">
                    <el-progress
                    :color="blue"
                    :text-inside="true"
                    :stroke-width="15"
                    :percentage="progressPercent"
                    >
                  </el-progress>
                </el-table-column>
        </el-table>
    </template>
    </el-main>
    <el-footer v-if="uploadFileList.length>0">
        <el-row type="flex" class="row-bg">
            <el-col :span="20"><div class="content bg">一共选择了{{uploadFileList.length}}个文件</div></el-col>
            <el-col :span="4"><div class="content bg"><el-button type="primary" @click="fileUpload" plain>上传</el-button></div></el-col>
        </el-row>
    </el-footer>
    </el-container>
</template>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg{
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .content {
    padding-left: 20px;
    font-size: 17px;
    color:black;
    border-radius: 4px;
    min-height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
