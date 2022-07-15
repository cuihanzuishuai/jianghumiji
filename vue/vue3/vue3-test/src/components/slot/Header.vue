<template>
  <slot name="header">default</slot>
  <slot :num="num"></slot>
  <slot name="footer">footer</slot>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const num = ref(1)
</script>

<style lang='less' scoped>
</style>
