<script setup>
import {ref} from 'vue'
defineOptions({name:'Upload'})

const fileList=ref([])
const uploadFileList=ref([])

const fileUpload=((response,file,filelist)=>{
    console.log(response);
    console.log(file);
    console.log(filelist);
})
const beforeUpload=((file)=>{
    console.log(file);
})
const getList=((file,filelist)=>{
    console.log(file);
    console.log(filelist[0].name);
    const fileList={}
    for(const key in file){
        fileList[key]=file[key]
    }
    uploadFileList.value.push({...fileList})
})

console.log(fileList.value.length);
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
        :on-success=fileUpload
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
                    prop="address"
                    label="状态">
                </el-table-column>
        </el-table>
    </template>
    </el-main>
    <el-footer v-if="uploadFileList.length>0">
        <el-row type="flex" class="row-bg">
            <el-col :span="20"><div class="grid-content bg-purple">一共选择了n个文件</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"><el-button type="primary" plain>开始上传</el-button></div></el-col>
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
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
