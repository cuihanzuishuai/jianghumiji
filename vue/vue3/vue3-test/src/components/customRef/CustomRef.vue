<template>
  <input v-model="text" />
</template>

<script setup lang='ts'>
import { customRef, ref } from 'vue'
import { useDebounce } from '../../utils/useDebounce'
const text = useDebounce<string>('hello', 2000, (val) => {
  console.log(val)
})

// const text = ref(11)

</script>

<style lang='less' scoped>
</style>
