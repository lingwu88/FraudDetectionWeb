<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  GetList();
});

const SearchKey = ref('');
const SearchInput = ref('');
const FileList = ref([]);
const TypeList = ref([
  {
    value: 'md5',
    label: 'md5'
  },
  {
    value: 'name',
    label: 'app名称'
  },
  {
    value: 'package',
    label: '下载包名'
  }
]);

const GetList = () => {
  axios
    .get("https://fu.oboard.eu.org/lists/blacklist")
    .then((response) => {
      const list = response.data.replace(/NaN/g, ' "" ');
      const filelist = JSON.parse(list).slice(0, 100);
      FileList.value = filelist.map((obj) => {
        return obj.result === "black" ? { ...obj, result: "高危应用" } : obj;
      });
      console.log(FileList.value);
    })
    .catch((error) => {
      console.error(error);
    });
};

const Search = () => {
  console.log(SearchKey.value)
  console.log(SearchInput.value)
}

const Refresh = () => {

}

</script>

<template>
  <page-contain title="黑白名单列表">
    <!-- 头部搜索区域 -->
    <el-form inline>
      <el-form-item label="搜索类别：">
        <el-select  placeholder="请选择" v-model="SearchKey" style="width: 200px;">
          <el-option
            v-for="item in TypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索:">
        <el-input
          style="width: 240px"
          placeholder="Please input"
          v-model="SearchInput"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Search">搜索</el-button>
        <el-button @click="Refresh">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 渲染名单表格 -->
    <el-table :data="FileList" stripe style="width: 100%">
      <el-table-column prop="packageName" label="下载包名" width="280" />
      <el-table-column prop="apkName" label="软件名称" width="250" />
      <el-table-column prop="md5" label="md5" width="180" />
      <el-table-column prop="_id" label="apkid" width="280" />
      <el-table-column prop="result" label="类别" width="180" />
    </el-table>
  </page-contain>
</template>

<style lang="scss" scoped></style>
