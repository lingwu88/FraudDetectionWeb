<script  setup>
import Upload from '@/views/ApkParsing/Upload.vue'
import UrlUpload from '@/views/ApkParsing/UrlUpload.vue'
import {ref} from 'vue'
const activeName=ref('first')
</script>

<template>
    <page-contain title="Apk解析">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
            <el-tab-pane label="文件上传" name="first"><Upload></Upload></el-tab-pane>
            <el-tab-pane label="url上传" name="second"><UrlUpload></UrlUpload></el-tab-pane>
        </el-tabs>
    </page-contain>
</template>

<style lang="scss" scoped>


</style>
