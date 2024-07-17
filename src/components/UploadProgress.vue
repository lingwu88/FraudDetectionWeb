<script setup>
defineOptions({name:'UploadProgress'})
defineProps({
  progressPercent:Number
})
</script>

<template>
  <el-progress
    color="blue"
    :text-inside="true"
    :stroke-width="15"
    :percentage="progressPercent"
    >
  </el-progress>
</template>

<style>
</style>
