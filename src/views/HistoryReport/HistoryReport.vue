<script setup>
import { ref , reactive} from 'vue'
import PageContain from '@/components/PageContain.vue'
import ReportCard from '@/components/ReportCard.vue'

const fileForm=ref({
        time:'',
        type:'',
        status:[],
        keyword:''
})

const daySelect=[
        {
                label:'近7天内',
                value:7
        },
        {
                label:'近30天内',
                value:30
        },
        {
                label:'全部',
                value:1
        }
]

const typeSelect=[
        {
                label:'文件分析',
                value:'file'
        },
        {
                label:'url分析',
                value:'url'
        }
]

const reportList=ref([
        {
            name:'dfadsf.apk',
            md5:'fdafaadf',
            time:'2022-4-12:10:11:00',
            environment:'Android 11.0',
            status:'已分析',
            score:12,
            IOC:'',
            tag:''
        },
        {
            name:'dfadsf.apk',
            md5:'fdafaadf',
            time:'2022-4-12:10:11:00',
            environment:'Android 11.0',
            status:'已分析',
            score:12,
            IOC:'',
            tag:''
        }
])
</script>

<template>
        <PageContain title="历史报告">
        <el-form :inline="true"  :model="fileForm" label-width="0px" class="form">
                <el-form-item  props="status">
                        <el-button @click="">待分析</el-button>
                        <el-button @click="">分析中</el-button>
                        <el-button @click="">分析完成</el-button>
                        <el-button @click="">分析失败</el-button>
                </el-form-item>
                <el-form-item props="time" class="formItem">
                        <el-select v-model="fileForm.time"  placeholder="近7天">
                                <el-option
                                v-for="item in daySelect"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >        
                                </el-option>
                        </el-select>
                </el-form-item>
                <el-form-item props="type" class="formItem">
                        <el-select v-model="fileForm.type" placeholder="文件分析">
                                <el-option
                                v-for="item in typeSelect"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                >        
                                </el-option>
                        </el-select>
                </el-form-item>
                <el-form-item props="keyword" class="wordInput"> 
                        <el-input
                        v-model="fileForm.keyword"
                        placeholder="placeholder"
                        clearable
                        @clear="search"
                        >
                        </el-input>
                </el-form-item>
                <el-form-item>
                        <el-button
                        type="primary"
                        @click="search"
                        >
                        搜索
                        </el-button>
                </el-form-item>
        </el-form>
        <ReportCard v-for="report in reportList" :key="report.name" :obj='report'></ReportCard>
        </PageContain>
</template>

<style scoped>
.wordInput{
        width: 20%;
}
.formItem{
        width: 10%;
}
</style>
