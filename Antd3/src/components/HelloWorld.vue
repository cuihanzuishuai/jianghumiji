
<template>
  <cascader :width="200" v-model:options="options"></cascader>
</template>

<script setup lang="ts">
import cascader from './cascader/cascader.vue'
import { Option } from './cascader/option'
import { ref, reactive } from 'vue'

const options: Option[] = reactive([
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
])
</script>

<style scoped>
</style>
