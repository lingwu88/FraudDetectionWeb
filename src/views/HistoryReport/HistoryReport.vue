<script setup>
import { ref , reactive,onMounted} from 'vue'
import PageContain from '@/components/PageContain.vue'
import ReportCard from '@/components/ReportCard.vue'
import {getReport} from '@/api/api.js'

const buttonType=ref(['','','',''])
const params=new FormData()
params.append('id','AZCifg3uSZq0HOVfb5mX')

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
            status:1,
            score:12,
            IOC:'',
            tag:''
        },
        {
            name:'dggdsf.apk',
            md5:'fdafaadf',
            time:'2022-4-12:10:11:00',
            environment:'Android 11.0',
            status:0,
            score:12,
            IOC:'',
            tag:''
        }
])
const list = ref([])

const typeChange=(number)=>{
        if(buttonType.value[number]==='primary'){
                buttonType.value[number]=''
                fileForm.value.status=fileForm.value.status.filter(item=> item != number)       //过渡掉取消后的数组元素
        }
        else{
                buttonType.value[number]='primary'
                fileForm.value.status.push(number)          //将类型标志位存入表单数据中，搜索时可以根据数组中类型标志位筛选数据
        }
}
const praseType =(data)=>{
        fileForm.value.type=data           //查找文件分析类型
}
const timeType =(data)=>{
        fileForm.value.time=data           //查找文件分析类型
}
// const getKeyword =(data)=>{
//         console.log(data);
//         fileForm.value.keyword=data
// }
onMounted(()=>{
        list.value=reportList.value
        getReport(params).then(res=>{
                console.log(res);
        }).catch(err=>{

        })
})
const search = ()=>{
        list.value = reportList.value.filter(item=>{                          //keyword
                if(fileForm.value.keyword.trim()!='')   
                        return item.name.includes(fileForm.value.keyword)&&(fileForm.value.status.indexOf(item.status)!=-1)             //包含关键字
                else
                        return (fileForm.value.status.indexOf(item.status)!=-1)
        })
        console.log(fileForm.value.status);
}
</script>

<template>
        <PageContain title="历史报告">
        <el-form :inline="true"  :model="fileForm" label-width="0px" class="form">
                <el-form-item  props="status">
                        <el-button @click="typeChange(0)" :type="buttonType[0]">待分析</el-button>
                        <el-button @click="typeChange(1)" :type="buttonType[1]" >分析中</el-button>
                        <el-button @click="typeChange(2)" :type="buttonType[2]">分析完成</el-button>
                        <el-button @click="typeChange(3)" :type="buttonType[3]">分析失败</el-button>
                </el-form-item>
                <el-form-item props="time" class="formItem">
                        <el-select v-model="fileForm.time"  placeholder="近7天" @change="timeType">
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
                        <el-select v-model="fileForm.type" placeholder="文件分析" @change="praseType">
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
                        @input="getKeyword"
                        >
                        </el-input>
                </el-form-item>
                <el-form-item>
                        <el-button
                        type="primary"
                        @click="search"
                        class="searchButton"
                        >
                        搜索
                        </el-button>
                </el-form-item>
        </el-form>
        <ReportCard v-for="report in list" :key="report.name" :obj='report'></ReportCard>
        </PageContain>
</template>

<style scoped>
.wordInput{
        width: 20%;
}
.formItem{
        width: 10%;
}
.searchButton{
        text-align: center;
}
</style>
