<script setup>
import {ref} from 'vue'
defineOptions({name:'ApkInformation'})
const labelSize=ref({
  fontSize:'20px'
})
</script>


<template>
  <page-contain title="报告分析">
    <el-descriptions title="Apk包名" column="2" class="label">
      <el-descriptions-item labelClassName="my-label">
        <template #label >
          文件信息
        </template>
      </el-descriptions-item>
      <el-descriptions-item label="APK信息" labelClassName="my-label"></el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
  </page-contain>
</template>

<style scoped>
.label{

}
.label  ::v-deep .my-label{
    font-size: 20px;
}
.my-label{
  font-size: 30px!important;
}
</style>
